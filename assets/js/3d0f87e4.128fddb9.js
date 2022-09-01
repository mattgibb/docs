"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97286],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return N}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(n),N=r,k=u["".concat(p,".").concat(N)]||u[N]||m[N]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38578:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"http-call (Sink)"},p=void 0,s={unversionedId:"cep/reference/functions/sink/http-call",id:"cep/reference/functions/sink/http-call",title:"http-call (Sink)",description:"The http-call sink publishes messages to endpoints via HTTP or HTTPS protocols using methods such as POST, GET, PUT, and DELETE on formats text, XML or JSON and consume responses through its corresponding http-call-response source. It also supports calling endpoints protected with basic authentication or OAuth 2.0.",source:"@site/docs/cep/reference/functions/sink/http-call.md",sourceDirName:"cep/reference/functions/sink",slug:"/cep/reference/functions/sink/http-call",permalink:"/docs/cep/reference/functions/sink/http-call",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/sink/http-call.md",tags:[],version:"current",frontMatter:{title:"http-call (Sink)"},sidebar:"tutorialSidebar",previous:{title:"grpc (Sink)",permalink:"/docs/cep/reference/functions/sink/grpc"},next:{title:"http-service-response (Sink)",permalink:"/docs/cep/reference/functions/sink/http-service-response"}},d={},m=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"System Parameters",id:"system-parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],u={toc:m};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The http-call sink publishes messages to endpoints via HTTP or HTTPS protocols using methods such as POST, GET, PUT, and DELETE on formats ",(0,l.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"XML")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," and consume responses through its corresponding http-call-response source. It also supports calling endpoints protected with basic authentication or OAuth 2.0."),(0,l.kt)("p",null,"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'CREATE SINK <NAME> WITH (type="http-call", map.type="<STRING>", publisher.url="<STRING>", sink.id="<STRING>", basic.auth.username="<STRING>", basic.auth.password="<STRING>", https.truststore.file="<STRING>", https.truststore.password="<STRING>", oauth.username="<STRING>", oauth.password="<STRING>", consumer.key="<STRING>", consumer.secret="<STRING>", token.url="<STRING>", refresh.token="<STRING>", headers="<STRING>", method="<STRING>", downloading.enabled="<BOOL>", download.path="<STRING>", blocking.io="<BOOL>", socket.idle.timeout="<INT>", chunk.disabled="<BOOL>", ssl.protocol="<STRING>", ssl.verification.disabled="<BOOL>", ssl.configurations="<STRING>", proxy.host="<STRING>", proxy.port="<STRING>", proxy.username="<STRING>", proxy.password="<STRING>", client.bootstrap.configurations="<STRING>", max.pool.active.connections="<INT>", min.pool.idle.connections="<INT>", max.pool.idle.connections="<INT>", min.evictable.idle.time="<STRING>", time.between.eviction.runs="<STRING>", max.wait.time="<STRING>", test.on.borrow="<BOOL>", test.while.idle="<BOOL>", exhausted.action="<INT>", hostname.verification.enabled="<BOOL>")\n')),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publisher.url"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL which should be called. Examples: ",(0,l.kt)("inlineCode",{parentName:"td"},"http://localhost:8080/endpoint"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"https://localhost:8080/endpoint")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.id"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier to correlate the http-call sink to its corresponding http-call-response sources to retrieved the responses."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"basic.auth.username"),(0,l.kt)("td",{parentName:"tr",align:null},"The username to be included in the authentication header when calling endpoints protected by basic authentication. ",(0,l.kt)("inlineCode",{parentName:"td"},"basic.auth.password")," property should be also set when using this property."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"basic.auth.password"),(0,l.kt)("td",{parentName:"tr",align:null},"The password to be included in the authentication header when calling endpoints protected by basic authentication. ",(0,l.kt)("inlineCode",{parentName:"td"},"basic.auth.username")," property should be also set when using this property."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"https.truststore.file"),(0,l.kt)("td",{parentName:"tr",align:null},"The file path of the client truststore when sending messages through ",(0,l.kt)("inlineCode",{parentName:"td"},"https")," protocol."),(0,l.kt)("td",{parentName:"tr",align:null},"`","\\${carbon.home}/resources/security/client-truststore.jks","`"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"https.truststore.password"),(0,l.kt)("td",{parentName:"tr",align:null},"The password for the client-truststore."),(0,l.kt)("td",{parentName:"tr",align:null},"gdncarbon"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth.username"),(0,l.kt)("td",{parentName:"tr",align:null},"The username to be included in the authentication header when calling endpoints protected by OAuth 2.0. ",(0,l.kt)("inlineCode",{parentName:"td"},"oauth.password")," property should be also set when using this property."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oauth.password"),(0,l.kt)("td",{parentName:"tr",align:null},"The password to be included in the authentication header when calling endpoints protected by OAuth 2.0. ",(0,l.kt)("inlineCode",{parentName:"td"},"oauth.username")," property should be also set when using this property."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.key"),(0,l.kt)("td",{parentName:"tr",align:null},"Consumer key used for calling endpoints protected by OAuth 2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.secret"),(0,l.kt)("td",{parentName:"tr",align:null},"Consumer secret used for calling endpoints protected by OAuth 2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token.url"),(0,l.kt)("td",{parentName:"tr",align:null},"Token URL to generate a new access tokens when calling endpoints protected by OAuth 2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refresh.token"),(0,l.kt)("td",{parentName:"tr",align:null},"Refresh token used for generating new access tokens when calling endpoints protected by OAuth 2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP request headers in format ",(0,l.kt)("inlineCode",{parentName:"td"},"\"'<key>:<value>','<key>:<value>'\""),". When the ",(0,l.kt)("inlineCode",{parentName:"td"},"Content-Type")," header is not provided the system decides the Content-Type based on the provided sink mapper as following:  - ",(0,l.kt)("inlineCode",{parentName:"td"},"map.type='xml'"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"application/xml"),"  - ",(0,l.kt)("inlineCode",{parentName:"td"},"map.type='json'"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"application/json"),"  - ",(0,l.kt)("inlineCode",{parentName:"td"},"map.type='text'"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"plain/text"),"  - ",(0,l.kt)("inlineCode",{parentName:"td"},"map.type='keyvalue'"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"application/x-www-form-urlencoded"),"  - For all other cases system defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"plain/text")," Also the ",(0,l.kt)("inlineCode",{parentName:"td"},"Content-Length")," header need not to be provided, as the system automatically defines it by calculating the size of the payload."),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type and Content-Length headers"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"The HTTP method used for calling the endpoint."),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"downloading.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable response received by the http-call-response source to be written to a file. When this is enabled the ",(0,l.kt)("inlineCode",{parentName:"td"},"download.path")," property should be also set."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"download.path"),(0,l.kt)("td",{parentName:"tr",align:null},"The absolute file path along with the file name where the downloads should be saved."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blocking.io"),(0,l.kt)("td",{parentName:"tr",align:null},"Blocks the request thread until a response it received from HTTP call-response source before sending any other request."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"socket.idle.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Socket timeout in millis."),(0,l.kt)("td",{parentName:"tr",align:null},"6000"),(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk.disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable chunked transfer encoding."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl.protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL/TLS protocol."),(0,l.kt)("td",{parentName:"tr",align:null},"TLS"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl.verification.disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable SSL verification."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl.configurations"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL/TSL configurations. Expected format ",(0,l.kt)("inlineCode",{parentName:"td"},"\"'<key>:<value>','<key>:<value>'\""),". Some supported parameters:  - SSL/TLS protocols: ",(0,l.kt)("inlineCode",{parentName:"td"},"'sslEnabledProtocols:TLSv1.1,TLSv1.2'"),"  - List of ciphers: ",(0,l.kt)("inlineCode",{parentName:"td"},"'ciphers:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256'"),"  - Enable session creation: ",(0,l.kt)("inlineCode",{parentName:"td"},"'client.enable.session.creation:true'"),"  - Supported server names: ",(0,l.kt)("inlineCode",{parentName:"td"},"'server.suported.server.names:server'"),"  - Add HTTP SNIMatcher: ",(0,l.kt)("inlineCode",{parentName:"td"},"'server.supported.snimatchers:SNIMatcher'")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.host"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy server host"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.port"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy server port"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.username"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy server username"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.password"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy server password"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client.bootstrap.configurations"),(0,l.kt)("td",{parentName:"tr",align:null},"Client bootstrap configurations in format ",(0,l.kt)("inlineCode",{parentName:"td"},"\"'<key>:<value>','<key>:<value>'\""),". Some supported configurations :  - Client connect timeout in millis: ",(0,l.kt)("inlineCode",{parentName:"td"},"'client.bootstrap.connect.timeout:15000'"),"  - Client socket timeout in seconds: ",(0,l.kt)("inlineCode",{parentName:"td"},"'client.bootstrap.socket.timeout:15'"),"  - Client socket reuse: ",(0,l.kt)("inlineCode",{parentName:"td"},"'client.bootstrap.socket.reuse:true'"),"  - Enable TCP no delay: ",(0,l.kt)("inlineCode",{parentName:"td"},"'client.bootstrap.nodelay:true'"),"  - Enable client keep alive: ",(0,l.kt)("inlineCode",{parentName:"td"},"'client.bootstrap.keepalive:true'"),"  - Send buffer size: ",(0,l.kt)("inlineCode",{parentName:"td"},"'client.bootstrap.sendbuffersize:1048576'"),"  - Receive buffer size: ",(0,l.kt)("inlineCode",{parentName:"td"},"'client.bootstrap.recievebuffersize:1048576'")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max.pool.active.connections"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum possible number of active connection per client pool."),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min.pool.idle.connections"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum number of idle connections that can exist per client pool."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max.pool.idle.connections"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of idle connections that can exist per client pool."),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min.evictable.idle.time"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum time (in millis) a connection may sit idle in the client pool before it become eligible for eviction."),(0,l.kt)("td",{parentName:"tr",align:null},"300000"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time.between.eviction.runs"),(0,l.kt)("td",{parentName:"tr",align:null},"Time between two eviction operations (in millis) on the client pool."),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max.wait.time"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time (in millis) the pool will wait (when there are no available connections) for a connection to be returned to the pool."),(0,l.kt)("td",{parentName:"tr",align:null},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"test.on.borrow"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable connections to be validated before being borrowed from the client pool."),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"test.while.idle"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable connections to be validated during the eviction operation (if any)."),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exhausted.action"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that should be taken when the maximum number of active connections are being used. This action should be indicated as an int and possible action values are following. 0 - Fail the request. 1 - Block the request, until a connection returns to the pool. 2 - Grow the connection pool size."),(0,l.kt)("td",{parentName:"tr",align:null},"1 (Block when exhausted)"),(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostname.verification.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable hostname verification"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"system-parameters"},"System Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Parameters"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientBootstrapClientGroupSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of client threads to perform non-blocking read and write to one or more channels."),(0,l.kt)("td",{parentName:"tr",align:null},"(Number of available processors) ","*"," 2"),(0,l.kt)("td",{parentName:"tr",align:null},"Any positive integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientBootstrapBossGroupSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of boss threads to accept incoming connections."),(0,l.kt)("td",{parentName:"tr",align:null},"Number of available processors"),(0,l.kt)("td",{parentName:"tr",align:null},"Any positive integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientBootstrapWorkerGroupSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of worker threads to accept the connections from boss threads and perform non-blocking read and write from one or more channels."),(0,l.kt)("td",{parentName:"tr",align:null},"(Number of available processors) ","*"," 2"),(0,l.kt)("td",{parentName:"tr",align:null},"Any positive integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trustStoreLocation"),(0,l.kt)("td",{parentName:"tr",align:null},"The default truststore file path."),(0,l.kt)("td",{parentName:"tr",align:null},"`","\\${carbon.home}/resources/security/client-truststore.jks","`"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to client truststore ","`",".jks","`"," file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trustStorePassword"),(0,l.kt)("td",{parentName:"tr",align:null},"The default truststore password."),(0,l.kt)("td",{parentName:"tr",align:null},"gdncarbon"),(0,l.kt)("td",{parentName:"tr",align:null},"Truststore password as string")))),(0,l.kt)("h2",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CREATE SINK FooStream WITH (type='http-call', sink.id='foo', publisher.url='http://localhost:8009/foo', map.type='xml', map.payload=\"'{{payloadBody}}'\") (payloadBody string);\n\n    CREATE SOURCE ResponseStream WITH (type='http-call-response', sink.id='foo', map.type='text', regex.A='((.|\\n)*)', map.attributes=\"headers='trp:headers', message='A[1]'\") (message string, headers string);\n\nWhen events arrive in `FooStream`, http-call sink makes calls to endpoint on url `http://localhost:8009/foo` with `POST` method and Content-Type `application/xml`. If the event `payloadBody` attribute contains following XML:\n\n    <item>\n        <name>apple</name>\n        <price>55</price>\n        <quantity>5</quantity>\n    </item>\n")),(0,l.kt)("p",null,"the http-call sink maps that and sends it to the endpoint. When endpoint sends a response it will be consumed by the corresponding http-call-response source correlated via the same ",(0,l.kt)("inlineCode",{parentName:"p"},"sink.id")," ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and that will map the response message and send it via ",(0,l.kt)("inlineCode",{parentName:"p"},"ResponseStream")," steam by assigning the message body as ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," attribute and response headers as ",(0,l.kt)("inlineCode",{parentName:"p"},"headers")," attribute of the event."),(0,l.kt)("h2",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CREATE SINK DownloadRequestStream WITH (type='http-call', publisher.url='http://localhost:8005/files/{{name}}', downloading.enabled='true', download.path='{{downloadPath}}{{name}}', method='GET', sink.id='download', map.type='json') (name String, id int, downloadPath string);\n\n    CREATE SOURCE ResponseStream2xx WITH (type='http-call-response', sink.id='download', http.status.code='2\\\\d+', map.type='text', map.regex.A='((.|\\n)*)', map.attributes=\"name='trp:name', id='trp:id', file='A[1]'\") (name string, id string, file string);\n\n    CREATE SOURCE ResponseStream4xx WITH (type='http-call-response', sink.id='download', http.status.code='4\\\\d+', map.type='text', map.regex.A='((.|\\n)*)', map.attributes=\"errorMsg='A[1]'\") (errorMsg string);\n")),(0,l.kt)("p",null,"When events arrive in ",(0,l.kt)("inlineCode",{parentName:"p"},"DownloadRequestStream")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),":",(0,l.kt)("inlineCode",{parentName:"p"},"foo.txt"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),":",(0,l.kt)("inlineCode",{parentName:"p"},"75")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"downloadPath"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/user/download/")," the http-call sink sends a GET request to the url ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8005/files/foo.txt")," to download the file to the given path ",(0,l.kt)("inlineCode",{parentName:"p"},"/user/download/foo.txt")," and capture the response via its corresponding http-call-response source based on the response status code. If the response status code is in the range of 200 the message will be received by the http-call-response source associated with the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResponseStream2xx")," stream which expects ",(0,l.kt)("inlineCode",{parentName:"p"},"http.status.code")," with regex ",(0,l.kt)("inlineCode",{parentName:"p"},"2\\\\d+")," while downloading the file to the local file system on the path ",(0,l.kt)("inlineCode",{parentName:"p"},"/user/download/foo.txt")," and mapping the response message having the absolute file path to event's ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," attribute. If the response status code is in the range of 400 then the message will be received by the http-call-response source associated with the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResponseStream4xx")," stream which expects ",(0,l.kt)("inlineCode",{parentName:"p"},"http.status.code")," with regex ",(0,l.kt)("inlineCode",{parentName:"p"},"4\\\\d+")," while mapping the error response to the ",(0,l.kt)("inlineCode",{parentName:"p"},"errorMsg")," attribute of the event."))}N.isMDXComponent=!0}}]);