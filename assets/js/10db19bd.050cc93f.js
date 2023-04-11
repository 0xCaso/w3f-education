"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5691],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={id:"struct-methods",title:"Defining Methods for Structs",sidebar_label:"Defining Methods for Structs",description:"Learn how to define methods for structs in Rust."},l=void 0,p={unversionedId:"Rust/section5/struct-methods",id:"Rust/section5/struct-methods",isDocsHomePage:!1,title:"Defining Methods for Structs",description:"Learn how to define methods for structs in Rust.",source:"@site/docs/Rust/section5/struct-methods.md",sourceDirName:"Rust/section5",slug:"/Rust/section5/struct-methods",permalink:"/w3f-education/docs/Rust/section5/struct-methods",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section5/struct-methods.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1680371977,formattedLastUpdatedAt:"4/1/2023",frontMatter:{id:"struct-methods",title:"Defining Methods for Structs",sidebar_label:"Defining Methods for Structs",description:"Learn how to define methods for structs in Rust."},sidebar:"rust",previous:{title:"Data Structs",permalink:"/w3f-education/docs/Rust/section5/structs"},next:{title:"Vectors, Strings, and &str Slices",permalink:"/w3f-education/docs/Rust/section5/vectors-vs-strings"}},c=[{value:"Associated Functions",id:"associated-functions",children:[]},{value:"Try it yourself!",id:"try-it-yourself",children:[]},{value:"What&#39;s happening here?",id:"whats-happening-here",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Methods")," are very similar to ",(0,s.kt)("strong",{parentName:"p"},"functions")," - the difference here being that ",(0,s.kt)("strong",{parentName:"p"},"methods")," are applied to structs.  They breathe life into structs by providing associated logic that often utilizes its inner fields and represents an instance of that struct."),(0,s.kt)("p",null,"The syntax is nearly identical to a function, with the exception that its part of the ",(0,s.kt)("strong",{parentName:"p"},"implementation")," of the struct:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"struct Person {\n    age: i32,\n    name: String,\n}\n\n// This is an implementation of 'Person'\n// We can add methods on each instance of the struct\nimpl Person {\n    fn print_person(&self) {\n        println!(\"This person's name is {} and is {} years old.\", self.name, self.age);\n    }\n}\nlet a_person = Person {\n    age: 22,\n    name: String::from(\"Bader\"),\n};\n\na_person.print_person();\n// This person's name is Bader and is 22 years old\n")),(0,s.kt)("p",null,"In the above ",(0,s.kt)("strong",{parentName:"p"},"implementation"),", we defined a method, ",(0,s.kt)("inlineCode",{parentName:"p"},"print_person"),", which takes ",(0,s.kt)("inlineCode",{parentName:"p"},"&self")," as a parameter.  ",(0,s.kt)("inlineCode",{parentName:"p"},"&self")," is an immutable reference to that specific instance, in this case, ",(0,s.kt)("inlineCode",{parentName:"p"},"a_person"),".  To access these methods, we must first have an instance of the struct defined, then use the dot operator (",(0,s.kt)("inlineCode",{parentName:"p"},"."),") to access the method.  The ",(0,s.kt)("inlineCode",{parentName:"p"},"&self")," parameter is actually a shorthand way of saying:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"self: &Self -> person: &Person\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Self"),", with a capital ",(0,s.kt)("inlineCode",{parentName:"p"},"S"),", is an alias for the struct's type, whereas ",(0,s.kt)("inlineCode",{parentName:"p"},"self")," with a lowercase ",(0,s.kt)("inlineCode",{parentName:"p"},"s"),", refers to the actual instance with its initialized fields."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We borrowed ",(0,s.kt)("inlineCode",{parentName:"p"},"&self")," - can you think of why?"))),(0,s.kt)("p",null,"It's also possible to accept more parameters of the same type as part of the method, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'impl Person {\n    fn print_person(&self) {\n        println!("This person\'s name is {} and is {} years old.", self.name, self.age);\n    }\n\n    fn is_older(&self, other: &Person) -> bool {\n        // Return if the other person is older or not as an expression\n        other.age > self.age\n    }\n}\nlet a_person = Person {\n    age: 22,\n    name: String::from("Bader"),\n};\n\nlet another_person_who_is_older = Person {\n    age: 35,\n    name: String::from("Johnny"),\n};\n\na_person.is_older(&another_person_who_is_older); // false \n\n')),(0,s.kt)("h2",{id:"associated-functions"},"Associated Functions"),(0,s.kt)("p",null,"All functions under the ",(0,s.kt)("inlineCode",{parentName:"p"},"impl"),' (implementation) block are considered "associated" because they effectively become part of the type.  Until now, you\'ve seen all methods take ',(0,s.kt)("inlineCode",{parentName:"p"},"self")," as a parameter - but it is possible to have a function that doesn't require an existing instance of the struct.  They are often used as constructors to create new instances of that struct, as seen below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'impl Person {\n    // Notice the return type is `Self`:\n    fn new(age: i32, name: String) -> Self {\n       // Shorthand syntax for struct fields from the previous lesson!\n       Person {\n            age,\n            name\n        }\n    }\n}\n\n// use the :: keyword/operator to access this method\nlet person = Person::new(22, String::from("Bader"));\n')),(0,s.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,s.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=struct+Person+%7B%0A++++age%3A+i32%2C%0A++++name%3A+String%2C%0A%7D%0A%0Aimpl+Person+%7B%0A++++%2F%2F+Notice+the+return+type+is+%60Self%60%3A%0A++++fn+new%28age%3A+i32%2C+name%3A+String%29+-%3E+Self+%7B%0A++++++++%2F%2F+Shorthand+syntax+for+struct+fields+from+the+previous+lesson%21%0A++++++++Person+%7B+age%2C+name+%7D%0A++++%7D%0A%0A++++%2F%2F+Prints+a+person%0A++++fn+print_person%28%26self%29+%7B%0A++++++++println%21%28%22This+person%27s+name+is+%7B%7D+and+is+%7B%7D+years+old.%22%2C+self.name%2C+self.age%29%3B%0A++++%7D%0A%0A++++fn+is_older%28%26self%2C+other%3A+%26Person%29+-%3E+bool+%7B%0A++++++++%2F%2F+Return+if+the+other+person+is+older+or+not+as+an+expression%0A++++++++other.age+%3E+self.age%0A++++%7D%0A%7D%0A%0A%0Afn+main%28%29+%7B%0A++++let+a_person+%3D+Person+%7B%0A++++++++age%3A+22%2C%0A++++++++name%3A+String%3A%3Afrom%28%22Bader%22%29%2C%0A++++%7D%3B%0A%0A++++let+another_person_who_is_older+%3D+Person%3A%3Anew%2825%2C+%22Johnny%22.to_string%28%29%29%3B%0A%0A++++a_person.is_older%28%26another_person_who_is_older%29%3B+%2F%2F+false%0A++++%0A++++a_person.print_person%28%29%3B%0A++++another_person_who_is_older.print_person%28%29%3B%0A%7D%0A"}),(0,s.kt)("h2",{id:"whats-happening-here"},"What's happening here?"),(0,s.kt)("p",null,"This example showcases how a ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," can be printed, compared against other borrowed ",(0,s.kt)("inlineCode",{parentName:"p"},"Person"),"(s), and how an associated function can be used to create a new ",(0,s.kt)("inlineCode",{parentName:"p"},"Person"),"."))}u.isMDXComponent=!0}}]);