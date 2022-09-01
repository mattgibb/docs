"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40427],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||c;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78860:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=t(83117),o=t(80102),c=(t(67294),t(3905)),i=["components"],a={title:"UUID (Function)"},u=void 0,s={unversionedId:"cep/reference/functions/core/uuid",id:"cep/reference/functions/core/uuid",title:"UUID (Function)",description:"Generates a UUID (Universally Unique Identifier).",source:"@site/docs/cep/reference/functions/core/uuid.md",sourceDirName:"cep/reference/functions/core",slug:"/cep/reference/functions/core/uuid",permalink:"/docs/cep/reference/functions/core/uuid",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/core/uuid.md",tags:[],version:"current",frontMatter:{title:"UUID (Function)"},sidebar:"tutorialSidebar",previous:{title:"unionSet (Aggregate Function)",permalink:"/docs/cep/reference/functions/core/unionSet"},next:{title:"eval (Function)",permalink:"/docs/cep/reference/functions/js/eval"}},l={},p=[{value:"Example 1",id:"example-1",level:2}],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Generates a UUID (Universally Unique Identifier)."),(0,c.kt)("p",null,"Syntax"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"    <STRING> UUID()\n")),(0,c.kt)("h2",{id:"example-1"},"Example 1"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"    insert into RoomTempStream\n    select convert(roomNo, 'string') as roomNo, temp, UUID() as messageID\n    from TempStream;\n")),(0,c.kt)("p",null,"This will converts a room number to string, introducing a message ID to each event asUUID() returns ",(0,c.kt)("inlineCode",{parentName:"p"},"a34eec40-32c2-44fe-8075-7f4fde2e2dd8")," from TempStream select convert(roomNo, ",(0,c.kt)("inlineCode",{parentName:"p"},"string"),") as roomNo, temp, UUID() as messageID insert into RoomTempStream;"))}m.isMDXComponent=!0}}]);