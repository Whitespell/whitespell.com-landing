(function(){this.FastButton=function(e,t){this.element=e;this.handler=t;"ontouchstart"in window?e.addEventListener("touchstart",this,!1):e.addEventListener("click",this,!1)};this.FastButton.prototype.handleEvent=function(e){switch(e.type){case"touchstart":this.onTouchStart(e);break;case"touchmove":this.onTouchMove(e);break;case"touchend":this.onClick(e);break;case"click":this.onClick(e)}};this.FastButton.prototype.onTouchStart=function(e){e.stopPropagation();this.element.addEventListener("touchend",this,!1);this.element.addEventListener("touchmove",this,!1);this.startX=e.touches[0].clientX;this.startY=e.touches[0].clientY};this.FastButton.prototype.onTouchMove=function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&this.reset()};this.FastButton.prototype.onClick=function(e){e.stopPropagation();this.reset();var t=this.handler;typeof t=="function"?t(e):typeof t=="object"&&t.handleEvent(e);e.type==="touchend"&&this.clickbuster.preventGhostClick(this.startX,this.startY)};this.FastButton.prototype.reset=function(){this.element.removeEventListener("touchend",this,!1);this.element.removeEventListener("touchmove",this,!1)};this.clickbuster=function(){console.log("init clickbuster")};this.clickbuster.preventGhostClick=function(e,t){clickbuster.coordinates.push(e,t);window.setTimeout(google.clickbuster.pop,2500)};this.clickbuster.pop=function(){clickbuster.coordinates.splice(0,2)};this.clickbuster.onClick=function(e){for(var t=0;t<clickbuster.coordinates.length;t++){var n=clickbuster.coordinates[t],r=clickbuster.coordinates[t+1];if(Math.abs(e.clientX-n)<25&&Math.abs(e.clientY-r)<25){e.stopPropagation();e.preventDefault()}}};document.addEventListener("click",clickbuster.onClick,!0);clickbuster.coordinates=[]})(this);

!function(a,b,c){"use strict";var d=function(a,b,d){d||d===c?e.prototype[a]=b:e[a]=b},e=function(d){if(this===a||this===c)return new e(d);var f=typeof d;if("object"===f)if(d[1]&&1===d[1].nodeType)for(var g=0,h=d.length;h>g;g++)this[g]=d[g];else this[0]=d;else"string"===f&&this._selector(d,b);return this};d("_selector",function(a,c){if(0===a.indexOf("#"))this[0]=b.getElementById(a.replace("#",""));else for(var d=0===a.indexOf(".")?c.getElementsByClassName(a.replace(".","")):/^[a-zA-Z]+$/.test(a)?c.getElementsByTagName(a):c.querySelectorAll(a),e=0,f=d.length;f>e;e++)this[e]=d[e]}),d("ajax",function(a){var b=new XMLHttpRequest,d=a.data,e=a.dataType;b.onreadystatechange=function(){if(4===b.readyState&&200===b.status){var c,d=b.responseText;if("json"===e)try{c=JSON.parse(d)}catch(f){c=d}else c=d;"function"==typeof a.success&&a.success(c,b)}};var f=a.type!==c?a.type.toUpperCase():"GET",g=["POST","PUT","DELETE"];b.open(f,a.url,!0),-1!==g.indexOf(f)&&("json"===e?b.setRequestHeader("Content-Type","application/json; charset=UTF-8"):b.setRequestHeader("Content-Type","application/x-www-form-urlencoded")),"json"!==e||"object"!=typeof d||Array.isArray(d)||(d=JSON.stringify(d)),b.send(d)},!1),d("getJSON",function(a,b){return e.ajax({dataType:"json",url:a,success:b})},!1),"object"==typeof b.documentElement.classList?(d("hasClass",function(a){return this[0].classList.contains(a)!==!1?this:!1}),d("addClass",function(a){return this[0].classList.add(a),this}),d("removeClass",function(a){return this[0].classList.remove(a),this}),d("toggleClass",function(a){return this[0].classList.toggle(a),this})):(d("_ClassesBase",function(a,b,c){var d=a.className.split(" ");if(c)d.push(b);else{var e=d.indexOf(b);-1!==e&&d.splice(e,1)}a.className=d.join(" ")}),d("hasClass",function(a){return-1!==this[0].className.split(" ").indexOf(a)?this:!1}),d("addClass",function(a){return this.hasClass(a)||this._ClassesBase(this[0],a,!0),this}),d("removeClass",function(a){return this.hasClass(a)&&this._ClassesBase(this[0],a,!1),this}),d("toggleClass",function(a){return this.hasClass(a)?this.removeClass(a):this.addClass(a),this})),"function"==typeof a.FastButton?d("click",function(a){return new FastButton(this[0],a),this}):d("click",function(a){return this.on("click",a),this}),d("resizeEnd",function(a){return this.on("resize",function(){typeof this.resizeEndTimeout!==c&&clearTimeout(this.resizeEndTimeout),this.resizeEndTimeout=setTimeout(a,200)}),this}),d("each",function(a){for(var b in this)1===this[b].nodeType&&a(this[b]);return this}),d("on",function(a,b){return this[0].addEventListener(a,b,!1),this}),d("off",function(a,b){return this[0].removeEventListener(a,b,!1),this}),d("extend",function(){for(var a=arguments,b=1,c=a.length;c>b;b++)for(var d in a[b])a[b].hasOwnProperty(d)&&(a[0][d]=a[b][d]);return a[0]},!1),d("find",function(a){return this._selector(a,this[0]),this}),d("forEach",function(a,b){if(Array.isArray(a))a.forEach(b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&b(a[c],c,a);return this},!1),d("serialize",function(){var a,b=this[0],c=b.getElementsByTagName("input"),d=b.getElementsByTagName("textarea"),e="";for(a=c.length-1;a>=0;a--){var f=c[a],g=f.getAttribute("type");"radio"===g||"checkbox"===g?f.checked===!0&&(e+=f.name+"="+f.value+"&"):e+=f.name+"="+f.value+"&"}for(a=d.length-1;a>=0;a--){var h=d[a];e+=h.name+"="+h.value+"&"}return e=e.slice(0,-1)}),d("setInterval",function(a,b){var c=this;return setTimeout(function(){a(),c.setInterval(a,b,!0)},b)},!1);var f=e;f.fn=e.prototype,a.B=f}(this,this.document);

/* http://prismjs.com/download.html?themes=prism&languages=markup+clike+javascript+java+bash+c+swift+objectivec */
self=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):t.util.type(e)==="Array"?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e];if(arguments.length==2){r=arguments[1];for(var o in r)r.hasOwnProperty(o)&&(s[o]=r[o]);return s}var u={};for(var a in s)if(s.hasOwnProperty(a)){if(a==n)for(var o in r)r.hasOwnProperty(o)&&(u[o]=r[o]);u[a]=s[a]}t.languages.DFS(t.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=u)});return i[e]=u},DFS:function(e,n,r){for(var i in e)if(e.hasOwnProperty(i)){n.call(e,i,e[i],r||i);t.util.type(e[i])==="Object"?t.languages.DFS(e[i],n):t.util.type(e[i])==="Array"&&t.languages.DFS(e[i],n,i)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){var s=t.tokenize(e,r);return n.stringify(t.util.encode(s),i)},tokenize:function(e,n,r){var i=t.Token,s=[e],o=n.rest;if(o){for(var u in o)n[u]=o[u];delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u])continue;var a=n[u];a=t.util.type(a)==="Array"?a:[a];for(var f=0;f<a.length;++f){var l=a[f],c=l.inside,h=!!l.lookbehind,p=0,d=l.alias;l=l.pattern||l;for(var v=0;v<s.length;v++){var m=s[v];if(s.length>e.length)break e;if(m instanceof i)continue;l.lastIndex=0;var g=l.exec(m);if(g){h&&(p=g[1].length);var y=g.index-1+p,g=g[0].slice(p),b=g.length,w=y+b,E=m.slice(0,y+1),S=m.slice(w+1),x=[v,1];E&&x.push(E);var T=new i(u,c?t.tokenize(g,c):g,d);x.push(T);S&&x.push(S);Array.prototype.splice.apply(s,x)}}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t,n){this.type=e;this.content=t;this.alias=n};n.stringify=function(e,r,i){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(function(t){return n.stringify(t,r,e)}).join("");var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};s.type=="comment"&&(s.attributes.spellcheck="true");if(e.alias){var o=t.util.type(e.alias)==="Array"?e.alias:[e.alias];Array.prototype.push.apply(s.classes,o)}t.hooks.run("wrap",s);var u="";for(var a in s.attributes)u+=a+'="'+(s.attributes[a]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+u+">"+s.content+"</"+s.tag+">"};if(!self.document){if(!self.addEventListener)return self.Prism;self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i,t.languages[r]))));self.close()},!1);return self.Prism}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}return self.Prism}();typeof module!="undefined"&&module.exports&&(module.exports=Prism);;
Prism.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});;
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:!0}],string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/gi,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}});;
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,operator:{pattern:/(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/gm,lookbehind:!0}});;
Prism.languages.bash=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])(#.*?(\r?\n|$))/g,lookbehind:!0},string:{pattern:/("|')(\\?[\s\S])*?\1/g,inside:{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/g}},keyword:/\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/g}),Prism.languages.insertBefore("bash","keyword",{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/g}),Prism.languages.insertBefore("bash","comment",{important:/(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/g});;
Prism.languages.c=Prism.languages.extend("clike",{string:/("|')([^\n\\\1]|\\.|\\\r*\n)*?\1/g,keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/g,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\//g}),Prism.languages.insertBefore("c","string",{property:{pattern:/((^|\n)\s*)#\s*[a-z]+([^\n\\]|\\.|\\\r*\n)*/gi,lookbehind:!0,inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/g,lookbehind:!0}}}}),delete Prism.languages.c["class-name"],delete Prism.languages.c["boolean"];;
Prism.languages.swift=Prism.languages.extend("clike",{keyword:/\b(as|associativity|break|case|class|continue|convenience|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|final|for|func|get|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|required|return|right|safe|self|Self|set|static|struct|subscript|super|switch|Type|typealias|unowned|unowned|unsafe|var|weak|where|while|willSet|__COLUMN__|__FILE__|__FUNCTION__|__LINE__)\b/g,number:/\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/gi,constant:/\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/g,atrule:/\@\b(IBOutlet|IBDesignable|IBAction|IBInspectable|class_protocol|exported|noreturn|NSCopying|NSManaged|objc|UIApplicationMain|auto_closure)\b/g,builtin:/\b([A-Z]\S+|abs|advance|alignof|alignofValue|assert|contains|count|countElements|debugPrint|debugPrintln|distance|dropFirst|dropLast|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lazy|lexicographicalCompare|map|max|maxElement|min|minElement|numericCast|overlaps|partition|prefix|print|println|reduce|reflect|reverse|sizeof|sizeofValue|sort|sorted|split|startsWith|stride|strideof|strideofValue|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|withExtendedLifetime|withUnsafeMutablePointer|withUnsafeMutablePointers|withUnsafePointer|withUnsafePointers|withVaList)\b/g});;
Prism.languages.objectivec=Prism.languages.extend("c",{keyword:/(\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b)|((?=[\w|@])(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b)/g,string:/(?:("|')([^\n\\\1]|\\.|\\\r*\n)*?\1)|(@"([^\n\\"]|\\.|\\\r*\n)*?")/g,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|@/g});;

/*
* Symbolset
* www.symbolset.com
* Copyright © 2013 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-social.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android ([1-2]|4\.[2-9].*Version\/4)\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  if (/Android 4\.[2-9].*Version\/4/.test(navigator.userAgent)) {
    var ss_android = document.createElement('style');
    ss_android.innerHTML = '.ss-icon,[class^="ss-"],[class*=" ss-"],[class^="ss-"]:before,[class*=" ss-"]:before,[class^="ss-"].right:after[class*=" ss-"].right:after{text-rendering:auto!important}';
    document.body.appendChild(ss_android);
  }

  var ss_set={'five hundred pixels':'\uF642','fivehundredpixels':'\uF642','five hundred px':'\uF642','github octocat':'\uF671','stack overflow':'\uF672','stackoverflow':'\uF672','fivehundredpx':'\uF642','githuboctocat':'\uF671','kickstarter':'\uF681','app dot net':'\uF614','google plus':'\uF613','googleplus':'\uF613','foursquare':'\uF690','soundcloud':'\uF6B3','letterboxd':'\uF632','blackberry':'\uF6F4','delicious':'\uF655','posterous':'\uF623','pinterest':'\uF650','microsoft':'\uF6F1','thumbs up':'\uD83D\uDC4D','telephone':'\uD83D\uDCDE','appdotnet':'\uF614','wordpress':'\uF621','instagram':'\uF641','facebook':'\uF610','thumbsup':'\uD83D\uDC4D','readmill':'\uF652','pinboard':'\uF654','dribbble':'\uF660','envelope':'\u2709','google +':'\uF613','linkedin':'\uF612','twitter':'\uF611','approve':'\uD83D\uDC4D','behance':'\uF661','youtube':'\uF630','blogger':'\uF622','dropbox':'\uF653','octocat':'\uF671','android':'\uF6F3','google+':'\uF613','last fm':'\uF6B2','app net':'\uF614','windows':'\uF6F2','spotify':'\uF6B1','flickr':'\uF640','lastfm':'\uF6B2','zerply':'\uF615','appnet':'\uF614','paypal':'\uF680','tumblr':'\uF620','github':'\uF670','svpply':'\uF651','reddit':'\uF616','share':'\uF601','phone':'\uD83D\uDCDE','apple':'\uF8FF','vimeo':'\uF631','email':'\u2709','steam':'\uF617','quora':'\uF624','500px':'\uF642','skype':'\uF6A0','like':'\uD83D\uDC4D','mail':'\u2709','call':'\uD83D\uDCDE','link':'\uD83D\uDD17','rdio':'\uF6B0','yelp':'\uF691','etsy':'\uF682','vine':'\uF633','rss':'\uE310'};


  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};


/*
* Symbolset
* www.symbolset.com
* Copyright © 2013 Oak Studios LLC
*
* Upload this file to your web server
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android ([1-2]|4\.[2-9].*Version\/4)\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  if (/Android 4\.[2-9].*Version\/4/.test(navigator.userAgent)) {
    var ss_android = document.createElement('style');
    ss_android.innerHTML = '.ss-icon,[class^="ss-"],[class*=" ss-"],[class^="ss-"]:before,[class*=" ss-"]:before,[class^="ss-"].right:after[class*=" ss-"].right:after{text-rendering:auto!important}';
    document.body.appendChild(ss_android);
  }

  var ss_set={'notifications disabled':'\uD83D\uDD15','notification disabled':'\uD83D\uDD15','notificationsdisabled':'\uD83D\uDD15','notificationdisabled':'\uD83D\uDD15','telephone disabled':'\uE300','telephonedisabled':'\uE300','writing disabled':'\uE071','remove calendar':'\uF071','calendar remove':'\uF071','calendar delete':'\uF073','writingdisabled':'\uE071','delete calendar':'\uF073','pencil disabled':'\uE071','calendarremove':'\uF071','phone disabled':'\uE300','check calendar':'\uF072','navigate right':'\u25BB','pencildisabled':'\uE071','removecalendar':'\uF071','calendar check':'\uF072','deletecalendar':'\uF073','download cloud':'\uEB00','battery medium':'\uEA11','calendardelete':'\uF073','cloud download':'\uEB00','medium battery':'\uEA11','ellipsis chat':'\uE399','mediumbattery':'\uEA11','bell disabled':'\uD83D\uDD15','clouddownload':'\uEB00','shopping cart':'\uE500','calendarcheck':'\uF072','phonedisabled':'\uE300','female avatar':'\uD83D\uDC67','notifications':'\uD83D\uDD14','call disabled':'\uE300','battery empty':'\uEA13','navigateright':'\u25BB','empty battery':'\uEA13','batterymedium':'\uEA11','checkcalendar':'\uF072','navigate down':'\uF501','navigate left':'\u25C5','downloadcloud':'\uEB00','navigateleft':'\u25C5','ellipsischat':'\uE399','navigatedown':'\uF501','batteryempty':'\uEA13','battery high':'\uEA10','notification':'\uD83D\uDD14','battery full':'\uD83D\uDD0B','calldisabled':'\uE300','femaleavatar':'\uD83D\uDC67','rotate right':'\u21BB','calendar add':'\uF070','high battery':'\uEA10','emptybattery':'\uEA13','cloud upload':'\uEB40','direct right':'\u25B9','full battery':'\uD83D\uDD0B','add calendar':'\uF070','upload cloud':'\uEB40','belldisabled':'\uD83D\uDD15','fast forward':'\u23E9','skip forward':'\u23ED','mobile phone':'\uD83D\uDCF1','shoppingcart':'\uE500','direct left':'\u25C3','low battery':'\uEA12','skipforward':'\u23ED','rotateright':'\u21BB','male avatar':'\uD83D\uDC64','direct down':'\u25BE','videocamera':'\uD83D\uDCF9','female user':'\uD83D\uDC67','information':'\u2139','thumbs down':'\uD83D\uDC4E','photographs':'\uD83C\uDF04','calendaradd':'\uF070','rotate left':'\u21BA','high volume':'\uD83D\uDD0A','batteryhigh':'\uEA10','credit card':'\uD83D\uDCB3','batteryfull':'\uD83D\uDD0B','navigate up':'\uF500','dollar sign':'\uD83D\uDCB2','fastforward':'\u23E9','mobilephone':'\uD83D\uDCF1','battery low':'\uEA12','addcalendar':'\uF070','fullbattery':'\uD83D\uDD0B','uploadcloud':'\uEB40','delete date':'\uF073','remove date':'\uF071','volume high':'\uD83D\uDD0A','directright':'\u25B9','cloudupload':'\uEB40','highbattery':'\uEA10','navigation':'\uE670','smartphone':'\uD83D\uDCF1','screenshot':'\u2316','dollarsign':'\uD83D\uDCB2','creditcard':'\uD83D\uDCB3','hard drive':'\uE7B0','femaleuser':'\uD83D\uDC67','maleavatar':'\uD83D\uDC64','removedate':'\uF071','microphone':'\uD83C\uDFA4','low volume':'\uD83D\uDD09','volume low':'\uD83D\uDD09','highvolume':'\uD83D\uDD0A','check date':'\uF072','volumehigh':'\uD83D\uDD0A','deletedate':'\uF073','cell phone':'\uD83D\uDCF1','directions':'\uE672','photograph':'\uD83C\uDF04','half heart':'\uE1A0','thumbsdown':'\uD83D\uDC4E','disapprove':'\uD83D\uDC4E','lowbattery':'\uEA12','down right':'\u2B0A','batterylow':'\uEA12','thumbnails':'\uE9A3','navigateup':'\uF500','attachment':'\uD83D\uDCCE','visibility':'\uD83D\uDC40','pull quote':'\u201C','descending':'\u25BE','directdown':'\u25BE','directleft':'\u25C3','connection':'\uEB85','rotateleft':'\u21BA','eyedropper':'\uE200','volumelow':'\uD83D\uDD09','stopwatch':'\u23F1','warehouse':'\uE602','paperclip':'\uD83D\uDCCE','backspace':'\u232B','ascending':'\u25B4','half star':'\uE1A1','cellphone':'\uD83D\uDCF1','lightbulb':'\uD83D\uDCA1','thumbs up':'\uD83D\uDC4D','down left':'\u2B0B','newspaper':'\uD83D\uDCF0','direct up':'\u25B4','checkdate':'\uF072','halfheart':'\uE1A0','bar chart':'\uD83D\uDCCA','harddrive':'\uE7B0','male user':'\uD83D\uDC64','pie chart':'\uE570','downright':'\u2B0A','skip back':'\u23EE','musicnote':'\u266B','dashboard':'\uF000','briefcase':'\uD83D\uDCBC','pullquote':'\u201C','telephone':'\uD83D\uDCDE','checkmark':'\u2713','lowvolume':'\uD83D\uDD09','buildings':'\uD83C\uDFE2','crosshair':'\u2316','open book':'\uD83D\uDCD6','add date':'\uF070','notebook':'\uD83D\uDCD3','document':'\uD83D\uDCC4','skipback':'\u23EE','typeface':'\uED01','transfer':'\u21C6','redirect':'\u21AA','computer':'\uD83D\uDCBB','contract':'\uEE01','question':'\u2753','sign out':'\uEE02','download':'\uEB01','pictures':'\uD83C\uDF04','subtract':'\u002D','settings':'\u2699','database':'\uE7A0','location':'\uE6D0','signpost':'\uE672','navigate':'\uE670','calendar':'\uD83D\uDCC5','barchart':'\uD83D\uDCCA','openbook':'\uD83D\uDCD6','maleuser':'\uD83D\uDC64','ellipsis':'\u2026','envelope':'\u2709','facetime':'\uE320','end call':'\uE300','halfstar':'\uE1A1','favorite':'\u22C6','thumbsup':'\uD83D\uDC4D','up right':'\u2B08','bookmark':'\uD83D\uDD16','keywords':'\uE100','downleft':'\u2B0B','trashcan':'\uE0D0','insecure':'\uD83D\uDD13','unlocked':'\uD83D\uDD13','previous':'\u25C5','directup':'\u25B4','zoom out':'\uE003','dropdown':'\u25BE','piechart':'\uE570','caution':'\u26D4','desktop':'\uD83D\uDCBB','zoom in':'\uE002','display':'\uD83D\uDCBB','monitor':'\uD83D\uDCBB','windows':'\uE202','warning':'\u26A0','descend':'\u25BE','package':'\uD83D\uDCE6','upright':'\u2B08','droplet':'\uD83D\uDCA7','keyword':'\uE100','printer':'\u2399','private':'\uD83D\uDD12','avatars':'\uD83D\uDC65','dictate':'\uD83C\uDFA4','battery':'\uD83D\uDD0B','zoomout':'\uE003','checked':'\u2713','speaker':'\uD83D\uDD08','comment':'\uD83D\uDCAC','forward':'\u27A1','up left':'\u2B09','approve':'\uD83D\uDC4D','endcall':'\uE300','compass':'\uE671','retweet':'\uF600','loading':'\uEB83','shuffle':'\uD83D\uDD00','syncing':'\uEB82','visible':'\uD83D\uDC40','airplay':'\uE800','adddate':'\uF070','picture':'\uD83C\uDF04','dislike':'\uD83D\uDC4E','compose':'\uD83D\uDCDD','refresh':'\u21BB','columns':'\uE9A2','signout':'\uEE02','log out':'\uEE02','target':'\u25CE','cursor':'\uE001','search':'\uD83D\uDD0E','zoomin':'\uE002','tablet':'\uEA01','laptop':'\uEA00','funnel':'\uE9B0','upload':'\uEB41','attach':'\uD83D\uDCCE','filter':'\uE9B0','pencil':'\u270E','ascend':'\u25B4','eraser':'\u2710','locked':'\uD83D\uDD12','secure':'\uD83D\uDD12','unlock':'\uD83D\uDD13','replay':'\u21BA','public':'\uD83D\uDD13','repeat':'\uD83D\uDD01','folder':'\uD83D\uDCC1','upleft':'\u2B09','iphone':'\uD83D\uDCF1','tagged':'\uE100','rewind':'\u23EA','record':'\u25CF','layout':'\uEDA0','action':'\uEE00','expand':'\u2922','sample':'\uE200','layers':'\uE202','videos':'\uD83D\uDCF9','photos':'\uD83C\uDF04','stroke':'\uE241','logout':'\uEE02','images':'\uD83C\uDF04','hyphen':'\u002D','remove':'\u002D','camera':'\uD83D\uDCF7','volume':'\uD83D\uDD08','delete':'\u2421','avatar':'\uD83D\uDC64','locate':'\uE670','mobile':'\uD83D\uDCF1','pause':'\uE8A0','zelda':'\uE1A0','write':'\u270E','nodes':'\uEB85','merge':'\uEB81','alert':'\u26A0','video':'\uD83D\uDCF9','world':'\uD83C\uDF0E','print':'\u2399','trash':'\uE0D0','photo':'\uD83C\uDF04','right':'\u27A1','image':'\uD83C\uDF04','phone':'\uD83D\uDCDE','reply':'\u21A9','heart':'\u2665','minus':'\u002D','erase':'\u2710','quote':'\u201C','check':'\u2713','sound':'\uD83D\uDD08','flask':'\uF4C0','share':'\uEE00','close':'\u2421','email':'\u2709','inbox':'\uD83D\uDCE5','visit':'\uEE00','audio':'\u266B','music':'\u266B','users':'\uD83D\uDC65','price':'\uD83D\uDCB2','house':'\u2302','timer':'\u23F1','cloud':'\u2601','eject':'\u23CF','earth':'\uD83C\uDF0E','globe':'\uD83C\uDF0E','clock':'\u23F2','list':'\uED50','time':'\u23F2','cell':'\uD83D\uDCF1','zoom':'\uE002','date':'\uD83D\uDCC5','home':'\u2302','ipad':'\uEA01','bell':'\uD83D\uDD14','cost':'\uD83D\uDCB2','cart':'\uE500','view':'\uD83D\uDC40','gear':'\u2699','user':'\uD83D\uDC64','talk':'\uD83D\uDCAC','chat':'\uD83D\uDCAC','look':'\uD83D\uDC40','fork':'\uEB80','mail':'\u2709','send':'\uE350','link':'\uD83D\uDD17','move':'\uE070','call':'\uD83D\uDCDE','plus':'\u002B','exit':'\uEE02','fill':'\uE240','info':'\u2139','crop':'\uE201','play':'\u25B6','star':'\u22C6','help':'\u2753','work':'\uD83D\uDCBC','stop':'\u25A0','drop':'\uD83D\uDCA7','love':'\u2665','edit':'\u270E','rows':'\uE9A1','city':'\uD83C\uDFE2','like':'\uD83D\uDC4D','redo':'\u21BB','flag':'\u2691','font':'\uED01','tags':'\uE100','down':'\u2B07','grid':'\uE9A0','text':'\uED00','left':'\u2B05','back':'\u2B05','skip':'\u23ED','page':'\uD83D\uDCC4','news':'\uD83D\uDCF0','sync':'\uEB82','file':'\uD83D\uDCC4','wifi':'\uEB84','next':'\u25BB','undo':'\u21BA','book':'\uD83D\uDCD5','lock':'\uD83D\uDD12','idea':'\uD83D\uDCA1','key':'\uD83D\uDD11','tag':'\uE100','fax':'\uD83D\uDCE0','map':'\uE673','out':'\uEE00','rss':'\uE310','add':'\u002B','ban':'\uD83D\uDEAB','cog':'\u2699','eye':'\uD83D\uDC40','hdd':'\uE7B0','box':'\uD83D\uDCE6','pin':'\uD83D\uDCCD','mic':'\uD83C\uDFA4','up':'\u2B06'};

  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};


(function(){

    'use strict';

    var Bbody = B(document.body);

    //Navigation
    (function(){

        B('#sidebar-trigger').click(function(e){
            e.preventDefault();
            Bbody.toggleClass('sidebar-open');
        });

    }());

}());