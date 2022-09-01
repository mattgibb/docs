"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43236],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},l=Object.keys(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=o.createContext({}),c=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return o.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,s=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?o.createElement(g,i(i({ref:e},u),{},{components:t})):o.createElement(g,i({ref:e},u))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,i=new Array(l);i[0]=p;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r.mdxType="string"==typeof n?n:a,i[1]=r;for(var c=2;c<l;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(n,e,t){t.d(e,{Z:function(){return i}});var o=t(67294),a=t(34334),l="tabItem_Ymn6";function i(n){var e=n.children,t=n.hidden,i=n.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},e)}},65488:function(n,e,t){t.d(e,{Z:function(){return m}});var o=t(83117),a=t(67294),l=t(34334),i=t(72389),r=t(67392),s=t(7094),c=t(12466),u="tabList__CuJ",d="tabItem_LNqP";function p(n){var e,t,i=n.lazy,p=n.block,m=n.defaultValue,g=n.values,h=n.groupId,f=n.className,y=a.Children.map(n.children,(function(n){if((0,a.isValidElement)(n)&&"value"in n.props)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=g?g:y.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,r.l)(_,(function(n,e){return n.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===m?m:null!=(e=null!=m?m:null==(t=y.find((function(n){return n.props.default})))?void 0:t.props.value)?e:y[0].props.value;if(null!==C&&!_.some((function(n){return n.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+_.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),A=v.tabGroupChoices,N=v.setTabGroupChoices,w=(0,a.useState)(C),S=w[0],T=w[1],E=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var R=A[h];null!=R&&R!==S&&_.some((function(n){return n.value===R}))&&T(R)}var I=function(n){var e=n.currentTarget,t=E.indexOf(e),o=_[t].value;o!==S&&(O(e),T(o),null!=h&&N(h,String(o)))},k=function(n){var e,t=null;switch(n.key){case"ArrowRight":var o,a=E.indexOf(n.currentTarget)+1;t=null!=(o=E[a])?o:E[0];break;case"ArrowLeft":var l,i=E.indexOf(n.currentTarget)-1;t=null!=(l=E[i])?l:E[E.length-1]}null==(e=t)||e.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},_.map((function(n){var e=n.value,t=n.label,i=n.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,key:e,ref:function(n){return E.push(n)},onKeyDown:k,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":S===e})}),null!=t?t:e)}))),i?(0,a.cloneElement)(y.filter((function(n){return n.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(n,e){return(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==S})}))))}function m(n){var e=(0,i.Z)();return a.createElement(p,(0,o.Z)({key:String(e)},n))}},71879:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var o=t(83117),a=t(80102),l=(t(67294),t(3905)),i=t(65488),r=t(85162),s=["components"],c={sidebar_position:2,title:"Geo Spatial Tutorial"},u="Geo Spatial Tutorial",d={unversionedId:"collections/documents/geospatial/tutorial",id:"collections/documents/geospatial/tutorial",title:"Geo Spatial Tutorial",description:"The GeoJSON functionalities in GDN are based on Google\u2019s S2 geospatial index. We support indexing on a subset of the GeoJSON standard, as well as simple latitude-longitude pairs (Non-GeoJSON mode).",source:"@site/docs/collections/documents/geospatial/tutorial.md",sourceDirName:"collections/documents/geospatial",slug:"/collections/documents/geospatial/tutorial",permalink:"/docs/collections/documents/geospatial/tutorial",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/documents/geospatial/tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Geo Spatial Tutorial"},sidebar:"tutorialSidebar",previous:{title:"GeoJSON",permalink:"/docs/collections/documents/geospatial/geojson"},next:{title:"Key-Value Store",permalink:"/docs/collections/keyvalue/"}},p={},m=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"SDK download",id:"sdk-download",level:2},{value:"Code Sample",id:"code-sample",level:2}],g={toc:m};function h(n){var e=n.components,t=(0,a.Z)(n,s);return(0,l.kt)("wrapper",(0,o.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"geo-spatial-tutorial"},"Geo Spatial Tutorial"),(0,l.kt)("p",null,"The GeoJSON functionalities in GDN are based on Google\u2019s S2 geospatial index. We support indexing on a subset of the GeoJSON standard, as well as simple latitude-longitude pairs (Non-GeoJSON mode)."),(0,l.kt)("p",null,"Calculating e.g. the distance between two coordinate tuples or checking whether a coordinate pair is located inside a polygon was possible, but those functions could not benefit by using the geo index optimizations. Those operations need to be as fast as possible to prevent them from being a show stopper."),(0,l.kt)("p",null,"Of course, speed is not everything, so we also want to provide a broader set of geo functionality by integrating full GeoJSON support including ",(0,l.kt)("inlineCode",{parentName:"p"},"Polygons"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Multi-Polygons")," and other geometry primitives."),(0,l.kt)("p",null,"With these functionalities, one can do more complex queries and build e.g. location-aware recommendation engines by combining the graph data model with geo-location aspects or use multiple data models. "),(0,l.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,l.kt)("p",null,"Let's assume your"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tenant name is ",(0,l.kt)("inlineCode",{parentName:"li"},"nemo@nautilus.com")," and"),(0,l.kt)("li",{parentName:"ul"},"User password is ",(0,l.kt)("inlineCode",{parentName:"li"},"xxxxx"),".")),(0,l.kt)("h2",{id:"sdk-download"},"SDK download"),(0,l.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"  pyC8 requires Python 3.5+. Python 3.6 or higher is recommended\n\n  To install pyC8, simply run\n\n      $ pip3 install pyC8\n\n  or, if you prefer to use conda:\n\n      conda install -c conda-forge pyC8\n\n  or pipenv:\n\n      pipenv install --pre pyC8\n\n  Once the installation process is finished, you can begin developing applications in Python.\n"))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  With Yarn or NPM\n\n      yarn add jsc8\n      (or)\n      npm install jsc8\n\n  If you want to use the SDK outside of the current directory, you can also install it globally using the `--global` flag:\n\n      npm install --global jsc8\n\n  From source,\n\n      git clone https://github.com/macrometacorp/jsc8.git\n      cd jsC8\n      npm install\n      npm run dist\n")))),(0,l.kt)("h2",{id:"code-sample"},"Code Sample"),(0,l.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'""" This file is a demo of using Geo Locations on collections """\nimport pprint\nfrom c8 import C8Client\n\n# Variables - Connection\nURL = "gdn.paas.macrometa.io"\nAPI_KEY = "my API key" #Change to my API key\nGEO_FABRIC = "_system"\n\n\n# Variables - DB\ncollection_transit = "transit"\ncollection_shops = "shops"\n\n# Variable - Requests locations\nlatitude2 = 37.3972452334285 # Sunnyvale Elementary School\nlongitude2 = -121.99073796514953 # Sunnyvale Elementary School\n\n# Variables - Data\nshops_data = [\n    { "shop": "Walgreens", "address": "San Jose, CA", "coordinate": [ 37.2333253, -121.6846349 ] },\n    { "shop": "Costco", "address": "San Jose, CA", "coordinate": [ 37.4282724, -121.9066238 ] },\n    { "shop":"Walmart", "address": "San Jose, CA", "coordinate":\n        [ 37.3361905, -121.8905833 ] },\n    { "shop": "Bed Bath & Beyond", "address": "Mountain View, CA", "coordinate":\n        [ 37.4443293, -122.1598465] },\n    { "shop":"Best Buy", "address": "Mountain View, CA", "coordinate":\n        [ 37.35992431640625,-122.06830596923828 ] },\n    { "shop": "Target", "address": "Mountain View, CA", "coordinate":\n        [ 37.4443293, -122.1598465] },\n    { "shop": "Walgreens", "address": "Fremont, CA", "coordinate":\n        [ 37.48849288005677, -121.94342916254486 ] },\n    { "shop": "Costco", "address": "Almeda, CA", "coordinate":\n        [ 37.766039418486855, -122.2430211806723 ] },\n    { "shop": "Sweet Greens", "address": "San Francisco, CA", "coordinate":\n        [ 38.621725, -92.571271 ] }\n ]\n\ntransit_data = [\n    { "bus": "CA123", "stop": "Santa Clara, CA", "coordinate": [ 37.2333253, -121.6846349 ] },\n    { "bus": "CA233", "stop": "Milpitas, CA", "coordinate": [ 37.4282724, -121.9066238 ] },\n    { "bus": "CA433", "stop": "San Jose, CA", "coordinate": [ 37.3361905, -121.8905833 ] },\n    { "bus": "CA323", "stop": "Palo Alto, CA", "coordinate": [ 37.4443293, -122.1598465] },\n    { "bus": "CA523", "stop": "Mountain View, CA", "coordinate":\n        [ 37.35992431640625,-122.06830596923828 ] },\n    { "bus": "CA143", "stop": "Fremont, CA", "coordinate":\n        [ 37.48849288005677, -121.94342916254486 ] },\n    { "bus": "CA423", "stop": "Almeda, CA", "coordinate":\n        [ 37.766039418486855, -122.2430211806723 ] },\n    { "bus": "CA129", "stop": "San Francisco, CA", "coordinate": [ 38.621725, -92.571271 ] }\n]\n\npp = pprint.PrettyPrinter(indent=4)\n\n# Step 1: Open connection to GDN. You will be routed to the closest region.\nprint(f"\\n1. CONNECT: federation: {URL},  user: {API_KEY}")\nclient = C8Client(protocol=\'https\', host=URL, port=443, apikey = API_KEY, geofabric=GEO_FABRIC)\n\n# Step 2: Create a collection and geo index if not exists.\nprint(f"\\n2. CREATE_COLLECTION: region: {URL},  collection: {collection_shops}")\nif client.has_collection(collection_shops):\n    shopCol = client.collection(collection_shops)\nelse:\n    shopCol = client.create_collection(collection_shops)\n    client.add_geo_index(collection_shops, fields=["coordinate"], ordered=False)\n\n# Step 3: Insert data into collection.\nprint(f"\\n3. INSERT_SHOP_DATA: in region: {URL}")\n#shopCol.insert_many(shops_data)\nclient.insert_document(collection_name=collection_shops, document=shops_data)\n\n# Step 3a: Find shops closer to given location.\nlat1 = 37.43007055731992 # McCarthy Blvd, Milpitas\nlong1 = -121.92344167914754 # McCarthy Blvd, Milpitas\nradius = 10 * 1000 # meters\nprint(f"\\n3a. FIND_NEAR_BY_SHOPS for request: ({lat1}, {long1})")\nwithin_query = (f"FOR loc IN WITHIN ({collection_shops}, {lat1}, {long1}, {radius})"\n    f"SORT loc._distance ASC RETURN loc")\ncursor = client.execute_query(within_query)\ndocs = [document for document in cursor]\npp.pprint(docs)\n\n# Step 3b: Find shop closest to given location.\nprint(f"\\n3b. FIND_NEAREST_SHOP for request: ({lat1}, {long1})")\nnear_query = f"FOR loc IN NEAR ({collection_shops}, {lat1}, {long1}, 1) RETURN loc"\ncursor = client.execute_query(near_query)\ndocs = [document for document in cursor]\npp.pprint(docs)\n\n#-------------------------------------------------------------------#\n\n# Step 4: Create a collection and geoindex if none exists.\nprint(f"\\n4. CREATE_COLLECTION: region: {URL},  collection: {collection_transit}")\nif client.has_collection(collection_transit):\n    transitCol = client.collection(collection_transit)\nelse:\n    transitCol = client.create_collection(collection_transit)\n    client.add_geo_index(collection_transit, fields=["coordinate"], ordered=False)\n\n# Step 5: Insert data into collection.\nprint(f"\\n5. INSERT_TRANSIT_DATA: in region: {URL}")\nclient.insert_document(collection_name=collection_transit, document=transit_data)\n\n# Step 6a: Find buses currently within given rectangular fence.\nlat1 = 37.38905593900322\nlong1 = -122.14426630984782\nlat2 = 37.332401582858324\nlong2 = -121.80235913612003\n\nprint(f"\\n6a. FIND_BUSES available within RECTANGULAR fence: ({lat1}, {long1}, {lat2}, {long2})")\nwithin_query = (f"FOR loc IN WITHIN_RECTANGLE("\n    f"{collection_transit}, {lat1}, {long1}, {lat2}, {long2}) RETURN loc")\ncursor = client.execute_query(within_query)\ndocs = [document for document in cursor]\npp.pprint(docs)\n\n# Step 6b: Find shop closest to given location.\nprint(f"\\n6b. FIND_NEAREST_BUS for given location: ({lat1}, {long1})")\nnear_query = f"FOR loc IN NEAR ({collection_transit}, {lat1}, {long1}, 1) RETURN loc"\ncursor = client.execute_query(near_query)\ndocs = [document for document in cursor]\npp.pprint(docs)\n\n#-------------------------------------------------------------------#\n\n# Step 7: Delete data.\nprint(f"\\n7. DELETE_DATA: region: {URL}, collections: {collection_shops}, {collection_transit}")\nshopCol.truncate()\ntransitCol.truncate()\nclient.delete_collection(collection_transit)\nclient.delete_collection(collection_shops)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  \'use strict\'\n\n  const jsc8 = require(\'jsc8\');\n\n  // Variables - DB\n  const global_url = "https://gdn.paas.macrometa.io";\n\n  // Crete a authenticated instance with Token / Apikey\n  // const client = new jsc8({url: global_url, token: "XXXX", fabricName: \'_system\'});\n  // const client = new jsc8({url: global_url, apiKey: "XXXX", fabricName: \'_system\'});\n  // await console.log("Authentication done!!...");\n\n  // Or use Email & Password to Authenticate client instance\n  const client = new jsc8(global_url);\n\n  await client.login("nemo@nautilus.com", "xxxxx");\n\n  //Variables\n  const collection_shops = "shops";\n  const collection_transit = "transit";\n\n  // Variable - Requests locations\n  const latitude2 = 37.3972452334285; // Sunnyvale Elementary School\n  const longitude2 = -121.99073796514953; // Sunnyvale Elementary School\n\n  // Variables - Data\n  const shops_data = [\n    { "shop": "Walgreens", "address": "San Jose, CA", "coordinate": [37.2333253, -121.6846349 ] },\n    { "shop": "Costco", "address": "San Jose, CA", "coordinate": [ 37.4282724,-121.9066238 ] },\n    { "shop":"Walmart", "address": "San Jose, CA", "coordinate": [ 37.3361905,-121.8905833 ] },\n    { "shop": "Bed Bath & Beyond", "address": "Mountain View, CA","coordinate": [ 37.4443293, -122.1598465] },\n    { "shop":"Best Buy", "address": "Mountain View, CA", "coordinate": [37.35992431640625,-122.06830596923828 ] },\n    { "shop": "Target", "address": "Mountain View, CA", "coordinate": [37.4443293, -122.1598465] },\n    { "shop": "Walgreens", "address": "Fremont, CA", "coordinate": [37.48849288005677, -121.94342916254486 ] },\n    { "shop": "Costco", "address": "Almeda, CA", "coordinate": [37.766039418486855, -122.2430211806723 ] },\n    { "shop": "Sweet Greens", "address": "San Francisco, CA", "coordinate": [38.621725, -92.571271 ] }\n  ];\n\n  const transit_data = [\n    { "bus": "CA123", "stop": "Santa Clara, CA", "coordinate": [ 37.2333253,-121.6846349 ] },\n    { "bus": "CA233", "stop": "Milpitas, CA", "coordinate": [ 37.4282724,-121.9066238 ] },\n    { "bus": "CA433", "stop": "San Jose, CA", "coordinate": [ 37.3361905,-121.8905833 ] },\n    { "bus": "CA323", "stop": "Palo Alto, CA", "coordinate": [ 37.4443293,-122.1598465] },\n    { "bus": "CA523", "stop": "Mountain View, CA", "coordinate": [37.35992431640625,-122.06830596923828 ] },\n    { "bus": "CA143", "stop": "Fremont, CA", "coordinate": [ 37.48849288005677 -121.94342916254486 ] },\n    { "bus": "CA423", "stop": "Almeda, CA", "coordinate": [ 37.766039418486855 -122.2430211806723 ] },\n    { "bus": "CA129", "stop": "San Francisco, CA", "coordinate": [ 38.621725,-92.571271 ] }\n  ];\n\n  async function createCollection() {\n    console.log("\\n 2. CREATE_COLLECTIONS");\n\n    try{\n      console.log("Creating the collection shops...");\n        const exists_shops = await client.hasCollection(collection_shops);\n        if (exists_shops === false) {\n              await client.createCollection(collection_shops)\n              await client.addGeoIndex(collection_shops, [\'coordinate\'],{geoJson : false});\n        }\n\n        console.log("Creating the collection transit...");\n        const exists_transit = await client.hasCollection(collection_transit);\n        if (exists_transit === false) {\n              await client.createCollection(collection_transit)\n              await client.addGeoIndex(collection_transit, [\'coordinate\'],{geoJson : false});\n        }\n    }\n    catch (e) {\n      await console.log("Collection creation did not succeed due to " + e);\n    }\n  }\n\n  async function insertData(shops_data, transit_data) {\n    console.log(`\\n 3a. INSERT_SHOP_DATA in region ${global_url}`);\n    await client.insertDocumentMany(collection_shops, shops_data);\n\n    console.log(`\\n 3b. INSERT_TRANSIT_DATA in region ${global_url}`);\n    await client.insertDocumentMany(collection_transit, transit_data);\n  }\n\n  async function deleteData(){\n    console.log("\\n 5. DELETE_DATA");\n    await client.deleteCollection(collection_shops);\n    await client.deleteCollection(collection_transit);\n  }\n\n  async function findData(){\n    console.log("\\n 4. FIND_DATA");\n\n    // Find shops closer to given location\n    let lat1 = 37.43007055731992; // McCarthy Blvd, Milpitas\n    let long1 = -121.92344167914754; // McCarthy Blvd, Milpitas\n    let radius = 10 * 1000; // meters\n    console.log(`\\n 4a. FIND_NEAR_BY_SHOPS for request: (${lat1}, ${long1})`);\n    let within_query = `FOR loc IN WITHIN (${collection_shops}, ${lat1}, ${long1}, ${radius\n    }) SORT loc._distance ASC RETURN loc`;\n    let result = await client.executeQuery(within_query);\n    console.log(result);\n\n    // Find shop closest to given location\n    console.log(`\\n 4b. FIND_NEAREST_SHOP for request: (${lat1}, ${long1})`);\n    let near_query = `FOR loc IN NEAR (${collection_shops}, ${lat1}, ${long1}, 1) RETURN loc`;\n    result = await client.executeQuery(near_query);\n    console.log(result);\n    \n    // Find buses currently within given rectangular fence\n    lat1 = 37.38905593900322; \n    long1 = -122.14426630984782; \n    let lat2 = 37.332401582858324; \n    let long2 = -121.80235913612003; \n\n    console.log(`\\n 4c. FIND_BUSES available within RECTANGULAR fence: (${lat1}, ${long1}, ${lat2}, ${long2}) sorted by distance`);\n    \n    within_query = `FOR loc IN WITHIN_RECTANGLE (${collection_transit}, ${lat1}, ${long1}, ${lat2}, ${long2}) SORT loc._distance ASC RETURN loc`;\n    result = await client.executeQuery(within_query);\n    console.log(result);  \n\n  // Find Bus closest to given location\n    console.log(`\\n 4d. FIND_NEAREST_BUS for given location: (${lat1}, ${long1})`);\n    near_query = `FOR loc IN NEAR (${collection_transit}, ${lat1}, ${long1}, 1) RETURN loc`;\n    result = await client.executeQuery(near_query);\n    console.log(result); \n  }\n\n  (async function() {\n    await createCollection();\n    await insertData(shops_data, transit_data);\n    await findData();\n    await deleteData();\n  })();\n')))))}h.isMDXComponent=!0}}]);