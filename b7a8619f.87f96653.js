(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return F})),a.d(t,"metadata",(function(){return I})),a.d(t,"rightToc",(function(){return $})),a.d(t,"default",(function(){return S}));var o=a(1),n=a(6),i=a(0),r=a.n(i),l=a(145),c=(a(12),a(150));const s=c.a.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  & + label::before {
    border-radius: 1em;
  }
  &:checked + label {
    padding-left: 1em;
    color: #fff;
  }
  &:checked + label:before {
    top: 0;
    width: 100%;
    height: 2em;
    background: ${e=>e.color};
  }
`,b=c.a.label`
  font-weight: 300;
  .group {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }

  position: relative;
  margin-right: 1em;
  padding-left: 2em;
  padding-right: 1em;
  line-height: 2;
  cursor: pointer;
  &:before {
    box-sizing: border-box;
    content: ' ';
    position: absolute;
    top: 0.3em;
    left: 0;
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 2px solid ${e=>e.color};
    border-radius: 0.25em;
    z-index: -1;
  }

  &,
  &::before {
    transition: 0.25s all ease;
  }
`,m=c.a.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,p=e=>{const t=e.color||"#e91e63";return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,Object(o.a)({type:"radio"},e,{color:t})),r.a.createElement(b,{htmlFor:e.id,color:t},e.label||e.value))},d=({options:e,name:t,onChange:a,checked:o=!1})=>r.a.createElement(m,null,Object.keys(e).map(n=>{const i=e[n];return r.a.createElement(p,{id:i,name:t,onChange:a,checked:i===o,label:i,value:i})})),u=c.a.div`
  font-family: "Source Code Pro", Menlo, Monaco, Courier, monospace;
  font-size: 12px;
  line-height: 1.4;
  font-style: normal;
  border-left: 3px solid #a9547e;
  padding-left: 20px;
  background: #222;
  color: #fff;
  min-height: 270px;
  min-width: 270px;
  padding: 25px;

  & div {
    margin-left: 20px;
  }
  & div:first-child,
  & div:last-child {
    margin: 0;
  }
`,h=c.a.span`
  color: ${e=>0===e.kind?"#66d9ef":"#a6e22e"};
`;function f(e,t){return t?r.a.createElement("div",null,r.a.createElement(h,{kind:1},e)):r.a.createElement("div",null,r.a.createElement(h,{kind:1},e),"={false}")}const g=({position:e,disableAutoClose:t,autoClose:a,hideProgressBar:o,newestOnTop:n,closeOnClick:i,pauseOnHover:l,rtl:c,pauseOnFocusLoss:s,isDefaultProps:b,draggable:m})=>r.a.createElement("div",null,r.a.createElement("h3",null,"Toast Container"),r.a.createElement(u,null,r.a.createElement("div",null,r.a.createElement("span",null,"<"),r.a.createElement(h,{kind:0},"ToastContainer")),r.a.createElement("div",null,r.a.createElement(h,{kind:1},"position"),`="${e}"`),r.a.createElement("div",null,r.a.createElement(h,{kind:1},"autoClose"),`={${!t&&a}}`),t?"":f("hideProgressBar",o),f("newestOnTop",n),f("closeOnClick",i),f("rtl",c),f("pauseOnFocusLoss",s),f("draggable",m),t?"":f("pauseOnHover",l),r.a.createElement("div",null,r.a.createElement("span",null,"/>")),b&&r.a.createElement("div",null,r.a.createElement("div",null,"{/* Same as */}"),r.a.createElement("span",null,"<"),r.a.createElement(h,{kind:0},"ToastContainer"),r.a.createElement("span",null," />"))));const v=({position:e,disableAutoClose:t,autoClose:a,hideProgressBar:o,closeOnClick:n,pauseOnHover:i,type:l,draggable:c,progress:s})=>r.a.createElement("div",null,r.a.createElement("h3",null,"Toast Emitter"),r.a.createElement(u,null,r.a.createElement("div",null,r.a.createElement(h,{kind:0},function(e){switch(e){case"default":default:return"toast";case"success":return"toast.success";case"error":return"toast.error";case"info":return"toast.info";case"warning":return"toast.warn";case"dark":return"toast.dark"}}(l)),"('\ud83e\udd84 Wow so easy!', { "),r.a.createElement("div",null,r.a.createElement(h,{kind:1},"position"),`: "${e}"`,","),r.a.createElement("div",null,r.a.createElement(h,{kind:1},"autoClose"),`: ${!t&&a}`,","),r.a.createElement("div",null,r.a.createElement(h,{kind:1},"hideProgressBar"),`: ${o?"true":"false"}`,","),r.a.createElement("div",null,r.a.createElement(h,{kind:1},"closeOnClick"),`: ${n?"true":"false"}`,","),r.a.createElement("div",null,r.a.createElement(h,{kind:1},"pauseOnHover"),`: ${i?"true":"false"}`,","),r.a.createElement("div",null,r.a.createElement(h,{kind:1},"draggable"),`: ${c?"true":"false"}`,","),!Number.isNaN(s)&&r.a.createElement("div",null,r.a.createElement(h,{kind:1},"progress"),`: ${s}`,","),r.a.createElement("div",null,"});")));var O=a(163);a(132);const y=[{id:"disableAutoClose",label:"Disable auto-close"},{id:"hideProgressBar",label:"Hide progress bar(less fanciness!)"},{id:"newestOnTop",label:"Newest on top* (play nice with bottom toast)"},{id:"closeOnClick",label:"Close on click"},{id:"pauseOnHover",label:"Pause delay on hover"},{id:"pauseOnFocusLoss",label:"Pause toast when the window loses focus"},{id:"rtl",label:"Right to left layout*"},{id:"draggable",label:"Allow to drag and close the toast"}],j={bounce:O.Bounce,slide:O.Slide,zoom:O.Zoom,flip:O.Flip},E=c.a.label`
  cursor: pointer;
`,w=({label:e,onChange:t,id:a,checked:o})=>r.a.createElement(E,{htmlFor:a},r.a.createElement("input",{id:a,type:"checkbox",name:a,checked:o,onChange:t}),e),C=c.a.div`
  width: 100%;
  margin-bottom: 1rem;
`,k=c.a.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  & ul {
    list-style: none;
    padding: 0;
  }
`,x=({autoClose:e,disableAutoClose:t,handleAutoCloseDelay:a,handleInput:o,transition:n,limit:i,progress:l,handleCheckbox:c,...s})=>{const b={left:[],right:[]};return y.forEach(({id:e,label:t},a)=>{a%2==1?b.left.push(r.a.createElement("li",{key:e},r.a.createElement(w,{id:e,label:t,onChange:c,checked:s[e]}))):b.right.push(r.a.createElement("li",{key:e},r.a.createElement(w,{id:e,label:t,onChange:c,checked:s[e]})))}),r.a.createElement(C,null,r.a.createElement("h3",null,"Options"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"autoClose"},"Delay",r.a.createElement("input",{type:"number",name:"autoClose",id:"autoClose",value:e,onChange:a,disabled:t}),"ms"),r.a.createElement("label",{htmlFor:"transition"},"Transition",r.a.createElement("select",{name:"transition",id:"transition",onChange:o,value:n},Object.keys(j).map(e=>r.a.createElement("option",{key:e,value:e},e)))),r.a.createElement("label",{htmlFor:"progress"},"Progress",r.a.createElement("input",{type:"number",name:"progress",id:"progress",value:l,onChange:o,placeholder:"0..1",min:"0",max:"1"})),r.a.createElement("label",{htmlFor:"limit"},"Limit",r.a.createElement("input",{type:"number",name:"limit",id:"limit",value:i,onChange:o}))),r.a.createElement(k,null,r.a.createElement("ul",null,b.left),r.a.createElement("ul",null,b.right)))};var N=a(164);const T=e=>{let{clearAll:t,handleReset:a,showToast:o,updateToast:n}=e;return r.a.createElement(N.b,null,r.a.createElement(N.a,{lookAtMe:!0,onClick:o},r.a.createElement("span",{role:"img","aria-label":"show alert"},"\ud83d\ude80")," ","Show Toast"),r.a.createElement(N.a,{onClick:n},r.a.createElement("span",{role:"img","aria-label":"update"})," Update"),r.a.createElement(N.a,{onClick:t},r.a.createElement("span",{role:"img","aria-label":"clear all"},"\ud83d\udca9")," ","Clear All"),r.a.createElement(N.a,{onClick:a},r.a.createElement("span",{role:"img","aria-label":"reset options"},"\ud83d\udd04")," ","Reset"))};function z(){return{...O.ToastContainer.defaultProps,transition:"slide",type:"dark",progress:void 0,disableAutoClose:!1,limit:0}}const P=c.a.section`
  display: flex;
  justify-content: space-between;
  flex-direction: "row";
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,A=c.a.main`
  margin-top: 1rem;
`;function B(){const[e,t]=Object(i.useState)(()=>z()),a=Object(i.useRef)(),n=a=>t({...e,[a.target.name]:"limit"===a.target.name?parseInt(a.target.value,10):a.target.value});return r.a.createElement(A,null,r.a.createElement(P,null,r.a.createElement(g,Object(o.a)({},e,{isDefaultProps:"bottom-left"===e.position&&3e3===e.autoClose&&!e.disableAutoClose&&!e.hideProgressBar&&!e.newestOnTop&&!e.rtl&&e.pauseOnFocusLoss&&e.pauseOnHover&&e.closeOnClick&&e.draggable})),r.a.createElement(v,e)),r.a.createElement("div",null,r.a.createElement("h3",null,"Position"),r.a.createElement(d,{options:O.toast.POSITION,name:"position",checked:e.position,onChange:n})),r.a.createElement("div",null,r.a.createElement("h3",null,"Type"),r.a.createElement(d,{options:O.toast.TYPE,name:"type",checked:e.type,onChange:n})),r.a.createElement(x,Object(o.a)({},e,{handleAutoCloseDelay:a=>{t({...e,autoClose:a.target.value>0?parseInt(a.target.value,10):1})},handleInput:n,handleCheckbox:a=>t({...e,[a.target.name]:!e[a.target.name]})})),r.a.createElement(T,{clearAll:()=>O.toast.dismiss(),handleReset:()=>{t(z())},showToast:()=>{a.current="default"===e.type?Object(O.toast)("\ud83e\udd84 Wow so easy !",{progress:e.progress}):O.toast[e.type]("\ud83d\ude80 Wow so easy !",{progress:e.progress})},updateToast:()=>O.toast.update(a.current,{progress:e.progress})}),r.a.createElement(O.ToastContainer,Object(o.a)({},e,{transition:j[e.transition],autoClose:!e.disableAutoClose&&e.autoClose})))}var F={id:"introduction",title:"material-react-toastify",sidebar_label:"Introduction"},I={id:"introduction",title:"material-react-toastify",description:"These docs are exactly same as of the original react-toastify docs but modifying them for material-react-toastify.\r",source:"@site/docs\\index.md",permalink:"/react-toastify/introduction",editUrl:"https://github.com/shivanshBTW/material-react-toastify-doc/edit/master/docs/index.md",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Installation",permalink:"/react-toastify/installation"}},$=[{value:"The playground",id:"the-playground",children:[]},{value:"Features",id:"features",children:[]},{value:"Contribute",id:"contribute",children:[]},{value:"Contributors",id:"contributors",children:[{value:"Code Contributors",id:"code-contributors",children:[]},{value:"Financial Contributors",id:"financial-contributors",children:[]}]},{value:"Release Notes",id:"release-notes",children:[]},{value:"License",id:"license",children:[]}],M={rightToc:$};function S(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},M,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"These docs are exactly same as of the original react-toastify docs but modifying them for material-react-toastify."),Object(l.b)("h2",{id:"the-playground"},"The playground"),Object(l.b)(B,{mdxType:"App"}),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Important")),Object(l.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"By default, all toasts will inherit ToastContainer's props. Props defined on toast supersede ToastContainer's props. Props marked with * can only be set on the ToastContainer. The demo is not exhaustive, check the doc for more!"))),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Easy to set up for real, you can make it work in less than 10sec!"),Object(l.b)("li",{parentName:"ul"},"Super easy to customize"),Object(l.b)("li",{parentName:"ul"},"RTL support"),Object(l.b)("li",{parentName:"ul"},"Swipe to close \ud83d\udc4c"),Object(l.b)("li",{parentName:"ul"},"Can display a react component inside the toast!"),Object(l.b)("li",{parentName:"ul"},"Has ",Object(l.b)("inlineCode",{parentName:"li"},"onOpen")," and ",Object(l.b)("inlineCode",{parentName:"li"},"onClose")," hooks. Both can access the props passed to the react component rendered inside the toast"),Object(l.b)("li",{parentName:"ul"},"Can remove a toast programmatically"),Object(l.b)("li",{parentName:"ul"},"Define behavior per toast"),Object(l.b)("li",{parentName:"ul"},"Pause toast when the window loses focus \ud83d\udc41"),Object(l.b)("li",{parentName:"ul"},"Fancy progress bar to display the remaining time"),Object(l.b)("li",{parentName:"ul"},"Possibility to update a toast"),Object(l.b)("li",{parentName:"ul"},"You can control the progress bar a la ",Object(l.b)("inlineCode",{parentName:"li"},"nprogress")," \ud83d\ude32"),Object(l.b)("li",{parentName:"ul"},"You can limit the number of toast displayed at the same time"),Object(l.b)("li",{parentName:"ul"},"Dark mode \ud83c\udf12"),Object(l.b)("li",{parentName:"ul"},"And much more !")),Object(l.b)("h2",{id:"contribute"},"Contribute"),Object(l.b)("p",null,"Show your \u2764\ufe0f and support by giving a \u2b50. Any suggestions are welcome! Take a look at the contributing guide."),Object(l.b)("p",null,"You can also find me on ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.reactiflux.com/"}),"reactiflux"),". My pseudo is shivanshBTW."),Object(l.b)("h2",{id:"contributors"},"Contributors"),Object(l.b)("h3",{id:"code-contributors"},"Code Contributors"),Object(l.b)("p",null,"This project exists thanks to all the people who contributed to the react-toastify project. [",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"CONTRIBUTING.md"}),"Contribute"),"]."),Object(l.b)("a",{href:"https://github.com/shivanshBTW/material-react-toastify/graphs/contributors"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/contributors.svg?width=890&button=false"})),Object(l.b)("h3",{id:"financial-contributors"},"Financial Contributors"),Object(l.b)("p",null,"If you want to contribute to the development of the project, you can contribute the original react-toastify project:"),Object(l.b)("p",null,'"Become a financial contributor and help us sustain our community." [',Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://opencollective.com/react-toastify/contribute"}),"Contribute"),"]"),Object(l.b)("h4",{id:"individuals"},"Individuals"),Object(l.b)("a",{href:"https://opencollective.com/react-toastify"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/individuals.svg?width=890"})),Object(l.b)("h4",{id:"organizations"},"Organizations"),Object(l.b)("p",null,"Support this project with your organization. Your logo will show up here with a link to your website. [",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://opencollective.com/react-toastify/contribute"}),"Contribute"),"]"),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/0/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/0/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/1/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/1/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/2/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/2/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/3/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/3/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/4/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/4/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/5/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/5/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/6/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/6/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/7/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/7/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/8/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/8/avatar.svg"})),Object(l.b)("a",{href:"https://opencollective.com/react-toastify/organization/9/website"},Object(l.b)("img",{src:"https://opencollective.com/react-toastify/organization/9/avatar.svg"})),Object(l.b)("h2",{id:"release-notes"},"Release Notes"),Object(l.b)("p",null,"You can find the release note for the latest release ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/shivanshBTW/material-react-toastify/releases/latest"}),"here")),Object(l.b)("p",null,"You can browse them all ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/shivanshBTW/material-react-toastify/releases"}),"here")),Object(l.b)("h2",{id:"license"},"License"),Object(l.b)("p",null,"Licensed under MIT"))}S.isMDXComponent=!0},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var o=a(150);const n=o.b`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`,i=o.a.button`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  height: 2.8rem;
  letter-spacing: 0.1rem;
  line-height: 2.8rem;
  padding: 0 1.8rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  z-index: 0;
  color: #fff;
  border-color: transparent;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${n} 20s linear infinite;
    opacity: ${e=>e.lookAtMe?1:0};
    transition: opacity 0.3s ease-in-out;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
  }
`,r=o.a.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem auto;
`}}]);