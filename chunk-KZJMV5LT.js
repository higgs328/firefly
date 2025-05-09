import{b as T}from"./chunk-BFNVELP4.js";import{b as d}from"./chunk-RZU6EEB3.js";import{c as m}from"./chunk-TPNSUEHH.js";import{h as c}from"./chunk-F5AJITOA.js";import{i as f}from"./chunk-QBWJMFH5.js";var H="cluster_count";function L(t,n){return t.split(`cluster_${n}_`).pop()}function g(t){if(!t)return null;let{field:n,valueExpression:i,normalizationField:e,normalizationType:o,normalizationTotal:a}=t,l=null;if(i)l=i;else if(n){let r=c({normalizationType:o,normalizationField:e,normalizationTotal:a});if(r){let p=r.toLowerCase();if(l=n.toLowerCase()+",norm:"+p,e)l+=","+e.toLowerCase();else if(p==="percent-of-total"){let s=a;m(s)&&s!==0||(s=null),l+=","+s}}}return l}function x(t){return d(t)}function v(t,n){let i=g(t);return`${n}_${i!=null?x(i):t.field}`}function S(t,n){return`cluster_${v(t,n)}`}function y(t,n){return n.getField(t)?.type}function b(t,n){let i="field"in n?n.field:null,e=i?y(i,t):null;return{field:i,fieldType:e??null,valueExpression:"valueExpression"in n?n.valueExpression:null,valueExpressionTitle:"valueExpressionTitle"in n?n.valueExpressionTitle:null,normalizationField:"normalizationField"in n?n.normalizationField:null,normalizationType:"normalizationType"in n?n.normalizationType:null,normalizationTotal:"normalizationTotal"in n?n.normalizationTotal:null}}function E(t,n){let i=n.type==="rotation"?n.rotationType:null,e=n.legendOptions?.title,o=n.field,a=o?y(o,t):null;return{field:o,fieldType:a??null,rotationType:i,valueExpression:n.valueExpression,valueExpressionTitle:n.valueExpressionTitle||n.valueExpression&&e,normalizationField:"normalizationField"in n?n.normalizationField:null,vvType:n.type}}function F(t){return t.map(n=>`{
        "value": "${String(n.value)}",
        "label": "${z(String(n.label))}"
      }`)}function z(t){return t?t.replaceAll('"','\\"'):""}function V(t,n,i){return`
  var uvInfos = [${F(t).join(", ")}];
  var predominantType = Text($feature["${n}"]);
  var label = "${z(i)}";

  for (var i = 0; i < Count(uvInfos); i++) {
    if (uvInfos[i].value == predominantType) {
      label = uvInfos[i].label;
      break;
    }
  }

  return label;
  `}function h(t,n){let i=[v(t,n)];return t.fieldType==="date"&&i.push(t.fieldType.toLowerCase()),t.rotationType&&i.push(t.rotationType.toLowerCase()),i.join("_")}function u(t,n){return{statisticHash:h(t,n),attributeInfo:t,statisticType:n}}function A(t,n,i=!0){let e=[],o=b(t,n);n.type==="class-breaks"?e.push(u(o,"avg")):n.type==="unique-value"&&e.push(u(o,"type"));let a=T(n);for(let l of a){let r=E(t,l);e.push(u(r,"avg"))}return i?f(e,(l,r)=>l.statisticHash===r.statisticHash):e}export{H as a,L as b,S as c,V as d,A as e};
