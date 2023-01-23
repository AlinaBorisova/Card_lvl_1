function e(e,t){var i=function(e){for(var t=e.split(/([.#])/),i="",n="",o=1;o<t.length;o+=2)switch(t[o]){case".":i+=" "+t[o+1];break;case"#":n=t[o+1]}return{className:i.trim(),tag:t[0]||"div",id:n}}(e),n=i.tag,o=i.id,r=i.className,l=t?document.createElementNS(t,n):document.createElement(n);return o&&(l.id=o),r&&(t?l.setAttribute("class",r):l.className=r),l}function t(e,t){var n=p(e),o=p(t);return t===o&&o.__redom_view&&(t=o.__redom_view),o.parentNode&&(i(t,o,n),n.removeChild(o)),t}function i(e,t,i){var o=t.__redom_lifecycle;if(n(o))t.__redom_lifecycle={};else{var r=i;for(t.__redom_mounted&&s(t,"onunmount");r;){var l=r.__redom_lifecycle||{};for(var a in o)l[a]&&(l[a]-=o[a]);n(l)&&(r.__redom_lifecycle=null),r=r.parentNode}}}function n(e){if(null==e)return!0;for(var t in e)if(e[t])return!1;return!0}var o=["onmount","onremount","onunmount"],r="undefined"!=typeof window&&"ShadowRoot"in window;function l(e,t,n,l){var a=p(e),u=p(t);t===u&&u.__redom_view&&(t=u.__redom_view),t!==u&&(u.__redom_view=t);var f=u.__redom_mounted,d=u.parentNode;if(f&&d!==a&&i(0,u,d),null!=n)if(l){var h=p(n);h.__redom_mounted&&s(h,"onunmount"),a.replaceChild(u,h)}else a.insertBefore(u,p(n));else a.appendChild(u);return function(e,t,i,n){for(var l=t.__redom_lifecycle||(t.__redom_lifecycle={}),a=i===n,u=!1,f=0,d=o;f<d.length;f+=1){var h=d[f];a||e!==t&&h in e&&(l[h]=(l[h]||0)+1),l[h]&&(u=!0)}if(!u)return void(t.__redom_lifecycle={});var v=i,_=!1;(a||v&&v.__redom_mounted)&&(s(t,a?"onremount":"onmount"),_=!0);for(;v;){var c=v.parentNode,p=v.__redom_lifecycle||(v.__redom_lifecycle={});for(var m in l)p[m]=(p[m]||0)+l[m];if(_)break;(v.nodeType===Node.DOCUMENT_NODE||r&&v instanceof ShadowRoot||c&&c.__redom_mounted)&&(s(v,a?"onremount":"onmount"),_=!0),v=c}}(t,u,a,d),t}function s(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);var i=e.__redom_lifecycle;if(i){var n=e.__redom_view,o=0;for(var r in n&&n[t]&&n[t](),i)r&&o++;if(o)for(var l=e.firstChild;l;){var a=l.nextSibling;s(l,t),l=a}}}function a(e,t,i){e.style[t]=null==i?"":i}var u="http://www.w3.org/1999/xlink";function f(e,t,i,n){var o=p(e);if("object"==typeof t)for(var r in t)f(o,r,t[r],n);else{var l=o instanceof SVGElement,s="function"==typeof i;if("style"===t&&"object"==typeof i)!function(e,t,i){var n=p(e);if("object"==typeof t)for(var o in t)a(n,o,t[o]);else a(n,t,i)}(o,i);else if(l&&s)o[t]=i;else if("dataset"===t)h(o,i);else if(l||!(t in o)&&!s||"list"===t){if(l&&"xlink"===t)return void d(o,i);n&&"class"===t&&(i=o.className+" "+i),null==i?o.removeAttribute(t):o.setAttribute(t,i)}else o[t]=i}}function d(e,t,i){if("object"==typeof t)for(var n in t)d(e,n,t[n]);else null!=i?e.setAttributeNS(u,t,i):e.removeAttributeNS(u,t,i)}function h(e,t,i){if("object"==typeof t)for(var n in t)h(e,n,t[n]);else null!=i?e.dataset[t]=i:delete e.dataset[t]}function v(e){return document.createTextNode(null!=e?e:"")}function _(e,t,i){for(var n=0,o=t;n<o.length;n+=1){var r=o[n];if(0===r||r){var s=typeof r;"function"===s?r(e):"string"===s||"number"===s?e.appendChild(v(r)):m(p(r))?l(e,r):r.length?_(e,r,i):"object"===s&&f(e,r,null,i)}}}function c(e){return"string"==typeof e?w(e):p(e)}function p(e){return e.nodeType&&e||!e.el&&e||p(e.el)}function m(e){return e&&e.nodeType}function w(t){for(var i,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];var r=typeof t;if("string"===r)i=e(t);else{if("function"!==r)throw new Error("At least one argument required");var l=t;i=new(Function.prototype.bind.apply(l,[null].concat(n)))}return _(p(i),n,!0),i}function y(e){for(var i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];for(var o=p(e),r=g(e,i,o.firstChild);r;){var l=r.nextSibling;t(e,r),r=l}}function g(e,t,i){for(var n=i,o=Array(t.length),r=0;r<t.length;r++)o[r]=t[r]&&p(t[r]);for(var s=0;s<t.length;s++){var a=t[s];if(a){var u=o[s];if(u!==n)if(m(u)){var f=n&&n.nextSibling,d=null!=a.__redom_index&&f===o[s+1];l(e,a,n,d),d&&(n=f)}else null!=a.length&&(n=g(e,a,n));else n=n.nextSibling}}return n}w.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return w.bind.apply(w,[this].concat(e))};var b=function(e,t,i){this.View=e,this.initData=i,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:function(e){return function(t){return t[e]}}(t))};b.prototype.update=function(e,t){for(var i=this,n=i.View,o=i.key,r=i.initData,l=null!=o,s=this.lookup,a={},u=Array(e.length),f=this.views,d=0;d<e.length;d++){var h=e[d],v=void 0;if(l){var _=o(h);v=s[_]||new n(r,h,d,e),a[_]=v,v.__redom_id=_}else v=f[d]||new n(r,h,d,e);v.update&&v.update(h,d,e,t),p(v.el).__redom_view=v,u[d]=v}this.oldViews=f,this.views=u,this.oldLookup=s,this.lookup=a};var N=function(e,t,i,n){this.View=t,this.initData=n,this.views=[],this.pool=new b(t,i,n),this.el=c(e),this.keySet=null!=i};N.prototype.update=function(e,i){void 0===e&&(e=[]);var n=this.keySet,o=this.views;this.pool.update(e,i);var r=this.pool,l=r.views,s=r.lookup;if(n)for(var a=0;a<o.length;a++){var u=o[a];null==s[u.__redom_id]&&(u.__redom_index=null,t(this,u))}for(var f=0;f<l.length;f++){l[f].__redom_index=f}y(this,l),n&&(this.lookup=s),this.views=l},N.extend=function(e,t,i,n){return N.bind(N,e,t,i,n)},N.extend;var k=function(e,t){this.el=v(""),this.visible=!1,this.view=null,this._placeholder=this.el,e instanceof Node?this._el=e:e.el instanceof Node?(this._el=e,this.view=e):this._View=e,this._initData=t};k.prototype.update=function(e,i){var n=this._placeholder,o=this.el.parentNode;if(e){if(!this.visible)if(this._el)l(o,this._el,n),t(o,n),this.el=p(this._el),this.visible=e;else{var r=new(0,this._View)(this._initData);this.el=p(r),this.view=r,l(o,r,n),t(o,n)}this.view&&this.view.update&&this.view.update(i)}else if(this.visible){if(this._el)return l(o,n,this._el),t(o,this._el),this.el=n,void(this.visible=e);l(o,n,this.view),t(o,this.view),this.el=n,this.view=null}this.visible=e};var x=function(e,t,i){this.el=c(e),this.Views=t,this.initData=i};x.prototype.update=function(e,t){if(e!==this.route){var i=this.Views[e];this.route=e,i&&(i instanceof Node||i.el instanceof Node)?this.view=i:this.view=i&&new i(this.initData,t),y(this.el,[this.view])}this.view&&this.view.update&&this.view.update(t,e)};var S="http://www.w3.org/2000/svg";function V(t){for(var i,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];var r=typeof t;if("string"===r)i=e(t,S);else{if("function"!==r)throw new Error("At least one argument required");var l=t;i=new(Function.prototype.bind.apply(l,[null].concat(n)))}return _(p(i),n,!0),i}V.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return V.bind.apply(V,[this].concat(e))},V.ns=S;console.log("sss");
//# sourceMappingURL=index.1f18db2a.js.map