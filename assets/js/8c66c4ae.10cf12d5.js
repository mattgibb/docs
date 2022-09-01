"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3234],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6237:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={sidebar_position:1,title:"C8QL"},u="C8 query language (C8QL)",s={unversionedId:"c8ql/index",id:"c8ql/index",title:"C8QL",description:"The C8 query language (C8QL) can be used to create, retrieve and modify data that are stored in C8 Geo distributed fast data platform.",source:"@site/docs/c8ql/index.md",sourceDirName:"c8ql",slug:"/c8ql/",permalink:"/docs/c8ql/",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"C8QL"},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/docs/cep/reference/extensions/mappers/text"},next:{title:"C8QL Tutorial",permalink:"/docs/c8ql/c8ql-tutorial"}},c={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"c8-query-language-c8ql"},"C8 query language (C8QL)"),(0,o.kt)("p",null,"The C8 query language (C8QL) can be used to create, retrieve and modify data that are stored in C8 Geo distributed fast data platform."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If this is your first time with C8QL then be sure to check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/c8ql/c8ql-tutorial"},(0,o.kt)("strong",{parentName:"a"},"C8QL Tutorial"))," before you head off to the in-depth documentation!")),(0,o.kt)("p",null,"The general workflow when executing a query is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A client application ships a C8QL query to the C8  fabric. The query text contains everything C8 needs to compile the result set")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C8 will parse the query, execute it and compile the results. If the query is invalid or cannot be executed, the server will return an error that the client can process and react to. If the query can be executed successfully, the server will return the query results (if any) to the client"))),(0,o.kt)("p",null,"C8QL is mainly a declarative language, meaning that a query expresses what result should be achieved but not how it should be achieved. C8QL aims to be human-readable and therefore uses keywords from the English language."),(0,o.kt)("p",null,"Another design goal of C8QL was client independency, meaning that the language and syntax are the same for all clients, no matter what programming language the clients may use.  Further design goals of C8QL were the support of complex query patterns and the different data models C8 offers."),(0,o.kt)("p",null,"In its purpose, C8QL is similar to the Structured Query Language (SQL). C8QL supports reading and modifying collection data, but it doesn't support data-definition operations such as creating and dropping databases, collections and indexes."),(0,o.kt)("p",null,"It is a pure data manipulation language (DML), not a data definition language (DDL) or a data control language (DCL). The syntax of C8QL queries is different to SQL, even if some keywords overlap. Nevertheless, C8QL should be easy to understand for anyone with an SQL background."),(0,o.kt)("p",null,"We have SDKs for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Macrometacorp/jsC8"},"JavaScript")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Macrometacorp/pyC8"},"Python")),(0,o.kt)("p",null,"For some example queries, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/queryworkers/"},"Queries and Query Workers"),", ",(0,o.kt)("a",{parentName:"p",href:"../c8ql/examples/"},"Examples"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/c8ql/c8ql-tutorial"},"C8QL Tutorial"),"."))}f.isMDXComponent=!0}}]);