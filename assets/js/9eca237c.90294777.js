"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[3393],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7212:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"decentralization"},c="Decentralization of Network",d={unversionedId:"Polkadot/Module4/decentralization",id:"Polkadot/Module4/decentralization",isDocsHomePage:!1,title:"Decentralization of Network",description:"Of course, in a real-world decentralised system the networking part also must be decentralised -",source:"@site/docs/Polkadot/Module4/decentralization.md",sourceDirName:"Polkadot/Module4",slug:"/Polkadot/Module4/decentralization",permalink:"/w3f-education/docs/Polkadot/Module4/decentralization",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module4/decentralization.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1656502743,formattedLastUpdatedAt:"6/29/2022",frontMatter:{id:"decentralization"},sidebar:"polkadot",previous:{title:"Path of a Parachain Block",permalink:"/w3f-education/docs/Polkadot/Module4/parachainblock"},next:{title:"Interoperability",permalink:"/w3f-education/docs/Polkadot/Module5/interoperability"}},s=[{value:"Why Decentralize?",id:"why-decentralize",children:[]},{value:"Polkadot Decentralization Efforts",id:"polkadot-decentralization-efforts",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decentralization-of-network"},"Decentralization of Network"),(0,i.kt)("p",null,"Of course, in a real-world decentralised system the networking part also must be decentralised -\nit's no good if all communication passes through a few central servers, even if the high-level protocol\nrunning on top of it is decentralised with respect to its entities. As a concrete example: in certain\nsecurity models, including the traditional Byzantine fault-tolerant setting, nodes are modelled as\npossibly malicious but no consideration is given to malicious edges. A security requirement like"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"1=3 of nodes are honest in the model, in fact translates to > 1=3 of nodes are honest and can\nall communicate perfectly reliably with each other all the time in reality. Conversely, if an edge\nis controlled by a malicious ISP in reality, it is the corresponding node(s) that must be treated as\nmalicious in any analysis under the model. More signi\u2000cantly, if the underlying communications\nnetwork is centralised, this can give the central parties the ability to corrupt > 1=3 of nodes within\nthe model thereby breaking its security assumptions, even if they don't actually have arbitrary\nexecution rights on that many nodes.\nIn this section we outline and enumerate the communication primitives that we require in\nPolkadot, and sketch a high-level design on how we achieve these in a decentralised way, with the\nspecifics to be re\u2000ned as we move forward with a production system.")),(0,i.kt)("h2",{id:"why-decentralize"},"Why Decentralize?"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-xOK970mS14",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"polkadot-decentralization-efforts"},"Polkadot Decentralization Efforts"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Zub9TCWQbf8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);