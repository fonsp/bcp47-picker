var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},e=i.parcelRequire8737;null==e&&((e=function(i){if(i in a)return a[i].exports;if(i in n){var e=n[i];delete n[i];var s={id:i,exports:{}};return a[i]=s,e.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+i+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(i,a){n[i]=a},i.parcelRequire8737=e),e.register("drXKr",(function(i,a){var n=e("b1Gnp"),s=/^[\s]*$/,o=[{regex:/[åäàáâãæ]/gi,alternate:"a"},{regex:/[èéêë]/gi,alternate:"e"},{regex:/[ìíîï]/gi,alternate:"i"},{regex:/[òóôõö]/gi,alternate:"o"},{regex:/[ùúûü]/gi,alternate:"u"},{regex:/[æ]/gi,alternate:"ae"}];String.prototype.replaceCharAt=function(i,a){return this.substr(0,i)+a+this.substr(i+a.length)};var l=function(i,a){this.options=a||{},this.options.ignoreCase=void 0===this.options.ignoreCase||this.options.ignoreCase,this.options.maxCacheSize=this.options.maxCacheSize||64,this.options.cache=!this.options.hasOwnProperty("cache")||this.options.cache,this.options.splitOnRegEx=this.options.hasOwnProperty("splitOnRegEx")?this.options.splitOnRegEx:/\s/g,this.options.splitOnGetRegEx=this.options.hasOwnProperty("splitOnGetRegEx")?this.options.splitOnGetRegEx:this.options.splitOnRegEx,this.options.min=this.options.min||1,this.options.keepAll=!!this.options.hasOwnProperty("keepAll")&&this.options.keepAll,this.options.keepAllKey=this.options.hasOwnProperty("keepAllKey")?this.options.keepAllKey:"id",this.options.idFieldOrFunction=this.options.hasOwnProperty("idFieldOrFunction")?this.options.idFieldOrFunction:void 0,this.options.expandRegexes=this.options.expandRegexes||o,this.options.insertFullUnsplitKey=!!this.options.hasOwnProperty("insertFullUnsplitKey")&&this.options.insertFullUnsplitKey,this.keyFields=i?i instanceof Array?i:[i]:[],this.root={},this.size=0,this.options.cache&&(this.getCache=new n("key"))};function u(i,a){return 1===a.length?i[a[0]]:u(i[a[0]],a.slice(1,a.length))}l.prototype={add:function(i,a){this.options.cache&&this.clearCache(),"number"==typeof a&&(a=void 0);var n=a||this.keyFields;for(var e in n){var s=n[e],o=s instanceof Array?u(i,s):i[s];if(o){o=o.toString();for(var l=this.expandString(o),t=0;t<l.length;t++){var h=l[t];this.map(h,i)}}}},expandString:function(i){var a=[i];if(this.options.expandRegexes&&this.options.expandRegexes.length)for(var n=0;n<this.options.expandRegexes.length;n++)for(var e,s=this.options.expandRegexes[n];null!==(e=s.regex.exec(i));){var o=i.replaceCharAt(e.index,s.alternate);a.push(o)}return a},addAll:function(i,a){for(var n=0;n<i.length;n++)this.add(i[n],a)},reset:function(){this.root={},this.size=0},clearCache:function(){this.getCache=new n("key")},cleanCache:function(){for(;this.getCache.all.length>this.options.maxCacheSize;)this.getCache.remove(this.getCache.all[0])},addFromObject:function(i,a){for(var n in this.options.cache&&this.clearCache(),a=a||"value",-1==this.keyFields.indexOf("_key_")&&this.keyFields.push("_key_"),i){var e={_key_:n};e[a]=i[n],this.add(e)}},map:function(i,a){if(this.options.splitOnRegEx&&this.options.splitOnRegEx.test(i)){var e=i.split(this.options.splitOnRegEx),o=e.filter((function(i){return s.test(i)}));if(!(e.filter((function(a){return a===i})).length+o.length===e.length)){for(var l=0,u=e.length;l<u;l++)s.test(e[l])||this.map(e[l],a);if(!this.options.insertFullUnsplitKey)return}}this.options.cache&&this.clearCache(),this.options.keepAll&&(this.indexed=this.indexed||new n([this.options.keepAllKey]),this.indexed.add(a)),this.options.ignoreCase&&(i=i.toLowerCase());var t=this.keyToArr(i),h=this;!function i(a,n,e){if(0==a.length)return e.value=e.value||[],void e.value.push(n);var s=a.shift();e[s]||h.size++;e[s]=e[s]||{},i(a,n,e[s])}(t,a,this.root)},keyToArr:function(i){var a;if(this.options.min&&this.options.min>1){if(i.length<this.options.min)return[];a=(a=[i.substr(0,this.options.min)]).concat(i.substr(this.options.min).split(""))}else a=i.split("");return a},findNode:function(i){return function i(a,n){if(!n)return;if(0==a.length)return n;var e=a.shift();return i(a,n[e])}(this.keyToArr(i),this.root)},_getCacheKey:function(i,a){var n=i;return a&&(n=i+"_"+a),n},_get:function(i,a){var e,s;if(i=this.options.ignoreCase?i.toLowerCase():i,this.options.cache&&(e=this.getCache.get(this._getCacheKey(i,a))))return e.value;for(var o=void 0,l=this.options.indexField?[this.options.indexField]:this.keyFields,u=this.options.splitOnGetRegEx?i.split(this.options.splitOnGetRegEx):[i],t=0,h=u.length;t<h;t++)if(!(this.options.min&&u[t].length<this.options.min)){var d=new n(l);(s=this.findNode(u[t]))&&r(s,d),o=o?o.intersection(d):d}var p=o?o.all:[];if(this.options.cache){var m=this._getCacheKey(i,a);this.getCache.add({key:m,value:p}),this.cleanCache()}return p;function r(i,n){if(!a||n.all.length!==a){if(i.value&&i.value.length){if(a&&!(n.all.length+i.value.length<a))return void n.addAll(i.value.slice(0,a-n.all.length));n.addAll(i.value)}for(var e in i){if(a&&n.all.length===a)return;"value"!=e&&r(i[e],n)}}}},get:function(i,a,e){var s=this.options.indexField?[this.options.indexField]:this.keyFields,o=void 0,l=void 0;if(a&&!this.options.idFieldOrFunction)throw new Error("To use the accumulator, you must specify and idFieldOrFunction");for(var u=0,t=(i=i instanceof Array?i:[i]).length;u<t;u++){var h=this._get(i[u],e);a?l=a(l,i[u],h,this):o=o?o.addAll(h):new n(s).addAll(h)}return a?l:o.all},search:function(i,a){return this.get(i,a)},getId:function(i){return"function"==typeof this.options.idFieldOrFunction?this.options.idFieldOrFunction(i):i[this.options.idFieldOrFunction]}},l.UNION_REDUCER=function(i,a,n,e){if(void 0===i)return n;var s,o,l={},u=Math.max(i.length,n.length),t=[],h=0;for(s=0;s<u;s++)s<i.length&&(l[o=e.getId(i[s])]=l[o]?l[o]:0,l[o]++,2===l[o]&&(t[h++]=i[s])),s<n.length&&(l[o=e.getId(n[s])]=l[o]?l[o]:0,l[o]++,2===l[o]&&(t[h++]=n[s]));return t},i.exports=l})),e.register("b1Gnp",(function(i,a){i.exports=e("ilA2L")})),e.register("ilA2L",(function(i,a){var n=e("3TmCb")._extend({init:function(i,a,n){i=i instanceof Array?i:[i],this._map={},this._list=[],this.callback=a,this.keyFields=i,this.isHashArray=!0,this.options=n||{ignoreDuplicates:!1},a&&a("construct")},addOne:function(i){var a=!1;for(var n in this.keyFields){n=this.keyFields[n];var e=this.objectAt(i,n);if(e)if(this.has(e)){if(this.options.ignoreDuplicates)return;if(-1!=this._map[e].indexOf(i)){a=!0;continue}this._map[e].push(i)}else this._map[e]=[i]}a&&-1!=this._list.indexOf(i)||this._list.push(i)},add:function(){for(var i=0;i<arguments.length;i++)this.addOne(arguments[i]);return this.callback&&this.callback("add",Array.prototype.slice.call(arguments,0)),this},addAll:function(i){if(i.length<100)this.add.apply(this,i);else for(var a=0;a<i.length;a++)this.add(i[a]);return this},addMap:function(i,a){return this._map[i]=a,this.callback&&this.callback("addMap",{key:i,obj:a}),this},intersection:function(i){var a=this;if(!i||!i.isHashArray)throw Error("Cannot HashArray.intersection() on a non-hasharray object. You passed in: ",i);var n=this.clone(null,!0);return this.clone(null,!0).addAll(this.all.concat(i.all)).all.forEach((function(e){a.collides(e)&&i.collides(e)&&n.add(e)})),n},complement:function(i){if(!i||!i.isHashArray)throw Error("Cannot HashArray.complement() on a non-hasharray object. You passed in: ",i);var a=this.clone(null,!0);return this.all.forEach((function(n){i.collides(n)||a.add(n)})),a},get:function(i){if(this.has(i))return this._map[i]instanceof Array&&1==this._map[i].length?this._map[i][0]:this._map[i]},getAll:function(i){if("*"==(i=i instanceof Array?i:[i])[0])return this.all;var a=new n(this.keyFields);for(var e in i)a.add.apply(a,this.getAsArray(i[e]));return a.all},getAsArray:function(i){return this._map[i]||[]},getUniqueRandomIntegers:function(i,a,n){var e=[],s={};for(i=Math.min(Math.max(n-a,1),i);e.length<i;){var o=Math.floor(a+Math.random()*(n+1));s[o]||(s[o]=!0,e.push(o))}return e},sample:function(i,a){var n=this.all,e=[];a&&(n=this.getAll(a));for(var s=this.getUniqueRandomIntegers(i,0,n.length-1),o=0;o<s.length;o++)e.push(n[s[o]]);return e},has:function(i){return this._map.hasOwnProperty(i)},collides:function(i){for(var a in this.keyFields)if(this.has(this.objectAt(i,this.keyFields[a])))return!0;return!1},hasMultiple:function(i){return this._map[i]instanceof Array},removeByKey:function(){for(var i=[],a=0;a<arguments.length;a++){var n=arguments[a],e=this._map[n].concat();if(e)for(var s in i=i.concat(e),e){var o=e[s];for(var l in this.keyFields){var u=this.objectAt(o,this.keyFields[l]);if(u&&this.has(u))-1!=(l=this._map[u].indexOf(o))&&this._map[u].splice(l,1),0==this._map[u].length&&delete this._map[u]}this._list.splice(this._list.indexOf(o),1)}delete this._map[n]}return this.callback&&this.callback("removeByKey",i),this},remove:function(){for(var i=0;i<arguments.length;i++){var a=arguments[i];for(var n in this.keyFields){var e=this.objectAt(a,this.keyFields[n]);if(e){if(-1==(n=this._map[e].indexOf(a)))throw new Error("HashArray: attempting to remove an object that was never added!"+e);this._map[e].splice(n,1),0==this._map[e].length&&delete this._map[e]}}if(-1==(n=this._list.indexOf(a)))throw new Error("HashArray: attempting to remove an object that was never added!"+e);this._list.splice(n,1)}return this.callback&&this.callback("remove",arguments),this},removeAll:function(){var i=this._list.concat();return this._map={},this._list=[],this.callback&&this.callback("remove",i),this},objectAt:function(i,a){if("string"==typeof a)return i[a];for(var n=a.concat();n.length&&i;)i=i[n.shift()];return i},forEach:function(i,a){return i=i instanceof Array?i:[i],this.getAll(i).forEach(a),this},forEachDeep:function(i,a,n){i=i instanceof Array?i:[i];var e=this;return this.getAll(i).forEach((function(i){n(e.objectAt(i,a),i)})),this},clone:function(i,a){var e=new n(this.keyFields.concat(),i||this.callback);return a||e.add.apply(e,this.all.concat()),e},sum:function(i,a,n){var e=this,s=0;return this.forEachDeep(i,a,(function(i,a){void 0!==n&&(i*=e.objectAt(a,n)),s+=i})),s},average:function(i,a,n){var e=0,s=0,o=0,l=this;return void 0!==n&&this.forEachDeep(i,n,(function(i){o+=i})),this.forEachDeep(i,a,(function(i,a){void 0!==n&&(i*=l.objectAt(a,n)/o),e+=i,s++})),void 0!==n?e:e/s},filter:function(i,a){var e=this,s="function"==typeof a?a:function(i){var n=e.objectAt(i,a);return void 0!==n&&!1!==n},o=new n(this.keyFields);return o.addAll(this.getAll(i).filter(s)),o}});Object.defineProperty(n.prototype,"all",{get:function(){return this._list}}),Object.defineProperty(n.prototype,"map",{get:function(){return this._map}}),i.exports=n,"undefined"!=typeof window&&(window.HashArray=n)})),e.register("3TmCb",(function(i,a){var n;n=function(){var i=function(i){return i instanceof Function},a=function(i){var a=Array.prototype.slice.call(arguments,1);for(var n in a){var e=a[n];if("object"==typeof e)for(var s in e)i[s]=e[s]}return i},n={_isClassObject:!1},e=!1,s=function(){};return s._subClasses=[],s.prototype.init=function(){},s._extend=function(o,l,u){void 0===o&&(o={}),void 0===l&&(l={}),void 0===u&&(u={}),u=a({},n,u);var t=function(){e||(this._class=t,this.init instanceof Function&&this.init.apply(this,arguments))},h=this;e=!0;var d=new h;e=!1;var p=h.prototype;for(var m in t.prototype=d,t.prototype.constructor=t,t._superClass=h,t._subClasses=[],h._subClasses.push(t),t._extend=h._extend,t._extends=function(i){return this._superClass!=s&&(i==this._superClass||i==s||this._superClass._extends(i))},o){var r=Object.getOwnPropertyDescriptor(o,m),g=r.value;if(null!==g&&"object"==typeof g&&g.descriptor)Object.defineProperty(d,m,g);else if("value"in r||!("set"in r)&&!("get"in r)){d[m]=g;var v=p[m];i(g)&&i(v)&&g!==v&&(g._super=v)}else Object.defineProperty(d,m,r)}if(!u._isClassObject){var c=void 0===h._members?s:h._members._class,x=a({},u,{_isClassObject:!0}),y=c._extend(l,{},x);y._instanceClass=t,t._members=new y}return t},s._convert=function(i,a){var n=i.prototype;return n.init=function(){var a=this._origin=s._construct(i,arguments);Object.keys(a).forEach((function(i){a.hasOwnProperty(i)&&Object.defineProperty(this,i,{get:function(){return a[i]}})}),this)},s._extend(n,{},a)},s._construct=function(i,a){void 0===a&&(a=[]);var n=function(){return i.apply(this,a)};return n.prototype=i.prototype,new n},s._superDescriptor=function(i,a){return"_class"in i&&i instanceof i._class&&(i=i._class),"_extends"in i&&i._extends instanceof Function&&i._extends(this)?Object.getOwnPropertyDescriptor(i._superClass.prototype,a):void 0},s},"function"==typeof define&&define.amd?define([],n):"object"==typeof a?(a=n(),"object"==typeof i&&(i.exports=a)):window?window.JClass=n():"object"==typeof console&&console.error instanceof Function&&console.error("cannot determine environment")}));class s extends Map{set(i,a){return super.set(i,a),a}}class o extends WeakMap{set(i,a){return super.set(i,a),a}}
//# sourceMappingURL=index.daa99e88.js.map