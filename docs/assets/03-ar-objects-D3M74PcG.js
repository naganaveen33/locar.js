import{P as u,W as p,S as M,_ as g,E,B as P,y as v,M as d,a as r,c as L}from"./locar.es-D2pHxP8J.js";const i=new u(80,window.innerWidth/window.innerHeight,.001,1e3),e=new p;e.setSize(window.innerWidth,window.innerHeight);const s=new M;document.body.appendChild(e.domElement);window.addEventListener("resize",n=>{e.setSize(window.innerWidth,window.innerHeight),i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix()});const o=new g(s,i),W=new E(e);let c=!0;const l=L.degToRad(1),w=new P(20,20,20);let a=!1,m,t=0;const b=new v(e);e.domElement.addEventListener("mousedown",n=>{a=!0,m=n.clientX});e.domElement.addEventListener("mousemove",n=>{a&&(t+=n.clientX>m?l*10:-l*10,t>Math.PI?t-=2*Math.PI:t<-Math.PI&&(t+=2*Math.PI),i.rotation.set(0,t,0))});e.domElement.addEventListener("mouseup",n=>{a=!1});o.on("gpsupdate",async(n,H)=>{if(c){c=!1;const h=new d(w,new r({color:65535})),f=new d(w,new r({color:16711680}));o.add(h,-1.406392,50.908042,0,{name:"Guildhall"}),o.add(f,-1.40434,50.90733,0,{name:"O'Neills"})}});o.fakeGps(-1.404555,50.908015);e.setAnimationLoop(y);function y(){W.update();const n=b.raycast(i,s);n.length&&alert(`This is ${n[0].object.properties.name}`),e.render(s,i)}