(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(114)),i={id:"contributing",title:"Contributing",sidebar_label:"Contributing"},c={unversionedId:"contributing",id:"version-6.x/contributing",isDocsHomePage:!1,title:"Contributing",description:"You can easily contribute by cloning react-native-sensitive-info's repository and using our example project to develop new feature or fix opened issues.",source:"@site/versioned_docs/version-6.x/contributing.md",permalink:"/react-native-sensitive-info/docs/contributing",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/versioned_docs/version-6.x/contributing.md",version:"6.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596129524,sidebar_label:"Contributing",sidebar:"version-6.x/someSidebar",previous:{title:"Community Libraries",permalink:"/react-native-sensitive-info/docs/community_libraries"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can easily contribute by cloning react-native-sensitive-info's repository and using our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mCodex/react-native-sensitive-info/tree/master/example"}),"example project")," to develop new feature or fix opened issues."),Object(a.b)("p",null,"To do so, the easiest way is using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/yalc"}),"yalc")," which is a great tool to develop locally. Go to react-native-sensitive-info root folder and run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yalc publish\n")),Object(a.b)("p",null,"After that, go to ",Object(a.b)("inlineCode",{parentName:"p"},"example")," folder and run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yalc add react-native-sensitive-info --yarn\n")),Object(a.b)("p",null,"Then you are ready to build and run the example like a regular React-Native application."))}l.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);