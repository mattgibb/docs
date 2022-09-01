"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31927],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Queries and Null Attributes"},u=void 0,s={unversionedId:"c8ql/queries-null-attributes",id:"c8ql/queries-null-attributes",title:"Queries and Null Attributes",description:"This page describes the impact of non-existent or null attributes for selection queries.",source:"@site/docs/c8ql/queries-null-attributes.md",sourceDirName:"c8ql",slug:"/c8ql/queries-null-attributes",permalink:"/docs/c8ql/queries-null-attributes",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/queries-null-attributes.md",tags:[],version:"current",frontMatter:{title:"Queries and Null Attributes"},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/docs/c8ql/data-types"},next:{title:"Type and Value Order",permalink:"/docs/c8ql/type-and-value-order"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes the impact of non-existent or null attributes for selection queries."),(0,o.kt)("p",null,"Collection data can be accessed by specifying a collection name in a query.  A collection can be understood as an array of documents, and that is how they are treated in C8QL."),(0,o.kt)("p",null,"Documents from collections are normally accessed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"FOR")," keyword."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When iterating over documents from a collection, the order of documents is undefined. To traverse documents in an explicit and deterministic order, the ",(0,o.kt)("inlineCode",{parentName:"p"},"SORT")," keyword should be used in addition.)")),(0,o.kt)("p",null,"Data in collections is stored in documents, with each document potentially having different attributes than other documents. This is true even for documents of the same collection."),(0,o.kt)("p",null,"It is therefore quite normal to encounter documents that do not have some or all of the attributes that are queried in a C8QL query. In this case, the non-existing attributes in the document will be treated as if they would exist with a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"That means that comparing a document attribute to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," will return true if the document has the particular attribute and the attribute has a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", or that the document does not have the particular attribute at all."),(0,o.kt)("p",null,"For example, the following query will return all documents from the collection  ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," that have a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," in the attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", plus all documents from ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," that do not have the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute at all:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    FOR u IN users\n      FILTER u.name == null\n      RETURN u\n")),(0,o.kt)("p",null,"Furthermore, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," is less than any other value (excluding ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," itself). That means documents with non-existing attributes may be included in the result when comparing attribute values with the less than or less equal operators."),(0,o.kt)("p",null,"For example, the following query will return all documents from the collection ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," that have an attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," with a value less than ",(0,o.kt)("inlineCode",{parentName:"p"},"39"),", but also all documents from the collection that do not have the attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," at all."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    FOR u IN users\n      FILTER u.age < 39\n      RETURN u\n")),(0,o.kt)("p",null,"This behavior should always be taken into account when writing queries."))}m.isMDXComponent=!0}}]);