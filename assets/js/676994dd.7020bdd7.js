"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20312],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Create a Dynamo Table",sidebar_position:10},c=void 0,s={unversionedId:"collections/dynamo/create-dynamo-table",id:"collections/dynamo/create-dynamo-table",title:"Create a Dynamo Table",description:"AWS Dynamo Database users can create Dynamo Table collections. You can use Macrometa as a datastore and achieve global data distribution within milliseconds.",source:"@site/docs/collections/dynamo/create-dynamo-table.md",sourceDirName:"collections/dynamo",slug:"/collections/dynamo/create-dynamo-table",permalink:"/docs/collections/dynamo/create-dynamo-table",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/dynamo/create-dynamo-table.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Create a Dynamo Table",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Bulk Update with RestQL",permalink:"/docs/collections/keyvalue/tutorials/bulk-update-restql"},next:{title:"Purge a Dynamo Table",permalink:"/docs/collections/dynamo/purge-dynamo-table"}},p={},u=[{value:"Create a Dynamo Table Collection with the Console",id:"create-a-dynamo-table-collection-with-the-console",level:2},{value:"Create a Dynamo Table Collection with Code",id:"create-a-dynamo-table-collection-with-code",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AWS Dynamo Database users can create Dynamo Table collections. You can use Macrometa as a datastore and achieve global data distribution within milliseconds. "),(0,r.kt)("p",null,"To switch to GDN, you must change the connection URL, ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessKey"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"SecretKey"),". AWS Dynamo DB SDK and CLI are compatible. Geo-distribution is global by default."),(0,r.kt)("h2",{id:"create-a-dynamo-table-collection-with-the-console"},"Create a Dynamo Table Collection with the Console"),(0,r.kt)("p",null,"Follow these instructions to create a new collection using the GDN console web UI."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://auth.paas.macrometa.io/"},"Log in to your Macrometa account"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Collections"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New Collection"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Dynamo Table"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter information about the collection and then click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Table Name -")," Required. A unique name to distinguish the collection. Spaces are not allowed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Partition Key -")," Required. The key is not autogenerated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Partition Key Type -")," Select the option that matches the partition key value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sorting Key (Optional) -")," An optional key for creating a composite key in combination with the partion key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sorting Key Type (Optional) -")," Required if you enter a sorting key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create Secondary Index -")," Add a secondary Partion and/or Sort Key that differ from the base table.")))),(0,r.kt)("h2",{id:"create-a-dynamo-table-collection-with-code"},"Create a Dynamo Table Collection with Code"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/collections/dynamo/reference/createTable"},"createTable")," to create a new Dynamo table in the collection."),(0,r.kt)("p",null,"Refer to the other topics in this section for various examples using this function with the SDK, CLI, and Boto3."))}d.isMDXComponent=!0}}]);