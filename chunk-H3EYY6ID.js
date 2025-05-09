import{a as i}from"./chunk-52JRYXZN.js";import{a as b}from"./chunk-ADLHCVUD.js";import{a as f}from"./chunk-L7NOU4T2.js";import{a as h}from"./chunk-GVSOJUIP.js";import{a as C}from"./chunk-YVCKQBWT.js";import{a as g}from"./chunk-4XEE5PE3.js";import{a as S}from"./chunk-4LDVFWME.js";import{a as r}from"./chunk-HUUJBVXR.js";import{a as w}from"./chunk-7G56KLCZ.js";import{a as t}from"./chunk-47NSYSFY.js";import{b as c,c as u}from"./chunk-PTZYZULI.js";var l=class extends f{constructor(e){super(),this._data=e,this.sampleScale=0,this.opacityFromElevation=1,this.color=c(v),this.bandSize=.1,this.threshold=.5}get shadowCastMap(){return this._data.shadowCastTexture}},v=u(.01,0,.25,1);function z(n){let e=new w,o=e.fragment;e.include(C),e.include(g);let{visualization:m,bandsEnabled:d}=n;o.constants.add("inverseSampleValue","float",b),o.uniforms.add(new S("shadowCastMap",a=>a.shadowCastMap),new r("sampleScale",a=>a.sampleScale),new r("opacityFromElevation",a=>a.opacityFromElevation),new h("uColor",a=>a.color));let s=m===i.Gradient,p=m===i.Threshold;return s&&d?o.uniforms.add(new r("bandSize",a=>a.bandSize)):p&&o.uniforms.add(new r("threshold",a=>a.threshold)),o.main.add(t`
    float record = texture(shadowCastMap, uv).r;
    float pixelSamples = record * inverseSampleValue;

    fragColor = vec4(0.0);
    if (pixelSamples < 1.0) {
      return;
    }

    float strength = pixelSamples * sampleScale;
    ${p?t`if (strength <= threshold) return;`:""}
    ${s&&d?t`strength = ceil(strength / bandSize) * bandSize;`:""}
    fragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${s?"* strength":""});
  `),e}var j=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:l,build:z},Symbol.toStringTag,{value:"Module"}));export{l as a,z as b,j as c};
