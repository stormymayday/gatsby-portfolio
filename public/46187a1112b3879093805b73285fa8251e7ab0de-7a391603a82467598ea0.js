(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7oih":function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("mxmt"),s=r.n(i),o=r("ma3e"),l=r("Wbzz"),c=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about/"},{id:3,text:"projects",url:"/projects/"},{id:5,text:"contact",url:"/contact/"}].map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(l.a,{to:e.url},e.text))})),u=function(e){var t=e.styleClass;return n.a.createElement("ul",{className:"page-links "+(t||"")},c)},d=function(e){var t=e.toggleSidebar;return n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"nav-center"},n.a.createElement("div",{className:"nav-header"},n.a.createElement("img",{src:s.a,alt:"logo"}),n.a.createElement("button",{type:"button",className:"toggle-btn",onClick:t},n.a.createElement(o.a,null))),n.a.createElement(u,{styleClass:"nav-links"})))},f=r("PNo/"),g=function(e){var t=e.isOpen,r=e.toggleSidebar;return n.a.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},n.a.createElement("button",{className:"close-btn",onClick:r},n.a.createElement(o.i,null)),n.a.createElement("div",{className:"side-container"},n.a.createElement(u,{styleClass:t?"sidebar-links":""}),n.a.createElement(f.a,{styleClass:t?"sidebar-icons":""})))},p=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",null,n.a.createElement(f.a,{styleClass:"footer-link"})))};t.a=function(e){var t=e.children,r=n.a.useState(!1),a=r[0],i=r[1],s=function(){i(!a)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{toggleSidebar:s}),n.a.createElement(g,{isOpen:a,toggleSidebar:s}),t,n.a.createElement(p,null))}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),s=a(r("VbXa")),o=a(r("8OQS")),l=a(r("pVnL")),c=a(r("q1tI")),u=a(r("17x9")),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed;return p(t||r).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),h=function(e){var t=d(e),r=g(t);return m[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function N(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+s+o+r+a+t+i+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(C,(0,l.default)({ref:t,src:r},i,{ariaHidden:s}));return a.length>1?c.default.createElement("picture",null,n(a),o):o})),C=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,s=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:r,srcSet:a,src:n},p,{onLoad:s,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||b&&(v||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=g(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,O=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:x?1:0,transition:R?"opacity "+b+"ms":"none"},o),V="boolean"==typeof v?"lightgray":v,_={transitionDelay:b+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&_,{},o,{},f),q={title:t,alt:this.state.isVisible?"":r,style:P,className:g,itemProp:E};if(m){var T=m,j=p(m);return c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),V&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&_)}),j.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:q,imageVariants:T,generateSources:I}),j.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:q,imageVariants:T,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,S(T),c.default.createElement(C,{alt:r,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:w},j,{imageVariants:T}))}}))}if(h){var F=h,W=p(h),M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete M.display,c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},V&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},R&&_)}),W.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:q,imageVariants:F,generateSources:I}),W.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:q,imageVariants:F,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,S(F),c.default.createElement(C,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:w},W,{imageVariants:F}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});R.propTypes={resolutions:z,sizes:V,fixed:u.default.oneOfType([z,u.default.arrayOf(z)]),fluid:u.default.oneOfType([V,u.default.arrayOf(V)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var _=R;t.default=_},EK0E:function(e,t,r){"use strict";var a,n=r("dyZX"),i=r("CkkT")(0),s=r("KroJ"),o=r("Z6vF"),l=r("czNK"),c=r("ZD67"),u=r("0/R4"),d=r("s5qY"),f=r("s5qY"),g=!n.ActiveXObject&&"ActiveXObject"in n,p=o.getWeak,m=Object.isExtensible,h=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=p(e);return!0===t?h(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(d(this,"WeakMap"),e,t)}},y=e.exports=r("4LiD")("WeakMap",v,b,c,!0,!0);f&&g&&(l((a=c.getConstructor(v,"WeakMap")).prototype,b),o.NEED=!0,i(["delete","has","get","set"],(function(e){var t=y.prototype,r=t[e];s(t,e,(function(t,n){if(u(t)&&!m(t)){this._f||(this._f=new a);var i=this._f[e](t,n);return"set"==e?this:i}return r.call(this,t,n)}))})))},INYr:function(e,t,r){"use strict";var a=r("XKFU"),n=r("CkkT")(6),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r("bWfx"),r("ioFf"),r("V+eJ"),r("91GP");var a=r("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};function l(e){return function(t){return a.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.createElement(t.tag,s({key:r},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var r,n=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,l=e.title,c=o(e,["attr","title"]);return a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:s({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},OGtf:function(e,t,r){var a=r("XKFU"),n=r("eeVq"),i=r("vhPU"),s=/"/g,o=function(e,t,r,a){var n=String(i(e)),o="<"+t;return""!==r&&(o+=" "+r+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(o),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},"PNo/":function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("ma3e"),s=[{id:2,icon:n.a.createElement(i.f,{className:"social-icon"}),url:"https://www.twitter.com"},{id:6,icon:n.a.createElement(i.e,{className:"social-icon"}),url:"https://github.com/stormymayday"}].map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("a",{href:e.url,className:"social-link",target:"_blank"},e.icon))}));t.a=function(e){var t=e.styleClass;return n.a.createElement("ul",{className:"social-links "+(t||"")},s)}},Wbzz:function(e,t,r){"use strict";r("xfY5");var a=r("q1tI"),n=r.n(a),i=r("+ZDr"),s=r.n(i);r.d(t,"a",(function(){return s.a}));r("lw3w"),r("emEt").default.enqueue,n.a.createContext({})},ZD67:function(e,t,r){"use strict";var a=r("3Lyj"),n=r("Z6vF").getWeak,i=r("y3w9"),s=r("0/R4"),o=r("9gX7"),l=r("SlkY"),c=r("CkkT"),u=r("aagx"),d=r("s5qY"),f=c(5),g=c(6),p=0,m=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var r=v(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var c=e((function(e,a){o(e,c,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=a&&l(a,r,e[i],e)}));return a(c.prototype,{delete:function(e){if(!s(e))return!1;var r=n(e);return!0===r?m(d(this,t)).delete(e):r&&u(r,this._i)&&delete r[this._i]},has:function(e){if(!s(e))return!1;var r=n(e);return!0===r?m(d(this,t)).has(e):r&&u(r,this._i)}}),c},def:function(e,t,r){var a=n(i(t),!0);return!0===a?m(e).set(t,r):a[e._i]=r,e},ufstore:m}},ap0H:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a);t.a=function(e){var t=e.title;return n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,t||"default title"),n.a.createElement("div",{className:"underline"}))}},lw3w:function(e,t,r){var a;e.exports=(a=r("rzlk"))&&a.default||a},mxmt:function(e,t,r){e.exports=r.p+"static/logo-a1d374fbfc5c61136ace8f9faa094e72.svg"},qncB:function(e,t,r){var a=r("XKFU"),n=r("vhPU"),i=r("eeVq"),s=r("/e88"),o="["+s+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(e,t,r){var n={},o=i((function(){return!!s[e]()||"​"!="​"[e]()})),l=n[e]=o?t(d):s[e];r&&(n[r]=l),a(a.P+a.F*o,"String",n)},d=u.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},rzlk:function(e,t,r){"use strict";r.r(t);r("91GP");var a=r("q1tI"),n=r.n(a),i=r("IOVJ");t.default=function(e){var t=e.location,r=e.pageResources;return r?n.a.createElement(i.a,Object.assign({location:t,pageResources:r},r.json)):null}},xfY5:function(e,t,r){"use strict";var a=r("dyZX"),n=r("aagx"),i=r("LZWt"),s=r("Xbzi"),o=r("apmT"),l=r("eeVq"),c=r("kJMx").f,u=r("EemH").f,d=r("hswa").f,f=r("qncB").trim,g=a.Number,p=g,m=g.prototype,h="Number"==i(r("Kuth")(m)),v="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var r,a,n,i=(t=v?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var s,l=t.slice(2),c=0,u=l.length;c<u;c++)if((s=l.charCodeAt(c))<48||s>n)return NaN;return parseInt(l,a)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof g&&(h?l((function(){m.valueOf.call(r)})):"Number"!=i(r))?s(new p(b(t)),r,g):b(t)};for(var y,E=r("nh4g")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;E.length>S;S++)n(p,y=E[S])&&!n(g,y)&&d(g,y,u(p,y));g.prototype=m,m.constructor=g,r("KroJ")(a,"Number",g)}}}]);
//# sourceMappingURL=46187a1112b3879093805b73285fa8251e7ab0de-7a391603a82467598ea0.js.map