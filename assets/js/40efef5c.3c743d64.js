"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43089],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},42048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"power (Function)"},u=void 0,p={unversionedId:"cep/reference/functions/math/power",id:"cep/reference/functions/math/power",title:"power (Function)",description:"This function raises the given value to a given power.",source:"@site/docs/cep/reference/functions/math/power.md",sourceDirName:"cep/reference/functions/math",slug:"/cep/reference/functions/math/power",permalink:"/docs/cep/reference/functions/math/power",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/math/power.md",tags:[],version:"current",frontMatter:{title:"power (Function)"},sidebar:"tutorialSidebar",previous:{title:"pi (Function)",permalink:"/docs/cep/reference/functions/math/pi"},next:{title:"rand (Function)",permalink:"/docs/cep/reference/functions/math/rand"}},c={},m=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function raises the given value to a given power."),(0,o.kt)("p",null,"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<DOUBLE> math:power(<INT|LONG|FLOAT|DOUBLE> value, <INT|LONG|FLOAT|DOUBLE> to.power)\n")),(0,o.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"value"),(0,o.kt)("td",{parentName:"tr",align:null},"The value that should be raised to the power of ",(0,o.kt)("inlineCode",{parentName:"td"},"to.power")," input parameter."),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"INT LONG FLOAT DOUBLE"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"to.power"),(0,o.kt)("td",{parentName:"tr",align:null},"The power to which the ",(0,o.kt)("inlineCode",{parentName:"td"},"value")," input parameter should be raised."),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"INT LONG FLOAT DOUBLE"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE STREAM InValueStream (inValue1 double, inValue2 double);\n\ninsert into OutMediationStream\nselect math:power(inValue1,inValue2) as powerValue\nfrom InValueStream;\n")),(0,o.kt)("p",null,"This function raises the ",(0,o.kt)("inlineCode",{parentName:"p"},"inValue1")," to the power of ",(0,o.kt)("inlineCode",{parentName:"p"},"inValue2")," and directs the output to the output stream, ",(0,o.kt)("inlineCode",{parentName:"p"},"OutMediationStream"),". For example, (5.6d, 3.0d) returns 175.61599999999996."))}d.isMDXComponent=!0}}]);