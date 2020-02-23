// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/font/fontstylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./mont-bold-webfont.eot":[["mont-bold-webfont.47dff3c9.eot","styles/font/mont-bold-webfont.eot"],"styles/font/mont-bold-webfont.eot"],"./mont-bold-webfont.woff2":[["mont-bold-webfont.538137de.woff2","styles/font/mont-bold-webfont.woff2"],"styles/font/mont-bold-webfont.woff2"],"./mont-bold-webfont.woff":[["mont-bold-webfont.3507a0ac.woff","styles/font/mont-bold-webfont.woff"],"styles/font/mont-bold-webfont.woff"],"./mont-bold-webfont.ttf":[["mont-bold-webfont.1025170f.ttf","styles/font/mont-bold-webfont.ttf"],"styles/font/mont-bold-webfont.ttf"],"./mont-bold-webfont.svg":[["mont-bold-webfont.da088563.svg","styles/font/mont-bold-webfont.svg"],"styles/font/mont-bold-webfont.svg"],"./mont-book-webfont.eot":[["mont-book-webfont.cb1474d5.eot","styles/font/mont-book-webfont.eot"],"styles/font/mont-book-webfont.eot"],"./mont-book-webfont.woff2":[["mont-book-webfont.b1b3aa32.woff2","styles/font/mont-book-webfont.woff2"],"styles/font/mont-book-webfont.woff2"],"./mont-book-webfont.woff":[["mont-book-webfont.cdc80ac2.woff","styles/font/mont-book-webfont.woff"],"styles/font/mont-book-webfont.woff"],"./mont-book-webfont.ttf":[["mont-book-webfont.a719ea7c.ttf","styles/font/mont-book-webfont.ttf"],"styles/font/mont-book-webfont.ttf"],"./mont-book-webfont.svg":[["mont-book-webfont.30ab8e22.svg","styles/font/mont-book-webfont.svg"],"styles/font/mont-book-webfont.svg"],"_css_loader":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/symbol-observable/es/ponyfill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = symbolObservablePonyfill;

function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}

;
},{}],"../node_modules/symbol-observable/es/index.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ponyfill = _interopRequireDefault(require("./ponyfill.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill.default)(root);
var _default = result;
exports.default = _default;
},{"./ponyfill.js":"../node_modules/symbol-observable/es/ponyfill.js"}],"../node_modules/xstream/index.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var symbol_observable_1 = require("symbol-observable");
var NO = {};
exports.NO = NO;
function noop() { }
function cp(a) {
    var l = a.length;
    var b = Array(l);
    for (var i = 0; i < l; ++i)
        b[i] = a[i];
    return b;
}
function and(f1, f2) {
    return function andFn(t) {
        return f1(t) && f2(t);
    };
}
function _try(c, t, u) {
    try {
        return c.f(t);
    }
    catch (e) {
        u._e(e);
        return NO;
    }
}
var NO_IL = {
    _n: noop,
    _e: noop,
    _c: noop,
};
exports.NO_IL = NO_IL;
// mutates the input
function internalizeProducer(producer) {
    producer._start = function _start(il) {
        il.next = il._n;
        il.error = il._e;
        il.complete = il._c;
        this.start(il);
    };
    producer._stop = producer.stop;
}
var StreamSub = /** @class */ (function () {
    function StreamSub(_stream, _listener) {
        this._stream = _stream;
        this._listener = _listener;
    }
    StreamSub.prototype.unsubscribe = function () {
        this._stream._remove(this._listener);
    };
    return StreamSub;
}());
var Observer = /** @class */ (function () {
    function Observer(_listener) {
        this._listener = _listener;
    }
    Observer.prototype.next = function (value) {
        this._listener._n(value);
    };
    Observer.prototype.error = function (err) {
        this._listener._e(err);
    };
    Observer.prototype.complete = function () {
        this._listener._c();
    };
    return Observer;
}());
var FromObservable = /** @class */ (function () {
    function FromObservable(observable) {
        this.type = 'fromObservable';
        this.ins = observable;
        this.active = false;
    }
    FromObservable.prototype._start = function (out) {
        this.out = out;
        this.active = true;
        this._sub = this.ins.subscribe(new Observer(out));
        if (!this.active)
            this._sub.unsubscribe();
    };
    FromObservable.prototype._stop = function () {
        if (this._sub)
            this._sub.unsubscribe();
        this.active = false;
    };
    return FromObservable;
}());
var Merge = /** @class */ (function () {
    function Merge(insArr) {
        this.type = 'merge';
        this.insArr = insArr;
        this.out = NO;
        this.ac = 0;
    }
    Merge.prototype._start = function (out) {
        this.out = out;
        var s = this.insArr;
        var L = s.length;
        this.ac = L;
        for (var i = 0; i < L; i++)
            s[i]._add(this);
    };
    Merge.prototype._stop = function () {
        var s = this.insArr;
        var L = s.length;
        for (var i = 0; i < L; i++)
            s[i]._remove(this);
        this.out = NO;
    };
    Merge.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    Merge.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Merge.prototype._c = function () {
        if (--this.ac <= 0) {
            var u = this.out;
            if (u === NO)
                return;
            u._c();
        }
    };
    return Merge;
}());
var CombineListener = /** @class */ (function () {
    function CombineListener(i, out, p) {
        this.i = i;
        this.out = out;
        this.p = p;
        p.ils.push(this);
    }
    CombineListener.prototype._n = function (t) {
        var p = this.p, out = this.out;
        if (out === NO)
            return;
        if (p.up(t, this.i)) {
            var a = p.vals;
            var l = a.length;
            var b = Array(l);
            for (var i = 0; i < l; ++i)
                b[i] = a[i];
            out._n(b);
        }
    };
    CombineListener.prototype._e = function (err) {
        var out = this.out;
        if (out === NO)
            return;
        out._e(err);
    };
    CombineListener.prototype._c = function () {
        var p = this.p;
        if (p.out === NO)
            return;
        if (--p.Nc === 0)
            p.out._c();
    };
    return CombineListener;
}());
var Combine = /** @class */ (function () {
    function Combine(insArr) {
        this.type = 'combine';
        this.insArr = insArr;
        this.out = NO;
        this.ils = [];
        this.Nc = this.Nn = 0;
        this.vals = [];
    }
    Combine.prototype.up = function (t, i) {
        var v = this.vals[i];
        var Nn = !this.Nn ? 0 : v === NO ? --this.Nn : this.Nn;
        this.vals[i] = t;
        return Nn === 0;
    };
    Combine.prototype._start = function (out) {
        this.out = out;
        var s = this.insArr;
        var n = this.Nc = this.Nn = s.length;
        var vals = this.vals = new Array(n);
        if (n === 0) {
            out._n([]);
            out._c();
        }
        else {
            for (var i = 0; i < n; i++) {
                vals[i] = NO;
                s[i]._add(new CombineListener(i, out, this));
            }
        }
    };
    Combine.prototype._stop = function () {
        var s = this.insArr;
        var n = s.length;
        var ils = this.ils;
        for (var i = 0; i < n; i++)
            s[i]._remove(ils[i]);
        this.out = NO;
        this.ils = [];
        this.vals = [];
    };
    return Combine;
}());
var FromArray = /** @class */ (function () {
    function FromArray(a) {
        this.type = 'fromArray';
        this.a = a;
    }
    FromArray.prototype._start = function (out) {
        var a = this.a;
        for (var i = 0, n = a.length; i < n; i++)
            out._n(a[i]);
        out._c();
    };
    FromArray.prototype._stop = function () {
    };
    return FromArray;
}());
var FromPromise = /** @class */ (function () {
    function FromPromise(p) {
        this.type = 'fromPromise';
        this.on = false;
        this.p = p;
    }
    FromPromise.prototype._start = function (out) {
        var prod = this;
        this.on = true;
        this.p.then(function (v) {
            if (prod.on) {
                out._n(v);
                out._c();
            }
        }, function (e) {
            out._e(e);
        }).then(noop, function (err) {
            setTimeout(function () { throw err; });
        });
    };
    FromPromise.prototype._stop = function () {
        this.on = false;
    };
    return FromPromise;
}());
var Periodic = /** @class */ (function () {
    function Periodic(period) {
        this.type = 'periodic';
        this.period = period;
        this.intervalID = -1;
        this.i = 0;
    }
    Periodic.prototype._start = function (out) {
        var self = this;
        function intervalHandler() { out._n(self.i++); }
        this.intervalID = setInterval(intervalHandler, this.period);
    };
    Periodic.prototype._stop = function () {
        if (this.intervalID !== -1)
            clearInterval(this.intervalID);
        this.intervalID = -1;
        this.i = 0;
    };
    return Periodic;
}());
var Debug = /** @class */ (function () {
    function Debug(ins, arg) {
        this.type = 'debug';
        this.ins = ins;
        this.out = NO;
        this.s = noop;
        this.l = '';
        if (typeof arg === 'string')
            this.l = arg;
        else if (typeof arg === 'function')
            this.s = arg;
    }
    Debug.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    Debug.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    Debug.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var s = this.s, l = this.l;
        if (s !== noop) {
            try {
                s(t);
            }
            catch (e) {
                u._e(e);
            }
        }
        else if (l)
            console.log(l + ':', t);
        else
            console.log(t);
        u._n(t);
    };
    Debug.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Debug.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Debug;
}());
var Drop = /** @class */ (function () {
    function Drop(max, ins) {
        this.type = 'drop';
        this.ins = ins;
        this.out = NO;
        this.max = max;
        this.dropped = 0;
    }
    Drop.prototype._start = function (out) {
        this.out = out;
        this.dropped = 0;
        this.ins._add(this);
    };
    Drop.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    Drop.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        if (this.dropped++ >= this.max)
            u._n(t);
    };
    Drop.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Drop.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Drop;
}());
var EndWhenListener = /** @class */ (function () {
    function EndWhenListener(out, op) {
        this.out = out;
        this.op = op;
    }
    EndWhenListener.prototype._n = function () {
        this.op.end();
    };
    EndWhenListener.prototype._e = function (err) {
        this.out._e(err);
    };
    EndWhenListener.prototype._c = function () {
        this.op.end();
    };
    return EndWhenListener;
}());
var EndWhen = /** @class */ (function () {
    function EndWhen(o, ins) {
        this.type = 'endWhen';
        this.ins = ins;
        this.out = NO;
        this.o = o;
        this.oil = NO_IL;
    }
    EndWhen.prototype._start = function (out) {
        this.out = out;
        this.o._add(this.oil = new EndWhenListener(out, this));
        this.ins._add(this);
    };
    EndWhen.prototype._stop = function () {
        this.ins._remove(this);
        this.o._remove(this.oil);
        this.out = NO;
        this.oil = NO_IL;
    };
    EndWhen.prototype.end = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    EndWhen.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    EndWhen.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    EndWhen.prototype._c = function () {
        this.end();
    };
    return EndWhen;
}());
var Filter = /** @class */ (function () {
    function Filter(passes, ins) {
        this.type = 'filter';
        this.ins = ins;
        this.out = NO;
        this.f = passes;
    }
    Filter.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    Filter.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    Filter.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var r = _try(this, t, u);
        if (r === NO || !r)
            return;
        u._n(t);
    };
    Filter.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Filter.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Filter;
}());
var FlattenListener = /** @class */ (function () {
    function FlattenListener(out, op) {
        this.out = out;
        this.op = op;
    }
    FlattenListener.prototype._n = function (t) {
        this.out._n(t);
    };
    FlattenListener.prototype._e = function (err) {
        this.out._e(err);
    };
    FlattenListener.prototype._c = function () {
        this.op.inner = NO;
        this.op.less();
    };
    return FlattenListener;
}());
var Flatten = /** @class */ (function () {
    function Flatten(ins) {
        this.type = 'flatten';
        this.ins = ins;
        this.out = NO;
        this.open = true;
        this.inner = NO;
        this.il = NO_IL;
    }
    Flatten.prototype._start = function (out) {
        this.out = out;
        this.open = true;
        this.inner = NO;
        this.il = NO_IL;
        this.ins._add(this);
    };
    Flatten.prototype._stop = function () {
        this.ins._remove(this);
        if (this.inner !== NO)
            this.inner._remove(this.il);
        this.out = NO;
        this.open = true;
        this.inner = NO;
        this.il = NO_IL;
    };
    Flatten.prototype.less = function () {
        var u = this.out;
        if (u === NO)
            return;
        if (!this.open && this.inner === NO)
            u._c();
    };
    Flatten.prototype._n = function (s) {
        var u = this.out;
        if (u === NO)
            return;
        var _a = this, inner = _a.inner, il = _a.il;
        if (inner !== NO && il !== NO_IL)
            inner._remove(il);
        (this.inner = s)._add(this.il = new FlattenListener(u, this));
    };
    Flatten.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Flatten.prototype._c = function () {
        this.open = false;
        this.less();
    };
    return Flatten;
}());
var Fold = /** @class */ (function () {
    function Fold(f, seed, ins) {
        var _this = this;
        this.type = 'fold';
        this.ins = ins;
        this.out = NO;
        this.f = function (t) { return f(_this.acc, t); };
        this.acc = this.seed = seed;
    }
    Fold.prototype._start = function (out) {
        this.out = out;
        this.acc = this.seed;
        out._n(this.acc);
        this.ins._add(this);
    };
    Fold.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
        this.acc = this.seed;
    };
    Fold.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var r = _try(this, t, u);
        if (r === NO)
            return;
        u._n(this.acc = r);
    };
    Fold.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Fold.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Fold;
}());
var Last = /** @class */ (function () {
    function Last(ins) {
        this.type = 'last';
        this.ins = ins;
        this.out = NO;
        this.has = false;
        this.val = NO;
    }
    Last.prototype._start = function (out) {
        this.out = out;
        this.has = false;
        this.ins._add(this);
    };
    Last.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
        this.val = NO;
    };
    Last.prototype._n = function (t) {
        this.has = true;
        this.val = t;
    };
    Last.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Last.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        if (this.has) {
            u._n(this.val);
            u._c();
        }
        else
            u._e(new Error('last() failed because input stream completed'));
    };
    return Last;
}());
var MapOp = /** @class */ (function () {
    function MapOp(project, ins) {
        this.type = 'map';
        this.ins = ins;
        this.out = NO;
        this.f = project;
    }
    MapOp.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    MapOp.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    MapOp.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var r = _try(this, t, u);
        if (r === NO)
            return;
        u._n(r);
    };
    MapOp.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    MapOp.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return MapOp;
}());
var Remember = /** @class */ (function () {
    function Remember(ins) {
        this.type = 'remember';
        this.ins = ins;
        this.out = NO;
    }
    Remember.prototype._start = function (out) {
        this.out = out;
        this.ins._add(out);
    };
    Remember.prototype._stop = function () {
        this.ins._remove(this.out);
        this.out = NO;
    };
    return Remember;
}());
var ReplaceError = /** @class */ (function () {
    function ReplaceError(replacer, ins) {
        this.type = 'replaceError';
        this.ins = ins;
        this.out = NO;
        this.f = replacer;
    }
    ReplaceError.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    ReplaceError.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    ReplaceError.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    ReplaceError.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        try {
            this.ins._remove(this);
            (this.ins = this.f(err))._add(this);
        }
        catch (e) {
            u._e(e);
        }
    };
    ReplaceError.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return ReplaceError;
}());
var StartWith = /** @class */ (function () {
    function StartWith(ins, val) {
        this.type = 'startWith';
        this.ins = ins;
        this.out = NO;
        this.val = val;
    }
    StartWith.prototype._start = function (out) {
        this.out = out;
        this.out._n(this.val);
        this.ins._add(out);
    };
    StartWith.prototype._stop = function () {
        this.ins._remove(this.out);
        this.out = NO;
    };
    return StartWith;
}());
var Take = /** @class */ (function () {
    function Take(max, ins) {
        this.type = 'take';
        this.ins = ins;
        this.out = NO;
        this.max = max;
        this.taken = 0;
    }
    Take.prototype._start = function (out) {
        this.out = out;
        this.taken = 0;
        if (this.max <= 0)
            out._c();
        else
            this.ins._add(this);
    };
    Take.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    Take.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var m = ++this.taken;
        if (m < this.max)
            u._n(t);
        else if (m === this.max) {
            u._n(t);
            u._c();
        }
    };
    Take.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    Take.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return Take;
}());
var Stream = /** @class */ (function () {
    function Stream(producer) {
        this._prod = producer || NO;
        this._ils = [];
        this._stopID = NO;
        this._dl = NO;
        this._d = false;
        this._target = NO;
        this._err = NO;
    }
    Stream.prototype._n = function (t) {
        var a = this._ils;
        var L = a.length;
        if (this._d)
            this._dl._n(t);
        if (L == 1)
            a[0]._n(t);
        else if (L == 0)
            return;
        else {
            var b = cp(a);
            for (var i = 0; i < L; i++)
                b[i]._n(t);
        }
    };
    Stream.prototype._e = function (err) {
        if (this._err !== NO)
            return;
        this._err = err;
        var a = this._ils;
        var L = a.length;
        this._x();
        if (this._d)
            this._dl._e(err);
        if (L == 1)
            a[0]._e(err);
        else if (L == 0)
            return;
        else {
            var b = cp(a);
            for (var i = 0; i < L; i++)
                b[i]._e(err);
        }
        if (!this._d && L == 0)
            throw this._err;
    };
    Stream.prototype._c = function () {
        var a = this._ils;
        var L = a.length;
        this._x();
        if (this._d)
            this._dl._c();
        if (L == 1)
            a[0]._c();
        else if (L == 0)
            return;
        else {
            var b = cp(a);
            for (var i = 0; i < L; i++)
                b[i]._c();
        }
    };
    Stream.prototype._x = function () {
        if (this._ils.length === 0)
            return;
        if (this._prod !== NO)
            this._prod._stop();
        this._err = NO;
        this._ils = [];
    };
    Stream.prototype._stopNow = function () {
        // WARNING: code that calls this method should
        // first check if this._prod is valid (not `NO`)
        this._prod._stop();
        this._err = NO;
        this._stopID = NO;
    };
    Stream.prototype._add = function (il) {
        var ta = this._target;
        if (ta !== NO)
            return ta._add(il);
        var a = this._ils;
        a.push(il);
        if (a.length > 1)
            return;
        if (this._stopID !== NO) {
            clearTimeout(this._stopID);
            this._stopID = NO;
        }
        else {
            var p = this._prod;
            if (p !== NO)
                p._start(this);
        }
    };
    Stream.prototype._remove = function (il) {
        var _this = this;
        var ta = this._target;
        if (ta !== NO)
            return ta._remove(il);
        var a = this._ils;
        var i = a.indexOf(il);
        if (i > -1) {
            a.splice(i, 1);
            if (this._prod !== NO && a.length <= 0) {
                this._err = NO;
                this._stopID = setTimeout(function () { return _this._stopNow(); });
            }
            else if (a.length === 1) {
                this._pruneCycles();
            }
        }
    };
    // If all paths stemming from `this` stream eventually end at `this`
    // stream, then we remove the single listener of `this` stream, to
    // force it to end its execution and dispose resources. This method
    // assumes as a precondition that this._ils has just one listener.
    Stream.prototype._pruneCycles = function () {
        if (this._hasNoSinks(this, []))
            this._remove(this._ils[0]);
    };
    // Checks whether *there is no* path starting from `x` that leads to an end
    // listener (sink) in the stream graph, following edges A->B where B is a
    // listener of A. This means these paths constitute a cycle somehow. Is given
    // a trace of all visited nodes so far.
    Stream.prototype._hasNoSinks = function (x, trace) {
        if (trace.indexOf(x) !== -1)
            return true;
        else if (x.out === this)
            return true;
        else if (x.out && x.out !== NO)
            return this._hasNoSinks(x.out, trace.concat(x));
        else if (x._ils) {
            for (var i = 0, N = x._ils.length; i < N; i++)
                if (!this._hasNoSinks(x._ils[i], trace.concat(x)))
                    return false;
            return true;
        }
        else
            return false;
    };
    Stream.prototype.ctor = function () {
        return this instanceof MemoryStream ? MemoryStream : Stream;
    };
    /**
     * Adds a Listener to the Stream.
     *
     * @param {Listener} listener
     */
    Stream.prototype.addListener = function (listener) {
        listener._n = listener.next || noop;
        listener._e = listener.error || noop;
        listener._c = listener.complete || noop;
        this._add(listener);
    };
    /**
     * Removes a Listener from the Stream, assuming the Listener was added to it.
     *
     * @param {Listener<T>} listener
     */
    Stream.prototype.removeListener = function (listener) {
        this._remove(listener);
    };
    /**
     * Adds a Listener to the Stream returning a Subscription to remove that
     * listener.
     *
     * @param {Listener} listener
     * @returns {Subscription}
     */
    Stream.prototype.subscribe = function (listener) {
        this.addListener(listener);
        return new StreamSub(this, listener);
    };
    /**
     * Add interop between most.js and RxJS 5
     *
     * @returns {Stream}
     */
    Stream.prototype[symbol_observable_1.default] = function () {
        return this;
    };
    /**
     * Creates a new Stream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {Stream}
     */
    Stream.create = function (producer) {
        if (producer) {
            if (typeof producer.start !== 'function'
                || typeof producer.stop !== 'function')
                throw new Error('producer requires both start and stop functions');
            internalizeProducer(producer); // mutates the input
        }
        return new Stream(producer);
    };
    /**
     * Creates a new MemoryStream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {MemoryStream}
     */
    Stream.createWithMemory = function (producer) {
        if (producer)
            internalizeProducer(producer); // mutates the input
        return new MemoryStream(producer);
    };
    /**
     * Creates a Stream that does nothing when started. It never emits any event.
     *
     * Marble diagram:
     *
     * ```text
     *          never
     * -----------------------
     * ```
     *
     * @factory true
     * @return {Stream}
     */
    Stream.never = function () {
        return new Stream({ _start: noop, _stop: noop });
    };
    /**
     * Creates a Stream that immediately emits the "complete" notification when
     * started, and that's it.
     *
     * Marble diagram:
     *
     * ```text
     * empty
     * -|
     * ```
     *
     * @factory true
     * @return {Stream}
     */
    Stream.empty = function () {
        return new Stream({
            _start: function (il) { il._c(); },
            _stop: noop,
        });
    };
    /**
     * Creates a Stream that immediately emits an "error" notification with the
     * value you passed as the `error` argument when the stream starts, and that's
     * it.
     *
     * Marble diagram:
     *
     * ```text
     * throw(X)
     * -X
     * ```
     *
     * @factory true
     * @param error The error event to emit on the created stream.
     * @return {Stream}
     */
    Stream.throw = function (error) {
        return new Stream({
            _start: function (il) { il._e(error); },
            _stop: noop,
        });
    };
    /**
     * Creates a stream from an Array, Promise, or an Observable.
     *
     * @factory true
     * @param {Array|PromiseLike|Observable} input The input to make a stream from.
     * @return {Stream}
     */
    Stream.from = function (input) {
        if (typeof input[symbol_observable_1.default] === 'function')
            return Stream.fromObservable(input);
        else if (typeof input.then === 'function')
            return Stream.fromPromise(input);
        else if (Array.isArray(input))
            return Stream.fromArray(input);
        throw new TypeError("Type of input to from() must be an Array, Promise, or Observable");
    };
    /**
     * Creates a Stream that immediately emits the arguments that you give to
     * *of*, then completes.
     *
     * Marble diagram:
     *
     * ```text
     * of(1,2,3)
     * 123|
     * ```
     *
     * @factory true
     * @param a The first value you want to emit as an event on the stream.
     * @param b The second value you want to emit as an event on the stream. One
     * or more of these values may be given as arguments.
     * @return {Stream}
     */
    Stream.of = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return Stream.fromArray(items);
    };
    /**
     * Converts an array to a stream. The returned stream will emit synchronously
     * all the items in the array, and then complete.
     *
     * Marble diagram:
     *
     * ```text
     * fromArray([1,2,3])
     * 123|
     * ```
     *
     * @factory true
     * @param {Array} array The array to be converted as a stream.
     * @return {Stream}
     */
    Stream.fromArray = function (array) {
        return new Stream(new FromArray(array));
    };
    /**
     * Converts a promise to a stream. The returned stream will emit the resolved
     * value of the promise, and then complete. However, if the promise is
     * rejected, the stream will emit the corresponding error.
     *
     * Marble diagram:
     *
     * ```text
     * fromPromise( ----42 )
     * -----------------42|
     * ```
     *
     * @factory true
     * @param {PromiseLike} promise The promise to be converted as a stream.
     * @return {Stream}
     */
    Stream.fromPromise = function (promise) {
        return new Stream(new FromPromise(promise));
    };
    /**
     * Converts an Observable into a Stream.
     *
     * @factory true
     * @param {any} observable The observable to be converted as a stream.
     * @return {Stream}
     */
    Stream.fromObservable = function (obs) {
        if (obs.endWhen)
            return obs;
        var o = typeof obs[symbol_observable_1.default] === 'function' ? obs[symbol_observable_1.default]() : obs;
        return new Stream(new FromObservable(o));
    };
    /**
     * Creates a stream that periodically emits incremental numbers, every
     * `period` milliseconds.
     *
     * Marble diagram:
     *
     * ```text
     *     periodic(1000)
     * ---0---1---2---3---4---...
     * ```
     *
     * @factory true
     * @param {number} period The interval in milliseconds to use as a rate of
     * emission.
     * @return {Stream}
     */
    Stream.periodic = function (period) {
        return new Stream(new Periodic(period));
    };
    Stream.prototype._map = function (project) {
        return new (this.ctor())(new MapOp(project, this));
    };
    /**
     * Transforms each event from the input Stream through a `project` function,
     * to get a Stream that emits those transformed events.
     *
     * Marble diagram:
     *
     * ```text
     * --1---3--5-----7------
     *    map(i => i * 10)
     * --10--30-50----70-----
     * ```
     *
     * @param {Function} project A function of type `(t: T) => U` that takes event
     * `t` of type `T` from the input Stream and produces an event of type `U`, to
     * be emitted on the output Stream.
     * @return {Stream}
     */
    Stream.prototype.map = function (project) {
        return this._map(project);
    };
    /**
     * It's like `map`, but transforms each input event to always the same
     * constant value on the output Stream.
     *
     * Marble diagram:
     *
     * ```text
     * --1---3--5-----7-----
     *       mapTo(10)
     * --10--10-10----10----
     * ```
     *
     * @param projectedValue A value to emit on the output Stream whenever the
     * input Stream emits any value.
     * @return {Stream}
     */
    Stream.prototype.mapTo = function (projectedValue) {
        var s = this.map(function () { return projectedValue; });
        var op = s._prod;
        op.type = 'mapTo';
        return s;
    };
    /**
     * Only allows events that pass the test given by the `passes` argument.
     *
     * Each event from the input stream is given to the `passes` function. If the
     * function returns `true`, the event is forwarded to the output stream,
     * otherwise it is ignored and not forwarded.
     *
     * Marble diagram:
     *
     * ```text
     * --1---2--3-----4-----5---6--7-8--
     *     filter(i => i % 2 === 0)
     * ------2--------4---------6----8--
     * ```
     *
     * @param {Function} passes A function of type `(t: T) => boolean` that takes
     * an event from the input stream and checks if it passes, by returning a
     * boolean.
     * @return {Stream}
     */
    Stream.prototype.filter = function (passes) {
        var p = this._prod;
        if (p instanceof Filter)
            return new Stream(new Filter(and(p.f, passes), p.ins));
        return new Stream(new Filter(passes, this));
    };
    /**
     * Lets the first `amount` many events from the input stream pass to the
     * output stream, then makes the output stream complete.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c----d---e--
     *    take(3)
     * --a---b--c|
     * ```
     *
     * @param {number} amount How many events to allow from the input stream
     * before completing the output stream.
     * @return {Stream}
     */
    Stream.prototype.take = function (amount) {
        return new (this.ctor())(new Take(amount, this));
    };
    /**
     * Ignores the first `amount` many events from the input stream, and then
     * after that starts forwarding events from the input stream to the output
     * stream.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c----d---e--
     *       drop(3)
     * --------------d---e--
     * ```
     *
     * @param {number} amount How many events to ignore from the input stream
     * before forwarding all events from the input stream to the output stream.
     * @return {Stream}
     */
    Stream.prototype.drop = function (amount) {
        return new Stream(new Drop(amount, this));
    };
    /**
     * When the input stream completes, the output stream will emit the last event
     * emitted by the input stream, and then will also complete.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c--d----|
     *       last()
     * -----------------d|
     * ```
     *
     * @return {Stream}
     */
    Stream.prototype.last = function () {
        return new Stream(new Last(this));
    };
    /**
     * Prepends the given `initial` value to the sequence of events emitted by the
     * input stream. The returned stream is a MemoryStream, which means it is
     * already `remember()`'d.
     *
     * Marble diagram:
     *
     * ```text
     * ---1---2-----3---
     *   startWith(0)
     * 0--1---2-----3---
     * ```
     *
     * @param initial The value or event to prepend.
     * @return {MemoryStream}
     */
    Stream.prototype.startWith = function (initial) {
        return new MemoryStream(new StartWith(this, initial));
    };
    /**
     * Uses another stream to determine when to complete the current stream.
     *
     * When the given `other` stream emits an event or completes, the output
     * stream will complete. Before that happens, the output stream will behaves
     * like the input stream.
     *
     * Marble diagram:
     *
     * ```text
     * ---1---2-----3--4----5----6---
     *   endWhen( --------a--b--| )
     * ---1---2-----3--4--|
     * ```
     *
     * @param other Some other stream that is used to know when should the output
     * stream of this operator complete.
     * @return {Stream}
     */
    Stream.prototype.endWhen = function (other) {
        return new (this.ctor())(new EndWhen(other, this));
    };
    /**
     * "Folds" the stream onto itself.
     *
     * Combines events from the past throughout
     * the entire execution of the input stream, allowing you to accumulate them
     * together. It's essentially like `Array.prototype.reduce`. The returned
     * stream is a MemoryStream, which means it is already `remember()`'d.
     *
     * The output stream starts by emitting the `seed` which you give as argument.
     * Then, when an event happens on the input stream, it is combined with that
     * seed value through the `accumulate` function, and the output value is
     * emitted on the output stream. `fold` remembers that output value as `acc`
     * ("accumulator"), and then when a new input event `t` happens, `acc` will be
     * combined with that to produce the new `acc` and so forth.
     *
     * Marble diagram:
     *
     * ```text
     * ------1-----1--2----1----1------
     *   fold((acc, x) => acc + x, 3)
     * 3-----4-----5--7----8----9------
     * ```
     *
     * @param {Function} accumulate A function of type `(acc: R, t: T) => R` that
     * takes the previous accumulated value `acc` and the incoming event from the
     * input stream and produces the new accumulated value.
     * @param seed The initial accumulated value, of type `R`.
     * @return {MemoryStream}
     */
    Stream.prototype.fold = function (accumulate, seed) {
        return new MemoryStream(new Fold(accumulate, seed, this));
    };
    /**
     * Replaces an error with another stream.
     *
     * When (and if) an error happens on the input stream, instead of forwarding
     * that error to the output stream, *replaceError* will call the `replace`
     * function which returns the stream that the output stream will replicate.
     * And, in case that new stream also emits an error, `replace` will be called
     * again to get another stream to start replicating.
     *
     * Marble diagram:
     *
     * ```text
     * --1---2-----3--4-----X
     *   replaceError( () => --10--| )
     * --1---2-----3--4--------10--|
     * ```
     *
     * @param {Function} replace A function of type `(err) => Stream` that takes
     * the error that occurred on the input stream or on the previous replacement
     * stream and returns a new stream. The output stream will behave like the
     * stream that this function returns.
     * @return {Stream}
     */
    Stream.prototype.replaceError = function (replace) {
        return new (this.ctor())(new ReplaceError(replace, this));
    };
    /**
     * Flattens a "stream of streams", handling only one nested stream at a time
     * (no concurrency).
     *
     * If the input stream is a stream that emits streams, then this operator will
     * return an output stream which is a flat stream: emits regular events. The
     * flattening happens without concurrency. It works like this: when the input
     * stream emits a nested stream, *flatten* will start imitating that nested
     * one. However, as soon as the next nested stream is emitted on the input
     * stream, *flatten* will forget the previous nested one it was imitating, and
     * will start imitating the new nested one.
     *
     * Marble diagram:
     *
     * ```text
     * --+--------+---------------
     *   \        \
     *    \       ----1----2---3--
     *    --a--b----c----d--------
     *           flatten
     * -----a--b------1----2---3--
     * ```
     *
     * @return {Stream}
     */
    Stream.prototype.flatten = function () {
        return new Stream(new Flatten(this));
    };
    /**
     * Passes the input stream to a custom operator, to produce an output stream.
     *
     * *compose* is a handy way of using an existing function in a chained style.
     * Instead of writing `outStream = f(inStream)` you can write
     * `outStream = inStream.compose(f)`.
     *
     * @param {function} operator A function that takes a stream as input and
     * returns a stream as well.
     * @return {Stream}
     */
    Stream.prototype.compose = function (operator) {
        return operator(this);
    };
    /**
     * Returns an output stream that behaves like the input stream, but also
     * remembers the most recent event that happens on the input stream, so that a
     * newly added listener will immediately receive that memorised event.
     *
     * @return {MemoryStream}
     */
    Stream.prototype.remember = function () {
        return new MemoryStream(new Remember(this));
    };
    /**
     * Returns an output stream that identically behaves like the input stream,
     * but also runs a `spy` function for each event, to help you debug your app.
     *
     * *debug* takes a `spy` function as argument, and runs that for each event
     * happening on the input stream. If you don't provide the `spy` argument,
     * then *debug* will just `console.log` each event. This helps you to
     * understand the flow of events through some operator chain.
     *
     * Please note that if the output stream has no listeners, then it will not
     * start, which means `spy` will never run because no actual event happens in
     * that case.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3-----4--
     *         debug
     * --1----2-----3-----4--
     * ```
     *
     * @param {function} labelOrSpy A string to use as the label when printing
     * debug information on the console, or a 'spy' function that takes an event
     * as argument, and does not need to return anything.
     * @return {Stream}
     */
    Stream.prototype.debug = function (labelOrSpy) {
        return new (this.ctor())(new Debug(this, labelOrSpy));
    };
    /**
     * *imitate* changes this current Stream to emit the same events that the
     * `other` given Stream does. This method returns nothing.
     *
     * This method exists to allow one thing: **circular dependency of streams**.
     * For instance, let's imagine that for some reason you need to create a
     * circular dependency where stream `first$` depends on stream `second$`
     * which in turn depends on `first$`:
     *
     * <!-- skip-example -->
     * ```js
     * import delay from 'xstream/extra/delay'
     *
     * var first$ = second$.map(x => x * 10).take(3);
     * var second$ = first$.map(x => x + 1).startWith(1).compose(delay(100));
     * ```
     *
     * However, that is invalid JavaScript, because `second$` is undefined
     * on the first line. This is how *imitate* can help solve it:
     *
     * ```js
     * import delay from 'xstream/extra/delay'
     *
     * var secondProxy$ = xs.create();
     * var first$ = secondProxy$.map(x => x * 10).take(3);
     * var second$ = first$.map(x => x + 1).startWith(1).compose(delay(100));
     * secondProxy$.imitate(second$);
     * ```
     *
     * We create `secondProxy$` before the others, so it can be used in the
     * declaration of `first$`. Then, after both `first$` and `second$` are
     * defined, we hook `secondProxy$` with `second$` with `imitate()` to tell
     * that they are "the same". `imitate` will not trigger the start of any
     * stream, it just binds `secondProxy$` and `second$` together.
     *
     * The following is an example where `imitate()` is important in Cycle.js
     * applications. A parent component contains some child components. A child
     * has an action stream which is given to the parent to define its state:
     *
     * <!-- skip-example -->
     * ```js
     * const childActionProxy$ = xs.create();
     * const parent = Parent({...sources, childAction$: childActionProxy$});
     * const childAction$ = parent.state$.map(s => s.child.action$).flatten();
     * childActionProxy$.imitate(childAction$);
     * ```
     *
     * Note, though, that **`imitate()` does not support MemoryStreams**. If we
     * would attempt to imitate a MemoryStream in a circular dependency, we would
     * either get a race condition (where the symptom would be "nothing happens")
     * or an infinite cyclic emission of values. It's useful to think about
     * MemoryStreams as cells in a spreadsheet. It doesn't make any sense to
     * define a spreadsheet cell `A1` with a formula that depends on `B1` and
     * cell `B1` defined with a formula that depends on `A1`.
     *
     * If you find yourself wanting to use `imitate()` with a
     * MemoryStream, you should rework your code around `imitate()` to use a
     * Stream instead. Look for the stream in the circular dependency that
     * represents an event stream, and that would be a candidate for creating a
     * proxy Stream which then imitates the target Stream.
     *
     * @param {Stream} target The other stream to imitate on the current one. Must
     * not be a MemoryStream.
     */
    Stream.prototype.imitate = function (target) {
        if (target instanceof MemoryStream)
            throw new Error('A MemoryStream was given to imitate(), but it only ' +
                'supports a Stream. Read more about this restriction here: ' +
                'https://github.com/staltz/xstream#faq');
        this._target = target;
        for (var ils = this._ils, N = ils.length, i = 0; i < N; i++)
            target._add(ils[i]);
        this._ils = [];
    };
    /**
     * Forces the Stream to emit the given value to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param value The "next" value you want to broadcast to all listeners of
     * this Stream.
     */
    Stream.prototype.shamefullySendNext = function (value) {
        this._n(value);
    };
    /**
     * Forces the Stream to emit the given error to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param {any} error The error you want to broadcast to all the listeners of
     * this Stream.
     */
    Stream.prototype.shamefullySendError = function (error) {
        this._e(error);
    };
    /**
     * Forces the Stream to emit the "completed" event to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     */
    Stream.prototype.shamefullySendComplete = function () {
        this._c();
    };
    /**
     * Adds a "debug" listener to the stream. There can only be one debug
     * listener, that's why this is 'setDebugListener'. To remove the debug
     * listener, just call setDebugListener(null).
     *
     * A debug listener is like any other listener. The only difference is that a
     * debug listener is "stealthy": its presence/absence does not trigger the
     * start/stop of the stream (or the producer inside the stream). This is
     * useful so you can inspect what is going on without changing the behavior
     * of the program. If you have an idle stream and you add a normal listener to
     * it, the stream will start executing. But if you set a debug listener on an
     * idle stream, it won't start executing (not until the first normal listener
     * is added).
     *
     * As the name indicates, we don't recommend using this method to build app
     * logic. In fact, in most cases the debug operator works just fine. Only use
     * this one if you know what you're doing.
     *
     * @param {Listener<T>} listener
     */
    Stream.prototype.setDebugListener = function (listener) {
        if (!listener) {
            this._d = false;
            this._dl = NO;
        }
        else {
            this._d = true;
            listener._n = listener.next || noop;
            listener._e = listener.error || noop;
            listener._c = listener.complete || noop;
            this._dl = listener;
        }
    };
    /**
     * Blends multiple streams together, emitting events from all of them
     * concurrently.
     *
     * *merge* takes multiple streams as arguments, and creates a stream that
     * behaves like each of the argument streams, in parallel.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b----c---d------
     *            merge
     * --1-a--2--b--3-c---d--4---
     * ```
     *
     * @factory true
     * @param {Stream} stream1 A stream to merge together with other streams.
     * @param {Stream} stream2 A stream to merge together with other streams. Two
     * or more streams may be given as arguments.
     * @return {Stream}
     */
    Stream.merge = function merge() {
        var streams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            streams[_i] = arguments[_i];
        }
        return new Stream(new Merge(streams));
    };
    /**
     * Combines multiple input streams together to return a stream whose events
     * are arrays that collect the latest events from each input stream.
     *
     * *combine* internally remembers the most recent event from each of the input
     * streams. When any of the input streams emits an event, that event together
     * with all the other saved events are combined into an array. That array will
     * be emitted on the output stream. It's essentially a way of joining together
     * the events from multiple streams.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b-----c--d------
     *          combine
     * ----1a-2a-2b-3b-3c-3d-4d--
     * ```
     *
     * @factory true
     * @param {Stream} stream1 A stream to combine together with other streams.
     * @param {Stream} stream2 A stream to combine together with other streams.
     * Multiple streams, not just two, may be given as arguments.
     * @return {Stream}
     */
    Stream.combine = function combine() {
        var streams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            streams[_i] = arguments[_i];
        }
        return new Stream(new Combine(streams));
    };
    return Stream;
}());
exports.Stream = Stream;
var MemoryStream = /** @class */ (function (_super) {
    __extends(MemoryStream, _super);
    function MemoryStream(producer) {
        var _this = _super.call(this, producer) || this;
        _this._has = false;
        return _this;
    }
    MemoryStream.prototype._n = function (x) {
        this._v = x;
        this._has = true;
        _super.prototype._n.call(this, x);
    };
    MemoryStream.prototype._add = function (il) {
        var ta = this._target;
        if (ta !== NO)
            return ta._add(il);
        var a = this._ils;
        a.push(il);
        if (a.length > 1) {
            if (this._has)
                il._n(this._v);
            return;
        }
        if (this._stopID !== NO) {
            if (this._has)
                il._n(this._v);
            clearTimeout(this._stopID);
            this._stopID = NO;
        }
        else if (this._has)
            il._n(this._v);
        else {
            var p = this._prod;
            if (p !== NO)
                p._start(this);
        }
    };
    MemoryStream.prototype._stopNow = function () {
        this._has = false;
        _super.prototype._stopNow.call(this);
    };
    MemoryStream.prototype._x = function () {
        this._has = false;
        _super.prototype._x.call(this);
    };
    MemoryStream.prototype.map = function (project) {
        return this._map(project);
    };
    MemoryStream.prototype.mapTo = function (projectedValue) {
        return _super.prototype.mapTo.call(this, projectedValue);
    };
    MemoryStream.prototype.take = function (amount) {
        return _super.prototype.take.call(this, amount);
    };
    MemoryStream.prototype.endWhen = function (other) {
        return _super.prototype.endWhen.call(this, other);
    };
    MemoryStream.prototype.replaceError = function (replace) {
        return _super.prototype.replaceError.call(this, replace);
    };
    MemoryStream.prototype.remember = function () {
        return this;
    };
    MemoryStream.prototype.debug = function (labelOrSpy) {
        return _super.prototype.debug.call(this, labelOrSpy);
    };
    return MemoryStream;
}(Stream));
exports.MemoryStream = MemoryStream;
var xs = Stream;
exports.default = xs;

},{"symbol-observable":"../node_modules/symbol-observable/es/index.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/quicktask/index.js":[function(require,module,exports) {
var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function microtask() {
    if (typeof MutationObserver !== 'undefined') {
        var node_1 = document.createTextNode('');
        var queue_1 = [];
        var i_1 = 0;
        new MutationObserver(function () {
            while (queue_1.length) {
                queue_1.shift()();
            }
        }).observe(node_1, { characterData: true });
        return function (fn) {
            queue_1.push(fn);
            node_1.data = i_1 = 1 - i_1;
        };
    }
    else if (typeof setImmediate !== 'undefined') {
        return setImmediate;
    }
    else if (typeof process !== 'undefined') {
        return process.nextTick;
    }
    else {
        return setTimeout;
    }
}
exports.default = microtask;

},{"process":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/node_modules/process/browser.js"}],"../node_modules/@cycle/run/lib/es6/adapt.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAdapt = setAdapt;
exports.adapt = adapt;

function getGlobal() {
  var globalObj;

  if (typeof window !== 'undefined') {
    globalObj = window;
  } else if (typeof global !== 'undefined') {
    globalObj = global;
  } else {
    globalObj = this;
  }

  globalObj.Cyclejs = globalObj.Cyclejs || {};
  globalObj = globalObj.Cyclejs;

  globalObj.adaptStream = globalObj.adaptStream || function (x) {
    return x;
  };

  return globalObj;
}

function setAdapt(f) {
  getGlobal().adaptStream = f;
}

function adapt(stream) {
  return getGlobal().adaptStream(stream);
}
},{}],"../node_modules/@cycle/run/lib/es6/internals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSinkProxies = makeSinkProxies;
exports.callDrivers = callDrivers;
exports.adaptSources = adaptSources;
exports.replicateMany = replicateMany;
exports.disposeSinkProxies = disposeSinkProxies;
exports.disposeSources = disposeSources;
exports.isObjectEmpty = isObjectEmpty;

var _xstream = _interopRequireDefault(require("xstream"));

var _quicktask = _interopRequireDefault(require("quicktask"));

var _adapt = require("./adapt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var scheduleMicrotask = (0, _quicktask.default)();

function makeSinkProxies(drivers) {
  var sinkProxies = {};

  for (var name_1 in drivers) {
    if (drivers.hasOwnProperty(name_1)) {
      sinkProxies[name_1] = _xstream.default.create();
    }
  }

  return sinkProxies;
}

function callDrivers(drivers, sinkProxies) {
  var sources = {};

  for (var name_2 in drivers) {
    if (drivers.hasOwnProperty(name_2)) {
      sources[name_2] = drivers[name_2](sinkProxies[name_2], name_2);

      if (sources[name_2] && _typeof(sources[name_2]) === 'object') {
        sources[name_2]._isCycleSource = name_2;
      }
    }
  }

  return sources;
} // NOTE: this will mutate `sources`.


function adaptSources(sources) {
  for (var name_3 in sources) {
    if (sources.hasOwnProperty(name_3) && sources[name_3] && typeof sources[name_3].shamefullySendNext === 'function') {
      sources[name_3] = (0, _adapt.adapt)(sources[name_3]);
    }
  }

  return sources;
}

function replicateMany(sinks, sinkProxies) {
  var sinkNames = Object.keys(sinks).filter(function (name) {
    return !!sinkProxies[name];
  });
  var buffers = {};
  var replicators = {};
  sinkNames.forEach(function (name) {
    buffers[name] = {
      _n: [],
      _e: []
    };
    replicators[name] = {
      next: function (x) {
        return buffers[name]._n.push(x);
      },
      error: function (err) {
        return buffers[name]._e.push(err);
      },
      complete: function () {}
    };
  });
  var subscriptions = sinkNames.map(function (name) {
    return _xstream.default.fromObservable(sinks[name]).subscribe(replicators[name]);
  });
  sinkNames.forEach(function (name) {
    var listener = sinkProxies[name];

    var next = function (x) {
      scheduleMicrotask(function () {
        return listener._n(x);
      });
    };

    var error = function (err) {
      scheduleMicrotask(function () {
        (console.error || console.log)(err);

        listener._e(err);
      });
    };

    buffers[name]._n.forEach(next);

    buffers[name]._e.forEach(error);

    replicators[name].next = next;
    replicators[name].error = error; // because sink.subscribe(replicator) had mutated replicator to add
    // _n, _e, _c, we must also update these:

    replicators[name]._n = next;
    replicators[name]._e = error;
  });
  buffers = null; // free up for GC

  return function disposeReplication() {
    subscriptions.forEach(function (s) {
      return s.unsubscribe();
    });
  };
}

function disposeSinkProxies(sinkProxies) {
  Object.keys(sinkProxies).forEach(function (name) {
    return sinkProxies[name]._c();
  });
}

function disposeSources(sources) {
  for (var k in sources) {
    if (sources.hasOwnProperty(k) && sources[k] && sources[k].dispose) {
      sources[k].dispose();
    }
  }
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
},{"xstream":"../node_modules/xstream/index.js","quicktask":"../node_modules/quicktask/index.js","./adapt":"../node_modules/@cycle/run/lib/es6/adapt.js"}],"../node_modules/@cycle/run/lib/es6/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;
exports.setupReusable = setupReusable;
exports.run = run;
exports.default = void 0;

var _internals = require("./internals");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * A function that prepares the Cycle application to be executed. Takes a `main`
 * function and prepares to circularly connects it to the given collection of
 * driver functions. As an output, `setup()` returns an object with three
 * properties: `sources`, `sinks` and `run`. Only when `run()` is called will
 * the application actually execute. Refer to the documentation of `run()` for
 * more details.
 *
 * **Example:**
 * ```js
 * import {setup} from '@cycle/run';
 * const {sources, sinks, run} = setup(main, drivers);
 * // ...
 * const dispose = run(); // Executes the application
 * // ...
 * dispose();
 * ```
 *
 * @param {Function} main a function that takes `sources` as input and outputs
 * `sinks`.
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Object} an object with three properties: `sources`, `sinks` and
 * `run`. `sources` is the collection of driver sources, `sinks` is the
 * collection of driver sinks, these can be used for debugging or testing. `run`
 * is the function that once called will execute the application.
 * @function setup
 */
function setup(main, drivers) {
  if (typeof main !== "function") {
    throw new Error("First argument given to Cycle must be the 'main' " + "function.");
  }

  if (_typeof(drivers) !== "object" || drivers === null) {
    throw new Error("Second argument given to Cycle must be an object " + "with driver functions as properties.");
  }

  if ((0, _internals.isObjectEmpty)(drivers)) {
    throw new Error("Second argument given to Cycle must be an object " + "with at least one driver function declared as a property.");
  }

  var engine = setupReusable(drivers);
  var sinks = main(engine.sources);

  if (typeof window !== 'undefined') {
    window.Cyclejs = window.Cyclejs || {};
    window.Cyclejs.sinks = sinks;
  }

  function _run() {
    var disposeRun = engine.run(sinks);
    return function dispose() {
      disposeRun();
      engine.dispose();
    };
  }

  return {
    sinks: sinks,
    sources: engine.sources,
    run: _run
  };
}
/**
 * A partially-applied variant of setup() which accepts only the drivers, and
 * allows many `main` functions to execute and reuse this same set of drivers.
 *
 * Takes an object with driver functions as input, and outputs an object which
 * contains the generated sources (from those drivers) and a `run` function
 * (which in turn expects sinks as argument). This `run` function can be called
 * multiple times with different arguments, and it will reuse the drivers that
 * were passed to `setupReusable`.
 *
 * **Example:**
 * ```js
 * import {setupReusable} from '@cycle/run';
 * const {sources, run, dispose} = setupReusable(drivers);
 * // ...
 * const sinks = main(sources);
 * const disposeRun = run(sinks);
 * // ...
 * disposeRun();
 * // ...
 * dispose(); // ends the reusability of drivers
 * ```
 *
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Object} an object with three properties: `sources`, `run` and
 * `dispose`. `sources` is the collection of driver sources, `run` is the
 * function that once called with 'sinks' as argument, will execute the
 * application, tying together sources with sinks. `dispose` terminates the
 * reusable resources used by the drivers. Note also that `run` returns a
 * dispose function which terminates resources that are specific (not reusable)
 * to that run.
 * @function setupReusable
 */


function setupReusable(drivers) {
  if (_typeof(drivers) !== "object" || drivers === null) {
    throw new Error("Argument given to setupReusable must be an object " + "with driver functions as properties.");
  }

  if ((0, _internals.isObjectEmpty)(drivers)) {
    throw new Error("Argument given to setupReusable must be an object " + "with at least one driver function declared as a property.");
  }

  var sinkProxies = (0, _internals.makeSinkProxies)(drivers);
  var rawSources = (0, _internals.callDrivers)(drivers, sinkProxies);
  var sources = (0, _internals.adaptSources)(rawSources);

  function _run(sinks) {
    return (0, _internals.replicateMany)(sinks, sinkProxies);
  }

  function disposeEngine() {
    (0, _internals.disposeSources)(sources);
    (0, _internals.disposeSinkProxies)(sinkProxies);
  }

  return {
    sources: sources,
    run: _run,
    dispose: disposeEngine
  };
}
/**
 * Takes a `main` function and circularly connects it to the given collection
 * of driver functions.
 *
 * **Example:**
 * ```js
 * import run from '@cycle/run';
 * const dispose = run(main, drivers);
 * // ...
 * dispose();
 * ```
 *
 * The `main` function expects a collection of "source" streams (returned from
 * drivers) as input, and should return a collection of "sink" streams (to be
 * given to drivers). A "collection of streams" is a JavaScript object where
 * keys match the driver names registered by the `drivers` object, and values
 * are the streams. Refer to the documentation of each driver to see more
 * details on what types of sources it outputs and sinks it receives.
 *
 * @param {Function} main a function that takes `sources` as input and outputs
 * `sinks`.
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Function} a dispose function, used to terminate the execution of the
 * Cycle.js program, cleaning up resources used.
 * @function run
 */


function run(main, drivers) {
  var program = setup(main, drivers);

  if (typeof window !== 'undefined' && window.CyclejsDevTool_startGraphSerializer) {
    window.CyclejsDevTool_startGraphSerializer(program.sinks);
  }

  return program.run();
}

var _default = run;
exports.default = _default;
},{"./internals":"../node_modules/@cycle/run/lib/es6/internals.js"}],"../node_modules/snabbdom/vnode.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children, text: text, elm: elm, key: key };
}
exports.vnode = vnode;
exports.default = vnode;

},{}],"../node_modules/snabbdom/is.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;

},{}],"../node_modules/snabbdom/h.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = require("./vnode");
var is = require("./is");
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (children !== undefined) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i], undefined);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
exports.default = h;

},{"./vnode":"../node_modules/snabbdom/vnode.js","./is":"../node_modules/snabbdom/is.js"}],"../node_modules/@cycle/dom/lib/es6/thunk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thunk = thunk;
exports.default = void 0;

var _h = require("snabbdom/h");

function copyToThunk(vnode, thunkVNode) {
  thunkVNode.elm = vnode.elm;
  vnode.data.fn = thunkVNode.data.fn;
  vnode.data.args = thunkVNode.data.args;
  vnode.data.isolate = thunkVNode.data.isolate;
  thunkVNode.data = vnode.data;
  thunkVNode.children = vnode.children;
  thunkVNode.text = vnode.text;
  thunkVNode.elm = vnode.elm;
}

function init(thunkVNode) {
  var cur = thunkVNode.data;
  var vnode = cur.fn.apply(undefined, cur.args);
  copyToThunk(vnode, thunkVNode);
}

function prepatch(oldVnode, thunkVNode) {
  var old = oldVnode.data,
      cur = thunkVNode.data;
  var i;
  var oldArgs = old.args,
      args = cur.args;

  if (old.fn !== cur.fn || oldArgs.length !== args.length) {
    copyToThunk(cur.fn.apply(undefined, args), thunkVNode);
  }

  for (i = 0; i < args.length; ++i) {
    if (oldArgs[i] !== args[i]) {
      copyToThunk(cur.fn.apply(undefined, args), thunkVNode);
      return;
    }
  }

  copyToThunk(oldVnode, thunkVNode);
}

function thunk(sel, key, fn, args) {
  if (args === undefined) {
    args = fn;
    fn = key;
    key = undefined;
  }

  return (0, _h.h)(sel, {
    key: key,
    hook: {
      init: init,
      prepatch: prepatch
    },
    fn: fn,
    args: args
  });
}

var _default = thunk;
exports.default = _default;
},{"snabbdom/h":"../node_modules/snabbdom/h.js"}],"../node_modules/@cycle/run/lib/adapt.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function getGlobal() {
  var globalObj;

  if (typeof window !== 'undefined') {
    globalObj = window;
  } else if (typeof global !== 'undefined') {
    globalObj = global;
  } else {
    globalObj = this;
  }

  globalObj.Cyclejs = globalObj.Cyclejs || {};
  globalObj = globalObj.Cyclejs;

  globalObj.adaptStream = globalObj.adaptStream || function (x) {
    return x;
  };

  return globalObj;
}

function setAdapt(f) {
  getGlobal().adaptStream = f;
}

exports.setAdapt = setAdapt;

function adapt(stream) {
  return getGlobal().adaptStream(stream);
}

exports.adapt = adapt;
},{}],"../node_modules/@cycle/dom/lib/es6/fromEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEvent = fromEvent;
exports.preventDefaultConditional = preventDefaultConditional;

var _xstream = require("xstream");

function fromEvent(element, eventName, useCapture, preventDefault, passive) {
  if (useCapture === void 0) {
    useCapture = false;
  }

  if (preventDefault === void 0) {
    preventDefault = false;
  }

  if (passive === void 0) {
    passive = false;
  }

  var next = null;
  return _xstream.Stream.create({
    start: function start(listener) {
      if (preventDefault) {
        next = function _next(event) {
          preventDefaultConditional(event, preventDefault);
          listener.next(event);
        };
      } else {
        next = function _next(event) {
          listener.next(event);
        };
      }

      element.addEventListener(eventName, next, {
        capture: useCapture,
        passive: passive
      });
    },
    stop: function stop() {
      element.removeEventListener(eventName, next, useCapture);
      next = null;
    }
  });
}

function matchObject(matcher, obj) {
  var keys = Object.keys(matcher);
  var n = keys.length;

  for (var i = 0; i < n; i++) {
    var k = keys[i];

    if (typeof matcher[k] === 'object' && typeof obj[k] === 'object') {
      if (!matchObject(matcher[k], obj[k])) {
        return false;
      }
    } else if (matcher[k] !== obj[k]) {
      return false;
    }
  }

  return true;
}

function preventDefaultConditional(event, preventDefault) {
  if (preventDefault) {
    if (typeof preventDefault === 'boolean') {
      event.preventDefault();
    } else if (isPredicate(preventDefault)) {
      if (preventDefault(event)) {
        event.preventDefault();
      }
    } else if (typeof preventDefault === 'object') {
      if (matchObject(preventDefault, event)) {
        event.preventDefault();
      }
    } else {
      throw new Error('preventDefault has to be either a boolean, predicate function or object');
    }
  }
}

function isPredicate(fn) {
  return typeof fn === 'function';
}
},{"xstream":"../node_modules/xstream/index.js"}],"../node_modules/@cycle/dom/lib/es6/DocumentDOMSource.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentDOMSource = void 0;

var _xstream = _interopRequireDefault(require("xstream"));

var _adapt = require("@cycle/run/lib/adapt");

var _fromEvent = require("./fromEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentDOMSource =
/** @class */
function () {
  function DocumentDOMSource(_name) {
    this._name = _name;
  }

  DocumentDOMSource.prototype.select = function (selector) {
    // This functionality is still undefined/undecided.
    return this;
  };

  DocumentDOMSource.prototype.elements = function () {
    var out = (0, _adapt.adapt)(_xstream.default.of([document]));
    out._isCycleSource = this._name;
    return out;
  };

  DocumentDOMSource.prototype.element = function () {
    var out = (0, _adapt.adapt)(_xstream.default.of(document));
    out._isCycleSource = this._name;
    return out;
  };

  DocumentDOMSource.prototype.events = function (eventType, options, bubbles) {
    if (options === void 0) {
      options = {};
    }

    var stream;
    stream = (0, _fromEvent.fromEvent)(document, eventType, options.useCapture, options.preventDefault);
    var out = (0, _adapt.adapt)(stream);
    out._isCycleSource = this._name;
    return out;
  };

  return DocumentDOMSource;
}();

exports.DocumentDOMSource = DocumentDOMSource;
},{"xstream":"../node_modules/xstream/index.js","@cycle/run/lib/adapt":"../node_modules/@cycle/run/lib/adapt.js","./fromEvent":"../node_modules/@cycle/dom/lib/es6/fromEvent.js"}],"../node_modules/@cycle/dom/lib/es6/BodyDOMSource.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BodyDOMSource = void 0;

var _xstream = _interopRequireDefault(require("xstream"));

var _adapt = require("@cycle/run/lib/adapt");

var _fromEvent = require("./fromEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodyDOMSource =
/** @class */
function () {
  function BodyDOMSource(_name) {
    this._name = _name;
  }

  BodyDOMSource.prototype.select = function (selector) {
    // This functionality is still undefined/undecided.
    return this;
  };

  BodyDOMSource.prototype.elements = function () {
    var out = (0, _adapt.adapt)(_xstream.default.of([document.body]));
    out._isCycleSource = this._name;
    return out;
  };

  BodyDOMSource.prototype.element = function () {
    var out = (0, _adapt.adapt)(_xstream.default.of(document.body));
    out._isCycleSource = this._name;
    return out;
  };

  BodyDOMSource.prototype.events = function (eventType, options, bubbles) {
    if (options === void 0) {
      options = {};
    }

    var stream;
    stream = (0, _fromEvent.fromEvent)(document.body, eventType, options.useCapture, options.preventDefault);
    var out = (0, _adapt.adapt)(stream);
    out._isCycleSource = this._name;
    return out;
  };

  return BodyDOMSource;
}();

exports.BodyDOMSource = BodyDOMSource;
},{"xstream":"../node_modules/xstream/index.js","@cycle/run/lib/adapt":"../node_modules/@cycle/run/lib/adapt.js","./fromEvent":"../node_modules/@cycle/dom/lib/es6/fromEvent.js"}],"../node_modules/@cycle/dom/lib/es6/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClassOrId = isClassOrId;
exports.isDocFrag = isDocFrag;
exports.checkValidContainer = checkValidContainer;
exports.getValidNode = getValidNode;
exports.getSelectors = getSelectors;
exports.isEqualNamespace = isEqualNamespace;
exports.makeInsert = makeInsert;

function isValidNode(obj) {
  var ELEM_TYPE = 1;
  var FRAG_TYPE = 11;
  return typeof HTMLElement === 'object' ? obj instanceof HTMLElement || obj instanceof DocumentFragment : obj && typeof obj === 'object' && obj !== null && (obj.nodeType === ELEM_TYPE || obj.nodeType === FRAG_TYPE) && typeof obj.nodeName === 'string';
}

function isClassOrId(str) {
  return str.length > 1 && (str[0] === '.' || str[0] === '#');
}

function isDocFrag(el) {
  return el.nodeType === 11;
}

function checkValidContainer(container) {
  if (typeof container !== 'string' && !isValidNode(container)) {
    throw new Error('Given container is not a DOM element neither a selector string.');
  }
}

function getValidNode(selectors) {
  var domElement = typeof selectors === 'string' ? document.querySelector(selectors) : selectors;

  if (typeof selectors === 'string' && domElement === null) {
    throw new Error("Cannot render into unknown element `" + selectors + "`");
  }

  return domElement;
}

function getSelectors(namespace) {
  var res = '';

  for (var i = namespace.length - 1; i >= 0; i--) {
    if (namespace[i].type !== 'selector') {
      break;
    }

    res = namespace[i].scope + ' ' + res;
  }

  return res.trim();
}

function isEqualNamespace(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (a[i].type !== b[i].type || a[i].scope !== b[i].scope) {
      return false;
    }
  }

  return true;
}

function makeInsert(map) {
  return function (type, elm, value) {
    if (map.has(type)) {
      var innerMap = map.get(type);
      innerMap.set(elm, value);
    } else {
      var innerMap = new Map();
      innerMap.set(elm, value);
      map.set(type, innerMap);
    }
  };
}
},{}],"../node_modules/@cycle/dom/lib/es6/ScopeChecker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScopeChecker = void 0;

var _utils = require("./utils");

var ScopeChecker =
/** @class */
function () {
  function ScopeChecker(namespace, isolateModule) {
    this.namespace = namespace;
    this.isolateModule = isolateModule;
    this._namespace = namespace.filter(function (n) {
      return n.type !== 'selector';
    });
  }
  /**
   * Checks whether the given element is *directly* in the scope of this
   * scope checker. Being contained *indirectly* through other scopes
   * is not valid. This is crucial for implementing parent-child isolation,
   * so that the parent selectors don't search inside a child scope.
   */


  ScopeChecker.prototype.isDirectlyInScope = function (leaf) {
    var namespace = this.isolateModule.getNamespace(leaf);

    if (!namespace) {
      return false;
    }

    if (this._namespace.length > namespace.length || !(0, _utils.isEqualNamespace)(this._namespace, namespace.slice(0, this._namespace.length))) {
      return false;
    }

    for (var i = this._namespace.length; i < namespace.length; i++) {
      if (namespace[i].type === 'total') {
        return false;
      }
    }

    return true;
  };

  return ScopeChecker;
}();

exports.ScopeChecker = ScopeChecker;
},{"./utils":"../node_modules/@cycle/dom/lib/es6/utils.js"}],"../node_modules/@cycle/dom/lib/es6/ElementFinder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementFinder = void 0;

var _ScopeChecker = require("./ScopeChecker");

var _utils = require("./utils");

function toElArray(input) {
  return Array.prototype.slice.call(input);
}

var ElementFinder =
/** @class */
function () {
  function ElementFinder(namespace, isolateModule) {
    this.namespace = namespace;
    this.isolateModule = isolateModule;
  }

  ElementFinder.prototype.call = function () {
    var namespace = this.namespace;
    var selector = (0, _utils.getSelectors)(namespace);
    var scopeChecker = new _ScopeChecker.ScopeChecker(namespace, this.isolateModule);
    var topNode = this.isolateModule.getElement(namespace.filter(function (n) {
      return n.type !== 'selector';
    }));

    if (topNode === undefined) {
      return [];
    }

    if (selector === '') {
      return [topNode];
    }

    return toElArray(topNode.querySelectorAll(selector)).filter(scopeChecker.isDirectlyInScope, scopeChecker).concat(topNode.matches(selector) ? [topNode] : []);
  };

  return ElementFinder;
}();

exports.ElementFinder = ElementFinder;
},{"./ScopeChecker":"../node_modules/@cycle/dom/lib/es6/ScopeChecker.js","./utils":"../node_modules/@cycle/dom/lib/es6/utils.js"}],"../node_modules/@cycle/dom/lib/es6/isolate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeIsolateSink = makeIsolateSink;
exports.getScopeObj = getScopeObj;

var _utils = require("./utils");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function makeIsolateSink(namespace) {
  return function (sink, scope) {
    if (scope === ':root') {
      return sink;
    }

    return sink.map(function (node) {
      if (!node) {
        return node;
      }

      var scopeObj = getScopeObj(scope);

      var newNode = __assign({}, node, {
        data: __assign({}, node.data, {
          isolate: !node.data || !Array.isArray(node.data.isolate) ? namespace.concat([scopeObj]) : node.data.isolate
        })
      });

      return __assign({}, newNode, {
        key: newNode.key !== undefined ? newNode.key : JSON.stringify(newNode.data.isolate)
      });
    });
  };
}

function getScopeObj(scope) {
  return {
    type: (0, _utils.isClassOrId)(scope) ? 'sibling' : 'total',
    scope: scope
  };
}
},{"./utils":"../node_modules/@cycle/dom/lib/es6/utils.js"}],"../node_modules/@cycle/dom/lib/es6/MainDOMSource.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainDOMSource = void 0;

var _adapt = require("@cycle/run/lib/adapt");

var _DocumentDOMSource = require("./DocumentDOMSource");

var _BodyDOMSource = require("./BodyDOMSource");

var _ElementFinder = require("./ElementFinder");

var _isolate = require("./isolate");

var MainDOMSource =
/** @class */
function () {
  function MainDOMSource(_rootElement$, _sanitation$, _namespace, _isolateModule, _eventDelegator, _name) {
    if (_namespace === void 0) {
      _namespace = [];
    }

    this._rootElement$ = _rootElement$;
    this._sanitation$ = _sanitation$;
    this._namespace = _namespace;
    this._isolateModule = _isolateModule;
    this._eventDelegator = _eventDelegator;
    this._name = _name;

    this.isolateSource = function (source, scope) {
      return new MainDOMSource(source._rootElement$, source._sanitation$, source._namespace.concat((0, _isolate.getScopeObj)(scope)), source._isolateModule, source._eventDelegator, source._name);
    };

    this.isolateSink = (0, _isolate.makeIsolateSink)(this._namespace);
  }

  MainDOMSource.prototype._elements = function () {
    if (this._namespace.length === 0) {
      return this._rootElement$.map(function (x) {
        return [x];
      });
    } else {
      var elementFinder_1 = new _ElementFinder.ElementFinder(this._namespace, this._isolateModule);
      return this._rootElement$.map(function () {
        return elementFinder_1.call();
      });
    }
  };

  MainDOMSource.prototype.elements = function () {
    var out = (0, _adapt.adapt)(this._elements().remember());
    out._isCycleSource = this._name;
    return out;
  };

  MainDOMSource.prototype.element = function () {
    var out = (0, _adapt.adapt)(this._elements().filter(function (arr) {
      return arr.length > 0;
    }).map(function (arr) {
      return arr[0];
    }).remember());
    out._isCycleSource = this._name;
    return out;
  };

  Object.defineProperty(MainDOMSource.prototype, "namespace", {
    get: function () {
      return this._namespace;
    },
    enumerable: true,
    configurable: true
  });

  MainDOMSource.prototype.select = function (selector) {
    if (typeof selector !== 'string') {
      throw new Error("DOM driver's select() expects the argument to be a " + "string as a CSS selector");
    }

    if (selector === 'document') {
      return new _DocumentDOMSource.DocumentDOMSource(this._name);
    }

    if (selector === 'body') {
      return new _BodyDOMSource.BodyDOMSource(this._name);
    }

    var namespace = selector === ':root' ? [] : this._namespace.concat({
      type: 'selector',
      scope: selector.trim()
    });
    return new MainDOMSource(this._rootElement$, this._sanitation$, namespace, this._isolateModule, this._eventDelegator, this._name);
  };

  MainDOMSource.prototype.events = function (eventType, options, bubbles) {
    if (options === void 0) {
      options = {};
    }

    if (typeof eventType !== "string") {
      throw new Error("DOM driver's events() expects argument to be a " + "string representing the event type to listen for.");
    }

    var event$ = this._eventDelegator.addEventListener(eventType, this._namespace, options, bubbles);

    var out = (0, _adapt.adapt)(event$);
    out._isCycleSource = this._name;
    return out;
  };

  MainDOMSource.prototype.dispose = function () {
    this._sanitation$.shamefullySendNext(null); //this._isolateModule.reset();

  };

  return MainDOMSource;
}();

exports.MainDOMSource = MainDOMSource;
},{"@cycle/run/lib/adapt":"../node_modules/@cycle/run/lib/adapt.js","./DocumentDOMSource":"../node_modules/@cycle/dom/lib/es6/DocumentDOMSource.js","./BodyDOMSource":"../node_modules/@cycle/dom/lib/es6/BodyDOMSource.js","./ElementFinder":"../node_modules/@cycle/dom/lib/es6/ElementFinder.js","./isolate":"../node_modules/@cycle/dom/lib/es6/isolate.js"}],"../node_modules/snabbdom/es/vnode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vnode = vnode;
exports.default = void 0;

function vnode(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {
    sel: sel,
    data: data,
    children: children,
    text: text,
    elm: elm,
    key: key
  };
}

var _default = vnode;
exports.default = _default;
},{}],"../node_modules/snabbdom/es/is.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primitive = primitive;
exports.array = void 0;
var array = Array.isArray;
exports.array = array;

function primitive(s) {
  return typeof s === 'string' || typeof s === 'number';
}
},{}],"../node_modules/snabbdom/es/htmldomapi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.htmlDomApi = void 0;

function createElement(tagName) {
  return document.createElement(tagName);
}

function createElementNS(namespaceURI, qualifiedName) {
  return document.createElementNS(namespaceURI, qualifiedName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(elm) {
  return elm.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function getTextContent(node) {
  return node.textContent;
}

function isElement(node) {
  return node.nodeType === 1;
}

function isText(node) {
  return node.nodeType === 3;
}

function isComment(node) {
  return node.nodeType === 8;
}

var htmlDomApi = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  getTextContent: getTextContent,
  isElement: isElement,
  isText: isText,
  isComment: isComment
};
exports.htmlDomApi = htmlDomApi;
var _default = htmlDomApi;
exports.default = _default;
},{}],"../node_modules/snabbdom/es/h.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h = h;
exports.default = void 0;

var _vnode = require("./vnode");

var is = _interopRequireWildcard(require("./is"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function addNS(data, children, sel) {
  data.ns = 'http://www.w3.org/2000/svg';

  if (sel !== 'foreignObject' && children !== undefined) {
    for (var i = 0; i < children.length; ++i) {
      var childData = children[i].data;

      if (childData !== undefined) {
        addNS(childData, children[i].children, children[i].sel);
      }
    }
  }
}

function h(sel, b, c) {
  var data = {},
      children,
      text,
      i;

  if (c !== undefined) {
    data = b;

    if (is.array(c)) {
      children = c;
    } else if (is.primitive(c)) {
      text = c;
    } else if (c && c.sel) {
      children = [c];
    }
  } else if (b !== undefined) {
    if (is.array(b)) {
      children = b;
    } else if (is.primitive(b)) {
      text = b;
    } else if (b && b.sel) {
      children = [b];
    } else {
      data = b;
    }
  }

  if (children !== undefined) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = (0, _vnode.vnode)(undefined, undefined, undefined, children[i], undefined);
    }
  }

  if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' && (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
    addNS(data, children, sel);
  }

  return (0, _vnode.vnode)(sel, data, children, text, undefined);
}

;
var _default = h;
exports.default = _default;
},{"./vnode":"../node_modules/snabbdom/es/vnode.js","./is":"../node_modules/snabbdom/es/is.js"}],"../node_modules/snabbdom/es/thunk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.thunk = void 0;

var _h = require("./h");

function copyToThunk(vnode, thunk) {
  thunk.elm = vnode.elm;
  vnode.data.fn = thunk.data.fn;
  vnode.data.args = thunk.data.args;
  thunk.data = vnode.data;
  thunk.children = vnode.children;
  thunk.text = vnode.text;
  thunk.elm = vnode.elm;
}

function init(thunk) {
  var cur = thunk.data;
  var vnode = cur.fn.apply(undefined, cur.args);
  copyToThunk(vnode, thunk);
}

function prepatch(oldVnode, thunk) {
  var i,
      old = oldVnode.data,
      cur = thunk.data;
  var oldArgs = old.args,
      args = cur.args;

  if (old.fn !== cur.fn || oldArgs.length !== args.length) {
    copyToThunk(cur.fn.apply(undefined, args), thunk);
    return;
  }

  for (i = 0; i < args.length; ++i) {
    if (oldArgs[i] !== args[i]) {
      copyToThunk(cur.fn.apply(undefined, args), thunk);
      return;
    }
  }

  copyToThunk(oldVnode, thunk);
}

var thunk = function thunk(sel, key, fn, args) {
  if (args === undefined) {
    args = fn;
    fn = key;
    key = undefined;
  }

  return (0, _h.h)(sel, {
    key: key,
    hook: {
      init: init,
      prepatch: prepatch
    },
    fn: fn,
    args: args
  });
};

exports.thunk = thunk;
var _default = thunk;
exports.default = _default;
},{"./h":"../node_modules/snabbdom/es/h.js"}],"../node_modules/snabbdom/es/snabbdom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
Object.defineProperty(exports, "h", {
  enumerable: true,
  get: function () {
    return _h.h;
  }
});
Object.defineProperty(exports, "thunk", {
  enumerable: true,
  get: function () {
    return _thunk.thunk;
  }
});

var _vnode = _interopRequireDefault(require("./vnode"));

var is = _interopRequireWildcard(require("./is"));

var _htmldomapi = _interopRequireDefault(require("./htmldomapi"));

var _h = require("./h");

var _thunk = require("./thunk");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUndef(s) {
  return s === undefined;
}

function isDef(s) {
  return s !== undefined;
}

var emptyNode = (0, _vnode.default)('', {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function isVnode(vnode) {
  return vnode.sel !== undefined;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i,
      map = {},
      key,
      ch;

  for (i = beginIdx; i <= endIdx; ++i) {
    ch = children[i];

    if (ch != null) {
      key = ch.key;
      if (key !== undefined) map[key] = i;
    }
  }

  return map;
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules, domApi) {
  var i,
      j,
      cbs = {};
  var api = domApi !== undefined ? domApi : _htmldomapi.default;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      var hook = modules[j][hooks[i]];

      if (hook !== undefined) {
        cbs[hooks[i]].push(hook);
      }
    }
  }

  function emptyNodeAt(elm) {
    var id = elm.id ? '#' + elm.id : '';
    var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
    return (0, _vnode.default)(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    return function rmCb() {
      if (--listeners === 0) {
        var parent_1 = api.parentNode(childElm);
        api.removeChild(parent_1, childElm);
      }
    };
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i,
        data = vnode.data;

    if (data !== undefined) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode);
        data = vnode.data;
      }
    }

    var children = vnode.children,
        sel = vnode.sel;

    if (sel === '!') {
      if (isUndef(vnode.text)) {
        vnode.text = '';
      }

      vnode.elm = api.createComment(vnode.text);
    } else if (sel !== undefined) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag) : api.createElement(tag);
      if (hash < dot) elm.setAttribute('id', sel.slice(hash + 1, dot));
      if (dotIdx > 0) elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '));

      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);

      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          var ch = children[i];

          if (ch != null) {
            api.appendChild(elm, createElm(ch, insertedVnodeQueue));
          }
        }
      } else if (is.primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text));
      }

      i = vnode.data.hook; // Reuse variable

      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      vnode.elm = api.createTextNode(vnode.text);
    }

    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (ch != null) {
        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
      }
    }
  }

  function invokeDestroyHook(vnode) {
    var i,
        j,
        data = vnode.data;

    if (data !== undefined) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);

      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);

      if (vnode.children !== undefined) {
        for (j = 0; j < vnode.children.length; ++j) {
          i = vnode.children[j];

          if (i != null && typeof i !== "string") {
            invokeDestroyHook(i);
          }
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i_1 = void 0,
          listeners = void 0,
          rm = void 0,
          ch = vnodes[startIdx];

      if (ch != null) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);

          for (i_1 = 0; i_1 < cbs.remove.length; ++i_1) cbs.remove[i_1](ch, rm);

          if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
            i_1(ch, rm);
          } else {
            rm();
          }
        } else {
          // Text node
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0,
        newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx;
    var idxInOld;
    var elmToMove;
    var before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
      } else if (oldEndVnode == null) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx];
      } else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = oldKeyToIdx[newStartVnode.key];

        if (isUndef(idxInOld)) {
          // New element
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];

          if (elmToMove.sel !== newStartVnode.sel) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          }

          newStartVnode = newCh[++newStartIdx];
        }
      }
    }

    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
      if (oldStartIdx > oldEndIdx) {
        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;

    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }

    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (oldVnode === vnode) return;

    if (vnode.data !== undefined) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);

      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) api.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }

      api.setTextContent(elm, vnode.text);
    }

    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }

  return function patch(oldVnode, vnode) {
    var i, elm, parent;
    var insertedVnodeQueue = [];

    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();

    if (!isVnode(oldVnode)) {
      oldVnode = emptyNodeAt(oldVnode);
    }

    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);
      createElm(vnode, insertedVnodeQueue);

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }

    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }

    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();

    return vnode;
  };
}
},{"./vnode":"../node_modules/snabbdom/es/vnode.js","./is":"../node_modules/snabbdom/es/is.js","./htmldomapi":"../node_modules/snabbdom/es/htmldomapi.js","./h":"../node_modules/snabbdom/es/h.js","./thunk":"../node_modules/snabbdom/es/thunk.js"}],"../node_modules/xstream/extra/concat.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var ConcatProducer = /** @class */ (function () {
    function ConcatProducer(streams) {
        this.streams = streams;
        this.type = 'concat';
        this.out = null;
        this.i = 0;
    }
    ConcatProducer.prototype._start = function (out) {
        this.out = out;
        this.streams[this.i]._add(this);
    };
    ConcatProducer.prototype._stop = function () {
        var streams = this.streams;
        if (this.i < streams.length) {
            streams[this.i]._remove(this);
        }
        this.i = 0;
        this.out = null;
    };
    ConcatProducer.prototype._n = function (t) {
        var u = this.out;
        if (!u)
            return;
        u._n(t);
    };
    ConcatProducer.prototype._e = function (err) {
        var u = this.out;
        if (!u)
            return;
        u._e(err);
    };
    ConcatProducer.prototype._c = function () {
        var u = this.out;
        if (!u)
            return;
        var streams = this.streams;
        streams[this.i]._remove(this);
        if (++this.i < streams.length) {
            streams[this.i]._add(this);
        }
        else {
            u._c();
        }
    };
    return ConcatProducer;
}());
/**
 * Puts one stream after the other. *concat* is a factory that takes multiple
 * streams as arguments, and starts the `n+1`-th stream only when the `n`-th
 * stream has completed. It concatenates those streams together.
 *
 * Marble diagram:
 *
 * ```text
 * --1--2---3---4-|
 * ...............--a-b-c--d-|
 *           concat
 * --1--2---3---4---a-b-c--d-|
 * ```
 *
 * Example:
 *
 * ```js
 * import concat from 'xstream/extra/concat'
 *
 * const streamA = xs.of('a', 'b', 'c')
 * const streamB = xs.of(10, 20, 30)
 * const streamC = xs.of('X', 'Y', 'Z')
 *
 * const outputStream = concat(streamA, streamB, streamC)
 *
 * outputStream.addListener({
 *   next: (x) => console.log(x),
 *   error: (err) => console.error(err),
 *   complete: () => console.log('concat completed'),
 * })
 * ```
 *
 * @factory true
 * @param {Stream} stream1 A stream to concatenate together with other streams.
 * @param {Stream} stream2 A stream to concatenate together with other streams. Two
 * or more streams may be given as arguments.
 * @return {Stream}
 */
function concat() {
    var streams = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        streams[_i] = arguments[_i];
    }
    return new index_1.Stream(new ConcatProducer(streams));
}
exports.default = concat;

},{"../index":"../node_modules/xstream/index.js"}],"../node_modules/xstream/extra/sampleCombine.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var NO = {};
var SampleCombineListener = /** @class */ (function () {
    function SampleCombineListener(i, p) {
        this.i = i;
        this.p = p;
        p.ils[i] = this;
    }
    SampleCombineListener.prototype._n = function (t) {
        var p = this.p;
        if (p.out === NO)
            return;
        p.up(t, this.i);
    };
    SampleCombineListener.prototype._e = function (err) {
        this.p._e(err);
    };
    SampleCombineListener.prototype._c = function () {
        this.p.down(this.i, this);
    };
    return SampleCombineListener;
}());
exports.SampleCombineListener = SampleCombineListener;
var SampleCombineOperator = /** @class */ (function () {
    function SampleCombineOperator(ins, streams) {
        this.type = 'sampleCombine';
        this.ins = ins;
        this.others = streams;
        this.out = NO;
        this.ils = [];
        this.Nn = 0;
        this.vals = [];
    }
    SampleCombineOperator.prototype._start = function (out) {
        this.out = out;
        var s = this.others;
        var n = this.Nn = s.length;
        var vals = this.vals = new Array(n);
        for (var i = 0; i < n; i++) {
            vals[i] = NO;
            s[i]._add(new SampleCombineListener(i, this));
        }
        this.ins._add(this);
    };
    SampleCombineOperator.prototype._stop = function () {
        var s = this.others;
        var n = s.length;
        var ils = this.ils;
        this.ins._remove(this);
        for (var i = 0; i < n; i++) {
            s[i]._remove(ils[i]);
        }
        this.out = NO;
        this.vals = [];
        this.ils = [];
    };
    SampleCombineOperator.prototype._n = function (t) {
        var out = this.out;
        if (out === NO)
            return;
        if (this.Nn > 0)
            return;
        out._n([t].concat(this.vals));
    };
    SampleCombineOperator.prototype._e = function (err) {
        var out = this.out;
        if (out === NO)
            return;
        out._e(err);
    };
    SampleCombineOperator.prototype._c = function () {
        var out = this.out;
        if (out === NO)
            return;
        out._c();
    };
    SampleCombineOperator.prototype.up = function (t, i) {
        var v = this.vals[i];
        if (this.Nn > 0 && v === NO) {
            this.Nn--;
        }
        this.vals[i] = t;
    };
    SampleCombineOperator.prototype.down = function (i, l) {
        this.others[i]._remove(l);
    };
    return SampleCombineOperator;
}());
exports.SampleCombineOperator = SampleCombineOperator;
var sampleCombine;
/**
 *
 * Combines a source stream with multiple other streams. The result stream
 * will emit the latest events from all input streams, but only when the
 * source stream emits.
 *
 * If the source, or any input stream, throws an error, the result stream
 * will propagate the error. If any input streams end, their final emitted
 * value will remain in the array of any subsequent events from the result
 * stream.
 *
 * The result stream will only complete upon completion of the source stream.
 *
 * Marble diagram:
 *
 * ```text
 * --1----2-----3--------4--- (source)
 * ----a-----b-----c--d------ (other)
 *      sampleCombine
 * -------2a----3b-------4d--
 * ```
 *
 * Examples:
 *
 * ```js
 * import sampleCombine from 'xstream/extra/sampleCombine'
 * import xs from 'xstream'
 *
 * const sampler = xs.periodic(1000).take(3)
 * const other = xs.periodic(100)
 *
 * const stream = sampler.compose(sampleCombine(other))
 *
 * stream.addListener({
 *   next: i => console.log(i),
 *   error: err => console.error(err),
 *   complete: () => console.log('completed')
 * })
 * ```
 *
 * ```text
 * > [0, 8]
 * > [1, 18]
 * > [2, 28]
 * ```
 *
 * ```js
 * import sampleCombine from 'xstream/extra/sampleCombine'
 * import xs from 'xstream'
 *
 * const sampler = xs.periodic(1000).take(3)
 * const other = xs.periodic(100).take(2)
 *
 * const stream = sampler.compose(sampleCombine(other))
 *
 * stream.addListener({
 *   next: i => console.log(i),
 *   error: err => console.error(err),
 *   complete: () => console.log('completed')
 * })
 * ```
 *
 * ```text
 * > [0, 1]
 * > [1, 1]
 * > [2, 1]
 * ```
 *
 * @param {...Stream} streams One or more streams to combine with the sampler
 * stream.
 * @return {Stream}
 */
sampleCombine = function sampleCombine() {
    var streams = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        streams[_i] = arguments[_i];
    }
    return function sampleCombineOperator(sampler) {
        return new index_1.Stream(new SampleCombineOperator(sampler, streams));
    };
};
exports.default = sampleCombine;

},{"../index":"../node_modules/xstream/index.js"}],"../node_modules/snabbdom/htmldomapi.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
exports.htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    getTextContent: getTextContent,
    isElement: isElement,
    isText: isText,
    isComment: isComment,
};
exports.default = exports.htmlDomApi;

},{}],"../node_modules/snabbdom/tovnode.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = require("./vnode");
var htmldomapi_1 = require("./htmldomapi");
function toVNode(node, domApi) {
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    var text;
    if (api.isElement(node)) {
        var id = node.id ? '#' + node.id : '';
        var cn = node.getAttribute('class');
        var c = cn ? '.' + cn.split(' ').join('.') : '';
        var sel = api.tagName(node).toLowerCase() + id + c;
        var attrs = {};
        var children = [];
        var name_1;
        var i = void 0, n = void 0;
        var elmAttrs = node.attributes;
        var elmChildren = node.childNodes;
        for (i = 0, n = elmAttrs.length; i < n; i++) {
            name_1 = elmAttrs[i].nodeName;
            if (name_1 !== 'id' && name_1 !== 'class') {
                attrs[name_1] = elmAttrs[i].nodeValue;
            }
        }
        for (i = 0, n = elmChildren.length; i < n; i++) {
            children.push(toVNode(elmChildren[i], domApi));
        }
        return vnode_1.default(sel, { attrs: attrs }, children, undefined, node);
    }
    else if (api.isText(node)) {
        text = api.getTextContent(node);
        return vnode_1.default(undefined, undefined, undefined, text, node);
    }
    else if (api.isComment(node)) {
        text = api.getTextContent(node);
        return vnode_1.default('!', {}, [], text, node);
    }
    else {
        return vnode_1.default('', {}, [], undefined, node);
    }
}
exports.toVNode = toVNode;
exports.default = toVNode;

},{"./vnode":"../node_modules/snabbdom/vnode.js","./htmldomapi":"../node_modules/snabbdom/htmldomapi.js"}],"../node_modules/snabbdom-selector/lib/es6/curry2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curry2 = curry2;

function curry2(select) {
  return function selector(sel, vNode) {
    switch (arguments.length) {
      case 0:
        return select;

      case 1:
        return function (_vNode) {
          return select(sel, _vNode);
        };

      default:
        return select(sel, vNode);
    }
  };
}
},{}],"../node_modules/tree-selector/lib/es6/selectorParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSelector = parseSelector;

var __assign = void 0 && (void 0).__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
  }

  return t;
};

var IDENT = '[\\w-]+';
var SPACE = '[ \t]*';
var VALUE = "[^\\]]+";
var CLASS = "(?:\\." + IDENT + ")";
var ID = "(?:#" + IDENT + ")";
var OP = "(?:=|\\$=|\\^=|\\*=|~=|\\|=)";
var ATTR = "(?:\\[" + SPACE + IDENT + SPACE + "(?:" + OP + SPACE + VALUE + SPACE + ")?\\])";
var SUBTREE = "(?:[ \t]+)";
var CHILD = "(?:" + SPACE + "(>)" + SPACE + ")";
var NEXT_SIBLING = "(?:" + SPACE + "(\\+)" + SPACE + ")";
var SIBLING = "(?:" + SPACE + "(~)" + SPACE + ")";
var COMBINATOR = "(?:" + SUBTREE + "|" + CHILD + "|" + NEXT_SIBLING + "|" + SIBLING + ")";
var CONTAINS = "contains\\(\"[^\"]*\"\\)";
var FORMULA = "(?:even|odd|\\d*(?:-?n(?:\\+\\d+)?)?)";
var NTH_CHILD = "nth-child\\(" + FORMULA + "\\)";
var PSEUDO = ":(?:first-child|last-child|" + NTH_CHILD + "|empty|root|" + CONTAINS + ")";
var TAG = "(:?" + IDENT + ")?";
var TOKENS = CLASS + "|" + ID + "|" + ATTR + "|" + PSEUDO + "|" + COMBINATOR;
var combinatorRegex = new RegExp("^" + COMBINATOR + "$");
/**
 * Parses a css selector into a normalized object.
 * Expects a selector for a single element only, no `>` or the like!
 */

function parseSelector(selector) {
  var sel = selector.trim();
  var tagRegex = new RegExp(TAG, 'y');
  var tag = tagRegex.exec(sel)[0];
  var regex = new RegExp(TOKENS, 'y');
  regex.lastIndex = tagRegex.lastIndex;
  var matches = [];
  var nextSelector = undefined;
  var lastCombinator = undefined;
  var index = -1;

  while (regex.lastIndex < sel.length) {
    var match = regex.exec(sel);

    if (!match && lastCombinator === undefined) {
      throw new Error('Parse error, invalid selector');
    } else if (match && combinatorRegex.test(match[0])) {
      var comb = combinatorRegex.exec(match[0])[0];
      lastCombinator = comb;
      index = regex.lastIndex;
    } else {
      if (lastCombinator !== undefined) {
        nextSelector = [getCombinator(lastCombinator), parseSelector(sel.substring(index))];
        break;
      }

      matches.push(match[0]);
    }
  }

  var classList = matches.filter(function (s) {
    return s.startsWith('.');
  }).map(function (s) {
    return s.substring(1);
  });
  var ids = matches.filter(function (s) {
    return s.startsWith('#');
  }).map(function (s) {
    return s.substring(1);
  });

  if (ids.length > 1) {
    throw new Error('Invalid selector, only one id is allowed');
  }

  var postprocessRegex = new RegExp("(" + IDENT + ")" + SPACE + "(" + OP + ")?" + SPACE + "(" + VALUE + ")?");
  var attrs = matches.filter(function (s) {
    return s.startsWith('[');
  }).map(function (s) {
    return postprocessRegex.exec(s).slice(1, 4);
  }).map(function (_a) {
    var attr = _a[0],
        op = _a[1],
        val = _a[2];
    return _b = {}, _b[attr] = [getOp(op), val ? parseAttrValue(val) : val], _b;

    var _b;
  }).reduce(function (acc, curr) {
    return __assign({}, acc, curr);
  }, {});
  var pseudos = matches.filter(function (s) {
    return s.startsWith(':');
  }).map(function (s) {
    return postProcessPseudos(s.substring(1));
  });
  return {
    id: ids[0] || '',
    tag: tag,
    classList: classList,
    attributes: attrs,
    nextSelector: nextSelector,
    pseudos: pseudos
  };
}

function parseAttrValue(v) {
  if (v.startsWith('"')) {
    return v.slice(1, -1);
  }

  if (v === "true") {
    return true;
  }

  if (v === "false") {
    return false;
  }

  var f = parseFloat(v);

  if (isNaN(f)) {
    return v;
  }

  return f;
}

function postProcessPseudos(sel) {
  if (sel === 'first-child' || sel === 'last-child' || sel === 'root' || sel === 'empty') {
    return [sel, undefined];
  }

  if (sel.startsWith('contains')) {
    var text = sel.slice(10, -2);
    return ['contains', text];
  }

  var content = sel.slice(10, -1);

  if (content === 'even') {
    content = '2n';
  }

  if (content === 'odd') {
    content = '2n+1';
  }

  return ['nth-child', content];
}

function getOp(op) {
  switch (op) {
    case '=':
      return 'exact';

    case '^=':
      return 'startsWith';

    case '$=':
      return 'endsWith';

    case '*=':
      return 'contains';

    case '~=':
      return 'whitespace';

    case '|=':
      return 'dash';

    default:
      return 'has';
  }
}

function getCombinator(comb) {
  switch (comb.trim()) {
    case '>':
      return 'child';

    case '+':
      return 'nextSibling';

    case '~':
      return 'sibling';

    default:
      return 'subtree';
  }
}
},{}],"../node_modules/tree-selector/lib/es6/matches.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatches = createMatches;

var _selectorParser = require("./selectorParser");

function createMatches(opts) {
  return function matches(selector, node) {
    var _a = typeof selector === 'object' ? selector : (0, _selectorParser.parseSelector)(selector),
        tag = _a.tag,
        id = _a.id,
        classList = _a.classList,
        attributes = _a.attributes,
        nextSelector = _a.nextSelector,
        pseudos = _a.pseudos;

    if (nextSelector !== undefined) {
      throw new Error('matches can only process selectors that target a single element');
    }

    if (!node) {
      return false;
    }

    if (tag && tag.toLowerCase() !== opts.tag(node).toLowerCase()) {
      return false;
    }

    if (id && id !== opts.id(node)) {
      return false;
    }

    var classes = opts.className(node).split(' ');

    for (var i = 0; i < classList.length; i++) {
      if (classes.indexOf(classList[i]) === -1) {
        return false;
      }
    }

    for (var key in attributes) {
      var attr = opts.attr(node, key);
      var t = attributes[key][0];
      var v = attributes[key][1];

      if (attr === undefined) {
        return false;
      }

      if (t === 'has') {
        return true;
      }

      if (t === 'exact' && attr !== v) {
        return false;
      } else if (t !== 'exact') {
        if (typeof v !== 'string') {
          throw new Error('All non-string values have to be an exact match');
        }

        if (t === 'startsWith' && !attr.startsWith(v)) {
          return false;
        }

        if (t === 'endsWith' && !attr.endsWith(v)) {
          return false;
        }

        if (t === 'contains' && attr.indexOf(v) === -1) {
          return false;
        }

        if (t === 'whitespace' && attr.split(' ').indexOf(v) === -1) {
          return false;
        }

        if (t === 'dash' && attr.split('-').indexOf(v) === -1) {
          return false;
        }
      }
    }

    for (var i = 0; i < pseudos.length; i++) {
      var _b = pseudos[i],
          t = _b[0],
          data = _b[1];

      if (t === 'contains' && data !== opts.contents(node)) {
        return false;
      }

      if (t === 'empty' && (opts.contents(node) || opts.children(node).length !== 0)) {
        return false;
      }

      if (t === 'root' && opts.parent(node) !== undefined) {
        return false;
      }

      if (t.indexOf('child') !== -1) {
        if (!opts.parent(node)) {
          return false;
        }

        var siblings = opts.children(opts.parent(node));

        if (t === 'first-child' && siblings.indexOf(node) !== 0) {
          return false;
        }

        if (t === 'last-child' && siblings.indexOf(node) !== siblings.length - 1) {
          return false;
        }

        if (t === 'nth-child') {
          var regex = /([\+-]?)(\d*)(n?)(\+\d+)?/;
          var parseResult = regex.exec(data).slice(1);
          var index = siblings.indexOf(node);

          if (!parseResult[0]) {
            parseResult[0] = '+';
          }

          var factor = parseResult[1] ? parseInt(parseResult[0] + parseResult[1]) : undefined;
          var add = parseInt(parseResult[3] || '0');

          if (factor && parseResult[2] === 'n' && index % factor !== add) {
            return false;
          } else if (!factor && parseResult[2] && (parseResult[0] === '+' && index - add < 0 || parseResult[0] === '-' && index - add >= 0)) {
            return false;
          } else if (!parseResult[2] && factor && index !== factor - 1) {
            return false;
          }
        }
      }
    }

    return true;
  };
}
},{"./selectorParser":"../node_modules/tree-selector/lib/es6/selectorParser.js"}],"../node_modules/tree-selector/lib/es6/querySelector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuerySelector = createQuerySelector;

var _selectorParser = require("./selectorParser");

var _matches2 = require("./matches");

function createQuerySelector(options, matches) {
  var _matches = matches || (0, _matches2.createMatches)(options);

  function findSubtree(selector, depth, node) {
    if (!node) {
      return [];
    }

    var n = _matches(selector, node);

    var matched = n ? typeof n === 'object' ? [n] : [node] : [];

    if (depth === 0) {
      return matched;
    }

    var childMatched = options.children(node).filter(function (c) {
      return typeof c !== 'string';
    }).map(function (c) {
      return findSubtree(selector, depth - 1, c);
    }).reduce(function (acc, curr) {
      return acc.concat(curr);
    }, []);
    return matched.concat(childMatched);
  }

  function findSibling(selector, next, node) {
    if (!node || options.parent(node) === undefined) {
      return [];
    }

    var results = [];
    var siblings = options.children(options.parent(node));

    for (var i = siblings.indexOf(node) + 1; i < siblings.length; i++) {
      if (typeof siblings[i] === 'string') {
        continue;
      }

      var n = _matches(selector, siblings[i]);

      if (n) {
        if (typeof n === 'object') {
          results.push(n);
        } else {
          results.push(siblings[i]);
        }
      }

      if (next) {
        break;
      }
    }

    return results;
  }

  return function querySelector(selector, node) {
    if (!node) {
      return [];
    }

    var sel = typeof selector === 'object' ? selector : (0, _selectorParser.parseSelector)(selector);
    var results = [node];
    var currentSelector = sel;
    var currentCombinator = 'subtree';
    var tail = undefined;

    var _loop_1 = function () {
      tail = currentSelector.nextSelector;
      currentSelector.nextSelector = undefined;

      if (currentCombinator === 'subtree' || currentCombinator === 'child') {
        var depth_1 = currentCombinator === 'subtree' ? Infinity : 1;
        results = results.map(function (n) {
          return findSubtree(currentSelector, depth_1, n);
        }).reduce(function (acc, curr) {
          return acc.concat(curr);
        }, []);
      } else {
        var next_1 = currentCombinator === 'nextSibling';
        results = results.map(function (n) {
          return findSibling(currentSelector, next_1, n);
        }).reduce(function (acc, curr) {
          return acc.concat(curr);
        }, []);
      }

      if (tail) {
        currentSelector = tail[1];
        currentCombinator = tail[0];
      }
    };

    do {
      _loop_1();
    } while (tail !== undefined);

    return results;
  };
}
},{"./selectorParser":"../node_modules/tree-selector/lib/es6/selectorParser.js","./matches":"../node_modules/tree-selector/lib/es6/matches.js"}],"../node_modules/tree-selector/lib/es6/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createMatches: true,
  createQuerySelector: true
};
Object.defineProperty(exports, "createMatches", {
  enumerable: true,
  get: function () {
    return _matches.createMatches;
  }
});
Object.defineProperty(exports, "createQuerySelector", {
  enumerable: true,
  get: function () {
    return _querySelector.createQuerySelector;
  }
});

var _selectorParser = require("./selectorParser");

Object.keys(_selectorParser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectorParser[key];
    }
  });
});

var _matches = require("./matches");

var _querySelector = require("./querySelector");
},{"./selectorParser":"../node_modules/tree-selector/lib/es6/selectorParser.js","./matches":"../node_modules/tree-selector/lib/es6/matches.js","./querySelector":"../node_modules/tree-selector/lib/es6/querySelector.js"}],"../node_modules/snabbdom-selector/lib/es6/selectorParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectorParser = selectorParser;

function selectorParser(node) {
  if (!node.sel) {
    return {
      tagName: '',
      id: '',
      className: ''
    };
  }

  var sel = node.sel;
  var hashIdx = sel.indexOf('#');
  var dotIdx = sel.indexOf('.', hashIdx);
  var hash = hashIdx > 0 ? hashIdx : sel.length;
  var dot = dotIdx > 0 ? dotIdx : sel.length;
  var tagName = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
  var id = hash < dot ? sel.slice(hash + 1, dot) : void 0;
  var className = dotIdx > 0 ? sel.slice(dot + 1).replace(/\./g, ' ') : void 0;
  return {
    tagName: tagName,
    id: id,
    className: className
  };
}
},{}],"../node_modules/snabbdom-selector/lib/es6/classNameFromVNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNameFromVNode = classNameFromVNode;

var _selectorParser = require("./selectorParser");

function classNameFromVNode(vNode) {
  var _a = (0, _selectorParser.selectorParser)(vNode).className,
      cn = _a === void 0 ? '' : _a;

  if (!vNode.data) {
    return cn;
  }

  var _b = vNode.data,
      dataClass = _b.class,
      props = _b.props;

  if (dataClass) {
    var c = Object.keys(dataClass).filter(function (cl) {
      return dataClass[cl];
    });
    cn += " " + c.join(" ");
  }

  if (props && props.className) {
    cn += " " + props.className;
  }

  return cn && cn.trim();
}
},{"./selectorParser":"../node_modules/snabbdom-selector/lib/es6/selectorParser.js"}],"../node_modules/snabbdom-selector/lib/es6/parent-symbol.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else {
  root = Function('return this')();
}

var Symbol = root.Symbol;
var parentSymbol;

if (typeof Symbol === 'function') {
  parentSymbol = Symbol('parent');
} else {
  parentSymbol = '@@snabbdom-selector-parent';
}

var _default = parentSymbol;
exports.default = _default;
},{}],"../node_modules/snabbdom-selector/lib/es6/query.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySelector = void 0;

var _treeSelector = require("tree-selector");

var _selectorParser = require("./selectorParser");

var _classNameFromVNode = require("./classNameFromVNode");

var _parentSymbol = _interopRequireDefault(require("./parent-symbol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  tag: function (vNode) {
    return (0, _selectorParser.selectorParser)(vNode).tagName;
  },
  className: function (vNode) {
    return (0, _classNameFromVNode.classNameFromVNode)(vNode);
  },
  id: function (vNode) {
    return (0, _selectorParser.selectorParser)(vNode).id || '';
  },
  children: function (vNode) {
    return vNode.children || [];
  },
  parent: function (vNode) {
    return vNode.data[_parentSymbol.default] || vNode;
  },
  contents: function (vNode) {
    return vNode.text || '';
  },
  attr: function (vNode, attr) {
    if (vNode.data) {
      var _a = vNode.data,
          _b = _a.attrs,
          attrs = _b === void 0 ? {} : _b,
          _c = _a.props,
          props = _c === void 0 ? {} : _c,
          _d = _a.dataset,
          dataset = _d === void 0 ? {} : _d;

      if (attrs[attr]) {
        return attrs[attr];
      }

      if (props[attr]) {
        return props[attr];
      }

      if (attr.indexOf('data-') === 0 && dataset[attr.slice(5)]) {
        return dataset[attr.slice(5)];
      }
    }
  }
};
var matches = (0, _treeSelector.createMatches)(options);

function customMatches(sel, vnode) {
  var data = vnode.data;
  var selector = matches.bind(null, sel);

  if (data && data.fn) {
    var n = void 0;

    if (Array.isArray(data.args)) {
      n = data.fn.apply(null, data.args);
    } else if (data.args) {
      n = data.fn.call(null, data.args);
    } else {
      n = data.fn();
    }

    return selector(n) ? n : false;
  }

  return selector(vnode);
}

var querySelector = (0, _treeSelector.createQuerySelector)(options, customMatches);
exports.querySelector = querySelector;
},{"tree-selector":"../node_modules/tree-selector/lib/es6/index.js","./selectorParser":"../node_modules/snabbdom-selector/lib/es6/selectorParser.js","./classNameFromVNode":"../node_modules/snabbdom-selector/lib/es6/classNameFromVNode.js","./parent-symbol":"../node_modules/snabbdom-selector/lib/es6/parent-symbol.js"}],"../node_modules/snabbdom-selector/lib/es6/findMatches.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findMatches = findMatches;

var _query = require("./query");

var _parentSymbol = _interopRequireDefault(require("./parent-symbol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findMatches(cssSelector, vNode) {
  if (!vNode) {
    return [];
  }

  traverseVNode(vNode, addParent); // add mapping to the parent selectorParser

  return (0, _query.querySelector)(cssSelector, vNode);
}

function traverseVNode(vNode, f) {
  function recurse(currentNode, isParent, parentVNode) {
    var length = currentNode.children && currentNode.children.length || 0;

    for (var i = 0; i < length; ++i) {
      var children = currentNode.children;

      if (children && children[i] && typeof children[i] !== 'string') {
        var child = children[i];
        recurse(child, false, currentNode);
      }
    }

    f(currentNode, isParent, isParent ? void 0 : parentVNode);
  }

  recurse(vNode, true);
}

function addParent(vNode, isParent, parent) {
  if (isParent) {
    return void 0;
  }

  if (!vNode.data) {
    vNode.data = {};
  }

  if (!vNode.data[_parentSymbol.default]) {
    Object.defineProperty(vNode.data, _parentSymbol.default, {
      value: parent
    });
  }
}
},{"./query":"../node_modules/snabbdom-selector/lib/es6/query.js","./parent-symbol":"../node_modules/snabbdom-selector/lib/es6/parent-symbol.js"}],"../node_modules/snabbdom-selector/lib/es6/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "selectorParser", {
  enumerable: true,
  get: function () {
    return _selectorParser.selectorParser;
  }
});
Object.defineProperty(exports, "classNameFromVNode", {
  enumerable: true,
  get: function () {
    return _classNameFromVNode.classNameFromVNode;
  }
});
exports.select = void 0;

var _curry = require("./curry2");

var _findMatches = require("./findMatches");

var _selectorParser = require("./selectorParser");

var _classNameFromVNode = require("./classNameFromVNode");

var select =
/*@__PURE__*/
(0, _curry.curry2)(_findMatches.findMatches);
exports.select = select;
},{"./curry2":"../node_modules/snabbdom-selector/lib/es6/curry2.js","./findMatches":"../node_modules/snabbdom-selector/lib/es6/findMatches.js","./selectorParser":"../node_modules/snabbdom-selector/lib/es6/selectorParser.js","./classNameFromVNode":"../node_modules/snabbdom-selector/lib/es6/classNameFromVNode.js"}],"../node_modules/@cycle/dom/lib/es6/VNodeWrapper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VNodeWrapper = void 0;

var _vnode = require("snabbdom/vnode");

var _h = require("snabbdom/h");

var _snabbdomSelector = require("snabbdom-selector");

var _utils = require("./utils");

var VNodeWrapper =
/** @class */
function () {
  function VNodeWrapper(rootElement) {
    this.rootElement = rootElement;
  }

  VNodeWrapper.prototype.call = function (vnode) {
    if ((0, _utils.isDocFrag)(this.rootElement)) {
      return this.wrapDocFrag(vnode === null ? [] : [vnode]);
    }

    if (vnode === null) {
      return this.wrap([]);
    }

    var _a = (0, _snabbdomSelector.selectorParser)(vnode),
        selTagName = _a.tagName,
        selId = _a.id;

    var vNodeClassName = (0, _snabbdomSelector.classNameFromVNode)(vnode);
    var vNodeData = vnode.data || {};
    var vNodeDataProps = vNodeData.props || {};
    var _b = vNodeDataProps.id,
        vNodeId = _b === void 0 ? selId : _b;
    var isVNodeAndRootElementIdentical = typeof vNodeId === 'string' && vNodeId.toUpperCase() === this.rootElement.id.toUpperCase() && selTagName.toUpperCase() === this.rootElement.tagName.toUpperCase() && vNodeClassName.toUpperCase() === this.rootElement.className.toUpperCase();

    if (isVNodeAndRootElementIdentical) {
      return vnode;
    }

    return this.wrap([vnode]);
  };

  VNodeWrapper.prototype.wrapDocFrag = function (children) {
    return (0, _vnode.vnode)('', {
      isolate: []
    }, children, undefined, this.rootElement);
  };

  VNodeWrapper.prototype.wrap = function (children) {
    var _a = this.rootElement,
        tagName = _a.tagName,
        id = _a.id,
        className = _a.className;
    var selId = id ? "#" + id : '';
    var selClass = className ? "." + className.split(" ").join(".") : '';
    var vnode = (0, _h.h)("" + tagName.toLowerCase() + selId + selClass, {}, children);
    vnode.data = vnode.data || {};
    vnode.data.isolate = vnode.data.isolate || [];
    return vnode;
  };

  return VNodeWrapper;
}();

exports.VNodeWrapper = VNodeWrapper;
},{"snabbdom/vnode":"../node_modules/snabbdom/vnode.js","snabbdom/h":"../node_modules/snabbdom/h.js","snabbdom-selector":"../node_modules/snabbdom-selector/lib/es6/index.js","./utils":"../node_modules/@cycle/dom/lib/es6/utils.js"}],"../node_modules/snabbdom/modules/class.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateClass(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? 'add' : 'remove'](name);
        }
    }
}
exports.classModule = { create: updateClass, update: updateClass };
exports.default = exports.classModule;

},{}],"../node_modules/snabbdom/modules/props.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    if (oldProps === props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
exports.default = exports.propsModule;

},{}],"../node_modules/snabbdom/modules/attributes.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var colonChar = 58;
var xChar = 120;
function updateAttrs(oldVnode, vnode) {
    var key, elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs;
    if (!oldAttrs && !attrs)
        return;
    if (oldAttrs === attrs)
        return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        var cur = attrs[key];
        var old = oldAttrs[key];
        if (old !== cur) {
            if (cur === true) {
                elm.setAttribute(key, "");
            }
            else if (cur === false) {
                elm.removeAttribute(key);
            }
            else {
                if (key.charCodeAt(0) !== xChar) {
                    elm.setAttribute(key, cur);
                }
                else if (key.charCodeAt(3) === colonChar) {
                    // Assume xml namespace
                    elm.setAttributeNS(xmlNS, key, cur);
                }
                else if (key.charCodeAt(5) === colonChar) {
                    // Assume xlink namespace
                    elm.setAttributeNS(xlinkNS, key, cur);
                }
                else {
                    elm.setAttribute(key, cur);
                }
            }
        }
    }
    // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
exports.attributesModule = { create: updateAttrs, update: updateAttrs };
exports.default = exports.attributesModule;

},{}],"../node_modules/snabbdom/modules/style.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bindig `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.
var raf = (typeof window !== 'undefined' && (window.requestAnimationFrame).bind(window)) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
var reflowForced = false;
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed' && style.delayed) {
            for (var name2 in style.delayed) {
                cur = style.delayed[name2];
                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
                    setNextFrame(elm.style, name2, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    if (!reflowForced) {
        vnode.elm.offsetLeft;
        reflowForced = true;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
function forceReflow() {
    reflowForced = false;
}
exports.styleModule = {
    pre: forceReflow,
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
exports.default = exports.styleModule;

},{}],"../node_modules/snabbdom/modules/dataset.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CAPS_REGEX = /[A-Z]/g;
function updateDataset(oldVnode, vnode) {
    var elm = vnode.elm, oldDataset = oldVnode.data.dataset, dataset = vnode.data.dataset, key;
    if (!oldDataset && !dataset)
        return;
    if (oldDataset === dataset)
        return;
    oldDataset = oldDataset || {};
    dataset = dataset || {};
    var d = elm.dataset;
    for (key in oldDataset) {
        if (!dataset[key]) {
            if (d) {
                if (key in d) {
                    delete d[key];
                }
            }
            else {
                elm.removeAttribute('data-' + key.replace(CAPS_REGEX, '-$&').toLowerCase());
            }
        }
    }
    for (key in dataset) {
        if (oldDataset[key] !== dataset[key]) {
            if (d) {
                d[key] = dataset[key];
            }
            else {
                elm.setAttribute('data-' + key.replace(CAPS_REGEX, '-$&').toLowerCase(), dataset[key]);
            }
        }
    }
}
exports.datasetModule = { create: updateDataset, update: updateDataset };
exports.default = exports.datasetModule;

},{}],"../node_modules/@cycle/dom/lib/es6/modules.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ClassModule", {
  enumerable: true,
  get: function () {
    return _class.default;
  }
});
Object.defineProperty(exports, "PropsModule", {
  enumerable: true,
  get: function () {
    return _props.default;
  }
});
Object.defineProperty(exports, "AttrsModule", {
  enumerable: true,
  get: function () {
    return _attributes.default;
  }
});
Object.defineProperty(exports, "StyleModule", {
  enumerable: true,
  get: function () {
    return _style.default;
  }
});
Object.defineProperty(exports, "DatasetModule", {
  enumerable: true,
  get: function () {
    return _dataset.default;
  }
});
exports.default = void 0;

var _class = _interopRequireDefault(require("snabbdom/modules/class"));

var _props = _interopRequireDefault(require("snabbdom/modules/props"));

var _attributes = _interopRequireDefault(require("snabbdom/modules/attributes"));

var _style = _interopRequireDefault(require("snabbdom/modules/style"));

var _dataset = _interopRequireDefault(require("snabbdom/modules/dataset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = [_style.default, _class.default, _props.default, _attributes.default, _dataset.default];
var _default = modules;
exports.default = _default;
},{"snabbdom/modules/class":"../node_modules/snabbdom/modules/class.js","snabbdom/modules/props":"../node_modules/snabbdom/modules/props.js","snabbdom/modules/attributes":"../node_modules/snabbdom/modules/attributes.js","snabbdom/modules/style":"../node_modules/snabbdom/modules/style.js","snabbdom/modules/dataset":"../node_modules/snabbdom/modules/dataset.js"}],"../node_modules/@cycle/dom/lib/es6/SymbolTree.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var SymbolTree =
/** @class */
function () {
  function SymbolTree(mapper) {
    this.mapper = mapper;
    this.tree = [undefined, {}];
  }

  SymbolTree.prototype.set = function (path, element, max) {
    var curr = this.tree;

    var _max = max !== undefined ? max : path.length;

    for (var i = 0; i < _max; i++) {
      var n = this.mapper(path[i]);
      var child = curr[1][n];

      if (!child) {
        child = [undefined, {}];
        curr[1][n] = child;
      }

      curr = child;
    }

    curr[0] = element;
  };

  SymbolTree.prototype.getDefault = function (path, mkDefaultElement, max) {
    return this.get(path, mkDefaultElement, max);
  };
  /**
   * Returns the payload of the path
   * If a default element creator is given, it will insert it at the path
   */


  SymbolTree.prototype.get = function (path, mkDefaultElement, max) {
    var curr = this.tree;

    var _max = max !== undefined ? max : path.length;

    for (var i = 0; i < _max; i++) {
      var n = this.mapper(path[i]);
      var child = curr[1][n];

      if (!child) {
        if (mkDefaultElement) {
          child = [undefined, {}];
          curr[1][n] = child;
        } else {
          return undefined;
        }
      }

      curr = child;
    }

    if (mkDefaultElement && !curr[0]) {
      curr[0] = mkDefaultElement();
    }

    return curr[0];
  };

  SymbolTree.prototype.delete = function (path) {
    var curr = this.tree;

    for (var i = 0; i < path.length - 1; i++) {
      var child = curr[1][this.mapper(path[i])];

      if (!child) {
        return;
      }

      curr = child;
    }

    delete curr[1][this.mapper(path[path.length - 1])];
  };

  return SymbolTree;
}();

var _default = SymbolTree;
exports.default = _default;
},{}],"../node_modules/@cycle/dom/lib/es6/IsolateModule.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IsolateModule = void 0;

var _utils = require("./utils");

var _SymbolTree = _interopRequireDefault(require("./SymbolTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IsolateModule =
/** @class */
function () {
  function IsolateModule() {
    this.namespaceTree = new _SymbolTree.default(function (x) {
      return x.scope;
    });
    this.namespaceByElement = new Map();
    this.vnodesBeingRemoved = [];
  }

  IsolateModule.prototype.setEventDelegator = function (del) {
    this.eventDelegator = del;
  };

  IsolateModule.prototype.insertElement = function (namespace, el) {
    this.namespaceByElement.set(el, namespace);
    this.namespaceTree.set(namespace, el);
  };

  IsolateModule.prototype.removeElement = function (elm) {
    this.namespaceByElement.delete(elm);
    var namespace = this.getNamespace(elm);

    if (namespace) {
      this.namespaceTree.delete(namespace);
    }
  };

  IsolateModule.prototype.getElement = function (namespace, max) {
    return this.namespaceTree.get(namespace, undefined, max);
  };

  IsolateModule.prototype.getRootElement = function (elm) {
    if (this.namespaceByElement.has(elm)) {
      return elm;
    } //TODO: Add quick-lru or similar as additional O(1) cache


    var curr = elm;

    while (!this.namespaceByElement.has(curr)) {
      curr = curr.parentNode;

      if (!curr) {
        return undefined;
      } else if (curr.tagName === 'HTML') {
        throw new Error('No root element found, this should not happen at all');
      }
    }

    return curr;
  };

  IsolateModule.prototype.getNamespace = function (elm) {
    var rootElement = this.getRootElement(elm);

    if (!rootElement) {
      return undefined;
    }

    return this.namespaceByElement.get(rootElement);
  };

  IsolateModule.prototype.createModule = function () {
    var self = this;
    return {
      create: function (emptyVNode, vNode) {
        var elm = vNode.elm,
            _a = vNode.data,
            data = _a === void 0 ? {} : _a;
        var namespace = data.isolate;

        if (Array.isArray(namespace)) {
          self.insertElement(namespace, elm);
        }
      },
      update: function (oldVNode, vNode) {
        var oldElm = oldVNode.elm,
            _a = oldVNode.data,
            oldData = _a === void 0 ? {} : _a;
        var elm = vNode.elm,
            _b = vNode.data,
            data = _b === void 0 ? {} : _b;
        var oldNamespace = oldData.isolate;
        var namespace = data.isolate;

        if (!(0, _utils.isEqualNamespace)(oldNamespace, namespace)) {
          if (Array.isArray(oldNamespace)) {
            self.removeElement(oldElm);
          }
        }

        if (Array.isArray(namespace)) {
          self.insertElement(namespace, elm);
        }
      },
      destroy: function (vNode) {
        self.vnodesBeingRemoved.push(vNode);
      },
      remove: function (vNode, cb) {
        self.vnodesBeingRemoved.push(vNode);
        cb();
      },
      post: function () {
        var vnodesBeingRemoved = self.vnodesBeingRemoved;

        for (var i = vnodesBeingRemoved.length - 1; i >= 0; i--) {
          var vnode = vnodesBeingRemoved[i];
          var namespace = vnode.data !== undefined ? vnode.data.isolation : undefined;

          if (namespace !== undefined) {
            self.removeElement(namespace);
          }

          self.eventDelegator.removeElement(vnode.elm, namespace);
        }

        self.vnodesBeingRemoved = [];
      }
    };
  };

  return IsolateModule;
}();

exports.IsolateModule = IsolateModule;
},{"./utils":"../node_modules/@cycle/dom/lib/es6/utils.js","./SymbolTree":"../node_modules/@cycle/dom/lib/es6/SymbolTree.js"}],"../node_modules/@cycle/dom/lib/es6/RemovalSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var RemovalSet =
/** @class */
function () {
  function RemovalSet() {
    this.toDelete = [];
    this.toDeleteSize = 0;
    this._set = new Set();
  }

  RemovalSet.prototype.add = function (t) {
    this._set.add(t);
  };

  RemovalSet.prototype.forEach = function (f) {
    this._set.forEach(f);

    this.flush();
  };

  RemovalSet.prototype.delete = function (t) {
    if (this.toDelete.length === this.toDeleteSize) {
      this.toDelete.push(t);
    } else {
      this.toDelete[this.toDeleteSize] = t;
    }

    this.toDeleteSize++;
  };

  RemovalSet.prototype.flush = function () {
    for (var i = 0; i < this.toDelete.length; i++) {
      if (i < this.toDeleteSize) {
        this._set.delete(this.toDelete[i]);
      }

      this.toDelete[i] = undefined;
    }

    this.toDeleteSize = 0;
  };

  return RemovalSet;
}();

var _default = RemovalSet;
exports.default = _default;
},{}],"../node_modules/@cycle/dom/lib/es6/PriorityQueue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var PriorityQueue =
/** @class */
function () {
  function PriorityQueue() {
    this.arr = [];
    this.prios = [];
  }

  PriorityQueue.prototype.add = function (t, prio) {
    for (var i = 0; i < this.arr.length; i++) {
      if (this.prios[i] < prio) {
        this.arr.splice(i, 0, t);
        this.prios.splice(i, 0, prio);
        return;
      }
    }

    this.arr.push(t);
    this.prios.push(prio);
  };

  PriorityQueue.prototype.forEach = function (f) {
    for (var i = 0; i < this.arr.length; i++) {
      f(this.arr[i], i, this.arr);
    }
  };

  PriorityQueue.prototype.delete = function (t) {
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === t) {
        this.arr.splice(i, 1);
        this.prios.splice(i, 1);
        return;
      }
    }
  };

  return PriorityQueue;
}();

var _default = PriorityQueue;
exports.default = _default;
},{}],"../node_modules/@cycle/dom/lib/es6/EventDelegator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventDelegator = exports.eventTypesThatDontBubble = void 0;

var _xstream = _interopRequireDefault(require("xstream"));

var _ScopeChecker = require("./ScopeChecker");

var _utils = require("./utils");

var _ElementFinder = require("./ElementFinder");

var _SymbolTree = _interopRequireDefault(require("./SymbolTree"));

var _RemovalSet = _interopRequireDefault(require("./RemovalSet"));

var _PriorityQueue = _interopRequireDefault(require("./PriorityQueue"));

var _fromEvent = require("./fromEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var eventTypesThatDontBubble = ["blur", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "focus", "load", "loadeddata", "loadedmetadata", "mouseenter", "mouseleave", "pause", "play", "playing", "ratechange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeupdate", "unload", "volumechange", "waiting"];
/**
 * Manages "Event delegation", by connecting an origin with multiple
 * destinations.
 *
 * Attaches a DOM event listener to the DOM element called the "origin",
 * and delegates events to "destinations", which are subjects as outputs
 * for the DOMSource. Simulates bubbling or capturing, with regards to
 * isolation boundaries too.
 */

exports.eventTypesThatDontBubble = eventTypesThatDontBubble;

var EventDelegator =
/** @class */
function () {
  function EventDelegator(rootElement$, isolateModule) {
    var _this = this;

    this.rootElement$ = rootElement$;
    this.isolateModule = isolateModule;
    this.virtualListeners = new _SymbolTree.default(function (x) {
      return x.scope;
    });
    this.nonBubblingListenersToAdd = new _RemovalSet.default();
    this.virtualNonBubblingListener = [];
    this.isolateModule.setEventDelegator(this);
    this.domListeners = new Map();
    this.domListenersToAdd = new Map();
    this.nonBubblingListeners = new Map();
    rootElement$.addListener({
      next: function (el) {
        if (_this.origin !== el) {
          _this.origin = el;

          _this.resetEventListeners();

          _this.domListenersToAdd.forEach(function (passive, type) {
            return _this.setupDOMListener(type, passive);
          });

          _this.domListenersToAdd.clear();
        }

        _this.resetNonBubblingListeners();

        _this.nonBubblingListenersToAdd.forEach(function (arr) {
          _this.setupNonBubblingListener(arr);
        });
      }
    });
  }

  EventDelegator.prototype.addEventListener = function (eventType, namespace, options, bubbles) {
    var subject = _xstream.default.never();

    var scopeChecker = new _ScopeChecker.ScopeChecker(namespace, this.isolateModule);
    var dest = this.insertListener(subject, scopeChecker, eventType, options);
    var shouldBubble = bubbles === undefined ? eventTypesThatDontBubble.indexOf(eventType) === -1 : bubbles;

    if (shouldBubble) {
      if (!this.domListeners.has(eventType)) {
        this.setupDOMListener(eventType, !!options.passive);
      }
    } else {
      var finder = new _ElementFinder.ElementFinder(namespace, this.isolateModule);
      this.setupNonBubblingListener([eventType, finder, dest]);
    }

    return subject;
  };

  EventDelegator.prototype.removeElement = function (element, namespace) {
    if (namespace !== undefined) {
      this.virtualListeners.delete(namespace);
    }

    var toRemove = [];
    this.nonBubblingListeners.forEach(function (map, type) {
      if (map.has(element)) {
        toRemove.push([type, element]);
      }
    });

    for (var i = 0; i < toRemove.length; i++) {
      var map = this.nonBubblingListeners.get(toRemove[i][0]);

      if (!map) {
        continue;
      }

      map.delete(toRemove[i][1]);

      if (map.size === 0) {
        this.nonBubblingListeners.delete(toRemove[i][0]);
      } else {
        this.nonBubblingListeners.set(toRemove[i][0], map);
      }
    }
  };

  EventDelegator.prototype.insertListener = function (subject, scopeChecker, eventType, options) {
    var relevantSets = [];
    var n = scopeChecker._namespace;
    var max = n.length;

    do {
      relevantSets.push(this.getVirtualListeners(eventType, n, true, max));
      max--;
    } while (max >= 0 && n[max].type !== 'total');

    var destination = __assign({}, options, {
      scopeChecker: scopeChecker,
      subject: subject,
      bubbles: !!options.bubbles,
      useCapture: !!options.useCapture,
      passive: !!options.passive
    });

    for (var i = 0; i < relevantSets.length; i++) {
      relevantSets[i].add(destination, n.length);
    }

    return destination;
  };
  /**
   * Returns a set of all virtual listeners in the scope of the namespace
   * Set `exact` to true to treat sibiling isolated scopes as total scopes
   */


  EventDelegator.prototype.getVirtualListeners = function (eventType, namespace, exact, max) {
    if (exact === void 0) {
      exact = false;
    }

    var _max = max !== undefined ? max : namespace.length;

    if (!exact) {
      for (var i = _max - 1; i >= 0; i--) {
        if (namespace[i].type === 'total') {
          _max = i + 1;
          break;
        }

        _max = i;
      }
    }

    var map = this.virtualListeners.getDefault(namespace, function () {
      return new Map();
    }, _max);

    if (!map.has(eventType)) {
      map.set(eventType, new _PriorityQueue.default());
    }

    return map.get(eventType);
  };

  EventDelegator.prototype.setupDOMListener = function (eventType, passive) {
    var _this = this;

    if (this.origin) {
      var sub = (0, _fromEvent.fromEvent)(this.origin, eventType, false, false, passive).subscribe({
        next: function (event) {
          return _this.onEvent(eventType, event, passive);
        },
        error: function () {},
        complete: function () {}
      });
      this.domListeners.set(eventType, {
        sub: sub,
        passive: passive
      });
    } else {
      this.domListenersToAdd.set(eventType, passive);
    }
  };

  EventDelegator.prototype.setupNonBubblingListener = function (input) {
    var _this = this;

    var eventType = input[0],
        elementFinder = input[1],
        destination = input[2];

    if (!this.origin) {
      this.nonBubblingListenersToAdd.add(input);
      return;
    }

    var element = elementFinder.call()[0];

    if (element) {
      this.nonBubblingListenersToAdd.delete(input);
      var sub = (0, _fromEvent.fromEvent)(element, eventType, false, false, destination.passive).subscribe({
        next: function (ev) {
          return _this.onEvent(eventType, ev, !!destination.passive, false);
        },
        error: function () {},
        complete: function () {}
      });

      if (!this.nonBubblingListeners.has(eventType)) {
        this.nonBubblingListeners.set(eventType, new Map());
      }

      var map = this.nonBubblingListeners.get(eventType);

      if (!map) {
        return;
      }

      map.set(element, {
        sub: sub,
        destination: destination
      });
    } else {
      this.nonBubblingListenersToAdd.add(input);
    }
  };

  EventDelegator.prototype.resetEventListeners = function () {
    var iter = this.domListeners.entries();
    var curr = iter.next();

    while (!curr.done) {
      var _a = curr.value,
          type = _a[0],
          _b = _a[1],
          sub = _b.sub,
          passive = _b.passive;
      sub.unsubscribe();
      this.setupDOMListener(type, passive);
      curr = iter.next();
    }
  };

  EventDelegator.prototype.resetNonBubblingListeners = function () {
    var _this = this;

    var newMap = new Map();
    var insert = (0, _utils.makeInsert)(newMap);
    this.nonBubblingListeners.forEach(function (map, type) {
      map.forEach(function (value, elm) {
        if (!document.body.contains(elm)) {
          var sub = value.sub,
              destination_1 = value.destination;

          if (sub) {
            sub.unsubscribe();
          }

          var elementFinder = new _ElementFinder.ElementFinder(destination_1.scopeChecker.namespace, _this.isolateModule);
          var newElm = elementFinder.call()[0];
          var newSub = (0, _fromEvent.fromEvent)(newElm, type, false, false, destination_1.passive).subscribe({
            next: function (event) {
              return _this.onEvent(type, event, !!destination_1.passive, false);
            },
            error: function () {},
            complete: function () {}
          });
          insert(type, newElm, {
            sub: newSub,
            destination: destination_1
          });
        } else {
          insert(type, elm, value);
        }
      });
      _this.nonBubblingListeners = newMap;
    });
  };

  EventDelegator.prototype.putNonBubblingListener = function (eventType, elm, useCapture, passive) {
    var map = this.nonBubblingListeners.get(eventType);

    if (!map) {
      return;
    }

    var listener = map.get(elm);

    if (listener && listener.destination.passive === passive && listener.destination.useCapture === useCapture) {
      this.virtualNonBubblingListener[0] = listener.destination;
    }
  };

  EventDelegator.prototype.onEvent = function (eventType, event, passive, bubbles) {
    if (bubbles === void 0) {
      bubbles = true;
    }

    var cycleEvent = this.patchEvent(event);
    var rootElement = this.isolateModule.getRootElement(event.target);

    if (bubbles) {
      var namespace = this.isolateModule.getNamespace(event.target);

      if (!namespace) {
        return;
      }

      var listeners = this.getVirtualListeners(eventType, namespace);
      this.bubble(eventType, event.target, rootElement, cycleEvent, listeners, namespace, namespace.length - 1, true, passive);
      this.bubble(eventType, event.target, rootElement, cycleEvent, listeners, namespace, namespace.length - 1, false, passive);
    } else {
      this.putNonBubblingListener(eventType, event.target, true, passive);
      this.doBubbleStep(eventType, event.target, rootElement, cycleEvent, this.virtualNonBubblingListener, true, passive);
      this.putNonBubblingListener(eventType, event.target, false, passive);
      this.doBubbleStep(eventType, event.target, rootElement, cycleEvent, this.virtualNonBubblingListener, false, passive);
      event.stopPropagation(); //fix reset event (spec'ed as non-bubbling, but bubbles in reality
    }
  };

  EventDelegator.prototype.bubble = function (eventType, elm, rootElement, event, listeners, namespace, index, useCapture, passive) {
    if (!useCapture && !event.propagationHasBeenStopped) {
      this.doBubbleStep(eventType, elm, rootElement, event, listeners, useCapture, passive);
    }

    var newRoot = rootElement;
    var newIndex = index;

    if (elm === rootElement) {
      if (index >= 0 && namespace[index].type === 'sibling') {
        newRoot = this.isolateModule.getElement(namespace, index);
        newIndex--;
      } else {
        return;
      }
    }

    if (elm.parentNode && newRoot) {
      this.bubble(eventType, elm.parentNode, newRoot, event, listeners, namespace, newIndex, useCapture, passive);
    }

    if (useCapture && !event.propagationHasBeenStopped) {
      this.doBubbleStep(eventType, elm, rootElement, event, listeners, useCapture, passive);
    }
  };

  EventDelegator.prototype.doBubbleStep = function (eventType, elm, rootElement, event, listeners, useCapture, passive) {
    if (!rootElement) {
      return;
    }

    this.mutateEventCurrentTarget(event, elm);
    listeners.forEach(function (dest) {
      if (dest.passive === passive && dest.useCapture === useCapture) {
        var sel = (0, _utils.getSelectors)(dest.scopeChecker.namespace);

        if (!event.propagationHasBeenStopped && dest.scopeChecker.isDirectlyInScope(elm) && (sel !== '' && elm.matches(sel) || sel === '' && elm === rootElement)) {
          (0, _fromEvent.preventDefaultConditional)(event, dest.preventDefault);
          dest.subject.shamefullySendNext(event);
        }
      }
    });
  };

  EventDelegator.prototype.patchEvent = function (event) {
    var pEvent = event;
    pEvent.propagationHasBeenStopped = false;
    var oldStopPropagation = pEvent.stopPropagation;

    pEvent.stopPropagation = function stopPropagation() {
      oldStopPropagation.call(this);
      this.propagationHasBeenStopped = true;
    };

    return pEvent;
  };

  EventDelegator.prototype.mutateEventCurrentTarget = function (event, currentTargetElement) {
    try {
      Object.defineProperty(event, "currentTarget", {
        value: currentTargetElement,
        configurable: true
      });
    } catch (err) {
      console.log("please use event.ownerTarget");
    }

    event.ownerTarget = currentTargetElement;
  };

  return EventDelegator;
}();

exports.EventDelegator = EventDelegator;
},{"xstream":"../node_modules/xstream/index.js","./ScopeChecker":"../node_modules/@cycle/dom/lib/es6/ScopeChecker.js","./utils":"../node_modules/@cycle/dom/lib/es6/utils.js","./ElementFinder":"../node_modules/@cycle/dom/lib/es6/ElementFinder.js","./SymbolTree":"../node_modules/@cycle/dom/lib/es6/SymbolTree.js","./RemovalSet":"../node_modules/@cycle/dom/lib/es6/RemovalSet.js","./PriorityQueue":"../node_modules/@cycle/dom/lib/es6/PriorityQueue.js","./fromEvent":"../node_modules/@cycle/dom/lib/es6/fromEvent.js"}],"../node_modules/@cycle/dom/lib/es6/makeDOMDriver.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDOMDriver = makeDOMDriver;

var _snabbdom = require("snabbdom");

var _xstream = _interopRequireDefault(require("xstream"));

var _concat = _interopRequireDefault(require("xstream/extra/concat"));

var _sampleCombine = _interopRequireDefault(require("xstream/extra/sampleCombine"));

var _MainDOMSource = require("./MainDOMSource");

var _tovnode = require("snabbdom/tovnode");

var _VNodeWrapper = require("./VNodeWrapper");

var _utils = require("./utils");

var _modules = _interopRequireDefault(require("./modules"));

var _IsolateModule = require("./IsolateModule");

var _EventDelegator = require("./EventDelegator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeDOMDriverInputGuard(modules) {
  if (!Array.isArray(modules)) {
    throw new Error("Optional modules option must be an array for snabbdom modules");
  }
}

function domDriverInputGuard(view$) {
  if (!view$ || typeof view$.addListener !== "function" || typeof view$.fold !== "function") {
    throw new Error("The DOM driver function expects as input a Stream of " + "virtual DOM elements");
  }
}

function dropCompletion(input) {
  return _xstream.default.merge(input, _xstream.default.never());
}

function unwrapElementFromVNode(vnode) {
  return vnode.elm;
}

function reportSnabbdomError(err) {
  (console.error || console.log)(err);
}

function makeDOMReady$() {
  return _xstream.default.create({
    start: function (lis) {
      if (document.readyState === 'loading') {
        document.addEventListener('readystatechange', function () {
          var state = document.readyState;

          if (state === 'interactive' || state === 'complete') {
            lis.next(null);
            lis.complete();
          }
        });
      } else {
        lis.next(null);
        lis.complete();
      }
    },
    stop: function () {}
  });
}

function addRootScope(vnode) {
  vnode.data = vnode.data || {};
  vnode.data.isolate = [];
  return vnode;
}

function makeDOMDriver(container, options) {
  if (!options) {
    options = {};
  }

  (0, _utils.checkValidContainer)(container);
  var modules = options.modules || _modules.default;
  makeDOMDriverInputGuard(modules);
  var isolateModule = new _IsolateModule.IsolateModule();
  var patch = (0, _snabbdom.init)([isolateModule.createModule()].concat(modules));
  var domReady$ = makeDOMReady$();
  var vnodeWrapper;
  var mutationObserver;

  var mutationConfirmed$ = _xstream.default.create({
    start: function (listener) {
      mutationObserver = new MutationObserver(function () {
        return listener.next(null);
      });
    },
    stop: function () {
      mutationObserver.disconnect();
    }
  });

  function DOMDriver(vnode$, name) {
    if (name === void 0) {
      name = 'DOM';
    }

    domDriverInputGuard(vnode$);

    var sanitation$ = _xstream.default.create();

    var firstRoot$ = domReady$.map(function () {
      var firstRoot = (0, _utils.getValidNode)(container) || document.body;
      vnodeWrapper = new _VNodeWrapper.VNodeWrapper(firstRoot);
      return firstRoot;
    }); // We need to subscribe to the sink (i.e. vnode$) synchronously inside this
    // driver, and not later in the map().flatten() because this sink is in
    // reality a SinkProxy from @cycle/run, and we don't want to miss the first
    // emission when the main() is connected to the drivers.
    // Read more in issue #739.

    var rememberedVNode$ = vnode$.remember();
    rememberedVNode$.addListener({}); // The mutation observer internal to mutationConfirmed$ should
    // exist before elementAfterPatch$ calls mutationObserver.observe()

    mutationConfirmed$.addListener({});
    var elementAfterPatch$ = firstRoot$.map(function (firstRoot) {
      return _xstream.default.merge(rememberedVNode$.endWhen(sanitation$), sanitation$).map(function (vnode) {
        return vnodeWrapper.call(vnode);
      }).startWith(addRootScope((0, _tovnode.toVNode)(firstRoot))).fold(patch, (0, _tovnode.toVNode)(firstRoot)).drop(1).map(unwrapElementFromVNode).startWith(firstRoot).map(function (el) {
        mutationObserver.observe(el, {
          childList: true,
          attributes: true,
          characterData: true,
          subtree: true,
          attributeOldValue: true,
          characterDataOldValue: true
        });
        return el;
      }).compose(dropCompletion);
    } // don't complete this stream
    ).flatten();
    var rootElement$ = (0, _concat.default)(domReady$, mutationConfirmed$).endWhen(sanitation$).compose((0, _sampleCombine.default)(elementAfterPatch$)).map(function (arr) {
      return arr[1];
    }).remember(); // Start the snabbdom patching, over time

    rootElement$.addListener({
      error: reportSnabbdomError
    });
    var delegator = new _EventDelegator.EventDelegator(rootElement$, isolateModule);
    return new _MainDOMSource.MainDOMSource(rootElement$, sanitation$, [], isolateModule, delegator, name);
  }

  return DOMDriver;
}
},{"snabbdom":"../node_modules/snabbdom/es/snabbdom.js","xstream":"../node_modules/xstream/index.js","xstream/extra/concat":"../node_modules/xstream/extra/concat.js","xstream/extra/sampleCombine":"../node_modules/xstream/extra/sampleCombine.js","./MainDOMSource":"../node_modules/@cycle/dom/lib/es6/MainDOMSource.js","snabbdom/tovnode":"../node_modules/snabbdom/tovnode.js","./VNodeWrapper":"../node_modules/@cycle/dom/lib/es6/VNodeWrapper.js","./utils":"../node_modules/@cycle/dom/lib/es6/utils.js","./modules":"../node_modules/@cycle/dom/lib/es6/modules.js","./IsolateModule":"../node_modules/@cycle/dom/lib/es6/IsolateModule.js","./EventDelegator":"../node_modules/@cycle/dom/lib/es6/EventDelegator.js"}],"../node_modules/@cycle/dom/lib/es6/mockDOMSource.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockDOMSource = mockDOMSource;
exports.MockedDOMSource = void 0;

var _xstream = _interopRequireDefault(require("xstream"));

var _adapt = require("@cycle/run/lib/adapt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCOPE_PREFIX = '___';

var MockedDOMSource =
/** @class */
function () {
  function MockedDOMSource(_mockConfig) {
    this._mockConfig = _mockConfig;

    if (_mockConfig.elements) {
      this._elements = _mockConfig.elements;
    } else {
      this._elements = (0, _adapt.adapt)(_xstream.default.empty());
    }
  }

  MockedDOMSource.prototype.elements = function () {
    var out = this._elements;
    out._isCycleSource = 'MockedDOM';
    return out;
  };

  MockedDOMSource.prototype.element = function () {
    var output$ = this.elements().filter(function (arr) {
      return arr.length > 0;
    }).map(function (arr) {
      return arr[0];
    }).remember();
    var out = (0, _adapt.adapt)(output$);
    out._isCycleSource = 'MockedDOM';
    return out;
  };

  MockedDOMSource.prototype.events = function (eventType, options, bubbles) {
    var streamForEventType = this._mockConfig[eventType];
    var out = (0, _adapt.adapt)(streamForEventType || _xstream.default.empty());
    out._isCycleSource = 'MockedDOM';
    return out;
  };

  MockedDOMSource.prototype.select = function (selector) {
    var mockConfigForSelector = this._mockConfig[selector] || {};
    return new MockedDOMSource(mockConfigForSelector);
  };

  MockedDOMSource.prototype.isolateSource = function (source, scope) {
    return source.select('.' + SCOPE_PREFIX + scope);
  };

  MockedDOMSource.prototype.isolateSink = function (sink, scope) {
    return (0, _adapt.adapt)(_xstream.default.fromObservable(sink).map(function (vnode) {
      if (vnode.sel && vnode.sel.indexOf(SCOPE_PREFIX + scope) !== -1) {
        return vnode;
      } else {
        vnode.sel += "." + SCOPE_PREFIX + scope;
        return vnode;
      }
    }));
  };

  return MockedDOMSource;
}();

exports.MockedDOMSource = MockedDOMSource;

function mockDOMSource(mockConfig) {
  return new MockedDOMSource(mockConfig);
}
},{"xstream":"../node_modules/xstream/index.js","@cycle/run/lib/adapt":"../node_modules/@cycle/run/lib/adapt.js"}],"../node_modules/@cycle/dom/lib/es6/hyperscript-helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _h = require("snabbdom/h");

// tslint:disable:max-file-line-count
function isValidString(param) {
  return typeof param === 'string' && param.length > 0;
}

function isSelector(param) {
  return isValidString(param) && (param[0] === '.' || param[0] === '#');
}

function createTagFunction(tagName) {
  return function hyperscript(a, b, c) {
    var hasA = typeof a !== 'undefined';
    var hasB = typeof b !== 'undefined';
    var hasC = typeof c !== 'undefined';

    if (isSelector(a)) {
      if (hasB && hasC) {
        return (0, _h.h)(tagName + a, b, c);
      } else if (hasB) {
        return (0, _h.h)(tagName + a, b);
      } else {
        return (0, _h.h)(tagName + a, {});
      }
    } else if (hasC) {
      return (0, _h.h)(tagName + a, b, c);
    } else if (hasB) {
      return (0, _h.h)(tagName, a, b);
    } else if (hasA) {
      return (0, _h.h)(tagName, a);
    } else {
      return (0, _h.h)(tagName, {});
    }
  };
}

var SVG_TAG_NAMES = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'colorProfile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotlight', 'feTile', 'feTurbulence', 'filter', 'font', 'fontFace', 'fontFaceFormat', 'fontFaceName', 'fontFaceSrc', 'fontFaceUri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missingGlyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];
var svg = createTagFunction('svg');
SVG_TAG_NAMES.forEach(function (tag) {
  svg[tag] = createTagFunction(tag);
});
var TAG_NAMES = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'u', 'ul', 'video'];
var exported = {
  SVG_TAG_NAMES: SVG_TAG_NAMES,
  TAG_NAMES: TAG_NAMES,
  svg: svg,
  isSelector: isSelector,
  createTagFunction: createTagFunction
};
TAG_NAMES.forEach(function (n) {
  exported[n] = createTagFunction(n);
});
var _default = exported;
exports.default = _default;
},{"snabbdom/h":"../node_modules/snabbdom/h.js"}],"../node_modules/@cycle/dom/lib/es6/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "thunk", {
  enumerable: true,
  get: function () {
    return _thunk.thunk;
  }
});
Object.defineProperty(exports, "MainDOMSource", {
  enumerable: true,
  get: function () {
    return _MainDOMSource.MainDOMSource;
  }
});
Object.defineProperty(exports, "makeDOMDriver", {
  enumerable: true,
  get: function () {
    return _makeDOMDriver.makeDOMDriver;
  }
});
Object.defineProperty(exports, "mockDOMSource", {
  enumerable: true,
  get: function () {
    return _mockDOMSource.mockDOMSource;
  }
});
Object.defineProperty(exports, "MockedDOMSource", {
  enumerable: true,
  get: function () {
    return _mockDOMSource.MockedDOMSource;
  }
});
Object.defineProperty(exports, "h", {
  enumerable: true,
  get: function () {
    return _h.h;
  }
});
exports.ul = exports.u = exports.tr = exports.title = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.td = exports.tbody = exports.table = exports.sup = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.param = exports.p = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meta = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.figcaption = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dir = exports.dfn = exports.del = exports.dd = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.svg = void 0;
exports.video = void 0;

var _thunk = require("./thunk");

var _MainDOMSource = require("./MainDOMSource");

var _makeDOMDriver = require("./makeDOMDriver");

var _mockDOMSource = require("./mockDOMSource");

var _h = require("snabbdom/h");

var _hyperscriptHelpers = _interopRequireDefault(require("./hyperscript-helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A factory for the DOM driver function.
 *
 * Takes a `container` to define the target on the existing DOM which this
 * driver will operate on, and an `options` object as the second argument. The
 * input to this driver is a stream of virtual DOM objects, or in other words,
 * Snabbdom "VNode" objects. The output of this driver is a "DOMSource": a
 * collection of Observables queried with the methods `select()` and `events()`.
 *
 * **`DOMSource.select(selector)`** returns a new DOMSource with scope
 * restricted to the element(s) that matches the CSS `selector` given. To select
 * the page's `document`, use `.select('document')`. To select the container
 * element for this app, use `.select(':root')`.
 *
 * **`DOMSource.events(eventType, options)`** returns a stream of events of
 * `eventType` happening on the elements that match the current DOMSource. The
 * event object contains the `ownerTarget` property that behaves exactly like
 * `currentTarget`. The reason for this is that some browsers doesn't allow
 * `currentTarget` property to be mutated, hence a new property is created. The
 * returned stream is an *xstream* Stream if you use `@cycle/xstream-run` to run
 * your app with this driver, or it is an RxJS Observable if you use
 * `@cycle/rxjs-run`, and so forth.
 *
 * **options for DOMSource.events**
 *
 * The `options` parameter on `DOMSource.events(eventType, options)` is an
 * (optional) object with two optional fields: `useCapture` and
 * `preventDefault`.
 *
 * `useCapture` is by default `false`, except it is `true` for event types that
 * do not bubble. Read more here
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * about the `useCapture` and its purpose.
 *
 * `preventDefault` is by default `false`, and indicates to the driver whether
 * `event.preventDefault()` should be invoked. This option can be configured in
 * three ways:
 *
 * - `{preventDefault: boolean}` to invoke preventDefault if `true`, and not
 * invoke otherwise.
 * - `{preventDefault: (ev: Event) => boolean}` for conditional invocation.
 * - `{preventDefault: NestedObject}` uses an object to be recursively compared
 * to the `Event` object. `preventDefault` is invoked when all properties on the
 * nested object match with the properties on the event object.
 *
 * Here are some examples:
 * ```typescript
 * // always prevent default
 * DOMSource.select('input').events('keydown', {
 *   preventDefault: true
 * })
 *
 * // prevent default only when `ENTER` is pressed
 * DOMSource.select('input').events('keydown', {
 *   preventDefault: e => e.keyCode === 13
 * })
 *
 * // prevent defualt when `ENTER` is pressed AND target.value is 'HELLO'
 * DOMSource.select('input').events('keydown', {
 *   preventDefault: { keyCode: 13, ownerTarget: { value: 'HELLO' } }
 * });
 * ```
 *
 * **`DOMSource.elements()`** returns a stream of arrays containing the DOM
 * elements that match the selectors in the DOMSource (e.g. from previous
 * `select(x)` calls).
 *
 * **`DOMSource.element()`** returns a stream of DOM elements. Notice that this
 * is the singular version of `.elements()`, so the stream will emit an element,
 * not an array. If there is no element that matches the selected DOMSource,
 * then the returned stream will not emit anything.
 *
 * @param {(String|HTMLElement)} container the DOM selector for the element
 * (or the element itself) to contain the rendering of the VTrees.
 * @param {DOMDriverOptions} options an object with two optional properties:
 *
 *   - `modules: array` overrides `@cycle/dom`'s default Snabbdom modules as
 *     as defined in [`src/modules.ts`](./src/modules.ts).
 * @return {Function} the DOM driver function. The function expects a stream of
 * VNode as input, and outputs the DOMSource object.
 * @function makeDOMDriver
 */

/**
 * A factory function to create mocked DOMSource objects, for testing purposes.
 *
 * Takes a `mockConfig` object as argument, and returns
 * a DOMSource that can be given to any Cycle.js app that expects a DOMSource in
 * the sources, for testing.
 *
 * The `mockConfig` parameter is an object specifying selectors, eventTypes and
 * their streams. Example:
 *
 * ```js
 * const domSource = mockDOMSource({
 *   '.foo': {
 *     'click': xs.of({target: {}}),
 *     'mouseover': xs.of({target: {}}),
 *   },
 *   '.bar': {
 *     'scroll': xs.of({target: {}}),
 *     elements: xs.of({tagName: 'div'}),
 *   }
 * });
 *
 * // Usage
 * const click$ = domSource.select('.foo').events('click');
 * const element$ = domSource.select('.bar').elements();
 * ```
 *
 * The mocked DOM Source supports isolation. It has the functions `isolateSink`
 * and `isolateSource` attached to it, and performs simple isolation using
 * classNames. *isolateSink* with scope `foo` will append the class `___foo` to
 * the stream of virtual DOM nodes, and *isolateSource* with scope `foo` will
 * perform a conventional `mockedDOMSource.select('.__foo')` call.
 *
 * @param {Object} mockConfig an object where keys are selector strings
 * and values are objects. Those nested objects have `eventType` strings as keys
 * and values are streams you created.
 * @return {Object} fake DOM source object, with an API containing `select()`
 * and `events()` and `elements()` which can be used just like the DOM Driver's
 * DOMSource.
 *
 * @function mockDOMSource
 */

/**
 * The hyperscript function `h()` is a function to create virtual DOM objects,
 * also known as VNodes. Call
 *
 * ```js
 * h('div.myClass', {style: {color: 'red'}}, [])
 * ```
 *
 * to create a VNode that represents a `DIV` element with className `myClass`,
 * styled with red color, and no children because the `[]` array was passed. The
 * API is `h(tagOrSelector, optionalData, optionalChildrenOrText)`.
 *
 * However, usually you should use "hyperscript helpers", which are shortcut
 * functions based on hyperscript. There is one hyperscript helper function for
 * each DOM tagName, such as `h1()`, `h2()`, `div()`, `span()`, `label()`,
 * `input()`. For instance, the previous example could have been written
 * as:
 *
 * ```js
 * div('.myClass', {style: {color: 'red'}}, [])
 * ```
 *
 * There are also SVG helper functions, which apply the appropriate SVG
 * namespace to the resulting elements. `svg()` function creates the top-most
 * SVG element, and `svg.g`, `svg.polygon`, `svg.circle`, `svg.path` are for
 * SVG-specific child elements. Example:
 *
 * ```js
 * svg({attrs: {width: 150, height: 150}}, [
 *   svg.polygon({
 *     attrs: {
 *       class: 'triangle',
 *       points: '20 0 20 150 150 20'
 *     }
 *   })
 * ])
 * ```
 *
 * @function h
 */
var svg = _hyperscriptHelpers.default.svg;
exports.svg = svg;
var a = _hyperscriptHelpers.default.a;
exports.a = a;
var abbr = _hyperscriptHelpers.default.abbr;
exports.abbr = abbr;
var address = _hyperscriptHelpers.default.address;
exports.address = address;
var area = _hyperscriptHelpers.default.area;
exports.area = area;
var article = _hyperscriptHelpers.default.article;
exports.article = article;
var aside = _hyperscriptHelpers.default.aside;
exports.aside = aside;
var audio = _hyperscriptHelpers.default.audio;
exports.audio = audio;
var b = _hyperscriptHelpers.default.b;
exports.b = b;
var base = _hyperscriptHelpers.default.base;
exports.base = base;
var bdi = _hyperscriptHelpers.default.bdi;
exports.bdi = bdi;
var bdo = _hyperscriptHelpers.default.bdo;
exports.bdo = bdo;
var blockquote = _hyperscriptHelpers.default.blockquote;
exports.blockquote = blockquote;
var body = _hyperscriptHelpers.default.body;
exports.body = body;
var br = _hyperscriptHelpers.default.br;
exports.br = br;
var button = _hyperscriptHelpers.default.button;
exports.button = button;
var canvas = _hyperscriptHelpers.default.canvas;
exports.canvas = canvas;
var caption = _hyperscriptHelpers.default.caption;
exports.caption = caption;
var cite = _hyperscriptHelpers.default.cite;
exports.cite = cite;
var code = _hyperscriptHelpers.default.code;
exports.code = code;
var col = _hyperscriptHelpers.default.col;
exports.col = col;
var colgroup = _hyperscriptHelpers.default.colgroup;
exports.colgroup = colgroup;
var dd = _hyperscriptHelpers.default.dd;
exports.dd = dd;
var del = _hyperscriptHelpers.default.del;
exports.del = del;
var dfn = _hyperscriptHelpers.default.dfn;
exports.dfn = dfn;
var dir = _hyperscriptHelpers.default.dir;
exports.dir = dir;
var div = _hyperscriptHelpers.default.div;
exports.div = div;
var dl = _hyperscriptHelpers.default.dl;
exports.dl = dl;
var dt = _hyperscriptHelpers.default.dt;
exports.dt = dt;
var em = _hyperscriptHelpers.default.em;
exports.em = em;
var embed = _hyperscriptHelpers.default.embed;
exports.embed = embed;
var fieldset = _hyperscriptHelpers.default.fieldset;
exports.fieldset = fieldset;
var figcaption = _hyperscriptHelpers.default.figcaption;
exports.figcaption = figcaption;
var figure = _hyperscriptHelpers.default.figure;
exports.figure = figure;
var footer = _hyperscriptHelpers.default.footer;
exports.footer = footer;
var form = _hyperscriptHelpers.default.form;
exports.form = form;
var h1 = _hyperscriptHelpers.default.h1;
exports.h1 = h1;
var h2 = _hyperscriptHelpers.default.h2;
exports.h2 = h2;
var h3 = _hyperscriptHelpers.default.h3;
exports.h3 = h3;
var h4 = _hyperscriptHelpers.default.h4;
exports.h4 = h4;
var h5 = _hyperscriptHelpers.default.h5;
exports.h5 = h5;
var h6 = _hyperscriptHelpers.default.h6;
exports.h6 = h6;
var head = _hyperscriptHelpers.default.head;
exports.head = head;
var header = _hyperscriptHelpers.default.header;
exports.header = header;
var hgroup = _hyperscriptHelpers.default.hgroup;
exports.hgroup = hgroup;
var hr = _hyperscriptHelpers.default.hr;
exports.hr = hr;
var html = _hyperscriptHelpers.default.html;
exports.html = html;
var i = _hyperscriptHelpers.default.i;
exports.i = i;
var iframe = _hyperscriptHelpers.default.iframe;
exports.iframe = iframe;
var img = _hyperscriptHelpers.default.img;
exports.img = img;
var input = _hyperscriptHelpers.default.input;
exports.input = input;
var ins = _hyperscriptHelpers.default.ins;
exports.ins = ins;
var kbd = _hyperscriptHelpers.default.kbd;
exports.kbd = kbd;
var keygen = _hyperscriptHelpers.default.keygen;
exports.keygen = keygen;
var label = _hyperscriptHelpers.default.label;
exports.label = label;
var legend = _hyperscriptHelpers.default.legend;
exports.legend = legend;
var li = _hyperscriptHelpers.default.li;
exports.li = li;
var link = _hyperscriptHelpers.default.link;
exports.link = link;
var main = _hyperscriptHelpers.default.main;
exports.main = main;
var map = _hyperscriptHelpers.default.map;
exports.map = map;
var mark = _hyperscriptHelpers.default.mark;
exports.mark = mark;
var menu = _hyperscriptHelpers.default.menu;
exports.menu = menu;
var meta = _hyperscriptHelpers.default.meta;
exports.meta = meta;
var nav = _hyperscriptHelpers.default.nav;
exports.nav = nav;
var noscript = _hyperscriptHelpers.default.noscript;
exports.noscript = noscript;
var object = _hyperscriptHelpers.default.object;
exports.object = object;
var ol = _hyperscriptHelpers.default.ol;
exports.ol = ol;
var optgroup = _hyperscriptHelpers.default.optgroup;
exports.optgroup = optgroup;
var option = _hyperscriptHelpers.default.option;
exports.option = option;
var p = _hyperscriptHelpers.default.p;
exports.p = p;
var param = _hyperscriptHelpers.default.param;
exports.param = param;
var pre = _hyperscriptHelpers.default.pre;
exports.pre = pre;
var progress = _hyperscriptHelpers.default.progress;
exports.progress = progress;
var q = _hyperscriptHelpers.default.q;
exports.q = q;
var rp = _hyperscriptHelpers.default.rp;
exports.rp = rp;
var rt = _hyperscriptHelpers.default.rt;
exports.rt = rt;
var ruby = _hyperscriptHelpers.default.ruby;
exports.ruby = ruby;
var s = _hyperscriptHelpers.default.s;
exports.s = s;
var samp = _hyperscriptHelpers.default.samp;
exports.samp = samp;
var script = _hyperscriptHelpers.default.script;
exports.script = script;
var section = _hyperscriptHelpers.default.section;
exports.section = section;
var select = _hyperscriptHelpers.default.select;
exports.select = select;
var small = _hyperscriptHelpers.default.small;
exports.small = small;
var source = _hyperscriptHelpers.default.source;
exports.source = source;
var span = _hyperscriptHelpers.default.span;
exports.span = span;
var strong = _hyperscriptHelpers.default.strong;
exports.strong = strong;
var style = _hyperscriptHelpers.default.style;
exports.style = style;
var sub = _hyperscriptHelpers.default.sub;
exports.sub = sub;
var sup = _hyperscriptHelpers.default.sup;
exports.sup = sup;
var table = _hyperscriptHelpers.default.table;
exports.table = table;
var tbody = _hyperscriptHelpers.default.tbody;
exports.tbody = tbody;
var td = _hyperscriptHelpers.default.td;
exports.td = td;
var textarea = _hyperscriptHelpers.default.textarea;
exports.textarea = textarea;
var tfoot = _hyperscriptHelpers.default.tfoot;
exports.tfoot = tfoot;
var th = _hyperscriptHelpers.default.th;
exports.th = th;
var thead = _hyperscriptHelpers.default.thead;
exports.thead = thead;
var title = _hyperscriptHelpers.default.title;
exports.title = title;
var tr = _hyperscriptHelpers.default.tr;
exports.tr = tr;
var u = _hyperscriptHelpers.default.u;
exports.u = u;
var ul = _hyperscriptHelpers.default.ul;
exports.ul = ul;
var video = _hyperscriptHelpers.default.video;
exports.video = video;
},{"./thunk":"../node_modules/@cycle/dom/lib/es6/thunk.js","./MainDOMSource":"../node_modules/@cycle/dom/lib/es6/MainDOMSource.js","./makeDOMDriver":"../node_modules/@cycle/dom/lib/es6/makeDOMDriver.js","./mockDOMSource":"../node_modules/@cycle/dom/lib/es6/mockDOMSource.js","snabbdom/h":"../node_modules/snabbdom/h.js","./hyperscript-helpers":"../node_modules/@cycle/dom/lib/es6/hyperscript-helpers.js"}],"../node_modules/@cycle/isolate/lib/es6/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toIsolated = toIsolated;
exports.default = void 0;

var _xstream = _interopRequireDefault(require("xstream"));

var _adapt = require("@cycle/run/lib/adapt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkIsolateArgs(dataflowComponent, scope) {
  if (typeof dataflowComponent !== "function") {
    throw new Error("First argument given to isolate() must be a " + "'dataflowComponent' function");
  }

  if (scope === null) {
    throw new Error("Second argument given to isolate() must not be null");
  }
}

function normalizeScopes(sources, scopes, randomScope) {
  var perChannel = {};
  Object.keys(sources).forEach(function (channel) {
    if (typeof scopes === 'string') {
      perChannel[channel] = scopes;
      return;
    }

    var candidate = scopes[channel];

    if (typeof candidate !== 'undefined') {
      perChannel[channel] = candidate;
      return;
    }

    var wildcard = scopes['*'];

    if (typeof wildcard !== 'undefined') {
      perChannel[channel] = wildcard;
      return;
    }

    perChannel[channel] = randomScope;
  });
  return perChannel;
}

function isolateAllSources(outerSources, scopes) {
  var innerSources = {};

  for (var channel in outerSources) {
    var outerSource = outerSources[channel];

    if (outerSources.hasOwnProperty(channel) && outerSource && scopes[channel] !== null && typeof outerSource.isolateSource === 'function') {
      innerSources[channel] = outerSource.isolateSource(outerSource, scopes[channel]);
    } else if (outerSources.hasOwnProperty(channel)) {
      innerSources[channel] = outerSources[channel];
    }
  }

  return innerSources;
}

function isolateAllSinks(sources, innerSinks, scopes) {
  var outerSinks = {};

  for (var channel in innerSinks) {
    var source = sources[channel];
    var innerSink = innerSinks[channel];

    if (innerSinks.hasOwnProperty(channel) && source && scopes[channel] !== null && typeof source.isolateSink === 'function') {
      outerSinks[channel] = (0, _adapt.adapt)(source.isolateSink(_xstream.default.fromObservable(innerSink), scopes[channel]));
    } else if (innerSinks.hasOwnProperty(channel)) {
      outerSinks[channel] = innerSinks[channel];
    }
  }

  return outerSinks;
}

var counter = 0;

function newScope() {
  return "cycle" + ++counter;
}
/**
 * Takes a `component` function and a `scope`, and returns an isolated version
 * of the `component` function.
 *
 * When the isolated component is invoked, each source provided to it is
 * isolated to the given `scope` using `source.isolateSource(source, scope)`,
 * if possible. Likewise, the sinks returned from the isolated component are
 * isolated to the given `scope` using `source.isolateSink(sink, scope)`.
 *
 * The `scope` can be a string or an object. If it is anything else than those
 * two types, it will be converted to a string. If `scope` is an object, it
 * represents "scopes per channel", allowing you to specify a different scope
 * for each key of sources/sinks. For instance
 *
 * ```js
 * const childSinks = isolate(Child, {DOM: 'foo', HTTP: 'bar'})(sources);
 * ```
 *
 * You can also use a wildcard `'*'` to use as a default for source/sinks
 * channels that did not receive a specific scope:
 *
 * ```js
 * // Uses 'bar' as the isolation scope for HTTP and other channels
 * const childSinks = isolate(Child, {DOM: 'foo', '*': 'bar'})(sources);
 * ```
 *
 * If a channel's value is null, then that channel's sources and sinks won't be
 * isolated. If the wildcard is null and some channels are unspecified, those
 * channels won't be isolated. If you don't have a wildcard and some channels
 * are unspecified, then `isolate` will generate a random scope.
 *
 * ```js
 * // Does not isolate HTTP requests
 * const childSinks = isolate(Child, {DOM: 'foo', HTTP: null})(sources);
 * ```
 *
 * If the `scope` argument is not provided at all, a new scope will be
 * automatically created. This means that while **`isolate(component, scope)` is
 * pure** (referentially transparent), **`isolate(component)` is impure** (not
 * referentially transparent). Two calls to `isolate(Foo, bar)` will generate
 * the same component. But, two calls to `isolate(Foo)` will generate two
 * distinct components.
 *
 * ```js
 * // Uses some arbitrary string as the isolation scope for HTTP and other channels
 * const childSinks = isolate(Child, {DOM: 'foo'})(sources);
 * ```
 *
 * Note that both `isolateSource()` and `isolateSink()` are static members of
 * `source`. The reason for this is that drivers produce `source` while the
 * application produces `sink`, and it's the driver's responsibility to
 * implement `isolateSource()` and `isolateSink()`.
 *
 * _Note for Typescript users:_ `isolate` is not currently type-transparent and
 * will explicitly convert generic type arguments to `any`. To preserve types in
 * your components, you can use a type assertion:
 *
 * ```ts
 * // if Child is typed `Component<Sources, Sinks>`
 * const isolatedChild = isolate( Child ) as Component<Sources, Sinks>;
 * ```
 *
 * @param {Function} component a function that takes `sources` as input
 * and outputs a collection of `sinks`.
 * @param {String} scope an optional string that is used to isolate each
 * `sources` and `sinks` when the returned scoped component is invoked.
 * @return {Function} the scoped component function that, as the original
 * `component` function, takes `sources` and returns `sinks`.
 * @function isolate
 */


function isolate(component, scope) {
  if (scope === void 0) {
    scope = newScope();
  }

  checkIsolateArgs(component, scope);
  var randomScope = typeof scope === 'object' ? newScope() : '';
  var scopes = typeof scope === 'string' || typeof scope === 'object' ? scope : scope.toString();
  return function wrappedComponent(outerSources) {
    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var scopesPerChannel = normalizeScopes(outerSources, scopes, randomScope);
    var innerSources = isolateAllSources(outerSources, scopesPerChannel);
    var innerSinks = component.apply(void 0, [innerSources].concat(rest));
    var outerSinks = isolateAllSinks(outerSources, innerSinks, scopesPerChannel);
    return outerSinks;
  };
}

isolate.reset = function () {
  return counter = 0;
};

var _default = isolate;
exports.default = _default;

function toIsolated(scope) {
  if (scope === void 0) {
    scope = newScope();
  }

  return function (component) {
    return isolate(component, scope);
  };
}
},{"xstream":"../node_modules/xstream/index.js","@cycle/run/lib/adapt":"../node_modules/@cycle/run/lib/adapt.js"}],"js/app/workout/images/image.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var dom_1 = require("@cycle/dom");

;
;

function view(props) {
  return props.map(function (props) {
    return dom_1.img({
      attrs: {
        id: "" + props.id,
        src: "https://drive.google.com/open?id=" + props.id
      }
    });
  });
}

function Image(sources) {
  return {
    DOM: view(sources.props)
  };
}

exports.Image = Image;
},{"@cycle/dom":"../node_modules/@cycle/dom/lib/es6/index.js"}],"js/app/workout/images/images.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var xstream_1 = __importDefault(require("xstream"));

var dom_1 = require("@cycle/dom");

var isolate_1 = __importDefault(require("@cycle/isolate"));

var image_1 = require("./image");

var imagesIds = ['1qpno0nsy2GX0WAU6KHnuusl3bA2o8rxI', '1qxZIV7-xdKSLSsdFTZ2mBHKwDNa5f7et', '1qu3_yGnFrWTAPSLSENmAF0_lmodxxhRu', '1qrFJZLeJ6k-wCNyiIYThish5KNpVJTs0', '1r8ynJ2iQjcmVsy21q5G8Zz_PcWX3AGrs', '1qZReBdaKtbym4ol9hwN_2bd3SA_aJ7vp'];

function Images(sources) {
  var images = imagesIds.map(function (id) {
    return isolate_1.default(image_1.Image)(__assign(__assign({}, sources), {
      props: xstream_1.default.of({
        id: id
      })
    })).DOM;
  });
  return {
    DOM: view(images)
  };
}

exports.Images = Images;

function view(doms) {
  return xstream_1.default.combine.apply(xstream_1.default, doms).map(function (images) {
    return dom_1.div('.images', images);
  });
}
},{"xstream":"../node_modules/xstream/index.js","@cycle/dom":"../node_modules/@cycle/dom/lib/es6/index.js","@cycle/isolate":"../node_modules/@cycle/isolate/lib/es6/index.js","./image":"js/app/workout/images/image.ts"}],"js/app/workout/layout.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var xstream_1 = __importDefault(require("xstream"));

var dom_1 = require("@cycle/dom");

var isolate_1 = __importDefault(require("@cycle/isolate"));

var images_1 = require("./images/images");

var imagesIds = ['1qpno0nsy2GX0WAU6KHnuusl3bA2o8rxI', '1qxZIV7-xdKSLSsdFTZ2mBHKwDNa5f7et', '1qu3_yGnFrWTAPSLSENmAF0_lmodxxhRu', '1qrFJZLeJ6k-wCNyiIYThish5KNpVJTs0', '1r8ynJ2iQjcmVsy21q5G8Zz_PcWX3AGrs', '1qZReBdaKtbym4ol9hwN_2bd3SA_aJ7vp'];

function Workout(sources) {
  return {
    DOM: view(isolate_1.default(images_1.Images)(__assign({}, sources)).DOM)
  };
}

exports.Workout = Workout;

function view(imagesDOM) {
  var buttonsDOM = xstream_1.default.of(dom_1.div('.buttons', [dom_1.button('.left', {}, 'Left'), dom_1.button('.right', {}, 'Right')]));
  return xstream_1.default.combine(imagesDOM, buttonsDOM).map(function (_a) {
    var images = _a[0],
        buttons = _a[1];
    return dom_1.div('.wrap', [buttons, images]);
  });
}
},{"xstream":"../node_modules/xstream/index.js","@cycle/dom":"../node_modules/@cycle/dom/lib/es6/index.js","@cycle/isolate":"../node_modules/@cycle/isolate/lib/es6/index.js","./images/images":"js/app/workout/images/images.ts"}],"js/app/index.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("../../styles/main.less");

require("../../styles/font/fontstylesheet.css");

var run_1 = require("@cycle/run");

var dom_1 = require("@cycle/dom");

var layout_1 = require("./workout/layout");

var isolate_1 = __importDefault(require("@cycle/isolate"));

function main(sources) {
  return {
    DOM: isolate_1.default(layout_1.Workout)(__assign({}, sources)).DOM
  };
}

run_1.run(main, {
  DOM: dom_1.makeDOMDriver('#app')
});
},{"../../styles/main.less":"styles/main.less","../../styles/font/fontstylesheet.css":"styles/font/fontstylesheet.css","@cycle/run":"../node_modules/@cycle/run/lib/es6/index.js","@cycle/dom":"../node_modules/@cycle/dom/lib/es6/index.js","./workout/layout":"js/app/workout/layout.ts","@cycle/isolate":"../node_modules/@cycle/isolate/lib/es6/index.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33135" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app/index.ts"], null)
//# sourceMappingURL=/app.263d8344.js.map