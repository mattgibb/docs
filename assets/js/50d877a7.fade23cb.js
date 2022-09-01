"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7212],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(n),h=r,f=g["".concat(s,".").concat(h)]||g[h]||p[h]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70821:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Graph Commands"},s="Graphs (gdnsl graph)",c={unversionedId:"cli/graph-cli",id:"cli/graph-cli",title:"Graph Commands",description:"Commands to work with graphs.",source:"@site/docs/cli/graph-cli.md",sourceDirName:"cli",slug:"/cli/graph-cli",permalink:"/docs/cli/graph-cli",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cli/graph-cli.md",tags:[],version:"current",frontMatter:{title:"Graph Commands"},sidebar:"tutorialSidebar",previous:{title:"Fabric Commands",permalink:"/docs/cli/fabrics-cli"},next:{title:"Graph Edge Commands",permalink:"/docs/cli/graph-edges-cli"}},d={},p=[{value:"gdnsl graph create",id:"gdnsl-graph-create",level:2},{value:"gdnsl graph list",id:"gdnsl-graph-list",level:2},{value:"gdnsl graph delete",id:"gdnsl-graph-delete",level:2},{value:"gdnsl graph describe",id:"gdnsl-graph-describe",level:2},{value:"gdnsl graph update",id:"gdnsl-graph-update",level:2},{value:"gdnsl graph traversal",id:"gdnsl-graph-traversal",level:2}],g={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphs-gdnsl-graph"},"Graphs (gdnsl graph)"),(0,o.kt)("p",null,"Commands to work with graphs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl graph GRAPH-NAME [flags]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n  # Help for graph command group\n  gdnsl graph -h\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help                Help for graph commands.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options inherited:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"      --config string       gdnsl config file (default is ./gdnsl.yaml)\n")),(0,o.kt)("h2",{id:"gdnsl-graph-create"},"gdnsl graph create"),(0,o.kt)("p",null,"Create a graph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl graph create GRAPH-NAME [flags]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n  # Create a graph "social"\n  gdnsl graph create social\n\n  # Create a graph "social" with edge collection "relation", set "from" vertex as "female" & "male" and set "to" vertex as "female" & "male". The edge-definition format is "EDGE_COLLECTION:FROM_VERTICES:TO_VERTICES".\n  gdnsl graph create social --edge-definition "relation:female,male:female,male"\n\n  # Create a graph "social" with edge collection "relation", set "from" vertex as "female" & "male" and set "to" vertex as "female" & "male" with additional options specified. The edge-definition format is "EDGE_COLLECTION:FROM_VERTICES:TO_VERTICES".\n  gdnsl graph create social --edge-definition "relation:female,male:female,male" --option "key=value"\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  -h, --help                Help for graph describe.\n      --edge-definition     Specify the edge definition of the graph. This edge definition has to contain a collection and an array of each from and to vertex collections. An edge definition can only be added if this definition is either not used in any other graph, or it is used with exactly the same definition. It is not possible to store a definition "e" from "v1" to "v2" in the one graph, and "e" from "v2" to "v1" in the other graph. Can be given multiple times.\n      --option              Specify any additional options to be given. Can be given multiple times.\n      --fabric              Name of the fabric to use.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options inherited:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"      --config string       gdnsl config file (default is ./gdnsl.yaml)\n")),(0,o.kt)("h2",{id:"gdnsl-graph-list"},"gdnsl graph list"),(0,o.kt)("p",null,"List all graphs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl graph list\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n  # List all graphs\n  gdnsl graph list\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help                Help for graph list.\n  --fabric                  Name of the fabric to use.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options inherited:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"      --config string       gdnsl config file (default is ./gdnsl.yaml)\n")),(0,o.kt)("h2",{id:"gdnsl-graph-delete"},"gdnsl graph delete"),(0,o.kt)("p",null,"Delete a graph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl graph delete GRAPH-NAME [flags]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n  # Drop the graph "social"\n  gdnsl graph delete social\n\n  # Drop the graph "social" and any collections if they are not used in other graphs\n  gdnsl graph delete social --drop-collections\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help                Help for graph describe.\n      --drop-collections    Drop the collection as well. Collection will only be dropped if it is not used in other graphs. Default is false.\n      --fabric              Name of the fabric to use.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options inherited:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"      --config string       gdnsl config file (default is ./gdnsl.yaml)\n")),(0,o.kt)("h2",{id:"gdnsl-graph-describe"},"gdnsl graph describe"),(0,o.kt)("p",null,"Describe a graph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl graph describe GRAPH-NAME [flags]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n  # Describe the graph "social"\n  gdnsl graph describe social\n\n  # Describe all edge definitions of the graph "social"\n  gdnsl graph describe social --edge-definitions\n\n  # Describe all vertex collections of the graph "social"\n  gdnsl graph describe social --vertex\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  -h, --help                Help for graph describe.\n      --edge-definitions    Get all the edge definitions of a graph.\n      --vertex              Get all the vertex collections of a graph.\n      --fabric              Name of the fabric to use.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options inherited:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"      --config string       gdnsl config file (default is ./gdnsl.yaml)\n")),(0,o.kt)("h2",{id:"gdnsl-graph-update"},"gdnsl graph update"),(0,o.kt)("p",null,"Update a graph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl graph update GRAPH-NAME [flags]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n  # Add an edge-definition to the graph "social" for the edge collection "relation", set "from" vertex as "female" & "male" and set "to" vertex as "female" & "male". The edge-definition format is "EDGE_COLLECTION:FROM_VERTICES:TO_VERTICES".\n  gdnsl graph update social --add-edge-definition "relation:female,male:female,male"\n\n  # Add a vertex collection "age" to the graph "social"\'s orphan collections\n  gdnsl graph update social --add-vertex-collection "age"\n\n  # Remove "age" vertex collection from graph "social"\n  gdnsl graph update social --remove-vertex-collection "age"\n\n  # Remove the edge definitions belonging to the "relation" edge collection\n  gdnsl graph update social --remove-edge-collection "relation"\n\n  # Replace an edge-definition of the graph "social" for the edge collection "relation", set "from" vertices as "female" & "male", and set "to" vertices as "female" & "male". The edge-definition format is "EDGE_COLLECTION:FROM_VERTICES:TO_VERTICES".\n  gdnsl graph update social --collection relation --replace-edge-definition "relation:female,male:female,male"\n\n  # Replace a vertex collection "age" to the graph "social"\'s orphan collections and drop the collection if it is not being used\n  gdnsl graph update social --collection relation --replace-edge-definition "relation:female,male:female,male" --drop-collections\n      \n  # Enable stream on graph collection social\n  gdnsl graph update social --stream \n    \n  # Disable stream on graph collection social\n  gdnsl graph update social --no-stream\n\n  # Enable waitForSync on graph collection social\n  gdnsl graph update social --wait-for-sync \n    \n  # Disable waitForSync on graph collection social\n  gdnsl graph update social --no-wait-for-sync\n\n  # Enable stream and waitForSync on graph collection social\n  gdnsl graph update social --stream --wait-for-sync \n    \n  # Disable stream and waitForSync on graph collection social\n  gdnsl graph update social --no-stream  --no-wait-for-sync\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  -h, --help   help for graph describe\n\n      --add-edge-definition         Specify the edge definition of the graph. This edge definition has to contain a collection and an array of each from and to vertex collections. An edge definition can only be added if this definition is either not used in any other graph, or it is used with exactly the same definition. It is not possible to store a definition "e" from "v1" to "v2" in the one graph, and "e" from "v2" to "v1" in the other graph.\n\n      --add-vertex-collection       Adds a vertex collection to the set of orphan collections of the graph. If the collection does not exist, it will be created.\n\n      --collection                  The name of the edge collection the edge belongs to. Should be used with "--replace-edge-definition" flag\n\n      --replace-edge-definition     Specify the edge definition of the graph. This edge definition has to contain a collection and an array of each from and to vertex collections. An edge definition can only be added if this definition is either not used in any other graph, or it is used with exactly the same definition. It is not possible to store a definition "e" from "v1" to "v2" in the one graph, and "e" from "v2" to "v1" in the other graph.\n\n      --remove-edge-collection      Remove one edge definition from the graph. This will only remove the edge collection, the vertex collections remain untouched and can still be used in your queries.\n\n      --remove-vertex-collection   The name of the edge collection the edge belongs to. Removes a vertex collection from the graph and optionally deletes the collection, if it is not used in any other graph. It can only remove vertex collections that are no longer part of edge definitions, if they are used in edge definitions you are required to modify those first.\n      \n      --drop-collection             Drop the collection as well. Collection will only be dropped if it is not used in other graphs. Default value is false.\n\n      --fabric                      Name of the fabric to use.\n      --stream                      Enable stream on the kv collection.\n      --no-stream                   Disable stream on the kv collection.\n      --wait-for-sync               Enable waitForSync on the kv collection.\n      --no-wait-for-sync            Disable waitForSync on the kv collection.\n')),(0,o.kt)("h2",{id:"gdnsl-graph-traversal"},"gdnsl graph traversal"),(0,o.kt)("p",null,"Starts a graph traversal from a given vertex and following edges contained in a given edge collection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gdnsl graph traversal GRAPH-NAME [flags]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n    # Traverse 'edges' edge collection starting from the vertex \"circles/F\"\n    gdnsl graph traversal --edge-collection edges --start-vertex \"circles/F\" --direction 'any' --visitor 'result.vertices.push(vertex._key);' --init 'result.vertices = [];' --order postorder\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  -h, --help                  Help to traverse a graph.\n      --direction             Direction for traversal. If set, must be either "outbound", "inbound", or "any"; if not set, the expander attribute must be specified.\n      --edge-collection       Name of the collection that contains the edges .\n      --expander              Body (JavaScript) code of custom expander function must be set if direction attribute is not set function signature: (config, vertex, path) -> array expander must return an array of the connections for vertex each connection is an object with the attributes edge and vertex\n      \n      --filter                Default is to include all nodes: body (JavaScript code) of custom filter function function signature: (config, vertex, path) -> mixed can return four different string values:\n      "exclude" -> this vertex will not be visited.\n      "prune" -> the edges of this vertex will not be followed.\n      "" or undefined -> visit the vertex and follow its edges.\n      Array -> containing any combination of the above. If there is at least one "exclude" or "prune" respectively is contained, it\'s effect will occur.\n      \n      --init                  Body (JavaScript) code of custom result initialization function function signature: (config, result) -> void initialize any values in result with what is required.\n\n      --item-order            Item iteration order can be "forward" or "backward".\n      --max-depth             ANDed with any existing filters visits only nodes in at most the given depth.\n      --max-iterations        Maximum number of iterations in each traversal. This number can be set to prevent endless loops in traversal of cyclic graphs. When a traversal performs as many iterations as the maxIterations value, the traversal will abort with an error. If maxIterations is not set, a server-defined value may be used.\n\n      --min-depth             ANDed with any existing filters): visits only nodes in at least the given depth.\n      --order                 Traversal order can be "preorder", "postorder" or "preorder-expander".\n      --sort                  Body (JavaScript) code of a custom comparison function for the edges. The signature of this function is (l, r) -> integer (where l and r are edges) and must return -1 if l is smaller than, +1 if l is greater than, and 0 if l and r are equal. The reason for this is the following: The order of edges returned for a certain vertex is undefined. This is because there is no natural order of edges for a vertex with multiple connected edges. To explicitly define the order in which edges on the vertex are followed, you can specify an edge comparator function with this attribute. Note that the value here has to be a string to conform to the JSON standard, which in turn is parsed as function body on the server side. Furthermore note that this attribute is only used for the standard expanders. If you use your custom expander you have to do the sorting yourself within the expander code.\n\n      --start-vertex          id of the startVertex, e.g. "users/foo".\n      --strategy              Traversal strategy can be "depthfirst" or "breadthfirst".\n      --uniqueness            Specifies uniqueness for vertices and edges visited.\nIf set, must be an object like this:\n"uniqueness": {"vertices": "none"|"global"|"path", "edges": "none"|"global"|"path"}\n      \n      --visitor               Body (JavaScript) code of custom visitor function function signature: (config, result, vertex, path, connected) -> void The visitor function can do anything, but its return value is ignored. To populate a result, use the result variable by reference. Note that the connected argument is only populated when the order attribute is set to "preorder-expander".\n\n      --fabric                Name of the fabric to use.\n')))}h.isMDXComponent=!0}}]);