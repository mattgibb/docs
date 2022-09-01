"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58368],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return t?n.createElement(f,s(s({ref:a},o),{},{components:t})):n.createElement(f,s({ref:a},o))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},54818:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=t(83117),r=t(80102),l=(t(67294),t(3905)),s=["components"],i={title:"Fabric Commands"},c="Fabrics (gdnsl fabric)",p={unversionedId:"cli/fabrics-cli",id:"cli/fabrics-cli",title:"Fabric Commands",description:"Get commands related to GeoFabrics.",source:"@site/docs/cli/fabrics-cli.md",sourceDirName:"cli",slug:"/cli/fabrics-cli",permalink:"/docs/cli/fabrics-cli",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cli/fabrics-cli.md",tags:[],version:"current",frontMatter:{title:"Fabric Commands"},sidebar:"tutorialSidebar",previous:{title:"Config Map Commands",permalink:"/docs/cli/config-map-cli"},next:{title:"Graph Commands",permalink:"/docs/cli/graph-cli"}},o={},d=[{value:"gdnsl fabric list",id:"gdnsl-fabric-list",level:2},{value:"gdnsl fabric create",id:"gdnsl-fabric-create",level:2},{value:"gdnsl fabric delete",id:"gdnsl-fabric-delete",level:2},{value:"gdnsl fabric update",id:"gdnsl-fabric-update",level:2},{value:"gdnsl fabric describe",id:"gdnsl-fabric-describe",level:2}],u={toc:d};function m(e){var a=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fabrics-gdnsl-fabric"},"Fabrics (gdnsl fabric)"),(0,l.kt)("p",null,"Get commands related to GeoFabrics."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl fabric [flags]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help   Help for fabric.\n")),(0,l.kt)("h2",{id:"gdnsl-fabric-list"},"gdnsl fabric list"),(0,l.kt)("p",null,"Get list of GeoFabrics."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl fabric list [flags]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  # List fabrics from the server and returns an array of their names\n  gdnsl fabric list\n\n  # List all fabrics accessible to the active user from the server and returns an array of their names\n  gdnsl fabric list -all\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help            Help to get list of fabrics\n      --all boolean     List all fabrics accessible to the active user. ( default is false )\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options inherited:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  --config string       gdnsl config file (default is ./gdnsl.yaml)\n")),(0,l.kt)("h2",{id:"gdnsl-fabric-create"},"gdnsl fabric create"),(0,l.kt)("p",null,"Create a GeoFabric."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl fabric create <geo_fabric_name> [flags]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  # Create demo fabric in the prashant-ap-west data-center\n  gdnsl fabric create demo --datacenter prashant-ap-west\n\n  # Create demo fabric in the prashant-ap-west data-center with metadata\n  gdnsl fabric create demo --datacenter prashant-ap-west --metadata "key:value"\n\n  # Create demo fabric in the prashant-ap-west data-center with spot-datacenter\n  gdnsl fabric create demo --datacenter prashant-ap-west --spot-datacenter prashant-us-east\n\n  # Create demo fabric in the prashant-ap-west data-center with a user\n  gdnsl fabric create demo --datacenter prashant-ap-west --user admin\n\n  # Create demo fabric with two metadata objects\n  gdnsl fabric create demo --metadata "key1:value1" --metadata "key2:value2"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help                Help to create a fabric.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options inherited:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  --config string           gdnsl config file (default is ./gdnsl.yaml)\n  --datacenter string       (required) Name of a Edge Location (datacenter). ie, Edge Location URL prefixes up to the first "." character.\n  --metadata string         An optional string object with user defined key-value pair Example "key:value".\n  --spot-datacenter string  The Edge Location (Datacenter) where on-spot operations for the given fabric will be performed.\n  --user string             Username that will have admin access to the new fabric\n')),(0,l.kt)("h2",{id:"gdnsl-fabric-delete"},"gdnsl fabric delete"),(0,l.kt)("p",null,"Delete a GeoFabric."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl fabric delete <geo_fabric_name> [flags]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  # Delete demo fabric\n  gdnsl fabric delete demo\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help                Help to delete a fabric.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options inherited:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  --config string           gdnsl config file (default is ./gdnsl.yaml)\n")),(0,l.kt)("h2",{id:"gdnsl-fabric-update"},"gdnsl fabric update"),(0,l.kt)("p",null,"Update GeoFabric metadata."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl fabric update <fabric-name> [flags]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  # Update demo fabric metadata with 2 metadata objects\n  gdnsl fabric update demo --metadata "key1:test1" --metadata "key2:test2"\n\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  -h, --help                Help to create a fabric metadata.\n  --metadata string         An optional string object with user defined key-value pair Example "key:value".\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options inherited:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  --config string           gdnsl config file (default is ./gdnsl.yaml)\n")),(0,l.kt)("h2",{id:"gdnsl-fabric-describe"},"gdnsl fabric describe"),(0,l.kt)("p",null,"Describe a GeoFabric."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl fabric describe <geo_fabric_name> [flags]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  # Describe demo fabric\n  gdnsl fabric describe demo\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help        Help to describe a fabric.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options inherited:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  --config string   gdnsl config file (default is ./gdnsl.yaml)\n")))}m.isMDXComponent=!0}}]);