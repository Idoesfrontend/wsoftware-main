(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{3764:(e,r,t)=>{"use strict";t.d(r,{Im:()=>v,VD:()=>o,ZA:()=>c,dY:()=>l,hf:()=>m,i6:()=>d});var n=t(4796),a=t(2179),u=t(307);n.l2R.enabled=!0;let s=new a.Z,i=new u.B;s.setDecoderPath("/draco/"),i.setDRACOLoader(s);let c=i,o=new n.Tap,v=e=>{e?.traverse(e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else for(let r of e.material)f(r)})},f=e=>{for(let r of(e.dispose(),Object.keys(e))){let t=e[r];t&&"object"==typeof t&&"minFilter"in t&&(t.dispose(),t.source?.data?.close?.())}},l=e=>{e.dispose(),e=null},d=e=>{for(let r of e)r.parent.remove(r)},m=(e,r)=>{let t;return r.traverse(r=>{r.name===e&&(t=r)}),t}},4193:e=>{e.exports={model:"Model_model__YBuiu",canvas:"Model_canvas__wPXWi"}},9550:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Model:()=>h});var n=t(7876),a=t(7689),u=t(478),s=t(280),i=t(2981),c=t(8697);function o(e,r,t){void 0===t&&(t={});var n=(0,i.S)(e)?e:(0,s.O)(e);return(0,c.bM)("",n,r,t),{stop:function(){return n.stop()},isAnimating:function(){return n.isAnimating()}}}var v=t(9574),f=t(4232),l=t(4796);let d={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},m={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `};var p=t(8582),x=t(8473),y=t(3764),w=t(4193),D=t.n(w),g=t(5937);let U={stiffness:40,damping:20,mass:1.4,restSpeed:.001},h=({models:e,show:r=!0,showDelay:t=0,cameraPosition:s={x:0,y:0,z:8},style:i,className:c,alt:o,...p})=>{let[w,g]=(0,f.useState)(!1),h=(0,f.useRef)(),S=(0,f.useRef)(),M=(0,f.useRef)(),C=(0,f.useRef)(),P=(0,f.useRef)(),b=(0,f.useRef)(),k=(0,f.useRef)(),_=(0,f.useRef)(),A=(0,f.useRef)(),E=(0,f.useRef)(),j=(0,f.useRef)(),T=(0,f.useRef)(),z=(0,f.useRef)(),F=(0,f.useRef)(),L=(0,f.useRef)(),B=(0,f.useRef)(),I=(0,f.useRef)(),Z=(0,v.B4)(h,!1,{threshold:.2}),N=(0,a.I)(),V=(0,u.z)(0,U),Y=(0,u.z)(0,U);(0,f.useEffect)(()=>{let{clientWidth:e,clientHeight:r}=h.current;b.current=new l.JeP({canvas:S.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),b.current.setPixelRatio(2),b.current.setSize(e,r),b.current.outputEncoding=l.S2Q,b.current.physicallyCorrectLights=!0,M.current=new l.ubm(36,e/r,.1,100),M.current.position.set(s.x,s.y,s.z),P.current=new l.Z58,C.current=new l.YJl,P.current.add(C.current);let t=new l.$p8(0xffffff,1.2),n=new l.ZyN(0xffffff,1.1),a=new l.ZyN(0xffffff,.8);a.position.set(-6,2,2),n.position.set(.5,0,.866),L.current=[t,n,a],L.current.forEach(e=>P.current.add(e)),k.current=new l.YJl,P.current.add(k.current),k.current.position.set(0,0,-.8),k.current.rotateX(Math.PI/2),_.current=new l.nWS(512,512),_.current.texture.generateMipmaps=!1,A.current=new l.nWS(512,512),A.current.texture.generateMipmaps=!1;let u=new l.pxj(8,8).rotateX(Math.PI/2),i=new l.V9B({map:_.current.texture,opacity:.8,transparent:!0});F.current=new l.eaF(u,i),F.current.scale.y=-1,k.current.add(F.current),B.current=new l.eaF(u),B.current.visible=!1,k.current.add(B.current);let c=new l.V9B({color:0xffffff,opacity:0,transparent:!0});I.current=new l.eaF(u,c),I.current.rotateX(Math.PI),I.current.position.y-=1e-5,k.current.add(I.current),E.current=new l.qUd(-4,4,4,-4,0,1.5),E.current.rotation.x=Math.PI/2,k.current.add(E.current),j.current=new l.CSG,j.current.userData.darkness={value:3},j.current.onBeforeCompile=e=>{e.uniforms.darkness=j.current.userData.darkness,e.fragmentShader=`
        uniform float darkness;
        ${e.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},j.current.depthTest=!1,j.current.depthWrite=!1,T.current=new l.BKk(d),T.current.depthTest=!1,z.current=new l.BKk(m),z.current.depthTest=!1;let o=V.onChange(O),v=Y.onChange(O);return()=>{_.current.dispose(),A.current.dispose(),(0,y.i6)(L.current),(0,y.Im)(P.current),(0,y.dY)(b.current),o(),v()}},[]);let q=(0,f.useCallback)(e=>{B.current.visible=!0,B.current.material=T.current,B.current.material.uniforms.tDiffuse.value=_.current.texture,T.current.uniforms.h.value=1/256*e,b.current.setRenderTarget(A.current),b.current.render(B.current,E.current),B.current.material=z.current,B.current.material.uniforms.tDiffuse.value=A.current.texture,z.current.uniforms.v.value=1/256*e,b.current.setRenderTarget(_.current),b.current.render(B.current,E.current),B.current.visible=!1},[]),O=(0,f.useCallback)(()=>{let e=P.current.background;P.current.background=null,P.current.overrideMaterial=j.current,b.current.setRenderTarget(_.current),b.current.render(P.current,E.current),P.current.overrideMaterial=null,q(5),q(2),b.current.setRenderTarget(null),P.current.background=e,C.current.rotation.x=V.get(),C.current.rotation.y=Y.get(),b.current.render(P.current,M.current)},[q,V,Y]);return(0,f.useEffect)(()=>{let e=e=>{let{innerWidth:r,innerHeight:t}=window,n={x:(e.clientX-r/2)/r,y:(e.clientY-t/2)/t};Y.set(n.x/2),V.set(n.y/2)};return Z&&!N&&window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[Z,N,V,Y]),(0,f.useEffect)(()=>{let e=()=>{if(!h.current)return;let{clientWidth:e,clientHeight:r}=h.current;b.current.setSize(e,r),M.current.aspect=e/r,M.current.updateProjectionMatrix(),O()};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[O]),(0,n.jsxs)("div",{className:(0,x.Ly)(D().model,c),"data-loaded":w,style:(0,x.ow)({delay:(0,x._P)(t)},i),ref:h,role:"img","aria-label":o,...p,children:[(0,n.jsx)("canvas",{className:D().canvas,ref:S}),e.map((e,a)=>(0,n.jsx)(R,{renderer:b,modelGroup:C,show:r,showDelay:t,renderFrame:O,index:a,setLoaded:g,model:e},JSON.stringify(e.position)))]})},R=({renderer:e,model:r,modelGroup:t,renderFrame:n,index:u,showDelay:s,setLoaded:i,show:c})=>{let[v,d]=(0,f.useState)(),m=(0,a.I)(),x=(0,f.createRef)();(0,f.useEffect)(()=>{let a=async(r,t)=>{r.encoding=l.S2Q,r.flipY=!1,r.anisotropy=e.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await e.current.initTexture(r),t.material.color=new l.Q1f(0xffffff),t.material.transparent=!0,t.material.map=r};d({start:async()=>{let e,i,{texture:c,position:v,url:f}=r,[d,w]=await Promise.all([await y.VD.loadAsync(c.placeholder.src),await y.ZA.loadAsync(f)]);t.current.add(w.scene),w.scene.traverse(async r=>{r.material&&(r.material.color=new l.Q1f(2039845),r.material.color.convertSRGBToLinear()),"Screen"===r.name&&(x.current=r.clone(),x.current.material=r.material.clone(),r.parent.add(x.current),x.current.material.opacity=1,x.current.position.z+=.001,a(d,x.current),e=async()=>{let e=await (0,p.jH)(c),t=await y.VD.loadAsync(e);await a(t,r),o(1,0,{onUpdate:e=>{x.current.material.opacity=e,n()}})})});let D=new l.Pq0(v.x,v.y,v.z);return m&&w.scene.position.set(...D.toArray()),r.animation===g.C.SpringUp&&(i=()=>{let e=new l.Pq0(D.x,D.y-1,D.z);w.scene.position.set(...e.toArray()),o(e.y,D.y,{type:"spring",delay:(300*u+s)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:e=>{w.scene.position.y=e,n()}})}),r.animation===g.C.LaptopOpen&&(i=()=>{let e=w.scene.children.find(e=>"Frame"===e.name),r=new l.Pq0(l.cj9.degToRad(90),0,0),t=new l.Pq0(0,0,0);return w.scene.position.set(...D.toArray()),e.rotation.set(...r.toArray()),o(r.x,t.x,{type:"spring",delay:(300*u+s+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:r=>{e.rotation.x=r,n()}})}),{loadFullResTexture:e,playAnimation:i}}})},[]),(0,f.useEffect)(()=>{let e;if(!v||!c)return;let r=async()=>{let{loadFullResTexture:r,playAnimation:t}=await v.start();i(!0),m||(e=t()),await r(),m&&n()};return(0,f.startTransition)(()=>{r()}),()=>{e?.stop()}},[v,c])}}}]);