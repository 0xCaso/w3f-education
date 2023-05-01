"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[1811],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return t?o.createElement(m,l(l({ref:n},c),{},{components:t})):o.createElement(m,l({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6394:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),l=["components"],r={id:"loops",title:"Loops & Basic Logic Flows",sidebar_label:"Loops & Basic Logic Flows",description:"Learn how to construct loops, if statements, and when to use the two."},s=void 0,p={unversionedId:"Rust/section2/loops",id:"Rust/section2/loops",isDocsHomePage:!1,title:"Loops & Basic Logic Flows",description:"Learn how to construct loops, if statements, and when to use the two.",source:"@site/docs/Rust/section2/loops.md",sourceDirName:"Rust/section2",slug:"/Rust/section2/loops",permalink:"/w3f-education/docs/Rust/section2/loops",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section2/loops.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1682935049,formattedLastUpdatedAt:"5/1/2023",frontMatter:{id:"loops",title:"Loops & Basic Logic Flows",sidebar_label:"Loops & Basic Logic Flows",description:"Learn how to construct loops, if statements, and when to use the two."},sidebar:"rust",previous:{title:"Functions & Comments",permalink:"/w3f-education/docs/Rust/section2/functions-comments"},next:{title:"Intro to Intermediate Rust - Ownership, Borrowing, & Slices",permalink:"/w3f-education/docs/Rust/section3/section-3-intro"}},c=[{value:"Using <code>if</code>",id:"using-if",children:[]},{value:"Using <code>else if</code> and <code>else</code>",id:"using-else-if-and-else",children:[]},{value:"Using <code>match</code>",id:"using-match",children:[]},{value:"Infinite loops: <code>loop</code>",id:"infinite-loops-loop",children:[]},{value:"Conditional loops: <code>while</code>",id:"conditional-loops-while",children:[]},{value:"Looping over collections: <code>for</code>",id:"looping-over-collections-for",children:[]},{value:"Try it out!",id:"try-it-out",children:[]},{value:"What is happening here?",id:"what-is-happening-here",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section will cover two foundational parts of Rust and programming in general: loops and logic flow."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0kaZ4Wd9XaQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h1",{id:"basic-logic-flows"},"Basic Logic Flows"),(0,a.kt)("p",null,"Logic flows, sometimes called control flows, allow for conditional statements, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"if"),", to be possible.  It allows for branching logic to be implemented for a program based on ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," values."),(0,a.kt)("h2",{id:"using-if"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"if")),(0,a.kt)("p",null,"As said before, implementing logic based on whether something is true or not would be very useful ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statements are the cornerstone of conditional logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let this_is_true: bool = true;\n\nif this_is_true {\n    println!("Less trust, more truth!");\n}\n')),(0,a.kt)("p",null,"The above code showcases a very simple example.  The statement ",(0,a.kt)("inlineCode",{parentName:"p"},"this_is_true")," is set to a boolean value, ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", which will execute the code within the brackets when evaluated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statement."),(0,a.kt)("p",null,"It's also possible to use an exclamation mark (",(0,a.kt)("inlineCode",{parentName:"p"},"!"),") to further diverge logic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let this_is_true: bool = true;\nif !this_is_true {\n    println!("Less trust, more truth!");\n}\n\n')),(0,a.kt)("p",null,"This no longer prints, as it looks for the opposite of ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"A more realistic example is checking if a number is higher or lower than expected, like seeing if a bank balance is over $100."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let bank_balance = 101;\nif bank_balance >= 100 {\n    println!("More than 100 dollars");\n}\n')),(0,a.kt)("h2",{id:"using-else-if-and-else"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"else if")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"else")),(0,a.kt)("p",null,"A single ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statement can only be used so much.  Using ",(0,a.kt)("inlineCode",{parentName:"p"},"else if"),", we can create branches of logic within a program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let bank_balance = 56;\n\nif bank_balance >= 100 {\n    println!("More than, equal to, 100 dollars");\n} else if bank_balance % 2 == 0 {\n    println!("You have an even balance!");\n} else if bank_balance <= 0 {\n    println!("Uh oh, it appears you\'re in debt!");\n} else {\n    println!("More than 0, but less than 100!");\n}\n')),(0,a.kt)("h2",{id:"using-match"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"match")),(0,a.kt)("p",null,"You can also use a match statement to perform similar logic, which we will investigate later.  A ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," statement is the most basic form of pattern matching:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let age = 18;\n\nmatch age {\n    16 => println!("Old enough to drive"),\n    18 => println!("An adult"),\n    _ => println!("Irrelevant age")\n}\n\n')),(0,a.kt)("h1",{id:"iterating-with-loops"},"Iterating with loops"),(0,a.kt)("p",null,"Loops in Rust are very useful ",(0,a.kt)("em",{parentName:"p"},"expressions"),", which, if you recall, produce a value as a result of some operation."),(0,a.kt)("p",null,"Although Rust supports ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/reference/expressions/loop-expr.html"},"five types of loops"),", we will go over the most common types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"loop")," expression - an infinite loop which goes till ",(0,a.kt)("inlineCode",{parentName:"li"},"break")," is called."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"while")," expression - a loop that continues until a condition is true or false."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," expression - a loop that is useful for iterating over a collection of items.")),(0,a.kt)("h2",{id:"infinite-loops-loop"},"Infinite loops: ",(0,a.kt)("inlineCode",{parentName:"h2"},"loop")),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"loop")," keyword, we can define an expression that iterates, or loops, infinitely: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    loop {\n        println!("Print forever!");\n    }\n}\n')),(0,a.kt)("p",null,"This type of loop is typically used to keep trying some operation until a condition has been fulfilled."),(0,a.kt)("h2",{id:"conditional-loops-while"},"Conditional loops: ",(0,a.kt)("inlineCode",{parentName:"h2"},"while")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop will automatically stop once a condition has been fulfilled.  An example would be looping until a number has reached a certain limit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\nfn main() {\n    let mut x = 0;\n    while (x <= 10) {\n        println!("x is now: {x}");\n        x += 1;\n    }\n}\n\n')),(0,a.kt)("p",null,"In this case, we define a mutable variable ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),".  The while loop, which defines a condition while x is less than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," (",(0,a.kt)("inlineCode",{parentName:"p"},"x <= 10"),"), executes the logic until the condition for ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," is met."),(0,a.kt)("p",null,"A while loop could also iterate over a collection if needed: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\nfn main() {\n    let months = ["Jan", "Feb", "Mar", "Apr"];\n    let mut index = 0;\n    while (index <= months.len() - 1) {\n        println!("The month is now: {}", months[index]);\n        index += 1;\n    }\n}\n\n')),(0,a.kt)("p",null,"This is a bit clumsy, not to mention not friendly to any updates to the ",(0,a.kt)("inlineCode",{parentName:"p"},"months")," array - an index could be out of bounds if we add or take away any elements from the array.  Luckily, there is a better way to accomplish this."),(0,a.kt)("h2",{id:"looping-over-collections-for"},"Looping over collections: ",(0,a.kt)("inlineCode",{parentName:"h2"},"for")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop is primarily used for looping over a collection of items, such as an array.  You may recall that we used a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop to loop over several course modules. "),(0,a.kt)("p",null,"Let's refactor the code from ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\nfn main() {\n    let months = ["Jan", "Feb", "Mar", "Apr"];\n    for month in months{\n        println!("The month is now: {}", month);\n    }\n}\n\n')),(0,a.kt)("p",null,"Besides being much more concise, there is no worry about having an ",(0,a.kt)("inlineCode",{parentName:"p"},"index out of bounds")," error.  "),(0,a.kt)("h2",{id:"try-it-out"},"Try it out!"),(0,a.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++let+months+%3D+%5B%22Jan%22%2C+%22Feb%22%2C+%22Mar%22%2C+%22Apr%22%5D%3B%0A%0A++++%2F%2F+An+infinite+loop+-+comment+this+out+to+let+the+program+run%21%0A++++loop+%7B%0A++++++++println%21%28%22Print+forever%21..+Or+not+because+we+break.%22%29%3B%0A++++++++%2F%2F+Notice+the+use+of+break%2C+so+we+don%27t+%27break%27+the+playground%0A++++++++break%3B%0A++++%7D%0A%0A++++%2F%2F+A+conditional+while+loop%0A++++let+mut+x+%3D+0%3B%0A++++while+x+%3C%3D+10+%7B%0A++++++++println%21%28%22x+is+now%3A+%7Bx%7D%22%29%3B%0A++++++++x+%2B%3D+1%3B%0A++++%7D%0A++++%0A++++%0A++++%2F%2F+A+while+loop+acting+as+a+for+loop%0A++++let+mut+index+%3D+0%3B%0A++++while+index+%3C%3D+months.len%28%29+-+1+%7B%0A++++++++println%21%28%22The+month+is+now%3A+%7B%7D%22%2C+months%5Bindex%5D%29%3B%0A++++++++index+%2B%3D+1%3B%0A++++%7D%0A++++%0A++++%0A++++%2F%2F+A+for+loop+in+action.+%0A++++for+month+in+months%7B%0A++++++++println%21%28%22The+month+is+now%3A+%7B%7D%22%2C+month%29%3B%0A++++%7D%0A++++%0A%7D%0A"}),(0,a.kt)("h2",{id:"what-is-happening-here"},"What is happening here?"),(0,a.kt)("p",null,"A the core loops are illustrated above.  Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"break")," keyword being used within ",(0,a.kt)("inlineCode",{parentName:"p"},"loop"),", so the playground does not run infinitely (and so other loops can run!)."))}d.isMDXComponent=!0}}]);