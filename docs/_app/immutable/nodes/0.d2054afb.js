import{c as p,s as v,o as T,d as V,e as j,u as w,g as z,f as H}from"../chunks/scheduler.92c84a2e.js";import{S as h,i as L,e as d,a as f,d as i,p as U,t as c,b as q,f as u,g as D,h as F,x as N,k as $,y,r as P,s as A,u as B,c as E,v as G,w as J}from"../chunks/index.154fdd49.js";const K=!0,st=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"}));function Q(r){const t=r-1;return t*t*t+1}function b(r,{delay:t=0,duration:s=400,easing:e=Q,x:o=0,y:n=0,opacity:a=0}={}){const l=getComputedStyle(r),_=+l.opacity,k=l.transform==="none"?"":l.transform,S=_*(1-a),[I,M]=p(o),[x,C]=p(n);return{delay:t,duration:s,easing:e,css:(m,O)=>`
			transform: ${k} translate(${(1-m)*I}${M}, ${(1-m)*x}${C});
			opacity: ${_-S*O}`}}function g(r){let t,s=`Indest Labs
		<img style="float:right;height:2.5em;filter:contrast(75%);" src="./img/flask.svg" alt="Laboratory Flask"/>`,e,o;return{c(){t=D("div"),t.innerHTML=s,this.h()},l(n){t=F(n,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),N(t)!=="svelte-utzfoh"&&(t.innerHTML=s),this.h()},h(){$(t,"id","labs"),$(t,"class","svelte-9lcpfl")},m(n,a){f(n,t,a),o=!0},i(n){o||(n&&V(()=>{o&&(e||(e=y(t,b,{y:10,delay:1e3,duration:2500},!0)),e.run(1))}),o=!0)},o(n){n&&(e||(e=y(t,b,{y:10,delay:1e3,duration:2500},!1)),e.run(0)),o=!1},d(n){n&&u(t),n&&e&&e.end()}}}function R(r){let t,s=r[0]&&g();return{c(){s&&s.c(),t=d()},l(e){s&&s.l(e),t=d()},m(e,o){s&&s.m(e,o),f(e,t,o)},p(e,[o]){e[0]?s?o&1&&i(s,1):(s=g(),s.c(),i(s,1),s.m(t.parentNode,t)):s&&(U(),c(s,1,1,()=>{s=null}),q())},i(e){i(s)},o(e){c(s)},d(e){e&&u(t),s&&s.d(e)}}}function W(r,t,s){let e=!1;return T(()=>{s(0,e=!0)}),[e]}class X extends h{constructor(t){super(),L(this,t,W,R,v,{})}}function Y(r){let t,s,e;t=new X({});const o=r[1].default,n=j(o,r,r[0],null);return{c(){P(t.$$.fragment),s=A(),n&&n.c()},l(a){B(t.$$.fragment,a),s=E(a),n&&n.l(a)},m(a,l){G(t,a,l),f(a,s,l),n&&n.m(a,l),e=!0},p(a,[l]){n&&n.p&&(!e||l&1)&&w(n,o,a,a[0],e?H(o,a[0],l,null):z(a[0]),null)},i(a){e||(i(t.$$.fragment,a),i(n,a),e=!0)},o(a){c(t.$$.fragment,a),c(n,a),e=!1},d(a){a&&u(s),J(t,a),n&&n.d(a)}}}function Z(r,t,s){let{$$slots:e={},$$scope:o}=t;return r.$$set=n=>{"$$scope"in n&&s(0,o=n.$$scope)},[o,e]}class nt extends h{constructor(t){super(),L(this,t,Z,Y,v,{})}}export{nt as component,st as universal};