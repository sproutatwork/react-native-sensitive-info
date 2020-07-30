(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{101:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(2),i=r(6),o=(r(0),r(114)),a={id:"hasEnrolledFingerprints",title:"hasEnrolledFingerprints",sidebar_label:"hasEnrolledFingerprints"},s={unversionedId:"hasEnrolledFingerprints",id:"version-5.x/hasEnrolledFingerprints",isDocsHomePage:!1,title:"hasEnrolledFingerprints",description:"Checks the enrollment status of fingerprints on the device (Android only).",source:"@site/versioned_docs/version-5.x/hasEnrolledFingerprints.md",permalink:"/react-native-sensitive-info/docs/5.x/hasEnrolledFingerprints",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/versioned_docs/version-5.x/hasEnrolledFingerprints.md",version:"5.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596129524,sidebar_label:"hasEnrolledFingerprints",sidebar:"version-5.x/someSidebar",previous:{title:"getItem",permalink:"/react-native-sensitive-info/docs/5.x/getItem"},next:{title:"isSensorAvailable",permalink:"/react-native-sensitive-info/docs/5.x/isSensorAvailable"}},l=[],c={rightToc:l};function p(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Checks the enrollment status of fingerprints on the device ",Object(o.b)("strong",{parentName:"p"},"(Android only)"),". "),Object(o.b)("p",null,"It will return ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if detected otherwise returns ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"hasEnrolledFingerprints(): Promise<boolean>\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"import RNSInfo from 'react-native-sensitive-info';\n\nSINFo.hasEnrolledFingerprints();\n")))}p.isMDXComponent=!0},114:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return r?i.a.createElement(f,s(s({ref:n},c),{},{components:r})):i.a.createElement(f,s({ref:n},c))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);