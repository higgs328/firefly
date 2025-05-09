import{b as Rs}from"./chunk-SD7YCRLG.js";import{a as ut}from"./chunk-D4VZRD7Q.js";import{a as Vt}from"./chunk-UYORU626.js";import{a as Li}from"./chunk-26K2ZCXS.js";import{a as Hi}from"./chunk-U4YCXFAL.js";import{a as Gt}from"./chunk-4GIPQCCB.js";import{a as Ps}from"./chunk-7MO4BRD3.js";import{a as Ts}from"./chunk-WRDLV4VD.js";import{a as Ht}from"./chunk-CVM2NUCZ.js";import{a as Bt}from"./chunk-SYXT2WRS.js";import{b as Ss}from"./chunk-KUE5X75D.js";import{a as F,d as Dt,e as ys,f as vs,g as ct,i as Cs,j as xs,k as ws,m as As,n as Es,o as Lt,q as Is,r as Di}from"./chunk-CTPO46HK.js";import{b as bs,c as ki,d as ht,e as Ni}from"./chunk-MGFIAYXF.js";import{a as gs}from"./chunk-PKB5DBGQ.js";import{a as _s}from"./chunk-FHBFWDFD.js";import{h as us,i as ps}from"./chunk-YTAJKLRN.js";import{a as cs}from"./chunk-456M7HFK.js";import{e as hs}from"./chunk-P4JHTV62.js";import{a as fs}from"./chunk-XIZ7IH6M.js";import{a as ds}from"./chunk-IBVI7JQ7.js";import{a as Nt}from"./chunk-2DFFQEIV.js";import{D as ns,g as lt,h as kt}from"./chunk-XR5FT7TQ.js";import{a as Mi}from"./chunk-LAX5536Z.js";import{a as Ge}from"./chunk-LORHDXEB.js";import{c as as}from"./chunk-BMYVPMAK.js";import{K as ms}from"./chunk-KALOJIUA.js";import{a as dt}from"./chunk-E7AX56GD.js";import{a as ls}from"./chunk-CELWVZPW.js";import{a as Qr}from"./chunk-GHKL3NOH.js";import{a as Ve}from"./chunk-AXYQJCCX.js";import{a as _e}from"./chunk-5XCFNEYX.js";import{a as os}from"./chunk-GQL2MBZT.js";import{m as is}from"./chunk-FB4M3WPV.js";import{n as rs,o as z,p as ss,w as Oi}from"./chunk-3VRDAJCX.js";import{a as es}from"./chunk-7P44K2YD.js";import{b as at}from"./chunk-UST6HCE7.js";import{f as Jr}from"./chunk-WFKZLI6F.js";import{J as Zr,M as zi}from"./chunk-76ATOSLU.js";import{a as S,b as Fi,c as K,j as ts}from"./chunk-TG45K3WR.js";import{b as O}from"./chunk-ACP3S2CH.js";import{a as Xr}from"./chunk-T7DXJKX7.js";import{a as c}from"./chunk-QGVBCWUY.js";import{H as Mt,c as Pi}from"./chunk-MYO4NP2N.js";import{e as u}from"./chunk-NFIPKH6V.js";import{l as Q}from"./chunk-5QEXLALV.js";import{d as Wr}from"./chunk-BWO7LS2H.js";import{F as qr,K as Yr,L as Kr,a as Ot,e as Ur,l as Te,p as $r,z as Ri}from"./chunk-4PTIEWMT.js";import{b as U}from"./chunk-YOFFGXOB.js";import{g as se}from"./chunk-XRGPJ3QY.js";import{b as jr}from"./chunk-2LI2GKBQ.js";import{j as Gr,y as fe}from"./chunk-QBWJMFH5.js";import{a as V,b as Se,f as y}from"./chunk-VTHXE323.js";window.Vaadin||={};window.Vaadin.featureFlags||={};function ta(i){return i.replace(/-[a-z]/gu,t=>t[1].toUpperCase())}var oe={};function W(i,t="24.6.9"){if(Object.defineProperty(i,"version",{get(){return t}}),i.experimental){let r=typeof i.experimental=="string"?i.experimental:`${ta(i.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[r]&&!oe[r]){oe[r]=new Set,oe[r].add(i),Object.defineProperty(window.Vaadin.featureFlags,r,{get(){return oe[r].size===0},set(s){s&&oe[r].size>0&&(oe[r].forEach(o=>{customElements.define(o.is,o)}),oe[r].clear())}});return}else if(oe[r]){oe[r].add(i);return}}let e=customElements.get(i.is);if(!e)customElements.define(i.is,i);else{let r=e.version;r&&i.version&&r===i.version?console.warn(`The component ${i.is} has been loaded twice`):console.error(`Tried to define ${i.is} version ${i.version} when version ${e.version} is already in use. Something will probably break.`)}}var Bi=class extends HTMLElement{static get is(){return"vaadin-lumo-styles"}};W(Bi);var zs=i=>class extends i{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),e==="theme"&&this._set_theme(s)}};var Fs=[],Vi=new Set,ji=new Set;function Os(i){return i&&Object.prototype.hasOwnProperty.call(i,"__themes")}function ra(i){return Os(customElements.get(i))}function sa(i=[]){return[i].flat(1/0).filter(t=>t instanceof rs?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Ms(i,t){return(i||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t))}function ks(i){return i.map(t=>t.cssText).join(`
`)}var jt="vaadin-themable-mixin-style";function oa(i,t){let e=document.createElement("style");e.id=jt,e.textContent=ks(i),t.content.appendChild(e)}function na(i){if(!i.shadowRoot)return;let t=i.constructor;if(i instanceof Oi)[...i.shadowRoot.querySelectorAll("style")].forEach(e=>e.remove()),ss(i.shadowRoot,t.elementStyles);else{let e=i.shadowRoot.getElementById(jt),r=t.prototype._template;e.textContent=r.content.getElementById(jt).textContent}}function aa(i){Vi.forEach(t=>{let e=t.deref();e instanceof i?na(e):e||Vi.delete(t)})}function Ns(i){if(i.prototype instanceof Oi)i.elementStyles=i.finalizeStyles(i.styles);else{let t=i.prototype._template;t.content.getElementById(jt).textContent=ks(i.getStylesForThis())}ji.forEach(t=>{let e=customElements.get(t);e!==i&&e.prototype instanceof i&&Ns(e)})}function la(i,t){let e=i.__themes;return!e||!t?!1:e.some(r=>r.styles.some(s=>t.some(o=>o.cssText===s.cssText)))}function B(i,t,e={}){t=sa(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(i,t,e):Fs.push({themeFor:i,styles:t,include:e.include,moduleId:e.moduleId}),i&&ji.forEach(r=>{if(Ms(i,r)&&ra(r)){let s=customElements.get(r);la(s,t)?console.warn(`Registering styles that already exist for ${r}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${r}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Ns(s),aa(s)}})}function Gi(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Fs}function da(i=""){let t=0;return i.startsWith("lumo-")||i.startsWith("material-")?t=1:i.startsWith("vaadin-")&&(t=2),t}function Ds(i){let t=[];return i.include&&[].concat(i.include).forEach(e=>{let r=Gi().find(s=>s.moduleId===e);r?t.push(...Ds(r),...r.styles):console.warn(`Included moduleId ${e} not found in style registry`)},i.styles),t}function ha(i){let t=`${i}-default-theme`,e=Gi().filter(r=>r.moduleId!==t&&Ms(r.themeFor,i)).map(r=>Se(V({},r),{styles:[...Ds(r),...r.styles],includePriority:da(r.moduleId)})).sort((r,s)=>s.includePriority-r.includePriority);return e.length>0?e:Gi().filter(r=>r.moduleId===t)}var je=i=>class extends zs(i){constructor(){super(),Vi.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&ji.add(this.is),this.elementStyles)return;let e=this.prototype._template;!e||Os(this)||oa(this.getStylesForThis(),e)}static finalizeStyles(e){let r=this.getStylesForThis();return e?[...[e].flat(1/0),...r]:r}static getStylesForThis(){let e=i.__themes||[],r=Object.getPrototypeOf(this.prototype),s=(r?r.constructor.__themes:[])||[];this.__themes=[...e,...s,...ha(this.is)];let o=this.__themes.flatMap(n=>n.styles);return o.filter((n,a)=>a===o.lastIndexOf(n))}};var Ls=(i,...t)=>{let e=document.createElement("style");e.id=i,e.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",e)};var Y=(i,...t)=>{Ls(`lumo-${i}`,t)};var ca=z`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Y("color-props",ca);var ua=z`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;B("",ua,{moduleId:"lumo-color"});var pa=z`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABHAAAsAAAAAI6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuNY21hcAAAAYgAAAD+AAADymne8hxnbHlmAAACiAAAC+gAABioIzlOlWhlYWQAAA5wAAAAMAAAADZa/6SsaGhlYQAADqAAAAAdAAAAJAbpA4BobXR4AAAOwAAAABAAAAC0q+AAAGxvY2EAAA7QAAAAXAAAAFyF7o1GbWF4cAAADywAAAAfAAAAIAFMAXBuYW1lAAAPTAAAATEAAAIuUUJZCHBvc3QAABCAAAABPQAAAgfdkltveJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+xDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mEO+p/FEMUcxDANKMwIkgMABvgMMAB4nO3SV26EMABF0UsZpjG9d6Y3FpgF5StLYxMTP16WEUvHV1gGIQzQAJKgDFKIfojQ+A6rUb2e0KnXU77qPanWq/LzCXOkOVyn9RyHvWl4YkaTFu1wX5ecHn0GDBkxZsKUGXMWLFmxZsOWHXsOFBw5cebClRt3Hjx58dZ7RRn/I9cUF39Xpb691acRG2piOtUqNZ1P1TCdeJUZatNQW4baNtSO6U+ouoaam96u6hlq31AHhjo01JGhjg11YqhTQ50Z6txQF4a6NNSVoa4NdWOoW0PdGereUA+GWhjq0VBPhno21IuhXg31Zqh3Q30Y6tNQX4b6NtTSKH8BOIRpQQAAeJy1WH1sW9UVv+fG9vPz+7Bf/N6zHcd2/J04jbP6s0lap4kDpB9JWzUUCqxNgaHxpTI6hNhUNLVr17HSISb2D2iAJrWb6FTWahNQdQxRvmHamAR0qibE1E18CG3QaVNFvJ17n+3YIf1AiMQ679x77j3v3HPPPed3H7ER/OsYpw8TmQRIiuQJ8RZK+WjO1B3xaCzla21orY10a+OQ6aHTHtP0zB31mBs1GZ6RNU2uXc7oPL+xdRS9R9X1oK4fVfijdsBqvqF6vd1eLzPrYrYZ57WteF7bPDIc5+ZcJnta+S9i2Vfhs4MaMwZNQmO0Vv7gF/MZcNsCcJp4sJFSwYyAmRuFCmTBDRBUkwGqnlViyjmVBpLqaXhNpt0J5V1JOqMkuqn8WkMHvZX+iOlImiqkBiFVYDrCqINulmkwKb8ry2fkZBBn7FcTlk4ZdfpRZ9MOesLSAakKt0N3g4p2jAL8eIEOOqom/U0lgQRXUl8LtXM7HFkojUIpF0ErVBhcZC1vtyjtpsqr83a8RVcSH+ool8LgcIMjNohmVCACuDs506BdO6WIQeXjUsh1XKZGRNpp9piv3+Givoh00OU6KEV81HUHTLtN093Q+YGlE3wLHWRtMNy9XWqdLm2HKbaNsGzhu+41eswFOjE6WKSk2/1Wpt+qHeM6phbohmVmj3GvpdcVkiy9zbXfzHVqKuDB0IR2P6ZpF+D7dy6YC/9svGmBE5hKB9+X2+hh4iYRMkhGyTqyFc9APmeGQHf043tWQKHkizmwaY5AroTNVJzJDc2SFzUu92kOLsdmKu77vByb8/IjtxmhkMFISRBFISO4XMLJlj4XgGuRXtaHw2FLyHifdSOpisIhJjgkiPBAyJh7lfXTkhEadwk1mUngrOC6MazX7mASeEAPV1FyjEumBOaEDu4DP/ogRDKkiLEV1woVyMeLLKJCEM+FwdCwL4XLcRgdbfkhbzS8BNvXDKzNQiAWgOzagTXF1Eyq+Ci6/TPm/JrNY/59p1epKN4jQFGe0fx+LTMwNVCrAU2VSqnaKYzIiGmWe2Rvp9KDJhncrjLaFce8VCUbyQ1kB9lNfkJ+To6R58mfyd/Ip9ABXohDHqqwEW7A2Mij1ehntLu+h8xMtocjUJcYwoLdtYafv/1Vjy8vjLaLtBfOt3/B931Rexa24e5zstgnyqvZHs69zuhq3vFgRpQVJyN7FuE++RLSeW4xMi+t6Zeo5sIK6S5dlGVRD2hWnGoB3j7OV3lesvNLic8tOnLRSRfRdOna63VJp/1WbYs5dFZjy1AqpGICQEWKmNI+CZNoVTJ7pNop+IZkRrBHgnEmqr3TrEsfw1Gi8LqE+S1aV0SNNwXVVVvuUoU3ld6TLwmditIpvKTU50zSzWwO1h0rL8awnulwTXMYrGDT4aQ1fb4GPkyv5vMEh5Vec6yw0AMXnfcx1l/rfVZaKLDi0W4j/HfeyGZuHOf1IUGW1udizU2leXY0OmLpVDpVKJfKpZzPRKHgEBzpXAUKWYipoIeBdl3JfLZVBizEqWun1i4ZGFiyduq3DebayXsmJ+95gBG4+Urm1a2SdpKV57lP2wZyZqI+FAlfUtO+NCmgdWhMOS1gDY+jHWnBhwjBQLMEXxmLbx6t9JXTWDLtsSxgisfErqvQMbbBoywZmeyLeWe8OWNydFDxzMx4lMGRtX0xN3YFJkeW+O0bascGNwwObtjCCOzrzAVWjSwN2K9cpyn9o5cZOXMmkAuM85EbNHnJyHhfLLCnPhxJYw9eoIMkyC3l+4ZuY5ig7lW2oYUynDgg+Xrk+++Xe3zSgRYetnyuy+KbfjiB+GAAtZ8HHXmtijZfFFgrujhmOs2qkXvuSV6WqA1WLYqhPHOfsa26rklKFqbAGL2dOIlGurB6LWFVFd/KoBBaYTFYVBs93hZRFlrG5Ex4NVFIJguJVvqnBW2kNNvFGx90YUcSEvyZSMDeZjc0xYlEYy8+hHcWx9YrZOaPPyCGepP5Q34aXnGBr8d1QhSf4yjtiebZqNJfEYl4SY6dDRb8WSguLZW9ZQtBpoW4hX0QMyB2KmsYcOh8HMQxBn288oZ6BXV0GOq/ClKsC6T8g9X3OFKZNkJrYkOx2lEk+KNDy953+wGHXuGGzhGZ+uLK8FVrQkbtKBv+9EztU2sgTCNpvXMdJjqJ4tkdw+x00dPKkZ1QR254x7GQoFmvfakSnL3gCc5nREly2mN2pyTLMacMipNT7YInGU7JzlN2p9N+yinXTirOKEvPUafSWMNDmCf9pIQYaG19DSxKGqvAQ+xg60iabEm5MheUU2n+HxO4TDDbjnw6xxK8QzfhbHXq8pWVqanKysun9s6ztdt7sivGqruqYyuyPS6Hw9XehGt6q+l0dT0jvaFMZjiTuTHo7+vdtHJTb58/2ML+IxHt9/n9vv5owiWKrrbWD+sakKxhKoYzxF5f7y9INxki42QNuYrVFDPfvqxyY83xWNMV+ZxPSMWb62W+wPSCJwkDDl1WZOGW84nAEo4A7HjB/uWmOdayRFnKjazi668u/ajJlUd87aPk048Crlu4j1Oh9gxdL3Z1inNPIt2xvKNlsU4hn54Z5Y6YbTDu9hHOvkcFAb35fU6hNovKOrtQmcvbNV9/Ntfv5xf4atDWOOTX6CSHZ08xujhPs51+f9zvf1YLIGoPPKvxVh0TSLAXzzUBFiXs7GJVB7vH5/PAXznd4+vx4a95h3qI/oYIpIdMkA1kC7kVLS3GhWI5bwj1fIaVKG/Ei5gXWOjhtcJbzFthaMQrwIcIRj0ppvO6yV95icu9j/YPDNySWp7w+kOr95R1RfGpfVlDVhS/2geJ5Umv2mn0rkxBvzvgdisndJXaVF1X5z5jdHGe2n/QnYo8+b2uaMivhowgjYcLnVqnrEpQezsieyVZ6ooETbdJO6ip+cORLpes6BL82/qg8VHbo45B/vch/YQeJX28QvEANR3sQhxh+TcMCEd4l8BKF7uID7KM05tRYlIHHXY63YIi2fXQyj5XSBbcMeewKLpttkJ2Syz33YJfDdJdSYkqHbYb3VHRJgTV8c0TAy67YHeK7htwOKWax5co7Do8Pfh1tKdx1g5j9o6TZeQyMo27FuW3vbYsbY/Op3AG06DMKionRlpgHzCEeMmLU5opRrCyS670RzppZeW5p/iT3jL3lB4O63QS6dzzh8SAtOqwGJK3bv+lGJTWbr++471wsVKMRJCEK5H+cLg/Qp+IDsdqs7HhKD7hMXyyrD/Li8RjRqimHhI7HP2vSDZn9brplySb0L9dgpURSwmSiBFhilrwB8OA9gZ29NkRO/669parW9e7XZDxwvgRu+SE7zgl+xG5p/HtRqJ3cdwSZwsbwTA1WT3jEdyPN0sWxvDGy+xovIzHosnwc9LePf9tywun0fMkWaFYZbB4oovRq8VyKYUBkMVXqVhBHSylQ0wanvla3+rQ1XbR8ZzstYOo2Mf7vjk8ftcGDWxdSdXx0cAVveHg1TZFtEOn8ntBBFs11V++vuLUQ5qz+U6d/oUjpGIdNjOQhJXNqn5YCS1Yy5PofLGEs6Js2yOKe2yyOLxtaGjbt7cNIURCEDdWfaQ6lurtRYbePCuItv1iUNxvE4Vdw2zQ0LZhdv2fxjHp5uAmdlBpopHXoJGU8e6BRc0yi+PztkaHTRRrW1m2hcfFLlEUzzD+DGczjEVCg9jEQZhFcdAL2DjD+DPiSWQzjM2I89g5RXdxfECS+CIWy1hTGmFs6EIbkv/pbtkfU3aPrZ+4c2Lizn07qufym/L5TTdtyuU2/We3HPeDsjtb3bGPSSfW31aX3LQpX/d9sL7fWYpRJPBbCJavYjrFjj0rT2GWCZjf6Ytffr8beXl/HYeyGwJiIK8FLDHbfo65xGz7YCSRqCQSkbbHI5eUU5X4sjj+zrU9aHnRlEnrd7YGptd0x2Jf/RbH9PAiovadckSnEsJ661OgPFuH9B4O6e202vIN0h9xHXSJh1wRP5Vqv1uI6Wn9Gxmrwzqrii1gqhEscJanuAlGas+s2/uzvetgS72NpHZ6aHbZstmh/wPq1seEeJxjYGRgYADi31ySEvH8Nl8ZuJlfAEUYalQ3NCLo/6+ZpzLdAnI5GJhAogAiBgraeJxjYGRgYA76nwUkXzAAAfNUBkYGVKALAFb4A3EAAAB4nGNgYGBgfjG0MAAMzihlAAAAAABOAJoA6AEKASwBTgFwAZoBxAHuAhoCnALoBJoEvATWBPIFDgUqBXoF0AX+BkQGlga4BwgHagfiCGoIpAi8CVAJmAoQCiwKVgqQCtYLGAtOC4gL6AwuDFR4nGNgZGBg0GVMYRBlAAEmIOYCQgaG/2A+AwAYygG+AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjuduwzAMhH2NnTqOk+6993TfSZFY24giGZTVon36eiRFf5SAiO/A05HBWtBXEvxfGdYwQIgIQ6wjxggJxkgxwRQb2MQWtrGDXexhHwc4xBGOcYJTnOEcF7jEFa5xg1vc4R4PeMQTnvGCV2R4C1Khy9xkkkxNnPRC03s97pHLvKgTYXJNmbKfZom9o8POEffsq0Qw28+ltcPe2uHS2rGvRjPBmSwE1+GMtI6l0GSU4JEsSM4XgudpQx9sTRf3K9rAyUr0962UryKprZwPpM0jyda5uP2qrVBjxSLPCmGUplixrdpBSKqsI2oO4gF9Udq8TJVOzDSpcEHGR4vSeJdaVsSkMl26OqoKa6jttQ0rLb6a5l3YjO2QqV01YXLlNy2XDR0JlkXojbJTb/5GDX3V+kPviIPgB9AUks0AAAA=)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-drag-handle: '\\ea18';
    --lumo-icons-dropdown: '\\ea19';
    --lumo-icons-edit: '\\ea1a';
    --lumo-icons-error: '\\ea1b';
    --lumo-icons-eye: '\\ea1c';
    --lumo-icons-eye-disabled: '\\ea1d';
    --lumo-icons-menu: '\\ea1e';
    --lumo-icons-minus: '\\ea1f';
    --lumo-icons-ordered-list: '\\ea20';
    --lumo-icons-phone: '\\ea21';
    --lumo-icons-photo: '\\ea22';
    --lumo-icons-play: '\\ea23';
    --lumo-icons-plus: '\\ea24';
    --lumo-icons-redo: '\\ea25';
    --lumo-icons-reload: '\\ea26';
    --lumo-icons-resize-handle: '\\ea27';
    --lumo-icons-search: '\\ea28';
    --lumo-icons-undo: '\\ea29';
    --lumo-icons-unordered-list: '\\ea2a';
    --lumo-icons-upload: '\\ea2b';
    --lumo-icons-user: '\\ea2c';
  }
`;Y("font-icons",pa);var ma=z`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Y("sizing-props",ma);var fa=z`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Y("spacing-props",fa);var _a=z`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,sh=z`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;Y("style-props",_a);var ga=z`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,ba=z`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;B("",ba,{moduleId:"lumo-typography"});Y("typography-props",ga);B("vaadin-grid",z`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Empty state */
    [part~='empty-state'] {
      padding: var(--lumo-space-m);
      color: var(--lumo-secondary-text-color);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      --_resize-handle-width: 3px;
      width: var(--_resize-handle-width);
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    [part='resize-handle']::before {
      transform: translateX(calc(-50% + var(--_resize-handle-width) / 2));
      width: var(--lumo-size-s);
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='empty-state'] {
      padding: var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});window.JSCompiler_renameProperty=function(i,t){return i};var ya=/(url\()([^)]*)(\))/g,va=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Wt,$;function Pe(i,t){if(i&&va.test(i)||i==="//")return i;if(Wt===void 0){Wt=!1;try{let e=new URL("b","http://a");e.pathname="c%20d",Wt=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Wt)try{return new URL(i,t).href}catch{return i}return $||($=document.implementation.createHTMLDocument("temp"),$.base=$.createElement("base"),$.head.appendChild($.base),$.anchor=$.createElement("a"),$.body.appendChild($.anchor)),$.base.href=t,$.anchor.href=i,$.anchor.href||i}function pt(i,t){return i.replace(ya,function(e,r,s,o){return r+"'"+Pe(s.replace(/["']/g,""),t)+"'"+o})}function We(i){return i.substring(0,i.lastIndexOf("/")+1)}var Ca=!window.ShadyDOM||!window.ShadyDOM.inUse,Ch=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss),xh=!window.customElements.polyfillWrapFlushCallback,Hs=Ca&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{let i=new CSSStyleSheet;i.replaceSync("");let t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[i],t.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})(),Bs=window.Polymer&&window.Polymer.rootPath||We(document.baseURI||window.location.href);var mt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;var wh=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;var ft=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;var Vs=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;var Gs=window.Polymer&&window.Polymer.legacyOptimizations||!1;var js=window.Polymer&&window.Polymer.legacyWarnings||!1;var Ws=window.Polymer&&window.Polymer.syncInitialRender||!1;var Ut=window.Polymer&&window.Polymer.legacyUndefined||!1;var Us=window.Polymer&&window.Polymer.orderedComputed||!1;var xa=!0,$s=function(i){xa=i},Wi=window.Polymer&&window.Polymer.removeNestedTemplates||!1;var qs=window.Polymer&&window.Polymer.fastDomIf||!1;var Ah=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;var Eh=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;var Ys=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;var wa=0;function Ks(){}Ks.prototype.__mixinApplications;Ks.prototype.__mixinSet;var A=function(i){let t=i.__mixinApplications;t||(t=new WeakMap,i.__mixinApplications=t);let e=wa++;function r(s){let o=s.__mixinSet;if(o&&o[e])return s;let n=t,a=n.get(s);if(!a){a=i(s),n.set(s,a);let l=Object.create(a.__mixinSet||o||null);l[e]=!0,a.__mixinSet=l}return a}return r};var Ui={},Xs={};function Zs(i,t){Ui[i]=Xs[i.toLowerCase()]=t}function Qs(i){return Ui[i]||Xs[i.toLowerCase()]}function Aa(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}var ne=class extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=Qs(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,s){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){let t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Pe(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=We(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(ft&&Qs(t)!==void 0)throw Zs(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Zs(t,this),Aa(this)}}};ne.prototype.modules=Ui;customElements.define("dom-module",ne);var Ea="link[rel=import][type~=css]",Ia="include",Js="shady-unscoped";function to(i){return ne.import(i)}function eo(i){let t=i.body?i.body:i,e=pt(t.textContent,i.baseURI),r=document.createElement("style");return r.textContent=e,r}function Sa(i){let t=i.trim().split(/\s+/),e=[];for(let r=0;r<t.length;r++)e.push(...Ta(t[r]));return e}function Ta(i){let t=to(i);if(!t)return console.warn("Could not find style data in module named",i),[];if(t._styles===void 0){let e=[];e.push(...ro(t));let r=t.querySelector("template");r&&e.push(...$i(r,t.assetpath)),t._styles=e}return t._styles}function $i(i,t){if(!i._styles){let e=[],r=i.content.querySelectorAll("style");for(let s=0;s<r.length;s++){let o=r[s],n=o.getAttribute(Ia);n&&e.push(...Sa(n).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(o.textContent=pt(o.textContent,t)),e.push(o)}i._styles=e}return i._styles}function io(i){let t=to(i);return t?ro(t):[]}function ro(i){let t=[],e=i.querySelectorAll(Ea);for(let r=0;r<e.length;r++){let s=e[r];if(s.import){let o=s.import,n=s.hasAttribute(Js);if(n&&!o._unscopedStyle){let a=eo(o);a.setAttribute(Js,""),o._unscopedStyle=a}else o._style||(o._style=eo(o));t.push(n?o._unscopedStyle:o._style)}}return t}var X=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;function $t(i){return i.indexOf(".")>=0}function ge(i){let t=i.indexOf(".");return t===-1?i:i.slice(0,t)}function so(i,t){return i.indexOf(t+".")===0}function _t(i,t){return t.indexOf(i+".")===0}function gt(i,t,e){return t+e.slice(i.length)}function Ue(i){if(Array.isArray(i)){let t=[];for(let e=0;e<i.length;e++){let r=i[e].toString().split(".");for(let s=0;s<r.length;s++)t.push(r[s])}return t.join(".")}else return i}function oo(i){return Array.isArray(i)?Ue(i).split("."):i.toString().split(".")}function G(i,t,e){let r=i,s=oo(t);for(let o=0;o<s.length;o++){if(!r)return;let n=s[o];r=r[n]}return e&&(e.path=s.join(".")),r}function qi(i,t,e){let r=i,s=oo(t),o=s[s.length-1];if(s.length>1){for(let n=0;n<s.length-1;n++){let a=s[n];if(r=r[a],!r)return}r[o]=e}else r[t]=e;return s.join(".")}var qt={},Pa=/-[a-z]/g,Ra=/([A-Z])/g;function Yt(i){return qt[i]||(qt[i]=i.indexOf("-")<0?i:i.replace(Pa,t=>t[1].toUpperCase()))}function $e(i){return qt[i]||(qt[i]=i.replace(Ra,"-$1").toLowerCase())}var za=0,no=0,qe=[],Fa=0,Yi=!1,ao=document.createTextNode("");new window.MutationObserver(Oa).observe(ao,{characterData:!0});function Oa(){Yi=!1;let i=qe.length;for(let t=0;t<i;t++){let e=qe[t];if(e)try{e()}catch(r){setTimeout(()=>{throw r})}}qe.splice(0,i),no+=i}var lo={run(i){return Yi||(Yi=!0,ao.textContent=Fa++),qe.push(i),za++},cancel(i){let t=i-no;if(t>=0){if(!qe[t])throw new Error("invalid async handle: "+i);qe[t]=null}}};var Ma=lo,Kt=A(i=>{class t extends i{static createProperties(r){let s=this.prototype;for(let o in r)o in s||s._createPropertyAccessor(o)}static attributeNameForProperty(r){return r.toLowerCase()}static typeForProperty(r){}_createPropertyAccessor(r,s){this._addPropertyToAttributeMap(r),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[r]||(this.__dataHasAccessor[r]=!0,this._definePropertyAccessor(r,s))}_addPropertyToAttributeMap(r){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[r];return s||(s=this.constructor.attributeNameForProperty(r),this.__dataAttributes[s]=r),s}_definePropertyAccessor(r,s){Object.defineProperty(this,r,{get(){return this.__data[r]},set:s?function(){}:function(o){this._setPendingProperty(r,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let r in this.__dataHasAccessor)this.hasOwnProperty(r)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[r]=this[r],delete this[r])}_initializeInstanceProperties(r){Object.assign(this,r)}_setProperty(r,s){this._setPendingProperty(r,s)&&this._invalidateProperties()}_getProperty(r){return this.__data[r]}_setPendingProperty(r,s,o){let n=this.__data[r],a=this._shouldPropertyChange(r,s,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(r in this.__dataOld)&&(this.__dataOld[r]=n),this.__data[r]=s,this.__dataPending[r]=s),a}_isPropertyPending(r){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(r))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ma.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;let r=this.__data,s=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(r,s,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(r,s,o)),this.__dataCounter--}_shouldPropertiesChange(r,s,o){return!!s}_propertiesChanged(r,s,o){}_shouldPropertyChange(r,s,o){return o!==s&&(o===o||s===s)}attributeChangedCallback(r,s,o,n){s!==o&&this._attributeToProperty(r,o),super.attributeChangedCallback&&super.attributeChangedCallback(r,s,o,n)}_attributeToProperty(r,s,o){if(!this.__serializing){let n=this.__dataAttributes,a=n&&n[r]||r;this[a]=this._deserializeValue(s,o||this.constructor.typeForProperty(a))}}_propertyToAttribute(r,s,o){this.__serializing=!0,o=arguments.length<3?this[r]:o,this._valueToNodeAttribute(this,o,s||this.constructor.attributeNameForProperty(r)),this.__serializing=!1}_valueToNodeAttribute(r,s,o){let n=this._serializeValue(s);(o==="class"||o==="name"||o==="slot")&&(r=X(r)),n===void 0?r.removeAttribute(o):r.setAttribute(o,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(r){switch(typeof r){case"boolean":return r?"":void 0;default:return r?.toString()}}_deserializeValue(r,s){switch(s){case Boolean:return r!==null;case Number:return Number(r);default:return r}}}return t});var ho={},Zt=HTMLElement.prototype;for(;Zt;){let i=Object.getOwnPropertyNames(Zt);for(let t=0;t<i.length;t++)ho[i[t]]=!0;Zt=Object.getPrototypeOf(Zt)}var ka=window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1;function Na(i,t){if(!ho[t]){let e=i[t];e!==void 0&&(i.__data?i._setPendingProperty(t,e):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[t]=e))}}var co=A(i=>{let t=Kt(i);class e extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let o=0;o<s.length;o++)this.prototype._createPropertyAccessor(Yt(s[o]))}static attributeNameForProperty(s){return $e(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let o in s)this._setProperty(o,s[o])}_ensureAttribute(s,o){let n=this;n.hasAttribute(s)||this._valueToNodeAttribute(n,o,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(ka(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,o){let n;switch(o){case Object:try{n=JSON.parse(s)}catch{n=s}break;case Array:try{n=JSON.parse(s)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:n=isNaN(s)?String(s):Number(s),n=new Date(n);break;default:n=super._deserializeValue(s,o);break}return n}_definePropertyAccessor(s,o){Na(this,s),super._definePropertyAccessor(s,o)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return!!(this.__dataPending&&s in this.__dataPending)}}return e});var Da={"dom-if":!0,"dom-repeat":!0},uo=!1,po=!1;function La(){if(!uo){uo=!0;let i=document.createElement("textarea");i.placeholder="a",po=i.placeholder===i.textContent}return po}function Ha(i){La()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}var Ba=(()=>{let i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,r)=>{let s=e.getAttribute(r);if(i&&r.startsWith("on-")){t.setAttribute(r,i.createScript(s,r));return}t.setAttribute(r,s)}})();function Va(i){let t=i.getAttribute("is");if(t&&Da[t]){let e=i;for(e.removeAttribute("is"),i=e.ownerDocument.createElement(t),e.parentNode.replaceChild(i,e),i.appendChild(e);e.attributes.length;){let{name:r}=e.attributes[0];Ba(i,e,r),e.removeAttribute(r)}}return i}function mo(i,t){let e=t.parentInfo&&mo(i,t.parentInfo);if(e){for(let r=e.firstChild,s=0;r;r=r.nextSibling)if(t.parentIndex===s++)return r}else return i}function Ga(i,t,e,r){r.id&&(t[r.id]=e)}function ja(i,t,e){if(e.events&&e.events.length)for(let r=0,s=e.events,o;r<s.length&&(o=s[r]);r++)i._addMethodEventListenerToNode(t,o.name,o.value,i)}function Wa(i,t,e,r){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=r)}function Ua(i,t,e){return i=i._methodHost||i,function(s){i[e]?i[e](s,s.detail):console.warn("listener method `"+e+"` not defined")}}var fo=A(i=>{class t extends i{static _parseTemplate(r,s){if(!r._templateInfo){let o=r._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!s,o.stripWhiteSpace=s&&s.stripWhiteSpace||r.hasAttribute&&r.hasAttribute("strip-whitespace"),this._parseTemplateContent(r,o,{parent:null})}return r._templateInfo}static _parseTemplateContent(r,s,o){return this._parseTemplateNode(r.content,s,o)}static _parseTemplateNode(r,s,o){let n=!1,a=r;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,s,o)||n:a.localName==="slot"&&(s.hasInsertionPoint=!0),Ha(a),a.firstChild&&this._parseTemplateChildNodes(a,s,o),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,s,o)||n),n||o.noted}static _parseTemplateChildNodes(r,s,o){if(!(r.localName==="script"||r.localName==="style"))for(let n=r.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=Va(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let h=l;for(;h&&h.nodeType===Node.TEXT_NODE;)n.textContent+=h.textContent,l=h.nextSibling,r.removeChild(h),h=l;if(s.stripWhiteSpace&&!n.textContent.trim()){r.removeChild(n);continue}}let d={parentIndex:a,parentInfo:o};this._parseTemplateNode(n,s,d)&&(d.infoIndex=s.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(r,s,o){let n=r,a=this._parseTemplate(n,s);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),o.templateInfo=a,!0}static _parseTemplateNodeAttributes(r,s,o){let n=!1,a=Array.from(r.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(r,s,o,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(r,s,o,n,a){return n.slice(0,3)==="on-"?(r.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:a}),!0):n==="id"?(o.id=a,!0):!1}static _contentForTemplate(r){let s=r._templateInfo;return s&&s.content||r.content}_stampTemplate(r,s){r&&!r.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(r),s=s||this.constructor._parseTemplate(r);let o=s.nodeInfoList,n=s.content||r.content,a=document.importNode(n,!0);a.__noInsertionPoint=!s.hasInsertionPoint;let l=a.nodeList=new Array(o.length);a.$={};for(let d=0,h=o.length,p;d<h&&(p=o[d]);d++){let m=l[d]=mo(a,p);Ga(this,a.$,m,p),Wa(this,m,p,s),ja(this,m,p)}return a=a,a}_addMethodEventListenerToNode(r,s,o,n){n=n||r;let a=Ua(n,s,o);return this._addEventListenerToNode(r,s,a),a}_addEventListenerToNode(r,s,o){r.addEventListener(s,o)}_removeEventListenerFromNode(r,s,o){r.removeEventListener(s,o)}}return t});var Ct=0,xt=[],P={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},wo="__computeInfo",$a=/[A-Z]/;function Ki(i,t,e){let r=i[t];if(!r)r=i[t]={};else if(!i.hasOwnProperty(t)&&(r=i[t]=Object.create(i[t]),e))for(let s in r){let o=r[s],n=r[s]=Array(o.length);for(let a=0;a<o.length;a++)n[a]=o[a]}return r}function vt(i,t,e,r,s,o){if(t){let n=!1,a=Ct++;for(let l in e){let d=s?ge(l):l,h=t[d];if(h)for(let p=0,m=h.length,_;p<m&&(_=h[p]);p++)(!_.info||_.info.lastRun!==a)&&(!s||Ji(l,_.trigger))&&(_.info&&(_.info.lastRun=a),_.fn(i,l,e,r,_.info,s,o),n=!0)}return n}return!1}function qa(i,t,e,r,s,o,n,a){let l=!1,d=n?ge(r):r,h=t[d];if(h)for(let p=0,m=h.length,_;p<m&&(_=h[p]);p++)(!_.info||_.info.lastRun!==e)&&(!n||Ji(r,_.trigger))&&(_.info&&(_.info.lastRun=e),_.fn(i,r,s,o,_.info,n,a),l=!0);return l}function Ji(i,t){if(t){let e=t.name;return e==i||!!(t.structured&&so(e,i))||!!(t.wildcard&&_t(e,i))}else return!0}function _o(i,t,e,r,s){let o=typeof s.method=="string"?i[s.method]:s.method,n=s.property;o?o.call(i,i.__data[n],r[n]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Ya(i,t,e,r,s){let o=i[P.NOTIFY],n,a=Ct++;for(let d in t)t[d]&&(o&&qa(i,o,a,d,e,r,s)||s&&Ka(i,d,e))&&(n=!0);let l;n&&(l=i.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Ka(i,t,e){let r=ge(t);if(r!==t){let s=$e(r)+"-changed";return Ao(i,s,e[t],t),!0}return!1}function Ao(i,t,e,r){let s={value:e,queueProperty:!0};r&&(s.path=r),X(i).dispatchEvent(new CustomEvent(t,{detail:s}))}function Za(i,t,e,r,s,o){let a=(o?ge(t):t)!=t?t:null,l=a?G(i,a):i.__data[t];a&&l===void 0&&(l=e[t]),Ao(i,s.eventName,l,a)}function Qa(i,t,e,r,s){let o,n=i.detail,a=n&&n.path;a?(r=gt(e,r,a),o=n&&n.value):o=i.currentTarget[e],o=s?!o:o,(!t[P.READ_ONLY]||!t[P.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,o,!0,!!a)&&(!n||!n.queueProperty)&&t._invalidateProperties()}function Xa(i,t,e,r,s){let o=i.__data[t];mt&&(o=mt(o,s.attrName,"attribute",i)),i._propertyToAttribute(t,s.attrName,o)}function Ja(i,t,e,r){let s=i[P.COMPUTE];if(s)if(Us){Ct++;let o=tl(i),n=[];for(let l in t)go(l,s,n,o,r);let a;for(;a=n.shift();)Eo(i,"",t,e,a)&&go(a.methodInfo,s,n,o,r);Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),i.__dataPending=null}else{let o=t;for(;vt(i,s,o,e,r);)Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),o=i.__dataPending,i.__dataPending=null}}var el=(i,t,e)=>{let r=0,s=t.length-1,o=-1;for(;r<=s;){let n=r+s>>1,a=e.get(t[n].methodInfo)-e.get(i.methodInfo);if(a<0)r=n+1;else if(a>0)s=n-1;else{o=n;break}}o<0&&(o=s+1),t.splice(o,0,i)},go=(i,t,e,r,s)=>{let o=s?ge(i):i,n=t[o];if(n)for(let a=0;a<n.length;a++){let l=n[a];l.info.lastRun!==Ct&&(!s||Ji(i,l.trigger))&&(l.info.lastRun=Ct,el(l.info,e,r))}};function tl(i){let t=i.constructor.__orderedComputedDeps;if(!t){t=new Map;let e=i[P.COMPUTE],{counts:r,ready:s,total:o}=il(i),n;for(;n=s.shift();){t.set(n,t.size);let a=e[n];a&&a.forEach(l=>{let d=l.info.methodInfo;--o,--r[d]===0&&s.push(d)})}o!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=t}return t}function il(i){let t=i[wo],e={},r=i[P.COMPUTE],s=[],o=0;for(let n in t){let a=t[n];o+=e[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in r)t[n]||s.push(n);return{counts:e,ready:s,total:o}}function Eo(i,t,e,r,s){let o=Xi(i,t,e,r,s);if(o===xt)return!1;let n=s.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[n]?i._setPendingProperty(n,o,!0):(i[n]=o,!1)}function rl(i,t,e){let r=i.__dataLinkedPaths;if(r){let s;for(let o in r){let n=r[o];_t(o,t)?(s=gt(o,n,t),i._setPendingPropertyOrPath(s,e,!0,!0)):_t(n,t)&&(s=gt(n,o,t),i._setPendingPropertyOrPath(s,e,!0,!0))}}}function Zi(i,t,e,r,s,o,n){e.bindings=e.bindings||[];let a={kind:r,target:s,parts:o,literal:n,isCompound:o.length!==1};if(e.bindings.push(a),ll(a)){let{event:d,negate:h}=a.parts[0];a.listenerEvent=d||$e(s)+"-changed",a.listenerNegate=h}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let h=a.parts[d];h.compoundIndex=d,sl(i,t,a,h,l)}}function sl(i,t,e,r,s){if(!r.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,n={index:s,binding:e,part:r,evaluator:i};for(let a=0;a<o.length;a++){let l=o[a];typeof l=="string"&&(l=So(l),l.wildcard=!0),i._addTemplatePropertyEffect(t,l.rootProperty,{fn:ol,info:n,trigger:l})}}}function ol(i,t,e,r,s,o,n){let a=n[s.index],l=s.binding,d=s.part;if(o&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let h=e[t];t=gt(d.source,l.target,t),a._setPendingPropertyOrPath(t,h,!1,!0)&&i._enqueueClient(a)}else{let h=s.evaluator._evaluateBinding(i,d,t,e,r,o);h!==xt&&nl(i,a,l,d,h)}}function nl(i,t,e,r,s){if(s=al(t,s,e,r),mt&&(s=mt(s,e.target,e.kind,t)),e.kind=="attribute")i._valueToNodeAttribute(t,s,e.target);else{let o=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?(!t[P.READ_ONLY]||!t[P.READ_ONLY][o])&&t._setPendingProperty(o,s)&&i._enqueueClient(t):i._setUnmanagedPropertyToNode(t,o,s)}}function al(i,t,e,r){if(e.isCompound){let s=i.__dataCompoundStorage[e.target];s[r.compoundIndex]=t,t=s.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(t=t??""),t}function ll(i){return!!i.target&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function dl(i,t){let{nodeList:e,nodeInfoList:r}=t;if(r.length)for(let s=0;s<r.length;s++){let o=r[s],n=e[s],a=o.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];hl(n,d),cl(n,i,d)}n.__dataHost=i}}function hl(i,t){if(t.isCompound){let e=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),r=t.parts,s=new Array(r.length);for(let n=0;n<r.length;n++)s[n]=r[n].literal;let o=t.target;e[o]=s,t.literal&&t.kind=="property"&&(o==="className"&&(i=X(i)),i[o]=t.literal)}}function cl(i,t,e){if(e.listenerEvent){let r=e.parts[0];i.addEventListener(e.listenerEvent,function(s){Qa(s,t,e.target,r.source,r.negate)})}}function bo(i,t,e,r,s,o){o=t.static||o&&(typeof o!="object"||o[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:o};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||i._addPropertyEffect(l.rootProperty,e,{fn:r,info:n,trigger:l});return o&&i._addPropertyEffect(t.methodName,e,{fn:r,info:n}),n}function Xi(i,t,e,r,s){let o=i._methodHost||i,n=o[s.methodName];if(n){let a=i._marshalArgs(s.args,t,e);return a===xt?xt:n.apply(o,a)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}var ul=[],Io="(?:[a-zA-Z_$][\\w.:$\\-*]*)",pl="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",ml="(?:'(?:[^'\\\\]|\\\\.)*')",fl='(?:"(?:[^"\\\\]|\\\\.)*")',_l="(?:"+ml+"|"+fl+")",yo="(?:("+Io+"|"+pl+"|"+_l+")\\s*)",gl="(?:"+yo+"(?:,\\s*"+yo+")*)",bl="(?:\\(\\s*(?:"+gl+"?)\\)\\s*)",yl="("+Io+"\\s*"+bl+"?)",vl="(\\[\\[|{{)\\s*",Cl="(?:]]|}})",xl="(?:(!)\\s*)?",wl=vl+xl+yl+Cl,vo=new RegExp(wl,"g");function Co(i){let t="";for(let e=0;e<i.length;e++){let r=i[e].literal;t+=r||""}return t}function Qi(i){let t=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let r={methodName:t[1],static:!0,args:ul};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return Al(s,r)}else return r}return null}function Al(i,t){return t.args=i.map(function(e){let r=So(e);return r.literal||(t.static=!1),r},this),t}function So(i){let t=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},r=t[0];switch(r==="-"&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=ge(t),e.structured=$t(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function xo(i,t,e){let r=G(i,e);return r===void 0&&(r=t[e]),r}function To(i,t,e,r){let s={indexSplices:r};Ut&&!i._overrideLegacyUndefined&&(t.splices=s),i.notifyPath(e+".splices",s),i.notifyPath(e+".length",t.length),Ut&&!i._overrideLegacyUndefined&&(s.indexSplices=[])}function bt(i,t,e,r,s,o){To(i,t,e,[{index:r,addedCount:s,removed:o,object:t,type:"splice"}])}function El(i){return i[0].toUpperCase()+i.substring(1)}var Po=A(i=>{let t=fo(co(i));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return P}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(yt.length){let s=yt[yt.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let o=this[P.READ_ONLY];for(let n in s)(!o||!o[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=s[n])}_addPropertyEffect(s,o,n){this._createPropertyAccessor(s,o==P.READ_ONLY);let a=Ki(this,o,!0)[s];a||(a=this[o][s]=[]),a.push(n)}_removePropertyEffect(s,o,n){let a=Ki(this,o,!0)[s],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(s,o){let n=this[o];return!!(n&&n[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,P.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,P.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,P.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,P.COMPUTE)}_setPendingPropertyOrPath(s,o,n,a){if(a||ge(Array.isArray(s)?s[0]:s)!==s){if(!a){let l=G(this,s);if(s=qi(this,s,o),!s||!super._shouldPropertyChange(s,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,o,n))return rl(this,s,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,o,n);this[s]=o}return!1}_setUnmanagedPropertyToNode(s,o,n){(n!==s[o]||typeof n=="object")&&(o==="className"&&(s=X(s)),s[o]=n)}_setPendingProperty(s,o,n){let a=this.__dataHasPaths&&$t(s),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,o,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),a?this.__dataTemp[s]=o:this.__data[s]=o,this.__dataPending[s]=o,(a||this[P.NOTIFY]&&this[P.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=n),!0):!1}_setProperty(s,o){this._setPendingProperty(s,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let o=0;o<s.length;o++){let n=s[o];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,o){for(let n in s)(o||!this[P.READ_ONLY]||!this[P.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,s[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,o,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Ja(this,o,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,n,a),this._flushClients(),vt(this,this[P.REFLECT],o,n,a),vt(this,this[P.OBSERVE],o,n,a),l&&Ya(this,l,o,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,o,n){this[P.PROPAGATE]&&vt(this,this[P.PROPAGATE],s,o,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,o,n)}_runEffectsForTemplate(s,o,n,a){let l=(d,h)=>{vt(this,s.propertyEffects,d,n,h,s.nodeList);for(let p=s.firstChild;p;p=p.nextSibling)this._runEffectsForTemplate(p,d,n,h)};s.runEffects?s.runEffects(l,o,a):l(o,a)}linkPaths(s,o){s=Ue(s),o=Ue(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=o}unlinkPaths(s){s=Ue(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,o){let n={path:""},a=G(this,s,n);To(this,a,n.path,o)}get(s,o){return G(o||this,s)}set(s,o,n){n?qi(n,s,o):(!this[P.READ_ONLY]||!this[P.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,o,!0)&&this._invalidateProperties()}push(s,...o){let n={path:""},a=G(this,s,n),l=a.length,d=a.push(...o);return o.length&&bt(this,a,n.path,l,o.length,[]),d}pop(s){let o={path:""},n=G(this,s,o),a=!!n.length,l=n.pop();return a&&bt(this,n,o.path,n.length,0,[l]),l}splice(s,o,n,...a){let l={path:""},d=G(this,s,l);o<0?o=d.length-Math.floor(-o):o&&(o=Math.floor(o));let h;return arguments.length===2?h=d.splice(o):h=d.splice(o,n,...a),(a.length||h.length)&&bt(this,d,l.path,o,a.length,h),h}shift(s){let o={path:""},n=G(this,s,o),a=!!n.length,l=n.shift();return a&&bt(this,n,o.path,0,0,[l]),l}unshift(s,...o){let n={path:""},a=G(this,s,n),l=a.unshift(...o);return o.length&&bt(this,a,n.path,0,o.length,[]),l}notifyPath(s,o){let n;if(arguments.length==1){let a={path:""};o=G(this,s,a),n=a.path}else Array.isArray(s)?n=Ue(s):n=s;this._setPendingPropertyOrPath(n,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,o){this._addPropertyEffect(s,P.READ_ONLY),o&&(this["_set"+El(s)]=function(n){this._setProperty(s,n)})}_createPropertyObserver(s,o,n){let a={property:s,method:o,dynamicFn:!!n};this._addPropertyEffect(s,P.OBSERVE,{fn:_o,info:a,trigger:{name:s}}),n&&this._addPropertyEffect(o,P.OBSERVE,{fn:_o,info:a,trigger:{name:o}})}_createMethodObserver(s,o){let n=Qi(s);if(!n)throw new Error("Malformed observer expression '"+s+"'");bo(this,n,P.OBSERVE,Xi,null,o)}_createNotifyingProperty(s){this._addPropertyEffect(s,P.NOTIFY,{fn:Za,info:{eventName:$e(s)+"-changed",property:s}})}_createReflectedProperty(s){let o=this.constructor.attributeNameForProperty(s);o[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,P.REFLECT,{fn:Xa,info:{attrName:o}})}_createComputedProperty(s,o,n){let a=Qi(o);if(!a)throw new Error("Malformed computed expression '"+o+"'");let l=bo(this,a,P.COMPUTE,Eo,s,n);Ki(this,wo)[s]=l}_marshalArgs(s,o,n){let a=this.__data,l=[];for(let d=0,h=s.length;d<h;d++){let{name:p,structured:m,wildcard:_,value:b,literal:C}=s[d];if(!C)if(_){let w=_t(p,o),T=xo(a,n,w?o:p);b={path:w?o:p,value:T,base:w?G(a,p):T}}else b=m?xo(a,n,p):a[p];if(Ut&&!this._overrideLegacyUndefined&&b===void 0&&s.length>1)return xt;l[d]=b}return l}static addPropertyEffect(s,o,n){this.prototype._addPropertyEffect(s,o,n)}static createPropertyObserver(s,o,n){this.prototype._createPropertyObserver(s,o,n)}static createMethodObserver(s,o){this.prototype._createMethodObserver(s,o)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,o){this.prototype._createReadOnlyProperty(s,o)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,o,n){this.prototype._createComputedProperty(s,o,n)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,o){let n=this.constructor._parseTemplate(s),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(o)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{let l=s._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(s,o,n){let a=s.hostProps=s.hostProps||{};a[o]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[o]=l[o]||[]).push(n)}_stampTemplate(s,o){o=o||this._bindTemplate(s,!0),yt.push(this);let n=super._stampTemplate(s,o);if(yt.pop(),o.nodeList=n.nodeList,!o.wasPreBound){let a=o.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=o,dl(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(s){let o=s.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=o;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),o.nextSibling=o.previousSibling=null;let d=o.childNodes;for(let h=0;h<d.length;h++){let p=d[h];X(X(p).parentNode).removeChild(p)}}static _parseTemplateNode(s,o,n){let a=t._parseTemplateNode.call(this,s,o,n);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,o);l&&(s.textContent=Co(l)||" ",Zi(this,o,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(s,o,n,a,l){let d=this._parseBindings(l,o);if(d){let h=a,p="property";$a.test(a)?p="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),p="attribute");let m=Co(d);return m&&p=="attribute"&&(a=="class"&&s.hasAttribute("class")&&(m+=" "+s.getAttribute(a)),s.setAttribute(a,m)),p=="attribute"&&h=="disable-upgrade$"&&s.setAttribute(a,""),s.localName==="input"&&h==="value"&&s.setAttribute(h,""),s.removeAttribute(h),p==="property"&&(a=Yt(a)),Zi(this,o,n,p,a,d,m),!0}else return t._parseTemplateNodeAttribute.call(this,s,o,n,a,l)}static _parseTemplateNestedTemplate(s,o,n){let a=t._parseTemplateNestedTemplate.call(this,s,o,n),l=s.parentNode,d=n.templateInfo,h=l.localName==="dom-if",p=l.localName==="dom-repeat";Wi&&(h||p)&&(l.removeChild(s),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let m=d.hostProps;if(qs&&h)m&&(o.hostProps=Object.assign(o.hostProps||{},m),Wi||(n.parentInfo.noted=!0));else{let _="{";for(let b in m){let C=[{mode:_,source:b,dependencies:[b],hostProp:!0}];Zi(this,o,n,"property","_host_"+b,C)}}return a}static _parseBindings(s,o){let n=[],a=0,l;for(;(l=vo.exec(s))!==null;){l.index>a&&n.push({literal:s.slice(a,l.index)});let d=l[1][0],h=!!l[2],p=l[3].trim(),m=!1,_="",b=-1;d=="{"&&(b=p.indexOf("::"))>0&&(_=p.substring(b+2),p=p.substring(0,b),m=!0);let C=Qi(p),w=[];if(C){let{args:T,methodName:v}=C;for(let k=0;k<T.length;k++){let R=T[k];R.literal||w.push(R)}let M=o.dynamicFns;(M&&M[v]||C.static)&&(w.push(v),C.dynamicFn=!0)}else w.push(p);n.push({source:p,mode:d,negate:h,customEvent:m,signature:C,dependencies:w,event:_}),a=vo.lastIndex}if(a&&a<s.length){let d=s.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(s,o,n,a,l,d){let h;return o.signature?h=Xi(s,n,a,l,o.signature):n!=o.source?h=G(s,o.source):d&&$t(n)?h=G(s,n):h=s.__data[n],o.negate&&(h=!h),h}}return e}),yt=[];var Il=0;function Ro(){Il++}var Sl=[];function zo(i){Sl.push(i)}function Tl(i){let t={};for(let e in i){let r=i[e];t[e]=typeof r=="function"?{type:r}:r}return t}var Fo=A(i=>{let t=Kt(i);function e(o){let n=Object.getPrototypeOf(o);return n.prototype instanceof s?n:null}function r(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let n=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){let a=o.properties;a&&(n=Tl(a))}o.__ownProperties=n}return o.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){zo(this.prototype);let n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){let n=e(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let n=r(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){let n=e(this);this.__properties=Object.assign({},n&&n._properties,r(this))}return this.__properties}static typeForProperty(n){let a=this._properties[n];return a&&a.type}_initializeProperties(){Ro(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});var Mo="3.5.2",Oo=window.ShadyCSS&&window.ShadyCSS.cssBuild,ko=A(i=>{let t=Fo(Po(i));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let h in d){let p=d[h];"value"in p&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[h]=p)}}return l.__propertyDefaults}function r(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,d,h,p){h.computed&&(h.readOnly=!0),h.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,h.computed,p)),h.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!h.computed):h.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),h.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):h.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),h.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):h.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),h.observer&&l._createPropertyObserver(d,h.observer,p[h.observer]),l._addPropertyToAttributeMap(d)}function o(l,d,h,p){if(!Oo){let m=d.content.querySelectorAll("style"),_=$i(d),b=io(h),C=d.content.firstElementChild;for(let T=0;T<b.length;T++){let v=b[T];v.textContent=l._processStyleText(v.textContent,p),d.content.insertBefore(v,C)}let w=0;for(let T=0;T<_.length;T++){let v=_[T],M=m[w];M!==v?(v=v.cloneNode(!0),M.parentNode.insertBefore(v,M)):w++,v.textContent=l._processStyleText(v.textContent,p)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,h),Ys&&Oo&&Hs){let m=d.content.querySelectorAll("style");if(m){let _="";Array.from(m).forEach(b=>{_+=b.textContent,b.parentNode.removeChild(b)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(_)}}}function n(l){let d=null;if(l&&(!ft||Vs)&&(d=ne.import(l,"template"),ft&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return Mo}static _finalizeClass(){t._finalizeClass.call(this);let d=r(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):Gs||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let h in d)s(this.prototype,h,d[h],d)}static createObservers(d,h){let p=this.prototype;for(let m=0;m<d.length;m++)p._createMethodObserver(d[m],h)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){let d=this.importMeta;if(d)this._importPath=We(d.url);else{let h=ne.import(this.is);this._importPath=h&&h.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Bs,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(d)for(let h in d){let p=d[h];if(this._canApplyPropertyDefault(h)){let m=typeof p.value=="function"?p.value.call(this):p.value;this._hasAccessor(h)?this._setPendingProperty(h,m,!0):this[h]=m}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,h){return pt(d,h)}static _finalizeTemplate(d){let h=this.prototype._template;if(h&&!h.__polymerFinalized){h.__polymerFinalized=!0;let p=this.importPath,m=p?Pe(p):"";o(this,h,d,m),this.prototype._bindTemplate(h)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){let h=X(this);if(h.attachShadow)return d?(h.shadowRoot||(h.attachShadow({mode:"open",shadyUpgradeFragment:d}),h.shadowRoot.appendChild(d),this.constructor._styleSheet&&(h.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ws&&window.ShadyDOM&&window.ShadyDOM.flushInitial(h.shadowRoot),h.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,h){return!h&&this.importPath&&(h=Pe(this.importPath)),Pe(d,h)}static _parseTemplateContent(d,h,p){return h.dynamicFns=h.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,h,p)}static _addTemplatePropertyEffect(d,h,p){return js&&!(h in this._properties)&&!(p.info.part.signature&&p.info.part.signature.static)&&!p.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${h}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,h,p)}}return a});var No=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i}),Qt=class{constructor(t,e){Lo(t,e);let r=e.reduce((s,o,n)=>s+Do(o)+t[n+1],t[0]);this.value=r.toString()}toString(){return this.value}};function Do(i){if(i instanceof Qt)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function Pl(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof Qt)return Do(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}var Re=function(t,...e){Lo(t,e);let r=document.createElement("template"),s=e.reduce((o,n,a)=>o+Pl(n)+t[a+1],t[0]);return No&&(s=No.createHTML(s)),r.innerHTML=s,r},Lo=(i,t)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||t.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")};var J=ko(HTMLElement);var Ho=0,Bo=0,Ye=[],er=!1;function Rl(){er=!1;let i=Ye.length;for(let t=0;t<i;t++){let e=Ye[t];if(e)try{e()}catch(r){setTimeout(()=>{throw r})}}Ye.splice(0,i),Bo+=i}var q={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}};var L={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}};var Xt={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}};var H={run(i){er||(er=!0,queueMicrotask(()=>Rl())),Ye.push(i);let t=Ho;return Ho+=1,t},cancel(i){let t=i-Bo;if(t>=0){if(!Ye[t])throw new Error(`invalid async handle: ${i}`);Ye[t]=null}}};var wt=new Set,x=class i{static debounce(t,e,r){return t instanceof i?t._cancelAsync():t=new i,t.setConfig(e,r),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,wt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),wt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function Jt(i){wt.add(i)}function zl(){let i=!!wt.size;return wt.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),i}var ze=()=>{let i;do i=zl();while(i)};var ae=[];function tr(i,t,e=i.getAttribute("dir")){t?i.setAttribute("dir",t):e!=null&&i.removeAttribute("dir")}function ir(){return document.documentElement.getAttribute("dir")}function Fl(){let i=ir();ae.forEach(t=>{tr(t,i)})}var Ol=new MutationObserver(Fl);Ol.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var Ke=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),tr(this,ir(),null))}attributeChangedCallback(e,r,s){if(super.attributeChangedCallback(e,r,s),e!=="dir")return;let o=ir(),n=s===o&&ae.indexOf(this)===-1,a=!s&&r&&ae.indexOf(this)===-1;n||a?(this.__subscribe(),tr(this,o,s)):s!==o&&r===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=ae.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,r,s){s==="dir"&&r===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,r,s)}_attributeToProperty(e,r,s){e==="dir"&&!r?this.dir="":super._attributeToProperty(e,r,s)}__subscribe(){ae.includes(this)||ae.push(this)}__unsubscribe(){ae.includes(this)&&ae.splice(ae.indexOf(this),1)}};function Ze(i,t){return i.split(".").reduce((e,r)=>e?e[r]:void 0,t)}function ei(i){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(i);return}i.querySelector("template")&&console.warn(`WARNING: <template> inside <${i.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}function rr(i,t){return t?t.closest(i)||rr(i,t.getRootNode().host):null}function ti(i){return i?new Set(i.split(" ")):new Set}function At(i){return i?[...i].join(" "):""}function Fe(i,t,e){let r=ti(i.getAttribute(t));r.add(e),i.setAttribute(t,At(r))}function Qe(i,t,e){let r=ti(i.getAttribute(t));if(r.delete(e),r.size===0){i.removeAttribute(t);return}i.setAttribute(t,At(r))}function Vo(i){return i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""}function be(i){return i.__cells||Array.from(i.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function D(i,t){[...i.children].forEach(t)}function te(i,t){be(i).forEach(t),i.__detailsCell&&t(i.__detailsCell)}function ii(i,t,e){let r=1;i.forEach(s=>{r%10===0&&(r+=1),s._order=e+r*t,r+=1})}function Et(i,t,e){switch(typeof e){case"boolean":i.toggleAttribute(t,e);break;case"string":i.setAttribute(t,e);break;default:i.removeAttribute(t);break}}function le(i,t,e){t||t===""?Fe(i,"part",e):Qe(i,"part",e)}function ee(i,t,e){i.forEach(r=>{le(r,e,t)})}function ye(i,t){let e=be(i);Object.entries(t).forEach(([r,s])=>{Et(i,r,s);let o=`${r}-row`;le(i,s,o),ee(e,`${o}-cell`,s)})}function sr(i,t){let e=be(i);Object.entries(t).forEach(([r,s])=>{let o=i.getAttribute(r);if(Et(i,r,s),o){let n=`${r}-${o}-row`;le(i,!1,n),ee(e,`${n}-cell`,!1)}if(s){let n=`${r}-${s}-row`;le(i,s,n),ee(e,`${n}-cell`,s)}})}function he(i,t,e,r,s){Et(i,t,e),s&&le(i,!1,s),le(i,e,r||`${t}-cell`)}var de=class i{constructor(t,e){this.__host=t,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(t,{childList:!0}),this.__initialCallDebouncer=x.debounce(this.__initialCallDebouncer,H,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(t){this.__currentSlots.forEach(e=>{t?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){let t=!this.__currentColumns;this.__currentColumns||=[];let e=i.getColumns(this.__host),r=e.filter(a=>!this.__currentColumns.includes(a)),s=this.__currentColumns.filter(a=>!e.includes(a)),o=this.__currentColumns.some((a,l)=>a!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(a=>a instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(t||r.length||s.length||o)&&this.__callback(r,s)}static __isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}static getColumns(t){let e=[],r=t._isColumnElement||i.__isColumnElement;return[...t.children].forEach(s=>{r(s)?e.push(s):s instanceof HTMLSlotElement&&[...s.assignedElements({flatten:!0})].filter(o=>r(o)).forEach(o=>e.push(o))}),e}};var ri=i=>class extends i{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;let e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),ei(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(r=>{r.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(r=>{r.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(r=>{r.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(r=>{he(r,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(r=>{this._grid&&r.parentElement===this._grid.$.sizer||he(r,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(r=>{he(r,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(r=>{this._grid&&r.parentElement===this._grid.$.sizer||he(r,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,r){r&&r.forEach(s=>{s.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,r=>r.toUpperCase())}_reorderStatusChanged(e){let r=this.__previousReorderStatus,s=r?`reorder-${r}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(n=>{he(n,"reorder-status",e,o,s)}),this.__previousReorderStatus=e}_resizableChanged(e,r){e===void 0||r===void 0||r&&[r].concat(this._emptyCells).forEach(s=>{if(s){let o=s.querySelector('[part~="resize-handle"]');if(o&&s.removeChild(o),e){let n=document.createElement("div");n.setAttribute("part","resize-handle"),s.appendChild(n)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let r;getComputedStyle(this._grid).direction==="ltr"?e==="start"?r="left":e==="end"&&(r="right"):e==="start"?r="right":e==="end"&&(r="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=r)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(r=>{r._content.parentNode&&r._content.parentNode.removeChild(r._content)}),this._grid._debouncerHiddenChanged=x.debounce(this._grid._debouncerHiddenChanged,L,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,r,s){let o=s&&s.item&&!r.parentElement.hidden;if(!(o||e===this._headerRenderer||e===this._footerRenderer))return;let a=[r._content,this];o&&a.push(s),e.apply(this,a)}__renderCellsContent(e,r){this.hidden||!this._grid||r.forEach(s=>{if(!s.parentElement)return;let o=this._grid.__getRowModel(s.parentElement);e&&(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,this._runRenderer(e,s,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,r){!r||!e||(this.__renderCellsContent(e,[r]),this._grid&&r.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(r.parentElement))}_onHeaderRendererOrBindingChanged(e,r,...s){this._renderHeaderCellContent(e,r)}__headerFooterPartNameChanged(e,r,s,o){[{cell:e,partName:s},{cell:r,partName:o}].forEach(({cell:n,partName:a})=>{if(n){let l=n.__customParts||[];n.part.remove(...l),n.__customParts=a?a.trim().split(" "):[],n.part.add(...n.__customParts)}})}_renderBodyCellsContent(e,r){!r||!e||this.__renderCellsContent(e,r)}_onRendererOrBindingChanged(e,r,...s){this._renderBodyCellsContent(e,r)}_renderFooterCellContent(e,r){!r||!e||(this.__renderCellsContent(e,[r]),this._grid&&r.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(r.parentElement))}_onFooterRendererOrBindingChanged(e,r){this._renderFooterCellContent(e,r)}__setTextContent(e,r){e.textContent!==r&&(e.textContent=r)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,r,{item:s}){this.path&&this.__setTextContent(e,Ze(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,r){return e||(r!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},Go=i=>class extends ri(Ke(i)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};var It=class extends Go(J){static get is(){return"vaadin-grid-column"}};W(It);var Xe=A(i=>typeof i.prototype.addController=="function"?i:class extends i{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}});var Ml=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,si=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function kl(){function i(){return!0}return jo(i)}function Nl(){try{return Dl()?!0:Ll()?si?!Hl():!kl():!1}catch{return!1}}function Dl(){return localStorage.getItem("vaadin.developmentmode.force")}function Ll(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Hl(){return!!(si&&Object.keys(si).map(t=>si[t]).filter(t=>t.productionMode).length>0)}function jo(i,t){if(typeof i!="function")return;let e=Ml.exec(i.toString());if(e)try{i=new Function(e[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return i(t)}window.Vaadin=window.Vaadin||{};var or=function(i,t){if(window.Vaadin.developmentMode)return jo(i,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Nl());function Bl(){}var Wo=function(){if(typeof or=="function")return or(Bl)};$s(!1);window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Wo()};var nr,Uo=new Set,oi=i=>class extends Ke(i){static finalize(){super.finalize();let{is:e}=this;e&&!Uo.has(e)&&(window.Vaadin.registrations.push(this),Uo.add(e),window.Vaadin.developmentModeCallback&&(nr=x.debounce(nr,Xt,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Jt(nr)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};var ar=!1;window.addEventListener("keydown",()=>{ar=!0},{capture:!0});window.addEventListener("mousedown",()=>{ar=!1},{capture:!0});function St(){return ar}function Vl(i){let t=i.style;if(t.visibility==="hidden"||t.display==="none")return!0;let e=window.getComputedStyle(i);return e.visibility==="hidden"||e.display==="none"}function ce(i){return i.offsetParent===null&&i.clientWidth===0&&i.clientHeight===0?!0:Vl(i)}function lr(i){return i.matches('[tabindex="-1"]')?!1:i.matches("input, select, textarea, button, object")?i.matches(":not([disabled])"):i.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}var Oe=A(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});var Tt=i=>class extends Oe(i){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,r){super._disabledChanged(e,r),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):r&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};var ni=i=>i.test(navigator.userAgent),dr=i=>i.test(navigator.platform),Gl=i=>i.test(navigator.vendor),hr=ni(/Android/u),ai=ni(/Chrome/u)&&Gl(/Google Inc/u),$o=ni(/Firefox/u),jl=dr(/^iPad/u)||dr(/^Mac/u)&&navigator.maxTouchPoints>1,Wl=dr(/^iPhone/u),cr=Wl||jl,Je=ni(/^((?!chrome|android).)*safari/iu),li=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})(),qo=window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;var Me=class{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){let t=this.slot.assignedNodes({flatten:!0}),e=[],r=[],s=[];t.length&&(e=t.filter(o=>!this._storedNodes.includes(o))),this._storedNodes.length&&this._storedNodes.forEach((o,n)=>{let a=t.indexOf(o);a===-1?r.push(o):a!==n&&s.push(o)}),(e.length||r.length||s.length)&&this.callback({addedNodes:e,currentNodes:t,movedNodes:s,removedNodes:r}),this._storedNodes=t}};var Ul=0;function Yo(){return Ul++}var ve=class extends EventTarget{static generateId(t,e="default"){return`${e}-${t.localName}-${Yo()}`}constructor(t,e,r,s={}){super();let{initializer:o,multiple:n,observe:a,useUniqueId:l,uniqueIdPrefix:d}=s;this.host=t,this.slotName=e,this.tagName=r,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=o,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,d||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){let t=this.getSlotChildren();if(t.length===0){let e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){let{host:t,slotName:e,tagName:r}=this,s=this.defaultNode;return!s&&r&&(s=document.createElement(r),s instanceof Element&&(e!==""&&s.setAttribute("slot",e),this.defaultNode=s)),s&&(this.node=s,t.appendChild(s)),s}getSlotChildren(){let{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){let{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){let{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Me(r,({addedNodes:s,removedNodes:o})=>{let n=this.multiple?this.nodes:[this.node],a=s.filter(l=>!Vo(l)&&!n.includes(l));o.length&&(this.nodes=n.filter(l=>!o.includes(l)),o.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}};var et=class extends ve{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;let e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;let e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;let e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;let e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;let e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;let e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;let e=this.node;e&&(e.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}};var Ko=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),$l=Ko&&Ko[1]>=8,Zo=3,Qo={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){let i=this._virtualCount;return Math.max(0,i-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(i){i=this._clamp(i,0,this._maxVirtualStart),this._virtualStartVal=i},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(i){i%=this._physicalCount,i<0&&(i=this._physicalCount+i),this._physicalStartVal=i},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(i){this._physicalCountVal=i},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let i=this._firstVisibleIndexVal;if(i==null){let t=this._physicalTop+this._scrollOffset;i=this._iterateItems((e,r)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return r})||0,this._firstVisibleIndexVal=i}return i},get lastVisibleIndex(){let i=this._lastVisibleIndexVal;if(i==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,r)=>{t<this._scrollBottom&&(i=r),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=i}return i},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){let i=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=i-this._scrollPosition,e=t>=0;if(this._scrollPosition=i,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;let r=Math.round(t/this._physicalAverage);this._virtualStart+=r,this._physicalStart+=r,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){let r=this._getReusables(e);e?(this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length):(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length),this._update(r.indexes,e?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),H)}},_getReusables(i){let t,e,r,s=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount,d=this._physicalTop+this._scrollOffset,h=this._physicalBottom+this._scrollOffset,p=this._scrollPosition,m=this._scrollBottom;for(i?(t=this._physicalStart,e=p-d):(t=this._physicalEnd,e=h-m);r=this._getPhysicalSizeIncrement(t),e-=r,!(s.length>=l||e<=o);)if(i){if(a+s.length+1>=this._virtualCount||d+r>=p-this._scrollOffset)break;s.push(t),d+=r,t=(t+1)%l}else{if(n-s.length<=0||d+this._physicalSize-r<=m)break;s.push(t),d-=r,t=t===0?l-1:t-1}return{indexes:s,physicalTop:d-this._scrollOffset}},_update(i,t){if(!(i&&i.length===0||this._physicalCount===0)){if(this._assignModels(i),this._updateMetrics(i),t)for(;t.length;){let e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(i){let e=this._clamp(this._physicalCount+i,Zo,this._virtualCount-this._virtualStart)-this._physicalCount,r=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){let s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-s)/e,r=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||r===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),Xt):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),H))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){let i=this._getReusables(!0);this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length,this._update(i.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Zo))},_itemsChanged(i){i.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,L))},_iterateItems(i,t){let e,r,s,o;if(arguments.length===2&&t){for(o=0;o<t.length;o++)if(e=t[o],r=this._computeVidx(e),(s=i.call(this,e,r))!=null)return s}else{for(e=this._physicalStart,r=this._virtualStart;e<this._physicalCount;e++,r++)if((s=i.call(this,e,r))!=null)return s;for(e=0;e<this._physicalStart;e++,r++)if((s=i.call(this,e,r))!=null)return s}},_computeVidx(i){return i>=this._physicalStart?this._virtualStart+(i-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+i},_positionItems(){this._adjustScrollPosition();let i=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${i}px`,0,this._physicalItems[t]),i+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(i){return this._physicalSizes[i]},_adjustScrollPosition(){let i=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(i!==0){this._physicalTop-=i;let t=this._scrollPosition;!$l&&t>0&&this._resetScrollPosition(t-i)}},_resetScrollPosition(i){this.scrollTarget&&i>=0&&(this._scrollTop=i,this._scrollPosition=this._scrollTop)},_updateScrollerSize(i){let t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(i||this._scrollHeight===0||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(i){if(typeof i!="number"||i<0||i>this.items.length-1||(ze(),this._physicalCount===0))return;i=this._clamp(i,0,this._virtualCount-1),(!this._isIndexRendered(i)||i>=this._maxVirtualStart)&&(this._virtualStart=i-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,r=0,s=this._hiddenContentSize;for(;e<i&&r<=s;)r+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},L)},_isIndexRendered(i){return i>=this._virtualStart&&i<=this._virtualEnd},_getPhysicalIndex(i){return(this._physicalStart+(i-this._virtualStart))%this._physicalCount},_clamp(i,t,e){return Math.min(e,Math.max(t,i))},_debounce(i,t,e){this._debouncers||(this._debouncers={}),this._debouncers[i]=x.debounce(this._debouncers[i],e,t.bind(this)),Jt(this._debouncers[i])}};var ql=1e5,ur=1e3,Pt=class{constructor({createElements:t,updateElement:e,scrollTarget:r,scrollContainer:s,elementsContainer:o,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=r,this.scrollContainer=s,this.elementsContainer=o||s,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),new ResizeObserver(([{contentRect:l}])=>{let d=l.width===0&&l.height===0;!d&&this.__scrollTargetHidden&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition),this.__scrollTargetHidden=d}).observe(this.scrollTarget),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",l=>this.__onWheel(l)),this.scrollTarget.addEventListener("virtualizer-element-focused",l=>this.__onElementFocused(l)),this.elementsContainer.addEventListener("focusin",()=>{this.scrollTarget.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this.__getFocusedElement()}}))}),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(t=>t.__virtualizerPlaceholder)}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),t=this._clamp(t,0,this.size-1);let e=this.__getVisibleElements().length,r=Math.floor(t/this.size*this._virtualCount);this._virtualCount-r<e?(r=this._virtualCount-(this.size-t),this._vidxOffset=this._maxVirtualIndexOffset):r<e?t<ur?(r=t,this._vidxOffset=0):(r=ur,this._vidxOffset=t-r):this._vidxOffset=t-r,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(r),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=t)}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),ze(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}hostConnected(){this.scrollTarget.offsetParent&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition)}update(t=0,e=this.size-1){let r=[];this.__getVisibleElements().forEach(s=>{s.__virtualIndex>=t&&s.__virtualIndex<=e&&(this.__updateElement(s,s.__virtualIndex,!0),r.push(s))}),this.__afterElementsUpdated(r)}_updateMetrics(t){ze();let e=0,r=0,s=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((n,a)=>{r+=this._physicalSizes[n],this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},t),this._physicalSize=this._physicalSize+e-r,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((o*s+e)/this._physicalAverageCount))}__getBorderBoxHeight(t){let e=getComputedStyle(t),r=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return r;let s=parseFloat(e.paddingBottom)||0,o=parseFloat(e.paddingTop)||0,n=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return r+s+o+n+a}__updateElement(t,e,r){t.__virtualizerPlaceholder&&(t.style.paddingTop="",t.style.opacity="",t.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||r)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e)}__afterElementsUpdated(t){t.forEach(e=>{let r=e.offsetHeight;if(r===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.style.opacity="0",e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=x.debounce(this.__placeholderClearDebouncer,L,()=>this._resizeHandler());else{this.__elementHeightQueue.push(r),this.__elementHeightQueue.shift();let s=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(s.reduce((o,n)=>o+n,0)/s.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(t){let e=this.__getVisibleElements().find(r=>r.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,r;if(t>0&&(e=this.adjustedFirstVisibleIndex,r=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),ze(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);let s=this.__getIndexScrollOffset(e);r!==void 0&&s!==void 0&&(this._scrollTop+=r-s)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),ze(),this._debounce("_update",this._update,H)}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,ql)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){let t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=t.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){let e=this.createElements(t),r=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",r.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(r),e}_assignModels(t){let e=[];this._iterateItems((r,s)=>{let o=this._physicalItems[r];o.hidden=s>=this.size,o.hidden?delete o.__lastUpdatedIndex:(o.__virtualIndex=s+(this._vidxOffset||0),this.__updateElement(o,o.__virtualIndex),e.push(o))},t),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,r,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}__getFocusedElement(t=this.__getVisibleElements()){return t.find(e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement))}__nextFocusableSiblingMissing(t,e){return e.indexOf(t)===e.length-1&&this.size>t.__virtualIndex+1}__previousFocusableSiblingMissing(t,e){return e.indexOf(t)===0&&t.__virtualIndex>0}__onElementFocused(t){if(!this.reorderElements)return;let e=t.detail.element;if(!e)return;let r=this.__getVisibleElements();(this.__previousFocusableSiblingMissing(e,r)||this.__nextFocusableSiblingMissing(e,r))&&this.flush();let s=this.__getVisibleElements();this.__nextFocusableSiblingMissing(e,s)?(this._scrollTop+=Math.ceil(e.getBoundingClientRect().bottom)-Math.floor(this.scrollTarget.getBoundingClientRect().bottom-1),this.flush()):this.__previousFocusableSiblingMissing(e,s)&&(this._scrollTop-=Math.ceil(this.scrollTarget.getBoundingClientRect().top+1)-Math.floor(e.getBoundingClientRect().top),this.flush())}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));let t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){let e=t>=0,r=this._getReusables(!e);r.indexes.length&&(this._physicalTop=r.physicalTop,e?(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length):(this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=x.debounce(this.__fixInvalidItemPositioningDebouncer,q.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=x.debounce(this.__scrollReorderDebouncer,q.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(t)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;let t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,r=this.adjustedFirstVisibleIndex===0,s=this.adjustedLastVisibleIndex===this.size-1;if(t&&!r||e&&!s){let o=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=x.debounce(this.__debouncerWheelAnimationFrame,L,()=>{this._wheelAnimationFrame=!1});let r=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=x.debounce(this._debouncerIgnoreNewWheel,q.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(t,e,r){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,r)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,r)}_canScroll(t,e,r){return r>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||r<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_increasePoolIfNeeded(t){if(this._physicalCount>2&&t){let r=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(t,Math.min(100,r)))}else super._increasePoolIfNeeded(t)}get _optPhysicalSize(){let t=super._optPhysicalSize;return t<=0||this.__hasPlaceholders()?t:t+this.__getItemHeightBuffer()}__getItemHeightBuffer(){if(this._physicalCount===0)return 0;let t=Math.ceil(this._viewportHeight*(this._maxPages-1)/2),e=Math.max(...this._physicalSizes);return e>Math.min(...this._physicalSizes)?Math.max(0,e-t):0}_getScrollLineHeight(){let t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);let e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;let t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),r=this.__getFocusedElement(e)||e[0];if(!r)return;let s=r.__virtualIndex-t,o=e.indexOf(r)-s;if(o>0)for(let n=0;n<o;n++)this.elementsContainer.appendChild(e[n]);else if(o<0)for(let n=e.length+o;n<e.length;n++)this.elementsContainer.insertBefore(e[n],e[0]);if(Je){let{transform:n}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=n})}}_adjustVirtualIndexOffset(t){let e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){let r=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(r*e)}else{let r=this._vidxOffset,s=ur,o=100;this._scrollTop===0?(this._vidxOffset=0,r!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<s&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex+(r-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,r!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-s&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-r)))}}};Object.setPrototypeOf(Pt.prototype,Qo);var di=class{constructor(t){this.__adapter=new Pt(t)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}hostConnected(){this.__adapter.hostConnected()}};var Xo=i=>class extends i{static get properties(){return{accessibleName:{type:String}}}static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter(r=>r.some(s=>s.headerRenderer||s.path&&s.header!==null||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(r=>r.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,r){if(e===void 0||r===void 0)return;let s=r[r.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(r)+this._a11yGetFooterRowCount(r)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){D(this.$.header,(e,r)=>{e.setAttribute("aria-rowindex",r+1)})}_a11yUpdateFooterRows(){D(this.$.footer,(e,r)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+r+1)})}_a11yUpdateRowRowindex(e,r){e.setAttribute("aria-rowindex",r+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,r){e.setAttribute("aria-selected",!!r),te(e,s=>{s.setAttribute("aria-selected",!!r)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,r){r>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",r+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,r){te(e,s=>{s!==r&&s.setAttribute("aria-controls",r.id)})}_a11yUpdateCellColspan(e,r){e.setAttribute("aria-colspan",Number(r))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let r=e.parentNode;for(;r&&r.localName!=="vaadin-grid-cell-content";)r=r.parentNode;r&&r.assignedSlot&&r.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};var Yl=i=>i.offsetParent&&!i.part.contains("body-cell")&&lr(i)&&getComputedStyle(i).visibility!=="hidden",Jo=i=>class extends i{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){let r=e.detail.model,s=r?r.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_shouldPreventCellActivationOnClick(e){let{cell:r}=this._getGridEventLocation(e);return e.defaultPrevented||!r||r.getAttribute("part").includes("details-cell")||r===this.$.emptystatecell||r._content.contains(this.getRootNode().activeElement)||this._isFocusable(e.target)||e.target instanceof HTMLLabelElement}_onClick(e){if(this._shouldPreventCellActivationOnClick(e))return;let{cell:r}=this._getGridEventLocation(e);r&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(r.parentElement)}}))}_isFocusable(e){return Yl(e)}};function tt(i,t){return i.split(".").reduce((e,r)=>e[r],t)}function en(i,t,e){if(e.length===0)return!1;let r=!0;return i.forEach(({path:s})=>{if(!s||s.indexOf(".")===-1)return;let o=s.replace(/\.[^.]*$/u,"");tt(o,e[0])===void 0&&(console.warn(`Path "${s}" used for ${t} does not exist in all of the items, ${t} is disabled.`),r=!1)}),r}function hi(i){return[void 0,null].indexOf(i)>=0?"":isNaN(i)?i.toString():i}function tn(i,t){return i=hi(i),t=hi(t),i<t?-1:i>t?1:0}function Kl(i,t){return i.sort((e,r)=>t.map(s=>s.direction==="asc"?tn(tt(s.path,e),tt(s.path,r)):s.direction==="desc"?tn(tt(s.path,r),tt(s.path,e)):0).reduce((s,o)=>s!==0?s:o,0))}function Zl(i,t){return i.filter(e=>t.every(r=>{let s=hi(tt(r.path,e)),o=hi(r.value).toString().toLowerCase();return s.toString().toLowerCase().includes(o)}))}var rn=i=>(t,e)=>{let r=i?[...i]:[];t.filters&&en(t.filters,"filtering",r)&&(r=Zl(r,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&en(t.sortOrders,"sorting",r)&&(r=Kl(r,t.sortOrders));let s=Math.min(r.length,t.pageSize),o=t.page*s,n=o+s,a=r.slice(o,n);e(a,r.length)};var sn=i=>class extends i{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"]}__setArrayDataProvider(e){let r=rn(this.items,{});r.__items=e,this._arrayDataProvider=r,this.size=e.length,this.dataProvider=r}_onDataProviderPageReceived(){super._onDataProviderPageReceived(),this._arrayDataProvider&&(this.size=this._flatSize)}__dataProviderOrItemsChanged(e,r,s){s&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):r?this._arrayDataProvider.__items===r?this.clearCache():this.__setArrayDataProvider(r):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):r&&this.__setArrayDataProvider(r))}};var Ql=!1,Xl=i=>i,gr=typeof document.head.style.touchAction=="string",fr="__polymerGestures",pr="__polymerGesturesHandled",_r="__polymerGesturesTouchAction",on=25,nn=5,Jl=2,ed=["mousedown","mousemove","mouseup","click"],td=[0,1,4,2],id=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function br(i){return ed.indexOf(i)>-1}var dn=!1;(function(){try{let i=Object.defineProperty({},"passive",{get(){dn=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function rd(i){if(!(br(i)||i==="touchend")&&gr&&dn&&Ql)return{passive:!0}}var sd=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),od={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ne(i){let t=i.type;if(!br(t))return!1;if(t==="mousemove"){let r=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!id&&(r=td[i.which]||0),!!(r&1)}return(i.button===void 0?0:i.button)===0}function nd(i){if(i.type==="click"){if(i.detail===0)return!0;let t=Ce(i);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let e=t.getBoundingClientRect(),r=i.pageX,s=i.pageY;return!(r>=e.left&&r<=e.right&&s>=e.top&&s<=e.bottom)}return!1}var ue={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ad(i){let t="auto",e=cn(i);for(let r=0,s;r<e.length;r++)if(s=e[r],s[_r]){t=s[_r];break}return t}function hn(i,t,e){i.movefn=t,i.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function it(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}var cn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],yr={},ke=[];function ld(i,t){let e=document.elementFromPoint(i,t),r=e;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let s=r;if(r=r.shadowRoot.elementFromPoint(i,t),s===r)break;r&&(e=r)}return e}function Ce(i){let t=cn(i);return t.length>0?t[0]:i.target}function dd(i){let t=i.type,r=i.currentTarget[fr];if(!r)return;let s=r[t];if(!s)return;if(!i[pr]&&(i[pr]={},t.startsWith("touch"))){let n=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(ue.touch.id=n.identifier),ue.touch.id!==n.identifier)return;gr||(t==="touchstart"||t==="touchmove")&&hd(i)}let o=i[pr];if(!o.skip){for(let n=0,a;n<ke.length;n++)a=ke[n],s[a.name]&&!o[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<ke.length;n++)a=ke[n],s[a.name]&&!o[a.name]&&(o[a.name]=!0,a[t](i))}}function hd(i){let t=i.changedTouches[0],e=i.type;if(e==="touchstart")ue.touch.x=t.clientX,ue.touch.y=t.clientY,ue.touch.scrollDecided=!1;else if(e==="touchmove"){if(ue.touch.scrollDecided)return;ue.touch.scrollDecided=!0;let r=ad(i),s=!1,o=Math.abs(ue.touch.x-t.clientX),n=Math.abs(ue.touch.y-t.clientY);i.cancelable&&(r==="none"?s=!0:r==="pan-x"?s=n>o:r==="pan-y"&&(s=o>n)),s?i.preventDefault():ci("track")}}function pe(i,t,e){return yr[t]?(cd(i,t,e),!0):!1}function cd(i,t,e){let r=yr[t],s=r.deps,o=r.name,n=i[fr];n||(i[fr]=n={});for(let a=0,l,d;a<s.length;a++)l=s[a],!(sd&&br(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&i.addEventListener(l,dd,rd(l)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);i.addEventListener(t,e),r.touchAction&&pd(i,r.touchAction)}function vr(i){ke.push(i),i.emits.forEach(t=>{yr[t]=i})}function ud(i){for(let t=0,e;t<ke.length;t++){e=ke[t];for(let r=0,s;r<e.emits.length;r++)if(s=e.emits[r],s===i)return e}return null}function pd(i,t){gr&&i instanceof HTMLElement&&H.run(()=>{i.style.touchAction=t}),i[_r]=t}function Cr(i,t,e){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=e,Xl(i).dispatchEvent(r),r.defaultPrevented){let s=e.preventer||e.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function ci(i){let t=ud(i);t.info&&(t.info.prevent=!0)}vr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){it(this.info)},mousedown(i){if(!Ne(i))return;let t=Ce(i),e=this,r=o=>{Ne(o)||(Rt("up",t,o),it(e.info))},s=o=>{Ne(o)&&Rt("up",t,o),it(e.info)};hn(this.info,r,s),Rt("down",t,i)},touchstart(i){Rt("down",Ce(i),i.changedTouches[0],i)},touchend(i){Rt("up",Ce(i),i.changedTouches[0],i)}});function Rt(i,t,e,r){t&&Cr(t,i,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r,prevent(s){return ci(s)}})}vr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(i){this.moves.length>Jl&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,it(this.info)},mousedown(i){if(!Ne(i))return;let t=Ce(i),e=this,r=o=>{let n=o.clientX,a=o.clientY;an(e.info,n,a)&&(e.info.state=e.info.started?o.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&ci("tap"),e.info.addMove({x:n,y:a}),Ne(o)||(e.info.state="end",it(e.info)),t&&mr(e.info,t,o),e.info.started=!0)},s=o=>{e.info.started&&r(o),it(e.info)};hn(this.info,r,s),this.info.x=i.clientX,this.info.y=i.clientY},touchstart(i){let t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(i){let t=Ce(i),e=i.changedTouches[0],r=e.clientX,s=e.clientY;an(this.info,r,s)&&(this.info.state==="start"&&ci("tap"),this.info.addMove({x:r,y:s}),mr(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(i){let t=Ce(i),e=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),mr(this.info,t,e))}});function an(i,t,e){if(i.prevent)return!1;if(i.started)return!0;let r=Math.abs(i.x-t),s=Math.abs(i.y-e);return r>=nn||s>=nn}function mr(i,t,e){if(!t)return;let r=i.moves[i.moves.length-2],s=i.moves[i.moves.length-1],o=s.x-i.x,n=s.y-i.y,a,l=0;r&&(a=s.x-r.x,l=s.y-r.y),Cr(t,"track",{state:i.state,x:e.clientX,y:e.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return ld(e.clientX,e.clientY)}})}vr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(i){Ne(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click(i){Ne(i)&&ln(this.info,i)},touchstart(i){let t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(i){ln(this.info,i.changedTouches[0],i)}});function ln(i,t,e){let r=Math.abs(t.clientX-i.x),s=Math.abs(t.clientY-i.y),o=Ce(e||t);!o||od[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(s)||r<=on&&s<=on||nd(t))&&(i.prevent||Cr(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}var un=i=>class extends i{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),pe(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),li||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){let r=e.composedPath(),s=r[r.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;let r=e.composedPath&&e.composedPath();if(r&&r.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;let s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||!s.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;let r=this._cellFromPoint(e.detail.x,e.detail.y);if(!r)return;let s=this._getTargetColumn(r,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)){let o=this._columnTree.findIndex(h=>h.includes(s)),n=this._getColumnsInOrder(o),a=n.indexOf(this._draggedColumn),l=n.indexOf(s),d=a<l?1:-1;for(let h=a;h!==l;h+=d)this._swapColumnOrders(this._draggedColumn,n[h+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(r=>!r.hidden).sort((r,s)=>r._order-s._order)}_cellFromPoint(e=0,r=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);let s=this.shadowRoot.elementFromPoint(e,r);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(s)}_getCellFromElement(e){if(e){if(e._column)return e;let{parentElement:r}=e;if(r&&r._focusButton===e)return r}return null}_updateGhostPosition(e,r){let s=this._reorderGhost.getBoundingClientRect(),o=e-s.width/2,n=r-s.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(s.left-o),this._reorderGhost._top=l-(s.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){let r=this._reorderGhost;r.textContent=e._content.innerText;let s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{r.style[o]=s[o]}),r}_updateOrders(e){e!==void 0&&(e[0].forEach(r=>{r._order=0}),ii(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,r){D(e.parentNode,s=>{/column/u.test(s.localName)&&this._isSwapAllowed(s,e)&&(s._reorderStatus=r)})}_autoScroller(){if(this._lastDragClientX){let e=this._lastDragClientX-this.getBoundingClientRect().right+50,r=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:r>0&&(this.$.table.scrollLeft-=r/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,r){if(e&&r){let s=e!==r,o=e.parentElement===r.parentElement,n=e.frozen&&r.frozen||e.frozenToEnd&&r.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!r.frozen&&!r.frozenToEnd;return s&&o&&n}}_isSwappableByPosition(e,r){let s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=s.getBoundingClientRect();return n.left>o.left?r>n.right-o.width:r<n.left+o.width}_swapColumnOrders(e,r){[e._order,r._order]=[r._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,r){if(e&&r){let s=e._column;for(;s.parentElement!==r.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===r.parentElement?s:e._column}}};var pn=i=>class extends i{ready(){super.ready();let e=this.$.scroller;pe(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",r=>e.hasAttribute("column-resizing")&&r.preventDefault()),e.addEventListener("contextmenu",r=>r.target.getAttribute("part")==="resize-handle"&&r.preventDefault()),e.addEventListener("mousedown",r=>r.target.getAttribute("part")==="resize-handle"&&r.preventDefault())}_onHeaderTrack(e){let r=e.target;if(r.getAttribute("part")==="resize-handle"){let o=r.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((p,m)=>p._order-m._order).filter(p=>!p.hidden).pop();let n=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),d=l.find(p=>p._column===o);if(d.offsetWidth){let p=getComputedStyle(d._content),m=10+parseInt(p.paddingLeft)+parseInt(p.paddingRight)+parseInt(p.borderLeftWidth)+parseInt(p.borderRightWidth)+parseInt(p.marginLeft)+parseInt(p.marginRight),_,b=d.offsetWidth,C=d.getBoundingClientRect();d.hasAttribute("frozen-to-end")?_=b+(n?a-C.right:C.left-a):_=b+(n?C.left-a:a-C.right),o.width=`${Math.max(m,_)}px`,o.flexGrow=0}l.sort((p,m)=>p._column._order-m._column._order).forEach((p,m,_)=>{m<_.indexOf(d)&&(p._column.width=`${p.offsetWidth}px`,p._column.flexGrow=0)});let h=this._frozenToEndCells[0];if(h&&this.$.table.scrollWidth>this.$.table.offsetWidth){let p=h.getBoundingClientRect(),m=a-(n?p.right:p.left);(n&&m<=0||!n&&m>=0)&&(this.$.table.scrollLeft+=m)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};function rt(i,t,e=0){let r=t;for(let s of i.subCaches){let o=s.parentCacheIndex;if(r<=o)break;if(r<=o+s.flatSize)return rt(s,r-o-1,e+1);r-=s.flatSize}return{cache:i,item:i.items[r],index:r,page:Math.floor(r/i.pageSize),level:e}}function xr({getItemId:i},t,e,r=0,s=0){for(let o=0;o<t.items.length;o++){let n=t.items[o];if(n&&i(n)===i(e))return{cache:t,level:r,item:n,index:o,page:Math.floor(o/t.pageSize),subCache:t.getSubCache(o),flatIndex:s+t.getFlatIndex(o)}}for(let o of t.subCaches){let n=s+t.getFlatIndex(o.parentCacheIndex),a=xr({getItemId:i},o,e,r+1,n+1);if(a)return a}}function wr(i,[t,...e],r=0){t===1/0&&(t=i.size-1);let s=i.getFlatIndex(t),o=i.getSubCache(t);return o&&o.flatSize>0&&e.length?wr(o,e,r+s+1):r+s}var ui=class i{context;pageSize;items=[];pendingRequests={};__subCacheByIndex={};__size=0;__flatSize=0;constructor(t,e,r,s,o){this.context=t,this.pageSize=e,this.size=r,this.parentCache=s,this.parentCacheIndex=o,this.__flatSize=r||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(t=>t.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}get size(){return this.__size}set size(t){if(this.__size!==t){if(this.__size=t,this.context.placeholder!==void 0){this.items.length=t||0;for(let r=0;r<t;r++)this.items[r]||=this.context.placeholder}Object.keys(this.pendingRequests).forEach(r=>{parseInt(r)*this.pageSize>=this.size&&delete this.pendingRequests[r]})}}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((t,e)=>(e.recalculateFlatSize(),t+e.flatSize),0):0}setPage(t,e){let r=t*this.pageSize;e.forEach((s,o)=>{let n=r+o;(this.size===void 0||n<this.size)&&(this.items[n]=s)})}getSubCache(t){return this.__subCacheByIndex[t]}removeSubCache(t){delete this.__subCacheByIndex[t]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(t){let e=new i(this.context,this.pageSize,0,this,t);return this.__subCacheByIndex[t]=e,e}getFlatIndex(t){let e=Math.max(0,Math.min(this.size-1,t));return this.subCaches.reduce((r,s)=>{let o=s.parentCacheIndex;return e>o?r+s.flatSize:r},e)}getItemForIndex(t){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");let{item:e}=rt(this,t);return e}getCacheAndIndex(t){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");let{cache:e,index:r}=rt(this,t);return{cache:e,scaledIndex:r}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(t){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(t)){let e=this.createSubCache(t);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}};var pi=class extends EventTarget{host;dataProvider;dataProviderParams;pageSize;isExpanded;getItemId;rootCache;placeholder;isPlaceholder;constructor(t,{size:e,pageSize:r,isExpanded:s,getItemId:o,isPlaceholder:n,placeholder:a,dataProvider:l,dataProviderParams:d}){super(),this.host=t,this.pageSize=r,this.getItemId=o,this.isExpanded=s,this.placeholder=a,this.isPlaceholder=n,this.dataProvider=l,this.dataProviderParams=d,this.rootCache=this.__createRootCache(e)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,placeholder:this.placeholder,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(t){this.pageSize=t,this.clearCache()}setDataProvider(t){this.dataProvider=t,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(t){return rt(this.rootCache,t)}getItemContext(t){return xr({getItemId:this.getItemId},this.rootCache,t)}getFlatIndexByPath(t){return wr(this.rootCache,t)}ensureFlatIndexLoaded(t){let{cache:e,page:r,item:s}=this.getFlatIndexContext(t);this.__isItemLoaded(s)||this.__loadCachePage(e,r)}ensureFlatIndexHierarchy(t){let{cache:e,item:r,index:s}=this.getFlatIndexContext(t);if(this.__isItemLoaded(r)&&this.isExpanded(r)&&!e.getSubCache(s)){let o=e.createSubCache(s);this.__loadCachePage(o,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(t){return new ui(this.__cacheContext,this.pageSize,t)}__loadCachePage(t,e){if(!this.dataProvider||t.pendingRequests[e])return;let r={page:e,pageSize:this.pageSize,parentItem:t.parentItem};this.dataProviderParams&&(r=V(V({},r),this.dataProviderParams()));let s=(o,n)=>{t.pendingRequests[e]===s&&(n!==void 0?t.size=n:r.parentItem&&(t.size=o.length),t.setPage(e,o),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete t.pendingRequests[e],this.dispatchEvent(new CustomEvent("page-loaded")))};t.pendingRequests[e]=s,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(r,s)}__isItemLoaded(t){return this.isPlaceholder?!this.isPlaceholder(t):this.placeholder?t!==this.placeholder:!!t}};var mn=i=>class extends i{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new pi(this,{size:this.size||0,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,r){!r&&e==="children"||this.requestContentUpdate()}_getItem(e,r){r.index=e;let{item:s}=this._dataProviderController.getFlatIndexContext(e);s?(this.__updateLoading(r,!1),this._updateItem(r,s),this._isExpanded(s)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(r,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,r){let s=be(e);Et(e,"loading",r),ee(s,"loading-row-cell",r),r&&(this._generateCellClassNames(e),this._generateCellPartNames(e))}getItemId(e){return this.itemIdPath?Ze(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,r){let s=r||[],o=new Set;return s.forEach(n=>{o.add(this.getItemId(n))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(r=>!this._itemsEqual(r,e)))}_getIndexLevel(e=0){let{level:r}=this._dataProviderController.getFlatIndexContext(e);return r}_loadPage(e,r){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(r,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize!==this._dataProviderController.flatSize&&(this._shouldUpdateAllRenderedRowsAfterPageLoad=!0,this._flatSize=this._dataProviderController.flatSize),this._getRenderedRows().forEach(e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=x.debounce(this._debouncerApplyCachedData,q.after(0),()=>{this._setLoading(!1);let e=this._shouldUpdateAllRenderedRowsAfterPageLoad;this._shouldUpdateAllRenderedRowsAfterPageLoad=!1,this._getRenderedRows().forEach(r=>{let{item:s}=this._dataProviderController.getFlatIndexContext(r.index);(s||e)&&this._getItem(r.index,r)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=x.debounce(this.__clearCacheDebouncer,H,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size||0,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,r){this._dataProviderController.setPageSize(e),r!==void 0&&e!==r&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,r){this._dataProviderController.setDataProvider(e?e.bind(this):null),r!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=x.debounce(this._debouncerCheckSize,q.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,r){return this.getItemId(e)===this.getItemId(r)}_getItemIndexInArray(e,r){let s=-1;return r.forEach((o,n)=>{this._itemsEqual(o,e)&&(s=n)}),s}scrollToIndex(...e){let r;for(;r!==(r=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(r);(this._dataProviderController.isLoading()||!this.clientHeight||!this._columnTree)&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){let e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};var zt={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},xe={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},md=!("draggable"in document.createElement("div")),fn=i=>class extends i{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50},__draggedItems:{value:()=>[]}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}constructor(){super(),this.__onDocumentDragStart=this.__onDocumentDragStart.bind(this)}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),document.addEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}_onDragStart(e){if(this.rowsDraggable){let r=e.target;if(r.localName==="vaadin-grid-cell-content"&&(r=r.assignedSlot.parentNode.parentNode),r.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){let a=r.style.transform;r.style.top=/translateY\((.*)\)/u.exec(a)[1],r.style.transform="none",requestAnimationFrame(()=>{r.style.top="",r.style.transform=a})}let s=r.getBoundingClientRect();md?e.dataTransfer.setDragImage(r):e.dataTransfer.setDragImage(r,e.clientX-s.left,e.clientY-s.top);let o=[r];this._isSelected(r._item)&&(o=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),this.__draggedItems=o.map(a=>a._item),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),ye(r,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{ye(r,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y",""),this.requestContentUpdate()});let n=new CustomEvent("grid-dragstart",{detail:{draggedItems:[...this.__draggedItems],setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>r.setAttribute("dragstart",a)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();let r=new CustomEvent("grid-dragend");r.originalEvent=e,this.dispatchEvent(r),this.__draggedItems=[],this.requestContentUpdate()}_onDragLeave(e){this.dropMode&&(e.stopPropagation(),this._clearDragStyles())}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let r=e.composedPath().find(s=>s.localName==="tr");if(!this._flatSize||this.dropMode===zt.ON_GRID)this._dropLocation=xe.EMPTY;else if(!r||r.parentNode!==this.$.items){if(r)return;if(this.dropMode===zt.BETWEEN||this.dropMode===zt.ON_TOP_OR_BETWEEN)r=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=xe.BELOW;else return}else{let s=r.getBoundingClientRect();if(this._dropLocation=xe.ON_TOP,this.dropMode===zt.BETWEEN){let o=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=o?xe.ABOVE:xe.BELOW}else this.dropMode===zt.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=xe.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=xe.BELOW))}if(r&&r.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===xe.EMPTY?this.toggleAttribute("dragover",!0):r?(this._dragOverItem=r._item,r.getAttribute("dragover")!==this._dropLocation&&sr(r,{dragover:this._dropLocation})):this._clearDragStyles()}}__onDocumentDragStart(e){if(e.target.contains(this)){let r=[e.target,this.$.items,this.$.scroller],s=r.map(o=>o.style.cssText);this.$.table.scrollHeight>2e4&&(this.$.scroller.style.display="none"),ai&&(e.target.style.willChange="transform"),Je&&(this.$.items.style.flexShrink=1),requestAnimationFrame(()=>{r.forEach((o,n)=>{o.style.cssText=s[n]})})}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;let r=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,o=r-e+this.__dndAutoScrollThreshold,n=e-s+this.__dndAutoScrollThreshold,a=0;if(n>0?a=n*2:o>0&&(a=-o*2),a){let l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){let e=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{let o=s.getBoundingClientRect();return o.bottom>e&&o.top<r})}_clearDragStyles(){this.removeAttribute("dragover"),D(this.$.items,e=>{sr(e,{dragover:null})})}__updateDragSourceParts(e,r){ye(e,{"drag-source":this.__draggedItems.includes(r.item)})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();let r=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();let s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:r}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(r=>Array.from(r.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,o)=>s._column._order>o._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){D(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,r){let s=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(r),n=!this.dropMode||s||this.dropFilter&&!this.dropFilter(r);te(e,a=>{o?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),ye(e,{"drag-disabled":!!o,"drop-disabled":!!n})}};function _n(i,t){if(!i||!t||i.length!==t.length)return!1;for(let e=0,r=i.length;e<r;e++)if(i[e]instanceof Array&&t[e]instanceof Array){if(!_n(i[e],t[e]))return!1}else if(i[e]!==t[e])return!1;return!0}var gn=i=>class extends i{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(r=>r.localName==="vaadin-grid-column-group")}_getChildColumns(e){return de.getColumns(e)}_flattenColumnGroups(e){return e.map(r=>r.localName==="vaadin-grid-column-group"?this._getChildColumns(r):[r]).reduce((r,s)=>r.concat(s),[])}_getColumnTree(){let e=de.getColumns(this),r=[e],s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),r.push(s);return r}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=x.debounce(this.__updateColumnTreeDebouncer,H,()=>this._updateColumnTree())}_updateColumnTree(){let e=this._getColumnTree();_n(e,this._columnTree)||(e.forEach(r=>{r.forEach(s=>{s.performUpdate&&s.performUpdate()})}),this._columnTree=e)}_addNodeObserver(){this._observer=new de(this,(e,r)=>{let s=r.flatMap(n=>n._allCells),o=n=>s.filter(a=>a&&a._content.contains(n)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=x.debounce(this._debouncerCheckImports,q.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((r,s)=>r._column._order-s._column._order).forEach((r,s,o)=>{he(r,"first-column",s===0),he(r,"last-column",s===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};var bn=i=>class extends i{getEventContext(e){let r={},{cell:s}=this._getGridEventLocation(e);return s&&(r.section=["body","header","footer","details"].find(o=>s.getAttribute("part").indexOf(o)>-1),s._column&&(r.column=s._column),(r.section==="body"||r.section==="details")&&Object.assign(r,this.__getRowModel(s.parentElement))),r}};var yn=i=>class extends i{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(r=>e.indexOf(r)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};function mi(i){return i instanceof HTMLTableRowElement}function fi(i){return i instanceof HTMLTableCellElement}function De(i){return i.matches('[part~="details-cell"]')}var vn=i=>class extends i{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return[this._headerFocusable,this._itemsFocusable,this._footerFocusable].some(mi)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(r=>{let s=this[r];if(e){let o=s&&s.parentElement;fi(s)?this[r]=o:fi(o)&&(this[r]=o.parentElement)}else if(!e&&mi(s)){let o=s.firstElementChild;this[r]=o._focusButton||o}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,r){r&&r.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,r){r&&Qe(r,"part","focused-cell"),e&&Fe(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;let e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(r=>{if(r.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=r;else{let s=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(s){fi(s)&&(o=s,s=s.parentElement);let n=[...s.children].indexOf(o);this._itemsFocusable=this.__getFocusable(r,r.children[n])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){let r=e.key,s;switch(r){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break;default:break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,r)}__ensureFlatIndexInViewport(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this._scrollToFlatIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){let r=e._item;return!!(r&&Ze(this.itemHasChildrenPath,r)&&!this._isExpanded(r))}}__isRowCollapsible(e){return this._isExpanded(e._item)}_onNavigationKeyDown(e,r){e.preventDefault();let s=this.__isRTL,o=e.composedPath().find(mi),n=e.composedPath().find(fi),a=0,l=0;switch(r){case"ArrowRight":a=s?-1:1;break;case"ArrowLeft":a=s?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:a=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(o)){let p=this.__getIndexInGroup(o,this._focusedItemIndex);this._scrollToFlatIndex(p)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break;default:break}if(this.__rowFocusMode&&!o||!this.__rowFocusMode&&!n)return;let d=s?"ArrowLeft":"ArrowRight",h=s?"ArrowRight":"ArrowLeft";if(r===d){if(this.__rowFocusMode){if(this.__isRowExpandable(o)){this.expandItem(o._item);return}this.__rowFocusMode=!1,this._onCellNavigation(o.firstElementChild,0,0);return}}else if(r===h)if(this.__rowFocusMode){if(this.__isRowCollapsible(o)){this.collapseItem(o._item);return}}else{let p=[...o.children].sort((m,_)=>m._order-_._order);if(n===p[0]||De(n)){this.__rowFocusMode=!0,this._onRowNavigation(o,0);return}}this.__rowFocusMode?this._onRowNavigation(o,l):this._onCellNavigation(n,a,l)}_onRowNavigation(e,r){let{dstRow:s}=this.__navigateRows(r,e);s&&s.focus()}__getIndexInGroup(e,r){let s=e.parentNode;return s===this.$.items?r!==void 0?r:e.index:[...s.children].indexOf(e)}__navigateRows(e,r,s){let o=this.__getIndexInGroup(r,this._focusedItemIndex),n=r.parentNode,a=(n===this.$.items?this._flatSize:n.children.length)-1,l=Math.max(0,Math.min(o+e,a));if(n!==this.$.items){if(l>o)for(;l<a&&n.children[l].hidden;)l+=1;else if(l<o)for(;l>0&&n.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[l]}}let d=!1;if(s){let h=De(s);if(n===this.$.items){let p=r._item,{item:m}=this._dataProviderController.getFlatIndexContext(l);h?d=e===0:d=e===1&&this._isDetailsOpened(p)||e===-1&&l!==o&&this._isDetailsOpened(m),d!==h&&(e===1&&d||e===-1&&!d)&&(l=o)}}return this.__ensureFlatIndexInViewport(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(h=>!h.hidden&&h.index===l),dstIsRowDetails:d}}_onCellNavigation(e,r,s){let o=e.parentNode,{dstRow:n,dstIsRowDetails:a}=this.__navigateRows(s,o,e);if(!n)return;let l=[...o.children].indexOf(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(m=>m._column===e._column));let d=De(e),h=o.parentNode,p=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(h,p).filter(m=>!m.hidden)[l]._order),a)[...n.children].find(De).focus();else{let m=this.__getIndexInGroup(n,this._focusedItemIndex),_=this._getColumns(h,m).filter(R=>!R.hidden),b=_.map(R=>R._order).sort((R,N)=>R-N),C=b.length-1,w=b.indexOf(b.slice(0).sort((R,N)=>Math.abs(R-this._focusedColumnOrder)-Math.abs(N-this._focusedColumnOrder))[0]),T=s===0&&d?w:Math.max(0,Math.min(w+r,C));T!==w&&(this._focusedColumnOrder=void 0);let M=_.reduce((R,N,j)=>(R[N._order]=j,R),{})[b[T]],k;if(this.$.items.contains(e)){let R=this.$.sizer.children[M];this._lazyColumns&&(this.__isColumnInViewport(R._column)||R.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),k=[...n.children].find(N=>N._column===R._column),this._scrollHorizontallyToCell(k)}else k=n.children[M],this._scrollHorizontallyToCell(k);k.focus()}}_onInteractionKeyDown(e,r){let s=e.composedPath()[0],o=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(s.type),n;switch(r){case"Enter":n=this.interacting?!o:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break;default:break}let{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&a!==null)if(n){let l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);r==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,r){let s=[this.$.table,this._headerFocusable,this.__emptyState?this.$.emptystatecell:this._itemsFocusable,this._footerFocusable,this.$.focusexit],o=s.indexOf(e);for(o+=r;o>=0&&o<=s.length-1;){let a=s[o];if(a&&!this.__rowFocusMode&&(a=s[o].parentNode),!a||a.hidden)o+=r;else break}let n=s[o];if(n&&!this.__isHorizontallyInViewport(n)){let a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(n===this._headerFocusable)n=a._headerCell;else if(n===this._itemsFocusable){let l=n._column._cells.indexOf(n);n=a._cells[l]}else n===this._footerFocusable&&(n=a._footerCell)}return n}_onTabKeyDown(e){let r=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);r&&(e.stopPropagation(),r===this._itemsFocusable&&(this.__ensureFlatIndexInViewport(this._focusedItemIndex),this.__updateItemsFocusable(),r=this._itemsFocusable),r.focus(),r!==this.$.table&&r!==this.$.focusexit&&e.preventDefault(),this.toggleAttribute("navigating",!0))}_onSpaceKeyDown(e){e.preventDefault();let r=e.composedPath()[0],s=mi(r);(s||!r._content||!r._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?r:r.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();let r=e.composedPath()[0];if(r._content&&r._content.firstElementChild){let s=this.hasAttribute("navigating");r._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);let r=e.composedPath()[0];r===this.$.table||r===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(r,r===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){let{section:r,cell:s,row:o}=this._getGridEventLocation(e);if(!(!s&&!this.__rowFocusMode)&&(this._detectInteracting(e),r&&(s||o)))if(this._activeRowGroup=r,r===this.$.header?this._headerFocusable=this.__getFocusable(o,s):r===this.$.items?(this._itemsFocusable=this.__getFocusable(o,s),this._focusedItemIndex=o.index):r===this.$.footer&&(this._footerFocusable=this.__getFocusable(o,s)),s){let n=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&n.section==="body",!this.__pendingBodyCellFocus&&s!==this.$.emptystatecell&&s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=s._focusButton||s,St()&&e.target===s&&this._showTooltip(e)}else this._focusedCell=null}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,r){return this.__rowFocusMode?e:r._focusButton||r}_detectInteracting(e){let r=e.composedPath().some(s=>s.localName==="slot"&&this.shadowRoot.contains(s));this._setInteracting(r),this.__updateHorizontalScrollPosition()}_updateGridSectionFocusTarget(e){if(!e)return;let r=this._getGridSectionFromFocusTarget(e),s=this.interacting&&r===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(){this._activeRowGroup===this.$.items&&(this.__preventScrollerRotatingCellFocusDebouncer=x.debounce(this.__preventScrollerRotatingCellFocusDebouncer,L,()=>{let e=this._activeRowGroup===this.$.items;this._getRenderedRows().some(s=>s.index===this._focusedItemIndex)?(this.__updateItemsFocusable(),e&&!this.__rowFocusMode&&(this._focusedCell=this._itemsFocusable),this._navigatingIsHidden&&(this.toggleAttribute("navigating",!0),this._navigatingIsHidden=!1)):e&&(this._focusedCell=null,this.hasAttribute("navigating")&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)))}))}_getColumns(e,r){let s=this._columnTree.length-1;return e===this.$.header?s=r:e===this.$.footer&&(s=this._columnTree.length-1-r),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){let r=[...this.$[e].children].find(o=>o.offsetHeight),s=r?[...r.children].find(o=>!o.hidden):null;r&&s&&(this[`_${e}Focusable`]=this.__getFocusable(r,s))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){let e=this.__getFirstVisibleItem(),r=e?[...e.children].find(s=>!s.hidden):null;r&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,r))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||De(e))return;let r=e.getBoundingClientRect(),s=e.parentNode,o=Array.from(s.children).indexOf(e),n=this.$.table.getBoundingClientRect(),a=n.left,l=n.right;for(let d=o-1;d>=0;d--){let h=s.children[d];if(!(h.hasAttribute("hidden")||De(h))&&(h.hasAttribute("frozen")||h.hasAttribute("frozen-to-end"))){a=h.getBoundingClientRect().right;break}}for(let d=o+1;d<s.children.length;d++){let h=s.children[d];if(!(h.hasAttribute("hidden")||De(h))&&(h.hasAttribute("frozen")||h.hasAttribute("frozen-to-end"))){l=h.getBoundingClientRect().left;break}}r.left<a&&(this.$.table.scrollLeft+=Math.round(r.left-a)),r.right>l&&(this.$.table.scrollLeft+=Math.round(r.right-l))}_getGridEventLocation(e){let r=e.__composedPath||e.composedPath(),s=r.indexOf(this.$.table),o=s>=1?r[s-1]:null,n=s>=2?r[s-2]:null,a=s>=3?r[s-3]:null;return{section:o,row:n,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};var Cn=i=>class extends i{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:r})=>{this._updateDetailsCellHeight(r.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&D(this.$.items,r=>{if(!r.querySelector("[part~=details-cell]")){this._updateRow(r,this._columnTree[this._columnTree.length-1]);let s=this._isDetailsOpened(r._item);this._toggleDetailsCell(r,s)}})}_detailsOpenedItemsChanged(e,r){D(this.$.items,s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}r&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,r){let s=e.querySelector('[part~="details-cell"]');s&&(s.hidden=!r,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){let r=e.querySelector('[part~="details-cell"]');r&&(this.__updateDetailsRowPadding(e,r),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,r)))}__updateDetailsRowPadding(e,r){r.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${r.offsetHeight}px`)}_updateDetailsCellHeights(){D(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(r=>!this._itemsEqual(r,e)))}};var Z=document.createElement("div");Z.style.position="fixed";Z.style.clip="rect(0px, 0px, 0px, 0px)";Z.setAttribute("aria-live","polite");document.body.appendChild(Z);var _i;function Ar(i,t={}){let e=t.mode||"polite",r=t.timeout===void 0?150:t.timeout;e==="alert"?(Z.removeAttribute("aria-live"),Z.removeAttribute("role"),_i=x.debounce(_i,L,()=>{Z.setAttribute("role","alert")})):(_i&&_i.cancel(),Z.removeAttribute("role"),Z.setAttribute("aria-live",e)),Z.textContent="",setTimeout(()=>{Z.textContent=i},r)}var gi=A(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break;default:break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});var Er=i=>class extends Oe(gi(i)){get _activeKeys(){return[" "]}ready(){super.ready(),pe(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),pe(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",r=>{this._activeKeys.includes(r.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};var Ir=A(i=>class extends i{get _keyboardActive(){return St()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});var Sr=A(i=>class extends Ir(Tt(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,r){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):r&&this._removeFocusListeners(r)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,r){super._disabledChanged(e,r),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});var Tr=new Map;function Pr(i){return Tr.has(i)||Tr.set(i,new WeakMap),Tr.get(i)}function xn(i,t){i&&i.removeAttribute(t)}function wn(i,t){if(!i||!t)return;let e=Pr(t);if(e.has(i))return;let r=ti(i.getAttribute(t));e.set(i,new Set(r))}function An(i,t){if(!i||!t)return;let e=Pr(t),r=e.get(i);!r||r.size===0?i.removeAttribute(t):Fe(i,t,At(r)),e.delete(i)}function bi(i,t,e={newId:null,oldId:null,fromUser:!1}){if(!i||!t)return;let{newId:r,oldId:s,fromUser:o}=e,n=Pr(t),a=n.get(i);if(!o&&a){s&&a.delete(s),r&&a.add(r);return}o&&(a?r||n.delete(i):wn(i,t),xn(i,t)),Qe(i,t,s);let l=r||At(a);l&&Fe(i,t,l)}function En(i,t){wn(i,t),xn(i,t)}var Ft=class{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,e=!1){let r=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,r,e),e?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){this.__target&&(t?(En(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(An(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,e,r){bi(this.__target,"aria-labelledby",{newId:t,oldId:e,fromUser:r})}__setErrorIdToAriaAttribute(t,e){bi(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(t,e){bi(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}};function yi(i,t){let{scrollLeft:e}=i;return t!=="rtl"?e:i.scrollWidth-i.clientWidth+e}var vi=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),Sn=A(i=>class extends i{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),vi.observe(this),this._observeParent){let e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,vi.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),vi.unobserve(this);let e=this.__parent;if(this._observeParent&&e){let r=e.resizables;r&&(r.delete(this),r.size===0&&vi.unobserve(e)),this.__parent=null}}_onResize(e){}});var Tn={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},Pn=i=>class extends Sn(i){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]}}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{let r=e.composedPath(),s=r[r.indexOf(this.$.items)-1];s&&(this._isMousedown||this.__scrollIntoViewport(s.index),this.$.table.contains(e.relatedTarget)||this.$.table.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:s}})))}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){let e=!ce(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){let r=[...this.$.items.children].find(s=>s.index===e);if(r){let s=r.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,n=this.$.header.getBoundingClientRect().bottom;s.bottom>o?this.$.table.scrollTop+=s.bottom-o:s.top<n&&(this.$.table.scrollTop-=n-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=x.debounce(this._debounceScrolling,q.after(Tn.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=x.debounce(this._debounceColumnContentVisibility,q.after(Tn.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!ce(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;let e=this._getColumnsInOrder(),r=!1;if(e.forEach(s=>{let o=this._lazyColumns&&!this.__isColumnInViewport(s);s._bodyContentHidden!==o&&(r=!0,s._cells.forEach(n=>{if(n!==s._sizerCell){if(o)n.remove();else if(n.__parentRow){let a=[...n.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(s));n.__parentRow.insertBefore(n,a)}}})),s._bodyContentHidden=o}),r&&this._frozenCellsChanged(),this._lazyColumns){let s=[...e].reverse().find(a=>a.frozen),o=this.__getColumnEnd(s),n=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(n)-o,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,r){r==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",r),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=x.debounce(this._debounceOverflow,L,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="",r=this.$.table;r.scrollTop<r.scrollHeight-r.clientHeight&&(e+=" bottom"),r.scrollTop>0&&(e+=" top");let s=yi(r,this.getAttribute("dir"));s>0&&(e+=" start"),s<r.scrollWidth-r.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,n=>n==="start"?"end":"start")),r.scrollLeft<r.scrollWidth-r.clientWidth&&(e+=" right"),r.scrollLeft>0&&(e+=" left");let o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=x.debounce(this._debouncerCacheElements,H,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=x.debounce(this.__debounceUpdateFrozenColumn,H,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;let e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,n)=>o._order-n._order);let r,s;for(let o=0;o<e.length;o++){let n=e[o];n._lastFrozen=!1,n._firstFrozenToEnd=!1,s===void 0&&n.frozenToEnd&&!n.hidden&&(s=o),n.frozen&&!n.hidden&&(r=o)}r!==void 0&&(e[r]._lastFrozen=!0),s!==void 0&&(e[s]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;let e=this.$.table.scrollWidth,r=this.$.table.clientWidth,s=Math.max(0,this.$.table.scrollLeft),o=yi(this.$.table,this.getAttribute("dir")),n=`translate(${-s}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;let a=this.__isRTL?o+r-e:s,l=`translate(${a}px, 0)`;this._frozenCells.forEach(m=>{m.style.transform=l});let d=this.__isRTL?o:s+r-e,h=`translate(${d}px, 0)`,p=h;if(this._lazyColumns&&this._areSizerCellsAssigned()){let m=this._getColumnsInOrder(),_=[...m].reverse().find(v=>!v.frozenToEnd&&!v._bodyContentHidden),b=this.__getColumnEnd(_),C=m.find(v=>v.frozenToEnd),w=this.__getColumnStart(C);p=`translate(${d+(w-b)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(m=>{this.$.items.contains(m)?m.style.transform=p:m.style.transform=h}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};var Rn=i=>class extends i{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},isItemSelectable:{type:Function,notify:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems, isItemSelectable)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}__isItemSelectable(e){return!this.isItemSelectable||!e?!0:this.isItemSelectable(e)}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(r=>!this._itemsEqual(r,e)))}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,r){let s=r||[],o=new Set;return s.forEach(n=>{o.add(this.getItemId(n))}),o}};var zn="prepend",Fn=i=>class extends i{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>zn},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){zn=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){let r=e.target;e.stopPropagation(),r._grid=this,this.__updateSorter(r,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(r=>!e.includes(r)),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(r=>{r._order=null});let e=this._getActiveSorters();e.length>1&&e.forEach((r,s)=>{r._order=s})}__updateSorter(e,r,s){if(!e.direction&&!this._sorters.includes(e))return;e._order=null;let o=this._sorters.filter(n=>n!==e);this.multiSort&&(!this.multiSortOnShiftClick||!s)||this.multiSortOnShiftClick&&r?this.multiSortPriority==="append"?this._sorters=[...o,e]:this._sorters=[e,...o]:(e.direction||this.multiSortOnShiftClick)&&(this._sorters=e.direction?[e]:[],o.forEach(n=>{n._order=null,n.direction=null}))}__applySorters(){this.__updateSortOrders(),this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_getActiveSorters(){return this._sorters.filter(e=>e.direction&&e.isConnected)}_mapSorters(){return this._getActiveSorters().map(e=>({path:e.path,direction:e.direction}))}};var On=i=>class extends i{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){D(this.$.items,e=>{e.hidden||this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){D(this.$.items,e=>{e.hidden||this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,r){te(e,s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(o=>s.classList.remove(o)),this.cellClassNameGenerator&&!e.hasAttribute("loading")){let o=this.cellClassNameGenerator(s._column,r);s.__generatedClasses=o&&o.split(" ").filter(n=>n.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(n=>s.classList.add(n))}})}_generateCellPartNames(e,r){te(e,s=>{if(s.__generatedParts&&s.__generatedParts.forEach(o=>{le(s,null,o)}),this.cellPartNameGenerator&&!e.hasAttribute("loading")){let o=this.cellPartNameGenerator(s._column,r);s.__generatedParts=o&&o.split(" ").filter(n=>n.length>0),s.__generatedParts&&s.__generatedParts.forEach(n=>{le(s,!0,n)})}})}};var Mn=i=>class extends sn(mn(gn(Jo(Pn(Rn(Fn(Cn(vn(Xo(yn(un(pn(bn(fn(On(Tt(i))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Je},_ios:{type:Boolean,value:cr},_firefox:{type:Boolean,value:$o},_android:{type:Boolean,value:hr},_touchDevice:{type:Boolean,value:li},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0},__hasEmptyStateContent:{type:Boolean,value:!1},__emptyState:{type:Boolean,computed:"__computeEmptyState(_flatSize, __hasEmptyStateContent)"}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){let t=this.__getFirstVisibleItem();return t?t.index:void 0}get _lastVisibleIndex(){let t=this.__getLastVisibleItem();return t?t.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.__virtualizer&&this.__virtualizer.hostConnected(),this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(t=>this._isInViewport(t))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(t=>this._isInViewport(t))}_isInViewport(t){let e=this.$.table.getBoundingClientRect(),r=t.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return r.bottom>e.top+s&&r.top<e.bottom-o}_getRenderedRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}_getRowContainingNode(t){let e=rr("vaadin-grid-cell-content",t);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(t,e){let r=this.__getRowModel(e);return this.getItemId(t)===this.getItemId(r.item)}ready(){super.ready(),this.__virtualizer=new di({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table);let t=new ResizeObserver(()=>setTimeout(()=>{this.__updateMinHeight()}));t.observe(this.$.header),t.observe(this.$.items),t.observe(this.$.footer),ei(this),this._tooltipController=new et(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0),this.__emptyStateContentObserver=new Me(this.$.emptystateslot,({currentNodes:e})=>{this.$.emptystatecell._content=e[0],this.__hasEmptyStateContent=!!this.$.emptystatecell._content})}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){let r=this._getRenderedRows().find(o=>o._item===t),s=r&&[...r.children].find(o=>o._column===e);s&&s.focus()}_focusFirstVisibleRow(){let t=this.__getFirstVisibleItem();this.__rowFocusMode=!0,t.focus()}_flatSizeChanged(t,e,r,s){if(e&&r&&s){let o=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(o),a=e.size||0;e.size=t,e.update(a-1,a-1),t<a&&e.update(t-1,t-1),n&&o.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}__getIntrinsicWidth(t){return this.__intrinsicWidthCache.has(t)||this.__calculateAndCacheIntrinsicWidths([t]),this.__intrinsicWidthCache.get(t)}__getDistributedWidth(t,e){if(t==null||t===this)return 0;let r=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth((t.assignedSlot||t).parentElement,t));if(!e)return r;let s=t,o=r,n=s._visibleChildColumns.map(h=>this.__getIntrinsicWidth(h)).reduce((h,p)=>h+p,0),a=Math.max(0,o-n),d=this.__getIntrinsicWidth(e)/n*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(t){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(s=>{s.__debounceUpdateHeaderFooterRowVisibility&&s.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__debounceUpdateFrozenColumn&&this.__debounceUpdateFrozenColumn.flush(),this.__intrinsicWidthCache=new Map;let e=this._firstVisibleIndex,r=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(s=>s.index>=e&&s.index<=r),this.__calculateAndCacheIntrinsicWidths(t),t.forEach(s=>{s.width=`${this.__getDistributedWidth(s)}px`})}__setVisibleCellContentAutoWidth(t,e){t._allCells.filter(r=>this.$.items.contains(r)?this.__viewportRowsCache.includes(r.parentElement):!0).forEach(r=>{r.__measuringAutoWidth=e,r.__measuringAutoWidth?(r.__originalWidth=r.style.width,r.style.width="auto",r.style.position="absolute"):(r.style.width=r.__originalWidth,delete r.__originalWidth,r.style.position="")}),e?this.$.scroller.setAttribute("measuring-auto-width",""):this.$.scroller.removeAttribute("measuring-auto-width")}__getAutoWidthCellsMaxWidth(t){return t._allCells.reduce((e,r)=>r.__measuringAutoWidth?Math.max(e,r.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(t){t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),t.forEach(e=>{let r=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,r)}),t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(ce(this)||this._dataProviderController.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}let t=this._getColumns().filter(r=>!r.hidden&&r.autoWidth),e=t.filter(r=>!customElements.get(r.localName));e.length?Promise.all(e.map(r=>customElements.whenDefined(r.localName))).then(()=>{this._recalculateColumnWidths(t)}):this._recalculateColumnWidths(t)}__tryToRecalculateColumnWidthsIfPending(){if(!this.__pendingRecalculateColumnWidths||ce(this)||this._dataProviderController.isLoading()||[...this.$.items.children].some(r=>r.index===void 0))return;[...this.$.items.children].some(r=>r.clientHeight>0)&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(t){let e=[];for(let r=0;r<t;r++){let s=document.createElement("tr");s.setAttribute("part","row body-row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(r=>{r.isConnected&&r._cells&&(r._cells=[...r._cells])}),this.__afterCreateScrollerRowsDebouncer=x.debounce(this.__afterCreateScrollerRowsDebouncer,L,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(t,e){let s=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",s);let n=document.createElement(t);n.id=s.replace("-content-","-"),n.setAttribute("role",t==="td"?"gridcell":"columnheader"),!hr&&!cr&&(n.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));let a=document.createElement("slot");if(a.setAttribute("name",s),e&&e._focusButtonMode){let l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),n.appendChild(l),n._focusButton=l,n.focus=function(d){n._focusButton.focus(d)},l.appendChild(a)}else n.setAttribute("tabindex","-1"),n.appendChild(a);return n._content=o,o.addEventListener("mousedown",()=>{if(ai){let l=d=>{let h=o.contains(this.getRootNode().activeElement),p=d.composedPath().includes(o);!h&&p&&n.focus({preventScroll:!0}),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||n.focus({preventScroll:!0})})}),n}_updateRow(t,e,r="body",s=!1,o=!1){let n=document.createDocumentFragment();te(t,a=>{a._vacant=!0}),t.innerHTML="",r==="body"&&(t.__cells=[],t.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,d)=>{let h;if(r==="body"){a._cells||(a._cells=[]),h=a._cells.find(m=>m._vacant),h||(h=this._createCell("td",a),a._onCellKeyDown&&h.addEventListener("keydown",a._onCellKeyDown.bind(a)),a._cells.push(h)),h.setAttribute("part","cell body-cell"),h.__parentRow=t,t.__cells.push(h);let p=t===this.$.sizer;if((!a._bodyContentHidden||p)&&t.appendChild(h),p&&(a._sizerCell=h),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);let m=this._detailsCells.find(_=>_._vacant)||this._createCell("td");this._detailsCells.indexOf(m)===-1&&this._detailsCells.push(m),m._content.parentElement||n.appendChild(m._content),this._configureDetailsCell(m),t.appendChild(m),t.__detailsCell=m,this._a11ySetRowDetailsCell(t,m),m._vacant=!1}o||(a._cells=[...a._cells])}else{let p=r==="header"?"th":"td";s||a.localName==="vaadin-grid-column-group"?(h=a[`_${r}Cell`],h||(h=this._createCell(p),a._onCellKeyDown&&h.addEventListener("keydown",a._onCellKeyDown.bind(a))),h._column=a,t.appendChild(h),a[`_${r}Cell`]=h):(a._emptyCells||(a._emptyCells=[]),h=a._emptyCells.find(m=>m._vacant)||this._createCell(p),h._column=a,t.appendChild(h),a._emptyCells.indexOf(h)===-1&&a._emptyCells.push(h)),h.part.add("cell",`${r}-cell`)}h._content.parentElement||n.appendChild(h._content),h._vacant=!1,h._column=a}),r!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(t),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__debounceUpdateHeaderFooterRowVisibility(t){t.__debounceUpdateHeaderFooterRowVisibility=x.debounce(t.__debounceUpdateHeaderFooterRowVisibility,H,()=>this.__updateHeaderFooterRowVisibility(t))}__updateHeaderFooterRowVisibility(t){if(!t)return;let e=Array.from(t.children).filter(r=>{let s=r._column;if(s._emptyCells&&s._emptyCells.indexOf(r)>-1)return!1;if(t.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(this._updateRowOrderParts(t,e),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(t,e=t.index){ye(t,{first:e===0,last:e===this._flatSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(t,{item:e,expanded:r,selected:s,detailsOpened:o}){ye(t,{expanded:r,collapsed:this.__isRowExpandable(t),selected:s,nonselectable:this.__isItemSelectable(e)===!1,"details-opened":o})}__computeEmptyState(t,e){return t===0&&e}_renderColumnTree(t){for(D(this.$.items,e=>{this._updateRow(e,t[t.length-1],"body",!1,!0);let r=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,r),this._filterDragAndDrop(e,r)});this.$.header.children.length<t.length;){let e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);let r=document.createElement("tr");r.setAttribute("part","row"),r.setAttribute("role","row"),r.setAttribute("tabindex","-1"),this.$.footer.appendChild(r)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);D(this.$.header,(e,r,s)=>{this._updateRow(e,t[r],"header",r===t.length-1);let o=be(e);ee(o,"first-header-row-cell",r===0),ee(o,"last-header-row-cell",r===s.length-1)}),D(this.$.footer,(e,r,s)=>{this._updateRow(e,t[t.length-1-r],"footer",r===0);let o=be(e);ee(o,"first-footer-row-cell",r===0),ee(o,"last-footer-row-cell",r===s.length-1)}),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(t,e){t._item=e;let r=this.__getRowModel(t);this._toggleDetailsCell(t,r.detailsOpened),this._a11yUpdateRowLevel(t,r.level),this._a11yUpdateRowSelected(t,r.selected),this._updateRowStateParts(t,r),this._generateCellClassNames(t,r),this._generateCellPartNames(t,r),this._filterDragAndDrop(t,r),this.__updateDragSourceParts(t,r),D(t,s=>{if(!(s._column&&!s._column.isConnected)&&s._renderer){let o=s._column||this;s._renderer.call(o,s._content,o,r)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,r.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),this._resetKeyboardNavigation(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}_showTooltip(t){let e=this._tooltipController.node;if(e&&e.isConnected){let r=t.target;if(!this.__isCellFullyVisible(r))return;this._tooltipController.setTarget(r),this._tooltipController.setContext(this.getEventContext(t)),e._stateController.open({focus:t.type==="focusin",hover:t.type==="mouseenter"})}}__isCellFullyVisible(t){if(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end"))return!0;let{left:e,right:r}=this.getBoundingClientRect(),s=[...t.parentNode.children].find(a=>a.hasAttribute("last-frozen"));if(s){let a=s.getBoundingClientRect();e=this.__isRTL?e:a.right,r=this.__isRTL?a.left:r}let o=[...t.parentNode.children].find(a=>a.hasAttribute("first-frozen-to-end"));if(o){let a=o.getBoundingClientRect();e=this.__isRTL?a.right:e,r=this.__isRTL?r:a.left}let n=t.getBoundingClientRect();return n.left>=e&&n.right<=r}_hideTooltip(t){let e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(t)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}__updateMinHeight(){let e=this.$.header.clientHeight,r=this.$.footer.clientHeight,s=this.$.table.offsetHeight-this.$.table.clientHeight,o=e+36+r+s;!this.__minHeightStyleSheet&&qo&&(this.__minHeightStyleSheet=new CSSStyleSheet,this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.__minHeightStyleSheet]),this.__minHeightStyleSheet?this.__minHeightStyleSheet.replaceSync(`:host { --_grid-min-height: ${o}px; }`):this.style.setProperty("--_grid-min-height",`${o}px`)}};var kn=z`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    min-height: var(--_grid-min-height, 0);
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    min-height: auto;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] {
    outline: none;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  /* Switch the focusButtonMode wrapping element to "position: static" temporarily
     when measuring real width of the cells in the auto-width columns. */
  [measuring-auto-width] [part~='cell'] > [tabindex] {
    position: static;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Empty state */

  #scroller:not([empty-state]) #emptystatebody,
  #scroller[empty-state] #items {
    display: none;
  }

  #emptystatebody {
    display: flex;
    position: sticky;
    inset: 0;
    flex: 1;
    overflow: hidden;
  }

  #emptystaterow {
    display: flex;
    flex: 1;
  }

  #emptystatecell {
    display: block;
    flex: 1;
    overflow: auto;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;B("vaadin-grid",kn,{moduleId:"vaadin-grid-styles"});var Rr=class extends Mn(oi(je(Xe(J)))){static get template(){return Re`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
        empty-state$="[[__emptyState]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0" aria-label$="[[accessibleName]]">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tbody id="emptystatebody">
            <tr id="emptystaterow">
              <td part="empty-state" id="emptystatecell" tabindex="0">
                <slot name="empty-state" id="emptystateslot"></slot>
              </td>
            </tr>
          </tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}};W(Rr);var Nn=i=>class extends ri(i){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(t,e){t==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(t)&&this._updateFlexAndWidth(),t==="frozen"&&!this.frozen&&(this.frozen=e),t==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),t==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),t==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(t,e){if(e){let r=e.slice(0);if(!t){r.forEach(a=>{a._order=0});return}let s=/(0+)$/u.exec(t).pop().length,o=~~(Math.log(e.length)/Math.LN10)+1,n=10**(s-o);r[0]&&r[0]._order&&r.sort((a,l)=>a._order-l._order),ii(r,n,t)}}_groupReorderStatusChanged(t,e){t===void 0||e===void 0||e.forEach(r=>{r._reorderStatus=t})}_groupResizableChanged(t,e){t===void 0||e===void 0||e.forEach(r=>{r.resizable=t})}_updateVisibleChildColumns(t){this._visibleChildColumns=Array.prototype.filter.call(t,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){let t=this._visibleChildColumns.reduce((e,r)=>(e+=` + ${(r.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${t})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(t,e)=>t+e.flexGrow,0))}}__scheduleAutoFreezeWarning(t,e){if(this._grid){let r=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),s=t[0][e]||t[0].hasAttribute(r);t.every(n=>(n[e]||n.hasAttribute(r))===s)||(this._grid.__autoFreezeWarningDebouncer=x.debounce(this._grid.__autoFreezeWarningDebouncer,L,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(r=>{r.frozen=t}))}_groupFrozenToEndChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(r=>{r.frozenToEnd=t}))}_groupHiddenChanged(t){(t||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){let t=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(t||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(t=>{t.hidden=this.hidden})}_colSpanChanged(t,e,r){e&&(e.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(e,t)),r&&(r.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(r,t))}_getChildColumns(t){return de.getColumns(t)}_addNodeObserver(){this._observer=new de(this,()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()}),this._observer.flush()}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}};var zr=class extends Nn(J){static get is(){return"vaadin-grid-column-group"}};W(zr);B("vaadin-checkbox",z`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_disabled-checkmark-color: var(--vaadin-checkbox-disabled-checkmark-color, var(--lumo-contrast-30pct));
    }

    [part='label'] {
      display: flex;
      position: relative;
      max-width: max-content;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([has-label][required]) ::slotted(label) {
      padding-inline-end: var(--lumo-space-m);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition:
        transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
        background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    :host([readonly]:not([checked]):not([indeterminate])) {
      color: var(--lumo-secondary-text-color);
    }

    :host([readonly]:not([checked]):not([indeterminate])) [part='checkbox'] {
      background: transparent;
      box-shadow: none;
    }

    :host([readonly]:not([checked]):not([indeterminate])) [part='checkbox']::after {
      content: '';
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      top: 0;
      left: 0;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-50pct));
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    :host([focus-ring][readonly]:not([checked]):not([indeterminate])) [part='checkbox'] {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--vaadin-checkbox-disabled-background, var(--lumo-contrast-10pct));
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--_disabled-checkmark-color);
    }

    :host([disabled]) [part='label'],
    :host([disabled]) [part='helper-text'] {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--_disabled-checkmark-color);
    }

    :host([readonly][checked]:not([disabled])) [part='checkbox'],
    :host([readonly][indeterminate]:not([disabled])) [part='checkbox'] {
      background-color: var(--vaadin-checkbox-readonly-checked-background, var(--lumo-contrast-70pct));
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition:
        transform 0.1s,
        opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):not([readonly]):not([invalid]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      /* prettier-ignore */
      :host(:not([checked]):not([indeterminate]):not([disabled]):not([readonly]):not([invalid]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    /* Required */
    :host([required]) [part='required-indicator'] {
      position: absolute;
      top: var(--lumo-space-xs);
      right: var(--lumo-space-xs);
    }

    :host([required][dir='rtl']) [part='required-indicator'] {
      right: auto;
      left: var(--lumo-space-xs);
    }

    :host([required]) [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      width: 1em;
      text-align: center;
    }

    :host(:not([has-label])) [part='required-indicator'] {
      display: none;
    }

    /* Invalid */
    :host([invalid]) {
      --vaadin-input-field-border-color: var(--lumo-error-color);
    }

    :host([invalid]) [part='checkbox'] {
      background: var(--_invalid-background);
      background-image: linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%);
    }

    :host([invalid]:hover) [part='checkbox'] {
      background-image: linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%),
        linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%);
    }

    :host([invalid][focus-ring]) {
      --_focus-ring-color: var(--lumo-error-color-50pct);
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }

    /* Error message */
    [part='error-message'] {
      font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
      line-height: var(--lumo-line-height-xs);
      font-weight: var(--vaadin-input-field-error-font-weight, 400);
      color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
      will-change: max-height;
      transition: 0.4s max-height;
      max-height: 5em;
      padding-inline-start: var(--lumo-space-xs);
    }

    :host([has-error-message]) [part='error-message']::after,
    :host([has-helper]) [part='helper-text']::after {
      content: '';
      display: block;
      height: 0.4em;
    }

    :host(:not([invalid])) [part='error-message'] {
      max-height: 0;
      overflow: hidden;
    }

    /* Helper */
    [part='helper-text'] {
      display: block;
      color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
      font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
      line-height: var(--lumo-line-height-xs);
      font-weight: var(--vaadin-input-field-helper-font-weight, 400);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      transition: color 0.2s;
      padding-inline-start: var(--lumo-space-xs);
    }

    :host(:hover:not([readonly])) [part='helper-text'] {
      color: var(--lumo-body-text-color);
    }

    :host([has-error-message]) ::slotted(label),
    :host([has-helper]) ::slotted(label) {
      padding-bottom: 0;
    }
  `,{moduleId:"lumo-checkbox"});var Fr=new WeakMap;function gd(i){return Fr.has(i)||Fr.set(i,new Set),Fr.get(i)}function bd(i,t){let e=document.createElement("style");e.textContent=i,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}var Dn=A(i=>class extends i{get slotStyles(){return[]}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){let e=this.getRootNode(),r=gd(e);this.slotStyles.forEach(s=>{r.has(s)||(bd(s,e),r.add(s))})}});var Ln=A(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((r,s)=>{this._delegateAttribute(r,e[s])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((r,s)=>{this._delegateProperty(r,e[s])})}_delegateAttribute(e,r){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",r?"true":!1),typeof r=="boolean"?this.stateTarget.toggleAttribute(e,r):r?this.stateTarget.setAttribute(e,r):this.stateTarget.removeAttribute(e))}_delegateProperty(e,r){this.stateTarget&&(this.stateTarget[e]=r)}});var Hn=A(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e),this._hasInputValue=e&&e.length>0}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,r){e?this._addInputListeners(e):r&&this._removeInputListeners(r)}_hasInputValueChanged(e,r){(e||r)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){let r=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=r.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,r){this._toggleHasValue(this._hasValue),!(e===""&&r===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){let r=e.composedPath()[0];this._hasInputValue=r.value.length>0}});var Bn=A(i=>class extends Ln(Oe(Hn(i))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,sync:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){let r=e.target;this._toggleChecked(r.checked)}_toggleChecked(e){this.checked=e}});var we=class extends ve{constructor(t,e,r,s={}){super(t,e,r,Se(V({},s),{useUniqueId:!0}))}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){let e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){let t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(r=>{let s=r.target,o=s===this.node;r.type==="attributes"?o&&this.__updateNodeId(s):(o||s.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){let e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!t.id&&(t.id=this.defaultId)}};var Ci=class extends we{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){let{errorMessage:e,invalid:r}=this,s=!!(r&&e&&e.trim()!=="");t&&(t.textContent=s?e:"",t.hidden=!s,s&&Ar(e,{mode:"assertive"})),super.updateDefaultNode(t)}};var xi=class extends we{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){let{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";let e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}};var wi=class extends we{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){let{label:t}=this;if(t&&t.trim()!==""){let e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}};var Vn=A(i=>class extends Xe(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new wi(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){let e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});var Gn=A(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){let e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}_requestValidation(){this.manualValidation||this.validate()}});var jn=i=>class extends Gn(Vn(Xe(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Ft(this),this._helperController=new xi(this),this._errorController=new Ci(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{let{hasContent:r,node:s}=e.detail;this.__labelChanged(r,s)}),this._helperController.addEventListener("slot-content-changed",e=>{let{hasContent:r,node:s}=e.detail;this.toggleAttribute("has-helper",r),this.__helperChanged(r,s)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,r){e?this._fieldAriaController.setHelperId(r.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,r){e?this._fieldAriaController.setLabelId(r.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){let r=this._errorNode;this._fieldAriaController.setErrorId(r&&r.id)}else this._fieldAriaController.setErrorId(null)})}};var Ai=class extends ve{constructor(t,e,r={}){let{uniqueIdPrefix:s}=r;super(t,"input","input",{initializer:(o,n)=>{n.value&&(o.value=n.value),n.type&&o.setAttribute("type",n.type),o.id=this.defaultId,typeof e=="function"&&e(o)},useUniqueId:!0,uniqueIdPrefix:s})}};var Ei=class{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",r=>{this.__initLabel(r.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){let t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}};var Wn=i=>class extends Dn(jn(Bn(Sr(Er(i))))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["__readonlyChanged(readonly, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name","invalid","required"]}constructor(){super(),this._setType("checkbox"),this._boundOnInputClick=this._onInputClick.bind(this),this.value="on"}get slotStyles(){return[`
          ${this.localName} > input[slot='input'] {
            opacity: 0;
          }
        `]}ready(){super.ready(),this.addController(new Ai(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Ei(this.inputElement,this._labelController)),this._createMethodObserver("_checkedChanged(checked)")}_shouldSetActive(e){return this.readonly||e.target.localName==="a"||e.target===this._helperNode||e.target===this._errorNode?!1:super._shouldSetActive(e)}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("click",this._boundOnInputClick)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("click",this._boundOnInputClick)}_onInputClick(e){this.readonly&&e.preventDefault()}__readonlyChanged(e,r){r&&(e?r.setAttribute("aria-readonly","true"):r.removeAttribute("aria-readonly"))}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}checkValidity(){return!this.required||!!this.checked}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this._requestValidation()}_checkedChanged(e){(e||this.__oldChecked)&&this._requestValidation(),this.__oldChecked=e}_requiredChanged(e){super._requiredChanged(e),e===!1&&this._requestValidation()}_onRequiredIndicatorClick(){this._labelNode.click()}};var Un=z`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  [part='label'] {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='helper-text'],
  [part='error-message'] {
    grid-column: 2;
  }

  :host(:not([has-helper])) [part='helper-text'],
  :host(:not([has-error-message])) [part='error-message'] {
    display: none;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;B("vaadin-checkbox",Un,{moduleId:"vaadin-checkbox-styles"});var Or=class extends Wn(oi(je(J))){static get is(){return"vaadin-checkbox"}static get template(){return Re`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <div part="label">
          <slot name="label"></slot>
          <div part="required-indicator" on-click="_onRequiredIndicatorClick"></div>
        </div>
        <div part="helper-text">
          <slot name="helper"></slot>
        </div>
        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new et(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}};W(Or);var $n=i=>class extends i{static get properties(){return{width:{type:String,value:"58px",sync:!0},autoWidth:{type:Boolean,value:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}constructor(){super(),this.__onCellTrack=this.__onCellTrack.bind(this),this.__onCellClick=this.__onCellClick.bind(this),this.__onCellMouseDown=this.__onCellMouseDown.bind(this),this.__onActiveItemChanged=this.__onActiveItemChanged.bind(this),this.__onSelectRowCheckboxChange=this.__onSelectRowCheckboxChange.bind(this),this.__onSelectAllCheckboxChange=this.__onSelectAllCheckboxChange.bind(this)}connectedCallback(){super.connectedCallback(),this._grid&&this._grid.addEventListener("active-item-changed",this.__onActiveItemChanged)}disconnectedCallback(){super.disconnectedCallback(),this._grid&&this._grid.removeEventListener("active-item-changed",this.__onActiveItemChanged)}_defaultHeaderRenderer(e,r){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.setAttribute("aria-label","Select All"),s.classList.add("vaadin-grid-select-all-checkbox"),s.addEventListener("change",this.__onSelectAllCheckboxChange),e.appendChild(s));let o=this.__isChecked(this.selectAll,this._indeterminate);s.checked=o,s.hidden=this._selectAllHidden,s.indeterminate=this._indeterminate}_defaultRenderer(e,r,{item:s,selected:o}){let n=e.firstElementChild;n||(n=document.createElement("vaadin-checkbox"),n.setAttribute("aria-label","Select Row"),n.addEventListener("change",this.__onSelectRowCheckboxChange),e.appendChild(n),pe(e,"track",this.__onCellTrack),e.addEventListener("mousedown",this.__onCellMouseDown),e.addEventListener("click",this.__onCellClick)),n.__item=s,n.checked=o;let a=this._grid.__isItemSelectable(s);n.readonly=!a,n.hidden=!a&&!o}__onSelectAllCheckboxChange(e){this._indeterminate||e.currentTarget.checked?this._selectAll():this._deselectAll()}__onSelectRowCheckboxChange(e){this.__toggleItem(e.currentTarget.__item,e.currentTarget.checked)}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,e.detail.state==="start"){let s=this._grid._getRenderedRows().find(o=>o.contains(e.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(s._item),this.__dragStartIndex=s.index,this.__dragStartItem=s._item,this.__dragAutoScroller()}else e.detail.state==="end"&&(this.__dragStartItem&&this.__toggleItem(this.__dragStartItem,this.__selectOnDrag),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){this.__dragStartIndex!==void 0&&e.preventDefault()}_onCellKeyDown(e){let r=e.composedPath()[0];if(e.keyCode===32){if(r===this._headerCell)this.selectAll?this._deselectAll():this._selectAll();else if(this._cells.includes(r)&&!this.autoSelect){let s=r._content.firstElementChild;this.__toggleItem(s.__item)}}}__onActiveItemChanged(e){let r=e.detail.value;if(this.autoSelect){let s=r||this.__previousActiveItem;s&&this.__toggleItem(s)}this.__previousActiveItem=r}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;let e=this._grid._getRenderedRows(),r=e.find(l=>{let d=l.getBoundingClientRect();return this.__dragCurrentY>=d.top&&this.__dragCurrentY<=d.bottom}),s=r?r.index:void 0,o=this.__getScrollableArea();this.__dragCurrentY<o.top?s=this._grid._firstVisibleIndex:this.__dragCurrentY>o.bottom&&(s=this._grid._lastVisibleIndex),s!==void 0&&e.forEach(l=>{(s>this.__dragStartIndex&&l.index>=this.__dragStartIndex&&l.index<=s||s<this.__dragStartIndex&&l.index<=this.__dragStartIndex&&l.index>=s)&&(this.__toggleItem(l._item,this.__selectOnDrag),this.__dragStartItem=void 0)});let n=o.height*.15,a=10;if(this.__dragDy<0&&this.__dragCurrentY<o.top+n){let l=o.top+n-this.__dragCurrentY,d=Math.min(1,l/n);this._grid.$.table.scrollTop-=d*a}if(this.__dragDy>0&&this.__dragCurrentY>o.bottom-n){let l=this.__dragCurrentY-(o.bottom-n),d=Math.min(1,l/n);this._grid.$.table.scrollTop+=d*a}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){let e=this._grid.$.table.getBoundingClientRect(),r=this._grid.$.header.getBoundingClientRect(),s=this._grid.$.footer.getBoundingClientRect();return{top:e.top+r.height,bottom:e.bottom-s.height,left:e.left,right:e.right,height:e.height-r.height-s.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__toggleItem(e,r=!this._grid._isSelected(e)){r!==this._grid._isSelected(e)&&(r?this._selectItem(e):this._deselectItem(e))}__isChecked(e,r){return r||e}};var qn=i=>class extends $n(i){static get properties(){return{__previousActiveItem:Object}}static get observers(){return["__onSelectAllChanged(selectAll)"]}constructor(){super(),this.__boundUpdateSelectAllVisibility=this.__updateSelectAllVisibility.bind(this),this.__boundOnSelectedItemsChanged=this.__onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("data-provider-changed",this.__boundUpdateSelectAllVisibility),this._grid.removeEventListener("is-item-selectable-changed",this.__boundUpdateSelectAllVisibility),this._grid.removeEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("data-provider-changed",this.__boundUpdateSelectAllVisibility),this._grid.addEventListener("is-item-selectable-changed",this.__boundUpdateSelectAllVisibility),this._grid.addEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged),this.__updateSelectAllVisibility())}__onSelectAllChanged(t){if(!(t===void 0||!this._grid)){if(!this.__selectAllInitialized){this.__selectAllInitialized=!0;return}this._selectAllChangeLock||(t&&this.__hasArrayDataProvider()?this.__withFilteredItemsArray(e=>{this._grid.selectedItems=e}):this._grid.selectedItems=[])}}_selectAll(){this.selectAll=!0}_deselectAll(){this.selectAll=!1}_selectItem(t){this._grid.__isItemSelectable(t)&&this._grid.selectItem(t)}_deselectItem(t){this._grid.__isItemSelectable(t)&&this._grid.deselectItem(t)}__hasArrayDataProvider(){return Array.isArray(this._grid.items)&&!!this._grid.dataProvider}__onSelectedItemsChanged(){this._selectAllChangeLock=!0,this.__hasArrayDataProvider()&&this.__withFilteredItemsArray(t=>{this._grid.selectedItems.length?t.every(e=>this._grid._isSelected(e))?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):(this.selectAll=!1,this._indeterminate=!1)}),this._selectAllChangeLock=!1}__updateSelectAllVisibility(){this._selectAllHidden=!Array.isArray(this._grid.items)||!!this._grid.isItemSelectable}__withFilteredItemsArray(t){let e={page:0,pageSize:1/0,sortOrders:[],filters:this._grid._mapFilters()};this._grid.dataProvider(e,r=>t(r))}};var Mr=class extends qn(It){static get is(){return"vaadin-grid-selection-column"}};W(Mr);B("vaadin-grid-sorter",z`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});var Yn=document.createElement("template");Yn.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Yn.content);B("vaadin-grid-sorter",z`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});var Kn=i=>class extends i{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._grid?this._grid.__applySorters():this.__dispatchSorterChangedEvenIfPossible()}disconnectedCallback(){super.disconnectedCallback(),!this.parentNode&&this._grid?this._grid.__removeSorters([this]):this._grid&&this._grid.__applySorters()}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this.isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;let r=this.getRootNode().activeElement;this!==r&&this.contains(r)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}};var kr=class extends Kn(je(Ke(J))){static get template(){return Re`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}};W(kr);var I=class extends Xr.EventedAccessor{constructor(i){super(i),this.cellPartNameGenerator=(t,e)=>{let r="";e?.item&&this.rowHighlightIds.includes(e.item.objectId)&&(r+=" highlight");let s=this.findColumn(t?.path);return s&&(s.invalid&&(r+=" invalid"),s.textWrap&&(r+=" text-wrap"),"editInfo"in s&&s.editInfo&&s.editInfo.rowData?.index===e.index&&(r+=" editing")),r},this.columnPerformanceModeEnabled=!0,this.columnReorderingEnabled=!0,this.columns=new O,this.dataProvider=(t,e)=>y(this,null,function*(){let{store:r}=this;if(e){if(!r)return void(e&&e([]));e(yield r.fetchItems(t))}}),this.maxSize=null,this.multipleSelectionEnabled=!0,this.multiSortEnabled=!1,this.paginationEnabled=!1,this.rowDetailsRenderer=null,this.store=null}get actionColumn(){return this.allColumns.find(i=>i.fieldName===F.action)}get allColumns(){return this.columns.toArray().flatMap(i=>[i,...ki(i)&&i.columns?.length?i.columns:[]])}get allVisibleColumns(){return this.allColumns.filter(i=>!i.hidden)}get columnMenuIsOpen(){return this.allColumns.some(i=>i.menuIsOpen)}get editing(){return this.editableColumns.some(i=>i.editInfo)}get editableColumns(){return this.allColumns.filter(i=>"editable"in i)}get effectiveSize(){let{filterBySelectionEnabled:i,highlightIds:t,objectIds:e,pageSize:r,size:s}=this;if(this.paginationEnabled){let o=this.pageCount===this.pageIndex+1?s%r:r;return i?Math.min(t.length,o):e.length?Math.min(e.length,o):o}return i?t.length:e.length?e.length:s}get fieldColumns(){return this.allColumns.filter(i=>bs(i))}get filterBySelectionEnabled(){return!!this._get("filterBySelectionEnabled")}set filterBySelectionEnabled(i){this._set("filterBySelectionEnabled",i)}get groupColumns(){return this.columns.toArray().filter(i=>ki(i))}get hasInvalidColumnConfiguration(){return this.visibleColumns.every(i=>i.frozen||i.frozenToEnd)}get highlightIds(){return this._get("highlightIds")||new O}set highlightIds(i){let t=Array.isArray(i)?new O(i):i;this.multipleSelectionEnabled||t.splice(1,t.length-1),this._set("highlightIds",Ge(t,this._get("highlightIds"),O))}get objectIds(){return this._get("objectIds")??new O}set objectIds(i){this._set("objectIds",Ge(i,this._get("objectIds"),O))}get pageCount(){let{pageSize:i,size:t}=this;return t===0||i===0?1:Math.ceil(t/i)}get pageIndex(){return this._get("pageIndex")||0}set pageIndex(i){let{pageCount:t}=this;ws(i,t)&&this._set("pageIndex",i)}get pageSize(){return this._get("pageSize")??50}set pageSize(i){this.store?.set("pageSize",i),this._set("pageSize",i)}get relationshipColumns(){return this.allColumns.filter(i=>ht(i))}get rowHighlightIds(){return this._get("rowHighlightIds")||new O}set rowHighlightIds(i){this._set("rowHighlightIds",Ge(i,this._get("rowHighlightIds"),O))}get size(){let i=this.store?.count??0,{maxSize:t}=this;return i!=null&&t!=null?Math.min(t,i):i}get state(){return this.store?.state??"disabled"}get visibleColumns(){return this.columns.toArray().filter(i=>!i.hidden)}closeColumnMenus(){this.allColumns.forEach(i=>i.closeMenu())}sortColumn(i,t){if(!i)return;let e=this.findColumn(i);e&&(e.direction=t)}hideColumn(i){let t=this.findColumn(i);t?.hidden===!1&&(t.hidden=!0)}showColumn(i){let t=this.findColumn(i);t?.hidden&&(t.hidden=!1)}showAllColumns(){this.allColumns.forEach(i=>{i.hidden&&(i.hidden=!1)})}findColumn(i){return this.allColumns.find(t=>t.fieldName===i)}refresh(){this.store&&(this.store.reset(),this.store.load())}toggleColumnVisibility(i){let t=this.findColumn(i);t&&(t.hidden=!t.hidden)}};c([u()],I.prototype,"actionColumn",null),c([u()],I.prototype,"allColumns",null),c([u()],I.prototype,"allVisibleColumns",null),c([u()],I.prototype,"cellPartNameGenerator",void 0),c([u()],I.prototype,"columnMenuIsOpen",null),c([u()],I.prototype,"columnPerformanceModeEnabled",void 0),c([u()],I.prototype,"columnReorderingEnabled",void 0),c([u()],I.prototype,"columns",void 0),c([u()],I.prototype,"dataProvider",void 0),c([u()],I.prototype,"editing",null),c([u()],I.prototype,"editableColumns",null),c([u()],I.prototype,"effectiveSize",null),c([u()],I.prototype,"fieldColumns",null),c([u()],I.prototype,"filterBySelectionEnabled",null),c([u()],I.prototype,"groupColumns",null),c([u()],I.prototype,"hasInvalidColumnConfiguration",null),c([u()],I.prototype,"highlightIds",null),c([u()],I.prototype,"maxSize",void 0),c([u()],I.prototype,"multipleSelectionEnabled",void 0),c([u()],I.prototype,"multiSortEnabled",void 0),c([u()],I.prototype,"objectIds",null),c([u()],I.prototype,"pageCount",null),c([u()],I.prototype,"pageIndex",null),c([u()],I.prototype,"pageSize",null),c([u()],I.prototype,"paginationEnabled",void 0),c([u()],I.prototype,"relationshipColumns",null),c([u()],I.prototype,"rowHighlightIds",null),c([u()],I.prototype,"rowDetailsRenderer",void 0),c([u({readOnly:!0})],I.prototype,"size",null),c([u()],I.prototype,"store",void 0),c([u({readOnly:!0})],I.prototype,"state",null),c([u()],I.prototype,"visibleColumns",null),I=c([Q("esri.widgets.FeatureTable.Grid.GridViewModel")],I);var Ii=I;var Nr="esri-grid",yd="compact column-borders",Dr={base:Nr,content:`${Nr}__content`,grid:`${Nr}__grid`},vd={sort:["Enter"," "]},E=class extends os{constructor(i,t){super(i,t),this._columnElements=[],this._grid=null,this._temporaryHighlightId=null,this.itemIdPath=null,this.messages=null,this.selectionColumnEnabled=!0,this.viewModel=new Ii,this._onSelectedItemsChange=this._onSelectedItemsChange.bind(this)}initialize(){this.addHandles([this.columns.on("before-changes",()=>this.renderNow()),this.columns.on("change",()=>this.onColumnChange()),K(()=>this.highlightIds,"before-add",({target:i})=>{!this.multipleSelectionEnabled&&i.length&&i.removeAll()}),this.rowHighlightIds.on("change",()=>this.generateCellPartNames()),S(()=>this.effectiveSize,()=>this._updateGridSize()),S(()=>this.viewModel.editing,()=>{this.generateCellPartNames(),this.requestContentUpdate()}),S(()=>this.store?.state,(i,t)=>{i!=="ready"||t!=="loaded"&&t!=="error"||this.refreshPageCache()}),K(()=>this._table,"scroll",()=>this.viewModel.closeColumnMenus()),K(()=>this._table,"scrollend",()=>{this.paginationEnabled||(this.pageIndex=this.getVirtualPageIndex())}),S(()=>this.multipleSelectionEnabled,i=>{!i&&this.highlightIds.length>1&&this.highlightIds.removeAll()})])}destroy(){this.resetColumns(),this.columns.destroyed||this.columns.destroy()}resetColumns(){this.columns.drain(i=>!i.destroyed&&i.destroy())}get _editInfos(){return this.viewModel.editableColumns.map(i=>i.editInfo).filter(fe)}get _columnRendering(){return this.columnPerformanceModeEnabled?"lazy":"eager"}get _selectedItems(){let{highlightIds:i,store:t}=this;return i.toArray().map(e=>t?.getItemByObjectId(e)??{objectId:e})}get _table(){return this._grid?.$?.table}get cellPartNameGenerator(){return this.viewModel.cellPartNameGenerator}set cellPartNameGenerator(i){this.viewModel.cellPartNameGenerator=i}get columns(){return this.viewModel.columns}set columns(i){this.viewModel.columns=i}get columnPerformanceModeEnabled(){return this.viewModel.columnPerformanceModeEnabled}set columnPerformanceModeEnabled(i){this.viewModel.columnPerformanceModeEnabled=i}get columnReorderingEnabled(){return this.viewModel.columnReorderingEnabled}set columnReorderingEnabled(i){this.viewModel.columnReorderingEnabled=i}get pageIndex(){return this.viewModel.pageIndex}set pageIndex(i){this.viewModel.pageIndex=i}get dataProvider(){return this.viewModel.dataProvider}set dataProvider(i){this.viewModel.dataProvider=i}get effectiveSize(){return this.viewModel.effectiveSize}get hasInvalidColumnConfiguration(){return this.viewModel.hasInvalidColumnConfiguration}get highlightIds(){return this.viewModel.highlightIds}set highlightIds(i){this.viewModel.highlightIds=i}get temporaryHighlightId(){return this._temporaryHighlightId}get isEditingActive(){return!!this._editInfos.length}get isReady(){return!!this._grid}get label(){return this.messages?.widgetLabel??""}set label(i){this._overrideIfSome("label",i)}get multipleSelectionEnabled(){return this.viewModel.multipleSelectionEnabled}set multipleSelectionEnabled(i){this.viewModel.multipleSelectionEnabled=i}get multiSortEnabled(){return this.viewModel.multiSortEnabled}set multiSortEnabled(i){this.viewModel.multiSortEnabled=i}get pageSize(){return this.viewModel.pageSize}set pageSize(i){this.viewModel.pageSize=i}get paginationEnabled(){return this.viewModel.paginationEnabled}set paginationEnabled(i){this.viewModel.paginationEnabled=i}get rowDetailsRenderer(){return this.viewModel.rowDetailsRenderer}set rowDetailsRenderer(i){this.viewModel.rowDetailsRenderer=i}get rowHighlightIds(){return this.viewModel.rowHighlightIds}set rowHighlightIds(i){this.viewModel.rowHighlightIds=i}get size(){return this.viewModel.size}get sortOrders(){return this._grid?._sorters?this._grid._sorters.filter(i=>!!i&&i.path).map(({direction:i,path:t})=>({direction:i,path:t})):[]}get store(){return this.viewModel.store}set store(i){this.viewModel.store=i}addSorter(i){this._grid?.__updateSorter(i,!1,!1),this.notifyChange("sortOrders")}getColumnProps(i,t){let{id:e}=this,{autoWidth:r,direction:s,fieldName:o,flexGrow:n,frozen:a,frozenToEnd:l,hidden:d,label:h,resizable:p,textAlign:m,width:_}=i,b=`${e}_${o}_${t}`,{renderFunction:C,footerRenderFunction:w,headerRenderFunction:T}=i,v=w?(N,j)=>w({root:N,column:j}):void 0,M=T?(N,j)=>T({root:N,column:j}):void 0,k=C?(N,j,re)=>C({root:N,column:j,rowData:re}):void 0,R="";return i.direction&&(R+=" direction"),i.invalid&&(R+=" invalid"),{footerRenderer:v,headerRenderer:M,renderer:k,autoWidth:r,direction:s,flexGrow:n,frozen:a,frozenToEnd:l,headerPartName:R,key:b,resizable:p,bind:this,"data-fieldName":o,header:h,hidden:this.hasInvalidColumnConfiguration||d,path:o,"text-align":m,width:typeof _=="number"?`${_}px`:_,afterCreate:this._afterColumnCreate,afterRemoved:this._afterColumnRemoved}}clearSelection(){this._clearSelection(),this.scheduleRender()}clearSort(){let i=!1;this._grid&&(this._grid._sorters?.length&&(this._grid._sorters.forEach(t=>{t._order=null,t.direction=null}),i=!0),this.columns.length&&this.columns.some(t=>!!t.direction)&&(this.columns.forEach(t=>t.direction=null),i=!0),i&&(this.notifyChange("sortOrders"),this.scheduleRender()))}findColumn(i){return this.viewModel.findColumn(i)}generateCellPartNames(){this._grid?.generateCellPartNames()}getFirstVisibleRowIndex(){return this._grid?._firstVisibleIndex||0}getVirtualPageIndex(){return Math.floor(this.getFirstVisibleRowIndex()/this.pageSize)}getLastVisibleRowIndex(){return this._grid?._lastVisibleIndex||0}getVisibleItemsCount(){return this._grid?._visibleItemsCount||0}getRowContainingNode(i){try{return this._grid?._getRowContainingNode(i)}catch{return null}}getSlotElementByName(i){return this._grid?.shadowRoot?.querySelector(`slot[name='${i}']`)??null}hasSorter(i){return this._grid?._sorters?.includes(i)||!1}hideColumn(i){this.viewModel.hideColumn(i)}recalculateColumnWidths(){this._grid?.recalculateColumnWidths()}reset(){return y(this,null,function*(){this._clearSelection(),yield this.store?.reset(),this.scrollToTop()})}refreshPageCache(){this._grid?.clearCache(),this._temporaryHighlightId=null}requestContentUpdate(){this._grid?.requestContentUpdate(),this._temporaryHighlightId=null}selectRows(i){let{itemIdPath:t}=this,e=i?.filter(s=>!this.highlightIds.includes(s[t])),r=e.map(s=>s[t]);r.length&&(this.multipleSelectionEnabled||(this.highlightIds.removeAll(),r.splice(1)),this.highlightIds.addMany(r))}deselectRows(i){let{itemIdPath:t}=this,e=i?.map(r=>r[t])||[];e.length&&this.highlightIds.removeMany(e)}showColumn(i){this.viewModel.showColumn(i)}sort({path:i,direction:t}){this.viewModel.sortColumn(i,t),this.notifyChange("sortOrders")}scrollToIndex(i){this._grid?.isConnected&&this._grid?.scrollToIndex(i),this._temporaryHighlightId=null}scrollToTop(){this.scrollToIndex(0)}scrollToBottom(){this.scrollToIndex(1/0)}scrollLeft(i){let{_table:t}=this;t&&(t.scrollLeft=i)}toggleColumnVisibility(i){this.viewModel.toggleColumnVisibility(i)}onColumnChange(){this._columnElements.forEach(i=>{this._applyRenderersToColumnElement(i)}),this.requestContentUpdate()}render(){return _e("div",{bind:this,class:this.classes(Dr.base,_s.widget)},_e("div",{bind:this,class:Dr.content},this._renderGrid()))}_renderGrid(){return _e("vaadin-grid",{afterCreate:this._afterGridCreate,afterUpdate:this._afterGridUpdate,bind:this,cellPartNameGenerator:this.cellPartNameGenerator,class:Dr.grid,columnRendering:this._columnRendering,columnReorderingAllowed:this.columnReorderingEnabled,dataProvider:this.dataProvider,id:`${this.id}_grid`,itemIdPath:this.itemIdPath,multiSort:this.multiSortEnabled,pageSize:this.pageSize,ref:"grid",rowDetailsRenderer:this.rowDetailsRenderer,selectedItems:this._selectedItems,size:this.effectiveSize},this._renderAllColumns())}_renderAllColumns(){return this.viewModel.state!=="disabled"&&this.columns.length?[this._renderSelectionColumn(),this._renderColumns()]:null}_renderSelectionColumn(){return _e("vaadin-grid-selection-column",{_selectAllHidden:!0,autoWidth:!1,bind:this,dragSelect:!0,frozen:!0,hidden:this.hasInvalidColumnConfiguration||!this.selectionColumnEnabled,selectAll:!1,sortable:!1,textAlign:"center"})}_renderColumns(){return Array.from(this.columns,(i,t)=>"columns"in i?this._renderGroupColumn(i,t):_e("vaadin-grid-column",V({},this.getColumnProps(i,t)))).filter(fe)}_renderGroupColumn(i,t){let e=this.getColumnProps(i,t);if(e.hidden||!i.columns)return null;let r=i.columns.filter(({hidden:s})=>!s);return r.length?_e("vaadin-grid-column-group",V({},e),r.map(s=>_e("vaadin-grid-column",V({},this.getColumnProps(s,t))))):null}_afterGridCreate(i){let t=this._grid=i;t.setAttribute("theme",yd),customElements.whenDefined("vaadin-grid").then(()=>{this._appendStyles(),this._addGridEventListeners()}),t.__updateSorter=(e,r,s)=>{let o=t._sorters,n=!o.includes(e);if(!e.direction&&n)return;e._order=null;let{multiSort:a,multiSortOnShiftClick:l,multiSortPriority:d}=t,h=o.filter(p=>p!==e);a&&(!l||!s)||l&&r?e._initialOrder!=null?(n?o[e._initialOrder]=e:o.splice(e._initialOrder,0,e),e._initialOrder=null):t._sorters=d==="append"?[...h,e]:[e,...h]:(e.direction||l)&&(t._sorters=e.direction?[e]:[],h.forEach(p=>{p._order=null,p.direction=null}))},t.__removeSorters=e=>{if(e.length===0)return;let r=new Set(e.filter(s=>!s.direction));t._sorters=t._sorters.filter(s=>!r.has(s)),t.__applySorters()}}_appendStyles(){let i=this._grid?.shadowRoot,t=document.createElement("style");i&&(t.textContent=`
      #items [part~="row"][editing],
      #items [part~="row"][editing][selected] {
        z-index: 2;
      }

      #items [part~="editing"],
      #items [part~="editing"][selected] {
        z-index: 3;
      }

      [frozen], [frozen-to-end] {
        z-index: 4;
      }

      [last-frozen] {
        overflow: visible;
      }

      [part~='cell'] ::slotted(vaadin-grid-cell-content) {
        align-items: center;
        box-sizing: border-box !important;
        height: 100%;
        line-height: 2em;
        min-height: 40px;
      }

      #items [part~="text-wrap"] {
        text-wrap: wrap;
      }
    `,i.appendChild(t))}_afterGridUpdate(i){this._grid||(this._grid=i)}_afterColumnCreate(i){this._columnElements.push(i)}_afterColumnRemoved(i){let t=this._columnElements.indexOf(i,0);t>-1&&this._columnElements.splice(t,1)}_updateGridSize(){this._grid&&(this._grid.size=this.effectiveSize,this.scheduleRender())}_addGridEventListeners(){let i=this._grid;Ot(i),this.addHandles([Te(i,["click","dblclick","keydown","pointerover","pointerout"],t=>this._onGridInteraction(t)),Te(i,["pointerover","pointerout","cell-focus"],t=>this._onTransientGridInteraction(t)),Te(i,"selected-items-changed",this._onSelectedItemsChange),Te(i,"sorter-changed",()=>this.notifyChange("sortOrders")),Te(i,"column-resize",t=>{let e=t.detail.resizedColumn,r=e.getAttribute("data-fieldName");this.findColumn(r)?.set({width:e.width})}),Te(i,"column-reorder",()=>this._onColumnOrderChange())])}_onGridInteraction(i){let t=this._grid;if(Ot(t),(i.type==="pointerover"||i.type==="pointerout")&&i.relatedTarget!==t){let{target:l,relatedTarget:d}=i;if(!this._isGridCellContentNode(l)||!this._isGridCellContentNode(d))return}let e=null;try{e=t.getEventContext(i)}catch{}if(!e)return;let{column:r,index:s,item:o,section:n}=e;if(!n)return;if(n==="header"&&i.type==="keydown"&&r?.path){let l=i.key;vd.sort.includes(l)&&this.findColumn(r.path)?.sort()}let a=`cell-${i.type}`;this.emit(a,{type:a,context:e,index:s,item:o,native:i,path:r?.path??void 0})}_onTransientGridInteraction(i){if(i.type==="pointerout")return void(this._temporaryHighlightId=null);let t=this._grid;if(t)try{let{item:e}=t.getEventContext(i);this._temporaryHighlightId=e?.objectId}catch{this._temporaryHighlightId=null}}_isGridCellContentNode(i){return!!(i&&i instanceof HTMLElement&&i.localName==="vaadin-grid-cell-content")}_onColumnOrderChange(){let i=this._grid;Ot(i);let t=i._getColumnsInOrder(0),e=[],r=(this.viewModel.groupColumns.length?i._getColumnsInOrder(1):t).map(s=>s.getAttribute("data-fieldName"));t?.forEach(s=>{let o=s.getAttribute("data-fieldName");if(o!=null){let n=this.findColumn(o);e.push(o),n&&"columns"in n&&n.columns?.length&&n.columns.sort((a,l)=>r.indexOf(a.fieldName)>r.indexOf(l.fieldName)?1:-1)}}),this.columns.sort((s,o)=>e.indexOf(s.fieldName)>e.indexOf(o.fieldName)?1:-1),this.notifyChange("sortOrders"),this.emit("column-reorder",{type:"column-reorder"})}_clearSelection(){this.highlightIds.removeAll(),this._temporaryHighlightId=null}_onSelectedItemsChange(i){let{highlightIds:t,itemIdPath:e}=this,r=i.detail.value.map(o=>o[e]),s=r.filter(o=>!t.includes(o));if(!this.multipleSelectionEnabled&&s.length&&t.length)t.removeAll(),t.add(s[0]);else{let o=t.filter(n=>!r.includes(n));t.removeMany(o),t.addMany(s)}}_applyRenderersToColumnElement(i){let t=i?.path,e=t!=null?this.findColumn(t):void 0;if(e)try{let{renderFunction:r,footerRenderFunction:s,headerRenderFunction:o}=e;r&&"renderer"in i&&(i.renderer=(n,a,l)=>r({root:n,column:a,rowData:l})),s&&(i.footerRenderer=(n,a)=>s({root:n,column:a})),o&&(i.headerRenderer=(n,a)=>o({root:n,column:a}))}catch{}}};c([u()],E.prototype,"_editInfos",null),c([u()],E.prototype,"_columnElements",void 0),c([u()],E.prototype,"_columnRendering",null),c([u()],E.prototype,"_selectedItems",null),c([u()],E.prototype,"_grid",void 0),c([u()],E.prototype,"_table",null),c([u()],E.prototype,"_temporaryHighlightId",void 0),c([u()],E.prototype,"cellPartNameGenerator",null),c([u()],E.prototype,"columns",null),c([u()],E.prototype,"columnPerformanceModeEnabled",null),c([u()],E.prototype,"columnReorderingEnabled",null),c([u()],E.prototype,"pageIndex",null),c([u()],E.prototype,"dataProvider",null),c([u()],E.prototype,"effectiveSize",null),c([u()],E.prototype,"hasInvalidColumnConfiguration",null),c([u()],E.prototype,"highlightIds",null),c([u()],E.prototype,"temporaryHighlightId",null),c([u()],E.prototype,"isEditingActive",null),c([u()],E.prototype,"isReady",null),c([u()],E.prototype,"itemIdPath",void 0),c([u()],E.prototype,"label",null),c([u(),Ve("esri/widgets/FeatureTable/t9n/FeatureTable")],E.prototype,"messages",void 0),c([u()],E.prototype,"multipleSelectionEnabled",null),c([u()],E.prototype,"multiSortEnabled",null),c([u()],E.prototype,"pageSize",null),c([u()],E.prototype,"paginationEnabled",null),c([u()],E.prototype,"rowDetailsRenderer",null),c([u()],E.prototype,"rowHighlightIds",null),c([u()],E.prototype,"selectionColumnEnabled",void 0),c([u()],E.prototype,"size",null),c([u({readOnly:!0})],E.prototype,"sortOrders",null),c([u()],E.prototype,"store",null),c([u()],E.prototype,"viewModel",void 0),E=c([Q("esri.widgets.FeatureTable.Grid.Grid")],E);var Zn=E;var ie=class extends Mt{constructor(i){super(i),this.attachmentId=null,this.attachmentInfos=[],this.candidates=null,this.error=null,this.form=null,this.mode="list",this.objectId=null}initialize(){this.addHandles([S(()=>this.objectId,()=>this.reset()),S(()=>this.candidates,()=>{this.error=null}),S(()=>this.attachmentInfos.length,i=>{i===0&&(this.mode="file")})])}onEditComplete(){this.attachmentId=null,this.candidates=null,this.mode="list"}reset(){this.attachmentId=null,this.candidates=null,this.error=null}};c([u()],ie.prototype,"attachmentId",void 0),c([u()],ie.prototype,"attachmentInfos",void 0),c([u()],ie.prototype,"candidates",void 0),c([u()],ie.prototype,"error",void 0),c([u()],ie.prototype,"form",void 0),c([u()],ie.prototype,"mode",void 0),c([u()],ie.prototype,"objectId",void 0),ie=c([Q("esri.widgets.FeatureTable.support.AttachmentsViewOptions")],ie);var Qn=ie;function Cd(i){return Object.keys(i.attributes).map(t=>{let e=i.attributes[t];return t.toLowerCase()==="objectid"||t.toLowerCase()==="fid"?new dt({name:t,alias:t,type:"oid"}):new dt(typeof e=="number"?{name:t,alias:t,type:"double"}:{name:t,alias:t,type:"string"})})}function xd(i){if(!i.fields){let t=i.features[0];if(t.layer){i.fields=t.layer.fields;let e=Object.keys(t.attributes),r=i.fields.filter(s=>e.includes(s.name));i.fields=r}else i.fields=Cd(t)}return i}function wd(i){return i.map(({attributes:t})=>t)}function Ad(i){let{delimiter:t,fields:e=[],outFields:r=[]}=i,s=t||",",o=e.map(n=>n.name);return n=>{let a="";return o.filter(l=>r.includes(l)).forEach(l=>{let d=e.find(({name:p})=>p===l),h=n[l]||"";if(d?.type==="date"&&(h=new Date(h).toString()),d?.domain&&d.domain.type==="coded-value"){let p=d.domain.codedValues.find(m=>h===m.code);p&&(h=p.name)}typeof h=="string"&&h.includes(s)&&(h=`"${h}"`),a+=`${h}${s}`}),`${a}\r
`}}function Xn(s){return y(this,arguments,function*(i,{includeGeometry:t=!0,delimiter:e=",",outFields:r=["*"]}={}){i=xd(i),t&&i.geometryType!=="point"&&se.getLogger("esri.exports.csv").warn(`The input geometry ${i.geometryType} is not supported. Geometry will be excluded from export.`);let{features:o}=i;if(!o.length)return null;let n=i.fields,[a]=r;a==="*"&&(r=n.map(b=>b.name)),t&&i.geometryType==="point"&&(n.some(b=>b.name==="x"||b.name==="y")||(n=[...n,new dt({name:"lon",alias:"Longitude",type:"double"}),new dt({name:"lat",alias:"Latitude",type:"double"})],r=[...r,"lon","lat"]),o.forEach(({attributes:b,geometry:C})=>{b.lon=C?.type==="point"?C.longitude:null,b.lat=C?.type==="point"?C.latitude:null})),n=n.filter(b=>r.includes(b.name));let l=e||",",d=wd(o),h=n.map(b=>b.name).join(l),p=Ad({delimiter:l,outFields:r||n.map(b=>b.name),fields:n}),m=`${h}${l}\r
`;d.forEach(b=>{m+=p(b)});let _=new RegExp(`${l}\r
\\s*$`,"g");return m.replace(_,"")})}function Ed(){return"showSaveFilePicker"in window&&(()=>{try{return window.self===window.top}catch{return!1}})()}function Jn(i){return y(this,null,function*(){let{layer:t,includeGeometry:e,objectIds:r,outFields:s}=i,o=s??t.outFields??["*"],n=t.createQuery();n.objectIds=r,n.outFields=o;let a=yield t.queryFeatures(n),l=yield Xn(a,{includeGeometry:!t.isTable&&(e||a.geometryType==="point"),outFields:o});if(!l)throw new U("export-csv:no-output","Unable to generate a valid export string");let d=new Blob([l],{type:"text/csv"}),h=is.sanitize(t.title);if(Ed())try{let p=yield showSaveFilePicker({suggestedName:h,types:[{accept:{"text/csv":[".csv"]}}]}),m=yield p.createWritable();yield m.write(d),yield m.close()}catch(p){if(p instanceof U&&p.name!=="AbortError")throw p}else zi(d,`${h}.csv`)})}function ea(i){return y(this,null,function*(){if(!i?.url)return;let t=yield Zr(`${i.url}`);zi(t,i.name)})}var f=class extends Mt{constructor(i){super(i),this._attachmentsOperationQueue=new O,this._defaultOutFields=["*"],this._editOperationQueue=new O,this._loaded=!1,this._loadError=!1,this._loading=!1,this._objectIdCache=new O,this._queryOperationQueue=new O,this.attachmentsEnabled=!1,this.count=0,this.failures=new O,this.filterGeometry=null,this.initialSize=null,this.layer=null,this.objectIds=null,this.outFields=null,this.pageCache=new Qr,this.pageSize=50,this.relationshipConfig=null,this.relatedRecordsEnabled=!1,this.returnGeometry=!1,this.returnZ=!1,this.returnM=!1,this.sortOrders=[],this.timeExtent=null,this.view=null,this.where=null}initialize(){this.addHandles([S(()=>[this.filterGeometry,this.layer,this.objectIds,this.outFields,this.pageSize,this.relationshipConfig,this.returnGeometry,this.returnM,this.returnZ,this.timeExtent,this.where],()=>this._reset()),S(()=>this.orderByFields,()=>this._clearCaches(),{equals:Gr}),Fi(()=>this.attachmentsEnabled,()=>this._reset()),Fi(()=>this.relatedRecordsEnabled,()=>this._reset())])}destroy(){this.layer=null,this.itemCache?.destroy(),this.failures?.destroy()}get _capabilities(){let{layer:i}=this;return i?.effectiveCapabilities??i?.capabilities}get _effectiveReturnZ(){return this.returnZ&&this.supportsZ}get _effectiveReturnM(){return this.returnM&&this.supportsM}get _layerWithAttachments(){let{layer:i}=this;return i&&this._capabilities&&this.attachmentsEnabled&&this.supportsAttachments&&Dt(i)?i:null}get _layerWithAttachmentsEditing(){let{_layerWithAttachments:i}=this;return i&&ys(i)&&this.supportsEditing?i:null}get _layerWithEditing(){let i=this.layer;return vs(i)&&this.supportsEditing?i:null}get _layerWithRelationships(){let i=this.layer;return ct(i)&&this.supportsQueryRelated?i:null}get _relatedLayer(){return this.relationshipConfig?.relatedLayer}get _relatedLayerCapabilities(){let{_relatedLayer:i}=this;return i?.effectiveCapabilities??i?.capabilities}get _relatedLayerSupportsCacheHint(){return!!this._relatedLayerCapabilities?.queryRelated?.supportsCacheHint}get _relatedLayerSupportsQuery(){return!!this._relatedLayerCapabilities?.operations.supportsQuery}get _relatedLayerSupportsQueryRelated(){let{_relatedLayerCapabilities:i}=this;return!!i?.queryRelated?.supportsCount&&!!i?.queryRelated?.supportsPagination}get _sortedFieldNames(){return this.sortOrders.map(({fieldName:i})=>i)}get _subtypeCode(){return this.layer?.subtypeCode??null}get _subtypeField(){let{layer:i}=this;return lt(i?.parent)?i.subtypeField:null}get _canUseRelatedLayer(){return!(!this._relatedLayerSupportsQuery||!this._relatedLayerSupportsQueryRelated)}get canAddRelatedFeature(){let{state:i,relationship:t,supportsAdd:e,supportsEditing:r}=this;if(i!=="loaded"||!t||!e||!r)return!1;let{count:s}=this,{cardinality:o,role:n}=t,a=s>0;return(o!=="one-to-one"||!a)&&(o!=="one-to-many"||n!=="origin"||!a)}get effectiveOutFields(){let{layer:i,outFields:t}=this;if(!i||!t?.length)return this._defaultOutFields;let e=[];t.forEach(o=>{let n=i.fieldsIndex.normalizeFieldName(o);n&&e.push(n)});let{objectIdField:r}=i,s=i.fieldsIndex.normalizeFieldName(r)??r;return s&&!e.includes(s)&&e.unshift(s),e}get effectiveTimeExtent(){let{layer:i,timeExtent:t}=this;return t||i&&"timeExtent"in i&&i.timeExtent||null}get effectiveWhere(){return this.where||this.layer?.definitionExpression||"1=1"}get itemCache(){return new O({items:[...this.pageCache.values()].flat()})}get layerView(){let{layer:i,view:t}=this;if(!i||!t)return null;let e=i.type==="sublayer"||kt(i)?i.parent:i;return t.allLayerViews.find(r=>r.layer===e)}get orderByFields(){let{_sortedFieldNames:i,layer:t,sortOrders:e}=this,r=e.filter(({fieldName:s,direction:o},n)=>i.indexOf(s)===n&&o!=null).map(({fieldName:s,direction:o})=>`${s} ${o?.toUpperCase()}`);if(t&&!r.length&&!t.objectIdField&&t.fields?.length){let s=t.fields.find(o=>o.name);if(s){let o=t.fieldsIndex.normalizeFieldName(s.name);o&&r.push(`${o} ASC`)}}return r}get querying(){return this._queryOperationQueue.length>0}get relationship(){let{relationshipConfig:i}=this;return i?.relationshipId==null?null:this.relationships?.find(t=>t.id===i.relationshipId)}get relationshipIds(){return this.relationships?.map(i=>i.id)??[]}get relationshipInfos(){let{_layerWithRelationships:i,relatedRecordsEnabled:t,relationships:e,view:r}=this,s=[];return t&&i?.loaded&&r?.map&&e?.length&&e.forEach(o=>{let n=Cs(i,r,o);n&&(n.load(),s.push({layer:i,relatedLayer:n,relationshipId:o.id}))}),s}get relationships(){return this._layerWithRelationships?.relationships}get state(){let{layer:i,_loaded:t,_loadError:e,_loading:r}=this;return!i||i.destroyed?"disabled":e||i.loadError?"error":i.loadStatus==="loaded"&&t?"loaded":r?"loading":"ready"}get supportsAdd(){return!!this._capabilities?.operations.supportsAdd}get supportsAddingAttachments(){return!(!this._layerWithAttachmentsEditing||!this.supportsAdd)}get supportsAttachments(){let{_capabilities:i}=this;return!(!i?.data?.supportsAttachment||!i?.operations.supportsQueryAttachments)}get supportsCacheHint(){return!!this._capabilities?.query?.supportsCacheHint}get supportsCacheHintQueryRelated(){return!!this._capabilities?.queryRelated?.supportsCacheHint}get supportsDelete(){return!!this._capabilities?.operations.supportsDelete}get supportsDeletingAttachments(){return!(!this._layerWithAttachmentsEditing||!this.supportsDelete)}get supportsEditing(){return!!this._capabilities?.operations.supportsEditing}get supportsM(){return!!this.layer?.hasM&&!!this._capabilities?.data?.supportsM}get supportsOrderBy(){return!!this._capabilities?.query?.supportsOrderBy}get supportsPagination(){return!!this._capabilities?.query?.supportsPagination}get supportsQuery(){return!!this._capabilities?.operations.supportsQuery}get supportsQueryRelated(){let{_capabilities:i}=this;return!!i?.queryRelated?.supportsCount&&!!i?.queryRelated?.supportsPagination}get supportsResizeAttachments(){let{_capabilities:i}=this;return!(!this.supportsAttachments||!i?.attachment?.supportsResize)}get supportsUpdate(){return!!this._capabilities?.operations.supportsUpdate}get supportsUpdateAttachments(){return!(!this._layerWithAttachmentsEditing||!this.supportsUpdate)}get supportsZ(){return!!this.layer?.hasZ&&!!this._capabilities?.data?.supportsZ}get syncing(){return this.syncingFeatureEdits||this.syncingAttachmentEdits}get syncingAttachmentEdits(){return this._attachmentsOperationQueue.length>0}get syncingFeatureEdits(){return this._editOperationQueue.length>0}addAttachment(i,t){return y(this,null,function*(){let{_layerWithAttachmentsEditing:e}=this;if(!e||!this.supportsAddingAttachments)return{};let r=yield this._queueAttachmentsOperation(i,()=>e.addAttachment(this._createBaseGraphic(e,i),t));return this._ensureArrayContent(r)})}deleteAttachments(i,t){return y(this,null,function*(){let{_layerWithAttachmentsEditing:e}=this;if(!e||!this.supportsDeletingAttachments||!t.length)return[];let r=yield this._queueAttachmentsOperation(i,()=>e.deleteAttachments(this._createBaseGraphic(e,i),t));return this._ensureArray(r)})}deleteRowsByObjectId(i){return y(this,null,function*(){let{_layerWithEditing:t}=this;if(!this.supportsDelete||!t)throw new U("store:delete-error","Delete is not supported.");let e=i.map(r=>this.getItemByObjectId(r)?.feature).filter(fe);return this._queueEditOperation(()=>t.applyEdits({deleteFeatures:e}))})}fetchItems(i){return y(this,null,function*(){let{page:t}=i,{pageSize:e}=this,r=t*e,s=r+e,{layer:o,state:n}=this;return o&&n==="loaded"?this._query({layer:o,start:r,num:s,page:t,pageSize:e}):[]})}getAttachmentsByObjectId(i,t){return y(this,null,function*(){let e=this.getItemByObjectId(i)?.attachments??[];return!e.length&&t?(yield this._queryAttachments([i]))[i]??[]:e})}getItemByObjectId(i){for(let t of this.pageCache.values())for(let e of t)if(e.objectId===i)return e}getItemIndexByObjectId(i){let{pageCache:t,pageSize:e}=this,r=t.entries(),s=-1;for(let[o,n]of r)if(n.some((a,l)=>{let d=a.objectId===i;return d&&(s=o*e+l),d}),s>-1)break;return s}load(){return y(this,null,function*(){let{layer:i}=this;if(!this._loading&&!this._loaded&&i){this._reset(),this._loading=!0;try{yield i.load(),i.parent&&lt(i.parent)&&(yield i.parent.loadAll()),yield i.when();let t=this.initialSize;this.initialSize=null,yield this.refresh(t),this._loaded=!0,this._loading=!1}catch(t){throw this._reset(),this._loadError=!0,this._logError("store:load-error","An error occurred."),t}}})}query(i){return y(this,null,function*(){let{state:t}=this;return this.supportsQuery&&t==="loaded"?this._query(i):[]})}refresh(i){return y(this,null,function*(){this._clearCaches(),yield this._syncCount(i),yield this._syncObjectIdCache()})}reset(){return y(this,null,function*(){this._reset()})}updateAttachment(i,t,e){return y(this,null,function*(){let{_layerWithAttachmentsEditing:r}=this;if(!r||!this.supportsUpdateAttachments)return{};let s=yield this._queueAttachmentsOperation(i,()=>r.updateAttachment(this._createBaseGraphic(r,i),t,e));return this._ensureArrayContent(s)})}updateItem(i){return y(this,null,function*(){let{_sortedFieldNames:t}=this,e=i.updates.map(({fieldName:s})=>s),r=yield this._update(i);return!r.updateFeatureResults.find(s=>s.error)&&e.some(s=>t.includes(s))&&this._clearCaches(),r})}verifyFeaturesByObjectId(i){return y(this,null,function*(){let{layer:t,state:e}=this;if(!t||e!=="loaded")return[];let{objectIdField:r}=t,s=yield this._verifyFeaturesByObjectId(i);return i.map(o=>s.some(n=>{let a=n.getObjectId()??n.attributes[r];return o===a}))})}_clearCaches(){this.pageCache.clear(),this._objectIdCache.removeAll()}_createBaseGraphic(i,t){let e=new Mi({attributes:{[i.objectIdField]:t}});return this._subtypeField&&this._subtypeCode!=null&&(e.attributes[this._subtypeField]=this._subtypeCode),e}_ensureArray(i){return Array.isArray(i)?i:[i]}_ensureArrayContent(i){return Array.isArray(i)?i[0]:i}_getObjectIdsForPage(i,t){let e=this._objectIdCache.toArray();return e.length>=i+t?e.slice(i,i+t):e.slice(i)}_logError(i,t){se.getLogger(this).error(i,t)}_reset(){this._clearCaches(),this.failures.removeAll(),this._attachmentsOperationQueue.removeAll(),this._editOperationQueue.removeAll(),this._queryOperationQueue.removeAll(),this._loading=!1,this._loaded=!1,this._loadError=!1,this._set("count",0)}_syncCount(i){return y(this,null,function*(){i==null?yield this._queryCount().then(t=>this._set("count",t)):this._set("count",i)})}_syncObjectIdCache(){return y(this,null,function*(){if(this.supportsPagination)return;let i=yield this._queryObjectIds();this._objectIdCache.removeAll(),this._objectIdCache.addMany(i)})}_verifyFeaturesByObjectId(i){return y(this,null,function*(){let{layer:t}=this;if(!t||!this.supportsQuery)throw new U("store:query-error","Layer does not support query operation.");let{effectiveTimeExtent:e,effectiveWhere:r,orderByFields:s,supportsCacheHint:o,supportsOrderBy:n}=this,a=t.createQuery();return a.where=r,a.timeExtent=e,a.returnGeometry=!1,a.objectIds=i.length?i:void 0,a.outFields=[t.objectIdField],n&&(a.orderByFields=s),o&&(a.cacheHint=!0),(yield t.queryFeatures(a)).features})}_update(i){return y(this,null,function*(){let{objectId:t,updates:e}=i,{_layerWithEditing:r}=this;if(!this.supportsUpdate||!r)throw new U("store:update-error","Update is not supported.");let s=this.getItemByObjectId(t)?.feature;if(!s)throw new U("store:update-error","Feature with provided 'objectId' not found.");let o=jr(s.attributes);e.forEach(({fieldName:l,value:d})=>o[l]=d);let n=new Mi({attributes:o}),a=r.applyEdits({updateFeatures:[n]}).then(l=>{let{updateFeatureResults:d}=l,h=d.find(p=>!!p.error);if(h)throw h.error;return d.length&&(s.attributes=o),l});return this._queueEditOperation(()=>a)})}_prepareFeatureData(i){let{attachments:t,features:e,layer:r,relatedRecords:s}=i,o=r.objectIdField;return e.map(n=>{let a=n.getObjectId()??n.attributes[o],l=[];return n.layer||n.sourceLayer||(n.layer=r,n.sourceLayer=r),s.forEach((d,h)=>{l.push({relationshipId:h,count:d[a]??0})}),{objectId:a,feature:n,attachments:t[a]??null,relatedRecords:l}})}_query(i){return y(this,null,function*(){let{page:t,refresh:e}=i;e===!0&&(yield this.refresh());let r=this.pageCache.get(t);if(r)return r;let s=yield this._queryPage(i);return this.pageCache.set(t,s),s})}_queryAttachments(i){let{_layerWithAttachments:t,effectiveWhere:e}=this;return t?i.some(r=>typeof r!="number")?Promise.reject(new U("invalid-object-id","Only numeric object ids are valid to query attachments")):t.queryAttachments(new ds({objectIds:i,where:e,returnMetadata:!0})):Promise.resolve({})}_queryCount(){return y(this,null,function*(){let{_relatedLayerSupportsCacheHint:i,layer:t,relationshipConfig:e,supportsCacheHint:r}=this;if(!t)return 0;if(e&&this._canUseRelatedLayer){let{objectId:d,relatedLayer:h,relationshipId:p}=e;return(yield h.queryRelatedFeaturesCount(new Nt({cacheHint:i,relationshipId:p,objectIds:[d]})))[d]??0}let{effectiveTimeExtent:s,effectiveWhere:o,filterGeometry:n,objectIds:a}=this,l=t.createQuery();return l.geometry=n,l.returnGeometry=!1,l.where=o,l.timeExtent=s,l.objectIds=a?.length?a:void 0,r&&(l.cacheHint=!0),t.queryFeatureCount(l)})}_queryFeatures(i){return y(this,null,function*(){let{relationshipConfig:t}=this;if(t&&this._canUseRelatedLayer)return this._queryRelatedFeatures(i,t);let{_effectiveReturnM:e,_effectiveReturnZ:r,effectiveOutFields:s,effectiveTimeExtent:o,effectiveWhere:n,filterGeometry:a,objectIds:l,orderByFields:d,pageSize:h,returnGeometry:p,supportsCacheHint:m,supportsOrderBy:_,supportsPagination:b}=this,{layer:C,start:w}=i,T=l?.length,v=C.createQuery();return v.returnGeometry=p,v.outFields=s,v.returnM=e,v.returnZ=r,b?(v.start=w,v.num=h,v.where=n,v.timeExtent=o,v.objectIds=T?l:void 0):v.objectIds=T?l:this._getObjectIdsForPage(w,h??0),_&&(v.orderByFields=d),a&&(v.geometry=a),m&&(v.cacheHint=!0),(yield C.queryFeatures(v)).features})}_queryObjectIds(){let{effectiveTimeExtent:i,effectiveWhere:t,filterGeometry:e,layer:r,objectIds:s,orderByFields:o,supportsCacheHint:n,supportsOrderBy:a}=this;if(!r)return Promise.resolve([]);let l=r.createQuery();return l.geometry=e,l.outFields=[r.objectIdField],l.returnGeometry=!1,l.where=t,l.timeExtent=i,l.objectIds=s?.length?s:void 0,a&&(l.orderByFields=o),n&&(l.cacheHint=!0),r.queryObjectIds(l)}_queryPage(i){return y(this,null,function*(){let{layer:t}=i;return this._queueQueryOperation(()=>y(this,null,function*(){let e=yield this._queryFeatures(i),r=e.map(n=>n.getObjectId()??n.attributes[t.objectIdField]),s=yield this._queryAttachments(r),o=yield this._queryRelatedCounts(r);return this._prepareFeatureData({layer:t,features:e,attachments:s,relatedRecords:o})||[]}))})}_queryRelatedCounts(i){return y(this,null,function*(){let{_layerWithRelationships:t,relationshipIds:e,supportsCacheHintQueryRelated:r}=this,s=new Map;return t&&i?.length&&e.length&&(yield Promise.allSettled(e.map(o=>y(this,null,function*(){let n=yield t.queryRelatedFeaturesCount(new Nt({cacheHint:r,relationshipId:o,objectIds:i}));s.set(o,n)})))),s})}_queryRelatedFeatures(i,t){return y(this,null,function*(){let{_defaultOutFields:e,_effectiveReturnM:r,_effectiveReturnZ:s,orderByFields:o,pageSize:n,returnGeometry:a,supportsCacheHint:l}=this,{layer:d,start:h}=i,{objectId:p,relatedLayer:m,relationshipId:_}=t,b=d.createQuery(),C=new Nt({cacheHint:l,num:n,objectIds:[p],orderByFields:o,outFields:e,relationshipId:_,returnGeometry:a,returnM:r,returnZ:s,start:h,where:b.where??void 0});return(yield m.queryRelatedFeatures(C))[p]?.features||[]})}_queueAttachmentsOperation(i,t){return this._attachmentsOperationQueue.push(t),t().then(e=>y(this,null,function*(){this._attachmentsOperationQueue.remove(t);let r=this._ensureArray(e),s=r.some(n=>n.error),o=this.getItemByObjectId(i);if(o&&(!s||r.length>1)){let n=yield this._queryAttachments([i]);o.attachments=n[i]}return e})).catch(e=>y(this,null,function*(){this._logError("store:attachment-error","An error occurred.");let r={error:e,retry:()=>{this.failures.remove(r),this._queueAttachmentsOperation(i,t)},cancel:()=>this.failures.remove(r)};throw this.failures.add(r),this._attachmentsOperationQueue.remove(t),e}))}_queueEditOperation(i){return this._editOperationQueue.push(i),i().then(t=>(this._editOperationQueue.remove(i),t)).catch(t=>{this._logError("store:edit-error","An error occurred.");let e={error:t,retry:()=>{this.failures.remove(e),this._queueEditOperation(i)},cancel:()=>this.failures.remove(e)};throw this.failures.add(e),this._editOperationQueue.remove(i),t})}_queueQueryOperation(i){return this._queryOperationQueue.push(i),i().then(t=>this._queryOperationQueue.includes(i)?t:[]).catch(t=>{this._logError("store:query-error","An error occurred.");let e={error:t,retry:()=>{this.failures.remove(e),this._queueQueryOperation(i)},cancel:()=>this.failures.remove(e)};return this.failures.add(e),[]}).then(t=>(this._queryOperationQueue.remove(i),t))}};c([u()],f.prototype,"_attachmentsOperationQueue",void 0),c([u({readOnly:!0})],f.prototype,"_capabilities",null),c([u()],f.prototype,"_defaultOutFields",void 0),c([u()],f.prototype,"_editOperationQueue",void 0),c([u()],f.prototype,"_effectiveReturnZ",null),c([u()],f.prototype,"_effectiveReturnM",null),c([u({readOnly:!0})],f.prototype,"_layerWithAttachments",null),c([u({readOnly:!0})],f.prototype,"_layerWithAttachmentsEditing",null),c([u({readOnly:!0})],f.prototype,"_layerWithEditing",null),c([u({readOnly:!0})],f.prototype,"_layerWithRelationships",null),c([u()],f.prototype,"_loaded",void 0),c([u()],f.prototype,"_loadError",void 0),c([u()],f.prototype,"_loading",void 0),c([u()],f.prototype,"_objectIdCache",void 0),c([u()],f.prototype,"_queryOperationQueue",void 0),c([u({readOnly:!0})],f.prototype,"_relatedLayer",null),c([u({readOnly:!0})],f.prototype,"_relatedLayerCapabilities",null),c([u({readOnly:!0})],f.prototype,"_relatedLayerSupportsCacheHint",null),c([u()],f.prototype,"_relatedLayerSupportsQuery",null),c([u()],f.prototype,"_relatedLayerSupportsQueryRelated",null),c([u()],f.prototype,"_sortedFieldNames",null),c([u()],f.prototype,"_subtypeCode",null),c([u()],f.prototype,"_subtypeField",null),c([u()],f.prototype,"_canUseRelatedLayer",null),c([u()],f.prototype,"attachmentsEnabled",void 0),c([u()],f.prototype,"canAddRelatedFeature",null),c([u({readOnly:!0})],f.prototype,"count",void 0),c([u()],f.prototype,"effectiveOutFields",null),c([u()],f.prototype,"effectiveTimeExtent",null),c([u()],f.prototype,"effectiveWhere",null),c([u({readOnly:!0})],f.prototype,"failures",void 0),c([u({types:as})],f.prototype,"filterGeometry",void 0),c([u()],f.prototype,"initialSize",void 0),c([u({readOnly:!0})],f.prototype,"itemCache",null),c([u()],f.prototype,"layer",void 0),c([u()],f.prototype,"layerView",null),c([u()],f.prototype,"objectIds",void 0),c([u()],f.prototype,"orderByFields",null),c([u()],f.prototype,"outFields",void 0),c([u({readOnly:!0})],f.prototype,"pageCache",void 0),c([u()],f.prototype,"pageSize",void 0),c([u({readOnly:!0})],f.prototype,"querying",null),c([u()],f.prototype,"relationship",null),c([u()],f.prototype,"relationshipConfig",void 0),c([u()],f.prototype,"relationshipIds",null),c([u()],f.prototype,"relationshipInfos",null),c([u()],f.prototype,"relationships",null),c([u()],f.prototype,"relatedRecordsEnabled",void 0),c([u()],f.prototype,"returnGeometry",void 0),c([u()],f.prototype,"returnZ",void 0),c([u()],f.prototype,"returnM",void 0),c([u()],f.prototype,"sortOrders",void 0),c([u({readOnly:!0})],f.prototype,"state",null),c([u()],f.prototype,"supportsAdd",null),c([u()],f.prototype,"supportsAddingAttachments",null),c([u()],f.prototype,"supportsAttachments",null),c([u()],f.prototype,"supportsCacheHint",null),c([u()],f.prototype,"supportsCacheHintQueryRelated",null),c([u()],f.prototype,"supportsDelete",null),c([u()],f.prototype,"supportsDeletingAttachments",null),c([u()],f.prototype,"supportsEditing",null),c([u()],f.prototype,"supportsM",null),c([u()],f.prototype,"supportsOrderBy",null),c([u()],f.prototype,"supportsPagination",null),c([u()],f.prototype,"supportsQuery",null),c([u()],f.prototype,"supportsQueryRelated",null),c([u()],f.prototype,"supportsResizeAttachments",null),c([u()],f.prototype,"supportsUpdate",null),c([u()],f.prototype,"supportsUpdateAttachments",null),c([u()],f.prototype,"supportsZ",null),c([u({readOnly:!0})],f.prototype,"syncing",null),c([u({readOnly:!0})],f.prototype,"syncingAttachmentEdits",null),c([u({readOnly:!0})],f.prototype,"syncingFeatureEdits",null),c([u({type:ls})],f.prototype,"timeExtent",void 0),c([u()],f.prototype,"view",void 0),c([u()],f.prototype,"where",void 0),f=c([Q("esri.widgets.FeatureTable.support.FeatureStore")],f);var Lr=f;var Hr="80px",g=class extends Ii{constructor(i){super(i),this._debounceRefresh=Yr(()=>this._refresh()),this._temporaryHighlightAbortController=null,this._currentTemporaryHighlight=null,this._highlights=new Wr,this.actionColumnConfig=null,this.attachmentsViewOptions=new Qn,this.attributeTableTemplate=null,this.autoRefreshEnabled=!0,this.columns=new O,this.dataProvider=(t,e)=>y(this,null,function*(){let{layer:r,store:s}=this;if(!e)return;if(!r||!s)return void(e&&e([]));yield r.load();let{objectIds:o}=this;if(this.filterBySelectionEnabled&&!this.highlightIds.length||o.length===1&&o.items[0]===-1)return void e([]);s.state!=="loaded"&&s.state!=="loading"&&(yield s.load());let n=this.paginationEnabled?this.pageIndex:t.page,a=yield s.fetchItems(Se(V({},t),{page:n}));e&&e(a)}),this.editingEnabled=!1,this.grid=null,this.highlightEnabled=!0,this.itemIdPath="objectId",this.layers=null,this.messages=null,this.messagesCommon=null,this.messagesUnits=null,this.messagesURIUtils=null,this.prompt=null,this.relatedTables=new O,this.relationshipColumnConfigs=null,this.selectionSource="table",this.showRelatedTableCallback=null,this.store=null,this.syncTemplateOnChangesEnabled=!0,this.tableController=null,this.tableParent=null,this.tableTemplate=null,this.tableTemplateOverride=null,this._onLayerRefresh=this._onLayerRefresh.bind(this),this._onShowPromptCallback=this._onShowPromptCallback.bind(this),this._set("store",new Lr),this._set("grid",new Zn({itemIdPath:this.itemIdPath,viewModel:this}))}initialize(){let i=()=>y(this,null,function*(){this.messages=yield at("esri/widgets/FeatureTable/t9n/FeatureTable"),this.messagesCommon=yield at("esri/t9n/common"),this.messagesUnits=yield at("esri/core/t9n/Units"),this.messagesURIUtils=yield at("esri/widgets/support/t9n/uriUtils")});i(),this.addHandles([Jr(()=>{i(),this._generateColumns()}),S(()=>[this.messages,this.messagesCommon,this.messagesURIUtils],()=>{let t=this.messages;this.grid&&(this.grid.messages=t),this.allColumns.forEach(e=>{e.messages=t,e.messagesCommon=this.messagesCommon,e.messagesURIUtils=this.messagesURIUtils}),this.refreshCellContent()},ts),K(()=>this.highlightIds,"change",t=>this._onHighlightIdsChange(t),{onListenerAdd:()=>this._syncSelection(),onListenerRemove:()=>this._highlights.removeAll()}),S(()=>this.grid?.temporaryHighlightId,t=>{this._temporaryHighlightAbortController?.abort(),this._temporaryHighlightAbortController=new AbortController,Ri(this._syncTemporaryHighlight(t,this._temporaryHighlightAbortController.signal))}),S(()=>this.attachmentsEnabled,()=>this.layer?.loaded&&this._generateColumns()),S(()=>this._viewSelection,()=>{this._viewSelectionReady&&(this.highlightIds.items=this._viewSelection)}),S(()=>[this._tableHighlightsReady,this._viewSelectionReady],()=>this._syncSelection()),S(()=>this.layer,(t,e)=>y(this,null,function*(){let r=this.grid;r&&(r.clearSort(),t&&e&&(yield this.reset())),this.goToPage(0),this._drainColumns(),this.store.layer=t,t&&(t.loaded?this._onLayerLoad():t.load().catch(()=>{}))})),S(()=>this.layer?.loaded,t=>t&&this._onLayerLoad()),S(()=>this.store.state,t=>{t==="loaded"&&(this.scrollToTop(),this.refreshCellContent())}),S(()=>this._effectiveTableTemplate,()=>{this.scrollLeft(),this.layer?.loaded&&this._generateColumns()}),S(()=>this.editingEnabled,t=>{this.editableColumns.forEach(e=>e.tableEditingEnabled=t),this.refreshCellContent()}),S(()=>this.timeZone??this.view?.timeZone,()=>this.refreshCellContent()),S(()=>this.layer?.definitionExpression,(t,e)=>(t||e)&&this.store.state==="loaded"&&this.reset()),S(()=>this.layer?.timeExtent,(t,e)=>(t||e)&&!this.timeExtent&&this.store.state==="loaded"&&this.reset()),K(()=>this.layer,"refresh",t=>this._onLayerRefresh(t)),K(()=>this.grid,["cell-click","cell-dblclick","cell-pointerover","cell-pointerout","cell-keydown","column-reorder"],({index:t,item:e,native:r,path:s,type:o})=>{let n=e?.feature,a=n?.getObjectId(),l=o==="cell-keydown"&&r&&r instanceof KeyboardEvent&&r.key==="Enter";this.emit(o,{feature:n,index:t,native:r,type:o,fieldName:s??void 0,objectId:a}),(l||o==="cell-click")&&this._onCellInteraction(a)}),S(()=>this.actionColumnConfig,t=>{let{actionColumn:e,columns:r}=this;e?t?e.set(t):r.remove(e):t&&r.length&&r.add(this._generateActionColumn(),t.frozenToEnd!==!1?void 0:this._getIndexOfFirstFrozenToEndColumn())}),S(()=>this.relatedRecordsEnabled,()=>this.layer?.loaded&&this._generateColumns()),K(()=>this.objectIds,"change",()=>this._onObjectIdsChange(),{onListenerAdd:()=>this._onObjectIdsChange()}),S(()=>[this.paginationEnabled,this.pageIndex],()=>this.refreshPageCache()),S(()=>this.activeSortOrders,t=>{this.store.sortOrders=t,this._syncAttributeTableTemplate()}),S(()=>this.allVisibleColumns,()=>this._syncAttributeTableTemplate()),S(()=>this.pageCount,()=>{this.pageIndex>=this.pageCount&&this.goToPage(0)}),S(()=>this.state,t=>{t==="disabled"&&this.relatedTables.length&&this.drainRelatedTables()}),K(()=>this.tableParent?.highlightIds,"change",({added:t})=>{let{relationshipConfig:e}=this,r=t[0];if(r==null||!e)return;let{relatedLayer:s,relationshipId:o}=e;this.relationshipConfig={objectId:r,relatedLayer:s,relationshipId:o}}),K(()=>this.tableParent,"cell-click",t=>{let{tableParent:e}=this,{objectId:r}=t;e&&r!=null&&e.highlightIds.add(r)}),S(()=>this.attachmentsViewOptions.objectId,(t,e)=>{t!=null?e==null&&this.showAttachmentsView({objectId:t}):this.hideAttachmentsView()})])}destroy(){this._drainColumns(),this._highlights.removeAll(),this._highlights.destroy(),this._currentTemporaryHighlight?.handle.remove(),this._temporaryHighlightAbortController=Ur(this._temporaryHighlightAbortController),this.grid?.destroy(),this.columns.destroyed||this.columns.destroy(),this.layer=null,this.view=null}get _defaultHiddenFields(){return ms(this.layer)}get _effectiveTableTemplate(){return this.tableTemplateOverride||this.tableTemplate}get _effectiveAttributeTableTemplate(){return this.attributeTableTemplate||this.layer?.attributeTableTemplate}get _highlightableLayerView(){let i=this.layerView;return cs(i)?i:null}get _selectionManager(){let{view:i}=this;return!i||i.destroyed?null:i.selectionManager?.sources?.length?i.selectionManager:null}get _selectableLayer(){let{layer:i}=this;if(gs(i)||kt(i)){let t=i;return this._selectionManager?.sources?.includes(t)?t:null}return null}get _subtypes(){return ns(this.layer)}get _tableHighlightsReady(){return!(this.selectionSource!=="table"||!this.highlightEnabled||!this._highlightableLayerView)}get _viewSelection(){let{_selectableLayer:i}=this;return i?this._selectionManager?.getSelection(i)??[]:[]}get _viewSelectionReady(){return!(!this.layer||this.selectionSource!=="view"||!this._selectionManager)}get allRelatedTablesVisible(){return!!(this.relatedRecordsEnabled&&this.relatedTables.length&&this.showAllRelatedTables)}get activeFilters(){let{filterGeometry:i,objectIds:t,filterBySelectionEnabled:e,highlightIds:r}=this,s=new O;return i&&s.push({type:"geometry",geometry:i}),e?s.push({type:"selection",objectIds:r.toArray()}):t.length&&s.push({type:"objectId",objectIds:t.toArray()}),s}get activeSortOrders(){return this.grid?.sortOrders?this.grid.sortOrders.map(({path:i,direction:t})=>({fieldName:i,direction:t})).filter(i=>i.fieldName&&i.direction):[]}get attachmentsEnabled(){return this.store.attachmentsEnabled}set attachmentsEnabled(i){this.store.attachmentsEnabled=i}get clearPrompt(){return()=>this.prompt=null}set clearPrompt(i){this._overrideIfSome("clearPrompt",i)}get filterGeometry(){return this.store.filterGeometry}set filterGeometry(i){this.store.filterGeometry=i}get filterBySelectionEnabled(){return!!this._get("filterBySelectionEnabled")}set filterBySelectionEnabled(i){let{objectIds:t}=this,e=t.length;i?(e&&(t.removeAll(),this._logWarning("Selection filter has been applied with an objectID filter. Object ID filter has been removed.")),this.filterGeometry&&this._logWarning("Selection filter has been applied with a geometry filter. Results may appear inconsistent"),this._syncObjectIdsWithStore(this.highlightIds.toArray())):e||this._syncObjectIdsWithStore(null),this._set("filterBySelectionEnabled",i)}get hiddenFields(){return this._get("hiddenFields")??new O}set hiddenFields(i){this._set("hiddenFields",Ge(i,this._get("hiddenFields"),O))}get initialSize(){return this.store.initialSize}set initialSize(i){this.store.initialSize=i}get isQueryingOrSyncing(){let{store:i}=this;return i?.syncing||i?.querying||this.relatedTables.some(t=>!!t.isQueryingOrSyncing)}get isSyncingAttachments(){return this.store.syncingAttachmentEdits||this.relatedTables.some(i=>!!i.isSyncingAttachments)}get layer(){return this._get("layer")}set layer(i){this._highlights.removeAll(),this.drainRelatedTables(),this._set("layer",i)}get layerView(){return this.store.layerView}get outFields(){return this.store.outFields}set outFields(i){this.store.outFields=i}get relatedRecordsEnabled(){return this.store.relatedRecordsEnabled}set relatedRecordsEnabled(i){this.store.relatedRecordsEnabled=i}get relatedTable(){return this.relatedTables.at(-1)}get relationship(){let i=this.relationshipConfig?.relationshipId;return i==null?null:this.relationships?.find(({id:t})=>t===i)}get relationshipConfig(){return this.store.relationshipConfig}set relationshipConfig(i){this.highlightIds.removeAll(),this.objectIds.removeAll(),this.filterBySelectionEnabled=!1,this.store.relationshipConfig=i}get relationshipInfos(){let{layer:i,layers:t,relationships:e,tableController:r}=this,s=this.store.relationshipInfos;if(s.length||!ct(i)||!e?.length)return s;let o=[],n=r?.layers||t||[];return e.forEach(a=>{let l=xs(i,n,a);l&&(l.load(),o.push({layer:i,relatedLayer:l,relationshipId:a.id}))}),o}get relationships(){return this.store.relationships}get returnGeometryEnabled(){return this.store.returnGeometry}set returnGeometryEnabled(i){this.store.returnGeometry=i}get returnMEnabled(){return this.store.returnM}set returnMEnabled(i){this.store.returnM=i}get returnZEnabled(){return this.store.returnZ}set returnZEnabled(i){this.store.returnZ=i}get showAllRelatedTables(){return this._get("showAllRelatedTables")}set showAllRelatedTables(i){let{relatedTable:t}=this;this._set("showAllRelatedTables",i),t&&(i?this._showAllRelatedTables(t):this._hideAllRelatedTables(t))}get showPrompt(){return i=>{this.prompt?.cancel?.(),this.prompt=i}}set showPrompt(i){this._overrideIfSome("showPrompt",i)}get supportsAttachments(){return this.store.supportsAttachments}get supportsAddAttachments(){let{store:{supportsAddingAttachments:i,supportsEditing:t}}=this;return this.editingEnabled&&t&&i}get supportsDeleteAttachments(){let{store:{supportsDeletingAttachments:i,supportsEditing:t}}=this;return this.editingEnabled&&t&&i}get supportsResizeAttachments(){return this.store.supportsResizeAttachments}get supportsUpdateAttachments(){let{store:{supportsUpdateAttachments:i,supportsEditing:t}}=this;return this.editingEnabled&&t&&i}get timeExtent(){return this.store.timeExtent}set timeExtent(i){this.store.timeExtent=i}get timeZone(){return this._get("timeZone")}set timeZone(i){this.allColumns.forEach(t=>t.tableTimeZone=i),this._set("timeZone",i)}get view(){return this.store.view}set view(i){this.store.view=i,this.fieldColumns.forEach(t=>t.view=i),this.refreshCellContent()}addAttachment(i,t){return y(this,null,function*(){let{attachmentsViewOptions:e,store:r}=this,s=e.objectId===i;yield r.addAttachment(i,t).catch(o=>{s&&o&&typeof o=="object"&&"error"in o&&o.error instanceof U&&(this._logWarning(`Unable to add attachment. ${o.error.name} ${o.error.message}`),e.error=o.error)}),s&&!e.error&&(e.onEditComplete(),e.attachmentInfos=yield r.getAttachmentsByObjectId(i,!0)),this.refreshCellContent()})}deleteAttachments(i,t){return y(this,null,function*(){let{attachmentsViewOptions:e,store:r}=this,s=e.objectId===i;yield r.deleteAttachments(i,t).catch(o=>{s&&o&&typeof o=="object"&&"error"in o&&o.error instanceof U&&(this._logWarning(`Unable to delete attachment(s). ${o.error.name} ${o.error.message}`),e.error=o.error)}),s&&!e.error&&(e.onEditComplete(),e.attachmentInfos=yield r.getAttachmentsByObjectId(i,!0)),this.refreshCellContent()})}collapseRelatedTable(i,t){let{relatedLayer:e,objectId:r,relationshipId:s}=t,{objectIdField:o}=e,n=Es(e,s),a=e.displayField||n?.keyField||o;i.set({highlightIds:new O([r]),multipleSelectionEnabled:!1,tableTemplateOverride:this._getTableTemplateForRelatedTableView(i,a,s)});let l=i.hiddenFields;l.includes(F.action)||l.add(F.action),l.includes(F.attachments)||l.add(F.attachments),i.scrollLeft()}deleteSelection(){return y(this,null,function*(){let i=this.highlightIds.toArray();if(!i?.length)return;let{deleteFeatureResults:t}=yield this.store.deleteRowsByObjectId(i),e=t.filter(r=>!r.error).map(r=>r.objectId);e.length&&(this.highlightIds.removeMany(e),yield this.refresh())})}downloadAttachmentById(i,t){return y(this,null,function*(){let e=(yield this.store.getAttachmentsByObjectId(i,!0)).find(r=>r.id===t);ea(e)})}drainRelatedTables(){this.relatedTables.drain(i=>i.destroy()),this.set({multipleSelectionEnabled:!0,relationshipColumnConfigs:null,showAllRelatedTables:!1,tableTemplateOverride:null}),this.hiddenFields.removeMany([F.action,F.attachments])}drainRelatedTablesAboveIndex(i){let{relatedTables:t}=this,e=t.slice(i+1);t.removeMany(e).forEach(s=>s.destroy());let r=t.at(-1);r&&(r.attachmentsViewOptions.objectId=null,this.allRelatedTablesVisible?this._showAllRelatedTables(r):this._hideAllRelatedTables(r))}exportSelectionToCSV(i){return y(this,null,function*(){let{highlightIds:t,layer:e,outFields:r}=this;e&&t.length?yield Jn({layer:e,objectIds:t.toArray(),outFields:r,includeGeometry:i}):this._logWarning("Export failed.")})}filterBySelection(){this.filterBySelectionEnabled?this._logWarning("Property 'filterBySelectionEnabled' is already 'true'. This method has no effect."):(Pi(se.getLogger(this),"`FeatureTable.filterBySelection` is deprecated in favor of 'filterBySelectionEnabled' and 'objectIds'",{replacement:"FeatureTable.filterBySelectionEnabled or FeatureTable.objectIds",version:"4.30",warnOnce:!0}),this.objectIds.addMany(this.highlightIds.toArray()))}getObjectIdIndex(i){return this.store.getItemIndexByObjectId(i)}getValue(i,t){return this.store.getItemByObjectId(i)?.feature?.attributes[t]}getVirtualPageIndex(){return this.grid?.getVirtualPageIndex()??0}goToPage(i){if(i==null||!Number.isInteger(i))return void this._logWarning("Invalid 'page' parameter provided to 'goToPage()'. Current page will remain the same.");let{pageCount:t}=this;(i>=t||i===-1)&&(i=t-1),i<-1&&(i=0),i!==this.pageIndex&&(this.pageIndex=i),this.paginationEnabled||this.scrollToIndex(i*this.pageSize)}hideAttachmentsView(){this.attachmentsViewOptions.objectId=null,this.set({relationshipColumnConfigs:null,multipleSelectionEnabled:!0,tableTemplateOverride:null}),this.hiddenFields.remove(F.action)}nextPage(){let i=this.paginationEnabled?this.pageIndex:this.getVirtualPageIndex();this.goToPage(i+1)}previousPage(){let i=this.paginationEnabled?this.pageIndex:this.getVirtualPageIndex();this.goToPage(i-1)}refresh(){return y(this,null,function*(){return this.relatedTables.forEach(i=>y(this,null,function*(){return yield i.refresh()})),Ri(this._debounceRefresh())})}refreshCellContent(){this.grid?.requestContentUpdate()}refreshPageCache(){this.grid?.refreshPageCache()}reset(){return y(this,null,function*(){this.goToPage(0),yield this.grid?.reset()})}scrollLeft(){this.grid?.scrollLeft(0)}scrollToBottom(){this.grid?.scrollToBottom()}scrollToIndex(i){this.grid?.scrollToIndex(i)}scrollToRow(i){let t=this.store.getItemIndexByObjectId(i);t>-1?this.grid?.scrollToIndex(t):this._logWarning("Row not found. Associated data may not be loaded yet.")}scrollToTop(){this.grid?.scrollToTop()}saveAttachmentsViewForm(){return y(this,null,function*(){let{attachmentId:i,form:t,objectId:e}=this.attachmentsViewOptions;e!=null&&t&&(i!=null?yield this.updateAttachment(e,i,t):yield this.addAttachment(e,t))})}showAttachmentsView(t){return y(this,arguments,function*({objectId:i}){let{attachmentsViewOptions:e,hiddenFields:r,layer:s}=this;if(!this.attachmentsEnabled||!s)return void this._logWarning("The 'attachmentsEnabled' property is currently false.");yield s.load();let o=this._getDefaultLayerDisplayField(s),n=yield this.store.getAttachmentsByObjectId(i,!0),a=this.store.getItemIndexByObjectId(i);e.set({attachmentInfos:n,mode:n.length?"list":"file",objectId:i}),this.set({highlightIds:new O([i]),multipleSelectionEnabled:!1,relationshipColumnConfigs:[],tableTemplateOverride:this._getTableTemplateForAttachmentsView(o)}),r.includes(F.action)||r.add(F.action),a!=null&&this.scrollToIndex(a)})}syncAttributeTableTemplate(){this._syncAttributeTableTemplate(!0)}clearSelectionFilter(){Pi(se.getLogger(this),"`FeatureTable.clearSelectionFilter` is deprecated in favor of 'filterBySelectionEnabled' and 'objectIds'",{replacement:"FeatureTable.filterBySelectionEnabled or FeatureTable.objectIds",version:"4.30",warnOnce:!0}),this.objectIds.removeAll()}updateAttachment(i,t,e){return y(this,null,function*(){let{attachmentsViewOptions:r,store:s}=this,o=r.objectId===i;yield s.updateAttachment(i,t,e).catch(n=>{o&&n&&typeof n=="object"&&"error"in n&&n.error instanceof U&&(this._logWarning(`Unable to update attachment. ${n.error.name} ${n.error.message}`),r.error=n.error)}),o&&!r.error&&(r.onEditComplete(),r.attachmentInfos=yield s.getAttachmentsByObjectId(i,!0)),this.refreshCellContent()})}zoomToSelection(){return y(this,null,function*(){let{layer:i,view:t}=this,e=this.highlightIds.toArray();if(!i||!t||!e.length)return;let r=i.createQuery();r.objectIds=e,r.returnGeometry=!0;let s=yield i.queryFeatures(r);try{yield t.goTo(s.features)}catch(o){o.name!=="AbortError"&&console.error(o)}})}_syncAttributeTableTemplate(i=!1){let{_effectiveAttributeTableTemplate:t,layer:e,tableTemplateOverride:r,syncTemplateOnChangesEnabled:s}=this;if(!e||!t||!s&&!i||r||this.tableParent||this.relatedTable||this.attachmentsViewOptions.objectId!==null)return;let{activeSortOrders:o,allColumns:n,columns:a}=this,l=[],d=Rs(a.toArray());o.forEach(({fieldName:h,direction:p})=>{h&&p&&l.push({field:h,order:p})}),n.forEach(({fieldName:h,direction:p})=>{p&&!l.some(m=>m.field===h)&&l.push({field:h,order:p})}),t.elements=d,t.orderByFields=l}_refresh(){return y(this,null,function*(){yield this.store.refresh();let i=this.highlightIds.toArray();i.length&&(yield this.store.verifyFeaturesByObjectId(i)).forEach((e,r)=>{e||this.highlightIds.remove(i[r])}),this.refreshPageCache();let t=this.attachmentsViewOptions;t?.objectId!=null&&(t.attachmentInfos=yield this.store.getAttachmentsByObjectId(t.objectId,!0))})}_onLayerLoad(){return y(this,null,function*(){let{layer:i,pageSize:t}=this;if(!i)return;i.parent&&lt(i.parent)&&(yield i.parent.loadAll());let e=i.capabilities.query?.maxRecordCount,r=e&&e<t,s=r?e:t;r&&(this._logWarning("The value for 'pageSize' has been adjusted due to the provided layer's max record count."),this.pageSize=s),this.grid?.set("pageSize",s),this.store.load(),this._generateColumns()})}_onLayerRefresh(i){this.autoRefreshEnabled&&i.dataChanged&&this.refresh()}_generateColumns(){this._drainColumns();let{_effectiveTableTemplate:i,_effectiveAttributeTableTemplate:t}=this,e=i?.columnTemplates,r=this._generateColumnsFromColumnTemplates(e)??this._generateColumnsFromAttributeTableTemplate(t)??this._generateDefaultFieldColumns();r.length&&(this.attachmentsEnabled&&!r.some(s=>Ni(s))&&r.push(this._generateDefaultAttachmentsColumn()),this.relatedRecordsEnabled&&this.relationshipInfos.length&&!r.some(s=>ht(s))&&r.push(...this._generateDefaultRelationshipColumns()),this.actionColumnConfig&&r.push(this._generateActionColumn()),r.sort((s,o)=>s.frozen&&o.frozen||s.frozenToEnd&&o.frozenToEnd?0:s.frozen||o.frozenToEnd?-1:0),this.columns.addMany(r))}_generateColumnsFromAttributeTableTemplate(i){let{layer:t}=this;if(!i||!t)return null;let{elements:e,orderByFields:r}=i,s=hs(t),o=[];o.push(...this._generateColumnsFromAttributeTableElements(e,r));let n=s.map(a=>{if(!a.fieldName||Is(a.fieldName,o))return null;let{fieldName:l}=a,d=Lt(t,l);return d?this._generateDefaultFieldColumn(d,{hidden:!0,orderByFields:r}):(this._logTemplateWarning("A valid 'field' could not be found for the provided template."),null)}).filter(fe);return o.push(...n),this.attachmentsEnabled&&Dt(t)&&!o.some(a=>Ni(a))&&o.push(this._generateDefaultAttachmentsColumn({hidden:!0})),this.relatedRecordsEnabled&&ct(t)&&t.relationships?.forEach(({id:a},l)=>{let d=this.relationshipInfos.find(h=>h.relationshipId===a);d&&!o.some(h=>ht(h)&&h.relationshipId===a)&&o.push(this._generateDefaultRelationshipColumn({hidden:!0,info:d,index:l}))}),o.length?o:null}_generateColumnsFromAttributeTableElements(i,t){let{layer:e}=this;return e?i?.map((r,s)=>{switch(r.type){case"field":return this._createFieldColumnFromElement({element:r,orderByFields:t});case"group":return this._createGroupColumnFromElement({element:r,orderByFields:t});case"attachment":return this._createAttachmentColumnFromElement({element:r,index:s});case"relationship":return this._createRelationshipColumnFromElement({element:r,index:s})}}).filter(r=>!!r)??[]:[]}_createFieldColumnFromElement(i){let{layer:t}=this;if(!t)return null;let{element:e,orderByFields:r}=i,{fieldName:s}=e;if(s==null)return this._logTemplateWarning("A valid 'fieldName' must be provided."),null;let o=Lt(t,s);if(!o)return this._logTemplateWarning("A valid 'field' could not be found for the provided template."),null;let{description:n,label:a}=e,l=r?.findIndex(({field:M})=>M&&M===s)??-1,d=l>-1?r?.at(l)?.order:void 0,h=l>-1?l:void 0,{editingEnabled:p,grid:m,messages:_,messagesCommon:b,messagesURIUtils:C,store:w,timeZone:T,view:v}=this;return new Bt({description:n,direction:d,field:o,fieldName:s,grid:m,initialSortPriority:h,label:a,layer:t,messages:_,messagesCommon:b,messagesURIUtils:C,store:w,tableEditingEnabled:p,tableTimeZone:T,view:v,onShowPromptCallback:this._onShowPromptCallback})}_createGroupColumnFromElement(i){let{element:t,orderByFields:e}=i,{description:r,label:s}=t;if(!s)return this._logTemplateWarning("Group columns require a label."),null;if(!t.elements.length)return this._logTemplateWarning("Group columns require child columns."),null;let{grid:o,messages:n,messagesCommon:a,messagesURIUtils:l,store:d,timeZone:h}=this;return new Li({columns:this._generateColumnsFromAttributeTableElements(t.elements,e),description:r,grid:o,label:s,messages:n,messagesCommon:a,messagesURIUtils:l,store:d,tableTimeZone:h})}_createAttachmentColumnFromElement(i){if(!this.attachmentsEnabled)return void this._logTemplateWarning("The 'attachmentsEnabled' property is currently false.");let{element:t,index:e}=i,{description:r,label:s}=t,{grid:o,layer:n,messages:a,messagesCommon:l,messagesURIUtils:d,store:h,timeZone:p}=this;return new Ht({description:r,fieldName:`${F.attachments}-${e}`,grid:o,label:s,layer:n,messages:a,messagesCommon:l,messagesURIUtils:d,store:h,tableTimeZone:p,onShowAttachments:m=>this._onShowAttachments(m)})}_createRelationshipColumnFromElement(i){if(!this.relatedRecordsEnabled)return void this._logTemplateWarning("Relationship columns require related records to be enabled on the table.");let{element:t,index:e}=i,{description:r,label:s,relationshipId:o}=t,n=this.relationshipInfos.find(_=>_.relationshipId===o);if(!n)return this._logTemplateWarning("Unable to find valid related layer target based on the provided relationship id."),null;let{grid:a,messages:l,messagesCommon:d,messagesURIUtils:h,store:p,timeZone:m}=this;return new Vt({description:r,fieldName:`${F.relationship}-${o}-${e}`,grid:a,label:s,messages:l,messagesCommon:d,messagesURIUtils:h,relationshipId:o,store:p,tableTimeZone:m,layer:n.relatedLayer,relatedLayer:n.layer,showRelatedTableCallback:_=>this._onShowRelatedTable(_)})}_generateColumnsFromColumnTemplates(i){let{editingEnabled:t,grid:e,layer:r,messages:s,messagesCommon:o,messagesURIUtils:n,store:a,timeZone:l,view:d}=this;if(!i?.length||!r)return null;let h=[];return i.forEach((p,m)=>{let{autoWidth:_,description:b,direction:C,flexGrow:w,fieldName:T,formatFunction:v,frozen:M,frozenToEnd:k,icon:R,iconText:N,initialSortPriority:j,invalid:re,label:Ae,menuConfig:Ee,resizable:Ie,sortable:Le,textAlign:st,textWrap:ot,timeZone:nt,type:He,width:Si}=p;if(!He)return void this._logTemplateWarning("Property 'type' is missing from the provided template.");if(M&&k)return void this._logTemplateWarning("Properties 'frozen' and 'frozenToEnd' cannot both be true for the same column.");let Br=p.visible===!1;if(He==="group"){if(!p.columnTemplates?.length)return void this._logTemplateWarning("Group columns must contain column templates.");if(!p.label)return void this._logTemplateWarning("Group columns require a label.");let me=this._generateColumnsFromColumnTemplates(p.columnTemplates),Be=Br||this._isFieldHidden(p.label);h.push(new Li({autoWidth:_,columns:me,description:b,flexGrow:w,frozen:M,frozenToEnd:k,grid:e,hidden:Be,icon:R,iconText:N,invalid:re,label:Ae,menuConfig:Ee,messages:s,messagesCommon:o,messagesURIUtils:n,resizable:Ie,tableTimeZone:l,textAlign:st,textWrap:ot,timeZone:nt,width:Si}))}else if(He==="attachment"){if(!this.attachmentsEnabled)return void this._logTemplateWarning("Attachment columns require attachments to be enabled on the table.");h.push(this._generateAttachmentsColumnFromTemplate(p,m))}else if(He==="relationship"){if(!this.relatedRecordsEnabled)return void this._logTemplateWarning("Relationship columns require related records to be enabled on the table.");let{relationshipId:me}=p;if(me==null)return void this._logTemplateWarning("Property 'relationshipId' is missing from the provided template.");let Be=this.relationshipInfos.find(Ti=>Ti.relationshipId===me);if(!Be)return void this._logTemplateWarning("Unable to find valid related layer target based on the provided relationship id.");h.push(this._generateRelationshipColumnFromTemplate(Be,p,m))}else if(!T)return void this._logTemplateWarning("Value for 'fieldName' property was missing from the provided template.");let Vr=Br||this._isFieldHidden(T);if(He==="column")h.push(new Ss({autoWidth:_,description:b,direction:C,fieldName:T,flexGrow:w,formatFunction:v,frozen:M,frozenToEnd:k,grid:e,hidden:Vr,icon:R,iconText:N,initialSortPriority:j,invalid:re,label:Ae,menuConfig:Ee,messages:s,messagesCommon:o,messagesURIUtils:n,resizable:Ie,sortable:Le,tableTimeZone:l,textAlign:st,textWrap:ot,timeZone:nt,width:Si}));else if(He==="field"){let me=Lt(r,p.fieldName);if(!me)return void this._logTemplateWarning("A valid 'field' could not be found for the provided template.");let{editable:Be,required:Ti}=p;h.push(new Bt({autoWidth:_,description:b,direction:C,editable:Be,field:me,fieldName:me.name,flexGrow:w,formatFunction:v,frozen:M,frozenToEnd:k,grid:e,hidden:Vr,icon:R,iconText:N,initialSortPriority:j,invalid:re,label:Ae,layer:r,messages:s,messagesCommon:o,messagesURIUtils:n,menuConfig:Ee,required:Ti,resizable:Ie,sortable:Le,store:a,tableEditingEnabled:t,tableTimeZone:l,template:p,textAlign:st,textWrap:ot,timeZone:nt,width:Si,view:d,onShowPromptCallback:this._onShowPromptCallback}))}}),h.length?h:null}_generateDefaultFieldColumns(){return this.layer?.fields?.map(i=>this._generateDefaultFieldColumn(i)).filter(fe)??[]}_generateDefaultFieldColumn(i,t){let{editingEnabled:e,grid:r,layer:s,messages:o,messagesCommon:n,messagesURIUtils:a,store:l,timeZone:d,view:h}=this,p=t?.orderByFields;if(!i.visible||i.type==="geometry")return null;let m=i.name,_=p?.findIndex(({field:w})=>w&&w===m)??-1,b=_>-1?p?.at(_)?.order:void 0,C=_>-1?_:void 0;return new Bt({direction:b,field:i,fieldName:m,grid:r,hidden:t?.hidden||this._isFieldHidden(m),initialSortPriority:C,layer:s,messages:o,messagesCommon:n,messagesURIUtils:a,store:l,tableEditingEnabled:e,tableTimeZone:d,view:h,onShowPromptCallback:this._onShowPromptCallback})}_generateAttachmentsColumnFromTemplate(i,t){let{grid:e,layer:r,messages:s,messagesCommon:o,messagesURIUtils:n,store:a,timeZone:l}=this,{attachmentsViewEnabled:d,autoWidth:h,description:p,flexGrow:m,fieldName:_,formatFunction:b,frozen:C,frozenToEnd:w,icon:T,iconText:v,invalid:M,label:k,menuConfig:R,resizable:N,textAlign:j,textWrap:re,thumbnailAppearance:Ae,thumbnailCount:Ee,thumbnailIconScale:Ie,thumbnailsEnabled:Le,timeZone:st,width:ot}=i;return new Ht({attachmentsViewEnabled:d,autoWidth:h,description:p,fieldName:`${F.attachments}-${t}`,flexGrow:m,formatFunction:b,frozen:C,frozenToEnd:w,grid:e,hidden:i.visible===!1||this._isFieldHidden(k)||this._isFieldHidden(_),icon:T,iconText:v,invalid:M,label:k,layer:r,menuConfig:R,messages:s,messagesCommon:o,messagesURIUtils:n,resizable:N,store:a,tableTimeZone:l,textAlign:j,textWrap:re,thumbnailAppearance:Ae,thumbnailCount:Ee,thumbnailIconScale:Ie,thumbnailsEnabled:Le,timeZone:st,width:ot,onShowAttachments:nt=>this._onShowAttachments(nt)})}_generateDefaultAttachmentsColumn(i){let{grid:t,layer:e,messages:r,messagesCommon:s,messagesURIUtils:o,store:n,timeZone:a}=this,l=F.attachments;return new Ht({fieldName:l,grid:t,hidden:i?.hidden||this._isFieldHidden(l),layer:e,messages:r,messagesCommon:s,messagesURIUtils:o,store:n,tableTimeZone:a,onShowAttachments:d=>this._onShowAttachments(d)})}_generateRelationshipColumnFromTemplate(i,t,e){let{grid:r,messages:s,messagesCommon:o,messagesURIUtils:n,store:a,timeZone:l}=this,{autoWidth:d,collapsed:h,description:p,flexGrow:m,fieldName:_,formatFunction:b,frozen:C,frozenToEnd:w,icon:T,iconText:v,invalid:M,label:k,menuConfig:R,relationshipId:N,resizable:j,textAlign:re,textWrap:Ae,timeZone:Ee,width:Ie}=t;return new Vt({autoWidth:d,collapsed:h,description:p,fieldName:`${F.relationship}-${N}-${e}`,flexGrow:m,formatFunction:b,frozen:C,frozenToEnd:w,grid:r,hidden:t.visible===!1||this._isFieldHidden(k)||this._isFieldHidden(_),icon:T,iconText:v,invalid:M,label:k,menuConfig:R,messages:s,messagesCommon:o,messagesURIUtils:n,relationshipId:N,resizable:j,store:a,tableTimeZone:l,textAlign:re,textWrap:Ae,timeZone:Ee,width:Ie,layer:i.relatedLayer,relatedLayer:i.layer,showRelatedTableCallback:Le=>this._onShowRelatedTable(Le)})}_generateDefaultRelationshipColumns(){let{relationshipInfos:i,relationshipColumnConfigs:t}=this,e=[];return i?.length&&(t?t.forEach((r,s)=>{let{relationshipId:o}=r,n=i.find(a=>a.relationshipId===o);n&&e.push(this._generateDefaultRelationshipColumn({config:r,index:s,info:n}))}):i.forEach((r,s)=>e.push(this._generateDefaultRelationshipColumn({index:s,info:r})))),e}_generateDefaultRelationshipColumn(i){let{config:t,hidden:e,index:r,info:s}=i,{grid:o,messages:n,messagesCommon:a,messagesURIUtils:l}=this,{relationshipId:d}=s;return new Vt(Se(V({},t),{fieldName:`${F.relationship}-${d}-${r}`,grid:o,hidden:e,messages:n,messagesCommon:a,messagesURIUtils:l,layer:s.relatedLayer,relatedLayer:s.layer,relationshipId:d,showRelatedTableCallback:h=>this._onShowRelatedTable(h)}))}_generateActionColumn(){return new Ts(V({hidden:this._isFieldHidden(F.action)},this.actionColumnConfig))}_isFieldHidden(i){let t=i?.toLowerCase();return(this.hiddenFields??this._defaultHiddenFields).some(e=>e.toLowerCase()===t)}_addTableHighlight(i){if(!this.highlightEnabled)return;let{_highlightableLayerView:t,layer:e}=this;if(t&&e){let r=this.store.getItemByObjectId(i),s=r?.feature??i;this._highlights.add(t.highlight(s,{name:us}),Di(e,i))}}_removeTableHighlight(i){let{layer:t}=this;t&&this._highlights.remove(Di(t,i))}_syncTemporaryHighlight(i,t){return y(this,null,function*(){if(!this.highlightEnabled)return this._currentTemporaryHighlight?.handle.remove(),void(this._currentTemporaryHighlight=null);if(yield qr(25),$r(t),!this._currentTemporaryHighlight&&!i)return;let{id:e}=this._currentTemporaryHighlight??{};if(e===i)return;this._currentTemporaryHighlight?.handle?.remove(),this._currentTemporaryHighlight=null;let{_highlightableLayerView:r,layer:s,highlightEnabled:o}=this;i&&r&&s&&o&&(this._currentTemporaryHighlight={id:i,handle:r.highlight(i,{name:ps})})})}_syncSelection(){this._highlights.removeAll(),this._tableHighlightsReady?this.highlightIds.forEach(i=>this._addTableHighlight(i)):this._viewSelectionReady&&(this.highlightIds.items=this._viewSelection)}_appendToViewSelection(i){let{_selectableLayer:t}=this;t&&this._selectionManager?.appendToSelection(t,i)}_removeFromViewSelection(i){let{_selectableLayer:t}=this;t&&this._selectionManager?.removeFromSelection(t,i)}_onHighlightIdsChange(i){return y(this,null,function*(){let{added:t,removed:e}=i,{attachmentsViewOptions:r}=this;if(this._tableHighlightsReady?(e.forEach(s=>this._removeTableHighlight(s)),t.forEach(s=>this._addTableHighlight(s))):this._viewSelectionReady&&(this._removeFromViewSelection(e),this._appendToViewSelection(t)),this.filterBySelectionEnabled&&this._syncObjectIdsWithStore(this.highlightIds.toArray()),r.objectId!=null){let s=this.highlightIds.at(0);if(s!=null){let o=yield this.store.getAttachmentsByObjectId(s,!0);r.set({attachmentInfos:o,objectId:s,mode:o.length?"list":"file"})}}})}_onShowRelatedTable(i){let{highlightIds:t}=this,{objectId:e}=i;t.removeAll(),t.add(e),this.showRelatedTableCallback?this.showRelatedTableCallback(i):this.emit("show-related-table",i)}_onObjectIdsChange(){let i=this.objectIds.toArray();i.length&&this.filterBySelectionEnabled&&(this.filterBySelectionEnabled=!1,this._logWarning("Object ID filter was applied while a selection filter was applied. Selection filter has been removed.")),this._syncObjectIdsWithStore(i)}_syncObjectIdsWithStore(i){this.store.objectIds=i,this.refreshPageCache()}_drainColumns(){this.columns.drain(i=>!i.destroyed&&i.destroy())}_showAllRelatedTables(i){let t=i.layer;if(!t)return;let e=this._getDefaultLayerDisplayField(t);i.set({relationshipColumnConfigs:[],tableTemplateOverride:this._getTableTemplateForShowAllTablesView(i,e)});let r=i.hiddenFields;r.includes(F.action)||r.add(F.action),r.includes(F.attachments)||r.add(F.attachments)}_hideAllRelatedTables(i){let{layer:t,relationship:e}=i;if(t&&e?.id!=null)if(i.attachmentsViewOptions.objectId!=null){let r=this._getDefaultLayerDisplayField(t);i.set({multipleSelectionEnabled:!1,relationshipColumnConfigs:[],showAllRelatedTables:!1,tableTemplateOverride:this._getTableTemplateForAttachmentsView(r)})}else i.set({multipleSelectionEnabled:!0,relationshipColumnConfigs:As(t,e.id),showAllRelatedTables:!1,tableTemplateOverride:null}),i.hiddenFields.removeMany([F.action,F.attachments])}_getTableTemplateForRelatedTableView(i,t,e){return new ut({columnTemplates:[new Gt({fieldName:t,editable:!1,menuConfig:{selectionMode:"single",icon:"chevron-down",items:this._extractFieldColumnInfosFromTableTemplate(i.viewModel).map(([r,s])=>({selected:r===t,label:s||r,clickFunction:()=>{i.tableTemplateOverride=this._getTableTemplateForRelatedTableView(i,r,e)}}))},resizable:!1}),new Ps({autoWidth:!1,collapsed:!0,flexGrow:0,label:"",resizable:!1,relationshipId:e,width:Hr})]})}_getTableTemplateForShowAllTablesView(i,t){let e=[new Gt({fieldName:t,editable:!1,menuConfig:{selectionMode:"single",icon:"chevron-down",items:this._extractFieldColumnInfosFromTableTemplate(i.viewModel).map(([r,s])=>({selected:r===t,label:s||r,clickFunction:()=>{i.tableTemplateOverride=this._getTableTemplateForShowAllTablesView(i,r)}}))},resizable:!1})];return i.attachmentsViewOptions.objectId!=null&&e.push(new Hi({attachmentsViewEnabled:!1,autoWidth:!1,flexGrow:0,label:"",resizable:!1,thumbnailsEnabled:!1,width:Hr})),new ut({columnTemplates:e})}_onShowPromptCallback(i){return y(this,null,function*(){let{column:t,objectId:e,oldValue:r,value:s}=i,{_subtypes:o,layer:n}=this;if(!n||!o.length)return void t.cancel();let a=o.find(p=>p.code===s);if(!a)return void t.cancel();let l=Kr(),d=this._createSubtypeEditPrompt(r,a,l),h=!!n.parent;try{this.showPrompt(d);let p=yield l.promise,m=[{fieldName:t.fieldName,value:s}];switch(p){case"update-fields":for(let[_,b]of Object.entries(a.defaultValues))b!=null&&m.push({fieldName:_,value:b});yield t.updateItems({objectId:e,updates:m}),h&&this.refresh();break;case"keep-existing":yield t.updateItems({objectId:e,updates:m}),h&&this.refresh();break;case"undo":t.cancel()}}finally{this.clearPrompt()}})}_createSubtypeEditPrompt(i,t,e){let{_subtypes:r,messages:s,messagesCommon:o}=this,n=r.find(d=>d.code===i)?.name??`${i}`,a="update-fields",l=[{label:s.subtypes.useDefaultValuesOption,value:"update-fields"},{label:s.subtypes.keepCurrentValuesOption,value:"keep-existing"}];return{context:"info",title:s.subtypes.changeWarningTitle,message:es(s.subtypes.changeWarning,{originalType:n,newType:t.name}),radios:l,defaultRadioSelection:"update-fields",onRadioSelection:d=>{a=d},actions:{primary:{label:o.apply,action:()=>e.resolve(a),type:"positive"},secondary:{label:o.cancel,type:"neutral",action:()=>e.resolve("undo")}},cancel:()=>e.reject()}}_onShowAttachments({objectId:i}){this.attachmentsViewOptions.objectId=i}_getTableTemplateForAttachmentsView(i){return new ut({columnTemplates:[new Gt({fieldName:i,editable:!1,menuConfig:{selectionMode:"single",icon:"chevron-down",items:this._extractFieldColumnInfosFromTableTemplate(this).map(([t,e])=>({selected:t===i,label:e||t,clickFunction:()=>{this.tableTemplateOverride=this._getTableTemplateForAttachmentsView(t)}}))},resizable:!1}),new Hi({attachmentsViewEnabled:!1,autoWidth:!1,flexGrow:0,label:"",resizable:!1,thumbnailsEnabled:!1,width:Hr})]})}_extractFieldColumnInfosFromTableTemplate(i){let t=i??this,{layer:e,tableTemplate:r}=t;return r?r.columnTemplates.filter(({type:s})=>s==="field"||s==="column").map(({fieldName:s,label:o})=>[s,o]):e?.fields.map(s=>[s.name,s.alias])??[]}_getDefaultLayerDisplayField(i){let{displayField:t,objectIdField:e}=i;return t&&t.trim()!==""?t:e||(i.fields.length?i.fields[0].name:"")}_getIndexOfFirstFrozenToEndColumn(){let i=this.columns.findIndex(t=>t.frozenToEnd);return i>-1?i:void 0}_logWarning(i,t){t?se.getLogger(this).warnOnce(i):se.getLogger(this).warn(i)}_logTemplateWarning(i){this._logWarning(`${i} Skipped generating a column using the provided template.`,!0)}_onCellInteraction(i){i!=null&&this.attachmentsViewOptions.objectId!=null&&this.highlightIds.add(i)}};c([u()],g.prototype,"_defaultHiddenFields",null),c([u()],g.prototype,"_effectiveTableTemplate",null),c([u()],g.prototype,"_effectiveAttributeTableTemplate",null),c([u()],g.prototype,"_highlights",void 0),c([u()],g.prototype,"_highlightableLayerView",null),c([u()],g.prototype,"_selectionManager",null),c([u()],g.prototype,"_selectableLayer",null),c([u()],g.prototype,"_subtypes",null),c([u()],g.prototype,"_tableHighlightsReady",null),c([u()],g.prototype,"_viewSelection",null),c([u()],g.prototype,"_viewSelectionReady",null),c([u()],g.prototype,"actionColumnConfig",void 0),c([u()],g.prototype,"allRelatedTablesVisible",null),c([u()],g.prototype,"activeFilters",null),c([u({readOnly:!0})],g.prototype,"activeSortOrders",null),c([u()],g.prototype,"attachmentsEnabled",null),c([u()],g.prototype,"attachmentsViewOptions",void 0),c([u({type:fs})],g.prototype,"attributeTableTemplate",void 0),c([u()],g.prototype,"autoRefreshEnabled",void 0),c([u()],g.prototype,"clearPrompt",null),c([u({readOnly:!0})],g.prototype,"columns",void 0),c([u()],g.prototype,"dataProvider",void 0),c([u()],g.prototype,"editingEnabled",void 0),c([u()],g.prototype,"filterGeometry",null),c([u()],g.prototype,"filterBySelectionEnabled",null),c([u({readOnly:!0})],g.prototype,"grid",void 0),c([u()],g.prototype,"hiddenFields",null),c([u()],g.prototype,"highlightEnabled",void 0),c([u()],g.prototype,"initialSize",null),c([u()],g.prototype,"isQueryingOrSyncing",null),c([u()],g.prototype,"isSyncingAttachments",null),c([u({readOnly:!0})],g.prototype,"itemIdPath",void 0),c([u()],g.prototype,"layer",null),c([u()],g.prototype,"layers",void 0),c([u()],g.prototype,"layerView",null),c([u()],g.prototype,"messages",void 0),c([u(),Ve("esri/t9n/common")],g.prototype,"messagesCommon",void 0),c([u(),Ve("esri/core/t9n/Units")],g.prototype,"messagesUnits",void 0),c([u(),Ve("esri/widgets/support/t9n/uriUtils")],g.prototype,"messagesURIUtils",void 0),c([u()],g.prototype,"outFields",null),c([u()],g.prototype,"prompt",void 0),c([u()],g.prototype,"relatedRecordsEnabled",null),c([u()],g.prototype,"relatedTable",null),c([u()],g.prototype,"relatedTables",void 0),c([u()],g.prototype,"relationship",null),c([u()],g.prototype,"relationshipColumnConfigs",void 0),c([u()],g.prototype,"relationshipConfig",null),c([u()],g.prototype,"relationshipInfos",null),c([u()],g.prototype,"relationships",null),c([u()],g.prototype,"returnGeometryEnabled",null),c([u()],g.prototype,"returnMEnabled",null),c([u()],g.prototype,"returnZEnabled",null),c([u()],g.prototype,"selectionSource",void 0),c([u()],g.prototype,"showAllRelatedTables",null),c([u()],g.prototype,"showPrompt",null),c([u()],g.prototype,"showRelatedTableCallback",void 0),c([u({readOnly:!0,type:Lr})],g.prototype,"store",void 0),c([u()],g.prototype,"supportsAttachments",null),c([u()],g.prototype,"supportsAddAttachments",null),c([u()],g.prototype,"supportsDeleteAttachments",null),c([u()],g.prototype,"supportsResizeAttachments",null),c([u()],g.prototype,"supportsUpdateAttachments",null),c([u()],g.prototype,"syncTemplateOnChangesEnabled",void 0),c([u()],g.prototype,"tableController",void 0),c([u()],g.prototype,"tableParent",void 0),c([u({type:ut})],g.prototype,"tableTemplate",void 0),c([u()],g.prototype,"tableTemplateOverride",void 0),c([u()],g.prototype,"timeExtent",null),c([u()],g.prototype,"timeZone",null),c([u()],g.prototype,"view",null),g=c([Q("esri.widgets.FeatureTable.FeatureTableViewModel")],g);var Nv=g;export{Nv as a};
