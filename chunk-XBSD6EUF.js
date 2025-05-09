import{m as $,n as p}from"./chunk-F5AJITOA.js";var A="no_dominant_category";function d(n){return`(${n.map(e=>`${e} >= 0`).join(" OR ")})`}function h(n){return{expression:V(n,{returnFieldName:!0,defaultValue:`'${A}'`})}}function V(n,e){let{returnFieldName:a,defaultValue:u,layer:t}=e,l=[];if(a&&u){let r=n.map(i=>`${i} <= 0`).join(" AND ");l.push(`WHEN ${r} THEN ${u}`)}for(let r of n){let i=n.reduce((m,v)=>(r!==v&&m.push(`${r} > ${v}`),m),[]).join(" AND "),s=t&&$(t,r),g=a&&`'${r}'`?`'${r}'`:s?p(r):r;l.push(`WHEN ${i} THEN ${g}`)}return`CASE ${l.join(" ")} ELSE ${u||"0"} END`}function E(n,e){let a=e.join(" + "),u={sqlExpression:`(${a})`,sqlWhere:d(e)},t={sqlExpression:`(( (${V(e,{layer:n})}) / (${a}) ) * 100)`,sqlWhere:`${d(e)} AND ((${a}) > 0)`};return{predominantCategory:{valueExpression:x(e)},size:{valueExpression:F(e),statisticsQuery:u,histogramQuery:u},opacity:{valueExpression:y(e),statisticsQuery:t,histogramQuery:t}}}function o(n){return n&&n.map(e=>`$feature["${e}"];`).join(`
`)+`
`||""}function f(n,e=!1){let a=n.map(t=>`"${t}"`);return`
  var fieldNames = [ ${a.join(", ")} ];
  var numFields = ${a.length};
  var maxValueField = null;
  var maxValue = -Infinity;
  var value, i, totalValue = null;

  for(i = 0; i < numFields; i++) {
    value = $feature[fieldNames[i]];

    if(value > 0) {
      if(value > maxValue) {
        maxValue = value;
        maxValueField = fieldNames[i];
      }
      else if (value == maxValue) {
        maxValueField = null;
      }
    }
    ${e?`
  if(value != null && value >= 0) {
    if (totalValue == null) { totalValue = 0; }
    totalValue = totalValue + value;
  }
  `:""}
  }
  `}function x(n){let e=f(n);return`
  ${o(n)}
  ${e}
  return maxValueField;
  `}function j(n){let e=f(n);return`
  ${o(n)}
  ${e}
  return maxValue;
  `}function T(n,e){let a=c(n),u=o(a),t=n.map(i=>i.label?`"${i.label}"`:`"${i.fieldName}"`),l=a.map(i=>`Number($feature["${i}"])`),r=[];return e&&e.forEach((i,s)=>{r.push(`function getValueForExpr${s}() {
  ${i.expression} 
}`),l.push(`Number(getValueForExpr${s}())`),t.push(`"${i.title||i.name}"`)}),`
  ${u}

  ${r.length?r.join(`
`):""}

  var values = [ ${l.join(", ")} ];
  var aliases = [ ${t.join(", ")} ];
  var numValues = ${l.length};
  var maxValueAlias = null;
  var maxValue = -Infinity;
  var value, i, totalValue = null;

  for(i = 0; i < numValues; i++) {
    value = values[i];

    if(value > 0) {
      if(value > maxValue) {
        maxValue = value;
        maxValueAlias = aliases[i];
      }
      else if (value == maxValue) {
        maxValueAlias = "Tie";
      }
    }
  }
  return maxValueAlias;
  `}function c(n){return n.filter(({fieldName:e})=>!!e).map(e=>e.fieldName)}function I(n){return`
  ${o(n)}
  var fieldValues = [ ${n.map(e=>`$feature["${e}"]`).join(", ")} ];
  var totalValue = Sum(fieldValues);
  var order = Reverse(Sort(fieldValues));
  return IIF(totalValue > 0, Round(((order[0] - order[1]) / totalValue) * 100, 2), null);
  `}function F(n){let e=o(n),a=n.map(u=>`"${u}"`);return`
  ${e}
  var fieldNames = [ ${a.join(", ")} ];
  var numFields = ${a.length};
  var value, i, totalValue = null;

  for(i = 0; i < numFields; i++) {
    value = $feature[fieldNames[i]];

    if(value != null && value >= 0) {
      if (totalValue == null) { totalValue = 0; }
      totalValue = totalValue + value;
    }
  }

  return totalValue;
  `}function y(n){let e=f(n,!0);return`
  ${o(n)}
  ${e}

  var strength = null;

  if (maxValueField != null && totalValue > 0) {
    strength = (maxValue / totalValue) * 100;
  }

  return strength;
  `}function C(n,e){let a=o(c(n)),u=n.map(l=>`{
    value: Number($feature["${l.fieldName}"]),
    alias: "${l.label||l.fieldName}"
    }`),t=[];return e&&e.forEach((l,r)=>{t.push(`function getValueForExpr${r}() {
  ${l.expression} 
}`),u.push(`{
          value: Number(getValueForExpr${r}()),
          alias: "${l.title||l.name}"
          }`)}),`
  ${a}

  ${t.length?t.join(`
`):""}

  var groups = [ ${u.join(", ")} ];
  var numTopValues = Count(groups);

  function getValuesArray(arr){
    var valuesArray = []
    for(var i in arr){
      valuesArray[i] = arr[i].value;
    }
    return valuesArray;
  }

  function findAliases(top5Array, fullArray){
    var aliases = [];
    var found = "";
    for(var i in top5Array){
      for(var k in fullArray){
        if(top5Array[i] == fullArray[k].value && Find(fullArray[k].alias, found) == -1){
          found += fullArray[k].alias;
          aliases[Count(aliases)] = {
            alias: fullArray[k].alias,
            value: top5Array[i]
          };
        }
      }
    }
    return aliases;
  }

  function getTopGroups(groupsArray){
    var values = getValuesArray(groupsArray);
    var top5Values = IIF(Max(values) > 0, Top(Reverse(Sort(values)),numTopValues), "no data");
    var top5Aliases = findAliases(top5Values,groupsArray);

    if(TypeOf(top5Values) == "String"){
      return top5Values;
    } else {
      var content = "";
      for(var i in top5Aliases){
        if(top5Aliases[i].value > 0){
          content += (i+1) + ". " + top5Aliases[i].alias + " (" + Text(top5Aliases[i].value, "#,###") + ")";
          content += IIF(i < numTopValues-1, TextFormatting.NewLine, "");
        }
      }
    }

    return content;
  }

  getTopGroups(groups);
  `}export{A as a,h as b,E as c,x as d,j as e,T as f,c as g,I as h,F as i,y as j,C as k};
