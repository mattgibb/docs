"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88269],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},32112:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],l={sidebar_position:1,title:"Tutorials"},s=void 0,c={unversionedId:"collections/documents/tutorials/index",id:"collections/documents/tutorials/index",title:"Tutorials",description:"If you are new to Macrometa GDN, we strongly recommend reading What is Macrometa.",source:"@site/docs/collections/documents/tutorials/index.md",sourceDirName:"collections/documents/tutorials",slug:"/collections/documents/tutorials/",permalink:"/docs/collections/documents/tutorials/",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/documents/tutorials/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Tutorials"},sidebar:"tutorialSidebar",previous:{title:"Document Store Example",permalink:"/docs/collections/documents/document-store-example"},next:{title:"Quickstart",permalink:"/docs/collections/documents/tutorials/working-with-documents"}},u={},m=[{value:"Documents",id:"documents",level:2},{value:"Graphs",id:"graphs",level:2},{value:"Global Streams",id:"global-streams",level:2},{value:"Stream Processing",id:"stream-processing",level:2}],p={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are new to Macrometa GDN, we strongly recommend reading ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/what-is-macrometa"},"What is Macrometa")),".")),(0,o.kt)("p",null,"Following tutorials cover various user scenarios using Macrometa GDN."),(0,o.kt)("h2",{id:"documents"},"Documents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/documents/tutorials/working-with-documents"},"Working with Documents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/queryworkers/tutorial"},"Using C8QL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/c8ql/coming-from-sql"},"Coming from SQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/documents/tutorials/using-realtime-updates"},"Using Realtime DB"))),(0,o.kt)("h2",{id:"graphs"},"Graphs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/graphs/quickstart"},"Working with Graphs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/graphs/graph-queries"},"Graph Queries"))),(0,o.kt)("h2",{id:"global-streams"},"Global Streams"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/streams/tutorials/pub-sub-streams"},"Pub-Sub with Streams"))),(0,o.kt)("h2",{id:"stream-processing"},"Stream Processing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/create-stream-app"},"Create a Stream App")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/consuming-data"},"Consuming Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/filtering-data"},"Filtering Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/transforming-data"},"Transforming Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/enriching-data"},"Enriching Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/correlating-data"},"Correlating Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/summarizing-data"},"Summarizing Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/publishing-data"},"Publishing Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cep/tutorials/executing-scripts"},"Executing Scripts"))))}d.isMDXComponent=!0}}]);