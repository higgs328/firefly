import{a as l}from"./chunk-NOHUHVCW.js";import{a as h}from"./chunk-QAHTJVUZ.js";import{b as a}from"./chunk-YOFFGXOB.js";import{f as c}from"./chunk-VTHXE323.js";var p=class{constructor(e){this.context=e,this._debug=!1,this._precompiling=this._debug?0:1,this._cache=new l}get precompiling(){return this._precompiling}set precompiling(e){this._precompiling=e,e===0&&this.context.rctx.gl.flush()}get viewingMode(){return this.context.viewingMode}destroy(){this._cache.forAll(e=>e.destroy()),this._cache.clear()}precompile(e,t=g){++this.precompiling,this.get(e,t),--this.precompiling}get(e,t=g){let r=t.key.code,i=this._cache.get(e,r);if(i==null){if(this._precompiling===0){let o=`Uncached shader compile in ${new Error().stack}
  for configuration
${t.decode()}`,s=this._cache.getInner(e);throw s?.size&&(o+=`

  cached configurations:
`,o+=Array.from(s.values()).map(m=>t.decode(m.key)).sort().join(`

`)),console.log(o),new a(o)}i=new e(this.context,t),this._cache.set(e,r,i)}return i}reloadAll(){return c(this,null,function*(){let e=new Array;this._cache.forEach(t=>e.push(d(t))),yield Promise.all(e)})}};function d(n){return c(this,null,function*(){let e=!0;n.forEach(t=>c(this,null,function*(){yield t.reload(e),e=!1}))})}var g=new h;export{p as a,g as b};
