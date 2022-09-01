"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70637],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,k=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},10447:function(e,t,r){r.d(t,{ZP:function(){return s}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=["components"],i={toc:[{value:"View a collection stream",id:"view-a-collection-stream",level:2},{value:"Stream Fields",id:"stream-fields",level:2}]};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each collection in Macrometa GDN can be a stream. Collection streams use the WebSocket protocol to emit event messages for operations performed on the collection."),(0,o.kt)("p",null,"The Stream tab is only displayed if streams are enabled on that collection."),(0,o.kt)("p",null,"For more information about streams, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/streams/"},"Streams")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/cep/"},"Stream Workers"),"."),(0,o.kt)("h2",{id:"view-a-collection-stream"},"View a collection stream"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://auth.paas.macrometa.io/"},"Log in to your Macrometa account"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"COLLECTIONS"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the collection for which you want to view the stream."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Stream"),". If the Stream tab is not visible, then streams are not enabled on the collection.")),(0,o.kt)("h2",{id:"stream-fields"},"Stream Fields"),(0,o.kt)("p",null,"You can access the following information on the Stream tab."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Msg Rate In -")," Rate of data packets received per second."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Msg Rate Out -")," Rate of data packets sent per second."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Msg Throughput In/Out -")," Throughput or the amount of data passing through the pipeline per second."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Average Msg Size -")," Size of an average data packet in KB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage Size -")," Total storage size in KB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stream -")," Name of the enabled stream for collection (same as collection name)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Replication -")," Local or Global. Only local streams are selected for collection streams."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type -")," Stream type for collections-enabled stream."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Region -")," The region in which the collection was created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WebSocket URL -")," Weblink of the stream\u2019s API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Latest Message -")," Click to update the stream to the latest messages.")))}s.isMDXComponent=!0},48952:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=r(10447),i=["components"],s={title:"Key-Value Store Stream",sidebar_position:60},c=void 0,u={unversionedId:"collections/keyvalue/key-value-store-stream",id:"collections/keyvalue/key-value-store-stream",title:"Key-Value Store Stream",description:"",source:"@site/docs/collections/keyvalue/key-value-store-stream.md",sourceDirName:"collections/keyvalue",slug:"/collections/keyvalue/key-value-store-stream",permalink:"/docs/collections/keyvalue/key-value-store-stream",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/keyvalue/key-value-store-stream.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Key-Value Store Stream",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Key-Value Store Settings",permalink:"/docs/collections/keyvalue/key-value-store-settings"},next:{title:"Using Rest APIs",permalink:"/docs/collections/keyvalue/tutorials/using-rest-api"}},m={},p=[],f={toc:p};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{mdxType:"StreamTab"}))}k.isMDXComponent=!0}}]);