(self.webpackChunkyj_blog=self.webpackChunkyj_blog||[]).push([[691],{4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},9230:function(e,t,r){"use strict";r.d(t,{G:function(){return N},L:function(){return p},M:function(){return x},P:function(){return w},S:function(){return Z},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return s}});var a=r(7294),n=(r(4811),r(5697)),i=r.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,f=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,r=l(e,f);return a.createElement(a.Fragment,null,a.createElement(g,o({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,m);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},y=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,c=l(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(v,o({},c,t,{sizes:u,shouldLoad:s}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=l(e,b);return t?a.createElement(y,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var x=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;var E,C,I=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:I},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],S=new Set,z=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,f=e.class,g=e.onStartLoad,p=e.onLoad,m=e.onError,h=l(e,_),v=i.width,y=i.height,b=i.layout,w=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,y,b),x=w.style,I=w.className,k=l(w,L),z=(0,a.useRef)(),N=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);f&&(d=f);var T=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,v,y);return(0,a.useEffect)((function(){E||(E=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=z.current.querySelector("[data-gatsby-image-ssr]");return a&&s()?(a.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void S.add(N)):C&&S.has(N)?void 0:(E.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;z.current.innerHTML=a(o({isLoading:!0,isLoaded:S.has(N),image:i},h)),S.has(N)||(e=requestAnimationFrame((function(){z.current&&(t=n(z.current,N,S,c,g,p,m))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){S.has(N)&&C&&(z.current.innerHTML=C(o({isLoading:S.has(N),isLoaded:S.has(N),image:i},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},k,{style:o({},x,c,{backgroundColor:u}),className:I+(d?" "+d:""),ref:z,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},N=(0,a.memo)((function(e){return e.image?(0,a.createElement)(z,e):null}));N.propTypes=k,N.displayName="GatsbyImage";var T,j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],O=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:I,width:O,height:O,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},Z=(T=N,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=l(e,j);return n&&console.warn(n),r?a.createElement(T,o({image:r},i)):(console.warn("Image not loaded",t),null)});Z.displayName="StaticImage",Z.propTypes=R},2474:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var a=r(5785),n=r(7294),i=r(1074),o=r(9738),l=r(3070),s=r(4478),c=r(1597),u=r(6877),d=r(8981),f=r(9230),g="Thumbnail Image",p=function(e){var t=e.src,a=e.alt,i=(0,c.useStaticQuery)("48878111"),o=(0,n.useMemo)((function(){var e=i.allImageSharp.edges.find((function(e){return e.node.id===t}));return null==e?void 0:e.node.gatsbyImageData}),[t,i.allImageSharp.edges]);return n.createElement(m,null,n.createElement(h,null,o?n.createElement(f.G,{image:o,loading:"eager",alt:null!=a?a:g}):n.createElement(f.S,{src:"./images/default.jpg",loading:"eager",alt:null!=a?a:g,__imageData:r(9632)})))},m=i.default.div.withConfig({displayName:"centeredImg__ThumbnailWrapper",componentId:"sc-12jclve-0"})(['position:relative;width:100%;&::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}']),h=i.default.div.withConfig({displayName:"centeredImg__InnerWrapper",componentId:"sc-12jclve-1"})(["overflow:hidden;"]),v=n.memo(p),y=function(e){var t=e.thumbnail,r=e.alt,a=e.category,i=e.title,o=e.desc,l=e.date;return n.createElement(b,null,n.createElement(v,{src:t,alt:r}),n.createElement(w,null,n.createElement("div",null,n.createElement(u.Z,null,a),n.createElement(x,null,i),n.createElement(E,null,o)),n.createElement(d.Z,{dateTime:l},l)))},b=i.default.div.withConfig({displayName:"card__Wrapper",componentId:"sc-1c045g4-0"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:var(--border-radius-base);background-color:var(--color-card);transform:translateZ(0);"]),w=i.default.div.withConfig({displayName:"card__Text",componentId:"sc-1c045g4-1"})(["display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:var(--sizing-md);& > *{display:block;}"]),x=i.default.h3.withConfig({displayName:"card__Title",componentId:"sc-1c045g4-2"})(["margin-top:var(--sizing-xs);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;@media (max-width:","){font-size:1.3125rem;}@media (max-width:","){font-size:var(--text-md);}"],(function(e){return e.theme.device.md}),(function(e){return e.theme.device.sm})),E=i.default.p.withConfig({displayName:"card__Desc",componentId:"sc-1c045g4-3"})(["line-height:1.5;margin-top:8px;padding-bottom:var(--sizing-sm);color:var(--color-text-2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]),C=n.memo(y),I=function(e){var t=e.posts,r=e.scrollEdgeRef,i=e.maxPostNum,o=void 0===i?10:i,l=e.offsetY,s=void 0===l?400:l,c=(0,n.useState)(!1),u=c[0],d=c[1],f=(0,n.useState)([]),g=f[0],p=f[1],m=(0,n.useState)(!1),h=m[0],v=m[1],y=(0,n.useState)(!1),b=y[0],w=y[1],x=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){t.length&&!h&&(d(t.length>o),p((0,a.Z)(t.slice(0,o))),v(!0))}),[h,t,o]),(0,n.useEffect)((function(){var e=r.current,n={rootMargin:"0px 0px "+s+"px 0px",threshold:[0]};return x.current=new IntersectionObserver((function(e){u&&e.forEach((function(e){var r,n,i;b?e.isIntersecting&&(r=g.length,n=r<t.length,i=n?t.slice(r,r+o):[],d(n),p([].concat((0,a.Z)(g),(0,a.Z)(i)))):w(!0)}))}),n),x.current.observe(e),function(){return x.current&&x.current.disconnect()}})),g},k=i.default.ul.withConfig({displayName:"postGrid__Grid",componentId:"sc-94b4hi-0"})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(2,1fr);list-style:none;& > li{margin-bottom:0;}@media (max-width:","){grid-gap:var(--grid-gap-lg);}"],(function(e){return e.theme.device.sm})),_=i.default.li.withConfig({displayName:"postGrid__List",componentId:"sc-94b4hi-1"})(["box-sizing:border-box;grid-column:span 1;a{display:block;height:100%;}a:hover ","::after,a:focus ","::after{opacity:1;}& .gatsby-image-wrapper{transition:opacity 1s ease-out,transform 0.5s ease;}a:hover,a:focus{.gatsby-image-wrapper{transform:scale(1.03);}}@media (max-width:","){grid-column:span 2;}"],m,m,(function(e){return e.theme.device.sm})),L=function(e){var t=e.posts,r=(0,n.useRef)(null),a=I({posts:t,scrollEdgeRef:r,maxPostNum:10,offsetY:200});return n.createElement(k,{role:"list"},a.map((function(e){var t=e.id,r=e.slug,a=e.title,i=e.desc,o=e.date,l=e.category,s=e.thumbnail,u=e.alt,d=a+" - "+l+" - Posted on "+o;return n.createElement(_,{key:t,role:"listitem"},n.createElement(c.Link,{to:null!=r?r:"","aria-label":d},n.createElement(C,{thumbnail:s,alt:u,category:l,title:a,desc:i,date:o})))})),n.createElement("div",{ref:r}))},S=r(1804),z=r.n(S),N=function(e){var t=e.ref,r=e.targetId;(0,n.useLayoutEffect)((function(){var e=t.current;if(e&&e.scrollWidth>=e.offsetWidth){var a=e.querySelector("#"+r);if(a){var n=a.offsetLeft-e.offsetLeft;e.scrollTo(n-e.offsetWidth/2+a.offsetWidth/2,0)}}}),[t,r])},T="active",j=i.default.nav.withConfig({displayName:"categoryFilter__Nav",componentId:"sc-qdwe-0"})(["display:flex;align-items:center;background-color:var(--color-card);margin-bottom:48px;padding:12px var(--sizing-md);border-radius:var(--border-radius-base);a#active{color:var(--color-white);background-color:var(--color-blue);}@media (max-width:","){padding:12px;}"],(function(e){return e.theme.device.sm})),O=i.default.em.withConfig({displayName:"categoryFilter__CategoryTitle",componentId:"sc-qdwe-1"})(["position:static;width:auto;height:auto;clip:auto;white-space:auto;flex-shrink:0;font-size:var(--text-base);font-weight:var(--font-weight-semi-bold);font-style:initial;margin-right:var(--sizing-lg);@media (max-width:","){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"],(function(e){return e.theme.device.sm})),A=(0,i.default)(c.Link).withConfig({displayName:"categoryFilter__CategoryButton",componentId:"sc-qdwe-2"})(["cursor:pointer;display:block;background-color:var(--color-category-button);padding:var(--sizing-sm) var(--sizing-base);border-radius:var(--border-radius-base);font-size:0.875rem;font-weight:var(--font-weight-semi-bold);:focus{outline:none;}&:hover{color:var(--color-white);background-color:var(--color-blue);}&:focus-visible{color:var(--color-white);background-color:var(--color-blue);}"]),R=i.default.div.withConfig({displayName:"categoryFilter__Divider",componentId:"sc-qdwe-3"})(["width:1px;height:32px;margin:0 var(--sizing-sm);transform:translateX(-50%);background-color:var(--color-divider);"]),Z=i.default.ul.withConfig({displayName:"categoryFilter__CategoryUl",componentId:"sc-qdwe-4"})(["display:flex;list-style:none;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none;li + li{margin-left:6px;}"]),q=function(e){var t=e.categoryList,r=(0,n.useRef)(null),a=function(e){return e.isCurrent?{id:T,tabIndex:-1}:{}};return N({ref:r,targetId:T}),n.createElement(j,{"aria-label":"Category Filter"},n.createElement(O,null,"Category"),n.createElement(A,{getProps:a,to:"/"},"All"),n.createElement(R,null),n.createElement(Z,{ref:r,className:"invisible-scrollbar"},t.sort((function(e,t){return t.totalCount-e.totalCount})).map((function(e){var t=e.fieldValue;return n.createElement("li",{key:t},n.createElement(A,{getProps:a,to:"/category/"+z()(t)+"/"},t))}))))},U=i.default.main.withConfig({displayName:"pages__Main",componentId:"sc-7m1hzp-0"})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]),W=i.default.div.withConfig({displayName:"pages__Content",componentId:"sc-7m1hzp-1"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:var(--sizing-lg);padding-bottom:var(--sizing-lg);margin:0 auto;@media (max-width:","){padding-top:var(--grid-gap-lg);width:87.5%;}"],(function(e){return e.theme.device.sm})),P=i.default.h2.withConfig({displayName:"pages__PostTitle",componentId:"sc-7m1hzp-2"})(["font-size:2rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;@media (max-width:","){font-size:1.75rem;}"],(function(e){return e.theme.device.sm})),D=function(e){var t=e.pageContext,r=e.data,i=(0,n.useState)([]),c=i[0],u=i[1],d=t.category,f=r.allMarkdownRemark.edges;(0,n.useLayoutEffect)((function(){(d?f.filter((function(e){var t,r=e.node;return(null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.category)===d})):f).forEach((function(e){var t=e.node,r=t.id,n=(null==t?void 0:t.fields).slug,i=null==t?void 0:t.frontmatter,o=i.title,l=i.desc,s=i.date,c=i.category,d=i.thumbnail,f=i.alt,g=null==d?void 0:d.childImageSharp;u((function(e){return[].concat((0,a.Z)(e),[{id:r,slug:n,title:o,desc:l,date:s,category:c,thumbnail:null==g?void 0:g.id,alt:f}])}))}))}),[d,f]);var g=(0,o.Z)(),p=d||g.postTitle;return n.createElement(l.Z,null,n.createElement(s.Z,{title:"Home"}),n.createElement(U,null,n.createElement(W,null,n.createElement(q,{categoryList:r.allMarkdownRemark.group}),n.createElement(P,null,p),n.createElement(L,{posts:c}))))}},6877:function(e,t,r){"use strict";var a=r(1074).default.span.withConfig({displayName:"category__Category",componentId:"sc-fn0yqa-0"})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);"]);t.Z=a},8981:function(e,t,r){"use strict";var a=r(1074).default.time.withConfig({displayName:"dateTime__DateTime",componentId:"sc-1v8ffrd-0"})(["margin-top:12px;font-size:0.875rem;font-weight:var(--font-weight-regular);color:var(--color-text-3);"]);t.Z=a},2705:function(e,t,r){var a=r(5639).Symbol;e.exports=a},9932:function(e){e.exports=function(e,t){for(var r=-1,a=null==e?0:e.length,n=Array(a);++r<a;)n[r]=t(e[r],r,e);return n}},2663:function(e){e.exports=function(e,t,r,a){var n=-1,i=null==e?0:e.length;for(a&&i&&(r=e[++n]);++n<i;)r=t(r,e[n],n,e);return r}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,r){var a=r(2705),n=r(9607),i=r(2333),o=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?n(e):i(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,r){var a=r(2705),n=r(9932),i=r(1469),o=r(3448),l=a?a.prototype:void 0,s=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return n(t,e)+"";if(o(t))return s?s.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},5393:function(e,t,r){var a=r(2663),n=r(3816),i=r(8748),o=RegExp("['’]","g");e.exports=function(e){return function(t){return a(i(n(t).replace(o,"")),e,"")}}},9389:function(e,t,r){var a=r(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},1957:function(e,t,r){var a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=a},9607:function(e,t,r){var a=r(2705),n=Object.prototype,i=n.hasOwnProperty,o=n.toString,l=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),r=e[l];try{e[l]=void 0;var a=!0}catch(s){}var n=o.call(e);return a&&(t?e[l]=r:delete e[l]),n}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,r){var a=r(1957),n="object"==typeof self&&self&&self.Object===Object&&self,i=a||n||Function("return this")();e.exports=i},2757:function(e){var t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+n+"]",o="\\d+",l="[\\u2700-\\u27bf]",s="["+r+"]",c="[^\\ud800-\\udfff"+n+o+t+r+a+"]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+a+"]",g="(?:"+s+"|"+c+")",p="(?:"+f+"|"+c+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,d].join("|")+")"+y+v+")*"),w="(?:"+[l,u,d].join("|")+")"+b,x=RegExp([f+"?"+s+"+"+m+"(?="+[i,f,"$"].join("|")+")",p+"+"+h+"(?="+[i,f+g,"$"].join("|")+")",f+"?"+g+"+"+m,f+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,w].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},3816:function(e,t,r){var a=r(9389),n=r(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=n(e))&&e.replace(i,a).replace(o,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,r){var a=r(4239),n=r(7005);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==a(e)}},1804:function(e,t,r){var a=r(5393)((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}));e.exports=a},9833:function(e,t,r){var a=r(531);e.exports=function(e){return null==e?"":a(e)}},8748:function(e,t,r){var a=r(9029),n=r(3157),i=r(9833),o=r(2757);e.exports=function(e,t,r){return e=i(e),void 0===(t=r?void 0:t)?n(e)?o(e):a(e):e.match(t)||[]}},9632:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181838","images":{"fallback":{"src":"/static/9ac38a0387bde9a27f747123a5924cda/a0d3e/default.jpg","srcSet":"/static/9ac38a0387bde9a27f747123a5924cda/f643e/default.jpg 240w,\\n/static/9ac38a0387bde9a27f747123a5924cda/fa695/default.jpg 480w,\\n/static/9ac38a0387bde9a27f747123a5924cda/a0d3e/default.jpg 960w","sizes":"(min-width: 960px) 960px, 100vw"},"sources":[{"srcSet":"/static/9ac38a0387bde9a27f747123a5924cda/e46a8/default.webp 240w,\\n/static/9ac38a0387bde9a27f747123a5924cda/95a23/default.webp 480w,\\n/static/9ac38a0387bde9a27f747123a5924cda/5bdbe/default.webp 960w","type":"image/webp","sizes":"(min-width: 960px) 960px, 100vw"}]},"width":960,"height":640}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bd6ffb11deef97de19c1.js.map