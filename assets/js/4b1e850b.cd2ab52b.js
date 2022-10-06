"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[8341],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return y}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),y=o,f=p["".concat(l,".").concat(y)]||p[y]||c[y]||n;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5920:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),i=["components"],s={id:"treasury"},l="Treasury",u={unversionedId:"Polkadot/Module2/treasury",id:"Polkadot/Module2/treasury",isDocsHomePage:!1,title:"Treasury",description:"The Treasury raises funds continually. These funds are used to pay for developers that provide",source:"@site/docs/Polkadot/Module2/treasury.md",sourceDirName:"Polkadot/Module2",slug:"/Polkadot/Module2/treasury",permalink:"/w3f-education/docs/Polkadot/Module2/treasury",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module2/treasury.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1654881714,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"treasury"},sidebar:"polkadot",previous:{title:"On-Chain Governance",permalink:"/w3f-education/docs/Polkadot/Module2/governance"},next:{title:"Polkadot Network Consensus",permalink:"/w3f-education/docs/Polkadot/Module3/consensus"}},d=[{value:"Polkadot Treasury Overview",id:"polkadot-treasury-overview",children:[]},{value:"Treasury Proposals and Bounties",id:"treasury-proposals-and-bounties",children:[]},{value:"Polkadot Treasury Payouts",id:"polkadot-treasury-payouts",children:[]},{value:"Kusama Treasury",id:"kusama-treasury",children:[]}],c={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"treasury"},"Treasury"),(0,n.kt)("p",null,"The Treasury raises funds continually. These funds are used to pay for developers that provide\nsoftware updates, apply any changes decided by referenda, adjust parameters, and generally keep\nthe system running smoothly. Funds may also be used for further goals such as marketing activities,\ncommunity events and outreach. This is ultimately controlled by all DOT holders via Governance\nand it will be the community and their collective imagination and judgment which really determines\nthe course of the Treasury.\nFunds for Treasury are raised in two ways:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"by channeling some of the validator rewards that come from minting of new tokens, and"),(0,n.kt)("li",{parentName:"ol"},"by channeling a fraction of transaction fees and of slashings.\nThe \u2000rst method allows us to maintain a \u2000xed in\nation rate while simultaneously having the\nvalidator rewards be dependent of the staking level: the difference between the\nscheduled minted tokens and the validator rewards is assigned to Treasury in each era. We also\nargue that it is convenient to have a fraction of all slashings be redirected to Treasury: following an\nevent that produced heavy stake slashing, the system is likely to need additional funds to develop\nsoftware updates or new infrastructure that deal with an existing issue, or it might be decided by\nGovernance to reimburse some of the slashed stake. Thus, it makes sense to have the slashed DOTs\navailable in Treasury, instead of burning them and having to mint more DOTs soon thereafter.")),(0,n.kt)("h2",{id:"polkadot-treasury-overview"},"Polkadot Treasury Overview"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/YEKJocpHsEE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"treasury-proposals-and-bounties"},"Treasury Proposals and Bounties"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/H7S4hWLan58",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"polkadot-treasury-payouts"},"Polkadot Treasury Payouts"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zwiqnXbloCA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"kusama-treasury"},"Kusama Treasury"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OjMkv3OasUU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);