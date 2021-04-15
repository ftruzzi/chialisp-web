(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),l=n(7),r=(n(0),n(90)),i={id:"serialization",title:"CLVM Reference Manual",sidebar_label:"2 - Serialization"},b={unversionedId:"ref/serialization",id:"ref/serialization",isDocsHomePage:!1,title:"CLVM Reference Manual",description:"Serialization",source:"@site/docs/ref/serialization.md",slug:"/ref/serialization",permalink:"/docs/ref/serialization",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/master/docs/ref/serialization.md",version:"current",sidebar_label:"2 - Serialization",sidebar:"someSidebar",previous:{title:"CLVM Reference Manual",permalink:"/docs/ref/clvm"},next:{title:"ChiaLisp and CLVM FAQ",permalink:"/docs/faq"}},c=[{value:"Serialization",id:"serialization",children:[{value:"Values",id:"values",children:[]},{value:"Encoding",id:"encoding",children:[]},{value:"Encoded Size bytes layout",id:"encoded-size-bytes-layout",children:[]},{value:"Decoding",id:"decoding",children:[]},{value:"Lists",id:"lists",children:[]}]}],s={toc:c};function o(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"serialization"},"Serialization"),Object(r.b)("p",null,"The CLVM serialization format closely follows the in-memory representation of the program tree."),Object(r.b)("p",null,"This in turn, closely resembles the text format of a fully compiled CLVM program."),Object(r.b)("p",null,"At the lowest level, there are only three types of Object in the CLVM."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cons Cells"),Object(r.b)("li",{parentName:"ul"},"Values"),Object(r.b)("li",{parentName:"ul"},"Nil, a subtype of Value")),Object(r.b)("p",null,"Each CLVM Object is represented by a series of one or more bytes. Each byte belongs to the representation of exactly one CLVM Object. That is, no bits in a byte are shared by multiple CLVM objects."),Object(r.b)("h3",{id:"values"},"Values"),Object(r.b)("p",null,"Each value in the CLVM is an untyped sequence of bytes. In the running virtual machine, values have a property length, containing the number of bytes. The same concept is preserved in the serialization format. However, values must be distinguished from cons boxes in the byte stream, so an escaping scheme is used. This escaping means that serialized values using more than 7 bits have a different representation than the in memory representation."),Object(r.b)("p",null,"Nil has a single predefined value which is not shared with any user-defined value."),Object(r.b)("h3",{id:"encoding"},"Encoding"),Object(r.b)("p",null,"Values which can be represented in 7 bits are encoded as a single byte with that value. Larger serialized values are represented as a sequence of bytes that encode the size, and then the value bytes."),Object(r.b)("p",null,"The encoding scheme for the size prefix is as follows:"),Object(r.b)("p",null,"The value of the first serialized byte determines the number of size bytes (1 to 6, including the first byte). The size then determines the number of bytes denoting the value (0 to 0x400000000-1 bytes long)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"size")," is the length of the byte array containing the value, as an integer.\nIn the table below, we use ",Object(r.b)("strong",{parentName:"p"},"s")," to describe the bytes that make up the encoded size value, s","[0]"," being the least significant byte of ",Object(r.b)("strong",{parentName:"p"},"size"),". The size bytes are encoded MSB first."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"object is cons box:   0xFF\nvalue == nil:         0x80\nvalue <= 0x7F:        value\n\nsize < 0x40:          0x80 | s[0], value\nsize < 0x2000:        0xC0 | s[1], s[0], value\nsize < 0x100000:      0xE0 | s[2], s[1], s[0], value\nsize < 0x8000000:     0xF0 | s[3], s[2], s[1], s[0], value\nsize < 0x400000000:   0xF8 | s[4], s[3], s[2], s[1], s[0], value\n")),Object(r.b)("p",null,"In the table below, the bits marked x contain the length of the value array, in bytes."),Object(r.b)("h3",{id:"encoded-size-bytes-layout"},"Encoded Size bytes layout"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Size bytes"),Object(r.b)("th",{parentName:"tr",align:null},"Min Value Len"),Object(r.b)("th",{parentName:"tr",align:null},"Max Value Length"),Object(r.b)("th",{parentName:"tr",align:null},"Byte 1"),Object(r.b)("th",{parentName:"tr",align:null},"Byte 2"),Object(r.b)("th",{parentName:"tr",align:null},"Byte 3"),Object(r.b)("th",{parentName:"tr",align:null},"Byte 4"),Object(r.b)("th",{parentName:"tr",align:null},"Byte 5"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"0x00"),Object(r.b)("td",{parentName:"tr",align:null},"0x3F"),Object(r.b)("td",{parentName:"tr",align:null},"1xxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"0x40"),Object(r.b)("td",{parentName:"tr",align:null},"0x1FFF"),Object(r.b)("td",{parentName:"tr",align:null},"11xxxxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"0x2000"),Object(r.b)("td",{parentName:"tr",align:null},"0xFFFFF"),Object(r.b)("td",{parentName:"tr",align:null},"111xxxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"4"),Object(r.b)("td",{parentName:"tr",align:null},"0x100000"),Object(r.b)("td",{parentName:"tr",align:null},"0x7FFFFFF"),Object(r.b)("td",{parentName:"tr",align:null},"1111xxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"5"),Object(r.b)("td",{parentName:"tr",align:null},"0x8000000"),Object(r.b)("td",{parentName:"tr",align:null},"0x3FFFFFFFF"),Object(r.b)("td",{parentName:"tr",align:null},"11111xxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(r.b)("td",{parentName:"tr",align:null},"xxxxxxxx")))),Object(r.b)("h3",{id:"decoding"},"Decoding"),Object(r.b)("p",null,"The decoding scheme is as follows:"),Object(r.b)("p",null,"c","[0]"," is the first byte of the serialized CLVM object."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"size")," is the number of bytes contained in the value byte array\n",Object(r.b)("strong",{parentName:"p"},"s")," is the byte array containing the bytes of the two's complement integer size, the number of bytes in the value array.\n",Object(r.b)("strong",{parentName:"p"},"value")," is the span of bytes describing the CLVM Object itself"),Object(r.b)("p",null,"c","[0]"," can contain the entire value, or it can be part of the size header.\nValues below 0x80 do not have size header bytes."),Object(r.b)("p",null,"0x00-0x7f: A literal one byte value. c","[0]"," contains the value.\n",Object(r.b)("inlineCode",{parentName:"p"},"size = 1; value = c[0]")),Object(r.b)("p",null,"0x80-0xbf: The value starts at the byte c","[1]",", and size is in the lower 6 bits of c","[0]","\n",Object(r.b)("inlineCode",{parentName:"p"},"size = (c[0] & 0x3F); value = c[1] .. c[size]")),Object(r.b)("p",null,"0xc0-0xdf: The value starts at c","[2]","; the lower 5 bits of c","[0]"," are the high bits of size\n",Object(r.b)("inlineCode",{parentName:"p"},"size = (c[0] & 0x1F) .. c[1]; value = c[2] .. c[size+1]")),Object(r.b)("p",null,"0xe0-0xef: The value starts at c","[3]","; the lower 4 bits of c","[0]"," are the high bits of size\n",Object(r.b)("inlineCode",{parentName:"p"},"size = (c[0] & 0x0F) .. c[2]; value = c[3] .. c[size+2]")),Object(r.b)("p",null,"0xf0-0xf7: The value starts at c","[4]","; the lower 3 bits of c","[0]"," are the high bits of size\n",Object(r.b)("inlineCode",{parentName:"p"},"size = (c[0] & 0x07) .. c[3]; value = c[4] .. c[size+3]")),Object(r.b)("p",null,"0xf7-0xfb: The value starts at c","[5]","; the lower 2 bits of c","[0]"," are the high bits of size\n",Object(r.b)("inlineCode",{parentName:"p"},"size = (c[0] & 0x03) .. c[4]; value = c[5] .. c[size+4]")),Object(r.b)("p",null,"Atoms of size 0x400000000 or greater are disallowed in the serialization format."),Object(r.b)("p",null,"As an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"c = [ 0x84 0x33 0x22 0x11 0x00 ]\nc[0] = 0x84\nsize = (0x84 & 0x3F) = 4\nvalue = [ 33 22 11 00 ]\n")),Object(r.b)("p",null,"In the above example, the length of the value is ",Object(r.b)("strong",{parentName:"p"},"4"),", and we only needed the bottom 3 bits of the c","[0]"," byte to encode the length, so the size is completely described by the first serialized byte. The total lenth of the encoded atom is 5 bytes."),Object(r.b)("p",null,"Note that for values greater than 0x7F, the bytes of the serialized value representing the length are disjoint with the actual value bytes."),Object(r.b)("p",null,"Let us consider some special cases."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"value(0x80) = 81 80\n")),Object(r.b)("p",null,"c","[0]"," is ",Object(r.b)("inlineCode",{parentName:"p"},"0x81"),".Since c","[0]"," is between ",Object(r.b)("inlineCode",{parentName:"p"},"0x7F")," and ",Object(r.b)("inlineCode",{parentName:"p"},"0xC0"),", we know that there is only one sie byte, c","[0]",", and the value is contained in the following bytes, starting at c","[1]",". The total size of the value array is\n",Object(r.b)("inlineCode",{parentName:"p"},"size")," = ",Object(r.b)("inlineCode",{parentName:"p"},"c[0] & 0x3F")," = ",Object(r.b)("inlineCode",{parentName:"p"},"0x1"),". So, the full value is contained in the single following byte."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"value(0x81) = 81 81\nvalue(0x82) = 81 82\nvalue(0xFF) = 81 ff\n")),Object(r.b)("p",null,"Note that the special byte 0xFF is allowed within the bytes representing a value.\n0xFF denotes a cons box when it is the first byte of a decoded CLVM object, but it may also occur within the serialized bytes of a value."),Object(r.b)("p",null,"A 2 byte value"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"value(0x01FF) = 82 01 ff\n")),Object(r.b)("h3",{id:"lists"},"Lists"),Object(r.b)("p",null,"Lists are the primary high-level data structure in most LISP implementations. Traditionally, a LISP builds lists from cons boxes, a two-celled data structure that can be thought of as a struct with two fields, left and right, each of which contains either a value, or a (pointer to) another cons cell."),Object(r.b)("p",null,"Because the cons cell is the low level data structure that lists are built from, LISP lists are only lists by way of the fact that lists can be implemented from trees. A lisp list built from cons cells in a binary tree."),Object(r.b)("p",null,"Serialized cons cells are represented by the byte 0xFF, followed by the objects in its cells, left then right.\nValues are represented by a variable length byte-aligned encoding scheme, described above.\nNil is chosen to be the zero-length object, which is represented by the byte 0x80."),Object(r.b)("p",null,"Because lists are represented as a sequence of cons boxes, the byte 0xff occurs frequently in the serialization format."),Object(r.b)("p",null,"After the FF introducer byte, the next two values describe what is in the left and right cons boxes, respectively."),Object(r.b)("p",null,"The first examples use single byte values for clarity."),Object(r.b)("p",null,"The list (1 2 3) will be encoded as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"ff 01 ff 02 ff 03 80\n")),Object(r.b)("p",null,"This can be read as:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"(a cons box containing 01")," and ",Object(r.b)("inlineCode",{parentName:"p"},"a cons box (containing 02")," and ",Object(r.b)("inlineCode",{parentName:"p"},"a cons box (containing 03 and nil)))")),Object(r.b)("p",null,"Alternatively, it could be viewed as a binary tree that looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"      [ ]\n     /   \\\n    1    [ ]\n         / \\\n        2  [ ]\n           / \\\n          3  nil\n")),Object(r.b)("p",null,"Or, as a chain of memory cells that look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"(a)[ 1, ->b ]   (b)[ 2, ->c ]   (c)[ 3, nil ]\n")),Object(r.b)("p",null,"Where"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'(a) means "The contents of the memory cells at position a and a+1 (cons box a)"'),Object(r.b)("li",{parentName:"ul"},'->b means "a pointer to cons box (b)"'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(a)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"(b)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"(c)")," are arbitrary labels for the cons cells, and do not exist in the CLVM")),Object(r.b)("p",null,"Because the above list contains only one level of nesting, a single ",Object(r.b)("inlineCode",{parentName:"p"},"0x80")," byte is sufficient to terminate the list. Note the two ",Object(r.b)("inlineCode",{parentName:"p"},"0x80")," bytes in the example below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"opc '(1 (2 3))'\nff 01 ff ff 02 ff 03 80 80\n")),Object(r.b)("p",null,"There can be many cons cells in a CLVM program, so 0xFF will be common in the serialized program. There will be one serialized nil (0x80) per properly terminated list. Nil may also occur at other places in the program. There are usually more cons boxes than lists, so 0xFF occurs more frequently than 0x80."))}o.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),o=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=o(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return n?l.a.createElement(h,b(b({ref:t},s),{},{components:n})):l.a.createElement(h,b({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var s=2;s<r;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);