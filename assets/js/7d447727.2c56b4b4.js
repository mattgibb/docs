"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20949],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:9,title:"Search Functions"},s=void 0,p={unversionedId:"c8ql/functions/search",id:"c8ql/functions/search",title:"Search Functions",description:"Most Search C8QL functions take an expression or attribute path expression as argument.",source:"@site/docs/c8ql/functions/search.md",sourceDirName:"c8ql/functions",slug:"/c8ql/functions/search",permalink:"/docs/c8ql/functions/search",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/functions/search.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Search Functions"},sidebar:"tutorialSidebar",previous:{title:"Fulltext Functions",permalink:"/docs/c8ql/functions/fulltext"},next:{title:"Miscellaneous Functions",permalink:"/docs/c8ql/functions/miscellaneous"}},m={},u=[{value:"Search Functions",id:"search-functions",level:2},{value:"ANALYZER()",id:"analyzer",level:3},{value:"BOOST()",id:"boost",level:3},{value:"EXISTS()",id:"exists",level:3},{value:"IN_RANGE()",id:"in_range",level:3},{value:"MIN_MATCH()",id:"min_match",level:3},{value:"PHRASE()",id:"phrase",level:3},{value:"STARTS_WITH()",id:"starts_with",level:3},{value:"TOKENS()",id:"tokens",level:3},{value:"Scoring Functions",id:"scoring-functions",level:2},{value:"BM25()",id:"bm25",level:3},{value:"TFIDF()",id:"tfidf",level:3}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Most Search C8QL functions take an expression or attribute path expression as argument."),(0,i.kt)("p",null,"If an expression is expected, it means that search conditions can expressed in C8QL syntax. They are typically function calls to Search search functions, possibly nested and/or using logical operators for multiple conditions."),(0,i.kt)("p",null,"You need the ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()")," function to wrap search (sub-)expressions to set the Analyzer for it, unless you want to use the default ",(0,i.kt)("inlineCode",{parentName:"p"},'"identity"')," Analyzer. You might not need other Search functions for certain expressions, because comparisons can be done with basic C8QL comparison operators."),(0,i.kt)("p",null,"If an attribute path expressions is needed, then you have to reference a document object emitted by a View like ",(0,i.kt)("inlineCode",{parentName:"p"},"FOR doc IN viewName")," and the specify which attribute you want to test for. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"doc.attr")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"doc.deeply.nested.attr"),". You can also use the bracket notation ",(0,i.kt)("inlineCode",{parentName:"p"},'doc["attr"]'),"."),(0,i.kt)("h2",{id:"search-functions"},"Search Functions"),(0,i.kt)("p",null,"Search functions can be used in a ",(0,i.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/search"},"SEARCH operation")," to form an Search expression to filter a View. The functions control the Search functionality without having a returnable value in C8QL."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKENS()")," function is an exception. It can be used standalone as well, without a ",(0,i.kt)("inlineCode",{parentName:"p"},"SEARCH")," statement, and has a return value which can be used elsewhere in the query."),(0,i.kt)("h3",{id:"analyzer"},"ANALYZER()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER(expr, analyzer)")),(0,i.kt)("p",null,"Sets the Analyzer for the given search expression. The default Analyzer is ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," for any Search expression. This utility function can be used to wrap a complex expression to set a particular Analyzer. It also sets it for all the nested functions which require such an argument to avoid repeating the Analyzer parameter. If an Analyzer argument is passed to a nested function regardless, then it takes precedence over the Analyzer set via ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKENS()")," function is an exception, it requires the Analyzer name to be passed in all cases even if wrapped in an ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()")," call."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expr")," (expression): any valid search expression"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"analyzer")," (string): name of an Analyzer."),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"/docs/c8ql/operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("p",null,"Assuming a View definition with an Analyzer whose name and type is ",(0,i.kt)("inlineCode",{parentName:"p"},"delimiter"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "links": {\n    "coll": {\n      "analyzers": [ "delimiter" ],\n      "includeAllFields": true,\n    }\n  },\n  ...\n}\n')),(0,i.kt)("p",null,"\u2026 with the Analyzer properties ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "delimiter": "|" }')," and an example document ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "foo|bar|baz" }')," in the collection ",(0,i.kt)("inlineCode",{parentName:"p"},"coll"),", the following query would return the document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(doc.text == "bar", "delimiter")\n  RETURN doc\n')),(0,i.kt)("p",null,"The expression ",(0,i.kt)("inlineCode",{parentName:"p"},'doc.text == "bar"')," has to be wrapped by ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()")," in order to set the Analyzer to ",(0,i.kt)("inlineCode",{parentName:"p"},"delimiter"),". Otherwise the expression would be evaluated with the default ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," Analyzer. ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo|bar|baz" == "bar"')," would not match, but the View does not even process the indexed fields with the ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," Analyzer. The following query would also return an empty result because of the Analyzer mismatch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH doc.text == "foo|bar|baz"\n  //SEARCH ANALYZER(doc.text == "foo|bar|baz", "identity")\n  RETURN doc\n')),(0,i.kt)("p",null,"In below query, the search expression is swapped by ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()")," to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"text_en")," Analyzer for both ",(0,i.kt)("inlineCode",{parentName:"p"},"PHRASE()")," functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(PHRASE(doc.text, "foo") OR PHRASE(doc.text, "bar"), "text_en")\n  RETURN doc\n')),(0,i.kt)("p",null,"Without the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH PHRASE(doc.text, "foo", "text_en") OR PHRASE(doc.text, "bar", "text_en")\n  RETURN doc\n')),(0,i.kt)("p",null,"In the following example ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()")," is used to set the Analyzer ",(0,i.kt)("inlineCode",{parentName:"p"},"text_en"),", but in the second call to ",(0,i.kt)("inlineCode",{parentName:"p"},"PHRASE()")," a different Analyzer is set (",(0,i.kt)("inlineCode",{parentName:"p"},"identity"),") which overrules ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()"),". Therefore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"text_en")," Analyzer is used to find the phrase ",(0,i.kt)("em",{parentName:"p"},"foo")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," Analyzer to find ",(0,i.kt)("em",{parentName:"p"},"bar"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(PHRASE(doc.text, "foo") OR PHRASE(doc.text, "bar", "identity"), "text_en")\n  RETURN doc\n')),(0,i.kt)("p",null,"Despite the wrapping ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()")," function, the Analyzer name can not be omitted in calls to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKENS()")," function. Both occurrences of ",(0,i.kt)("inlineCode",{parentName:"p"},"text_en")," are required, to set the Analyzer for the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"doc.text IN ...")," and for the ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKENS()")," function itself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(doc.text IN TOKENS("foo", "text_en"), "text_en")\n  RETURN doc\n')),(0,i.kt)("h3",{id:"boost"},"BOOST()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BOOST(expr, boost)")),(0,i.kt)("p",null,"Override boost in the context of a search expression with a specified value, making it available for scorer functions. By default, the context has a boost value equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expr")," (expression): any valid search expression"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"boost")," (number): numeric boost value"),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"../operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(BOOST(doc.text == "foo", 2.5) OR doc.text == "bar", "text_en")\n  LET score = BM25(doc)\n  SORT score DESC\n  RETURN { text: doc.text, score }\n')),(0,i.kt)("p",null,"Assuming a View with the following documents indexed and processed by the\n",(0,i.kt)("inlineCode",{parentName:"p"},"text_en")," Analyzer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{ "text": "foo bar" }\n{ "text": "foo" }\n{ "text": "bar" }\n{ "text": "foo baz" }\n{ "text": "baz" }\n')),(0,i.kt)("p",null,"\u2026 the result of above query would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "text": "foo bar",\n    "score": 2.787301540374756\n  },\n  {\n    "text": "foo baz",\n    "score": 1.6895781755447388\n  },\n  {\n    "text": "foo",\n    "score": 1.525835633277893\n  },\n  {\n    "text": "bar",\n    "score": 0.9913395643234253\n  }\n]\n')),(0,i.kt)("h3",{id:"exists"},"EXISTS()"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"EXISTS()")," will only match values when the specified attribute has been processed with the link property ",(0,i.kt)("strong",{parentName:"p"},"storeValues")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"id"')," in the View definition (the default is ",(0,i.kt)("inlineCode",{parentName:"p"},'"none"'),").")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EXISTS(path)")),(0,i.kt)("p",null,"Match documents where the attribute at ",(0,i.kt)("strong",{parentName:"p"},"path")," is present."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"path")," (attribute path expression): the attribute to test in the document"),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"../operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH EXISTS(doc.text)\n  RETURN doc\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EXISTS(path, type)")),(0,i.kt)("p",null,"Match documents where the attribute at ",(0,i.kt)("strong",{parentName:"p"},"path")," is present ",(0,i.kt)("em",{parentName:"p"},"and")," is of the specified data type."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"path")," (attribute path expression): the attribute to test in the document"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," (string): data type to test for, can be one of:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"null"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"bool"')," / ",(0,i.kt)("inlineCode",{parentName:"li"},'"boolean"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"numeric"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"string"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"analyzer"')," (see below)"))),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"../operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH EXISTS(doc.text, "string")\n  RETURN doc\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'EXISTS(path, "analyzer", analyzer)')),(0,i.kt)("p",null,"Match documents where the attribute at ",(0,i.kt)("strong",{parentName:"p"},"path")," is present ",(0,i.kt)("em",{parentName:"p"},"and")," was indexed by the specified ",(0,i.kt)("strong",{parentName:"p"},"analyzer"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"path")," (attribute path expression): the attribute to test in the document"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," (string): string literal ",(0,i.kt)("inlineCode",{parentName:"li"},'"analyzer"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"analyzer")," (string, ",(0,i.kt)("em",{parentName:"li"},"optional"),"): name of an ",(0,i.kt)("a",{parentName:"li",href:"/docs/search/analyzers"},"Analyzer"),". Uses the Analyzer of a wrapping ",(0,i.kt)("inlineCode",{parentName:"li"},"ANALYZER()")," call if not specified or defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},'"identity"')),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"../operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH EXISTS(doc.text, "analyzer", "text_en")\n  RETURN doc\n')),(0,i.kt)("h3",{id:"in_range"},"IN_RANGE()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IN_RANGE(path, low, high, includeLow, includeHigh)")),(0,i.kt)("p",null,"Match documents where the attribute at ",(0,i.kt)("strong",{parentName:"p"},"path")," is greater than (or equal to) ",(0,i.kt)("strong",{parentName:"p"},"low")," and less than (or equal to) ",(0,i.kt)("strong",{parentName:"p"},"high"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"low")," and ",(0,i.kt)("em",{parentName:"p"},"high")," can be numbers or strings (technically also ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"), but the data type must be the same for both."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The alphabetical order of characters is not taken into account by Search, i.e. range queries in SEARCH operations against Views will not follow the language rules as per the defined Analyzer locale.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"path")," (attribute path expression): the path of the attribute to test in the document"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"low")," (number","|","string): minimum value of the desired range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"high")," (number","|","string): maximum value of the desired range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"includeLow")," (bool): whether the minimum value shall be included in the range (left-closed interval) or not (left-open interval)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"includeHigh")," (bool): whether the maximum value shall be included in the range (right-closed interval) or not (right-open interval)"),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"../operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("p",null,"If ",(0,i.kt)("em",{parentName:"p"},"low")," and ",(0,i.kt)("em",{parentName:"p"},"high")," are the same, but ",(0,i.kt)("em",{parentName:"p"},"includeLow")," and/or ",(0,i.kt)("em",{parentName:"p"},"includeHigh")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", then nothing will match. If ",(0,i.kt)("em",{parentName:"p"},"low")," is greater than ",(0,i.kt)("em",{parentName:"p"},"high")," nothing will match either."),(0,i.kt)("p",null,"To match documents with the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"value >= 3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value <= 5")," using the default ",(0,i.kt)("inlineCode",{parentName:"p"},'"identity"')," Analyzer you would write the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH IN_RANGE(doc.value, 3, 5, true, true)\n  RETURN doc.value\n")),(0,i.kt)("p",null,"This will also match documents which have an array of numbers as ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," attribute where at least one of the numbers is in the specified boundaries."),(0,i.kt)("p",null,"Using string boundaries and a text Analyzer allows to match documents which have at least one token within the specified character range:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN valView\n  SEARCH ANALYZER(IN_RANGE(doc.value, "a","f", true, false), "text_en")\n  RETURN doc\n')),(0,i.kt)("p",null,"This will match ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "value": "bar" }')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "value": "foo bar" }')," because the ",(0,i.kt)("em",{parentName:"p"},"b")," of ",(0,i.kt)("em",{parentName:"p"},"bar")," is in the range (",(0,i.kt)("inlineCode",{parentName:"p"},'"a" <= "b" < "f"'),"), but not ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "value": "foo" }')," because the ",(0,i.kt)("em",{parentName:"p"},"f")," of ",(0,i.kt)("em",{parentName:"p"},"foo")," is excluded (",(0,i.kt)("em",{parentName:"p"},"high"),' is "f" but ',(0,i.kt)("em",{parentName:"p"},"includeHigh")," is false)."),(0,i.kt)("h3",{id:"min_match"},"MIN_MATCH()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MIN_MATCH(expr1, ... exprN, minMatchCount)")),(0,i.kt)("p",null,"Match documents where at least ",(0,i.kt)("strong",{parentName:"p"},"minMatchCount")," of the specified search expressions are satisfied."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expr")," (expression, ",(0,i.kt)("em",{parentName:"li"},"repeatable"),"): any valid search expression"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minMatchCount")," (number): minimum number of search expressions that should be satisfied"),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"../operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("p",null,"Assuming a View with a text Analyzer, you may use it to match documents where the attribute contains at least two out of three tokens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH ANALYZER(MIN_MATCH(doc.text == 'quick', doc.text == 'brown', doc.text == 'fox', 2), \"text_en\")\n  RETURN doc.text\n")),(0,i.kt)("p",null,"This will match ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "the quick brown fox" }')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "some brown fox" }'),", but not ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "snow fox" }')," which only fulfills one of the conditions."),(0,i.kt)("h3",{id:"phrase"},"PHRASE()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PHRASE(path, phrasePart, analyzer)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PHRASE(path, phrasePart1, skipTokens1, ... phrasePartN, skipTokensN, analyzer)")),(0,i.kt)("p",null,"Search for a phrase in the referenced attribute. It only matches documents in which the tokens appear in the specified order. To search for tokens in any order use ",(0,i.kt)("a",{parentName:"p",href:"#tokens"},"TOKENS()")," instead."),(0,i.kt)("p",null,"The phrase can be expressed as an arbitrary number of ",(0,i.kt)("em",{parentName:"p"},"phraseParts")," separated by ",(0,i.kt)("em",{parentName:"p"},"skipTokens")," number of tokens (wildcards)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"path")," (attribute path expression): the attribute to test in the document"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"phrasePart")," (string): text to search for in the tokens. May consist of several words/tokens, which will be split using the specified ",(0,i.kt)("em",{parentName:"li"},"analyzer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"skipTokens")," (number, ",(0,i.kt)("em",{parentName:"li"},"optional"),"): amount of words/tokens to treat\nas wildcards"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"analyzer")," (string, ",(0,i.kt)("em",{parentName:"li"},"optional"),"): name of an ",(0,i.kt)("a",{parentName:"li",href:"/docs/search/analyzers"},"Analyzer"),". Uses the Analyzer of a wrapping ",(0,i.kt)("inlineCode",{parentName:"li"},"ANALYZER()")," call if not specified or defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},'"identity"')),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"../operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("p",null,"Given a View indexing an attribute ",(0,i.kt)("em",{parentName:"p"},"text")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},'"text_en"')," Analyzer and a document ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }'),", the following query would match it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH PHRASE(doc.text, "lorem ipsum", "text_en")\n  RETURN doc.text\n')),(0,i.kt)("p",null,"However, this search expression does not because the tokens ",(0,i.kt)("inlineCode",{parentName:"p"},'"ipsum"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"lorem"')," do not appear in this order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PHRASE(doc.text, "ipsum lorem", "text_en")\n')),(0,i.kt)("p",null,"To match ",(0,i.kt)("inlineCode",{parentName:"p"},'"ipsum"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"amet"')," with any two tokens in between, you can use the\nfollowing search expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PHRASE(doc.text, "ipsum", 2, "amet", "text_en")\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"skipTokens")," value of ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," defines how many wildcard tokens have to appear between ",(0,i.kt)("em",{parentName:"p"},"ipsum")," and ",(0,i.kt)("em",{parentName:"p"},"amet"),". A ",(0,i.kt)("em",{parentName:"p"},"skipTokens")," value of ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," means that the tokens must be adjacent. Negative values are allowed, but not very useful. These three search expressions are equivalent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PHRASE(doc.text, "lorem ipsum", "text_en")\nPHRASE(doc.text, "lorem", 0, "ipsum", "text_en")\nPHRASE(doc.text, "ipsum", -1, "lorem", "text_en")\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PHRASE(path, [ phrasePart1, skipTokens1, ... phrasePartN, skipTokensN ], analyzer)")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PHRASE()")," function also accepts an array as second argument with ",(0,i.kt)("em",{parentName:"p"},"phrasePart")," and ",(0,i.kt)("em",{parentName:"p"},"skipTokens")," parameters as elements. This syntax variation enables the usage of computed expressions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'LET proximityCondition = [ "foo", ROUND(RAND()*10), "bar" ]\nFOR doc IN viewName\n  SEARCH PHRASE(doc.text, proximityCondition, "text_en")\n  RETURN doc\n')),(0,i.kt)("h3",{id:"starts_with"},"STARTS_WITH()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"STARTS_WITH(path, prefix)")),(0,i.kt)("p",null,"Match the value of the attribute that starts with ",(0,i.kt)("strong",{parentName:"p"},"prefix"),". If the attribute is processed by a tokenizing Analyzer (type ",(0,i.kt)("inlineCode",{parentName:"p"},'"text"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"delimiter"'),") or if it is an array, then a single token/element starting with the prefix is sufficient to match the document."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The alphabetical order of characters is not taken into account by Search, i.e. range queries in SEARCH operations against Views will not follow the language rules as per the defined Analyzer locale.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"path")," (attribute path expression): the path of the attribute to compare against in the document"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prefix")," (string): a string to search at the start of the text"),(0,i.kt)("li",{parentName:"ul"},"returns nothing: the function can only be called in a ",(0,i.kt)("a",{parentName:"li",href:"../operations/search"},"SEARCH operation")," and throws an error otherwise")),(0,i.kt)("p",null,"To match a document ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "lorem ipsum..." }')," using a prefix and the ",(0,i.kt)("inlineCode",{parentName:"p"},'"identity"')," Analyzer you can use it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH STARTS_WITH(doc.text, "lorem ip")\n  RETURN doc\n')),(0,i.kt)("p",null,"This query will match ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "lorem ipsum" }')," as well as ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": [ "lorem", "ipsum" ] }')," given a View which indexes the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," attribute and processes it with the ",(0,i.kt)("inlineCode",{parentName:"p"},'"text_en"')," Analyzer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(STARTS_WITH(doc.text, "ips"), "text_en")\n  RETURN doc.text\n')),(0,i.kt)("p",null,"Note that it will not match ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "IPS (in-plane switching)" }')," because the Analyzer has stemming enabled, but the prefix was passed in as-is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'RETURN TOKENS("IPS (in-plane switching)", "text_en")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    "ip",\n    "in",\n    "plane",\n    "switch"\n  ]\n]\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"s")," is removed from ",(0,i.kt)("em",{parentName:"p"},"ips"),", which leads to the prefix ",(0,i.kt)("em",{parentName:"p"},"ips")," not matching the indexed token ",(0,i.kt)("em",{parentName:"p"},"ip"),". You may either create a custom text Analyzer with stemming disabled to avoid this issue, or apply stemming to the prefix:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(STARTS_WITH(doc.text, TOKENS("ips", "text_en")[0]), "text_en")\n  RETURN doc.text\n')),(0,i.kt)("h3",{id:"tokens"},"TOKENS()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TOKENS(input, analyzer) \u2192 tokenArray")),(0,i.kt)("p",null,"Split the ",(0,i.kt)("strong",{parentName:"p"},"input")," string with the help of the specified ",(0,i.kt)("strong",{parentName:"p"},"analyzer")," into an array. The resulting array can be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"FILTER")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"SEARCH")," statements with the ",(0,i.kt)("inlineCode",{parentName:"p"},"IN")," operator, but also be assigned to variables and returned. This can be used to better understand how a specific Analyzer processes an input value."),(0,i.kt)("p",null,"It has a regular return value unlike all other Search C8QL functions and is thus not limited to ",(0,i.kt)("inlineCode",{parentName:"p"},"SEARCH")," operations. It is independent of Views. A wrapping ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZER()")," call in a search expression does not affect the ",(0,i.kt)("em",{parentName:"p"},"analyzer")," argument nor allow you to omit it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"input")," (string): text to tokenize"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"analyzer")," (string): name of an ",(0,i.kt)("a",{parentName:"li",href:"/docs/search/analyzers"},"Analyzer"),"."),(0,i.kt)("li",{parentName:"ul"},"returns ",(0,i.kt)("strong",{parentName:"li"},"tokenArray")," (array): array of strings with zero or more elements, each element being a token.")),(0,i.kt)("p",null,"Example query showcasing the ",(0,i.kt)("inlineCode",{parentName:"p"},'"text_de"')," Analyzer (tokenization with stemming, case conversion and accent removal for German text):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'RETURN TOKENS("L\xf6rem ips\xfcm, DOLOR SIT \xc4met.", "text_de")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    "lor",\n    "ipsum",\n    "dolor",\n    "sit",\n    "amet"\n  ]\n]\n')),(0,i.kt)("p",null,"To search a View for documents where the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," attribute contains certain words/tokens in any order, you can use the function like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(doc.text IN TOKENS("dolor amet lorem", "text_en"), "text_en")\n  RETURN doc\n')),(0,i.kt)("p",null,"It will match ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "text": "Lorem ipsum, dolor sit amet." }')," for instance. If you want to search for tokens in a particular order, use ",(0,i.kt)("a",{parentName:"p",href:"#phrase"},"PHRASE()")," instead."),(0,i.kt)("h2",{id:"scoring-functions"},"Scoring Functions"),(0,i.kt)("p",null,"Scoring functions return a ranking value for the documents found by a ",(0,i.kt)("a",{parentName:"p",href:"../operations/search"},"SEARCH operation"),". The better the documents match the search expression the higher the returned number."),(0,i.kt)("p",null,"The first argument to any scoring function is always the document emitted by a ",(0,i.kt)("inlineCode",{parentName:"p"},"FOR")," operation over an Search View."),(0,i.kt)("p",null,"To sort the result set by relevance, with the more relevant documents coming first, sort in ",(0,i.kt)("strong",{parentName:"p"},"descending order")," by the score (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"SORT BM25(...) DESC"),")."),(0,i.kt)("p",null,"You may calculate custom scores based on a scoring function using document attributes and numeric functions (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"TFIDF(doc) * LOG(doc.value)"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR movie IN imdbView\n  SEARCH PHRASE(movie.title, "Star Wars", "text_en")\n  SORT BM25(movie) * LOG(movie.runtime + 1) DESC\n  RETURN movie\n')),(0,i.kt)("p",null,"Sorting by more than one score is allowed. You may also sort by a mix of scores and attributes from multiple Views as well as collections:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR a IN viewA\n  FOR c IN coll\n    FOR b IN viewB\n      SORT TFIDF(b), c.name, BM25(a)\n      ...\n")),(0,i.kt)("h3",{id:"bm25"},"BM25()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BM25(doc, k, b) \u2192 score")),(0,i.kt)("p",null,"Sorts documents using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Okapi_BM25"},(0,i.kt)("strong",{parentName:"a"},"Best Matching 25")," algorithm"),'{:target="_blank"} (BM25).'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"doc")," (document): must be emitted by ",(0,i.kt)("inlineCode",{parentName:"li"},"FOR ... IN viewName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"k")," (number, ",(0,i.kt)("em",{parentName:"li"},"optional"),"): calibrates the text term frequency scaling. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"1.2"),". A ",(0,i.kt)("em",{parentName:"li"},"k")," value of ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," corresponds to a binary model (no term frequency), and a large value corresponds to using raw term frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"b")," (number, ",(0,i.kt)("em",{parentName:"li"},"optional"),"): determines the scaling by the total text length. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"0.75"),". At the extreme values of the coefficient ",(0,i.kt)("em",{parentName:"li"},"b"),", BM25 turns into the ranking functions known as:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"BM11 for ",(0,i.kt)("em",{parentName:"li"},"b")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," (corresponds to fully scaling the term weight by the total text length)"),(0,i.kt)("li",{parentName:"ul"},"BM15 for ",(0,i.kt)("em",{parentName:"li"},"b")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," (corresponds to no length normalization)"))),(0,i.kt)("li",{parentName:"ul"},"returns ",(0,i.kt)("strong",{parentName:"li"},"score")," (number): computed ranking value")),(0,i.kt)("p",null,"Sorting by relevance with BM25 at default settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH ...\n  SORT BM25(doc) DESC\n  RETURN doc\n")),(0,i.kt)("p",null,"Sorting by relevance, with double-weighted term frequency and with full text length normalization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH ...\n  SORT BM25(doc, 2.4, 1) DESC\n  RETURN doc\n")),(0,i.kt)("h3",{id:"tfidf"},"TFIDF()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TFIDF(doc, normalize) \u2192 score")),(0,i.kt)("p",null,"Sorts documents using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/TF-IDF"},(0,i.kt)("strong",{parentName:"a"},"term frequency\u2013inverse document frequency")," algorithm"),'{:target="_blank"} (TF-IDF).'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"doc")," (document): must be emitted by ",(0,i.kt)("inlineCode",{parentName:"li"},"FOR ... IN viewName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"normalize")," (bool, ",(0,i.kt)("em",{parentName:"li"},"optional"),"): specifies whether scores should be normalized. The default is ",(0,i.kt)("em",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},"returns ",(0,i.kt)("strong",{parentName:"li"},"score")," (number): computed ranking value")),(0,i.kt)("p",null,"Sort by relevance using the TF-IDF score:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH ...\n  SORT TFIDF(doc) DESC\n  RETURN doc\n")),(0,i.kt)("p",null,"Sort by relevance using a normalized TF-IDF score:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH ...\n  SORT TFIDF(doc, true) DESC\n  RETURN doc\n")),(0,i.kt)("p",null,"Sort by the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," attribute in ascending order, then by the TFIDF score in descending order where the attribute values are equivalent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH ...\n  SORT doc.text, TFIDF(doc) DESC\n  RETURN doc\n")))}d.isMDXComponent=!0}}]);