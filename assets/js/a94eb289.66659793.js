"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[4072],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(t),d=i,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var m=2;m<r;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3804:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),s=["components"],o={id:"enums",title:"Enums in Rust",sidebar_label:"Enums",description:"Learn what enums are and how to use them in Rust."},l=void 0,m={unversionedId:"Rust/section4/enums",id:"Rust/section4/enums",isDocsHomePage:!1,title:"Enums in Rust",description:"Learn what enums are and how to use them in Rust.",source:"@site/docs/Rust/section4/enums.md",sourceDirName:"Rust/section4",slug:"/Rust/section4/enums",permalink:"/w3f-education/docs/Rust/section4/enums",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section4/enums.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1679685336,formattedLastUpdatedAt:"3/24/2023",frontMatter:{id:"enums",title:"Enums in Rust",sidebar_label:"Enums",description:"Learn what enums are and how to use them in Rust."},sidebar:"rust",previous:{title:"Intro to Intermediate Rust - Enums & Matching Patterns",permalink:"/w3f-education/docs/Rust/section4/section-4-intro"},next:{title:"Panic! in Rust",permalink:"/w3f-education/docs/Rust/section4/panic"}},p=[{value:"Basic Pattern Matching with Enums",id:"basic-pattern-matching-with-enums",children:[]},{value:"Try it yourself!",id:"try-it-yourself",children:[]},{value:"What&#39;s happening here?",id:"whats-happening-here",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Enumerations, or ",(0,r.kt)("strong",{parentName:"p"},"enums")," are data structures that allow for a list of pre-defined options in Rust.  They are useful for pattern matching, defining expected conditions, errors, and more.  "),(0,r.kt)("p",null,"An example of enums in use would be defining different types of animal classes.  An enum's values are called ",(0,r.kt)("em",{parentName:"p"},"variants"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Use the `enum` keyword to define an enum\n// This derive statement is a macro that ensures we can use the `==` to compare enum values\n// Here, we can see there are four variants that belong inside of the `AnimalType` enum.\n#[derive(PartialEq)]\nenum AnimalType {\n    Mammal,\n    Reptile,\n    Birds,\n    Fish\n}\n\n")),(0,r.kt)("p",null,"In a function, we can, for example, take any type that is ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimalType"),", which in turn means there are four possible values as to what it can be.  The program can choose to implement different behavior based on the value of the enum:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is where a match statement from the previous module would be ideal to use, as it will allow us to specify a case for each possible value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimalType")," enum."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'\nfn take_animal(name: &str, animal_type: AnimalType) {\n    if animal_type == AnimalType::Mammal {\n        println!("{name} is a mammal!");\n    }\n}\n\n')),(0,r.kt)("p",null,"This function takes a string literal as a name, ",(0,r.kt)("inlineCode",{parentName:"p"},"&str"),", and specifically looks for whether the passed in ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimalType")," is a mammal or not.  Enum values are accessed using a double colon, ",(0,r.kt)("inlineCode",{parentName:"p"},"::"),", and can be checked as a conditional statement if needed."),(0,r.kt)("p",null," However, this function is rather bland and doesn't account for the other possibilities of ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimalType"),"."),(0,r.kt)("h2",{id:"basic-pattern-matching-with-enums"},"Basic Pattern Matching with Enums"),(0,r.kt)("p",null,"If you recall, we used a ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," statement in the last module to cover a case where a variable could either be ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".  Applying this same concept with enums, we can ensure that all possible cases are covered."),(0,r.kt)("p",null,"This concept of matching a case to an outcome is called ",(0,r.kt)("strong",{parentName:"p"},"pattern matching"),", and is a very common design pattern in Rust."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Same function, but expanded to cover all cases with `match`\nfn take_animal(name: &str, animal_type: AnimalType) {\n    // The match state\n    match animal_type {\n        // The animal is a mammal!\n        AnimalType::Mammal => println!("{name} is a mammal!"),\n        // The animal is a reptile!\n        AnimalType::Reptile => println!("{name} is a reptile!"),\n        // The animal is a bird!\n        AnimalType::Birds => println!("{name} is a bird!"),\n        // The animal is a fish!\n        AnimalType::Fish => println!("{name} is a fish!"),\n    };\n}\n\n')),(0,r.kt)("p",null,"While this is entirely possible with a series of ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"else if")," statements, using ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," is a more concise and powerful way to pair a specific input to a particular output.  The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"animal_type"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," statement will print a line appropriate to that specific input."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Anything that is 'conditional', i.e., true or false, can be pattern matched.  In future modules, you will see more examples of advanced pattern matching that take advantage of this powerful feature."))),(0,r.kt)("p",null,"The syntax for specifying a ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," pattern starts with the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),", followed by the name of the value you wish to pattern match.  Each possibility is then paired with a specific output using an arrow (",(0,r.kt)("inlineCode",{parentName:"p"},"=>"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// The possibility => output\n AnimalType::Mammal => println!("{name} is a mammal!"),\n')),(0,r.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,r.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+Use+the+%60enum%60+keyword+to+define+an+enum%0A%2F%2F+This+derive+statement+is+a+macro+that+ensures+we+can+use+the+%60%3D%3D%60+to+compare+enum+values%0A%2F%2F+Here%2C+we+can+see+there+are+four+variants+that+belong+inside+of+the+%60AnimalType%60+enum.%0A%23%5Bderive%28PartialEq%29%5D%0Aenum+AnimalType+%7B%0A++++Mammal%2C%0A++++Reptile%2C%0A++++Birds%2C%0A++++Fish%0A%7D%0A%0Afn+main%28%29+%7B%0A++++%2F%2F+Each+variant+of+%60AnimalType%60+can+now+be+properly%0A++++%2F%2F+matched+and+handled.%0A++++take_animal%28%22Cat%22%2C+AnimalType%3A%3AMammal%29%3B%0A++++take_animal%28%22Komodo+Dragon%22%2C+AnimalType%3A%3AReptile%29%3B%0A++++take_animal%28%22Chicken%22%2C+AnimalType%3A%3ABirds%29%3B%0A++++take_animal%28%22Swordfish%22%2C+AnimalType%3A%3AFish%29%3B%0A%0A%7D%0A%0A%2F%2F+Same+function%2C+but+expanded+to+cover+all+cases+with+%60match%60%0Afn+take_animal%28name%3A+%26str%2C+animal_type%3A+AnimalType%29+%7B%0A++++%2F%2F+The+match+state%0A++++match+animal_type+%7B%0A++++++++%2F%2F+The+animal+is+a+mammal%21%0A++++++++AnimalType%3A%3AMammal+%3D%3E+println%21%28%22%7Bname%7D+is+a+mammal%21%22%29%2C%0A++++++++%2F%2F+The+animal+is+a+reptile%21%0A++++++++AnimalType%3A%3AReptile+%3D%3E+println%21%28%22%7Bname%7D+is+a+reptile%21%22%29%2C%0A++++++++%2F%2F+The+animal+is+a+bird%21%0A++++++++AnimalType%3A%3ABirds+%3D%3E+println%21%28%22%7Bname%7D+is+a+bird%21%22%29%2C%0A++++++++%2F%2F+The+animal+is+a+fish%21%0A++++++++AnimalType%3A%3AFish+%3D%3E+println%21%28%22%7Bname%7D+is+a+fish%21%22%29%2C%0A++++%7D%3B%0A%7D"}),(0,r.kt)("h2",{id:"whats-happening-here"},"What's happening here?"),(0,r.kt)("p",null,"This code defines an enum, ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimalType"),", with ",(0,r.kt)("strong",{parentName:"p"},"four")," variants.  A function is defined, ",(0,r.kt)("inlineCode",{parentName:"p"},"take_animal"),", that calls for a string literal and ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimalType")," as parameters.  A ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," statement then matches the input of ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimalType")," to the desired outcome."))}u.isMDXComponent=!0}}]);