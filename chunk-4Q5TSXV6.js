import{d as c}from"./chunk-KZJMV5LT.js";import{a as f,b as m}from"./chunk-KQZGMGWR.js";import{a as s}from"./chunk-FNY6LFKI.js";import{a as i}from"./chunk-7B6U3N62.js";function b(e,n){let o=n.featureReduction;if("fields"in o){for(let t of o.fields)if(t.name.toLowerCase()===e.toLowerCase())return t}return null}function d(e){return`
  $feature["${e}"];
  var value = $feature["${e}"];
  var num = Count(Text(Round(value)));
  var label = When(
    num < 4, Text(value, "#.#"),
    num == 4, Text(value / Pow(10, 3), "#.0k"),
    num <= 6, Text(value / Pow(10, 3), "#k"),
    num == 7, Text(value / Pow(10, 6), "#.0m"),
    num > 7, Text(value / Pow(10, 6), "#m"),
    Text(value, "#,###")
  );
  return label;
  `}function T(e,n,o,t){let a=o.name;if(o.statisticType==="mode"){let u="getFieldDomain"in e?e.getFieldDomain(o.onStatisticField):null,r=null;return u?.type==="coded-value"?r=u.codedValues.map(l=>new s({value:l.code,label:l.name})):n?.type==="unique-value"&&n.field!=null&&n.field.toLowerCase()===a.toLowerCase()&&(r=(n.uniqueValueInfos??[]).map(l=>l.clone())),r?c(r,a,t):`Text($feature["${a}"])`}return d(a)}function y(e,n=!1){let o=new i({haloColor:"#373837",haloSize:"1px",color:"#f0f0f0",font:{family:"Noto Sans",size:"12px",weight:"bold"}});return new m({symbol:o,deconflictionStrategy:"none",labelPlacement:n?"always-horizontal":"center-center",labelExpressionInfo:new f({expression:e})})}export{b as a,d as b,T as c,y as d};
