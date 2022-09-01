"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94239],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10447:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={toc:[{value:"View a collection stream",id:"view-a-collection-stream",level:2},{value:"Stream Fields",id:"stream-fields",level:2}]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each collection in Macrometa GDN can be a stream. Collection streams use the WebSocket protocol to emit event messages for operations performed on the collection."),(0,a.kt)("p",null,"The Stream tab is only displayed if streams are enabled on that collection."),(0,a.kt)("p",null,"For more information about streams, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/streams/"},"Streams")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/cep/"},"Stream Workers"),"."),(0,a.kt)("h2",{id:"view-a-collection-stream"},"View a collection stream"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://auth.paas.macrometa.io/"},"Log in to your Macrometa account"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"COLLECTIONS"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the collection for which you want to view the stream."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Stream"),". If the Stream tab is not visible, then streams are not enabled on the collection.")),(0,a.kt)("h2",{id:"stream-fields"},"Stream Fields"),(0,a.kt)("p",null,"You can access the following information on the Stream tab."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Msg Rate In -")," Rate of data packets received per second."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Msg Rate Out -")," Rate of data packets sent per second."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Msg Throughput In/Out -")," Throughput or the amount of data passing through the pipeline per second."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Average Msg Size -")," Size of an average data packet in KB."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Storage Size -")," Total storage size in KB."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stream -")," Name of the enabled stream for collection (same as collection name)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Replication -")," Local or Global. Only local streams are selected for collection streams."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type -")," Stream type for collections-enabled stream."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Region -")," The region in which the collection was created."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WebSocket URL -")," Weblink of the stream\u2019s API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Latest Message -")," Click to update the stream to the latest messages.")))}c.isMDXComponent=!0},59256:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(10447),l=["components"],c={title:"Document Store Stream",sidebar_position:60},s=void 0,m={unversionedId:"collections/documents/document-store-stream",id:"collections/documents/document-store-stream",title:"Document Store Stream",description:"",source:"@site/docs/collections/documents/document-store-stream.md",sourceDirName:"collections/documents",slug:"/collections/documents/document-store-stream",permalink:"/docs/collections/documents/document-store-stream",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/documents/document-store-stream.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Document Store Stream",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Document Store Settings",permalink:"/docs/collections/documents/document-store-settings"},next:{title:"Document Store Example",permalink:"/docs/collections/documents/document-store-example"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"StreamTab"}))}f.isMDXComponent=!0}}]);