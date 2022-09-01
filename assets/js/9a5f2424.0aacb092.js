"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44124],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=s.createContext({}),i=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return s.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return t?s.createElement(y,o(o({ref:n},p),{},{components:t})):s.createElement(y,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<r;i++)o[i]=t[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(67294),a=t(34334),r="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return d}});var s=t(83117),a=t(67294),r=t(34334),o=t(72389),l=t(67392),c=t(7094),i=t(12466),p="tabList__CuJ",m="tabItem_LNqP";function u(e){var n,t,o=e.lazy,u=e.block,d=e.defaultValue,y=e.values,b=e.groupId,_=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=y?y:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),E=(0,l.l)(f,(function(e,n){return e.value===n.value}));if(E.length>0)throw new Error('Docusaurus error: Duplicate values "'+E.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==A&&!f.some((function(e){return e.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,c.U)(),g=h.tabGroupChoices,C=h.setTabGroupChoices,L=(0,a.useState)(A),S=L[0],k=L[1],T=[],D=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var w=g[b];null!=w&&w!==S&&f.some((function(e){return e.value===w}))&&k(w)}var R=function(e){var n=e.currentTarget,t=T.indexOf(n),s=f[t].value;s!==S&&(D(n),k(s),null!=b&&C(b,String(s)))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var s,a=T.indexOf(e.currentTarget)+1;t=null!=(s=T[a])?s:T[0];break;case"ArrowLeft":var r,o=T.indexOf(e.currentTarget)-1;t=null!=(r=T[o])?r:T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},_)},f.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:R,onClick:R},o,{className:(0,r.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function d(e){var n=(0,o.Z)();return a.createElement(u,(0,s.Z)({key:String(n)},e))}},84698:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var s=t(83117),a=t(80102),r=(t(67294),t(3905)),o=t(65488),l=t(85162),c=["components"],i={sidebar_position:1,title:"SDKs"},p=void 0,m={unversionedId:"sdks/index",id:"sdks/index",title:"SDKs",description:"This section demonstrates some of the tasks that you can complete with Macrometa SDKs. Macrometa offers the following SDKs:",source:"@site/docs/sdks/index.md",sourceDirName:"sdks",slug:"/sdks/",permalink:"/docs/sdks/",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/sdks/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SDKs"},sidebar:"tutorialSidebar",previous:{title:"What is Macrometa",permalink:"/docs/what-is-macrometa"},next:{title:"Connect to GDN",permalink:"/docs/sdks/connect-to-gdn"}},u={},d=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"SDK download",id:"sdk-download",level:2},{value:"Complete Example",id:"complete-example",level:2}],y={toc:d};function b(e){var n=e.components,t=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,s.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section demonstrates some of the tasks that you can complete with Macrometa SDKs. Macrometa offers the following SDKs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Macrometacorp/c84j"},"c84j")," - Java SDK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Macrometacorp/jsC8"},"jsC8")," - JavaScript SDK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Macrometacorp/pyC8"},"pyC8")," - Python SDK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Macrometacorp/VueC8"},"VueC8")," - VueJS SDK")),(0,r.kt)("p",null,"The topics in this section focus primarily on the Python and JavaScript drivers, showing how to perform the tasks with SDKs or with APIs and the appropriate calls Python or JavaScript calls."),(0,r.kt)("p",null,"Read through the complete example below, or refer to the specific subsections."),(0,r.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assume your tenant name is ",(0,r.kt)("inlineCode",{parentName:"li"},"nemo@nautilus.com")," and user password is ",(0,r.kt)("inlineCode",{parentName:"li"},"xxxxx"),"."),(0,r.kt)("li",{parentName:"ul"},"Download the appropriate SDK.")),(0,r.kt)("h2",{id:"sdk-download"},"SDK download"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"With Yarn or NPM\n\nyarn add jsc8\n(or)\nnpm install jsc8\n\nIf you want to use the SDK outside of the current directory, you can also install it globally using the `--global` flag:\n\nnpm install --global jsc8\n\nFrom source,\n\ngit clone https://github.com/macrometacorp/jsc8.git\ncd jsC8\nnpm install\nnpm run dist\n"))),(0,r.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"pyC8 requires Python 3.5+. Python 3.6 or higher is recommended\n\nTo install pyC8, simply run\n\n$ pip3 install pyC8\n\nor, if you prefer to use conda:\n\nconda install -c conda-forge pyC8\n\nor pipenv:\n\npipenv install --pre pyC8\n\nOnce the installation process is finished, you can begin developing applications in Python.\n")))),(0,r.kt)("h2",{id:"complete-example"},"Complete Example"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const jsc8 = require("jsc8");\nconst client = new jsc8("https://gdn.paas.macrometa.io");\n\nasync function main(){\n    const keyid="id1";\n    await client.login("nemo@nautilus.com", "xxxxxx");\n    // Create an api key\n    try{\n        await client.createApiKey(keyid);\n    }\n    catch(e){\n        console.log(\'API Creation Failed: \', e);\n    }\n\n    //Fetch accessible databases\n    try{\n        var databases = await client.listAccessibleDatabases(keyid)\n        console.log("Accessible Databases")\n        console.log(databases.result)\n    }\n    catch(e){\n        console.log(\'Failed to fetch accessible dataases: \', e);\n\n    }\n    // Fetch accessible streams\n    try{\n        streams = await client.listAccessibleStreams(keyid, \'_system\', full=false)\n        console.log("Accessible Streams")\n        console.log(streams.result)\n    }\n    catch(e){\n        console.log(\'Failed to fetch accessible streams: \', e);\n\n    }\n\n    // Set Access Level for an API Key\n    // Create Colleciton\n    var coll = await client.getCollections();\n    var collectionName = \'testCollection\'\n    var streamName = \'testStream\'\n    console.log("Existing Collections: ", coll.result)\n    try{\n        await client.createCollection(collectionName);\n        console.log("Collection Created Successfully")\n    }\n    catch(e){\n        console.log("Collection creation did not succeed due to " + e)\n    }\n    try{\n        await client.setCollectionAccessLevel(keyid, \'_system\', collectionName, \'rw\')\n    }\n    catch(e){\n        console.log("Failed to set Collection Access Level: ",e)\n    }\n    // Create stream\n    try{\n        await client.createStream(streamName)\n    }\n    catch(e){\n        console.log("Stream Creation Failed: ",e)\n    }\n    try{\n        await client.setStreamAccessLevel(keyid, \'_system\', "c8globals."+streamName, \'ro\')\n    }\n    catch(e){\n        console.log("Failed to set Stream Access Level: ",e)\n    }\n    try{\n        await client.setDatabaseAccessLevel(keyid, \'_system\', \'rw\')\n    }\n    catch(e){\n        console.log("Failed to set Database Access Level: ",e)\n    }\n\n    // Get Access Levels\n    try{\n        await client.getCollectionAccessLevel(keyid, \'_system\', collectionName)\n    }\n    catch(e){\n        console.log("Failed to Get Access Level for the Collection: ",e)\n    }\n    try{\n        await client.getStreamAccessLevel(keyid, \'_system\', "c8globals."+streamName)\n    }\n    catch(e){\n        console.log("Failed to Get Access Level for the Stream: ",e)\n    }\n    try{\n        await client.getDatabaseAccessLevel(keyid, \'_system\')\n\n    }\n    catch(e){\n        console.log("Failed to Get Access Level for the Database: ",e)\n    }\n    // Clear Access Level\n    try{\n        await client.clearDatabaseAccessLevel(keyid, \'_system\')\n    }\n    catch(e){\n        console.log("Clearing Access Level for Database Failed: ",e)\n    }\n    try{\n        await client.clearStreamAccessLevel(keyid, \'_system\', "c8globals."+streamName)\n\n    }\n    catch(e){\n        console.log("Clearing Access Level for Stream Failed: ",e)\n    }\n    try{\n        await client.clearCollectionAccessLevel(keyid, \'_system\', collectionName)\n    }\n    catch(e){\n        console.log("Clearing Access Level for Collection Failed: ",e)\n\n    }\n    // Remove an api key\n    try{\n        await client.removeApiKey(keyid);\n    }\n    catch(e){\n        console.log(\'API Deletion Failed: \', e);\n\n    }\n}\n\nmain();\n'))),(0,r.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from c8 import C8Client\n# Create a connection to gdn\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443,\n                        email='nemo@nautilus.com', password='xxxxx',\n                        geofabric='_system')\n\n#remove = client.remove_api_key('id1')\n\n# Create an api key\nprint(\"Create API Key: \", client.create_api_key('id1'))\n\n# Fetch List of accessible databases and streams\nprint(\"Accessible Databases: \", client.list_accessible_databases('id1'))\n\nprint(\"Accessible Streams of a db: \", client.list_accessible_streams('id1', '_system'))\n\n# Set Accesslevels for an API Key\n\n# Create a new collection if it does not exist\nif client.has_collection('testCollection'):\n    print(\"Collection exists\")\nelse:\n    client.create_collection_kv(name='testCollection')\n# Create a new stream\n# print(client.create_stream('testStream'))\n\nprint(\"Set DB Access Level: \", client.set_database_access_level('id1', '_system', 'rw'))\n\nprint(\"Set Coll Access Level: \", client.set_collection_access_level('id1', 'testCollection', '_system', 'rw'))\n\nprint(\"Set Stream Access Level: \", client.set_stream_access_level('id1','c8globals.testStream', '_system'))\n\n# Get AccessLevel\nprint(\"Get DB Access Level\", client.get_database_access_level('id1','_system'))\n\nprint(\"Get Coll Access Level: \", client.get_collection_access_level('id1','testCollection', '_system'))\n\nprint(\"Get Stream Access Level: \", client.get_stream_access_level('id1','c8globals.testStream', '_system'))\n\n# Clear Access Level\nprint(\"Clear DB Access Level: \", client.clear_database_access_level('id1','_system'))\n\nprint(\"Clear Coll Access Level: \", client.clear_collection_access_level('id1','testCollection', '_system'))\n\nprint(\"Clear Stream Access Level: \", client.clear_stream_access_level('id1','c8globals.testStream', '_system'))\n\n# Remove api key\nremove = client.remove_api_key('id1')\n\nprint(remove)\n"))),(0,r.kt)(l.Z,{value:"RA p",label:"Rest API (python)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nimport json\n\n# Constants\n\nFEDERATION = "api-gdn.macrometa.io"\nFED_URL = "https://{}".format(FEDERATION)\nEMAIL = "nemo@nautilus.com"\nPASSWORD = "xxxxxx"\nAUTH_TOKEN = "bearer "\n\n# Create a HTTPS Session\n\nurl = "{}/_open/auth".format(FED_URL)\npayload = {\n    \'email\':EMAIL,\n    \'password\':PASSWORD\n    }\nheaders = {\n    \'content-type\': \'application/json\'\n    }\n\nresponse = requests.post(url, data = json.dumps(payload), headers = headers)\n\nif response.status_code == 200:\n    resp_body = json.loads(response.text)\n    AUTH_TOKEN += resp_body["jwt"]\n    TENANT = resp_body["tenant"]\nelse:\n    raise Exception("Error while getting auth token. Code:{}, Reason:{}".format(response.status_code,response.reason))\n\n\nsession = requests.session()\nsession.headers.update({"content-type": \'application/json\'})\nsession.headers.update({"authorization": AUTH_TOKEN})\n\n# Create an API Key\nkeyid = "id1"\nurl = FED_URL + "/_api/key"\npayload= {\n"keyid": keyid\n}\n\nresp = session.post(url, data = json.dumps(payload))\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("API Key Created: ", resp)\n        \n# Fetch List of accessible databases and streams\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/stream"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Accessible Streams: ", resp)\n\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/collection"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Accessible Collections: ", resp)\n\nurl = FED_URL + "/_api/key/" + keyid + "/database"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Accessible Databases: ", resp)\n\n# Set Database Access Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system"\npayload={\n"grant": "rw"\n}\nresp = session.put(url,data = json.dumps(payload))\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Set Database Access Level: ", resp)\n\n# Set Collection Access Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/collection/testCollection"\npayload={\n"grant": "rw"\n}\nresp = session.put(url,data = json.dumps(payload))\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Set Collection Access Level: ", resp)\n\n# Set Stream Access Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/stream/c8globals.testStream"\npayload={\n"grant": "rw"\n}\nresp = session.put(url,data = json.dumps(payload))\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Set Stream Access Level: ", resp)\n\n# Get Database Acces Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Get Database Access Level: ", resp)\n\n# Get Stream Access Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/stream/c8globals.testStream"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Get Stream Access Level: ", resp)\n\n# Get Collection Access Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/collection/testCollection"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Get Collection Access Level: ", resp)\n\n# Clear Database Access Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system"\nresp = session.delete(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Clear Database Access Level: ", resp)\n\n# Clear Collection Access Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/collection/testCollection"\nresp = session.delete(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Clear Collection Access Level: ", resp)\n\n# Clear Stream Access Level\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/stream/c8globals.testStream"\nresp = session.delete(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Clear Stream Access Level: ", resp)\n\n# Delete an API Key\nurl = FED_URL + "/_api/key/"+ keyid\nresp = session.delete(url, data = json.dumps(payload))\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("API Key Deleted: ", resp)\n'))),(0,r.kt)(l.Z,{value:"RA js",label:"Rest API (javascript)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class APIRequest {\n_headers = {\nAccept: "application/json",\n"Content-Type": "application/json",\n};\n\nconstructor(url) {\nthis._url = url;\n}\n\nlogin(email, password) {\nconst endpoint = "/_open/auth";\n\nconst self = this;\n\nreturn new Promise(function (resolve, reject) {\nself\n.req(endpoint, {\nbody: { email, password },\nmethod: "POST",\n})\n.then(({ jwt, ...data }) => {\nself._headers.authorization = bearer `${jwt}`;\nresolve(data);\n})\n.catch(reject);\n});\n}\n\n_handleResponse(response, resolve, reject) {\nif (response.ok) {\nresolve(response.json());\n} else {\nreject(response);\n}\n}\n\nreq(endpoint, { body, ...options } = {}) {\nconst self = this;\nreturn new Promise(function (resolve, reject) {\nfetch(self._url + endpoint, {\nheaders: self._headers,\nbody: body ? JSON.stringify(body) : undefined,\n...options,\n}).then((response) => self._handleResponse(response, resolve, reject));\n});\n}\n}\nconst EMAIL = "nemo@nautilus.com";\nconst PASSWORD = "xxxxxx";\nconst FEDERATION_URL = "https://api-gdn.prod.macrometa.io";\n\nconst COLLECTION_NAME = "testCollection";\nconst STREAM_NAME = "testStream"\nconst KEY_ID = "id1"\nconst run = async function () {\ntry {\nconst connection = new APIRequest(FEDERATION_URL);\n\n/* -------------------- Login (nemo@nautilus.com/xxxxxx) -------------------- */\n\nawait connection.login(EMAIL, PASSWORD);\n\nconsole.log("Login Successfully using", EMAIL);\n\n/* -------------------------- Create an API Key ------------------------- */\n\nconst apiKey = await connection.req(\n`/_fabric/_system/_api/key`,\n{\nmethod: "POST",\nbody: {\n    "keyid": KEY_ID\n}\n}\n);\n\nconsole.log("API KEY CREATED SUCCESSFULLY", apiKey);\n\n/* ---------------------------- Get List of Accessible Databases and Streams ---------------------------- */\n\nconst accessibleStreams = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system/stream`,\n{\nmethod: "GET",\n}\n);\n\nconsole.log("ACCESSIBLE STREAMS", accessibleStreams);\n\nconst accessibleCollections = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system/collection`,\n{\nmethod: "GET",\n}\n);\n\nconsole.log("ACCESSIBLE COLLECTIONS", accessibleCollections);\n\nconst accessibleDatabases = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database`,\n{\nmethod: "GET",\n}\n);\n\nconsole.log("ACCESSIBLE DATABASES", accessibleDatabases);\n    \n\n/* ----------------------------- Set Access Level ----------------------------- */\nconst setDatabaseAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system`,\n{\nmethod: "PUT",\nbody:{\n    "grant": "rw"\n}\n}\n);\nconsole.log("SET DATABASE ACCESS LEVEL", setDatabaseAccessLevel);\n\n\nconst setCollectionAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system/collection/${COLLECTION_NAME}`,\n{\nmethod: "PUT",\nbody:{\n    "grant": "rw"\n}\n}\n);\n    \nconsole.log("SET COLLECTION ACCESS LEVEL", setCollectionAccessLevel);\n\nconst setStreamAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system/stream/c8globals.${STREAM_NAME}`,\n{\nmethod: "PUT",\nbody:{\n    "grant": "rw"\n}\n}\n);\n    \nconsole.log("SET STREAM ACCESS LEVEL", setStreamAccessLevel);\n\n    \n/* ---------------------------- Get Access Level ---------------------------- */\n\nconst getStreamAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system/stream/c8globals.${STREAM_NAME}`,\n{\nmethod: "GET",\n}\n);\n    \nconsole.log("GET STREAM ACCESS LEVEL", getStreamAccessLevel);\n\nconst getCollectionAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system/collection/${COLLECTION_NAME}`,\n{\nmethod: "GET",\n}\n);\n    \nconsole.log("GET COLLECTION ACCESS LEVEL", getCollectionAccessLevel);\n\nconst getDatabaseAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system`,\n{\nmethod: "GET",\n}\n);\nconsole.log("SET DATABASE ACCESS LEVEL", getDatabaseAccessLevel);\n\n\n\n/* -----------------------------Clear Access Level ----------------------------- */\n\nconst clearDatabaseAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system`,\n{\nmethod: "DELETE",\n}\n);\nconsole.log("CLEAR DATABASE ACCESS LEVEL", clearDatabaseAccessLevel);\n\nconst clearCollectionAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system/collection/${COLLECTION_NAME}`,\n{\nmethod: "DELETE",\n}\n);\n        \nconsole.log("CLEAR COLLECTION ACCESS LEVEL", clearCollectionAccessLevel);\n\nconst clearStreamAccessLevel = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}/database/_system/stream/c8globals.${STREAM_NAME}`,\n{\nmethod: "DELETE",\n}\n);\n    \nconsole.log("CLEAR STREAM ACCESS LEVEL", clearStreamAccessLevel);\n/* --------------------------- Delete API Key ---------------------------- */\n\nconst removeApiKey = await connection.req(\n`/_fabric/_system/_api/key/${KEY_ID}`,\n{\nmethod: "DELETE",\n}\n);\n    \nconsole.log("CLEAR STREAM ACCESS LEVEL", removeApiKey);\n\n    \n} catch (e) {\nconsole.error(e);\n}\n};\n\nrun();\n')))))}b.isMDXComponent=!0}}]);