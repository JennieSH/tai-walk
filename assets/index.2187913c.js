var B1=Object.defineProperty,k1=Object.defineProperties;var T1=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var l1=Object.prototype.hasOwnProperty,c1=Object.prototype.propertyIsEnumerable;var u1=(e,t,o)=>t in e?B1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))l1.call(t,o)&&u1(e,o,t[o]);if(P)for(var o of P(t))c1.call(t,o)&&u1(e,o,t[o]);return e},v=(e,t)=>k1(e,T1(t));var z=(e,t)=>{var o={};for(var r in e)l1.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&P)for(var r of P(e))t.indexOf(r)<0&&c1.call(e,r)&&(o[r]=e[r]);return o};import{n as g,j as a,r as p,a as s,N as Z,C as N1,u as d1,d as I1,L as b,J as j1,b as R1,R as P1,c as z1,e as h1,F as Z1,H as H1,S as L1,f as Y,g as O1,h as M1,i as V1,k as U1,T as Y1,G as W1}from"./vendor.fc63104f.js";const G1=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};G1();var W;(function(e){e.HOME="/",e.ACTIVITY="/activity",e.RESTAURANT="/restaurant",e.SCENIC_SPOT="/scenic-spot"})(W||(W={}));var A=W,c;(function(e){e.ACTIVITY="activity",e.SCENIC_SPOT="scenic-spot",e.RESTAURANT="restaurant"})(c||(c={}));var H;(function(e){e.\u7BC0\u6176\u6D3B\u52D5="activity",e.\u63A2\u7D22\u666F\u9EDE="scenic-spot",e.\u54C1\u5690\u7F8E\u98DF="restaurant"})(H||(H={}));var C;(function(e){e.activity="\u7BC0\u6176\u6D3B\u52D5",e["scenic-spot"]="\u63A2\u7D22\u666F\u9EDE",e.restaurant="\u54C1\u5690\u7F8E\u98DF"})(C||(C={}));const p1=[c.ACTIVITY,c.RESTAURANT,c.SCENIC_SPOT],G=[{path:A.SCENIC_SPOT,text:C[c.SCENIC_SPOT]},{path:A.ACTIVITY,text:C[c.ACTIVITY]},{path:A.RESTAURANT,text:C[c.RESTAURANT]}],K1=g.svg`
  width: ${({width:e})=>e||"1.875rem"};
  height: ${({height:e})=>e||"1.875rem"};
  color: ${({color:e})=>e&&e};
`,m=({name:e,width:t,height:o,color:r,className:i,clickHandler:l})=>a(K1,{className:i,width:t,height:o,color:r,fill:"currentColor","aria-hidden":"true",onClick:l,children:a("use",{href:`#${e}`})}),q1=g.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 45px;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  @media (max-width: ${({theme:e})=>e.screens.lg}) {
    justify-content: center;
    border-bottom: none;
  }
`,Q1=g.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  li {
    padding: 16px 10px;
  }

  a {
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    color: ${({theme:e})=>e.color["gary-300"]};
    border-bottom: 2px solid ${({theme:e})=>e.color.transparent};
    letter-spacing: 0.3rem;

    &:hover {
      color: ${({theme:e})=>e.color.active};
    }

    &.active {
      color: ${({theme:e})=>e.color.primary};
      border-color: ${({theme:e})=>e.color.focus};
    }
  }

  @media (max-width: ${({theme:e})=>e.screens.lg}) {
    display: none;
  }
`,X1=g.div`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  @media (max-width: ${({theme:e})=>e.screens.lg}) {
    display: block;
  }
`,J1=g.nav`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;

  ul {
    margin-left: auto;
    width: 65%;
    min-width: 280px;
    overflow: hidden;
    background-color: ${({theme:e})=>e.color.white};
    border-bottom-left-radius: 30px;
  }

  li {
    &:nth-of-type(3) {
      border-top: 1px solid ${({theme:e})=>e.color.border};
      border-bottom: 1px solid ${({theme:e})=>e.color.border};
    }
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 32px 0;
    color: ${({theme:e})=>e.color["gary-300"]};
    text-align: center;
    letter-spacing: 0.3rem;

    &:hover {
      color: ${({theme:e})=>e.color.active};
      background-color: ${({theme:e})=>e.color.border};
    }

    &.active {
      color: ${({theme:e})=>e.color.primary};
    }
  }

  .mb-logo {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;

    a {
      padding: 7px 0 0 20px;
      width: auto;
      text-align: start;

      &:hover {
        background-color: ${({theme:e})=>e.color.transparent};
      }
    }
  }

  @media (max-width: ${({theme:e})=>e.screens.lg}) {
    display: block;
  }
`,e0=()=>{const[e,t]=p.exports.useState(!1),o=p.exports.useRef(null);return s(q1,{children:[a(Z,{to:"/",children:a(m,{name:"logo-pc",width:"240px"})}),a(Q1,{children:a("ul",{children:G.map(r=>a("li",{children:a(Z,{to:r.path,activeClassName:"active",children:r.text})},`pc-${r.path}`))})}),a(X1,{children:a(m,{name:"burger",width:"40px",height:"40px",clickHandler:()=>t(!e)})}),a(N1,{nodeRef:o,in:e,timeout:1e3,classNames:"fade",unmountOnExit:!0,children:a(J1,{ref:o,children:s("ul",{children:[s("li",{className:"mb-logo",children:[a(Z,{to:"/",onClick:()=>t(!e),children:a(m,{name:"logo-mb",width:"120px"})}),a(m,{name:"close",width:"40px",height:"40px",clickHandler:()=>t(!e)})]}),G.map(r=>a("li",{children:a(Z,{to:r.path,activeClassName:"active",onClick:()=>t(!e),children:r.text})},`mb-${r.path}`))]})})})]})},t0=g.main`
  h2 {
    font-size: ${({theme:e})=>e.fontSize["3xl"]};
    font-weight: ${({theme:e})=>e.fontWeight.light};

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      font-size: ${({theme:e})=>e.fontSize["2xl"]};
    }
  }

  .sub-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .checkout {
    display: flex;
    align-items: center;
    color: ${({theme:e})=>e.color.red};

    > span {
      margin-right: 4px;
    }
  }
`,a0=g.section`
  margin-top: 20px;

  .card-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 12px;

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 16px;
    }
  }
`,g1=g.section`
  margin: 20px 0;

  &:last-of-type {
    margin-bottom: 80px;
  }

  .spot-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-y: scroll;
  }
`,r0=g.section`
  display: flex;
  justify-content: center;
  margin: 100px 0 40px 0;

  @media (max-width: ${({theme:e})=>e.screens.lg}) {
    flex-direction: column;
    align-items: center;
    margin: 12px 0 36px 0;
  }

  h1,
  h2 {
    margin-top: 0;
    font-size: ${({theme:e})=>e.fontSize["7xl"]};
    font-weight: ${({theme:e})=>e.fontWeight.light};
    line-height: 2.5rem;
    letter-spacing: 0.03em;

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      text-align: center;
      font-size: ${({theme:e})=>e.fontSize["3xl"]};
      line-height: 1.5rem;
    }
  }

  h3 {
    display: flex;
    align-items: center;
    color: ${({theme:e})=>e.color["gary-300"]};
    font-size: ${({theme:e})=>e.fontSize.base};
    font-weight: ${({theme:e})=>e.fontWeight.normal};

    span:first-of-type {
      margin: 0 8px 0 4px;
      font-size: ${({theme:e})=>e.fontSize.lg};
    }

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      justify-content: center;
      font-size: ${({theme:e})=>e.fontSize.sm};

      span:first-of-type {
        font-size: ${({theme:e})=>e.fontSize.sm};
      }
    }
  }

  .underline {
    border-bottom: 2px solid ${({theme:e})=>e.color["green-50"]};
  }

  .search {
    &-block {
      flex: 1 1 auto;
      position: relative;
      width: 100%;
      max-width: 350px;
      margin-left: 77px;
      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        margin: 0 16px;
      }
    }
    &-bar {
      margin: 10px 0;
    }
  }
`,o0=g.div`
  position: relative;
  cursor: pointer;
  width: 100%;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 16px 0 30px;
    text-align: start;
    color: ${({theme:e})=>e.color.secondary};
    background-color: ${({theme:e})=>e.color.white};
    font-weight: ${({theme:e})=>e.fontWeight.medium};
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.borderRadius.default};
    cursor: pointer;
  }

  ul {
    position: absolute;
    z-index: 5;
    width: 100%;
    margin-top: 8px;
    max-height: 450px;
    background-color: ${({theme:e})=>e.color.white};
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.borderRadius.default};
    overflow-y: scroll;
  }

  li {
    padding: 16px 30px;
    background-color: ${({theme:e})=>e.color.white};
    border-top: 1px solid ${({theme:e})=>e.color.border};

    &:first-of-type {
      border-top: none;
    }

    &:hover {
      background-color: rgba(127, 151, 123, 0.2);
    }
  }
`,m1=({list:e,value:t,className:o,setValue:r})=>{const[i,l]=p.exports.useState(!1),n=d=>{r(d),l(!i)};return s(o0,{className:o,children:[s("button",{onClick:()=>l(!i),children:[t,a(m,{width:"20px",height:"20px",name:i?"arrow-up":"arrow-down",clickHandler:()=>l(!i)})]}),i&&a("ul",{children:e.map(d=>a("li",{onClick:()=>n(d),children:d},`dropdown-${d}`))})]})},i0=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background-color: ${({theme:e})=>e.color.primary};
  color: ${({theme:e})=>e.color.white};
  cursor: pointer;
  font-weight: ${({theme:e})=>e.fontWeight.bold};

  &:hover {
    background-color: ${({theme:e})=>e.color.active};
  }

  span {
    margin-left: 10px;
    letter-spacing: 1rem;
  }
`,f1=({className:e,clickHandler:t})=>s(i0,{className:e,onClick:t,children:[a(m,{name:"search"}),a("span",{children:"\u641C\u5C0B"})]}),n0=g.input`
  width: 100%;
  height: 50px;
  padding: 0 30px;
  color: ${({theme:e})=>e.color.secondary};
  background-color: ${({theme:e,backgroundColor:t})=>t||e.color["gary-50"]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.borderRadius.default};
`,x1=({type:e="text",value:t="",placeholder:o,className:r,backgroundColor:i,clickHandler:l,changeHandler:n,enterHandler:d})=>a(n0,{type:e,value:t,placeholder:o,className:r,backgroundColor:i,onClick:l,onChange:n,onKeyDown:u=>{u.key==="Enter"&&d&&d(u)}}),y1=G.map(e=>e.text),s0=()=>{const[e,t]=p.exports.useState(y1[0]),[o,r]=p.exports.useState(""),i=d1();return s(r0,{children:[s("div",{children:[s("h1",{children:["\u63A2\u7D22",a("span",{className:"underline",children:"\u53F0\u7063\u4E4B\u7F8E"})]}),a("h2",{children:"\u8B93\u6211\u5011\u66F4\u89AA\u8FD1\u9019\u7247\u571F\u5730"}),s("h3",{children:[a(m,{name:"spot",width:"24px"}),a("span",{children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),a("span",{children:"Taiwan Travel Guide"})]})]}),s("div",{className:"search-block",children:[a(m1,{list:y1,value:e,setValue:t}),a(x1,{className:"search-bar",placeholder:"\u4F60\u60F3\u53BB\u54EA\u88E1\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57",value:o,changeHandler:n=>r(n.target.value)}),a(f1,{clickHandler:()=>{let n;o?n=`/${H[e]}?keyword=${o}`:n=`/${H[e]}`,i.push(n)}})]})]})},l0=g.div`
  position: relative;
  background-color: ${({theme:e})=>e.color["gary-100"]};
  border-radius: ${({theme:e})=>e.borderRadius["3xl"]};
  overflow: hidden;
  height: 500px;

  .slide {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity ease-in-out 1s;
    opacity: 0;

    &.active {
      opacity: 1;
    }

    &-title {
      letter-spacing: 0.1rem;
      color: ${({theme:e})=>e.color.white};
      font-weight: ${({theme:e})=>e.fontWeight.bold};
    }
  }

  .controller {
    position: absolute;
    top: calc(50% - 8px);
    cursor: pointer;

    &-left {
      left: 12px;
    }
    &-right {
      right: 12px;
    }
  }

  .dot-list {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 32px;
    cursor: pointer;

    li {
      margin: 0 6px;
      width: 16px;
      height: 16px;
      border-radius: ${({theme:e})=>e.borderRadius.full};
      background-color: ${({theme:e})=>e.color["gary-100"]};
      opacity: 80%;

      &.active {
        background-color: ${({theme:e})=>e.color.white};
      }
    }
  }
`,N="https://images.unsplash.com",L=[{title:"\u53F0\u5317\u5E02\uFF5C101 \u5927\u6A13",url:`${N}/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80`},{title:"\u5B9C\u862D\u7E23\uFF5C\u9F9C\u5C71\u5CF6",url:`${N}/photo-1630244024081-dc4039254a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`},{title:"\u53F0\u4E2D\u5E02\uFF5C\u9AD8\u7F8E\u6FD5\u5730",url:`${N}/photo-1614518921956-3dc707dbc218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80`},{title:"\u5609\u7FA9\u7E23\uFF5C\u963F\u91CC\u5C71",url:`${N}/photo-1601399237877-39d1c2d99b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80`},{title:"\u53F0\u5357\u5E02\uFF5C\u4E95\u4ED4\u8173\u74E6\u76E4\u9E7D\u7530",url:`${N}/photo-1621315892013-f32af7358947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}],c0=()=>{const[e,t]=p.exports.useState(0),o=r=>{let i=Math.abs(e);const l=L.length;r==="next"?i+=1:i-=1,t(i%l)};return p.exports.useEffect(()=>{const r=setInterval(()=>o("next"),4e3);return()=>clearInterval(r)}),s(l0,{children:[L.map((r,i)=>a("div",{className:i===e?"slide active":"slide",style:{backgroundImage:`url(${r.url})`},children:a("h2",{className:"slide-title",children:r.title})},`carousel-${r.title}`)),e>0&&a(m,{className:"controller controller-left",name:"circle-left",clickHandler:()=>o("prev")}),e<L.length-1&&a(m,{className:"controller controller-right",name:"circle-right",clickHandler:()=>o("next")}),a("ul",{className:"dot-list",children:L.map((r,i)=>a("li",{className:e===i?"active":"",onClick:()=>t(i),"aria-hidden":"true"},`dot-${r.title}`))})]})},u0=g.div`
  > a {
    display: flex;
    height: 160px;
    color: ${({theme:e})=>e.color["gary-300"]};
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.borderRadius["3xl"]};
    overflow: hidden;

    :hover {
      img {
        transform: scale(1.1);
      }
    }

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      font-size: ${({theme:e})=>e.fontSize.xs};
    }
  }

  .card {
    &-img {
      flex: none;
      width: 160px;
      overflow: hidden;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in;
      }
    }

    &-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px 30px;
    }

    &-title {
      height: 100%;
      margin: 8px 0;
      color: ${({theme:e})=>e.color["gary-500"]};
      font-size: ${({theme:e})=>e.fontSize.xl};
      font-weight: ${({theme:e})=>e.fontWeight.bold};

      @media (max-width: ${({theme:e})=>e.screens.md}) {
        font-size: ${({theme:e})=>e.fontSize.sm};
      }
    }

    &-info {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      > div {
        display: flex;
        align-items: center;
      }

      span {
        margin: 0 4px;
      }

      @media (max-width: ${({theme:e})=>e.screens.md}) {
        margin-top: 0;

        > div:last-of-type {
          display: none;
        }
      }
    }

    &-more {
      color: ${({theme:e})=>e.color.primary};
      font-weight: ${({theme:e})=>e.fontWeight.medium};

      &:hover {
        color: ${({theme:e})=>e.color.active};
      }
    }
  }
`,D=(e,t="YYYY/MM/DD")=>e?I1(e).format(t):"",v1=(e,t)=>t?t.length<e?t:`${t.substr(0,e)} ...`:"",d0=28,h0=({category:e,activityCard:t})=>a(u0,{children:s(b,{to:`/${e}/${t.id}`,title:t.name,children:[a("div",{className:"card-img",children:a("img",{src:t.Picture.PictureUrl1,alt:t.Picture.PictureDescription1,title:t.Picture.PictureDescription1})}),s("div",{className:"card-content",children:[a("span",{children:`${D(t.StartTime)} - ${D(t.EndTime)}`}),a("h3",{className:"card-title",children:v1(d0,t.name)}),s("div",{className:"card-info",children:[s("div",{children:[a(m,{name:"spot-line",width:"16px"}),a("span",{children:t.City})]}),s("div",{className:"card-more",children:[a("span",{children:"\u8A73\u7D30\u4ECB\u7D39"}),a(m,{name:"arrow-right",width:"16px"})]})]})]})]})}),p0=g.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  color: ${({theme:e})=>e.color["gary-300"]};
  font-size: ${({theme:e})=>e.fontSize.sm};

  :hover {
    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${({theme:e})=>e.screens.lg}) {
    font-size: ${({theme:e})=>e.fontSize.xs};
  }

  .card {
    &-img {
      width: 280px;
      height: 200px;
      border-radius: ${({theme:e})=>e.borderRadius["3xl"]};
      overflow: hidden;

      @media (max-width: ${({theme:e})=>e.screens.md}) {
        width: 220px;
        height: 160px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in;
      }
    }

    &-title {
      margin: 10px 0 8px 0;
      color: ${({theme:e})=>e.color["gary-500"]};
      font-size: ${({theme:e})=>e.fontSize.base};
      font-weight: ${({theme:e})=>e.fontWeight.bold};

      @media (max-width: ${({theme:e})=>e.screens.md}) {
        font-size: ${({theme:e})=>e.fontSize.sm};
      }
    }

    &-spot {
      display: flex;
      align-items: center;

      > span {
        margin-left: 4px;
        color: ${({theme:e})=>e.color["gary-300"]};
      }
    }
  }
`,g0=15,O=({card:e,className:t,category:o})=>a(p0,{className:t,children:s(b,{to:`/${o}/${e.id}`,title:e.name,children:[a("div",{className:"card-img",children:a("img",{src:e.Picture.PictureUrl1,alt:e.Picture.PictureDescription1,title:e.Picture.PictureDescription1})}),a("h3",{className:"card-title",children:v1(g0,e.name)}),s("div",{className:"card-spot",children:[a(m,{name:"spot-line",width:"16px"}),a("span",{children:e.City})]})]})});var F;(function(e){e.ON="on",e.OFF="off"})(F||(F={}));const w1=!1,K=p.exports.createContext({loadingState:w1,loadingDispatch:()=>null}),m0=(e,t)=>{switch(t.type){case F.OFF:return!1;case F.ON:return!0;default:return e}},f0=({children:e})=>{const[t,o]=p.exports.useReducer(m0,w1);return a(K.Provider,{value:{loadingState:t,loadingDispatch:o},children:e})},x0=()=>{const e="467cc10018d4421d9c9766ad466290d8",t="qzZQjBDhgfbt7QtJPAekBBFHTik",o=new Date().toUTCString(),r=new j1("SHA-1","TEXT");r.setHMACKey(t,"TEXT"),r.update(`x-date: ${o}`);const i=r.getHMAC("B64");return{"Content-Type":"application/json",Authorization:`hmac username="${e}", algorithm="hmac-sha1", headers="x-date", signature="${i}"`,"X-Date":o}};var q;(function(e){e.PTX_URL="https://ptx.transportdata.tw/MOTC/v2/Tourism",e.GOOGLE_MAP_URL="https://www.google.com/maps/embed/v1/place"})(q||(q={}));var b1=q;const y0=R1.create({baseURL:b1.PTX_URL,headers:x0(),validateStatus:e=>e>=200&&e<400}),_=async(e,t)=>{const o=new URLSearchParams(y({$format:"JSON"},t)).toString();return await y0(`${e}?${o}`).then(i=>i.data).catch(i=>{console.error(i),alert(i)})};var S;(function(e){e.SCENIC_SPOT="/ScenicSpot",e.RESTAURANT="/Restaurant",e.ACTIVITY="/Activity"})(S||(S={}));const B={getScenicSpot(e){return _(S.SCENIC_SPOT,e)},getScenicSpotByCity(e){const i=e,{city:t}=i,o=z(i,["city"]),r=`${S.SCENIC_SPOT}/${t}`;return _(r,o)},getRestaurant(e){return _(S.RESTAURANT,e)},getRestaurantByCity(e){const i=e,{city:t}=i,o=z(i,["city"]),r=`${S.RESTAURANT}/${t}`;return _(r,o)},getActivity(e){return _(S.ACTIVITY,e)},getActivityByCity(e){const i=e,{city:t}=i,o=z(i,["city"]),r=`${S.ACTIVITY}/${e.city}`;return _(r,o)}};var $;(function(e){e.BASE="Base",e.MULTIPLE="Multiple",e.DETAIL="Detail"})($||($={}));const Q=4,X=1,E="Picture/PictureUrl1 ne null and City ne null",M="UpdateTime desc",V="Address,Picture,City",v0={[$.BASE]:{[c.ACTIVITY]:{$top:Q.toString(),$select:"ActivityID,ActivityName,City,Picture",$filter:E,$orderBy:"StartTime desc"},[c.SCENIC_SPOT]:{$top:Q.toString(),$select:`ScenicSpotID,ScenicSpotName,${V}`,$filter:E,$orderBy:`${M},OpenTime asc`},[c.RESTAURANT]:{$top:Q.toString(),$select:`RestaurantID,RestaurantName,${V}`,$filter:E,$orderBy:`${M},OpenTime desc`}},[$.MULTIPLE]:{[c.ACTIVITY]:{$select:"ActivityID,ActivityName,City,Picture",$filter:E,$orderBy:M},[c.SCENIC_SPOT]:{$select:`ScenicSpotID,ScenicSpotName,${V}`,$filter:E,$orderBy:`${M},OpenTime asc`},[c.RESTAURANT]:{$select:`RestaurantID,RestaurantName,${V}`,$filter:E,$orderBy:"OpenTime asc"}},[$.DETAIL]:{[c.ACTIVITY]:{$top:X.toString(),$filter:E},[c.SCENIC_SPOT]:{$top:X.toString(),$filter:E},[c.RESTAURANT]:{$top:X.toString(),$filter:E}}},w0=(e,t)=>{switch(e){case c.SCENIC_SPOT:return t?B.getScenicSpotByCity:B.getScenicSpot;case c.RESTAURANT:return t?B.getRestaurantByCity:B.getRestaurant;case c.ACTIVITY:return t?B.getActivityByCity:B.getActivity;default:throw Error("The category is invalid! Please check again.")}},b0=e=>{const{page:t,category:o,city:r,keyword:i,date:l,id:n,position:d}=e;let h=v0[t][o];const u=[E];if(r&&(h=v(y({},h),{city:r})),i&&u.push(`contains(Description, '${i}')`),l&&o===c.ACTIVITY&&u.push(`(date(StartTime) le ${l} and date(EndTime) ge ${l})`),d&&(h=v(y({},h),{$spatialFilter:`nearby(${d})`})),n)switch(o){case c.ACTIVITY:u.push(`ActivityID eq '${n}'`);break;case c.RESTAURANT:u.push(`RestaurantID eq '${n}'`);break;case c.SCENIC_SPOT:u.push(`ScenicSpotID eq '${n}'`);break}return h=v(y({},h),{$filter:u.join(" and ")}),h},J=()=>{const{loadingDispatch:e}=p.exports.useContext(K);return{fetchTourismData:async o=>{const r=w0(o.category,o.city),i=b0(o);e({type:F.ON});const l=await r(i);return e({type:F.OFF}),l}}},$0=()=>{const[e,t]=p.exports.useState([]),[o,r]=p.exports.useState([]),[i,l]=p.exports.useState([]),{fetchTourismData:n}=J();return p.exports.useEffect(()=>{const d=async()=>{const f=await n({page:$.BASE,category:c.ACTIVITY});!f||t(f.map(x=>v(y({},x),{name:x.ActivityName,id:x.ActivityID})))},h=async()=>{const f=await n({page:$.BASE,category:c.SCENIC_SPOT});!f||r(f.map(x=>v(y({},x),{name:x.ScenicSpotName,id:x.ScenicSpotID})))},u=async()=>{const f=await n({page:$.BASE,category:c.RESTAURANT});!f||l(f.map(x=>v(y({},x),{name:x.RestaurantName,id:x.RestaurantID})))};d(),h(),u()},[]),s(t0,{className:"container",children:[a(s0,{}),a(c0,{}),s(a0,{children:[s("div",{className:"sub-title",children:[a("h2",{children:"\u8FD1\u671F\u6D3B\u52D5"}),s(b,{to:"/activity",className:"checkout",children:[a("span",{children:"\u67E5\u770B\u66F4\u591A\u6D3B\u52D5"}),a(m,{name:"arrow-right-r",width:"16px"})]})]}),a("div",{className:"card-list",children:e.length&&e.map(d=>a(h0,{activityCard:d,category:c.ACTIVITY},`ac-${d.id}`))})]}),s(g1,{children:[s("div",{className:"sub-title",children:[a("h2",{children:"\u71B1\u9580\u6253\u5361\u666F\u9EDE"}),s(b,{to:"/scenic-spot",className:"checkout",children:[a("span",{children:"\u67E5\u770B\u66F4\u591A\u666F\u9EDE"}),a(m,{name:"arrow-right-r",width:"16px"})]})]}),a("div",{className:"spot-list",children:o.length&&o.map(d=>a(O,{card:d,category:c.SCENIC_SPOT},`spot-${d.id}`))})]}),s(g1,{children:[s("div",{className:"sub-title",children:[a("h2",{children:"\u4E00\u518D\u56DE\u8A2A\u7F8E\u98DF"}),s(b,{to:"/restaurant",className:"checkout",children:[a("span",{children:"\u67E5\u770B\u66F4\u591A\u7F8E\u98DF"}),a(m,{name:"arrow-right-r",width:"16px"})]})]}),a("div",{className:"spot-list",children:i.length&&i.map(d=>a(O,{card:d,category:c.RESTAURANT},`restaurant-${d.id}`))})]})]})},E0=g.main`
  padding: 60px 0 120px 0;

  .search {
    &-block {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px;

      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        flex-direction: column;
      }
    }

    &-dropdown {
      flex-basis: 320px;
      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        flex-basis: 100%;
      }
    }

    &-calendar {
      flex-basis: 320px;
      margin-left: 16px;
      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        flex-basis: 100%;
        margin: 8px 0 0;
      }
    }

    &-input {
      margin: 0 16px;

      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        margin: 8px 0;
      }
    }

    &-button {
      flex-basis: 320px;
      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        flex-basis: 100%;
      }
    }
  }
`,S0=[{text:"\u5730\u65B9\u7279\u7522",path:"/src/assets/imgs/restaurant/local-specialty.jpg",keyword:"\u7279\u7522"},{text:"\u4E2D\u5F0F\u7F8E\u98DF",path:"/src/assets/imgs/restaurant/chinese-food.jpg",keyword:"\u4E2D\u5F0F"},{text:"\u751C\u9EDE\u51B0\u54C1",path:"/src/assets/imgs/restaurant/dessert.jpg",keyword:"\u751C\u9EDE"},{text:"\u7570\u570B\u6599\u7406",path:"/src/assets/imgs/restaurant/exotic-food.jpg",keyword:"\u7570\u570B"},{text:"\u4F34\u624B\u79AE",path:"/src/assets/imgs/restaurant/souvenir.jpg",keyword:"\u4F34\u624B\u79AE"},{text:"\u7D20\u98DF",path:"/src/assets/imgs/restaurant/vegetarian.jpg",keyword:"\u7D20\u98DF"}],A0=[{text:"\u81EA\u7136\u98A8\u666F\u985E",path:"/src/assets/imgs/scenic-spot/natural.jpg",keyword:"\u666F\u89C0"},{text:"\u89C0\u5149\u5DE5\u5EE0\u985E",path:"/src/assets/imgs/scenic-spot/tourist-factory.jpg",keyword:"\u89C0\u5149\u5DE5\u5EE0"},{text:"\u904A\u61A9\u985E",path:"/src/assets/imgs/scenic-spot/recreation-area.jpg",keyword:"\u4F11\u9592"},{text:"\u4F11\u9592\u8FB2\u696D\u985E",path:"/src/assets/imgs/scenic-spot/agriculture.jpg",keyword:"\u8FB2\u5834"},{text:"\u751F\u614B\u985E",path:"/src/assets/imgs/scenic-spot/ecology.jpg",keyword:"\u751F\u614B"},{text:"\u6EAB\u6CC9\u985E",path:"/src/assets/imgs/scenic-spot/hot-spring.jpg",keyword:"\u6EAB\u6CC9"},{text:"\u53E4\u8E5F\u985E",path:"/src/assets/imgs/scenic-spot/historic-site.jpg",keyword:"\u53E4\u8E5F"}],C0=[{text:"\u7BC0\u6176\u6D3B\u52D5",path:"/src/assets/imgs/activity/festival.jpg",keyword:"\u7BC0\u6176"},{text:"\u81EA\u884C\u8ECA\u6D3B\u52D5",path:"/src/assets/imgs/activity/bicycle.jpg",keyword:"\u81EA\u884C\u8ECA"},{text:"\u904A\u61A9\u6D3B\u52D5",path:"/src/assets/imgs/activity/recreational-activities.jpg",keyword:"\u4F11\u9592"},{text:"\u7522\u696D\u6587\u5316\u6D3B\u52D5",path:"/src/assets/imgs/activity/cultural.jpg",keyword:"\u6587\u5316"},{text:"\u5E74\u5EA6\u6D3B\u52D5",path:"/src/assets/imgs/activity/annual.jpg",keyword:"\u5E74\u5EA6"},{text:"\u56DB\u5B63\u6D3B\u52D5",path:"/src/assets/imgs/activity/seasonal.jpg",keyword:"\u5B63\u7BC0"}],U={[c.ACTIVITY]:{title:"\u71B1\u9580\u4E3B\u984C",list:C0,categoryType:c.ACTIVITY,placeholder:"\u60F3\u627E\u6709\u8DA3\u7684\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57"},[c.RESTAURANT]:{title:"\u71B1\u9580\u5206\u985E",list:S0,categoryType:c.RESTAURANT,placeholder:"\u4F60\u60F3\u5403\u4EC0\u9EBC\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57"},[c.SCENIC_SPOT]:{title:"\u71B1\u9580\u4E3B\u984C",list:A0,categoryType:c.SCENIC_SPOT,placeholder:"\u4F60\u60F3\u53BB\u54EA\u88E1\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57"}},D0={[c.ACTIVITY]:"\u60F3\u627E\u6709\u8DA3\u7684\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57",[c.RESTAURANT]:"\u4F60\u60F3\u5403\u4EC0\u9EBC\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57",[c.SCENIC_SPOT]:"\u4F60\u60F3\u53BB\u54EA\u88E1\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57"},$1=U.activity,E1=p.exports.createContext({categoryState:$1,categoryDispatch:()=>null}),F0=(e,t)=>{switch(t.type){case c.ACTIVITY:return U.activity;case c.SCENIC_SPOT:return U["scenic-spot"];case c.RESTAURANT:return U.restaurant;default:return e}},_0=({children:e})=>{const[t,o]=p.exports.useReducer(F0,$1);return a(E1.Provider,{value:{categoryState:t,categoryDispatch:o},children:e})},B0=g.section`
  padding: 16px;

  h2 {
    font-size: ${({theme:e})=>e.fontSize["5xl"]};
    font-weight: ${({theme:e})=>e.fontWeight.light};

    @media (max-width: ${({theme:e})=>e.screens.md}) {
      font-size: ${({theme:e})=>e.fontSize["2xl"]};
    }
  }

  h3 {
    color: ${({theme:e})=>e.color.white};
    font-weight: ${({theme:e})=>e.fontWeight.bold};
  }

  .category {
    &-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 16px;
      grid-row-gap: 12px;

      @media (max-width: ${({theme:e})=>e.screens.md}) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 124px;
      width: 100%;
      border-radius: ${({theme:e})=>e.borderRadius["3xl"]};
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;

      @media (max-width: ${({theme:e})=>e.screens.md}) {
        width: 100%;
      }
    }
  }
`;var k0="/tai-walk/assets/agriculture.f9a84bc2.jpg",T0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k0}),N0="/tai-walk/assets/ecology.eca82464.jpg",I0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N0}),j0="/tai-walk/assets/historic-site.65272568.jpg",R0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j0}),P0="/tai-walk/assets/hot-spring.bc5fc94c.jpg",z0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P0}),Z0="/tai-walk/assets/natural.96486c19.jpg",H0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z0}),L0="/tai-walk/assets/recreation-area.e25b8e59.jpg",O0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L0}),M0="/tai-walk/assets/tourist-factory.63c68b32.jpg",V0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M0}),U0="/tai-walk/assets/chinese-food.2d021e12.jpg",Y0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U0}),W0="/tai-walk/assets/dessert.3ef3dff8.jpg",G0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W0}),K0="/tai-walk/assets/exotic-food.4660e433.jpg",q0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K0}),Q0="/tai-walk/assets/local-specialty.729dfaf9.jpg",X0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q0}),J0="/tai-walk/assets/souvenir.cc86f50d.jpg",ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J0}),te="/tai-walk/assets/vegetarian.13a3520e.jpg",ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te}),re="/tai-walk/assets/annual.46eb8e3c.jpg",oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re}),ie="/tai-walk/assets/bicycle.c21ad4aa.jpg",ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie}),se="/tai-walk/assets/cultural.6bb0758a.jpg",le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se}),ce="/tai-walk/assets/festival.4b21ebd7.jpg",ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ce}),de="/tai-walk/assets/recreational-activities.12bd0445.jpg",he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de}),pe="/tai-walk/assets/seasonal.2009b9dd.jpg",ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});const me=()=>({activity:{"/src/assets/imgs/activity/annual.jpg":oe,"/src/assets/imgs/activity/bicycle.jpg":ne,"/src/assets/imgs/activity/cultural.jpg":le,"/src/assets/imgs/activity/festival.jpg":ue,"/src/assets/imgs/activity/recreational-activities.jpg":he,"/src/assets/imgs/activity/seasonal.jpg":ge},restaurant:{"/src/assets/imgs/restaurant/chinese-food.jpg":Y0,"/src/assets/imgs/restaurant/dessert.jpg":G0,"/src/assets/imgs/restaurant/exotic-food.jpg":q0,"/src/assets/imgs/restaurant/local-specialty.jpg":X0,"/src/assets/imgs/restaurant/souvenir.jpg":ee,"/src/assets/imgs/restaurant/vegetarian.jpg":ae},"scenic-spot":{"/src/assets/imgs/scenic-spot/agriculture.jpg":T0,"/src/assets/imgs/scenic-spot/ecology.jpg":I0,"/src/assets/imgs/scenic-spot/historic-site.jpg":R0,"/src/assets/imgs/scenic-spot/hot-spring.jpg":z0,"/src/assets/imgs/scenic-spot/natural.jpg":H0,"/src/assets/imgs/scenic-spot/recreation-area.jpg":O0,"/src/assets/imgs/scenic-spot/tourist-factory.jpg":V0}}),fe=({category:e})=>{const t=me(),{categoryState:o,categoryDispatch:r}=p.exports.useContext(E1),{title:i,list:l,categoryType:n}=o;return p.exports.useEffect(()=>{r({type:e})},[e]),s(B0,{children:[a("h2",{children:i}),a("div",{className:"category-list",children:l.map(d=>a(b,{to:`/${e}?keyword=${d.keyword}`,className:"category-item",style:{backgroundImage:`url(${t[n][d.path].default})`},children:a("h3",{children:d.text})},`category-${d.text}`))})]})},xe=g.section`
  margin: 60px 8px 0 8px;

  .search-result {
    display: flex;
    align-items: baseline;

    h2 {
      margin: 0 16px;
      font-weight: ${({theme:e})=>e.fontWeight.light};
      font-size: ${({theme:e})=>e.fontSize["5xl"]};

      @media (max-width: ${({theme:e})=>e.screens.md}) {
        font-size: ${({theme:e})=>e.fontSize["2xl"]};
      }
    }

    span {
      margin: 0 4px;
      color: ${({theme:e})=>e.color["green-300"]};
    }
  }

  .search-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 60px;

    .card-img {
      @media (max-width: ${({theme:e})=>e.screens.md}) {
        width: 300px;
      }
    }
  }

  .search-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
    color: ${({theme:e})=>e.color.primary};
    font-weight: ${({theme:e})=>e.fontWeight.bold};
    span {
      display: block;
      text-align: center;
      line-height: 1.5rem;
    }
  }
`,ye=g.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pagination {
    &-list {
      display: flex;
    }

    &-page {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      margin: 0 4px;
      color: ${({theme:e})=>e.color["gary-300"]};
      font-weight: ${({theme:e})=>e.fontWeight.bold};
      border: 1px solid ${({theme:e})=>e.color.border};
      border-radius: ${({theme:e})=>e.borderRadius.sm};
      background-color: ${({theme:e})=>e.color.white};
      cursor: pointer;

      &.active {
        color: ${({theme:e})=>e.color.active};
        border-color: ${({theme:e})=>e.color.active};
      }
    }

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      margin: 0 8px;
      padding: 0;
      border: 1px solid ${({theme:e})=>e.color.border};
      border-radius: ${({theme:e})=>e.borderRadius.sm};
      background-color: ${({theme:e})=>e.color.white};
      color: ${({theme:e})=>e.color.active};

      :hover {
        color: ${({theme:e})=>e.color.white};
        border-color: ${({theme:e})=>e.color.white};
        background-color: ${({theme:e})=>e.color.primary};
      }
    }

    &-btn.disabled {
      cursor: not-allowed;
      color: ${({theme:e})=>e.color.white};
      background-color: ${({theme:e})=>e.color.border};

      :hover {
        border-color: ${({theme:e})=>e.color.border};
        background-color: ${({theme:e})=>e.color.border};
      }
    }
  }
`,k=5,ve=({currentPage:e,total:t,limitPerPage:o=20,className:r,clickHandler:i})=>{const l=Math.ceil(t/o),n=h=>{h<=0||h>l||i(h)};return s(ye,{className:r,children:[a("button",{className:e===1?"pagination-btn disabled":"pagination-btn",onClick:()=>n(e-1),children:a(m,{name:"page-left",className:"pagination-icon"})}),a("ul",{className:"pagination-list",children:(()=>{const h=Math.floor(k/2);return l<=k?Array.from({length:l},(u,f)=>f+1):e-h<=1?Array.from({length:k},(u,f)=>f+1):e+h>=l?Array.from({length:k},(u,f)=>l-k+f+1):Array.from({length:k},(u,f)=>e-h+f)})().map(h=>a("li",{className:h===e?"pagination-page active":"pagination-page",onClick:()=>n(h),children:h},`page-${h}`))}),a("button",{className:e>=l?"pagination-btn disabled":"pagination-btn",onClick:()=>n(e+1),children:a(m,{name:"page-right",className:"pagination-icon"})})]})},S1=20,we=({searchList:e,category:t})=>{const[o,r]=p.exports.useState(1),[i,l]=p.exports.useState([]);return p.exports.useEffect(()=>{window.scrollTo(0,0);const n=e.slice((o-1)*S1,o*S1);l(n)},[o,e]),s(xe,{children:[s("div",{className:"search-result",children:[a("h2",{children:"\u641C\u5C0B\u7D50\u679C"}),s("p",{children:["\u5171\u6709",a("span",{children:e.length}),"\u7B46"]})]}),a("div",{className:"search-list",children:e.length===0?s("div",{className:"search-empty",children:[a(m,{name:"empty",width:"80px",height:"80px"}),s("p",{children:[a("span",{children:"\u76EE\u524D\u67E5\u7121\u8CC7\u6599"}),a("span",{children:"\u8ACB\u91CD\u65B0\u641C\u5C0B"})]})]}):i.map(n=>a(O,{className:"search-card",card:n,category:t},`card-${n.id}`))}),e.length>0&&a(ve,{currentPage:o,total:e.length,clickHandler:r})]})};const be=g.div`
  position: relative;
  width: 100%;

  .calendar-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 16px 0 30px;
    color: ${({theme:e})=>e.color.secondary};
    background-color: ${({theme:e})=>e.color.white};
    font-weight: ${({theme:e})=>e.fontWeight.medium};
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.borderRadius.default};
    cursor: pointer;
  }

  // override react-calendar css
  .calendar {
    position: absolute;
    z-index: 3;
    top: 58px;
    left: 0;
    width: 100%;
    min-width: 283px;
    border-color: ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.borderRadius.default};

    abbr[title] {
      color: ${({theme:e})=>e.color["gary-300"]};
      text-decoration: none;
    }

    .react-calendar__tile--active,
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background: ${({theme:e})=>e.color.primary};
    }

    .react-calendar__tile--now {
      background: ${({theme:e})=>e.color["green-100"]};
    }
  }
`,$e=({className:e,date:t,changeHandler:o})=>{const[r,i]=p.exports.useState(!1),l=n=>{o(n),i(!r)};return s(be,{className:e,children:[s("button",{className:"calendar-input",onClick:()=>i(!r),children:[t?D(t):"\u9078\u64C7\u65E5\u671F",a(m,{name:"calendar",width:"20px",height:"20px"})]}),r&&a(P1,{locale:"en",className:"calendar",onChange:l,value:t})]})},Ee=g.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 0 16px;

  @media (max-width: ${({theme:e})=>e.screens.lg}) {
    padding: 0 4px;
    font-size: ${({theme:e})=>e.fontSize.sm};
  }

  a {
    margin: 2px 8px;
    color: ${({theme:e})=>e.color.active};

    &::after {
      content: "/";
      position: relative;
      right: -8px;
      color: ${({theme:e})=>e.color["gary-500"]};
    }
  }

  span:last-of-type {
    margin: 2px 0 2px 8px;
    color: ${({theme:e})=>e.color["gary-300"]};
  }
`;var T;(function(e){e.\u81FA\u5317\u5E02="Taipei",e.\u65B0\u5317\u5E02="NewTaipei",e.\u6843\u5712\u5E02="Taoyuan",e.\u81FA\u4E2D\u5E02="Taichung",e.\u81FA\u5357\u5E02="Tainan",e.\u9AD8\u96C4\u5E02="Kaohsiung",e.\u57FA\u9686\u5E02="Keelung",e.\u65B0\u7AF9\u5E02="Hsinchu",e.\u65B0\u7AF9\u7E23="HsinchuCounty",e.\u82D7\u6817\u7E23="MiaoliCounty",e.\u5F70\u5316\u7E23="ChanghuaCounty",e.\u5357\u6295\u7E23="NantouCounty",e.\u96F2\u6797\u7E23="YunlinCounty",e.\u5609\u7FA9\u7E23="ChiayiCounty",e.\u5609\u7FA9\u5E02="Chiayi",e.\u5C4F\u6771\u7E23="PingtungCounty",e.\u5B9C\u862D\u7E23="YilanCounty",e.\u82B1\u84EE\u7E23="HualienCounty",e.\u81FA\u6771\u7E23="TaitungCounty",e.\u91D1\u9580\u7E23="KinmenCounty",e.\u6F8E\u6E56\u7E23="PenghuCounty",e.\u9023\u6C5F\u7E23="LienchiangCounty"})(T||(T={}));var e1;(function(e){e.Taipei="\u81FA\u5317\u5E02",e.NewTaipei="\u65B0\u5317\u5E02",e.Taoyuan="\u6843\u5712\u5E02",e.Taichung="\u81FA\u4E2D\u5E02",e.Tainan="\u81FA\u5357\u5E02",e.Kaohsiung="\u9AD8\u96C4\u5E02",e.Keelung="\u57FA\u9686\u5E02",e.Hsinchu="\u65B0\u7AF9\u5E02",e.HsinchuCounty="\u65B0\u7AF9\u7E23",e.MiaoliCounty="\u82D7\u6817\u7E23",e.ChanghuaCounty="\u5F70\u5316\u7E23",e.NantouCounty="\u5357\u6295\u7E23",e.YunlinCounty="\u96F2\u6797\u7E23",e.ChiayiCounty="\u5609\u7FA9\u7E23",e.Chiayi="\u5609\u7FA9\u5E02",e.PingtungCounty="\u5C4F\u6771\u7E23",e.YilanCounty="\u5B9C\u862D\u7E23",e.HualienCounty="\u82B1\u84EE\u7E23",e.TaitungCounty="\u81FA\u6771\u7E23",e.KinmenCounty="\u91D1\u9580\u7E23",e.PenghuCounty="\u6F8E\u6E56\u7E23",e.LienchiangCounty="\u9023\u6C5F\u7E23"})(e1||(e1={}));const Se=(e,t,o)=>{const r=[{path:"/",text:"\u9996\u9801"},{path:`/${e}`,text:C[e]}];return t&&r.push({path:`/${e}?city=${T[t]}`,text:t}),o&&r.push({text:o}),r},A1=({category:e,city:t,title:o})=>{const r=Se(e,t,o);return a(Ee,{children:r.map((i,l)=>i.path&&l!==r.length-1?a(b,{to:i.path,children:i.text},`breadcrumb-${i.text}`):a("span",{children:i.text},`breadcrumb-${i.text}`))})},Ae=e=>{const t={};for(const[o,r]of Object.entries(e))r&&(t[o]=r);return t},Ce=e=>{const t=Ae(e);return new URLSearchParams(t).toString()},De=e=>{const t={},o=z1(),r=d1(),i=new URLSearchParams(o.search);return Array.isArray(e)?e.forEach(n=>{t[n]=i.get(n)}):t[e]=i.get(e),{query:t,routerPush:(n,d)=>{const h=d||o.pathname,u=Ce(n);r.push(`${h}?${u}`)}}},Fe=["\u81FA\u5317\u5E02","\u65B0\u5317\u5E02","\u6843\u5712\u5E02","\u81FA\u4E2D\u5E02","\u81FA\u5357\u5E02","\u9AD8\u96C4\u5E02","\u57FA\u9686\u5E02","\u65B0\u7AF9\u5E02","\u65B0\u7AF9\u7E23","\u82D7\u6817\u7E23","\u5F70\u5316\u7E23","\u5357\u6295\u7E23","\u96F2\u6797\u7E23","\u5609\u7FA9\u7E23","\u5609\u7FA9\u5E02","\u5C4F\u6771\u7E23","\u5B9C\u862D\u7E23","\u82B1\u84EE\u7E23","\u81FA\u6771\u7E23","\u91D1\u9580\u7E23","\u6F8E\u6E56\u7E23","\u9023\u6C5F\u7E23"],_e=e=>e.map(t=>"ScenicSpotID"in t&&"ScenicSpotName"in t?v(y({},t),{id:t.ScenicSpotID,name:t.ScenicSpotName}):"RestaurantID"in t&&"RestaurantName"in t?v(y({},t),{id:t.RestaurantID,name:t.RestaurantName}):"ActivityID"in t&&"ActivityName"in t?v(y({},t),{id:t.ActivityID,name:t.ActivityName}):t),Be=()=>{const[e,t]=p.exports.useState(null),[o,r]=p.exports.useState(null),[i,l]=p.exports.useState(""),[n,d]=p.exports.useState(null),{category:h}=h1(),{query:u,routerPush:f}=De(["city","date","keyword","position"]),{fetchTourismData:x}=J(),n1=()=>{const w={};w.keyword=i,w.city=e&&T[e],w.date=D(o,"YYYY-MM-DD"),f(w)},_1=async(w,I,j,R)=>{const s1=await x({page:$.MULTIPLE,category:h,city:w,keyword:j,date:I,position:R});!s1||d(_e(s1))};return p.exports.useEffect(()=>{t(u.city?e1[u.city]:null),r(u.date?new Date(u.date):null),l(u.keyword||""),d(null)},[h]),p.exports.useEffect(()=>{const{city:w,date:I,keyword:j,position:R}=u;(w||I||j||R)&&_1(w,I,j,R)},[u.city,u.date,u.keyword,u.position]),s(E0,{className:"container",children:[a(A1,{category:h}),s("div",{className:"search-block",children:[a(m1,{className:"search-dropdown",list:Fe,value:e||"\u5168\u90E8\u7E23\u5E02",setValue:t}),h===c.ACTIVITY&&a($e,{className:"search-calendar",date:o,changeHandler:r}),a(x1,{className:"search-input",placeholder:D0[h],value:i,changeHandler:w=>l(w.target.value),enterHandler:n1}),a(f1,{className:"search-button",clickHandler:n1})]}),n?a(we,{category:h,searchList:n}):a(_0,{children:a(fe,{category:h})})]})},ke=g.main`
  display: flex;
  flex-direction: column;
  padding: 60px 16px 100px 16px;
  letter-spacing: 0.05rem;

  h1 {
    color: ${({theme:e})=>e.color["gary-400"]};
    font-size: ${({theme:e})=>e.fontSize["5xl"]};
    font-weight: ${({theme:e})=>e.fontWeight.light};

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      font-size: ${({theme:e})=>e.fontSize["2xl"]};
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 400px;
    margin-top: 30px;
    overflow: hidden;
    border-radius: ${({theme:e})=>e.borderRadius["3xl"]};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .tag {
    width: fit-content;
    margin: 2px 4px;
    padding: 4px 12px;
    color: ${({theme:e})=>e.color["green-300"]};
    font-size: ${({theme:e})=>e.fontSize.base};
    border: 1px solid ${({theme:e})=>e.color["green-300"]};
    border-radius: ${({theme:e})=>e.borderRadius.full};

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      font-size: ${({theme:e})=>e.fontSize.sm};
    }

    &-list {
      display: flex;
    }
  }

  .description {
    h2 {
      margin-top: 30px;
      color: ${({theme:e})=>e.color["gary-500"]};
      font-size: ${({theme:e})=>e.fontSize.lg};
      font-weight: ${({theme:e})=>e.fontWeight.bold};
    }

    p {
      font-size: ${({theme:e})=>e.fontSize.lg};
      font-weight: ${({theme:e})=>e.fontWeight.light};
      line-height: 30px;

      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        font-size: ${({theme:e})=>e.fontSize.base};
      }
    }
  }

  .recommend {
    margin-top: 60px;

    h2 {
      font-size: ${({theme:e})=>e.fontSize["4xl"]};
      font-weight: ${({theme:e})=>e.fontWeight.light};

      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        font-size: ${({theme:e})=>e.fontSize.xl};
      }
    }

    &-link {
      display: flex;
      align-items: center;
      color: ${({theme:e})=>e.color.red};
    }

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: ${({theme:e})=>e.screens.md}) {
        align-items: flex-start;
        flex-direction: column;
      }
    }

    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 8px;
      overflow-y: scroll;
    }
  }
`,Te=g.div`
  display: flex;
  align-items: flex-start;
  margin-top: 60px;
  letter-spacing: 0.05rem;
  line-height: 30px;

  @media (max-width: ${({theme:e})=>e.screens.lg}) {
    flex-direction: column;
  }

  .block {
    width: 100%;
    min-height: 300px;
    padding: 30px;
    border-radius: ${({theme:e})=>e.borderRadius.xl};
    background-color: ${({theme:e})=>e.color["gary-50"]};

    > div {
      display: flex;
    }

    a {
      color: ${({theme:e})=>e.color.secondary};
      word-break: break-all;
    }
  }

  .title {
    flex: none;
    color: ${({theme:e})=>e.color["gary-500"]};
    font-size: ${({theme:e})=>e.fontSize.lg};
    font-weight: ${({theme:e})=>e.fontWeight.bold};

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      font-size: ${({theme:e})=>e.fontSize.base};
    }
  }

  .position {
    width: 100%;
    margin-left: 30px;

    @media (max-width: ${({theme:e})=>e.screens.lg}) {
      margin: 30px 0 0 0;
    }

    h2 {
      color: ${({theme:e})=>e.color["gary-500"]};
      font-size: ${({theme:e})=>e.fontSize.lg};
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-left: 30px;
      padding: 30px 0;
      letter-spacing: 3px;
      color: ${({theme:e})=>e.color.primary};
      border: 1px solid ${({theme:e})=>e.color.border};
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-weight: ${({theme:e})=>e.fontWeight.bold};

      &:first-of-type {
        margin-left: 0;
      }

      &:hover {
        svg {
          color: ${({theme:e})=>e.color["green-50"]};
          transform: scale(1.05);
        }
      }

      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        margin: 12px 0 0 0;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }

    svg {
      color: ${({theme:e})=>e.color.border};
      transition: scale 0.2s ease-in;
    }

    &-info {
      display: flex;

      @media (max-width: ${({theme:e})=>e.screens.lg}) {
        flex-direction: column;
      }
    }
  }
`;var t1;(function(e){e.OpenTime="\u958B\u653E\u6642\u9593",e.Phone="\u670D\u52D9\u96FB\u8A71",e.Address="\u666F\u9EDE\u5730\u5740",e.WebsiteUrl="\u5B98\u65B9\u7DB2\u7AD9",e.TicketInfo="\u7968\u50F9\u8CC7\u8A0A",e.Remarks="\u6CE8\u610F\u4E8B\u9805"})(t1||(t1={}));var a1;(function(e){e.StartTime="\u6D3B\u52D5\u6642\u9593",e.EndTime="\u6D3B\u52D5\u6642\u9593",e.Phone="\u806F\u7D61\u96FB\u8A71",e.Organizer="\u4E3B\u8FA6\u55AE\u4F4D",e.Address="\u6D3B\u52D5\u5730\u9EDE",e.WebsiteUrl="\u5B98\u65B9\u7DB2\u7AD9",e.Charge="\u6D3B\u52D5\u8CBB\u7528",e.Remarks="\u6CE8\u610F\u4E8B\u9805"})(a1||(a1={}));var r1;(function(e){e.OpenTime="\u71DF\u696D\u6642\u9593",e.Phone="\u806F\u7D61\u96FB\u8A71",e.Address="\u958B\u653E\u6642\u9593",e.WebsiteUrl="\u5B98\u65B9\u7DB2\u7AD9"})(r1||(r1={}));const Ne=g.div`
  width: 100%;
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  overflow: hidden;

  iframe {
    width: 100%;
    height: 300px;
    border: 0;
  }
`,Ie=({position:e})=>{const t=b1.GOOGLE_MAP_URL,o="AIzaSyBLggSCklBBSQUdqaO1CPr7W8znFtthGXc",{PositionLat:r,PositionLon:i}=e;return a(Ne,{children:a("iframe",{title:"Google Map",loading:"lazy",allowFullScreen:!0,src:`${t}?key=${o}&q=${r} ,${i}`})})},je=["OpenTime","Phone","Address","WebsiteUrl"],Re=["StartTime","EndTime","Phone","Organizer","Address","WebsiteUrl","Charge","Remarks"],Pe=["OpenTime","Phone","Address","WebsiteUrl","TicketInfo","Remarks"],ze=(e,t)=>{let o=[];switch(e){case c.SCENIC_SPOT:o=Pe.map(r=>({key:r,text:t1[r],value:t[r]}));break;case c.ACTIVITY:o=Re.map(r=>({key:r,text:a1[r],value:t[r]}));break;case c.RESTAURANT:o=je.map(r=>({key:r,text:r1[r],value:t[r]}));break}return o},Ze=(e,t)=>{const o=ze(e,t),r=[void 0,void 0];let i=[],l=[];return o.forEach(n=>{n.key==="Remarks"&&!n.value&&(n.value="\u7121")}),i=o.filter(n=>n.value),i.forEach(n=>{n.key==="Phone"&&(n.href=`tel:${n.value}`),n.key==="WebsiteUrl"&&(n.href=t.WebsiteUrl)}),i.forEach(n=>{n.key==="StartTime"&&(r[0]=D(n.value)),n.key==="EndTime"&&(r[1]=D(n.value))}),l=i.map(n=>n.key==="StartTime"?v(y({},n),{value:r.join(" - ")}):n).filter(n=>n.key!=="EndTime"),l},He=({category:e,informationData:t})=>{const o=Ze(e,t),r=t.Position;return s(Te,{children:[a("div",{className:"block",children:o.map(i=>i.href?s("div",{children:[s("span",{className:"title",children:[i.text,"\uFF1A"]}),a("a",{href:i.href,target:"_blank",rel:"noreferrer noopener",children:i.value})]},`info-${i.key}`):s("div",{children:[s("span",{className:"title",children:[i.text,"\uFF1A"]}),a("span",{children:i.value})]},`info-${i.key}`))}),t.Position&&s("div",{className:"position",children:[a(Ie,{position:t.Position}),s("div",{children:[a("h2",{children:"\u5468\u908A\u8CC7\u8A0A\uFF1A"}),s("div",{className:"position-info",children:[s(b,{to:`${A.SCENIC_SPOT}?position=${r==null?void 0:r.PositionLat},${r==null?void 0:r.PositionLon},5000`,title:"\u9644\u8FD1\u666F\u9EDE",children:[a(m,{name:"scenic"}),a("span",{children:"\u9644\u8FD1\u666F\u9EDE"})]}),s(b,{to:`${A.ACTIVITY}?position=${r==null?void 0:r.PositionLat},${r==null?void 0:r.PositionLon},5000`,title:"\u9644\u8FD1\u6D3B\u52D5",children:[a(m,{name:"activity"}),a("span",{children:"\u9644\u8FD1\u6D3B\u52D5"})]}),s(b,{to:`${A.RESTAURANT}?position=${r==null?void 0:r.PositionLat},${r==null?void 0:r.PositionLon},5000`,title:"\u9644\u8FD1\u7F8E\u98DF",children:[a(m,{name:"restaurant"}),a("span",{children:"\u9644\u8FD1\u7F8E\u98DF"})]})]})]})]})]})};var o1;(function(e){e.activity="\u9084\u6709\u9019\u4E9B\u4E0D\u80FD\u932F\u904E\u6D3B\u52D5",e["scenic-spot"]="\u9084\u6709\u9019\u4E9B\u4E0D\u80FD\u932F\u904E\u7684\u666F\u9EDE",e.restaurant="\u9084\u6709\u9019\u4E9B\u4E0D\u80FD\u932F\u904E\u7684\u7F8E\u98DF"})(o1||(o1={}));var i1;(function(e){e.activity="\u6D3B\u52D5",e["scenic-spot"]="\u666F\u9EDE",e.restaurant="\u7F8E\u98DF"})(i1||(i1={}));const Le=["Class","Class1","Class2","Class3"],C1=e=>"ScenicSpotID"in e&&"ScenicSpotName"in e?v(y({},e),{id:e.ScenicSpotID,name:e.ScenicSpotName||""}):"RestaurantID"in e&&"RestaurantName"in e?v(y({},e),{id:e.RestaurantID,name:e.RestaurantName||""}):"ActivityID"in e&&"ActivityName"in e?v(y({},e),{id:e.ActivityID,name:e.ActivityName||""}):e,Oe=()=>{var d,h;const[e,t]=p.exports.useState(null),[o,r]=p.exports.useState(null),{fetchTourismData:i}=J(),{category:l,id:n}=h1();return p.exports.useEffect(()=>{(async()=>{const f=await i({page:$.DETAIL,category:l,id:n});t(C1(f[0]))})()},[n]),p.exports.useEffect(()=>{const u=async()=>{const f=await i({page:$.BASE,category:l,city:T[e==null?void 0:e.City]});r(f.map(x=>C1(x)))};(e==null?void 0:e.City)&&u()},[e]),a(ke,{className:"container",children:e&&s(Z1,{children:[a(A1,{category:l,city:e.City,title:e.name}),a("div",{className:"img-container",children:a("img",{src:(d=e.Picture)==null?void 0:d.PictureUrl1,alt:(h=e.Picture)==null?void 0:h.PictureDescription1})}),a("h1",{children:e.name}),a("div",{className:"tag-list",children:Le.map(u=>e[u]&&a("div",{className:"tag",children:`# ${e[u]}`},`tag-${e[u]}`))}),s("article",{className:"description",children:[a("h2",{children:"\u4ECB\u7D39\uFF1A"}),a("p",{children:e.DescriptionDetail||e.Description})]}),a(He,{category:l,informationData:e}),o&&s("div",{className:"recommend",children:[s("div",{className:"recommend-title",children:[a("h2",{children:o1[l]}),s(b,{to:`/${l}?city=${T[e==null?void 0:e.City]}`,className:"recommend-link",children:[s("span",{children:["\u67E5\u770B\u66F4\u591A",e.City,i1[l]]}),a(m,{name:"arrow-right-r",width:"16px"})]})]}),a("div",{className:"recommend-list",children:o.map(u=>a(O,{card:u,category:l},`recommed-${u.id}`))})]})]})})},Me=g.main`
  margin-top: 100px;
  text-align: center;
`,D1=()=>a(Me,{className:"container",children:"Page Not Found"}),Ve=g.footer`
  padding: 20px 0;
  text-align: center;
  font-size: ${({theme:e})=>e.fontSize.sm};
  color: ${({theme:e})=>e.color.white};
  background-color: ${({theme:e})=>e.color["gary-100"]};
`,Ue=()=>s(Ve,{children:["Copyright \xA9 ",new Date().getFullYear()," JennieSH. Designed by Breakfast."]}),Ye=g.div`
  .loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: #ffffff78;
  }

  .loading {
    margin-bottom: 20px;
    width: 30px;
    height: 30px;
    border: 4px solid ${({theme:e})=>e.color.primary};
    top: 50%;
    animation: fill 2s infinite ease;
  }

  .loading-inner {
    width: 100%;
    background-color: ${({theme:e})=>e.color.primary};
    animation: spin 2s infinite ease-in;
  }

  span {
    color: ${({theme:e})=>e.color.active};
    font-weight: ${({theme:e})=>e.fontWeight.medium};
  }
`,We=()=>{const{loadingState:e}=p.exports.useContext(K);return p.exports.useEffect(()=>{const t=document.querySelector("#root");e?(t.style.height="100vh",t.style.overflow="hidden"):(t.style.height="auto",t.style.overflow="auto")},[e]),a(Ye,{children:e&&s("div",{className:"loading-container",children:[a("div",{className:"loading",children:a("div",{className:"loading-inner"})}),a("span",{children:"Loading..."})]})})},Ge=()=>a(H1,{children:s(f0,{children:[a(e0,{}),a(We,{}),s(L1,{children:[a(Y,{exact:!0,path:"/",component:$0}),a(Y,{exact:!0,path:"/:category",render:e=>p1.includes(e.match.params.category)?a(Be,{}):a(D1,{})}),a(Y,{path:"/:category/:id",render:e=>p1.includes(e.match.params.category)?a(Oe,{}):a(D1,{})})]}),a(Ue,{})]})}),F1={color:{primary:"#7F977B",secondary:"#6E7D60",border:"#E5E5E5",active:"#65895F",focus:"#E0DA48",white:"#ffffff",red:"#FF725E",transparent:"transparent","green-50":"#E0DA48","green-100":"#CCD5CA","green-200":"#65895F","green-300":"#BEA363","gary-50":"#F9F9F9","gary-100":"#9E9E9E","gary-200":"#737373","gary-300":"#646464","gary-400":"#1E1E1E","gary-500":"#2F2F2F"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.375rem","2xl":"1.5rem","3xl":"1.75rem","4xl":"2rem","5xl":"2.25rem","6xl":"2.5rem","7xl":"3rem"},screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},borderRadius:{xs:"0.125rem",sm:"0.25rem",default:"0.3125rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},fontFamily:{"noto-sans":"Noto Sans TC"}};const Ke=e=>O1`
    ${M1}
    html,
    body {
      padding: 0;
      margin: 0;
      background: ${e.color.white};
      min-height: 100%;
      font-family: ${e.fontFamily["noto-sans"]}, Helvetica, Arial, sans-serif;
      scroll-behavior: smooth;
    }

    ul {
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    input {
      outline: none;
    }

    li,
    div,
    input,
    section,
    main {
      box-sizing: border-box;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .container {
      flex: 1 1 auto;
      width: 100%;
      margin: 0 auto;
      padding: 0 1rem;
      box-sizing: border-box;

      @media (min-width: ${e.screens.sm}) {
        max-width: 640px;
      }

      @media (min-width: ${e.screens.md}) {
        max-width: 768px;
      }

      @media (min-width: ${e.screens.lg}) {
        max-width: 1024px;
      }

      @media (min-width: ${e.screens.xl}) {
        max-width: 1280px;
      }

      @media (min-width: ${e.screens["2xl"]}) {
        max-width: 1536px;
      }
    }
  `,qe=Ke(F1);if(typeof window!="undefined"){let e=function(){let t=document.body,o=document.getElementById("__svg__icons__dom__1644556977459__");o||(o=document.createElementNS("http://www.w3.org/2000/svg","svg"),o.style.position="absolute",o.style.width="0",o.style.height="0",o.id="__svg__icons__dom__1644556977459__"),o.innerHTML='<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="activity"><path fill="currentColor" d="M6 7h18v4H6z" /><path d="M24 5.5h-1.25V3.8a.8.8 0 0 0-.8-.8h-.9a.8.8 0 0 0-.8.8v1.7h-10V3.8a.8.8 0 0 0-.8-.8h-.9a.8.8 0 0 0-.8.8v1.7H6.5A2.507 2.507 0 0 0 4 8v17.5C4 26.875 5.125 28 6.5 28H24c1.375 0 2.5-1.125 2.5-2.5V8c0-1.375-1.125-2.5-2.5-2.5Zm0 20H6.5V13H24v12.5Zm-17.5-15V8H24v2.5H6.5ZM9 16.3a.8.8 0 0 1 .8-.8h10.9a.8.8 0 0 1 .8.8v.9a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8v-.9Zm0 5a.8.8 0 0 1 .8-.8h7.15a.8.8 0 0 1 .8.8v.9a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8v-.9Z" fill="#7F977B" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="arrow-down"><path d="M12.5 6 8 10 3.5 6" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="arrow-right-r"><path d="M6 3.5 10 8l-4 4.5" stroke="#FF725E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="arrow-right"><path d="M6 3.5 10 8l-4 4.5" stroke="#7F977B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="arrow-up"><path d="M3.5 10 8 6l4.5 4" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="burger"><rect width="50" height="50" rx="12" fill="#A8B8A5" /><path d="M40 34a1 1 0 0 1-1 1H21a1 1 0 0 1-1-1v-1.333a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1V34Zm0-8.333a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-1.334a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v1.334Zm0-8.334a1 1 0 0 1-1 1H21a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1.333Z" fill="#fff" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="calendar"><path d="M4.667 7H6v1.333H4.667V7ZM14 3.667V13c0 .733-.6 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 13l.007-9.333c0-.734.586-1.334 1.326-1.334H4V1h1.333v1.333h5.334V1H12v1.333h.667c.733 0 1.333.6 1.333 1.334ZM3.333 5h9.334V3.667H3.333V5Zm9.334 8V6.333H3.333V13h9.334ZM10 8.333h1.333V7H10v1.333Zm-2.667 0h1.334V7H7.333v1.333Z" fill="#7F977B" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="circle-left"><path d="m22 25-4-4.5 4-4.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="20" cy="20" r="19" transform="rotate(-180 20 20)" stroke="#fff" stroke-width="2" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="circle-right"><path d="m18 15 4 4.5-4 4.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="20" cy="20" r="19" stroke="#fff" stroke-width="2" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="close"><rect width="50" height="50" rx="12" fill="#A8B8A5" /><path d="m27.35 24.999 7.16-7.144a1.672 1.672 0 0 0-2.364-2.365L25 22.65l-7.144-7.16a1.672 1.672 0 0 0-2.364 2.365l7.16 7.144-7.16 7.144a1.664 1.664 0 0 0 0 2.364 1.664 1.664 0 0 0 2.364 0l7.144-7.16 7.144 7.16a1.664 1.664 0 0 0 2.365 0 1.668 1.668 0 0 0 0-2.364l-7.16-7.144Z" fill="#fff" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" id="empty"><circle cx="40" cy="40" r="40" fill="#7F977B" fill-opacity=".2" /><path d="M7.54 75.2h45.813a3.278 3.278 0 0 0 3.273-3.275V55.55c0-.022-.01-.04-.013-.061.12-.077.244-.149.362-.23l17.423 17.437a1.09 1.09 0 1 0 1.544-1.542L58.68 53.878a14.145 14.145 0 0 0 2.742-17.15 14.174 14.174 0 0 0-4.808-5.134c.002-.021.013-.039.013-.06v-5.46c0-.036-.017-.067-.02-.102-.004-.05-.017-.094-.028-.142a1.066 1.066 0 0 0-.196-.417c-.016-.02-.013-.043-.029-.063L38.9 5.7c-.006-.006-.015-.006-.022-.013a1.069 1.069 0 0 0-.486-.293c-.042-.013-.079-.017-.122-.024-.064-.01-.123-.037-.188-.037H7.54a3.278 3.278 0 0 0-3.272 3.275v63.317A3.278 3.278 0 0 0 7.539 75.2Zm53.45-31.658c0 6.622-5.385 12.008-12 12.008-6.614 0-11.999-5.386-11.999-12.008 0-6.623 5.385-12.009 12-12.009 6.614 0 11.998 5.386 11.998 12.009ZM39.172 9.296l13.934 15.687H40.264c-.48 0-1.091-.917-1.091-1.637V9.296ZM6.448 8.608A1.092 1.092 0 0 1 7.54 7.517h29.452v15.829c0 1.766 1.43 3.82 3.273 3.82h14.18v3.278a14.116 14.116 0 0 0-15.662 3.273H16.266a1.09 1.09 0 0 0 0 2.183H37.06a14.073 14.073 0 0 0-2.195 6.55h-18.6a1.09 1.09 0 0 0-.772 1.863c.205.205.482.32.772.32h18.598a14.099 14.099 0 0 0 2.195 6.55H16.266a1.09 1.09 0 0 0 0 2.184h22.361c.046 0 .085-.02.131-.027a14.125 14.125 0 0 0 15.686 3.297v15.288a1.092 1.092 0 0 1-1.09 1.092H7.538c-.61 0-1.09-.48-1.09-1.092V8.608Z" fill="#7F977B" /><path d="M16.267 27.167h13.09a1.09 1.09 0 0 0 0-2.184h-13.09a1.09 1.09 0 0 0-.772 1.864c.205.205.482.32.772.32ZM16.267 62.1h28.36a1.09 1.09 0 0 0 0-2.184h-28.36a1.09 1.09 0 0 0-.772 1.864c.205.205.482.32.772.32Z" fill="#7F977B" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 30" id="logo-mb"><path d="m0 0 7 .466-2.5 5.591L0 0Z" fill="#6E7D60" /><path d="M3.85 11.183 8 .932" stroke="#6E7D60" stroke-width="1.33" stroke-linecap="round" /><path d="M9.867 5.988c0 1.095.966 2.06 2.26 2.06 1.293 0 2.26-.965 2.26-2.06 0-1.095-.967-2.061-2.26-2.061-1.293 0-2.26.966-2.26 2.06ZM19.075 11.1a14.962 14.962 0 0 1 1.894 1.611c.59.587.488 1.535-.169 2.046a1.479 1.479 0 0 1-1.915-.086l-.839-.782a2.826 2.826 0 0 0-.994-.6l-1.441-.504a.505.505 0 0 0-.652.617l2.848 9.82a1.905 1.905 0 0 1-3.655 1.076l-1.208-4.053a.24.24 0 0 0-.347-.14l-.501.28a3.256 3.256 0 0 0-1.477 1.746l-.49 1.37a1.74 1.74 0 0 1-3.287-1.14l.74-2.207a4.016 4.016 0 0 1 1.988-2.303l2.187-1.111a.5.5 0 0 0 .253-.587l-.842-2.88a.436.436 0 0 0-.59-.279l-2.314.98c-.8.34-1.706.323-2.493-.043l-1.39-.648a1.306 1.306 0 0 1 .983-2.417l.863.301a2.185 2.185 0 0 0 1.546-.04l2.639-1.075c1.602-.653 3.358-.897 5.03-.452 1.243.331 2.669.823 3.633 1.5Z" stroke="#6E7D60" stroke-width="1.33" /><path d="M41.168 18.44a1 1 0 0 1 1 1v1.806a1 1 0 0 1-1 1h-7.152a1 1 0 0 1-1-1V19.44a1 1 0 0 1 1-1h7.152Zm-10.836 6.194a1 1 0 0 0 1 1h1.244a.44.44 0 0 0 .44-.44.44.44 0 0 1 .44-.44h8.283c.237 0 .429.192.429.429s.192.429.429.429h1.387a1 1 0 0 0 1-1v-7.658a1 1 0 0 0-1-1H31.332a1 1 0 0 0-1 1v7.68Zm10.38-16.396c-.417.314-.464.91-.077 1.26.53.48.228 1.358-.486 1.388-1.232.053-2.458.105-3.655.153-.812.032-1.324-.87-.898-1.562.503-.82 1-1.667 1.468-2.505a.985.985 0 0 0-.566-1.416l-.977-.314a1.03 1.03 0 0 0-1.256.585 39.267 39.267 0 0 1-2.592 4.945.987.987 0 0 1-.819.463c-.634.014-1.242.033-1.817.05a1.006 1.006 0 0 0-.977 1.062l.037.627a.998.998 0 0 0 1.034.94c3.928-.149 9.346-.368 14.555-.64a.975.975 0 0 1 .822.37c.168.214.325.425.47.629.352.498 1.057.643 1.542.271l.642-.492c.401-.308.511-.87.215-1.28-1.15-1.591-3.07-3.468-4.826-4.962a.984.984 0 0 0-1.23-.03l-.61.458ZM65.004 6.109a.627.627 0 0 0-.627-.627h-2.574a.627.627 0 1 0 0 1.254h2.574c.346 0 .627-.281.627-.627ZM55.128 8.27c.314-.388.291-.948-.1-1.259a17.75 17.75 0 0 0-1.808-1.23.968.968 0 0 0-1.24.22l-.214.254c-.396.471-.276 1.184.23 1.534a17.3 17.3 0 0 1 1.225.928c.481.402 1.236.383 1.63-.105l.277-.342Zm-.422 5.65c.313-.407.265-.985-.153-1.286-.547-.394-1.218-.8-1.86-1.142a.96.96 0 0 0-1.205.27l-.207.265c-.382.488-.233 1.203.29 1.534.439.277.877.578 1.26.87.49.375 1.229.33 1.605-.16l.27-.35ZM52.382 24.84a.986.986 0 0 0 1.405-.495 79.466 79.466 0 0 0 1.845-5.27.99.99 0 0 0-.416-1.129l-.334-.212a1.02 1.02 0 0 0-1.507.536 68.818 68.818 0 0 1-1.941 4.983 1.017 1.017 0 0 0 .427 1.294l.521.293Zm11.236-10.491a.484.484 0 0 1-.484.484h-.132a.484.484 0 0 1 0-.968h.132c.267 0 .484.216.484.484Zm-6.248 1.497a.35.35 0 0 0 .35.35h.475c.456 0 .825-.369.825-.824v-3.21c0-.195.148-.358.342-.376l.09-.01a.282.282 0 0 1 .295.24c.026.178.203.271.371.21l.4-.15a.573.573 0 0 0 .375-.652 10.453 10.453 0 0 0-.467-1.54.575.575 0 0 0-.738-.32l-.336.12a.255.255 0 0 0-.16.325.26.26 0 0 1-.234.344.266.266 0 0 1-.209-.436c.43-.509.862-1.055 1.275-1.589a.201.201 0 0 1 .36.123c0 .11.09.2.2.2h4.982a.076.076 0 0 0 .076-.076c0-.065.076-.1.124-.056.312.282.61.592.865.888.2.232.184.575-.014.808l-.032.037a.666.666 0 0 1-.493.231.683.683 0 0 0-.665.749l.01.104a.78.78 0 0 0 .822.703l.771-.045a.351.351 0 1 1-.058.693l-.532-.122a.484.484 0 0 0-.575.36l-.073.285c-.11.417-.59.327-.59-.105a.407.407 0 0 0-.407-.406H62a1 1 0 0 0-1 1v1.3a1 1 0 0 0 1 1h2.916a.286.286 0 0 0 .286-.286c0-.207.212-.344.397-.25.169.087.34.18.489.27.163.099.359.095.441-.076.159-.33.873-.267.873.1v.116c0 .179.145.324.324.324h.512a.836.836 0 0 0 .836-.836v-3.032c0-.25.193-.46.443-.478l.2-.016c.124-.01.24.09.266.21.036.16.207.238.357.173l.515-.224a.627.627 0 0 0 .366-.754 11.61 11.61 0 0 0-.594-1.52.652.652 0 0 0-.84-.314l-.391.158a.299.299 0 0 0-.163.405.3.3 0 0 1-.261.428h-.023c-.275.005-.424-.324-.242-.53.436-.494.875-1.017 1.294-1.527a.759.759 0 0 0-.219-1.143.81.81 0 0 0-1.063.276c-.152.23-.318.467-.494.71a.31.31 0 0 1-.48.033c-.11-.116-.14-.302-.048-.433.266-.381.544-.81.827-1.24a.769.769 0 0 0-.304-1.113.784.784 0 0 0-1.041.37c-.18.367-.384.766-.587 1.141a.164.164 0 0 1-.245.052.165.165 0 0 0-.233.033l-.304.41a.093.093 0 0 1-.168-.056.093.093 0 0 0-.093-.093h-5.027a.138.138 0 0 0-.138.137.138.138 0 0 1-.206.12l-.624-.354a.584.584 0 0 0-.777.207c-.129.205-.27.418-.418.64a.338.338 0 0 1-.499.057.29.29 0 0 1-.05-.373c.252-.387.523-.814.796-1.25a.757.757 0 0 0-.301-1.077.79.79 0 0 0-1.068.383c-.17.364-.36.748-.555 1.104a.2.2 0 0 1-.285.073.203.203 0 0 0-.28.063l-.307.481a.837.837 0 0 0 .182 1.085c.245.206.488.426.713.645a.713.713 0 0 1 .045.963.752.752 0 0 1-.565.275l-.15.005a.78.78 0 1 0 .081 1.559c.278-.02.563-.041.855-.066.214-.018.399.15.399.366a.365.365 0 0 1-.446.355l-.352-.08a.677.677 0 0 0-.8.506 9.25 9.25 0 0 1-.475 1.438c-.173.4-.014.9.376 1.095.108.053.213.108.31.16.172.091.367.075.456-.098.185-.361.931-.267.931.14Zm12.5-3.212a.71.71 0 0 0-.452.928c.164.444.318.907.438 1.332.116.414.554.674.963.538a.664.664 0 0 0 .438-.822 22.454 22.454 0 0 0-.563-1.583.674.674 0 0 0-.824-.393Zm-8.848-1.123c0 .328.266.594.594.594h2.992a.594.594 0 0 0 0-1.188h-2.992a.594.594 0 0 0-.594.594Zm4.18-1.694a.594.594 0 0 0-.594-.594h-2.992a.594.594 0 1 0 0 1.188h2.992a.594.594 0 0 0 .594-.594Zm-4.85 5.202a.642.642 0 0 0 .46-.756 20.832 20.832 0 0 0-.296-1.15.634.634 0 0 0-.755-.436.674.674 0 0 0-.497.822c.08.326.156.661.218.974.08.397.48.657.87.546Zm-.518 5.886a.341.341 0 0 1 0-.682h8.482a1 1 0 0 0 1-1V17.57a1 1 0 0 0-1-1H57.579a.737.737 0 1 0 0 1.474h8.976a.341.341 0 1 1 0 .682h-8.228c-.479 0-.89.34-.992.807a35.332 35.332 0 0 1-.539 2.13c-.176.61.222 1.254.852 1.337l.782.102a.409.409 0 0 0 .452-.282.437.437 0 0 1 .41-.31h7.022c.658 0 1.223.757.692 1.144-.22.154-.484.176-.924.176-.35 0-1.063-.01-1.875-.05-.574-.028-.987.701-.841 1.258.087.334.36.56.705.57 1.144.031 2.204.044 2.803.026.88-.044 1.496-.154 2.046-.572.594-.484.99-1.452 1.342-3.212.142-.498-.307-.946-.824-.946h-9.604ZM85.574 20.342a1 1 0 0 1 1-1h5.018a1 1 0 0 0 1-1v-.332a1 1 0 0 0-1-1h-5.018a1 1 0 0 1-1-1v-.662a1 1 0 0 1 1-1h6.492a1 1 0 0 0 1-1v-.442a1 1 0 0 0-1-1h-6.492a1 1 0 0 1-1-1v-.134a1 1 0 0 1 1-1h4.776a1 1 0 0 0 1-1v-.398a1 1 0 0 0-1-1h-4.776a1 1 0 0 1-1-1V6.13a1 1 0 0 0-1-1h-.684a1 1 0 0 0-1 1v.244a1 1 0 0 1-1 1h-4.38a1 1 0 0 0-1 1v.398a1 1 0 0 0 1 1h4.38a1 1 0 0 1 1 1v.134a1 1 0 0 1-1 1h-6.316a1 1 0 0 0-1 1v.442a1 1 0 0 0 1 1h6.316a1 1 0 0 1 1 1v4.783c0 .747-.787 1.216-1.356.732a7.03 7.03 0 0 1-1.644-2.069.963.963 0 0 1-.073-.693c.128-.502.24-1.01.337-1.51a.977.977 0 0 0-.858-1.152l-.657-.075a1.038 1.038 0 0 0-1.132.891c-.348 2.357-1.135 4.912-2.646 6.714-.45.537-.407 1.43.118 1.894l.126.113c.397.361 1.015.417 1.388.031a10.039 10.039 0 0 0 1.515-2.073c.386-.687 1.398-.799 1.968-.255 2.245 2.144 5.276 2.69 8.964 2.69h3.957c.485 0 .896-.332 1.036-.797.23-.76-.327-1.718-1.122-1.712-1.416.012-3.066.016-3.717.002-.929 0-1.833-.038-2.693-.141a.953.953 0 0 1-.827-.96v-1.42ZM108.894 20.342a1 1 0 0 1 1-1h5.018a1 1 0 0 0 1-1v-.332a1 1 0 0 0-1-1h-5.018a1 1 0 0 1-1-1v-.662a1 1 0 0 1 1-1h6.492a1 1 0 0 0 1-1v-.442a1 1 0 0 0-1-1h-6.492a1 1 0 0 1-1-1v-.134a1 1 0 0 1 1-1h4.776a1 1 0 0 0 1-1v-.398a1 1 0 0 0-1-1h-4.776a1 1 0 0 1-1-1V6.13a1 1 0 0 0-1-1h-.684a1 1 0 0 0-1 1v.244a1 1 0 0 1-1 1h-4.38a1 1 0 0 0-1 1v.398a1 1 0 0 0 1 1h4.38a1 1 0 0 1 1 1v.134a1 1 0 0 1-1 1h-6.316a1 1 0 0 0-1 1v.442a1 1 0 0 0 1 1h6.316a1 1 0 0 1 1 1v4.783c0 .747-.787 1.216-1.356.732a7.045 7.045 0 0 1-1.644-2.069.966.966 0 0 1-.073-.693c.128-.502.24-1.01.337-1.51a.977.977 0 0 0-.859-1.152l-.656-.075a1.036 1.036 0 0 0-1.131.891c-.349 2.357-1.136 4.912-2.647 6.714-.45.537-.407 1.43.118 1.894l.125.113c.398.361 1.016.417 1.39.031a10.08 10.08 0 0 0 1.514-2.073c.386-.687 1.398-.799 1.968-.255 2.245 2.144 5.277 2.69 8.964 2.69h3.957c.485 0 .896-.332 1.036-.797.23-.76-.327-1.718-1.122-1.712-1.416.012-3.066.016-3.717.002-.929 0-1.833-.038-2.693-.141a.953.953 0 0 1-.827-.96v-1.42Z" fill="#6E7D60" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241 32" id="logo-pc"><path d="m0 0 7 .5-2.5 6L0 0Z" fill="#6E7D60" /><path d="M3.85 12 8 1" stroke="#6E7D60" stroke-width="1.33" stroke-linecap="round" /><circle r="2.26" transform="matrix(-1 0 0 1 12.127 6.425)" stroke="#6E7D60" stroke-width="1.33" /><path d="M19.075 11.91c.762.574 1.454 1.255 1.973 1.815.556.6.456 1.524-.172 2.047a1.525 1.525 0 0 1-2.055-.093l-.788-.788a2.746 2.746 0 0 0-.978-.63l-1.46-.547a.497.497 0 0 0-.655.595l2.917 10.795a1.915 1.915 0 0 1-3.694 1.013l-1.219-4.39a.245.245 0 0 0-.362-.144l-.481.29a3.376 3.376 0 0 0-1.466 1.827l-.514 1.542a1.75 1.75 0 0 1-3.332-1.076l.782-2.503a4.424 4.424 0 0 1 2.104-2.564l2.094-1.143a.516.516 0 0 0 .25-.588l-.862-3.162a.412.412 0 0 0-.568-.267l-2.223 1.01c-.86.391-1.849.373-2.693-.05l-1.29-.644a1.391 1.391 0 0 1 1.11-2.546l.717.268a2.097 2.097 0 0 0 1.577-.042l2.628-1.15c1.596-.698 3.368-.959 5.042-.479 1.24.356 2.658.882 3.618 1.604Z" stroke="#6E7D60" stroke-width="1.33" /><path d="M154.602 11.414a1 1 0 0 1 1 1v.441a1 1 0 0 1-1 1h-2.18a1 1 0 0 0-1 1v8.586a1 1 0 0 1-1 1h-.695a1 1 0 0 1-1-1v-8.585a1 1 0 0 0-1-1h-2.18a1 1 0 0 1-1-1v-.442a1 1 0 0 1 1-1h9.055ZM163.559 14.383c.533 0 1.074.124 1.621.37.281.128.539.278.772.45.226.167.595.019.595-.262 0-.168.136-.304.304-.304h1.176a1 1 0 0 1 1 1V23.5a1 1 0 0 1-1 1h-1.147a.333.333 0 0 1-.333-.334c0-.346-.56-.522-.817-.289a4.664 4.664 0 0 1-.433.35c-.547.377-1.185.566-1.914.566-.794 0-1.53-.202-2.207-.605-.664-.404-1.198-.99-1.602-1.758-.403-.768-.605-1.7-.605-2.793 0-1.094.202-2.032.605-2.813.417-.781.97-1.38 1.66-1.797a4.376 4.376 0 0 1 2.325-.644Zm.507 2.422c-.52 0-.97.136-1.347.41-.365.26-.651.605-.86 1.035a3.14 3.14 0 0 0-.312 1.387c0 .742.221 1.373.664 1.894.456.521 1.055.782 1.797.782.443 0 .853-.118 1.23-.352.391-.234.703-.56.938-.977.247-.43.371-.944.371-1.543V18.43c0-.253-.093-.5-.279-.671a4.259 4.259 0 0 0-.873-.621 2.721 2.721 0 0 0-1.329-.332ZM176.145 9.5c.468 0 .872.17 1.21.508.339.325.508.716.508 1.172 0 .442-.169.833-.508 1.172a1.652 1.652 0 0 1-1.21.507c-.469 0-.873-.169-1.211-.507-.326-.339-.489-.73-.489-1.172 0-.456.163-.847.489-1.172a1.652 1.652 0 0 1 1.211-.508Zm.445 5.137a1 1 0 0 1 1 1V23.5a1 1 0 0 1-1 1h-.481a1 1 0 0 1-1-1v-5.963a.79.79 0 0 0-.791-.79.79.79 0 0 1-.791-.792v-.318a1 1 0 0 1 1-1h2.063ZM204.193 11.414a1 1 0 0 1 .948 1.32l-3.74 11.086a1 1 0 0 1-.947.68h-.445a1 1 0 0 1-.945-.673l-1.732-5.011c-.311-.898-1.58-.898-1.89 0l-1.733 5.01a.999.999 0 0 1-.945.674h-.441a1 1 0 0 1-.949-.684l-3.69-11.086a1 1 0 0 1 .949-1.316h.95a1 1 0 0 1 .96.719l1.313 4.478c.275.94 1.598.964 1.908.035l1.516-4.548a1 1 0 0 1 .949-.684h.371a1 1 0 0 1 .95.688l1.492 4.54c.306.93 1.629.912 1.909-.026l1.336-4.487a1 1 0 0 1 .959-.715h.947ZM212.211 14.383a3.91 3.91 0 0 1 1.621.37c.282.128.539.278.773.45.225.167.594.019.594-.262 0-.168.136-.304.304-.304h1.177a1 1 0 0 1 1 1V23.5a1 1 0 0 1-1 1h-1.147a.334.334 0 0 1-.334-.334c0-.346-.56-.522-.816-.289a4.68 4.68 0 0 1-.434.35c-.547.377-1.185.566-1.914.566-.794 0-1.53-.202-2.207-.605-.664-.404-1.198-.99-1.601-1.758-.404-.768-.606-1.7-.606-2.793 0-1.094.202-2.032.606-2.813.416-.781.97-1.38 1.66-1.797a4.372 4.372 0 0 1 2.324-.644Zm.508 2.422c-.521 0-.97.136-1.348.41-.364.26-.651.605-.859 1.035-.209.43-.313.892-.313 1.387 0 .742.222 1.373.664 1.894.456.521 1.055.782 1.797.782.443 0 .853-.118 1.231-.352.39-.234.703-.56.937-.977.248-.43.371-.944.371-1.543V18.43a.9.9 0 0 0-.279-.671 4.232 4.232 0 0 0-.873-.621 2.717 2.717 0 0 0-1.328-.332ZM224.207 10.438a1 1 0 0 1 1 1V23.5a1 1 0 0 1-1 1h-.48a1 1 0 0 1-1-1V11.437a1 1 0 0 1 1-1h.48ZM231.715 10.438a1 1 0 0 1 1 1v5.02c0 .913 1.121 1.348 1.737.675l1.989-2.172a1 1 0 0 1 .738-.324h.258c.89 0 1.337 1.075.709 1.705l-1.93 1.939a1 1 0 0 0-.072 1.33l2.613 3.264a1 1 0 0 1-.78 1.625h-.548c-.312 0-.606-.146-.796-.394l-1.994-2.62a1 1 0 0 0-1.503-.102l-.128.128a.998.998 0 0 0-.293.707V23.5a1 1 0 0 1-1 1h-.481a1 1 0 0 1-1-1V11.437a1 1 0 0 1 1-1h.481ZM41.51 20.198a1 1 0 0 1 1 1v1.806a1 1 0 0 1-1 1h-7.152a1 1 0 0 1-1-1v-1.806a1 1 0 0 1 1-1h7.152Zm-10.836 6.194a1 1 0 0 0 1 1h1.244a.44.44 0 0 0 .44-.44.44.44 0 0 1 .44-.44h8.283c.237 0 .429.192.429.429s.192.429.429.429h1.387a1 1 0 0 0 1-1v-7.658a1 1 0 0 0-1-1H31.674a1 1 0 0 0-1 1v7.68Zm10.38-16.396c-.417.314-.464.91-.077 1.26.53.48.228 1.358-.486 1.389-1.232.053-2.458.104-3.655.152-.812.033-1.324-.87-.898-1.562.503-.819 1-1.666 1.468-2.505a.985.985 0 0 0-.566-1.416l-.978-.313a1.03 1.03 0 0 0-1.255.584 39.288 39.288 0 0 1-2.592 4.946.987.987 0 0 1-.819.462c-.634.014-1.242.033-1.817.05a1.006 1.006 0 0 0-.977 1.063l.037.626a.998.998 0 0 0 1.035.941c3.927-.15 9.345-.368 14.554-.64a.975.975 0 0 1 .822.369c.168.215.325.425.47.63.352.498 1.057.642 1.542.27l.642-.492c.402-.308.511-.87.215-1.28-1.15-1.591-3.07-3.467-4.826-4.961a.984.984 0 0 0-1.23-.03l-.609.457ZM65.346 7.867a.627.627 0 0 0-.627-.627h-2.574a.627.627 0 0 0 0 1.254h2.574c.346 0 .627-.28.627-.627Zm-9.876 2.162c.314-.388.291-.948-.1-1.258a17.762 17.762 0 0 0-1.808-1.23.968.968 0 0 0-1.24.219l-.215.255c-.395.47-.275 1.184.23 1.534.43.297.854.616 1.226.927.481.402 1.236.383 1.63-.104l.277-.343Zm-.422 5.651c.313-.407.265-.986-.153-1.286a16.87 16.87 0 0 0-1.86-1.142.96.96 0 0 0-1.205.27l-.207.265c-.382.488-.233 1.203.29 1.534.439.276.877.577 1.26.87.49.374 1.229.329 1.605-.16l.27-.35Zm-2.324 10.917a.986.986 0 0 0 1.405-.494 79.564 79.564 0 0 0 1.845-5.271.99.99 0 0 0-.416-1.128l-.333-.213a1.02 1.02 0 0 0-1.508.536 68.784 68.784 0 0 1-1.941 4.983 1.016 1.016 0 0 0 .427 1.294l.521.293ZM63.96 16.106a.484.484 0 0 1-.484.484h-.132a.484.484 0 0 1 0-.968h.132c.267 0 .484.217.484.484Zm-6.248 1.497a.35.35 0 0 0 .35.351h.475c.456 0 .825-.37.825-.825v-3.21c0-.194.148-.357.342-.376l.09-.009a.282.282 0 0 1 .295.24c.026.177.204.27.371.209l.4-.149a.573.573 0 0 0 .375-.652 10.461 10.461 0 0 0-.467-1.54.575.575 0 0 0-.738-.32l-.336.12a.254.254 0 0 0-.16.324.26.26 0 0 1-.234.344.266.266 0 0 1-.209-.436c.43-.509.862-1.054 1.275-1.588a.201.201 0 0 1 .36.122c0 .11.09.2.2.2h4.982a.076.076 0 0 0 .076-.076c0-.065.076-.1.124-.056.312.282.61.592.865.888.2.232.185.575-.014.808l-.032.037a.666.666 0 0 1-.493.231.683.683 0 0 0-.665.749l.01.104a.78.78 0 0 0 .822.704l.771-.045a.351.351 0 1 1-.058.693l-.531-.123a.484.484 0 0 0-.576.36c-.023.095-.047.19-.073.285-.11.417-.59.328-.59-.104a.407.407 0 0 0-.407-.407h-2.795a1 1 0 0 0-1 1v1.3a1 1 0 0 0 1 1h2.916a.286.286 0 0 0 .286-.286c0-.207.212-.344.397-.25.169.087.34.181.489.27.163.099.359.096.441-.076.159-.33.873-.266.873.1v.116c0 .179.145.324.324.324h.512a.836.836 0 0 0 .836-.836v-3.032c0-.25.193-.459.443-.478l.2-.016c.124-.009.24.09.266.21.036.16.207.238.357.173l.515-.223a.627.627 0 0 0 .366-.754 11.609 11.609 0 0 0-.594-1.521.652.652 0 0 0-.84-.314l-.391.158a.298.298 0 0 0-.163.405.3.3 0 0 1-.261.428h-.023c-.275.006-.424-.324-.242-.53.436-.494.875-1.017 1.294-1.527a.759.759 0 0 0-.219-1.143.81.81 0 0 0-1.063.276c-.152.23-.318.468-.494.711a.31.31 0 0 1-.48.032c-.11-.116-.14-.302-.048-.433.266-.38.544-.809.827-1.24a.768.768 0 0 0-.304-1.112.784.784 0 0 0-1.041.37c-.18.367-.384.765-.587 1.14a.164.164 0 0 1-.245.052.165.165 0 0 0-.233.033l-.304.41a.093.093 0 0 1-.168-.056.093.093 0 0 0-.093-.093h-5.027a.138.138 0 0 0-.138.138.138.138 0 0 1-.206.12l-.624-.354a.584.584 0 0 0-.777.206c-.129.205-.27.418-.418.64a.337.337 0 0 1-.499.057.29.29 0 0 1-.05-.373c.252-.387.523-.814.796-1.25a.757.757 0 0 0-.301-1.076.79.79 0 0 0-1.068.383c-.17.364-.36.747-.555 1.103a.2.2 0 0 1-.285.073.203.203 0 0 0-.28.063l-.307.482a.837.837 0 0 0 .182 1.084c.245.207.488.427.713.646.265.257.28.676.045.962a.753.753 0 0 1-.564.275l-.15.005a.78.78 0 1 0 .08 1.56c.278-.02.564-.042.855-.066a.365.365 0 1 1-.047.721l-.352-.08a.677.677 0 0 0-.8.505 9.24 9.24 0 0 1-.475 1.439c-.173.4-.014.9.376 1.094.108.054.213.108.31.16.172.092.367.076.456-.097.185-.362.931-.267.931.139Zm12.5-3.212a.71.71 0 0 0-.452.928c.164.444.318.908.438 1.332.116.415.554.674.963.538a.664.664 0 0 0 .438-.822 22.388 22.388 0 0 0-.563-1.583.674.674 0 0 0-.824-.393Zm-8.848-1.123c0 .328.266.594.594.594h2.992a.594.594 0 1 0 0-1.188h-2.992a.594.594 0 0 0-.594.594Zm4.18-1.694a.594.594 0 0 0-.594-.594h-2.992a.594.594 0 0 0 0 1.188h2.992a.594.594 0 0 0 .594-.594Zm-4.85 5.203a.642.642 0 0 0 .46-.757 20.829 20.829 0 0 0-.296-1.15.634.634 0 0 0-.755-.436.674.674 0 0 0-.497.823c.08.325.156.66.218.973.08.398.48.657.87.547Zm-.518 5.885a.341.341 0 1 1 0-.682h8.482a1 1 0 0 0 1-1v-1.652a1 1 0 0 0-1-1H57.921a.737.737 0 0 0 0 1.474h8.976a.341.341 0 1 1 0 .682h-8.228c-.479 0-.89.34-.992.808a35.328 35.328 0 0 1-.539 2.13c-.175.61.222 1.254.852 1.336l.782.102a.409.409 0 0 0 .452-.281.437.437 0 0 1 .41-.311h7.023c.657 0 1.222.758.691 1.144-.22.154-.484.176-.924.176-.35 0-1.063-.009-1.875-.05-.574-.028-.987.701-.841 1.258a.74.74 0 0 0 .706.57c1.142.032 2.203.045 2.802.026.88-.044 1.496-.154 2.046-.572.594-.484.99-1.452 1.342-3.212.142-.497-.307-.946-.824-.946h-9.604ZM85.916 22.1a1 1 0 0 1 1-1h5.018a1 1 0 0 0 1-1v-.332a1 1 0 0 0-1-1h-5.018a1 1 0 0 1-1-1v-.662a1 1 0 0 1 1-1h6.492a1 1 0 0 0 1-1v-.442a1 1 0 0 0-1-1h-6.492a1 1 0 0 1-1-1v-.134a1 1 0 0 1 1-1h4.776a1 1 0 0 0 1-1v-.398a1 1 0 0 0-1-1h-4.776a1 1 0 0 1-1-1v-.244a1 1 0 0 0-1-1h-.684a1 1 0 0 0-1 1v.244a1 1 0 0 1-1 1h-4.38a1 1 0 0 0-1 1v.398a1 1 0 0 0 1 1h4.38a1 1 0 0 1 1 1v.134a1 1 0 0 1-1 1h-6.316a1 1 0 0 0-1 1v.442a1 1 0 0 0 1 1h6.316a1 1 0 0 1 1 1v4.784c0 .746-.787 1.215-1.356.731a7.03 7.03 0 0 1-1.644-2.068.962.962 0 0 1-.073-.693c.128-.503.24-1.01.337-1.511a.977.977 0 0 0-.858-1.152l-.657-.074c-.554-.063-1.05.34-1.131.89-.35 2.357-1.136 4.913-2.647 6.714-.45.537-.407 1.43.118 1.895l.126.112c.397.361 1.015.418 1.388.032a10.036 10.036 0 0 0 1.515-2.073c.386-.687 1.398-.8 1.968-.255 2.245 2.144 5.277 2.69 8.964 2.69h3.957c.485 0 .896-.333 1.036-.798.23-.76-.327-1.717-1.122-1.711a177.92 177.92 0 0 1-3.717.001 22.7 22.7 0 0 1-2.693-.14.953.953 0 0 1-.827-.96V22.1ZM109.236 22.1a1 1 0 0 1 1-1h5.018a1 1 0 0 0 1-1v-.332a1 1 0 0 0-1-1h-5.018a1 1 0 0 1-1-1v-.662a1 1 0 0 1 1-1h6.492a1 1 0 0 0 1-1v-.442a1 1 0 0 0-1-1h-6.492a1 1 0 0 1-1-1v-.134a1 1 0 0 1 1-1h4.776a1 1 0 0 0 1-1v-.398a1 1 0 0 0-1-1h-4.776a1 1 0 0 1-1-1v-.244a1 1 0 0 0-1-1h-.684a1 1 0 0 0-1 1v.244a1 1 0 0 1-1 1h-4.38a1 1 0 0 0-1 1v.398a1 1 0 0 0 1 1h4.38a1 1 0 0 1 1 1v.134a1 1 0 0 1-1 1h-6.316a1 1 0 0 0-1 1v.442a1 1 0 0 0 1 1h6.316a1 1 0 0 1 1 1v4.784c0 .746-.787 1.215-1.356.731a7.046 7.046 0 0 1-1.644-2.068.966.966 0 0 1-.073-.693c.128-.503.24-1.01.337-1.511a.977.977 0 0 0-.858-1.152l-.657-.074a1.036 1.036 0 0 0-1.131.89c-.349 2.357-1.136 4.913-2.647 6.714-.45.537-.407 1.43.118 1.895l.125.112c.398.361 1.016.418 1.39.032a10.094 10.094 0 0 0 1.514-2.073c.386-.687 1.398-.8 1.968-.255 2.245 2.144 5.277 2.69 8.964 2.69h3.957c.485 0 .896-.333 1.036-.798.23-.76-.327-1.717-1.122-1.711-1.416.01-3.066.015-3.717.001-.929 0-1.833-.038-2.693-.14a.952.952 0 0 1-.827-.96V22.1ZM131.28 14.324a2.836 2.836 0 0 0-2.816 2.816 2.836 2.836 0 0 0 2.816 2.816 2.836 2.836 0 0 0 2.816-2.816 2.836 2.836 0 0 0-2.816-2.816Z" fill="#6E7D60" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="page-left"><path d="M15.455 6.705c.39.39.39 1.02.001 1.41L11.58 12l3.876 3.885a.998.998 0 0 1-1.412 1.41L8.75 12l5.295-5.295a.998.998 0 0 1 1.41 0Z" fill="currentColor" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="page-right"><path d="M8.545 6.705a.998.998 0 0 0-.001 1.41L12.42 12l-3.876 3.885a.998.998 0 0 0 1.411 1.41L15.25 12 9.955 6.705a.998.998 0 0 0-1.41 0Z" fill="currentColor" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="restaurant"><path d="M22 15.5C18.8 8.7 10 7 6 7v18.5l1.5 1 3.5-2 2 1 4-2V20l5-4.5Z" fill="currentColor" /><path d="M5.005 5.326c0-1.871 1.538-3.506 3.525-3.31a25.978 25.978 0 0 1 16.803 8.535c1.337 1.491.92 3.705-.6 4.806l-6.603 4.791c-.002.547-.002.902-.001 1.366v.785a2.187 2.187 0 0 1-2.57 2.154c-.255 1.033-1.165 1.91-2.43 1.91a2.44 2.44 0 0 1-2.011-1.02L9.46 26.54C7.601 27.882 5 26.554 5 24.257l.005-18.931Zm3.341-1.444c-.761-.075-1.467.554-1.467 1.444v.65c6.567.276 12.388 3.436 16.231 8.242l.524-.38c.722-.524.815-1.466.302-2.037a24.103 24.103 0 0 0-15.59-7.917v-.002ZM6.875 24.257a.938.938 0 0 0 1.488.76l2.66-1.917a.937.937 0 0 1 1.485.762c0 .338.26.625.62.625a.622.622 0 0 0 .628-.625v-1.565a.937.937 0 1 1 1.875 0 .31.31 0 0 0 .531.221.312.312 0 0 0 .092-.22v-.778c-.002-.588-.003-1.01.006-1.861a.939.939 0 0 1 .385-.75c1.128-.82 3.12-2.265 4.945-3.588A20.05 20.05 0 0 0 6.877 7.854l-.002 16.403Z" fill="#7F977B" /><path d="M5.005 5.326c0-1.871 1.538-3.506 3.525-3.31a25.978 25.978 0 0 1 16.803 8.535c1.337 1.491.92 3.705-.6 4.806l-6.603 4.791c-.002.547-.002.902-.001 1.366v.785a2.187 2.187 0 0 1-2.57 2.154c-.255 1.033-1.165 1.91-2.43 1.91a2.44 2.44 0 0 1-2.011-1.02L9.46 26.54C7.601 27.882 5 26.554 5 24.257l.005-18.931Zm3.341-1.444c-.761-.075-1.467.554-1.467 1.444v.65c6.567.276 12.388 3.436 16.231 8.242l.524-.38c.722-.524.815-1.466.302-2.037a24.103 24.103 0 0 0-15.59-7.917v-.002ZM6.875 24.257a.938.938 0 0 0 1.488.76l2.66-1.917a.937.937 0 0 1 1.485.762c0 .338.26.625.62.625a.622.622 0 0 0 .628-.625v-1.565a.937.937 0 1 1 1.875 0 .31.31 0 0 0 .531.221.312.312 0 0 0 .092-.22v-.778c-.002-.588-.003-1.01.006-1.861a.939.939 0 0 1 .385-.75c1.128-.82 3.12-2.265 4.945-3.588A20.05 20.05 0 0 0 6.877 7.854l-.002 16.403Z" stroke="#7F977B" stroke-width=".4" /><path d="M10.889 12.872a1.25 1.25 0 1 1-1.768-1.768 1.25 1.25 0 0 1 1.768 1.768ZM15.889 16.62a1.25 1.25 0 1 0-1.768-1.768 1.25 1.25 0 0 0 1.768 1.768ZM10.889 20.367A1.25 1.25 0 1 1 9.12 18.6a1.25 1.25 0 0 1 1.768 1.768Z" fill="#7F977B" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="scenic"><path d="m4 19.5-2.5 7h27l-2.5-7c-1.833 1.334-6.5 3.2-10.5 0s-9.333-1.333-11.5 0Z" fill="currentColor" /><path d="m10 4 5.333 10L22 7.75l6.667 18.75H2L10 4Z" stroke="#7F977B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M4.853 19.1c3.494-1.963 6.987-1.788 10.48.525 3.654 2.425 7.32 2.5 10.974.237" stroke="#7F977B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="search"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.848 14.2a5.6 5.6 0 1 1 11.2 0 5.6 5.6 0 0 1-11.2 0Zm5.6-7.2a7.2 7.2 0 1 0 5.6 11.726c.002.203.08.405.234.56l3.48 3.48a.8.8 0 1 0 1.132-1.132l-3.48-3.48a.8.8 0 0 0-.827-.19A7.2 7.2 0 0 0 13.447 7Z" fill="currentColor" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="spot-line"><path d="M3.042 2.042a6.972 6.972 0 1 1 9.86 9.86l-.95.94c-.701.687-1.61 1.57-2.728 2.652a1.802 1.802 0 0 1-2.504 0l-2.796-2.72c-.351-.345-.645-.635-.882-.872a6.971 6.971 0 0 1 0-9.86Zm9.01.849a5.771 5.771 0 0 0-8.16 8.162l1.19 1.175c.821.803 1.646 1.604 2.472 2.402a.6.6 0 0 0 .835 0l2.718-2.642c.376-.369.69-.68.945-.935a5.77 5.77 0 0 0 0-8.16V2.89Zm-4.08 1.898a2.404 2.404 0 0 1 0 4.808 2.404 2.404 0 0 1 0-4.807Zm0 1.201a1.203 1.203 0 1 0 0 2.404 1.203 1.203 0 0 0 0-2.403Z" fill="#646464" /></symbol><symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="spot"><path d="M19 10.128a6.814 6.814 0 0 0-.772-3.157 7.21 7.21 0 0 0-2.168-2.505 7.7 7.7 0 0 0-3.114-1.333 7.895 7.895 0 0 0-3.415.116A7.634 7.634 0 0 0 6.525 4.79a7.13 7.13 0 0 0-1.973 2.646 6.784 6.784 0 0 0 .49 6.294c.294.459.652.788 1.051 1.277l4.387 5.487c.126.158.29.285.476.373a1.418 1.418 0 0 0 1.203 0c.187-.088.35-.215.477-.373l4.281-5.377a16.94 16.94 0 0 0 1.052-1.367A6.827 6.827 0 0 0 19 10.128Zm-7.469 3.103a3.432 3.432 0 0 1-1.834-.528 3.175 3.175 0 0 1-1.217-1.406 2.983 2.983 0 0 1-.188-1.81 3.086 3.086 0 0 1 .904-1.604 3.362 3.362 0 0 1 1.691-.857 3.47 3.47 0 0 1 1.909.178c.603.237 1.119.639 1.482 1.154a3.02 3.02 0 0 1 .556 1.74c0 .831-.348 1.628-.967 2.215-.62.588-1.46.918-2.336.918Z" fill="#E0DA48" /></symbol>',t.insertBefore(o,t.firstChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}V1.render(a(U1.StrictMode,{children:s(Y1,{theme:F1,children:[a(W1,{styles:qe}),a(Ge,{})]})}),document.getElementById("root"));
