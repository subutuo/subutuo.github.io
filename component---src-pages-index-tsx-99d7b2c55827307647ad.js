(self.webpackChunkyj_blog=self.webpackChunkyj_blog||[]).push([[691],{4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},9230:function(e,t,r){"use strict";r.d(t,{G:function(){return T},L:function(){return p},M:function(){return x},P:function(){return w},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return s}});var n=r(7294),a=(r(4811),r(5697)),i=r.n(a);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function u(e,t,r,n,a,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,f=["children"],g=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,r=l(e,f);return n.createElement(n.Fragment,null,n.createElement(g,o({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,a=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,m);return n.createElement("img",o({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},y=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,c=l(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(v,o({},c,t,{sizes:u,shouldLoad:s}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=l(e,b);return t?n.createElement(y,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var x=function(e){return n.createElement(n.Fragment,null,n.createElement(y,o({},e)),n.createElement("noscript",null,n.createElement(y,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;var E,C,I=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:I},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],z=new Set,S=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,f=e.class,g=e.onStartLoad,p=e.onLoad,m=e.onError,h=l(e,_),v=i.width,y=i.height,b=i.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(v,y,b),x=w.style,I=w.className,k=l(w,L),S=(0,n.useRef)(),T=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);f&&(d=f);var N=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,v,y);return(0,n.useEffect)((function(){E||(E=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=S.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void z.add(T)):C&&z.has(T)?void 0:(E.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;S.current.innerHTML=n(o({isLoading:!0,isLoaded:z.has(T),image:i},h)),z.has(T)||(e=requestAnimationFrame((function(){S.current&&(t=a(S.current,T,z,c,g,p,m))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){z.has(T)&&C&&(S.current.innerHTML=C(o({isLoading:z.has(T),isLoaded:z.has(T),image:i},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,n.createElement)(a,o({},k,{style:o({},x,c,{backgroundColor:u}),className:I+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},T=(0,n.memo)((function(e){return e.image?(0,n.createElement)(S,e):null}));T.propTypes=k,T.displayName="GatsbyImage";var N,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],j=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:I,width:j,height:j,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},Z=(N=T,function(e){var t=e.src,r=e.__imageData,a=e.__error,i=l(e,O);return a&&console.warn(a),r?n.createElement(N,o({image:r},i)):(console.warn("Image not loaded",t),null)});Z.displayName="StaticImage",Z.propTypes=R},2474:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(5785),a=r(7294),i=r(1074),o=r(9738),l=r(3070),s=r(4478),c=r(1597),u=r(6877),d=r(8981),f=r(9230),g=function(e){var t=e.src,r=e.alt,n=(0,c.useStaticQuery)("48878111"),i=(0,a.useMemo)((function(){var e=n.allImageSharp.edges.find((function(e){return e.node.id===t}));return null==e?void 0:e.node.gatsbyImageData}),[t,n.allImageSharp.edges]);return a.createElement(p,null,a.createElement(m,null,a.createElement(f.G,{image:i,loading:"eager",alt:null!=r?r:"Thumbnail Image"})))},p=i.default.div.withConfig({displayName:"centeredImg__ThumbnailWrapper",componentId:"sc-12jclve-0"})(['position:relative;width:100%;&::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}']),m=i.default.div.withConfig({displayName:"centeredImg__InnerWrapper",componentId:"sc-12jclve-1"})(["overflow:hidden;"]),h=a.memo(g),v=function(e){var t=e.thumbnail,r=e.alt,n=e.category,i=e.title,o=e.desc,l=e.date;return a.createElement(y,null,a.createElement(h,{src:t,alt:r}),a.createElement(b,null,a.createElement("div",null,a.createElement(u.Z,null,n),a.createElement(w,null,i),a.createElement(x,null,o)),a.createElement(d.Z,{dateTime:l},l)))},y=i.default.div.withConfig({displayName:"card__Wrapper",componentId:"sc-1c045g4-0"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:var(--border-radius-base);background-color:var(--color-card);transform:translateZ(0);"]),b=i.default.div.withConfig({displayName:"card__Text",componentId:"sc-1c045g4-1"})(["display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:var(--sizing-md);& > *{display:block;}"]),w=i.default.h3.withConfig({displayName:"card__Title",componentId:"sc-1c045g4-2"})(["margin-top:var(--sizing-xs);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;@media (max-width:","){font-size:1.3125rem;}@media (max-width:","){font-size:var(--text-md);}"],(function(e){return e.theme.device.md}),(function(e){return e.theme.device.sm})),x=i.default.p.withConfig({displayName:"card__Desc",componentId:"sc-1c045g4-3"})(["line-height:1.5;margin-top:8px;padding-bottom:var(--sizing-sm);color:var(--color-text-2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]),E=a.memo(v),C=function(e){var t=e.posts,r=e.scrollEdgeRef,i=e.maxPostNum,o=void 0===i?10:i,l=e.offsetY,s=void 0===l?400:l,c=(0,a.useState)(!1),u=c[0],d=c[1],f=(0,a.useState)([]),g=f[0],p=f[1],m=(0,a.useState)(!1),h=m[0],v=m[1],y=(0,a.useState)(!1),b=y[0],w=y[1],x=(0,a.useRef)();return(0,a.useLayoutEffect)((function(){t.length&&!h&&(d(t.length>o),p((0,n.Z)(t.slice(0,o))),v(!0))}),[h,t,o]),(0,a.useEffect)((function(){var e=r.current,a={rootMargin:"0px 0px "+s+"px 0px",threshold:[0]};return x.current=new IntersectionObserver((function(e){u&&e.forEach((function(e){var r,a,i;b?e.isIntersecting&&(r=g.length,a=r<t.length,i=a?t.slice(r,r+o):[],d(a),p([].concat((0,n.Z)(g),(0,n.Z)(i)))):w(!0)}))}),a),x.current.observe(e),function(){return x.current&&x.current.disconnect()}})),g},I=i.default.ul.withConfig({displayName:"postGrid__Grid",componentId:"sc-94b4hi-0"})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(2,1fr);list-style:none;& > li{margin-bottom:0;}@media (max-width:","){grid-gap:var(--grid-gap-lg);}"],(function(e){return e.theme.device.sm})),k=i.default.li.withConfig({displayName:"postGrid__List",componentId:"sc-94b4hi-1"})(["box-sizing:border-box;grid-column:span 1;a{display:block;height:100%;}a:hover ","::after,a:focus ","::after{opacity:1;}& .gatsby-image-wrapper{transition:opacity 1s ease-out,transform 0.5s ease;}a:hover,a:focus{.gatsby-image-wrapper{transform:scale(1.03);}}@media (max-width:","){grid-column:span 2;}"],p,p,(function(e){return e.theme.device.sm})),_=function(e){var t=e.posts,r=(0,a.useRef)(null),n=C({posts:t,scrollEdgeRef:r,maxPostNum:10,offsetY:200});return a.createElement(I,{role:"list"},n.map((function(e){var t=e.id,r=e.slug,n=e.title,i=e.desc,o=e.date,l=e.category,s=e.thumbnail,u=e.alt,d=n+" - "+l+" - Posted on "+o;return a.createElement(k,{key:t,role:"listitem"},a.createElement(c.Link,{to:null!=r?r:"","aria-label":d},a.createElement(E,{thumbnail:s,alt:u,category:l,title:n,desc:i,date:o})))})),a.createElement("div",{ref:r}))},L=r(1804),z=r.n(L),S=function(e){var t=e.ref,r=e.targetId;(0,a.useLayoutEffect)((function(){var e=t.current;if(e&&e.scrollWidth>=e.offsetWidth){var n=e.querySelector("#"+r);if(n){var a=n.offsetLeft-e.offsetLeft;e.scrollTo(a-e.offsetWidth/2+n.offsetWidth/2,0)}}}),[t,r])},T="active",N=i.default.nav.withConfig({displayName:"categoryFilter__Nav",componentId:"sc-qdwe-0"})(["display:flex;align-items:center;background-color:var(--color-card);margin-bottom:48px;padding:12px var(--sizing-md);border-radius:var(--border-radius-base);a#active{color:var(--color-white);background-color:var(--color-blue);}@media (max-width:","){padding:12px;}"],(function(e){return e.theme.device.sm})),O=i.default.em.withConfig({displayName:"categoryFilter__CategoryTitle",componentId:"sc-qdwe-1"})(["position:static;width:auto;height:auto;clip:auto;white-space:auto;flex-shrink:0;font-size:var(--text-base);font-weight:var(--font-weight-semi-bold);font-style:initial;margin-right:var(--sizing-lg);@media (max-width:","){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"],(function(e){return e.theme.device.sm})),j=(0,i.default)(c.Link).withConfig({displayName:"categoryFilter__CategoryButton",componentId:"sc-qdwe-2"})(["cursor:pointer;display:block;background-color:var(--color-category-button);padding:var(--sizing-sm) var(--sizing-base);border-radius:var(--border-radius-base);font-size:0.875rem;font-weight:var(--font-weight-semi-bold);:focus{outline:none;}&:hover{color:var(--color-white);background-color:var(--color-blue);}&:focus-visible{color:var(--color-white);background-color:var(--color-blue);}"]),A=i.default.div.withConfig({displayName:"categoryFilter__Divider",componentId:"sc-qdwe-3"})(["width:1px;height:32px;margin:0 var(--sizing-sm);transform:translateX(-50%);background-color:var(--color-divider);"]),R=i.default.ul.withConfig({displayName:"categoryFilter__CategoryUl",componentId:"sc-qdwe-4"})(["display:flex;list-style:none;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none;li + li{margin-left:6px;}"]),Z=function(e){var t=e.categoryList,r=(0,a.useRef)(null),n=function(e){return e.isCurrent?{id:T,tabIndex:-1}:{}};return S({ref:r,targetId:T}),a.createElement(N,{"aria-label":"Category Filter"},a.createElement(O,null,"Category"),a.createElement(j,{getProps:n,to:"/"},"All"),a.createElement(A,null),a.createElement(R,{ref:r,className:"invisible-scrollbar"},t.sort((function(e,t){return t.totalCount-e.totalCount})).map((function(e){var t=e.fieldValue;return a.createElement("li",{key:t},a.createElement(j,{getProps:n,to:"/category/"+z()(t)+"/"},t))}))))},q=i.default.main.withConfig({displayName:"pages__Main",componentId:"sc-7m1hzp-0"})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]),U=i.default.div.withConfig({displayName:"pages__Content",componentId:"sc-7m1hzp-1"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:var(--sizing-lg);padding-bottom:var(--sizing-lg);margin:0 auto;@media (max-width:","){padding-top:var(--grid-gap-lg);width:87.5%;}"],(function(e){return e.theme.device.sm})),W=i.default.h2.withConfig({displayName:"pages__PostTitle",componentId:"sc-7m1hzp-2"})(["font-size:2rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;@media (max-width:","){font-size:1.75rem;}"],(function(e){return e.theme.device.sm})),P=function(e){var t=e.pageContext,r=e.data,i=(0,a.useState)([]),c=i[0],u=i[1],d=t.category,f=r.allMarkdownRemark.edges;(0,a.useLayoutEffect)((function(){(d?f.filter((function(e){var t,r=e.node;return(null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.category)===d})):f).forEach((function(e){var t=e.node,r=t.id,a=(null==t?void 0:t.fields).slug,i=null==t?void 0:t.frontmatter,o=i.title,l=i.desc,s=i.date,c=i.category,d=i.thumbnail,f=i.alt,g=d.childImageSharp;u((function(e){return[].concat((0,n.Z)(e),[{id:r,slug:a,title:o,desc:l,date:s,category:c,thumbnail:null==g?void 0:g.id,alt:f}])}))}))}),[d,f]);var g=(0,o.Z)(),p=d||g.postTitle;return a.createElement(l.Z,null,a.createElement(s.Z,{title:"Home"}),a.createElement(q,null,a.createElement(U,null,a.createElement(Z,{categoryList:r.allMarkdownRemark.group}),a.createElement(W,null,p),a.createElement(_,{posts:c}))))}},6877:function(e,t,r){"use strict";var n=r(1074).default.span.withConfig({displayName:"category__Category",componentId:"sc-fn0yqa-0"})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);"]);t.Z=n},8981:function(e,t,r){"use strict";var n=r(1074).default.time.withConfig({displayName:"dateTime__DateTime",componentId:"sc-1v8ffrd-0"})(["margin-top:12px;font-size:0.875rem;font-weight:var(--font-weight-regular);color:var(--color-text-3);"]);t.Z=n},2705:function(e,t,r){var n=r(5639).Symbol;e.exports=n},9932:function(e){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}},2663:function(e){e.exports=function(e,t,r,n){var a=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++a]);++a<i;)r=t(r,e[a],a,e);return r}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,r){var n=r(2705),a=r(9607),i=r(2333),o=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):i(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,r){var n=r(2705),a=r(9932),i=r(1469),o=r(3448),l=n?n.prototype:void 0,s=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return a(t,e)+"";if(o(t))return s?s.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},5393:function(e,t,r){var n=r(2663),a=r(3816),i=r(8748),o=RegExp("['’]","g");e.exports=function(e){return function(t){return n(i(a(t).replace(o,"")),e,"")}}},9389:function(e,t,r){var n=r(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},1957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},9607:function(e,t,r){var n=r(2705),a=Object.prototype,i=a.hasOwnProperty,o=a.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(s){}var a=o.call(e);return n&&(t?e[l]=r:delete e[l]),a}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,r){var n=r(1957),a="object"==typeof self&&self&&self.Object===Object&&self,i=n||a||Function("return this")();e.exports=i},2757:function(e){var t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+a+"]",o="\\d+",l="[\\u2700-\\u27bf]",s="["+r+"]",c="[^\\ud800-\\udfff"+a+o+t+r+n+"]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+n+"]",g="(?:"+s+"|"+c+")",p="(?:"+f+"|"+c+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,d].join("|")+")"+y+v+")*"),w="(?:"+[l,u,d].join("|")+")"+b,x=RegExp([f+"?"+s+"+"+m+"(?="+[i,f,"$"].join("|")+")",p+"+"+h+"(?="+[i,f+g,"$"].join("|")+")",f+"?"+g+"+"+m,f+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,w].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},3816:function(e,t,r){var n=r(9389),a=r(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(i,n).replace(o,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,r){var n=r(4239),a=r(7005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==n(e)}},1804:function(e,t,r){var n=r(5393)((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}));e.exports=n},9833:function(e,t,r){var n=r(531);e.exports=function(e){return null==e?"":n(e)}},8748:function(e,t,r){var n=r(9029),a=r(3157),i=r(9833),o=r(2757);e.exports=function(e,t,r){return e=i(e),void 0===(t=r?void 0:t)?a(e)?o(e):n(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-99d7b2c55827307647ad.js.map