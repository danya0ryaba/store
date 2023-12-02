"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[44],{600:(e,s,i)=>{i.d(s,{R:()=>l});var c=i(791),r=i(87),a=i(434),n=i(570);var t=i(184);const d=()=>{const[e,s]=c.useState(!1),i=(0,a.I0)(),{list:d,isLoading:l}=(0,a.v9)((e=>e.categories));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{onClick:()=>s(!e),children:"categories"}),!l&&(0,t.jsx)("h4",{children:"Loading ..."}),e&&(0,t.jsx)("ul",{className:"menu",children:d.slice(0,5).map((e=>(0,t.jsx)("li",{className:"menu__item",onClick:()=>i((0,n.iD)(e.id)),children:(0,t.jsx)(r.OL,{to:"/categories/".concat(e.id),className:e=>{let{isActive:s}=e;return[s?"link--active":"link"]},children:e.name})},e.id)))})]})},l=()=>{const e=(()=>{const[e,s]=c.useState(window.innerWidth);return c.useEffect((()=>{const e=e=>{s(e.target.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e})(),s=(0,a.I0)(),{list:i,isLoading:l}=(0,a.v9)((e=>e.categories));return(0,t.jsxs)("div",{className:"categories",children:[e<545?(0,t.jsx)(d,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{children:"categories"}),!l&&(0,t.jsx)("h4",{children:"Loading ..."}),(0,t.jsx)("ul",{className:"menu",children:i.slice(0,5).map((e=>(0,t.jsx)("li",{className:"menu__item",onClick:()=>{return i=e.id,window.scroll(0,500),void s((0,n.iD)(i));var i},children:(0,t.jsx)(r.OL,{to:"/categories/".concat(e.id),className:e=>{let{isActive:s}=e;return[s?"link--active":"link"]},children:e.name})},e.id)))})]}),(0,t.jsxs)("div",{className:"categories__info",children:[(0,t.jsx)(r.rU,{to:"/",children:"Help"}),(0,t.jsx)(r.rU,{to:"/",children:"Terms & Conditions"})]})]})}},352:(e,s,i)=>{i.d(s,{D:()=>r});i(791);var c=i(184);const r=e=>{let{children:s}=e;return(0,c.jsx)("h3",{className:"title",children:s})}},321:(e,s,i)=>{i.d(s,{Z:()=>l});var c=i(791),r=i(87),a=i(352),n=i(184);const t=c.memo((e=>{const s=Math.floor(29*Math.random()+1);Math.floor(.2*e.price);return(0,n.jsxs)("div",{className:"product",children:[(0,n.jsx)("div",{className:"product__image",children:(0,n.jsx)("img",{src:e.images[0],alt:"product"})}),(0,n.jsx)("h4",{className:"product__title",children:e.title}),(0,n.jsx)("h4",{className:"product__name",children:e.category.name}),(0,n.jsxs)("div",{className:"product__info",children:[(0,n.jsxs)("div",{className:"price",children:[(0,n.jsxs)("span",{className:"price-new",children:[e.price,"$"]}),(0,n.jsxs)("span",{className:"price-old",children:[e.price+.2*e.price,"$"]})]}),(0,n.jsxs)("span",{className:"sales",children:[s," people purchased"]})]})]})}));var d=i(246);const l=c.memo((e=>{let{products:s,title:i}=e;const[l,o]=c.useState(5),m=c.useCallback((()=>{window.scrollTo(0,0)}),[]);return(0,n.jsxs)("div",{className:"trending",children:[(0,n.jsx)(a.D,{children:i}),(0,n.jsx)("div",{className:"trending__cards",children:s.slice(0,l).map((e=>(0,n.jsx)(r.rU,{to:"/products/".concat(e.id),onClick:m,children:(0,n.jsx)(t,{...e})},e.id)))}),(0,n.jsx)("div",{className:"forCenterButton",onClick:()=>o((e=>e+5)),children:(0,n.jsx)(d.z,{children:"See more"})})]})}))},44:(e,s,i)=>{i.r(s),i.d(s,{default:()=>u});var c=i(791),r=(i(761),i(246)),a=i(434),n=i(184);const t=c.memo((e=>{let{title:s,price:i,description:t,images:d,addProductToCard:l,...o}=e;const m=c.useMemo((()=>[4.5,5,5.5]),[]),[h,u]=c.useState(0),[j,x]=c.useState(),{activeCategory:p,list:v}=(0,a.v9)((e=>e.categories)),_=c.useMemo((()=>v.find((e=>e.id===p))),[v]),N=_?_.name:"",g=d&&d.length>0;return(0,n.jsx)("div",{className:"banner",children:(0,n.jsxs)("div",{className:"banner__product",children:[(0,n.jsx)("div",{className:"product__image",children:g&&(0,n.jsx)("img",{src:d[h],alt:"product"})}),(0,n.jsx)("div",{className:"product__slider",children:g&&d.map(((e,s)=>(0,n.jsx)("img",{onClick:()=>u(s),src:e,alt:"slider",className:"slider"},s)))}),(0,n.jsxs)("div",{className:"product__info_card",children:[(0,n.jsx)("h3",{className:"product__title_name",children:s}),(0,n.jsxs)("h4",{className:"product__price",children:[i,"$"]}),(0,n.jsx)("div",{className:"product__color",children:(0,n.jsxs)("span",{children:["Color: ",(0,n.jsx)("b",{children:"Blanc"})]})}),"Shoes"===N&&(0,n.jsxs)("div",{className:"product__size",children:[(0,n.jsx)("span",{children:"Sizes:  "})," ",m.map(((e,s)=>(0,n.jsx)("b",{onClick:()=>x(e),className:"item__size ".concat(e===j?"item__size--active":""),children:e},s)))]}),(0,n.jsx)("div",{className:"product__description",children:t}),(0,n.jsxs)("div",{className:"buttons",children:[(0,n.jsx)("div",{className:"marginForButton",onClick:l,children:(0,n.jsx)(r.z,{children:"Add to cart"})}),(0,n.jsx)(r.z,{disabled:!0,children:"Add to favorites"})]})]})]})})}));var d=i(321),l=i(600),o=i(689),m=i(731),h=i(749);const u=()=>{const e=(0,a.I0)(),{productId:s}=(0,o.UO)(),{list:i}=(0,a.v9)((e=>e.product)),{filtered:r}=(0,a.v9)((e=>e.products));c.useEffect((()=>{e((0,m.w)(s))}),[s,e]);const u=c.useCallback((()=>{e((0,h.gK)(i))}),[e,i]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"main",children:[(0,n.jsx)(l.R,{}),(0,n.jsx)(t,{...i,addProductToCard:u})]}),(0,n.jsx)(d.Z,{products:r,title:"Related products"})]})}},761:()=>{}}]);
//# sourceMappingURL=44.3c5311b2.chunk.js.map