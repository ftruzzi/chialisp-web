(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(92)),i={id:"deeper_into_clvm",title:"3 - Deeper into CLVM"},l={unversionedId:"deeper_into_clvm",id:"deeper_into_clvm",isDocsHomePage:!1,title:"3 - Deeper into CLVM",description:"This guide directly continues on from part 1 so if you haven't read that, please do so before reading this.",source:"@site/docs/deeper_into_clvm.md",slug:"/deeper_into_clvm",permalink:"/docs/deeper_into_clvm",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/master/docs/deeper_into_clvm.md",version:"current",sidebar:"someSidebar",previous:{title:"2 - Coins, Spends and Wallets",permalink:"/docs/coins_spends_and_wallets"},next:{title:"4 - The High Level Language, Compiler, and Functions",permalink:"/docs/high_level_lang"}},s=[{value:"Lazy Evaluation in ChiaLisp",id:"lazy-evaluation-in-chialisp",children:[]},{value:"Introduction to Evaluate",id:"introduction-to-evaluate",children:[]},{value:"Programs as Parameters",id:"programs-as-parameters",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"This guide directly continues on from ",Object(o.a)("a",{parentName:"p",href:"/docs/"},"part 1")," so if you haven't read that, please do so before reading this."),Object(o.a)("p",null,"This section of the guide will cover how ChiaLisp relates to transactions and coins on the Chia network.\nIf there are any terms that you aren't sure of, be sure to check the ",Object(o.a)("a",{parentName:"p",href:"/docs/glossary"},"glossary"),"."),Object(o.a)("h2",{id:"lazy-evaluation-in-chialisp"},"Lazy Evaluation in ChiaLisp"),Object(o.a)("p",null,"As we saw in part 1, programs are often structured around ",Object(o.a)("inlineCode",{parentName:"p"},"(i A B C)")," to control flow.\nChiaLisp evaluates programs as trees, where the leaves are evaluated first.\nThis can cause unexpected problems if you are not aware of it.\nConsider the following program which uses ",Object(o.a)("inlineCode",{parentName:"p"},"x")," which immediately halts and throws an error if it is evaluated."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(i (q . 1) (q . 100) (x (q . \"still being evaluated\")))'\nFAIL: clvm raise (0x7374696c6c206265696e67206576616c7561746564)\n")),Object(o.a)("p",null,"This is because ChiaLisp evaluates both of the leaves even though it will only follow the path of one."),Object(o.a)("p",null,"To get around this we can use the following design pattern to replace (i A B C)."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-lisp"},"(a (i (A) (q . B) (q . C)) 1)\n")),Object(o.a)("p",null,"Applying this to our above example looks like this:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(a (i (q . 1) (q . (q . 100)) (q . (x (q . \"still being evaluated\")))) 1)'\n100\n")),Object(o.a)("p",null,"It is worth keeping this in mind whenever you write an ",Object(o.a)("inlineCode",{parentName:"p"},"(i A B C)"),"."),Object(o.a)("p",null,"If you're wondering how this works (and how the standard transaction from ",Object(o.a)("a",{parentName:"p",href:"/docs/coins_spends_and_wallets"},"part 2")," worked), then allow me to introduce Evaluate."),Object(o.a)("h2",{id:"introduction-to-evaluate"},"Introduction to Evaluate"),Object(o.a)("p",null,"In ",Object(o.a)("a",{parentName:"p",href:"/docs/"},"Part 1")," we mentioned that a program is usually a list where the first element is an operator, and every subsequent element is a valid program.\nWe can also run programs with new arguments inside a program."),Object(o.a)("p",null,"This looks like this:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-lisp"},"(a *(puzzle)* (*solution)*)\n")),Object(o.a)("p",null,"Let's put this into practice."),Object(o.a)("p",null,"Here is a program that evaluates the program ",Object(o.a)("inlineCode",{parentName:"p"},"(+ 2 (q . 5)))")," and uses the list ",Object(o.a)("inlineCode",{parentName:"p"},"(70 80 90)")," or ",Object(o.a)("inlineCode",{parentName:"p"},"(80 90 100)")," as the solution."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(a (q . (+ 2 (q . 5))) (q . (70 80 90)))' '(20 30 40)'\n75\n\n$ brun '(a (q . (+ 2 (q . 5))) (q . (80 90 100)))' '(20 30 40)'\n85\n\n")),Object(o.a)("p",null,"Notice how the original solution ",Object(o.a)("inlineCode",{parentName:"p"},"(20 30 40)")," does not matter for the new evaluation environment.\nIn this example we use ",Object(o.a)("inlineCode",{parentName:"p"},"q . ")," to quote both the new puzzle and the new solution to prevent them from being prematurely evaluated."),Object(o.a)("p",null,"A neat trick that we can pull is that we can define the new solution in terms of the outer solution.\nIn this next example we will add the first element of the old solution to our new solution."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(a (q . (+ 2 (q . 5))) (c 2 (q . (70 80 90))))' '(20 30 40)'\n25\n")),Object(o.a)("p",null,"However it's not just the new solution that we can affect using this, we can also pass programs as parameters."),Object(o.a)("h2",{id:"programs-as-parameters"},"Programs as Parameters"),Object(o.a)("p",null,"The core CLVM does not have an operator for creating user defined functions.\nIt does, however, allow programs to be passed as parameters, which can be used for similar results."),Object(o.a)("p",null,"Here is a puzzle that executes the program contained in ",Object(o.a)("inlineCode",{parentName:"p"},"2")," (the first solution argument) with the solution ",Object(o.a)("inlineCode",{parentName:"p"},"(12)"),"."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(a 2 (q . (12)))' '((* 2 (q . 2)))'\n24\n")),Object(o.a)("p",null,"Taking this further we can make the puzzle run a new evaluation that only uses parameters from its old solution:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(a 2 1)' '((* 5 (q . 2)) 10)'\n20\n")),Object(o.a)("p",null,"We can use this technique to implement recursive programs."))}p.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?r.a.createElement(h,l(l({ref:t},c),{},{components:a})):r.a.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);