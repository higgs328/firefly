import{g as l}from"./chunk-GYQWYHEG.js";import{i as d,j as u}from"./chunk-F5AJITOA.js";import{b as o}from"./chunk-YOFFGXOB.js";var f=new Set(["date","number"]),g=["years","months","days","hours","minutes","seconds"];function D(t,e,n,a){let r=[],i=null;return[e,n].every(m=>{let s=u(t,m);return s&&r.push(s),!!s})?r[0]===r[1]?r[0]==="field"?e===n&&(i=new o(a,"'startTime' and 'endTime' parameters cannot be identical")):i=new o(a,"Invalid combination of 'startTime' and 'endTime' parameters"):f.has(r[0])&&f.has(r[1])&&(i=new o(a,"Invalid combination of 'startTime' and 'endTime' parameters")):i=new o(a,"'startTime' and 'endTime' parameters must be one of these values: a date object, unix epoch time, name of a valid date field or <now>"),i}function c(t){let e=t.map(n=>`$feature["${n}"];`);return e.length?e.join(`
`)+`
`:""}function T(t,e,n){let a;return a=e==="number"?t:e==="date"?t.getTime():'$feature["'+t+'"]',"var "+n+" = "+a+";"}function p(t,e,n,a){let r=u(t,e),i=u(t,n),m=[T(e,r,"startTime"),T(n,i,"endTime"),`var retVal = null;

    if (startTime != null && endTime != null) {
      startTime = Date(startTime);
      endTime = Date(endTime);
      retVal = DateDiff(endTime, startTime, "${a}");
    }

    return retVal;`],s=[];return r==="field"&&s.push(e),i==="field"&&s.push(n),c(s)+m.join(`
`)}function b(t){let{layer:e,startTime:n,endTime:a}=t,r=l(e),i=t.unit||"days",m=d(r,n,a,i);return{valueExpression:p(r,n,a,i),statisticsQuery:m,histogramQuery:m}}export{g as a,D as b,b as c};
