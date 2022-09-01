"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37249],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={title:"Document Store Indexes",sidebar_position:50},l=void 0,c={unversionedId:"collections/documents/document-store-indexes",id:"collections/documents/document-store-indexes",title:"Document Store Indexes",description:"Indexes enable you to create searchable attributes to speed up your queries. For more information about indexes, refer to Indexing.",source:"@site/docs/collections/documents/document-store-indexes.md",sourceDirName:"collections/documents",slug:"/collections/documents/document-store-indexes",permalink:"/docs/collections/documents/document-store-indexes",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/documents/document-store-indexes.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Document Store Indexes",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Document Store Data",permalink:"/docs/collections/documents/document-store-data"},next:{title:"Document Store Settings",permalink:"/docs/collections/documents/document-store-settings"}},u={},d=[{value:"Document Store Indexes",id:"document-store-indexes",level:2},{value:"View Indexes",id:"view-indexes",level:2}],m={toc:d};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Indexes enable you to create searchable attributes to speed up your queries. For more information about indexes, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/collections/indexing/"},"Indexing"),"."),(0,i.kt)("h2",{id:"document-store-indexes"},"Document Store Indexes"),(0,i.kt)("p",null,"You can create the following types of index for a document collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/collections/indexing/geo-indexes"},"Geo Index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/collections/indexing/fulltext-indexes"},"Fulltext Index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/collections/indexing/persistent-indexes"},"Persistent Index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/collections/indexing/ttl-indexes"},"TTL Index"))),(0,i.kt)("p",null,"Refer to each index type for more information about the index and for instructions on how to create and use it."),(0,i.kt)("h2",{id:"view-indexes"},"View Indexes"),(0,i.kt)("p",null,"View active indexes for a collection on the Indexes tab. The section explains what each element of the tab means."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Document Store Indexes Tab",src:n(11914).Z,width:"2000",height:"718"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ID -")," This is a unique primary key for the indexes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type -")," The index type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unique -")," If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", then no two documents are allowed to have the same set of attribute values. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," for primary keys and indexes, and default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," is for all other keys and indexes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sparse -")," If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", then a document is excluded from the index. If any index value is not set or has a null value, GDN does not perform uniqueness checks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deduplicate -")," If ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," (default), GDN only inserts each non-unique index value once per document. Attempting to insert duplicate values results in an error. If ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", GDN inserts each instance of the value into the index per document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Extras -")," Extra conditions of the index definition, such as minimum length for fulltext index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Selectivity Est -")," An estimate indicating the percentage of documents affected by the indexed attributes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fields -")," The attributes on which the index is created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name -")," A custom name generated for a non-primary index. The primary index is created and named during the creation of a collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action -")," Allows a user to delete or add indexes. The primary key is a unique identifier and cannot be deleted.")))}p.isMDXComponent=!0},11914:function(e,t,n){t.Z=n.p+"assets/images/doc-store-indexes-819513c53403ba8d3f8f15031cd92ae8.png"}}]);