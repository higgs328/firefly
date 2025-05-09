import{d as _,e as U}from"./chunk-E3FPV7ZA.js";import{a as d,b as C,c as B}from"./chunk-IQA3CVAZ.js";import{a as H,b as M}from"./chunk-VAOSSSLB.js";import{a as R}from"./chunk-O2J7LFYY.js";import{a as D}from"./chunk-GWSX6PRO.js";import{a as p}from"./chunk-B2RVSTL3.js";import{a as S}from"./chunk-SOEEM7Z7.js";import{a as L}from"./chunk-44A27HB7.js";import{a as i}from"./chunk-47NSYSFY.js";import{a as T}from"./chunk-QXNVQZT7.js";import{a as N,c as g}from"./chunk-UBEQHTGJ.js";import{a as b,d as w}from"./chunk-ALWV3RJ2.js";import{a as y,b as n,e as E,n as A,r as O,u as I}from"./chunk-6B5XFA6F.js";import{j as F}from"./chunk-ZTOZWLEE.js";import{a as m,c as f}from"./chunk-BOVYXYHK.js";import{b as x}from"./chunk-EQZWYK27.js";import{a as c}from"./chunk-ARRCN5K3.js";import{a as u}from"./chunk-WGAOVKGR.js";var W=class{constructor(){this.startTime=0,this._data=u(null),this._readChannels=C.RG,this.parallax=new v,this.parallaxNew=new v,this._anchorPoint=m(),this._fadeState=u(a.HIDE),this._fadeFactor=u(1)}get data(){return this._data.value}set data(t){this._data.value=t}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case a.HIDE:return 0;case a.FADE_OUT:return 1-this.fadeFactor;case a.FADE_IN:return this.fadeFactor;case a.SHOW:case a.CROSS_FADE:return 1}}fade(t,o,s){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=s?x((o-this.startTime)/(z*s),0,1):1,this.fadeFactor===1&&this._endFade()),this._evaluateState(t,o),this._updateParallax(t)}_evaluateState(t,o){let s=t.relativeElevation,h=this._updateAnchorPoint(t);(s>1.7*_||s<-1e4||h>q)&&this.opacity>0?this._startFade(a.HIDE,o):this.isFading||(s>_||s<-.35*_||h>V*q?this.opacity>0&&this._startFade(a.FADE_OUT,o):B(this.data)&&(this.opacity===0?this._startFade(a.FADE_IN,o):this.data.state===d.Ready&&(this.fadeState===a.SHOW?this._startFade(a.CROSS_FADE,o):this._startFade(a.SHOW,o))))}_updateParallax(t){let o=O(t.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(o-c.radius*c.radius,0))/Math.sqrt(o),g(k,this.parallax.anchorPoint,l),F(this.parallax.transform,w,l[3],l),g(k,this.parallaxNew.anchorPoint,l),F(this.parallaxNew.transform,w,l[3],l)}_updateAnchorPoint(t){return I(this._anchorPoint,t.eye),A(this._anchorPoint,this._anchorPoint,c.radius),this.fadeState===a.HIDE&&this.data?.state===d.Ready?(n(this.parallax.anchorPoint,this._anchorPoint),0):y(E(G,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(t,o){switch(this._fadeState.value=t,this.startTime=o,t){case a.CROSS_FADE:this.requestFade(),this._switchReadChannels(),n(this.parallaxNew.anchorPoint,this._anchorPoint);break;case a.FADE_IN:this.requestFade(),this._switchReadChannels(),n(this.parallax.anchorPoint,this._anchorPoint),n(this.parallaxNew.anchorPoint,this._anchorPoint);break;case a.FADE_OUT:this.requestFade();break;case a.SHOW:this._switchReadChannels(),n(this.parallax.anchorPoint,this._anchorPoint),n(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case a.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==d.Ready&&(this.data.state=d.Idle),this.fadeState){case a.CROSS_FADE:n(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=a.SHOW;break;case a.FADE_IN:this._fadeState.value=a.SHOW;break;case a.FADE_OUT:this._fadeState.value=a.HIDE;break;case a.SHOW:case a.HIDE:break;default:this.fadeState}}_switchReadChannels(){this.data?.state===d.Ready&&(this._readChannels=1-this._readChannels,this.data.state=d.Fading)}get isFading(){return this.fadeState===a.FADE_OUT||this.fadeState===a.FADE_IN||this.fadeState===a.CROSS_FADE}},a;(function(r){r[r.HIDE=0]="HIDE",r[r.FADE_IN=1]="FADE_IN",r[r.SHOW=2]="SHOW",r[r.CROSS_FADE=3]="CROSS_FADE",r[r.FADE_OUT=4]="FADE_OUT"})(a||(a={}));var v=class{constructor(){this.anchorPoint=m(),this.radiusCurvatureCorrection=0,this.transform=b()}},k=f(0,0,1),l=N(),G=m(),z=1.25,V=.5,q=2e5;var P=class extends L{constructor(t,o){super(t,"samplerCube",T.Bind,(s,h)=>s.bindTexture(t,o(h)))}};function Ra(r){let t=r.fragment;t.constants.add("radiusCloudsSquared","float",$).code.add(i`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),t.uniforms.add(new p("radiusCurvatureCorrection",({clouds:e})=>e.parallax.radiusCurvatureCorrection)).code.add(i`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),t.code.add(i`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),H(t),M(t);let o=f(.28,.175,.035);t.constants.add("RIM_COLOR","vec3",o),t.code.add(i`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${i.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${i.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${i.float(.2)} * pow(dirDotLight, ${i.float(10)}) * (1. - pow(sunsetTransition, ${i.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),t.uniforms.add(new R("readChannelsRG",e=>e.clouds.readChannels===C.RG),new P("cubeMap",e=>e.clouds.data?.cubeMap?.colorTexture??null)).code.add(i`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),t.uniforms.add(new D("anchorPoint",e=>e.clouds.parallax.anchorPoint),new D("anchorPointNew",e=>e.clouds.parallaxNew.anchorPoint),new S("rotationClouds",e=>e.clouds.parallax.transform),new S("rotationCloudsNew",e=>e.clouds.parallaxNew.transform),new p("cloudsOpacity",e=>e.clouds.opacity),new p("fadeFactor",e=>e.clouds.fadeFactor),new R("crossFade",e=>e.clouds.fadeState===a.CROSS_FADE)).code.add(i`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}var $=(c.radius+U)**2;export{W as a,Ra as b};
