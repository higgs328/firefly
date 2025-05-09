import{x as f}from"./chunk-63B3IOWG.js";import{a as p}from"./chunk-HJJZ2AXH.js";import{a as $}from"./chunk-PMVHHMQJ.js";import{b as d}from"./chunk-YOFFGXOB.js";import{b as z}from"./chunk-2LI2GKBQ.js";var o;function L(e){if(e.minDataValue!=null&&e.maxDataValue!=null&&e.minSize!=null&&e.maxSize!=null&&typeof e.minSize=="number"&&typeof e.maxSize=="number")return[new p({value:e.minDataValue,size:e.minSize}),new p({value:e.maxDataValue,size:e.maxSize})];throw new d("create-reference-size-symbol","Invalid size variable")}function N(e){let{view:r,field:n,normalizationField:t,sizeStops:l,sizeByScaleEnabled:c}=e,{value:u,size:m}=l[0],{value:s,size:i}=l[1],a,y=0;n&&(y=`$feature["${n}"]`,a=`
      if(!HasValue($feature, "${n}")){
        return 0;
      }
      $feature["${n}"];
    `),t&&(y=`$feature["${n}"] / $feature["${t}"]`,a=`if(!HasValue($feature, "${n}") || !HasValue($feature, "${t}") || $feature["${t}"] <= 0){
        return 0;
      }
      $feature["${n}"];
      $feature["${t}"];`);let b={type:"CIMExpressionInfo",title:"Size in pixels of outer ring",expression:c?`
      ${a}
      var maxSize = ${i};
      var referenceScale = ${r.scale};
      return (maxSize * (referenceScale / $view.scale));
    `:`${a}
      return ${i}`,returnType:"Default"},g={type:"CIMExpressionInfo",title:"Size in pixels of inner ring",expression:`
        ${a}
        var value = ${y};

        var referenceScale = ${r.scale};
        var referenceScaleRatio = ${c?"(referenceScale / $view.scale)":1};
        var maxSize = ${i} * referenceScaleRatio;
        var minSize = ${m} * referenceScaleRatio;

        var minDataValue = ${u};
        var maxDataValue = ${s};

        var ratio = Constrain(( value - minDataValue ) / ( maxDataValue - minDataValue ), 0, 1);

        var innerDotSize = Constrain(maxSize * ratio, minSize, maxSize);
        return innerDotSize;
      `,returnType:"Default"};return[{type:"CIMPrimitiveOverride",primitiveName:o.OuterRing,propertyName:"Size",valueExpressionInfo:b},{type:"CIMPrimitiveOverride",primitiveName:o.InnerDot,propertyName:"Size",valueExpressionInfo:g}]}function v(e){switch(e){case"circle":return{rings:[[[8.5,.2],[7.06,.33],[5.66,.7],[4.35,1.31],[3.16,2.14],[2.14,3.16],[1.31,4.35],[.7,5.66],[.33,7.06],[.2,8.5],[.33,9.94],[.7,11.34],[1.31,12.65],[2.14,13.84],[3.16,14.86],[4.35,15.69],[5.66,16.3],[7.06,16.67],[8.5,16.8],[9.94,16.67],[11.34,16.3],[12.65,15.69],[13.84,14.86],[14.86,13.84],[15.69,12.65],[16.3,11.34],[16.67,9.94],[16.8,8.5],[16.67,7.06],[16.3,5.66],[15.69,4.35],[14.86,3.16],[13.84,2.14],[12.65,1.31],[11.34,.7],[9.94,.33],[8.5,.2]]]};case"square":return{rings:[[[.5,.5],[.5,16.5],[16.5,16.5],[16.5,.5],[.5,.5]]]};case"diamond":return{rings:[[[8.5,.5],[.2,8.5],[8.5,16.5],[16.5,8.5],[8.5,.5]]]};case"hexagon-pointy":return{rings:[[[15.86,12.75],[15.86,4.25],[8.5,0],[1.14,4.25],[1.14,12.75],[8.5,17],[15.86,12.75]]]};case"hexagon-flat":return{rings:[[[12.75,15.86],[17,8.5],[12.75,1.14],[4.25,1.14],[0,8.5],[4.25,15.86],[12.75,15.86]]]}}}function M(e){let{type:r,color:n,colorLocked:t}=e;return{type:"CIMVectorMarker",enable:!0,colorLocked:!1,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",primitiveName:o.OuterRing,frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:v(r),symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:n.toArray(),colorLocked:!!t,effects:[{type:"CIMGeometricEffectDonut",width:.75}]}]}}],scaleSymbolsProportionally:!1,respectFrame:!0,markerPlacement:{type:"CIMMarkerPlacementPolygonCenter",placePerPart:!1,method:f.OnPolygon,offsetX:0,offsetY:0,clipAtBoundary:!1},size:20}}function I(e){let{type:r,color:n}=e;return{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",primitiveName:o.InnerDot,frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:v(r),symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:n.toArray()}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,markerPlacement:{type:"CIMMarkerPlacementPolygonCenter",placePerPart:!1,method:f.OnPolygon,offsetX:0,offsetY:0,clipAtBoundary:!1},size:10}}function E(e){let{primitiveOverrides:r}=e;return new $({data:{type:"CIMSymbolReference",symbol:{type:"CIMPolygonSymbol",symbolLayers:[M(e),I(e)]},primitiveOverrides:r}})}function S(e){return e?.type==="CIMVectorMarker"?e.markerGraphics?.[0]:void 0}function x(e){return e?.symbol?.type==="CIMPolygonSymbol"?e.symbol.symbolLayers?.[0]:void 0}function P(e,r){e?.type==="CIMVectorMarker"&&r!=null&&(e.size=r)}function C(e,r){let n=S(e);n&&r!=null&&(n.geometry=v(r))}function h(e,r){let n=x(S(e));n&&r!=null&&(n.color=r.toArray())}function k(e,r,n){let t=x(S(e));t&&r!=null&&n&&(t.colorLocked=r)}function G(e,r){let{outerRingSize:n,innerDotSize:t,type:l,color:c,colorLocked:u,primitiveOverrides:m}=r,s=e.data.symbol?.type==="CIMPolygonSymbol"?e.data.symbol.symbolLayers:null;if(s?.length===2)for(let i of s){let a=i.primitiveName===o.OuterRing;P(i,a?n:t),C(i,l),h(i,c),k(i,u,a)}return n!=null&&t!=null&&(e.data.primitiveOverrides=null),m!==void 0&&(e.data.primitiveOverrides=z(m)),e}(function(e){e.OuterRing="reference-size-outer-ring",e.InnerDot="reference-size-inner-dot"})(o||(o={}));export{L as a,N as b,E as c,G as d};
