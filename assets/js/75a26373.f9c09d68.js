"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5193],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,h=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9570:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"introrust",sidebar_position:1},u="Rust for Blockchain Development",l={unversionedId:"introrust",id:"introrust",isDocsHomePage:!1,title:"Rust for Blockchain Development",description:"Developed by the Technical Education team at the Web3 Foundation, this course introduces programming in Rust for Blockchain applications.",source:"@site/docs/introrust.md",sourceDirName:".",slug:"/introrust",permalink:"/w3f-education/docs/introrust",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/introrust.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1678293818,formattedLastUpdatedAt:"3/8/2023",sidebarPosition:1,frontMatter:{id:"introrust",sidebar_position:1},sidebar:"rust",next:{title:"Module 1 Intro",permalink:"/w3f-education/docs/Rust/section1/section-intro"}},c=[{value:"Module 1 - Why Learn Rust?",id:"module-1---why-learn-rust",children:[]},{value:"Module 2 - Rust 101 - The Basics",id:"module-2---rust-101---the-basics",children:[]},{value:"Module 3 - Intro to Intermediate Rust: Ownership, Borrowing, &amp; Slices",id:"module-3---intro-to-intermediate-rust-ownership-borrowing--slices",children:[]},{value:"Module 4 - Intro to Intermediate Rust: Enums &amp; Matching Patterns",id:"module-4---intro-to-intermediate-rust-enums--matching-patterns",children:[]},{value:"Module 5 - Intro to Intermediate Rust: Data Structs &amp; Collections",id:"module-5---intro-to-intermediate-rust-data-structs--collections",children:[]},{value:"Module 6 - Iterators, Closures, and Smart Pointers",id:"module-6---iterators-closures-and-smart-pointers",children:[]},{value:"Module 7 - Advanced Features",id:"module-7---advanced-features",children:[]},{value:"Module 8 - Web Assembly",id:"module-8---web-assembly",children:[]}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rust-for-blockchain-development"},"Rust for Blockchain Development"),(0,a.kt)("p",null,"Developed by the Technical Education team at the Web3 Foundation, this course introduces programming in Rust for Blockchain applications."),(0,a.kt)("p",null,"This course follows the free textbook, ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/book/"},"The Rust Programming Language")," by Steve Klabnik and Carol Nichols."),(0,a.kt)("p",null,"This course is designed to teach the fundamentals of Rust to a student who is already fluent in at least one other programming language. This course provides a strong foundation in general purpose Rust, and also emphasizes some aspects of Rust (such as ","[no_std]",", anvanced Generics, and the RustWasm toolchain) that are particularly useful when developing with the Substrate blockchain framework."),(0,a.kt)("h2",{id:"module-1---why-learn-rust"},"Module 1 - Why Learn Rust?"),(0,a.kt)("p",null,"Getting Started. Installation. A hello-world program in Rust. Cargo. A few simple Rust Programs. Variables. Data Types. Functions. Comments. Control Flow."),(0,a.kt)("h2",{id:"module-2---rust-101---the-basics"},"Module 2 - Rust 101 - The Basics"),(0,a.kt)("p",null,"Variable Scope. Memory management. How variables interact. References. Background on Programming Safety and why it is critical for Blockchain development. Substrate introduction."),(0,a.kt)("h2",{id:"module-3---intro-to-intermediate-rust-ownership-borrowing--slices"},"Module 3 - Intro to Intermediate Rust: Ownership, Borrowing, & Slices"),(0,a.kt)("p",null,"Structs. Enums. Methods. Packages and Crates.\nCargo feature - this will be important for the \u201cstd\u201d features all over Substrate. \u201cruntime-benchmarks\u201d and \u201ctry-runtime\u201d."),(0,a.kt)("h2",{id:"module-4---intro-to-intermediate-rust-enums--matching-patterns"},"Module 4 - Intro to Intermediate Rust: Enums & Matching Patterns"),(0,a.kt)("p",null,"Vectors. Hashmaps. More on Strings. Generic types. Traits and shared behaviour."),(0,a.kt)("h2",{id:"module-5---intro-to-intermediate-rust-data-structs--collections"},"Module 5 - Intro to Intermediate Rust: Data Structs & Collections"),(0,a.kt)("p",null,"To Panic or not to Panic. Writing automated tests. Substrate's own OOM and panic implementations. And recreate the infamous \u201cduplicate lang item\u201d error."),(0,a.kt)("h2",{id:"module-6---iterators-closures-and-smart-pointers"},"Module 6 - Iterators, Closures, and Smart Pointers"),(0,a.kt)("p",null,"Iterators vs Loops. Closures. Smart Pointers. "),(0,a.kt)("h2",{id:"module-7---advanced-features"},"Module 7 - Advanced Features"),(0,a.kt)("p",null,"Generics vs dynamic dispatch. Conflicting type names. Associated types."),(0,a.kt)("h2",{id:"module-8---web-assembly"},"Module 8 - Web Assembly"),(0,a.kt)("p",null,"A little core info about what wasm is and why it is valuable. The rust-wasm toolchain. How to add a target with rustup. How to cross compile to the new target. How to execute a wasm binary from within Rust (this is How the runtime is executed). How to package for the browser - Not directly Substrate related, but very cool, and very useful."))}m.isMDXComponent=!0}}]);