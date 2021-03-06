!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.LanguageServiceWorker = e() : t.LanguageServiceWorker = e(); }(this, function () {
    return function (t) { var e = {}; function n(r) { if (e[r])
        return e[r].exports; var i = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports; } return n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }); }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e)
        return t; if (4 & e && "object" == typeof t && t && t.__esModule)
        return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
        for (var i in t)
            n.d(r, i, function (e) { return t[e]; }.bind(null, i)); return r; }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return n.d(e, "a", e), e; }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, n.p = "", n(n.s = 56); }([function (t, e) { function n(t) { return "[" + t.join(", ") + "]"; } function r(t, e) { return t.equals(e); } function i(t) { return t.hashCode(); } function o(t, e) { return this.data = {}, this.hashFunction = t || i, this.equalsFunction = e || r, this; } function s() { return this.data = [], this; } function a(t, e) { return this.data = {}, this.hashFunction = t || i, this.equalsFunction = e || r, this; } function c() { return this.data = {}, this; } function u() { return this; } function l() { return this.count = 0, this.hash = 0, this; } String.prototype.seed = String.prototype.seed || Math.round(Math.random() * Math.pow(2, 32)), String.prototype.hashCode = function () { var t, e, n, r, i, o, s, a, c = this.toString(); for (t = 3 & c.length, e = c.length - t, n = String.prototype.seed, i = 3432918353, o = 461845907, a = 0; a < e;)
            s = 255 & c.charCodeAt(a) | (255 & c.charCodeAt(++a)) << 8 | (255 & c.charCodeAt(++a)) << 16 | (255 & c.charCodeAt(++a)) << 24, ++a, n = 27492 + (65535 & (r = 5 * (65535 & (n = (n ^= s = (65535 & (s = (s = (65535 & s) * i + (((s >>> 16) * i & 65535) << 16) & 4294967295) << 15 | s >>> 17)) * o + (((s >>> 16) * o & 65535) << 16) & 4294967295) << 13 | n >>> 19)) + ((5 * (n >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16); switch (s = 0, t) {
            case 3: s ^= (255 & c.charCodeAt(a + 2)) << 16;
            case 2: s ^= (255 & c.charCodeAt(a + 1)) << 8;
            case 1: n ^= s = (65535 & (s = (s = (65535 & (s ^= 255 & c.charCodeAt(a))) * i + (((s >>> 16) * i & 65535) << 16) & 4294967295) << 15 | s >>> 17)) * o + (((s >>> 16) * o & 65535) << 16) & 4294967295;
        } return n ^= c.length, n = 2246822507 * (65535 & (n ^= n >>> 16)) + ((2246822507 * (n >>> 16) & 65535) << 16) & 4294967295, n = 3266489909 * (65535 & (n ^= n >>> 13)) + ((3266489909 * (n >>> 16) & 65535) << 16) & 4294967295, (n ^= n >>> 16) >>> 0; }, Object.defineProperty(o.prototype, "length", { get: function () { var t = 0; for (var e in this.data)
                0 === e.indexOf("hash_") && (t += this.data[e].length); return t; } }), o.prototype.add = function (t) { var e = "hash_" + this.hashFunction(t); if (e in this.data) {
            for (var n = this.data[e], r = 0; r < n.length; r++)
                if (this.equalsFunction(t, n[r]))
                    return n[r];
            return n.push(t), t;
        } return this.data[e] = [t], t; }, o.prototype.contains = function (t) { return null != this.get(t); }, o.prototype.get = function (t) { var e = "hash_" + this.hashFunction(t); if (e in this.data)
            for (var n = this.data[e], r = 0; r < n.length; r++)
                if (this.equalsFunction(t, n[r]))
                    return n[r]; return null; }, o.prototype.values = function () { var t = []; for (var e in this.data)
            0 === e.indexOf("hash_") && (t = t.concat(this.data[e])); return t; }, o.prototype.toString = function () { return n(this.values()); }, s.prototype.add = function (t) { this.data[t] = !0; }, s.prototype.or = function (t) { var e = this; Object.keys(t.data).map(function (t) { e.add(t); }); }, s.prototype.remove = function (t) { delete this.data[t]; }, s.prototype.contains = function (t) { return !0 === this.data[t]; }, s.prototype.values = function () { return Object.keys(this.data); }, s.prototype.minValue = function () { return Math.min.apply(null, this.values()); }, s.prototype.hashCode = function () { var t = new l; return t.update(this.values()), t.finish(); }, s.prototype.equals = function (t) { return t instanceof s && this.hashCode() === t.hashCode(); }, Object.defineProperty(s.prototype, "length", { get: function () { return this.values().length; } }), s.prototype.toString = function () { return "{" + this.values().join(", ") + "}"; }, Object.defineProperty(a.prototype, "length", { get: function () { var t = 0; for (var e in this.data)
                0 === e.indexOf("hash_") && (t += this.data[e].length); return t; } }), a.prototype.put = function (t, e) { var n = "hash_" + this.hashFunction(t); if (n in this.data) {
            for (var r = this.data[n], i = 0; i < r.length; i++) {
                var o = r[i];
                if (this.equalsFunction(t, o.key)) {
                    var s = o.value;
                    return o.value = e, s;
                }
            }
            return r.push({ key: t, value: e }), e;
        } return this.data[n] = [{ key: t, value: e }], e; }, a.prototype.containsKey = function (t) { var e = "hash_" + this.hashFunction(t); if (e in this.data)
            for (var n = this.data[e], r = 0; r < n.length; r++) {
                var i = n[r];
                if (this.equalsFunction(t, i.key))
                    return !0;
            } return !1; }, a.prototype.get = function (t) { var e = "hash_" + this.hashFunction(t); if (e in this.data)
            for (var n = this.data[e], r = 0; r < n.length; r++) {
                var i = n[r];
                if (this.equalsFunction(t, i.key))
                    return i.value;
            } return null; }, a.prototype.entries = function () { var t = []; for (var e in this.data)
            0 === e.indexOf("hash_") && (t = t.concat(this.data[e])); return t; }, a.prototype.getKeys = function () { return this.entries().map(function (t) { return t.key; }); }, a.prototype.getValues = function () { return this.entries().map(function (t) { return t.value; }); }, a.prototype.toString = function () { return "[" + this.entries().map(function (t) { return "{" + t.key + ":" + t.value + "}"; }).join(", ") + "]"; }, c.prototype.get = function (t) { return (t = "k-" + t) in this.data ? this.data[t] : null; }, c.prototype.put = function (t, e) { t = "k-" + t, this.data[t] = e; }, c.prototype.values = function () { var t = this.data; return Object.keys(this.data).map(function (e) { return t[e]; }); }, l.prototype.update = function () { for (var t = 0; t < arguments.length; t++) {
            var e = arguments[t];
            if (null != e)
                if (Array.isArray(e))
                    this.update.apply(e);
                else {
                    var n = 0;
                    switch (typeof e) {
                        case "undefined":
                        case "function": continue;
                        case "number":
                        case "boolean":
                            n = e;
                            break;
                        case "string":
                            n = e.hashCode();
                            break;
                        default:
                            e.updateHashCode(this);
                            continue;
                    }
                    n = (n *= 3432918353) << 15 | n >>> 17, n *= 461845907, this.count = this.count + 1;
                    var r = this.hash ^ n;
                    r = 5 * (r = r << 13 | r >>> 19) + 3864292196, this.hash = r;
                }
        } }, l.prototype.finish = function () { var t = this.hash ^ 4 * this.count; return t ^= t >>> 16, t *= 2246822507, t ^= t >>> 13, t *= 3266489909, t ^= t >>> 16; }, u.prototype.get = function (t, e) { var n = this[t] || null; return null === n ? null : n[e] || null; }, u.prototype.set = function (t, e, n) { var r = this[t] || null; null === r && (r = {}, this[t] = r), r[e] = n; }, e.Hash = l, e.Set = o, e.Map = a, e.BitSet = s, e.AltDict = c, e.DoubleDict = u, e.hashStuff = function () { var t = new l; return t.update.apply(arguments), t.finish(); }, e.escapeWhitespace = function (t, e) { return t = t.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r"), e && (t = t.replace(/ /g, "·")), t; }, e.arrayToString = n, e.titleCase = function (t) { return t.replace(/\w\S*/g, function (t) { return t.charAt(0).toUpperCase() + t.substr(1); }); }, e.equalArrays = function (t, e) { if (!Array.isArray(t) || !Array.isArray(e))
            return !1; if (t == e)
            return !0; if (t.length != e.length)
            return !1; for (var n = 0; n < t.length; n++)
            if (t[n] != e[n] && !t[n].equals(e[n]))
                return !1; return !0; }; }, function (t, e) { function n() { return this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null, this; } function r(t, e, i, o, s) { return n.call(this), this.source = void 0 !== t ? t : r.EMPTY_SOURCE, this.type = void 0 !== e ? e : null, this.channel = void 0 !== i ? i : n.DEFAULT_CHANNEL, this.start = void 0 !== o ? o : -1, this.stop = void 0 !== s ? s : -1, this.tokenIndex = -1, null !== this.source[0] ? (this.line = t[0].line, this.column = t[0].column) : this.column = -1, this; } n.INVALID_TYPE = 0, n.EPSILON = -2, n.MIN_USER_TOKEN_TYPE = 1, n.EOF = -1, n.DEFAULT_CHANNEL = 0, n.HIDDEN_CHANNEL = 1, Object.defineProperty(n.prototype, "text", { get: function () { return this._text; }, set: function (t) { this._text = t; } }), n.prototype.getTokenSource = function () { return this.source[0]; }, n.prototype.getInputStream = function () { return this.source[1]; }, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.EMPTY_SOURCE = [null, null], r.prototype.clone = function () { var t = new r(this.source, this.type, this.channel, this.start, this.stop); return t.tokenIndex = this.tokenIndex, t.line = this.line, t.column = this.column, t.text = this.text, t; }, Object.defineProperty(r.prototype, "text", { get: function () { if (null !== this._text)
                return this._text; var t = this.getInputStream(); if (null === t)
                return null; var e = t.size; return this.start < e && this.stop < e ? t.getText(this.start, this.stop) : "<EOF>"; }, set: function (t) { this._text = t; } }), r.prototype.toString = function () { var t = this.text; return t = null !== t ? t.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + t + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]"; }, e.Token = n, e.CommonToken = r; }, function (t, e, n) { var r = n(1).Token; function i(t, e) { return this.start = t, this.stop = e, this; } function o() { this.intervals = null, this.readOnly = !1; } i.prototype.contains = function (t) { return t >= this.start && t < this.stop; }, i.prototype.toString = function () { return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString(); }, Object.defineProperty(i.prototype, "length", { get: function () { return this.stop - this.start; } }), o.prototype.first = function (t) { return null === this.intervals || 0 === this.intervals.length ? r.INVALID_TYPE : this.intervals[0].start; }, o.prototype.addOne = function (t) { this.addInterval(new i(t, t + 1)); }, o.prototype.addRange = function (t, e) { this.addInterval(new i(t, e + 1)); }, o.prototype.addInterval = function (t) { if (null === this.intervals)
            this.intervals = [], this.intervals.push(t);
        else {
            for (var e = 0; e < this.intervals.length; e++) {
                var n = this.intervals[e];
                if (t.stop < n.start)
                    return void this.intervals.splice(e, 0, t);
                if (t.stop === n.start)
                    return void (this.intervals[e].start = t.start);
                if (t.start <= n.stop)
                    return this.intervals[e] = new i(Math.min(n.start, t.start), Math.max(n.stop, t.stop)), void this.reduce(e);
            }
            this.intervals.push(t);
        } }, o.prototype.addSet = function (t) { if (null !== t.intervals)
            for (var e = 0; e < t.intervals.length; e++) {
                var n = t.intervals[e];
                this.addInterval(new i(n.start, n.stop));
            } return this; }, o.prototype.reduce = function (t) { if (t < this.intervalslength - 1) {
            var e = this.intervals[t], n = this.intervals[t + 1];
            e.stop >= n.stop ? (this.intervals.pop(t + 1), this.reduce(t)) : e.stop >= n.start && (this.intervals[t] = new i(e.start, n.stop), this.intervals.pop(t + 1));
        } }, o.prototype.complement = function (t, e) { var n = new o; n.addInterval(new i(t, e + 1)); for (var r = 0; r < this.intervals.length; r++)
            n.removeRange(this.intervals[r]); return n; }, o.prototype.contains = function (t) { if (null === this.intervals)
            return !1; for (var e = 0; e < this.intervals.length; e++)
            if (this.intervals[e].contains(t))
                return !0; return !1; }, Object.defineProperty(o.prototype, "length", { get: function () { var t = 0; return this.intervals.map(function (e) { t += e.length; }), t; } }), o.prototype.removeRange = function (t) { if (t.start === t.stop - 1)
            this.removeOne(t.start);
        else if (null !== this.intervals)
            for (var e = 0, n = 0; n < this.intervals.length; n++) {
                var r = this.intervals[e];
                if (t.stop <= r.start)
                    return;
                if (t.start > r.start && t.stop < r.stop) {
                    this.intervals[e] = new i(r.start, t.start);
                    var o = new i(t.stop, r.stop);
                    return void this.intervals.splice(e, 0, o);
                }
                t.start <= r.start && t.stop >= r.stop ? (this.intervals.splice(e, 1), e -= 1) : t.start < r.stop ? this.intervals[e] = new i(r.start, t.start) : t.stop < r.stop && (this.intervals[e] = new i(t.stop, r.stop)), e += 1;
            } }, o.prototype.removeOne = function (t) { if (null !== this.intervals)
            for (var e = 0; e < this.intervals.length; e++) {
                var n = this.intervals[e];
                if (t < n.start)
                    return;
                if (t === n.start && t === n.stop - 1)
                    return void this.intervals.splice(e, 1);
                if (t === n.start)
                    return void (this.intervals[e] = new i(n.start + 1, n.stop));
                if (t === n.stop - 1)
                    return void (this.intervals[e] = new i(n.start, n.stop - 1));
                if (t < n.stop - 1) {
                    var r = new i(n.start, t);
                    return n.start = t + 1, void this.intervals.splice(e, 0, r);
                }
            } }, o.prototype.toString = function (t, e, n) { return t = t || null, e = e || null, n = n || !1, null === this.intervals ? "{}" : null !== t || null !== e ? this.toTokenString(t, e) : n ? this.toCharString() : this.toIndexString(); }, o.prototype.toCharString = function () { for (var t = [], e = 0; e < this.intervals.length; e++) {
            var n = this.intervals[e];
            n.stop === n.start + 1 ? n.start === r.EOF ? t.push("<EOF>") : t.push("'" + String.fromCharCode(n.start) + "'") : t.push("'" + String.fromCharCode(n.start) + "'..'" + String.fromCharCode(n.stop - 1) + "'");
        } return t.length > 1 ? "{" + t.join(", ") + "}" : t[0]; }, o.prototype.toIndexString = function () { for (var t = [], e = 0; e < this.intervals.length; e++) {
            var n = this.intervals[e];
            n.stop === n.start + 1 ? n.start === r.EOF ? t.push("<EOF>") : t.push(n.start.toString()) : t.push(n.start.toString() + ".." + (n.stop - 1).toString());
        } return t.length > 1 ? "{" + t.join(", ") + "}" : t[0]; }, o.prototype.toTokenString = function (t, e) { for (var n = [], r = 0; r < this.intervals.length; r++)
            for (var i = this.intervals[r], o = i.start; o < i.stop; o++)
                n.push(this.elementName(t, e, o)); return n.length > 1 ? "{" + n.join(", ") + "}" : n[0]; }, o.prototype.elementName = function (t, e, n) { return n === r.EOF ? "<EOF>" : n === r.EPSILON ? "<EPSILON>" : t[n] || e[n]; }, e.Interval = i, e.IntervalSet = o; }, function (t, e, n) { var r = n(7).PredicateTransition; function i(t) { if (Error.call(this), Error.captureStackTrace)
            Error.captureStackTrace(this, i);
        else
            (new Error).stack; return this.message = t.message, this.recognizer = t.recognizer, this.input = t.input, this.ctx = t.ctx, this.offendingToken = null, this.offendingState = -1, null !== this.recognizer && (this.offendingState = this.recognizer.state), this; } function o(t, e, n, r) { return i.call(this, { message: "", recognizer: t, input: e, ctx: null }), this.startIndex = n, this.deadEndConfigs = r, this; } function s(t, e, n, r, o, s) { s = s || t._ctx, r = r || t.getCurrentToken(), n = n || t.getCurrentToken(), e = e || t.getInputStream(), i.call(this, { message: "", recognizer: t, input: e, ctx: s }), this.deadEndConfigs = o, this.startToken = n, this.offendingToken = r; } function a(t) { i.call(this, { message: "", recognizer: t, input: t.getInputStream(), ctx: t._ctx }), this.offendingToken = t.getCurrentToken(); } function c(t, e, n) { i.call(this, { message: this.formatMessage(e, n || null), recognizer: t, input: t.getInputStream(), ctx: t._ctx }); var o = t._interp.atn.states[t.state].transitions[0]; return o instanceof r ? (this.ruleIndex = o.ruleIndex, this.predicateIndex = o.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = e, this.offendingToken = t.getCurrentToken(), this; } function u() { return Error.call(this), Error.captureStackTrace(this, u), this; } i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, i.prototype.getExpectedTokens = function () { return null !== this.recognizer ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null; }, i.prototype.toString = function () { return this.message; }, o.prototype = Object.create(i.prototype), o.prototype.constructor = o, o.prototype.toString = function () { var t = ""; return this.startIndex >= 0 && this.startIndex < this.input.size && (t = this.input.getText((this.startIndex, this.startIndex))), "LexerNoViableAltException" + t; }, s.prototype = Object.create(i.prototype), s.prototype.constructor = s, a.prototype = Object.create(i.prototype), a.prototype.constructor = a, c.prototype = Object.create(i.prototype), c.prototype.constructor = c, c.prototype.formatMessage = function (t, e) { return null !== e ? e : "failed predicate: {" + t + "}?"; }, u.prototype = Object.create(Error.prototype), u.prototype.constructor = u, e.RecognitionException = i, e.NoViableAltException = s, e.LexerNoViableAltException = o, e.InputMismatchException = a, e.FailedPredicateException = c, e.ParseCancellationException = u; }, function (t, e) { function n() { return this.atn = null, this.stateNumber = n.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = !1, this.transitions = [], this.nextTokenWithinRule = null, this; } function r() { return n.call(this), this.stateType = n.BASIC, this; } function i() { return n.call(this), this.decision = -1, this.nonGreedy = !1, this; } function o() { return i.call(this), this.endState = null, this; } function s() { return o.call(this), this.stateType = n.BLOCK_START, this; } function a() { return n.call(this), this.stateType = n.BLOCK_END, this.startState = null, this; } function c() { return n.call(this), this.stateType = n.RULE_STOP, this; } function u() { return n.call(this), this.stateType = n.RULE_START, this.stopState = null, this.isPrecedenceRule = !1, this; } function l() { return i.call(this), this.stateType = n.PLUS_LOOP_BACK, this; } function h() { return o.call(this), this.stateType = n.PLUS_BLOCK_START, this.loopBackState = null, this; } function p() { return o.call(this), this.stateType = n.STAR_BLOCK_START, this; } function f() { return n.call(this), this.stateType = n.STAR_LOOP_BACK, this; } function d() { return i.call(this), this.stateType = n.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this; } function _() { return n.call(this), this.stateType = n.LOOP_END, this.loopBackState = null, this; } function y() { return i.call(this), this.stateType = n.TOKEN_START, this; } n.INVALID_TYPE = 0, n.BASIC = 1, n.RULE_START = 2, n.BLOCK_START = 3, n.PLUS_BLOCK_START = 4, n.STAR_BLOCK_START = 5, n.TOKEN_START = 6, n.RULE_STOP = 7, n.BLOCK_END = 8, n.STAR_LOOP_BACK = 9, n.STAR_LOOP_ENTRY = 10, n.PLUS_LOOP_BACK = 11, n.LOOP_END = 12, n.serializationNames = ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"], n.INVALID_STATE_NUMBER = -1, n.prototype.toString = function () { return this.stateNumber; }, n.prototype.equals = function (t) { return t instanceof n && this.stateNumber === t.stateNumber; }, n.prototype.isNonGreedyExitState = function () { return !1; }, n.prototype.addTransition = function (t, e) { void 0 === e && (e = -1), 0 === this.transitions.length ? this.epsilonOnlyTransitions = t.isEpsilon : this.epsilonOnlyTransitions !== t.isEpsilon && (this.epsilonOnlyTransitions = !1), -1 === e ? this.transitions.push(t) : this.transitions.splice(e, 1, t); }, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, o.prototype = Object.create(i.prototype), o.prototype.constructor = o, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, a.prototype = Object.create(n.prototype), a.prototype.constructor = a, c.prototype = Object.create(n.prototype), c.prototype.constructor = c, u.prototype = Object.create(n.prototype), u.prototype.constructor = u, l.prototype = Object.create(i.prototype), l.prototype.constructor = l, h.prototype = Object.create(o.prototype), h.prototype.constructor = h, p.prototype = Object.create(o.prototype), p.prototype.constructor = p, f.prototype = Object.create(n.prototype), f.prototype.constructor = f, d.prototype = Object.create(i.prototype), d.prototype.constructor = d, _.prototype = Object.create(n.prototype), _.prototype.constructor = _, y.prototype = Object.create(i.prototype), y.prototype.constructor = y, e.ATNState = n, e.BasicState = r, e.DecisionState = i, e.BlockStartState = o, e.BlockEndState = a, e.LoopEndState = _, e.RuleStartState = u, e.RuleStopState = c, e.TokensStartState = y, e.PlusLoopbackState = l, e.StarLoopbackState = f, e.StarLoopEntryState = d, e.PlusBlockStartState = h, e.StarBlockStartState = p, e.BasicBlockStartState = s; }, function (t, e, n) { var r = n(1).Token, i = n(2).Interval, o = new i(-1, -2); n(0); function s() { return this; } function a() { return s.call(this), this; } function c() { return a.call(this), this; } function u() { return c.call(this), this; } function l() { return c.call(this), this; } function h() { return l.call(this), this; } function p() { return this; } function f() { return this; } function d(t) { return l.call(this), this.parentCtx = null, this.symbol = t, this; } function _(t) { return d.call(this, t), this; } function y() { return this; } a.prototype = Object.create(s.prototype), a.prototype.constructor = a, c.prototype = Object.create(a.prototype), c.prototype.constructor = c, u.prototype = Object.create(c.prototype), u.prototype.constructor = u, l.prototype = Object.create(c.prototype), l.prototype.constructor = l, h.prototype = Object.create(l.prototype), h.prototype.constructor = h, p.prototype.visit = function (t) { return Array.isArray(t) ? t.map(function (t) { return t.accept(this); }, this) : t.accept(this); }, p.prototype.visitChildren = function (t) { return this.visit(t.children); }, p.prototype.visitTerminal = function (t) { }, p.prototype.visitErrorNode = function (t) { }, f.prototype.visitTerminal = function (t) { }, f.prototype.visitErrorNode = function (t) { }, f.prototype.enterEveryRule = function (t) { }, f.prototype.exitEveryRule = function (t) { }, d.prototype = Object.create(l.prototype), d.prototype.constructor = d, d.prototype.getChild = function (t) { return null; }, d.prototype.getSymbol = function () { return this.symbol; }, d.prototype.getParent = function () { return this.parentCtx; }, d.prototype.getPayload = function () { return this.symbol; }, d.prototype.getSourceInterval = function () { if (null === this.symbol)
            return o; var t = this.symbol.tokenIndex; return new i(t, t); }, d.prototype.getChildCount = function () { return 0; }, d.prototype.accept = function (t) { return t.visitTerminal(this); }, d.prototype.getText = function () { return this.symbol.text; }, d.prototype.toString = function () { return this.symbol.type === r.EOF ? "<EOF>" : this.symbol.text; }, _.prototype = Object.create(d.prototype), _.prototype.constructor = _, _.prototype.isErrorNode = function () { return !0; }, _.prototype.accept = function (t) { return t.visitErrorNode(this); }, y.prototype.walk = function (t, e) { if (e instanceof h || void 0 !== e.isErrorNode && e.isErrorNode())
            t.visitErrorNode(e);
        else if (e instanceof l)
            t.visitTerminal(e);
        else {
            this.enterRule(t, e);
            for (var n = 0; n < e.getChildCount(); n++) {
                var r = e.getChild(n);
                this.walk(t, r);
            }
            this.exitRule(t, e);
        } }, y.prototype.enterRule = function (t, e) { var n = e.getRuleContext(); t.enterEveryRule(n), n.enterRule(t); }, y.prototype.exitRule = function (t, e) { var n = e.getRuleContext(); n.exitRule(t), t.exitEveryRule(n); }, y.DEFAULT = new y, e.RuleNode = u, e.ErrorNode = h, e.TerminalNode = l, e.ErrorNodeImpl = _, e.TerminalNodeImpl = d, e.ParseTreeListener = f, e.ParseTreeVisitor = p, e.ParseTreeWalker = y, e.INVALID_INTERVAL = o; }, function (t, e, n) { var r = n(16).RuleContext, i = n(0).Hash; function o(t) { this.cachedHashCode = t; } function s() { return this.cache = {}, this; } function a(t, e) { var n = 0; if (null !== t) {
            var r = new i;
            r.update(t, e), n = r.finish();
        } o.call(this, n), this.parentCtx = t, this.returnState = e; } function c() { return a.call(this, null, o.EMPTY_RETURN_STATE), this; } function u(t, e) { var n = new i; n.update(t, e); var r = n.finish(); return o.call(this, r), this.parents = t, this.returnStates = e, this; } function l(t, e, n, r) { if (t === e)
            return t; if (t instanceof a && e instanceof a)
            return function (t, e, n, r) { if (null !== r) {
                var i = r.get(t, e);
                if (null !== i)
                    return i;
                if (null !== (i = r.get(e, t)))
                    return i;
            } var s = function (t, e, n) { if (n) {
                if (t === o.EMPTY)
                    return o.EMPTY;
                if (e === o.EMPTY)
                    return o.EMPTY;
            }
            else {
                if (t === o.EMPTY && e === o.EMPTY)
                    return o.EMPTY;
                if (t === o.EMPTY) {
                    var r = [e.returnState, o.EMPTY_RETURN_STATE], i = [e.parentCtx, null];
                    return new u(i, r);
                }
                if (e === o.EMPTY) {
                    var r = [t.returnState, o.EMPTY_RETURN_STATE], i = [t.parentCtx, null];
                    return new u(i, r);
                }
            } return null; }(t, e, n); if (null !== s)
                return null !== r && r.set(t, e, s), s; if (t.returnState === e.returnState) {
                var c = l(t.parentCtx, e.parentCtx, n, r);
                if (c === t.parentCtx)
                    return t;
                if (c === e.parentCtx)
                    return e;
                var h = a.create(c, t.returnState);
                return null !== r && r.set(t, e, h), h;
            } var p = null; if ((t === e || null !== t.parentCtx && t.parentCtx === e.parentCtx) && (p = t.parentCtx), null !== p) {
                var f = [t.returnState, e.returnState];
                t.returnState > e.returnState && (f[0] = e.returnState, f[1] = t.returnState);
                var d = [p, p], _ = new u(d, f);
                return null !== r && r.set(t, e, _), _;
            } var f = [t.returnState, e.returnState], d = [t.parentCtx, e.parentCtx]; t.returnState > e.returnState && (f[0] = e.returnState, f[1] = t.returnState, d = [e.parentCtx, t.parentCtx]); var y = new u(d, f); return null !== r && r.set(t, e, y), y; }(t, e, n, r); if (n) {
            if (t instanceof c)
                return t;
            if (e instanceof c)
                return e;
        } return t instanceof a && (t = new u([t.getParent()], [t.returnState])), e instanceof a && (e = new u([e.getParent()], [e.returnState])), function (t, e, n, r) { if (null !== r) {
            var i = r.get(t, e);
            if (null !== i)
                return i;
            if (null !== (i = r.get(e, t)))
                return i;
        } var s = 0, c = 0, h = 0, p = [], f = []; for (; s < t.returnStates.length && c < e.returnStates.length;) {
            var d = t.parents[s], _ = e.parents[c];
            if (t.returnStates[s] === e.returnStates[c]) {
                var y = t.returnStates[s], E = y === o.EMPTY_RETURN_STATE && null === d && null === _, T = null !== d && null !== _ && d === _;
                if (E || T)
                    f[h] = d, p[h] = y;
                else {
                    var x = l(d, _, n, r);
                    f[h] = x, p[h] = y;
                }
                s += 1, c += 1;
            }
            else
                t.returnStates[s] < e.returnStates[c] ? (f[h] = d, p[h] = t.returnStates[s], s += 1) : (f[h] = _, p[h] = e.returnStates[c], c += 1);
            h += 1;
        } if (s < t.returnStates.length)
            for (var S = s; S < t.returnStates.length; S++)
                f[h] = t.parents[S], p[h] = t.returnStates[S], h += 1;
        else
            for (var S = c; S < e.returnStates.length; S++)
                f[h] = e.parents[S], p[h] = e.returnStates[S], h += 1; if (h < f.length) {
            if (1 === h) {
                var g = a.create(f[0], p[0]);
                return null !== r && r.set(t, e, g), g;
            }
            f = f.slice(0, h), p = p.slice(0, h);
        } var R = new u(f, p); if (R === t)
            return null !== r && r.set(t, e, t), t; if (R === e)
            return null !== r && r.set(t, e, e), e; (function (t) { for (var e = {}, n = 0; n < t.length; n++) {
            var r = t[n];
            r in e || (e[r] = r);
        } for (var i = 0; i < t.length; i++)
            t[i] = e[t[i]]; })(f), null !== r && r.set(t, e, R); return R; }(t, e, n, r); } o.EMPTY = null, o.EMPTY_RETURN_STATE = 2147483647, o.globalNodeCount = 1, o.id = o.globalNodeCount, o.prototype.isEmpty = function () { return this === o.EMPTY; }, o.prototype.hasEmptyPath = function () { return this.getReturnState(this.length - 1) === o.EMPTY_RETURN_STATE; }, o.prototype.hashCode = function () { return this.cachedHashCode; }, o.prototype.updateHashCode = function (t) { t.update(this.cachedHashCode); }, s.prototype.add = function (t) { if (t === o.EMPTY)
            return o.EMPTY; var e = this.cache[t] || null; return null !== e ? e : (this.cache[t] = t, t); }, s.prototype.get = function (t) { return this.cache[t] || null; }, Object.defineProperty(s.prototype, "length", { get: function () { return this.cache.length; } }), a.prototype = Object.create(o.prototype), a.prototype.contructor = a, a.create = function (t, e) { return e === o.EMPTY_RETURN_STATE && null === t ? o.EMPTY : new a(t, e); }, Object.defineProperty(a.prototype, "length", { get: function () { return 1; } }), a.prototype.getParent = function (t) { return this.parentCtx; }, a.prototype.getReturnState = function (t) { return this.returnState; }, a.prototype.equals = function (t) { return this === t || t instanceof a && (this.hashCode() === t.hashCode() && (this.returnState === t.returnState && (null == this.parentCtx ? null == t.parentCtx : this.parentCtx.equals(t.parentCtx)))); }, a.prototype.toString = function () { var t = null === this.parentCtx ? "" : this.parentCtx.toString(); return 0 === t.length ? this.returnState === o.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : this.returnState + " " + t; }, c.prototype = Object.create(a.prototype), c.prototype.constructor = c, c.prototype.isEmpty = function () { return !0; }, c.prototype.getParent = function (t) { return null; }, c.prototype.getReturnState = function (t) { return this.returnState; }, c.prototype.equals = function (t) { return this === t; }, c.prototype.toString = function () { return "$"; }, o.EMPTY = new c, u.prototype = Object.create(o.prototype), u.prototype.constructor = u, u.prototype.isEmpty = function () { return this.returnStates[0] === o.EMPTY_RETURN_STATE; }, Object.defineProperty(u.prototype, "length", { get: function () { return this.returnStates.length; } }), u.prototype.getParent = function (t) { return this.parents[t]; }, u.prototype.getReturnState = function (t) { return this.returnStates[t]; }, u.prototype.equals = function (t) { return this === t || t instanceof u && (this.hashCode() === t.hashCode() && (this.returnStates === t.returnStates && this.parents === t.parents)); }, u.prototype.toString = function () { if (this.isEmpty())
            return "[]"; for (var t = "[", e = 0; e < this.returnStates.length; e++)
            e > 0 && (t += ", "), this.returnStates[e] !== o.EMPTY_RETURN_STATE ? (t += this.returnStates[e], null !== this.parents[e] ? t = t + " " + this.parents[e] : t += "null") : t += "$"; return t + "]"; }, e.merge = l, e.PredictionContext = o, e.PredictionContextCache = s, e.SingletonPredictionContext = a, e.predictionContextFromRuleContext = function t(e, n) { if (void 0 !== n && null !== n || (n = r.EMPTY), null === n.parentCtx || n === r.EMPTY)
            return o.EMPTY; var i = t(e, n.parentCtx), s = e.states[n.invokingState].transitions[0]; return a.create(i, s.followState.stateNumber); }, e.getCachedPredictionContext = function t(e, n, r) { if (e.isEmpty())
            return e; var i = r[e] || null; if (null !== i)
            return i; if (null !== (i = n.get(e)))
            return r[e] = i, i; for (var s = !1, c = [], l = 0; l < c.length; l++) {
            var h = t(e.getParent(l), n, r);
            if (s || h !== e.getParent(l)) {
                if (!s) {
                    c = [];
                    for (var p = 0; p < e.length; p++)
                        c[p] = e.getParent(p);
                    s = !0;
                }
                c[l] = h;
            }
        } if (!s)
            return n.add(e), r[e] = e, e; var f = null; return f = 0 === c.length ? o.EMPTY : 1 === c.length ? a.create(c[0], e.getReturnState(0)) : new u(c, e.returnStates), n.add(f), r[f] = f, r[e] = f, f; }; }, function (t, e, n) { var r = n(1).Token, i = (n(2).Interval, n(2).IntervalSet), o = n(11).Predicate, s = n(11).PrecedencePredicate; function a(t) { if (void 0 === t || null === t)
            throw "target cannot be null."; return this.target = t, this.isEpsilon = !1, this.label = null, this; } function c(t, e) { return a.call(this, t), this.label_ = e, this.label = this.makeLabel(), this.serializationType = a.ATOM, this; } function u(t, e, n, r) { return a.call(this, t), this.ruleIndex = e, this.precedence = n, this.followState = r, this.serializationType = a.RULE, this.isEpsilon = !0, this; } function l(t, e) { return a.call(this, t), this.serializationType = a.EPSILON, this.isEpsilon = !0, this.outermostPrecedenceReturn = e, this; } function h(t, e, n) { return a.call(this, t), this.serializationType = a.RANGE, this.start = e, this.stop = n, this.label = this.makeLabel(), this; } function p(t) { return a.call(this, t), this; } function f(t, e, n, r) { return p.call(this, t), this.serializationType = a.PREDICATE, this.ruleIndex = e, this.predIndex = n, this.isCtxDependent = r, this.isEpsilon = !0, this; } function d(t, e, n, r) { return a.call(this, t), this.serializationType = a.ACTION, this.ruleIndex = e, this.actionIndex = void 0 === n ? -1 : n, this.isCtxDependent = void 0 !== r && r, this.isEpsilon = !0, this; } function _(t, e) { return a.call(this, t), this.serializationType = a.SET, void 0 !== e && null !== e ? this.label = e : (this.label = new i, this.label.addOne(r.INVALID_TYPE)), this; } function y(t, e) { return _.call(this, t, e), this.serializationType = a.NOT_SET, this; } function E(t) { return a.call(this, t), this.serializationType = a.WILDCARD, this; } function T(t, e) { return p.call(this, t), this.serializationType = a.PRECEDENCE, this.precedence = e, this.isEpsilon = !0, this; } a.EPSILON = 1, a.RANGE = 2, a.RULE = 3, a.PREDICATE = 4, a.ATOM = 5, a.ACTION = 6, a.SET = 7, a.NOT_SET = 8, a.WILDCARD = 9, a.PRECEDENCE = 10, a.serializationNames = ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"], a.serializationTypes = { EpsilonTransition: a.EPSILON, RangeTransition: a.RANGE, RuleTransition: a.RULE, PredicateTransition: a.PREDICATE, AtomTransition: a.ATOM, ActionTransition: a.ACTION, SetTransition: a.SET, NotSetTransition: a.NOT_SET, WildcardTransition: a.WILDCARD, PrecedencePredicateTransition: a.PRECEDENCE }, c.prototype = Object.create(a.prototype), c.prototype.constructor = c, c.prototype.makeLabel = function () { var t = new i; return t.addOne(this.label_), t; }, c.prototype.matches = function (t, e, n) { return this.label_ === t; }, c.prototype.toString = function () { return this.label_; }, u.prototype = Object.create(a.prototype), u.prototype.constructor = u, u.prototype.matches = function (t, e, n) { return !1; }, l.prototype = Object.create(a.prototype), l.prototype.constructor = l, l.prototype.matches = function (t, e, n) { return !1; }, l.prototype.toString = function () { return "epsilon"; }, h.prototype = Object.create(a.prototype), h.prototype.constructor = h, h.prototype.makeLabel = function () { var t = new i; return t.addRange(this.start, this.stop), t; }, h.prototype.matches = function (t, e, n) { return t >= this.start && t <= this.stop; }, h.prototype.toString = function () { return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'"; }, p.prototype = Object.create(a.prototype), p.prototype.constructor = p, f.prototype = Object.create(p.prototype), f.prototype.constructor = f, f.prototype.matches = function (t, e, n) { return !1; }, f.prototype.getPredicate = function () { return new o(this.ruleIndex, this.predIndex, this.isCtxDependent); }, f.prototype.toString = function () { return "pred_" + this.ruleIndex + ":" + this.predIndex; }, d.prototype = Object.create(a.prototype), d.prototype.constructor = d, d.prototype.matches = function (t, e, n) { return !1; }, d.prototype.toString = function () { return "action_" + this.ruleIndex + ":" + this.actionIndex; }, _.prototype = Object.create(a.prototype), _.prototype.constructor = _, _.prototype.matches = function (t, e, n) { return this.label.contains(t); }, _.prototype.toString = function () { return this.label.toString(); }, y.prototype = Object.create(_.prototype), y.prototype.constructor = y, y.prototype.matches = function (t, e, n) { return t >= e && t <= n && !_.prototype.matches.call(this, t, e, n); }, y.prototype.toString = function () { return "~" + _.prototype.toString.call(this); }, E.prototype = Object.create(a.prototype), E.prototype.constructor = E, E.prototype.matches = function (t, e, n) { return t >= e && t <= n; }, E.prototype.toString = function () { return "."; }, T.prototype = Object.create(p.prototype), T.prototype.constructor = T, T.prototype.matches = function (t, e, n) { return !1; }, T.prototype.getPredicate = function () { return new s(this.precedence); }, T.prototype.toString = function () { return this.precedence + " >= _p"; }, e.Transition = a, e.AtomTransition = c, e.SetTransition = _, e.NotSetTransition = y, e.RuleTransition = u, e.ActionTransition = d, e.EpsilonTransition = l, e.RangeTransition = h, e.WildcardTransition = E, e.PredicateTransition = f, e.PrecedencePredicateTransition = T, e.AbstractPredicateTransition = p; }, function (t, e, n) { var r = n(53).LL1Analyzer, i = n(2).IntervalSet; function o(t, e) { return this.grammarType = t, this.maxTokenType = e, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = [], this; } o.prototype.nextTokensInContext = function (t, e) { return new r(this).LOOK(t, null, e); }, o.prototype.nextTokensNoContext = function (t) { return null !== t.nextTokenWithinRule ? t.nextTokenWithinRule : (t.nextTokenWithinRule = this.nextTokensInContext(t, null), t.nextTokenWithinRule.readOnly = !0, t.nextTokenWithinRule); }, o.prototype.nextTokens = function (t, e) { return void 0 === e ? this.nextTokensNoContext(t) : this.nextTokensInContext(t, e); }, o.prototype.addState = function (t) { null !== t && (t.atn = this, t.stateNumber = this.states.length), this.states.push(t); }, o.prototype.removeState = function (t) { this.states[t.stateNumber] = null; }, o.prototype.defineDecisionState = function (t) { return this.decisionToState.push(t), t.decision = this.decisionToState.length - 1, t.decision; }, o.prototype.getDecisionState = function (t) { return 0 === this.decisionToState.length ? null : this.decisionToState[t]; }; var s = n(1).Token; o.prototype.getExpectedTokens = function (t, e) { if (t < 0 || t >= this.states.length)
            throw "Invalid state number."; var n = this.states[t], r = this.nextTokens(n); if (!r.contains(s.EPSILON))
            return r; var o = new i; for (o.addSet(r), o.removeOne(s.EPSILON); null !== e && e.invokingState >= 0 && r.contains(s.EPSILON);) {
            var a = this.states[e.invokingState].transitions[0];
            r = this.nextTokens(a.followState), o.addSet(r), o.removeOne(s.EPSILON), e = e.parentCtx;
        } return r.contains(s.EPSILON) && o.addOne(s.EOF), o; }, o.INVALID_ALT_NUMBER = 0, e.ATN = o; }, function (t, e, n) { var r = n(8).ATN, i = n(0), o = i.Hash, s = i.Set, a = n(11).SemanticContext, c = n(6).merge; function u(t) { return t.hashCodeForConfigSet(); } function l(t, e) { return t === e || null !== t && null !== e && t.equalsForConfigSet(e); } function h(t) { return this.configLookup = new s(u, l), this.fullCtx = void 0 === t || t, this.readOnly = !1, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = !1, this.dipsIntoOuterContext = !1, this.cachedHashCode = -1, this; } function p() { return h.call(this), this.configLookup = new s, this; } h.prototype.add = function (t, e) { if (void 0 === e && (e = null), this.readOnly)
            throw "This set is readonly"; t.semanticContext !== a.NONE && (this.hasSemanticContext = !0), t.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = !0); var n = this.configLookup.add(t); if (n === t)
            return this.cachedHashCode = -1, this.configs.push(t), !0; var r = !this.fullCtx, i = c(n.context, t.context, r, e); return n.reachesIntoOuterContext = Math.max(n.reachesIntoOuterContext, t.reachesIntoOuterContext), t.precedenceFilterSuppressed && (n.precedenceFilterSuppressed = !0), n.context = i, !0; }, h.prototype.getStates = function () { for (var t = new s, e = 0; e < this.configs.length; e++)
            t.add(this.configs[e].state); return t; }, h.prototype.getPredicates = function () { for (var t = [], e = 0; e < this.configs.length; e++) {
            var n = this.configs[e].semanticContext;
            n !== a.NONE && t.push(n.semanticContext);
        } return t; }, Object.defineProperty(h.prototype, "items", { get: function () { return this.configs; } }), h.prototype.optimizeConfigs = function (t) { if (this.readOnly)
            throw "This set is readonly"; if (0 !== this.configLookup.length)
            for (var e = 0; e < this.configs.length; e++) {
                var n = this.configs[e];
                n.context = t.getCachedContext(n.context);
            } }, h.prototype.addAll = function (t) { for (var e = 0; e < t.length; e++)
            this.add(t[e]); return !1; }, h.prototype.equals = function (t) { return this === t || t instanceof h && i.equalArrays(this.configs, t.configs) && this.fullCtx === t.fullCtx && this.uniqueAlt === t.uniqueAlt && this.conflictingAlts === t.conflictingAlts && this.hasSemanticContext === t.hasSemanticContext && this.dipsIntoOuterContext === t.dipsIntoOuterContext; }, h.prototype.hashCode = function () { var t = new o; return this.updateHashCode(t), t.finish(); }, h.prototype.updateHashCode = function (t) { if (this.readOnly) {
            if (-1 === this.cachedHashCode)
                (t = new o).update(this.configs), this.cachedHashCode = t.finish();
            t.update(this.cachedHashCode);
        }
        else
            t.update(this.configs); }, Object.defineProperty(h.prototype, "length", { get: function () { return this.configs.length; } }), h.prototype.isEmpty = function () { return 0 === this.configs.length; }, h.prototype.contains = function (t) { if (null === this.configLookup)
            throw "This method is not implemented for readonly sets."; return this.configLookup.contains(t); }, h.prototype.containsFast = function (t) { if (null === this.configLookup)
            throw "This method is not implemented for readonly sets."; return this.configLookup.containsFast(t); }, h.prototype.clear = function () { if (this.readOnly)
            throw "This set is readonly"; this.configs = [], this.cachedHashCode = -1, this.configLookup = new s; }, h.prototype.setReadonly = function (t) { this.readOnly = t, t && (this.configLookup = null); }, h.prototype.toString = function () { return i.arrayToString(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== r.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (null !== this.conflictingAlts ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : ""); }, p.prototype = Object.create(h.prototype), p.prototype.constructor = p, e.ATNConfigSet = h, e.OrderedATNConfigSet = p; }, function (t, e, n) { var r = n(9).ATNConfigSet, i = n(0), o = i.Hash, s = i.Set; function a(t, e) { return this.alt = e, this.pred = t, this; } function c(t, e) { return null === t && (t = -1), null === e && (e = new r), this.stateNumber = t, this.configs = e, this.edges = null, this.isAcceptState = !1, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = !1, this.predicates = null, this; } a.prototype.toString = function () { return "(" + this.pred + ", " + this.alt + ")"; }, c.prototype.getAltSet = function () { var t = new s; if (null !== this.configs)
            for (var e = 0; e < this.configs.length; e++) {
                var n = this.configs[e];
                t.add(n.alt);
            } return 0 === t.length ? null : t; }, c.prototype.equals = function (t) { return this === t || t instanceof c && this.configs.equals(t.configs); }, c.prototype.toString = function () { var t = this.stateNumber + ":" + this.configs; return this.isAcceptState && (t += "=>", null !== this.predicates ? t += this.predicates : t += this.prediction), t; }, c.prototype.hashCode = function () { var t = new o; return t.update(this.configs), this.isAcceptState && (null !== this.predicates ? t.update(this.predicates) : t.update(this.prediction)), t.finish(); }, e.DFAState = c, e.PredPrediction = a; }, function (t, e, n) { var r = n(0).Set, i = n(0).Hash; function o() { return this; } function s(t, e, n) { return o.call(this), this.ruleIndex = void 0 === t ? -1 : t, this.predIndex = void 0 === e ? -1 : e, this.isCtxDependent = void 0 !== n && n, this; } function a(t) { o.call(this), this.precedence = void 0 === t ? 0 : t; } function c(t, e) { o.call(this); var n = new r; t instanceof c ? t.opnds.map(function (t) { n.add(t); }) : n.add(t), e instanceof c ? e.opnds.map(function (t) { n.add(t); }) : n.add(e); var i = a.filterPrecedencePredicates(n); if (i.length > 0) {
            var s = null;
            i.map(function (t) { (null === s || t.precedence < s.precedence) && (s = t); }), n.add(s);
        } return this.opnds = n.values(), this; } function u(t, e) { o.call(this); var n = new r; t instanceof u ? t.opnds.map(function (t) { n.add(t); }) : n.add(t), e instanceof u ? e.opnds.map(function (t) { n.add(t); }) : n.add(e); var i = a.filterPrecedencePredicates(n); if (i.length > 0) {
            var s = i.sort(function (t, e) { return t.compareTo(e); }), c = s[s.length - 1];
            n.add(c);
        } return this.opnds = n.values(), this; } o.prototype.hashCode = function () { var t = new i; return this.updateHashCode(t), t.finish(); }, o.prototype.evaluate = function (t, e) { }, o.prototype.evalPrecedence = function (t, e) { return this; }, o.andContext = function (t, e) { if (null === t || t === o.NONE)
            return e; if (null === e || e === o.NONE)
            return t; var n = new c(t, e); return 1 === n.opnds.length ? n.opnds[0] : n; }, o.orContext = function (t, e) { if (null === t)
            return e; if (null === e)
            return t; if (t === o.NONE || e === o.NONE)
            return o.NONE; var n = new u(t, e); return 1 === n.opnds.length ? n.opnds[0] : n; }, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, o.NONE = new s, s.prototype.evaluate = function (t, e) { var n = this.isCtxDependent ? e : null; return t.sempred(n, this.ruleIndex, this.predIndex); }, s.prototype.updateHashCode = function (t) { t.update(this.ruleIndex, this.predIndex, this.isCtxDependent); }, s.prototype.equals = function (t) { return this === t || t instanceof s && (this.ruleIndex === t.ruleIndex && this.predIndex === t.predIndex && this.isCtxDependent === t.isCtxDependent); }, s.prototype.toString = function () { return "{" + this.ruleIndex + ":" + this.predIndex + "}?"; }, a.prototype = Object.create(o.prototype), a.prototype.constructor = a, a.prototype.evaluate = function (t, e) { return t.precpred(e, this.precedence); }, a.prototype.evalPrecedence = function (t, e) { return t.precpred(e, this.precedence) ? o.NONE : null; }, a.prototype.compareTo = function (t) { return this.precedence - t.precedence; }, a.prototype.updateHashCode = function (t) { t.update(31); }, a.prototype.equals = function (t) { return this === t || t instanceof a && this.precedence === t.precedence; }, a.prototype.toString = function () { return "{" + this.precedence + ">=prec}?"; }, a.filterPrecedencePredicates = function (t) { var e = []; return t.values().map(function (t) { t instanceof a && e.push(t); }), e; }, c.prototype = Object.create(o.prototype), c.prototype.constructor = c, c.prototype.equals = function (t) { return this === t || t instanceof c && this.opnds === t.opnds; }, c.prototype.updateHashCode = function (t) { t.update(this.opnds, "AND"); }, c.prototype.evaluate = function (t, e) { for (var n = 0; n < this.opnds.length; n++)
            if (!this.opnds[n].evaluate(t, e))
                return !1; return !0; }, c.prototype.evalPrecedence = function (t, e) { for (var n = !1, r = [], i = 0; i < this.opnds.length; i++) {
            var s = this.opnds[i], a = s.evalPrecedence(t, e);
            if (n |= a !== s, null === a)
                return null;
            a !== o.NONE && r.push(a);
        } if (!n)
            return this; if (0 === r.length)
            return o.NONE; var c = null; return r.map(function (t) { c = null === c ? t : o.andContext(c, t); }), c; }, c.prototype.toString = function () { var t = ""; return this.opnds.map(function (e) { t += "&& " + e.toString(); }), t.length > 3 ? t.slice(3) : t; }, u.prototype = Object.create(o.prototype), u.prototype.constructor = u, u.prototype.constructor = function (t) { return this === t || t instanceof u && this.opnds === t.opnds; }, u.prototype.updateHashCode = function (t) { t.update(this.opnds, "OR"); }, u.prototype.evaluate = function (t, e) { for (var n = 0; n < this.opnds.length; n++)
            if (this.opnds[n].evaluate(t, e))
                return !0; return !1; }, u.prototype.evalPrecedence = function (t, e) { for (var n = !1, r = [], i = 0; i < this.opnds.length; i++) {
            var s = this.opnds[i], a = s.evalPrecedence(t, e);
            if (n |= a !== s, a === o.NONE)
                return o.NONE;
            null !== a && r.push(a);
        } if (!n)
            return this; if (0 === r.length)
            return null; return r.map(function (t) { return t; }), null; }, u.prototype.toString = function () { var t = ""; return this.opnds.map(function (e) { t += "|| " + e.toString(); }), t.length > 3 ? t.slice(3) : t; }, e.SemanticContext = o, e.PrecedencePredicate = a, e.Predicate = s; }, function (t, e) { function n() { return this; } function r() { return n.call(this), this; } function i(t) { if (n.call(this), null === t)
            throw "delegates"; return this.delegates = t, this; } n.prototype.syntaxError = function (t, e, n, r, i, o) { }, n.prototype.reportAmbiguity = function (t, e, n, r, i, o, s) { }, n.prototype.reportAttemptingFullContext = function (t, e, n, r, i, o) { }, n.prototype.reportContextSensitivity = function (t, e, n, r, i, o) { }, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.INSTANCE = new r, r.prototype.syntaxError = function (t, e, n, r, i, o) { console.error("line " + n + ":" + r + " " + i); }, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, i.prototype.syntaxError = function (t, e, n, r, i, o) { this.delegates.map(function (s) { s.syntaxError(t, e, n, r, i, o); }); }, i.prototype.reportAmbiguity = function (t, e, n, r, i, o, s) { this.delegates.map(function (a) { a.reportAmbiguity(t, e, n, r, i, o, s); }); }, i.prototype.reportAttemptingFullContext = function (t, e, n, r, i, o) { this.delegates.map(function (s) { s.reportAttemptingFullContext(t, e, n, r, i, o); }); }, i.prototype.reportContextSensitivity = function (t, e, n, r, i, o) { this.delegates.map(function (s) { s.reportContextSensitivity(t, e, n, r, i, o); }); }, e.ErrorListener = n, e.ConsoleErrorListener = r, e.ProxyErrorListener = i; }, function (t, e, n) { var r = n(1).Token; function i(t, e) { return this.name = "<empty>", this.strdata = t, this.decodeToUnicodeCodePoints = e || !1, function (t, e) { if (t._index = 0, t.data = [], t.decodeToUnicodeCodePoints)
            for (var n = 0; n < t.strdata.length;) {
                var r = t.strdata.codePointAt(n);
                t.data.push(r), n += r <= 65535 ? 1 : 2;
            }
        else
            for (n = 0; n < t.strdata.length; n++) {
                var i = t.strdata.charCodeAt(n);
                t.data.push(i);
            } t._size = t.data.length; }(this), this; } n(26), n(25), Object.defineProperty(i.prototype, "index", { get: function () { return this._index; } }), Object.defineProperty(i.prototype, "size", { get: function () { return this._size; } }), i.prototype.reset = function () { this._index = 0; }, i.prototype.consume = function () { if (this._index >= this._size)
            throw "cannot consume EOF"; this._index += 1; }, i.prototype.LA = function (t) { if (0 === t)
            return 0; t < 0 && (t += 1); var e = this._index + t - 1; return e < 0 || e >= this._size ? r.EOF : this.data[e]; }, i.prototype.LT = function (t) { return this.LA(t); }, i.prototype.mark = function () { return -1; }, i.prototype.release = function (t) { }, i.prototype.seek = function (t) { t <= this._index ? this._index = t : this._index = Math.min(t, this._size); }, i.prototype.getText = function (t, e) { if (e >= this._size && (e = this._size - 1), t >= this._size)
            return ""; if (this.decodeToUnicodeCodePoints) {
            for (var n = "", r = t; r <= e; r++)
                n += String.fromCodePoint(this.data[r]);
            return n;
        } return this.strdata.slice(t, e + 1); }, i.prototype.toString = function () { return this.strdata; }, e.InputStream = i; }, function (t, e) { function n(t, e, n) { return this.dfa = t, this.literalNames = e || [], this.symbolicNames = n || [], this; } function r(t) { return n.call(this, t, null), this; } n.prototype.toString = function () { if (null === this.dfa.s0)
            return null; for (var t = "", e = this.dfa.sortedStates(), n = 0; n < e.length; n++) {
            var r = e[n];
            if (null !== r.edges)
                for (var i = r.edges.length, o = 0; o < i; o++) {
                    var s = r.edges[o] || null;
                    null !== s && 2147483647 !== s.stateNumber && (t = (t = (t = (t = (t = (t = t.concat(this.getStateString(r))).concat("-")).concat(this.getEdgeLabel(o))).concat("->")).concat(this.getStateString(s))).concat("\n"));
                }
        } return 0 === t.length ? null : t; }, n.prototype.getEdgeLabel = function (t) { return 0 === t ? "EOF" : null !== this.literalNames || null !== this.symbolicNames ? this.literalNames[t - 1] || this.symbolicNames[t - 1] : String.fromCharCode(t - 1); }, n.prototype.getStateString = function (t) { var e = (t.isAcceptState ? ":" : "") + "s" + t.stateNumber + (t.requiresFullContext ? "^" : ""); return t.isAcceptState ? null !== t.predicates ? e + "=>" + t.predicates.toString() : e + "=>" + t.prediction.toString() : e; }, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.prototype.getEdgeLabel = function (t) { return "'" + String.fromCharCode(t) + "'"; }, e.DFASerializer = n, e.LexerDFASerializer = r; }, function (t, e, n) { var r = n(1).Token, i = n(29).Recognizer, o = n(50).CommonTokenFactory, s = n(3).RecognitionException, a = n(3).LexerNoViableAltException; function c(t) { return i.call(this), this._input = t, this._factory = o.DEFAULT, this._tokenFactorySourcePair = [this, t], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = !1, this._channel = r.DEFAULT_CHANNEL, this._type = r.INVALID_TYPE, this._modeStack = [], this._mode = c.DEFAULT_MODE, this._text = null, this; } c.prototype = Object.create(i.prototype), c.prototype.constructor = c, c.DEFAULT_MODE = 0, c.MORE = -2, c.SKIP = -3, c.DEFAULT_TOKEN_CHANNEL = r.DEFAULT_CHANNEL, c.HIDDEN = r.HIDDEN_CHANNEL, c.MIN_CHAR_VALUE = 0, c.MAX_CHAR_VALUE = 1114111, c.prototype.reset = function () { null !== this._input && this._input.seek(0), this._token = null, this._type = r.INVALID_TYPE, this._channel = r.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = !1, this._mode = c.DEFAULT_MODE, this._modeStack = [], this._interp.reset(); }, c.prototype.nextToken = function () { if (null === this._input)
            throw "nextToken requires a non-null input stream."; var t = this._input.mark(); try {
            for (;;) {
                if (this._hitEOF)
                    return this.emitEOF(), this._token;
                this._token = null, this._channel = r.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
                for (var e = !1;;) {
                    this._type = r.INVALID_TYPE;
                    var n = c.SKIP;
                    try {
                        n = this._interp.match(this._input, this._mode);
                    }
                    catch (t) {
                        if (!(t instanceof s))
                            throw console.log(t.stack), t;
                        this.notifyListeners(t), this.recover(t);
                    }
                    if (this._input.LA(1) === r.EOF && (this._hitEOF = !0), this._type === r.INVALID_TYPE && (this._type = n), this._type === c.SKIP) {
                        e = !0;
                        break;
                    }
                    if (this._type !== c.MORE)
                        break;
                }
                if (!e)
                    return null === this._token && this.emit(), this._token;
            }
        }
        finally {
            this._input.release(t);
        } }, c.prototype.skip = function () { this._type = c.SKIP; }, c.prototype.more = function () { this._type = c.MORE; }, c.prototype.mode = function (t) { this._mode = t; }, c.prototype.pushMode = function (t) { this._interp.debug && console.log("pushMode " + t), this._modeStack.push(this._mode), this.mode(t); }, c.prototype.popMode = function () { if (0 === this._modeStack.length)
            throw "Empty Stack"; return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.mode(this._modeStack.pop()), this._mode; }, Object.defineProperty(c.prototype, "inputStream", { get: function () { return this._input; }, set: function (t) { this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = t, this._tokenFactorySourcePair = [this, this._input]; } }), Object.defineProperty(c.prototype, "sourceName", { get: function () { return this._input.sourceName; } }), c.prototype.emitToken = function (t) { this._token = t; }, c.prototype.emit = function () { var t = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.getCharIndex() - 1, this._tokenStartLine, this._tokenStartColumn); return this.emitToken(t), t; }, c.prototype.emitEOF = function () { var t = this.column, e = this.line, n = this._factory.create(this._tokenFactorySourcePair, r.EOF, null, r.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, e, t); return this.emitToken(n), n; }, Object.defineProperty(c.prototype, "type", { get: function () { return this.type; }, set: function (t) { this._type = t; } }), Object.defineProperty(c.prototype, "line", { get: function () { return this._interp.line; }, set: function (t) { this._interp.line = t; } }), Object.defineProperty(c.prototype, "column", { get: function () { return this._interp.column; }, set: function (t) { this._interp.column = t; } }), c.prototype.getCharIndex = function () { return this._input.index; }, Object.defineProperty(c.prototype, "text", { get: function () { return null !== this._text ? this._text : this._interp.getText(this._input); }, set: function (t) { this._text = t; } }), c.prototype.getAllTokens = function () { for (var t = [], e = this.nextToken(); e.type !== r.EOF;)
            t.push(e), e = this.nextToken(); return t; }, c.prototype.notifyListeners = function (t) { var e = this._tokenStartCharIndex, n = this._input.index, r = this._input.getText(e, n), i = "token recognition error at: '" + this.getErrorDisplay(r) + "'"; this.getErrorListenerDispatch().syntaxError(this, null, this._tokenStartLine, this._tokenStartColumn, i, t); }, c.prototype.getErrorDisplay = function (t) { for (var e = [], n = 0; n < t.length; n++)
            e.push(t[n]); return e.join(""); }, c.prototype.getErrorDisplayForChar = function (t) { return t.charCodeAt(0) === r.EOF ? "<EOF>" : "\n" === t ? "\\n" : "\t" === t ? "\\t" : "\r" === t ? "\\r" : t; }, c.prototype.getCharErrorDisplay = function (t) { return "'" + this.getErrorDisplayForChar(t) + "'"; }, c.prototype.recover = function (t) { this._input.LA(1) !== r.EOF && (t instanceof a ? this._interp.consume(this._input) : this._input.consume()); }, e.Lexer = c; }, function (t, e, n) { var r = n(5).RuleNode, i = n(5).INVALID_INTERVAL, o = n(8).INVALID_ALT_NUMBER; function s(t, e) { return r.call(this), this.parentCtx = t || null, this.invokingState = e || -1, this; } s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype.depth = function () { for (var t = 0, e = this; null !== e;)
            e = e.parentCtx, t += 1; return t; }, s.prototype.isEmpty = function () { return -1 === this.invokingState; }, s.prototype.getSourceInterval = function () { return i; }, s.prototype.getRuleContext = function () { return this; }, s.prototype.getPayload = function () { return this; }, s.prototype.getText = function () { return 0 === this.getChildCount() ? "" : this.children.map(function (t) { return t.getText(); }).join(""); }, s.prototype.getAltNumber = function () { return o; }, s.prototype.setAltNumber = function (t) { }, s.prototype.getChild = function (t) { return null; }, s.prototype.getChildCount = function () { return 0; }, s.prototype.accept = function (t) { return t.visitChildren(this); }, e.RuleContext = s; var a = n(33).Trees; s.prototype.toStringTree = function (t, e) { return a.toStringTree(this, t, e); }, s.prototype.toString = function (t, e) { t = t || null, e = e || null; for (var n = this, r = "["; null !== n && n !== e;) {
            if (null === t)
                n.isEmpty() || (r += n.invokingState);
            else {
                var i = n.ruleIndex;
                r += i >= 0 && i < t.length ? t[i] : "" + i;
            }
            null === n.parentCtx || null === t && n.parentCtx.isEmpty() || (r += " "), n = n.parentCtx;
        } return r += "]"; }; }, function (t, e, n) { var r = n(4).DecisionState, i = n(11).SemanticContext, o = n(0).Hash; function s(t, e) { if (null === t) {
            var n = { state: null, alt: null, context: null, semanticContext: null };
            return e && (n.reachesIntoOuterContext = 0), n;
        } var r = {}; return r.state = t.state || null, r.alt = void 0 === t.alt ? null : t.alt, r.context = t.context || null, r.semanticContext = t.semanticContext || null, e && (r.reachesIntoOuterContext = t.reachesIntoOuterContext || 0, r.precedenceFilterSuppressed = t.precedenceFilterSuppressed || !1), r; } function a(t, e) { return this.checkContext(t, e), t = s(t), e = s(e, !0), this.state = null !== t.state ? t.state : e.state, this.alt = null !== t.alt ? t.alt : e.alt, this.context = null !== t.context ? t.context : e.context, this.semanticContext = null !== t.semanticContext ? t.semanticContext : null !== e.semanticContext ? e.semanticContext : i.NONE, this.reachesIntoOuterContext = e.reachesIntoOuterContext, this.precedenceFilterSuppressed = e.precedenceFilterSuppressed, this; } function c(t, e) { a.call(this, t, e); var n = t.lexerActionExecutor || null; return this.lexerActionExecutor = n || (null !== e ? e.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = null !== e && this.checkNonGreedyDecision(e, this.state), this; } a.prototype.checkContext = function (t, e) { null !== t.context && void 0 !== t.context || null !== e && null !== e.context && void 0 !== e.context || (this.context = null); }, a.prototype.hashCode = function () { var t = new o; return this.updateHashCode(t), t.finish(); }, a.prototype.updateHashCode = function (t) { t.update(this.state.stateNumber, this.alt, this.context, this.semanticContext); }, a.prototype.equals = function (t) { return this === t || t instanceof a && (this.state.stateNumber === t.state.stateNumber && this.alt === t.alt && (null === this.context ? null === t.context : this.context.equals(t.context)) && this.semanticContext.equals(t.semanticContext) && this.precedenceFilterSuppressed === t.precedenceFilterSuppressed); }, a.prototype.hashCodeForConfigSet = function () { var t = new o; return t.update(this.state.stateNumber, this.alt, this.semanticContext), t.finish(); }, a.prototype.equalsForConfigSet = function (t) { return this === t || t instanceof a && (this.state.stateNumber === t.state.stateNumber && this.alt === t.alt && this.semanticContext.equals(t.semanticContext)); }, a.prototype.toString = function () { return "(" + this.state + "," + this.alt + (null !== this.context ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== i.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")"; }, c.prototype = Object.create(a.prototype), c.prototype.constructor = c, c.prototype.updateHashCode = function (t) { t.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor); }, c.prototype.equals = function (t) { return this === t || t instanceof c && this.passedThroughNonGreedyDecision == t.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(t.lexerActionExecutor) : !t.lexerActionExecutor) && a.prototype.equals.call(this, t); }, c.prototype.hashCodeForConfigSet = c.prototype.hashCode, c.prototype.equalsForConfigSet = c.prototype.equals, c.prototype.checkNonGreedyDecision = function (t, e) { return t.passedThroughNonGreedyDecision || e instanceof r && e.nonGreedy; }, e.ATNConfig = a, e.LexerATNConfig = c; }, function (t, e, n) { n(0).Set; var r = n(0).Map, i = n(0).BitSet, o = n(0).AltDict, s = n(8).ATN, a = n(4).RuleStopState, c = n(9).ATNConfigSet, u = n(17).ATNConfig, l = n(11).SemanticContext, h = (n(0).Hash, n(0).hashStuff); n(0).equalArrays; function p() { return this; } p.SLL = 0, p.LL = 1, p.LL_EXACT_AMBIG_DETECTION = 2, p.hasSLLConflictTerminatingPrediction = function (t, e) { if (p.allConfigsInRuleStopStates(e))
            return !0; if (t === p.SLL && e.hasSemanticContext) {
            for (var n = new c, r = 0; r < e.items.length; r++) {
                var i = e.items[r];
                i = new u({ semanticContext: l.NONE }, i), n.add(i);
            }
            e = n;
        } var o = p.getConflictingAltSubsets(e); return p.hasConflictingAltSet(o) && !p.hasStateAssociatedWithOneAlt(e); }, p.hasConfigInRuleStopState = function (t) { for (var e = 0; e < t.items.length; e++) {
            if (t.items[e].state instanceof a)
                return !0;
        } return !1; }, p.allConfigsInRuleStopStates = function (t) { for (var e = 0; e < t.items.length; e++) {
            if (!(t.items[e].state instanceof a))
                return !1;
        } return !0; }, p.resolvesToJustOneViableAlt = function (t) { return p.getSingleViableAlt(t); }, p.allSubsetsConflict = function (t) { return !p.hasNonConflictingAltSet(t); }, p.hasNonConflictingAltSet = function (t) { for (var e = 0; e < t.length; e++) {
            if (1 === t[e].length)
                return !0;
        } return !1; }, p.hasConflictingAltSet = function (t) { for (var e = 0; e < t.length; e++) {
            if (t[e].length > 1)
                return !0;
        } return !1; }, p.allSubsetsEqual = function (t) { for (var e = null, n = 0; n < t.length; n++) {
            var r = t[n];
            if (null === e)
                e = r;
            else if (r !== e)
                return !1;
        } return !0; }, p.getUniqueAlt = function (t) { var e = p.getAlts(t); return 1 === e.length ? e.minValue() : s.INVALID_ALT_NUMBER; }, p.getAlts = function (t) { var e = new i; return t.map(function (t) { e.or(t); }), e; }, p.getConflictingAltSubsets = function (t) { var e = new r; return e.hashFunction = function (t) { h(t.state.stateNumber, t.context); }, e.equalsFunction = function (t, e) { return t.state.stateNumber == e.state.stateNumber && t.context.equals(e.context); }, t.items.map(function (t) { var n = e.get(t); null === n && (n = new i, e.put(t, n)), n.add(t.alt); }), e.getValues(); }, p.getStateToAltMap = function (t) { var e = new o; return t.items.map(function (t) { var n = e.get(t.state); null === n && (n = new i, e.put(t.state, n)), n.add(t.alt); }), e; }, p.hasStateAssociatedWithOneAlt = function (t) { for (var e = p.getStateToAltMap(t).values(), n = 0; n < e.length; n++)
            if (1 === e[n].length)
                return !0; return !1; }, p.getSingleViableAlt = function (t) { for (var e = null, n = 0; n < t.length; n++) {
            var r = t[n].minValue();
            if (null === e)
                e = r;
            else if (e !== r)
                return s.INVALID_ALT_NUMBER;
        } return e; }, e.PredictionMode = p; }, function (t, e, n) { var r = n(16).RuleContext, i = n(5), o = i.INVALID_INTERVAL, s = i.TerminalNode, a = i.TerminalNodeImpl, c = i.ErrorNodeImpl, u = n(2).Interval; function l(t, e) { t = t || null, e = e || null, r.call(this, t, e), this.ruleIndex = -1, this.children = null, this.start = null, this.stop = null, this.exception = null; } function h(t, e, n) { return l.call(t, e), this.ruleIndex = n, this; } l.prototype = Object.create(r.prototype), l.prototype.constructor = l, l.prototype.copyFrom = function (t) { this.parentCtx = t.parentCtx, this.invokingState = t.invokingState, this.children = null, this.start = t.start, this.stop = t.stop, t.children && (this.children = [], t.children.map(function (t) { t instanceof c && (this.children.push(t), t.parentCtx = this); }, this)); }, l.prototype.enterRule = function (t) { }, l.prototype.exitRule = function (t) { }, l.prototype.addChild = function (t) { return null === this.children && (this.children = []), this.children.push(t), t; }, l.prototype.removeLastChild = function () { null !== this.children && this.children.pop(); }, l.prototype.addTokenNode = function (t) { var e = new a(t); return this.addChild(e), e.parentCtx = this, e; }, l.prototype.addErrorNode = function (t) { var e = new c(t); return this.addChild(e), e.parentCtx = this, e; }, l.prototype.getChild = function (t, e) { if (e = e || null, null === this.children || t < 0 || t >= this.children.length)
            return null; if (null === e)
            return this.children[t]; for (var n = 0; n < this.children.length; n++) {
            var r = this.children[n];
            if (r instanceof e) {
                if (0 === t)
                    return r;
                t -= 1;
            }
        } return null; }, l.prototype.getToken = function (t, e) { if (null === this.children || e < 0 || e >= this.children.length)
            return null; for (var n = 0; n < this.children.length; n++) {
            var r = this.children[n];
            if (r instanceof s && r.symbol.type === t) {
                if (0 === e)
                    return r;
                e -= 1;
            }
        } return null; }, l.prototype.getTokens = function (t) { if (null === this.children)
            return []; for (var e = [], n = 0; n < this.children.length; n++) {
            var r = this.children[n];
            r instanceof s && r.symbol.type === t && e.push(r);
        } return e; }, l.prototype.getTypedRuleContext = function (t, e) { return this.getChild(e, t); }, l.prototype.getTypedRuleContexts = function (t) { if (null === this.children)
            return []; for (var e = [], n = 0; n < this.children.length; n++) {
            var r = this.children[n];
            r instanceof t && e.push(r);
        } return e; }, l.prototype.getChildCount = function () { return null === this.children ? 0 : this.children.length; }, l.prototype.getSourceInterval = function () { return null === this.start || null === this.stop ? o : new u(this.start.tokenIndex, this.stop.tokenIndex); }, r.EMPTY = new l, h.prototype = Object.create(l.prototype), h.prototype.constructor = h, e.ParserRuleContext = l; }, function (t, e, n) { e.atn = n(54), e.codepointat = n(26), e.dfa = n(48), e.fromcodepoint = n(25), e.tree = n(46), e.error = n(45), e.Token = n(1).Token, e.CharStreams = n(43).CharStreams, e.CommonToken = n(1).CommonToken, e.InputStream = n(13).InputStream, e.FileStream = n(42).FileStream, e.CommonTokenStream = n(22).CommonTokenStream, e.Lexer = n(15).Lexer, e.Parser = n(40).Parser; var r = n(6); e.PredictionContextCache = r.PredictionContextCache, e.ParserRuleContext = n(19).ParserRuleContext, e.Interval = n(2).Interval, e.Utils = n(0); }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = function () { function t() { } return t.notEmpty = function (t) { return null !== t && void 0 !== t; }, t.notDuplicate = function (t, e, n) { return n.indexOf(t) == e; }, t; }();
            e.Utils = r;
        }, function (t, e, n) { var r = n(1).Token, i = n(41).BufferedTokenStream; function o(t, e) { return i.call(this, t), this.channel = void 0 === e ? r.DEFAULT_CHANNEL : e, this; } o.prototype = Object.create(i.prototype), o.prototype.constructor = o, o.prototype.adjustSeekIndex = function (t) { return this.nextTokenOnChannel(t, this.channel); }, o.prototype.LB = function (t) { if (0 === t || this.index - t < 0)
            return null; for (var e = this.index, n = 1; n <= t;)
            e = this.previousTokenOnChannel(e - 1, this.channel), n += 1; return e < 0 ? null : this.tokens[e]; }, o.prototype.LT = function (t) { if (this.lazyInit(), 0 === t)
            return null; if (t < 0)
            return this.LB(-t); for (var e = this.index, n = 1; n < t;)
            this.sync(e + 1) && (e = this.nextTokenOnChannel(e + 1, this.channel)), n += 1; return this.tokens[e]; }, o.prototype.getNumberOfOnChannelTokens = function () { var t = 0; this.fill(); for (var e = 0; e < this.tokens.length; e++) {
            var n = this.tokens[e];
            if (n.channel === this.channel && (t += 1), n.type === r.EOF)
                break;
        } return t; }, e.CommonTokenStream = o; }, function (t, e) { }, function (t, e, n) { var r = n(1).Token, i = n(3), o = i.NoViableAltException, s = i.InputMismatchException, a = i.FailedPredicateException, c = i.ParseCancellationException, u = n(4).ATNState, l = n(2).Interval, h = n(2).IntervalSet; function p() { } function f() { return p.call(this), this.errorRecoveryMode = !1, this.lastErrorIndex = -1, this.lastErrorStates = null, this; } function d() { return f.call(this), this; } p.prototype.reset = function (t) { }, p.prototype.recoverInline = function (t) { }, p.prototype.recover = function (t, e) { }, p.prototype.sync = function (t) { }, p.prototype.inErrorRecoveryMode = function (t) { }, p.prototype.reportError = function (t) { }, f.prototype = Object.create(p.prototype), f.prototype.constructor = f, f.prototype.reset = function (t) { this.endErrorCondition(t); }, f.prototype.beginErrorCondition = function (t) { this.errorRecoveryMode = !0; }, f.prototype.inErrorRecoveryMode = function (t) { return this.errorRecoveryMode; }, f.prototype.endErrorCondition = function (t) { this.errorRecoveryMode = !1, this.lastErrorStates = null, this.lastErrorIndex = -1; }, f.prototype.reportMatch = function (t) { this.endErrorCondition(t); }, f.prototype.reportError = function (t, e) { this.inErrorRecoveryMode(t) || (this.beginErrorCondition(t), e instanceof o ? this.reportNoViableAlternative(t, e) : e instanceof s ? this.reportInputMismatch(t, e) : e instanceof a ? this.reportFailedPredicate(t, e) : (console.log("unknown recognition error type: " + e.constructor.name), console.log(e.stack), t.notifyErrorListeners(e.getOffendingToken(), e.getMessage(), e))); }, f.prototype.recover = function (t, e) { this.lastErrorIndex === t.getInputStream().index && null !== this.lastErrorStates && this.lastErrorStates.indexOf(t.state) >= 0 && t.consume(), this.lastErrorIndex = t._input.index, null === this.lastErrorStates && (this.lastErrorStates = []), this.lastErrorStates.push(t.state); var n = this.getErrorRecoverySet(t); this.consumeUntil(t, n); }, f.prototype.sync = function (t) { if (!this.inErrorRecoveryMode(t)) {
            var e = t._interp.atn.states[t.state], n = t.getTokenStream().LA(1), i = t.atn.nextTokens(e);
            if (!i.contains(r.EPSILON) && !i.contains(n))
                switch (e.stateType) {
                    case u.BLOCK_START:
                    case u.STAR_BLOCK_START:
                    case u.PLUS_BLOCK_START:
                    case u.STAR_LOOP_ENTRY:
                        if (null !== this.singleTokenDeletion(t))
                            return;
                        throw new s(t);
                    case u.PLUS_LOOP_BACK:
                    case u.STAR_LOOP_BACK:
                        this.reportUnwantedToken(t);
                        var o = new h;
                        o.addSet(t.getExpectedTokens());
                        var a = o.addSet(this.getErrorRecoverySet(t));
                        this.consumeUntil(t, a);
                }
        } }, f.prototype.reportNoViableAlternative = function (t, e) { var n, i = t.getTokenStream(); n = null !== i ? e.startToken.type === r.EOF ? "<EOF>" : i.getText(new l(e.startToken.tokenIndex, e.offendingToken.tokenIndex)) : "<unknown input>"; var o = "no viable alternative at input " + this.escapeWSAndQuote(n); t.notifyErrorListeners(o, e.offendingToken, e); }, f.prototype.reportInputMismatch = function (t, e) { var n = "mismatched input " + this.getTokenErrorDisplay(e.offendingToken) + " expecting " + e.getExpectedTokens().toString(t.literalNames, t.symbolicNames); t.notifyErrorListeners(n, e.offendingToken, e); }, f.prototype.reportFailedPredicate = function (t, e) { var n = "rule " + t.ruleNames[t._ctx.ruleIndex] + " " + e.message; t.notifyErrorListeners(n, e.offendingToken, e); }, f.prototype.reportUnwantedToken = function (t) { if (!this.inErrorRecoveryMode(t)) {
            this.beginErrorCondition(t);
            var e = t.getCurrentToken(), n = "extraneous input " + this.getTokenErrorDisplay(e) + " expecting " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames);
            t.notifyErrorListeners(n, e, null);
        } }, f.prototype.reportMissingToken = function (t) { if (!this.inErrorRecoveryMode(t)) {
            this.beginErrorCondition(t);
            var e = t.getCurrentToken(), n = "missing " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames) + " at " + this.getTokenErrorDisplay(e);
            t.notifyErrorListeners(n, e, null);
        } }, f.prototype.recoverInline = function (t) { var e = this.singleTokenDeletion(t); if (null !== e)
            return t.consume(), e; if (this.singleTokenInsertion(t))
            return this.getMissingSymbol(t); throw new s(t); }, f.prototype.singleTokenInsertion = function (t) { var e = t.getTokenStream().LA(1), n = t._interp.atn, r = n.states[t.state].transitions[0].target; return !!n.nextTokens(r, t._ctx).contains(e) && (this.reportMissingToken(t), !0); }, f.prototype.singleTokenDeletion = function (t) { var e = t.getTokenStream().LA(2); if (this.getExpectedTokens(t).contains(e)) {
            this.reportUnwantedToken(t), t.consume();
            var n = t.getCurrentToken();
            return this.reportMatch(t), n;
        } return null; }, f.prototype.getMissingSymbol = function (t) { var e, n = t.getCurrentToken(), i = this.getExpectedTokens(t).first(); e = i === r.EOF ? "<missing EOF>" : "<missing " + t.literalNames[i] + ">"; var o = n, s = t.getTokenStream().LT(-1); return o.type === r.EOF && null !== s && (o = s), t.getTokenFactory().create(o.source, i, e, r.DEFAULT_CHANNEL, -1, -1, o.line, o.column); }, f.prototype.getExpectedTokens = function (t) { return t.getExpectedTokens(); }, f.prototype.getTokenErrorDisplay = function (t) { if (null === t)
            return "<no token>"; var e = t.text; return null === e && (e = t.type === r.EOF ? "<EOF>" : "<" + t.type + ">"), this.escapeWSAndQuote(e); }, f.prototype.escapeWSAndQuote = function (t) { return "'" + (t = (t = (t = t.replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/\t/g, "\\t")) + "'"; }, f.prototype.getErrorRecoverySet = function (t) { for (var e = t._interp.atn, n = t._ctx, i = new h; null !== n && n.invokingState >= 0;) {
            var o = e.states[n.invokingState].transitions[0], s = e.nextTokens(o.followState);
            i.addSet(s), n = n.parentCtx;
        } return i.removeOne(r.EPSILON), i; }, f.prototype.consumeUntil = function (t, e) { for (var n = t.getTokenStream().LA(1); n !== r.EOF && !e.contains(n);)
            t.consume(), n = t.getTokenStream().LA(1); }, d.prototype = Object.create(f.prototype), d.prototype.constructor = d, d.prototype.recover = function (t, e) { for (var n = t._ctx; null !== n;)
            n.exception = e, n = n.parentCtx; throw new c(e); }, d.prototype.recoverInline = function (t) { this.recover(t, new s(t)); }, d.prototype.sync = function (t) { }, e.BailErrorStrategy = d, e.DefaultErrorStrategy = f; }, function (t, e) {
            /*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
            String.fromCodePoint || function () { var t = function () { try {
                var t = {}, e = Object.defineProperty, n = e(t, t, t) && e;
            }
            catch (t) { } return n; }(), e = String.fromCharCode, n = Math.floor, r = function (t) { var r, i, o = [], s = -1, a = arguments.length; if (!a)
                return ""; for (var c = ""; ++s < a;) {
                var u = Number(arguments[s]);
                if (!isFinite(u) || u < 0 || u > 1114111 || n(u) != u)
                    throw RangeError("Invalid code point: " + u);
                u <= 65535 ? o.push(u) : (r = 55296 + ((u -= 65536) >> 10), i = u % 1024 + 56320, o.push(r, i)), (s + 1 == a || o.length > 16384) && (c += e.apply(null, o), o.length = 0);
            } return c; }; t ? t(String, "fromCodePoint", { value: r, configurable: !0, writable: !0 }) : String.fromCodePoint = r; }();
        }, function (t, e) {
            /*! https://mths.be/codepointat v0.2.0 by @mathias */
            String.prototype.codePointAt || function () {
                "use strict";
                var t = function () { try {
                    var t = {}, e = Object.defineProperty, n = e(t, t, t) && e;
                }
                catch (t) { } return n; }(), e = function (t) { if (null == this)
                    throw TypeError(); var e = String(this), n = e.length, r = t ? Number(t) : 0; if (r != r && (r = 0), !(r < 0 || r >= n)) {
                    var i, o = e.charCodeAt(r);
                    return o >= 55296 && o <= 56319 && n > r + 1 && (i = e.charCodeAt(r + 1)) >= 56320 && i <= 57343 ? 1024 * (o - 55296) + i - 56320 + 65536 : o;
                } };
                t ? t(String.prototype, "codePointAt", { value: e, configurable: !0, writable: !0 }) : String.prototype.codePointAt = e;
            }();
        }, function (t, e, n) { var r = n(0), i = r.Set, o = r.BitSet, s = r.DoubleDict, a = n(8).ATN, c = n(4).ATNState, u = n(17).ATNConfig, l = n(9).ATNConfigSet, h = n(1).Token, p = n(10).DFAState, f = n(10).PredPrediction, d = n(28).ATNSimulator, _ = n(18).PredictionMode, y = n(16).RuleContext, E = (n(19).ParserRuleContext, n(11).SemanticContext), T = (n(4).StarLoopEntryState, n(4).RuleStopState), x = n(6).PredictionContext, S = n(2).Interval, g = n(7), R = g.Transition, A = g.SetTransition, v = g.NotSetTransition, C = g.RuleTransition, I = g.ActionTransition, N = n(3).NoViableAltException, m = n(6).SingletonPredictionContext, O = n(6).predictionContextFromRuleContext; function L(t, e, n, r) { return d.call(this, e, r), this.parser = t, this.decisionToDFA = n, this.predictionMode = _.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this; } L.prototype = Object.create(d.prototype), L.prototype.constructor = L, L.prototype.debug = !1, L.prototype.debug_closure = !1, L.prototype.debug_add = !1, L.prototype.debug_list_atn_decisions = !1, L.prototype.dfa_debug = !1, L.prototype.retry_debug = !1, L.prototype.reset = function () { }, L.prototype.adaptivePredict = function (t, e, n) { (this.debug || this.debug_list_atn_decisions) && console.log("adaptivePredict decision " + e + " exec LA(1)==" + this.getLookaheadName(t) + " line " + t.LT(1).line + ":" + t.LT(1).column), this._input = t, this._startIndex = t.index, this._outerContext = n; var r = this.decisionToDFA[e]; this._dfa = r; var i = t.mark(), o = t.index; try {
            var s;
            if (null === (s = r.precedenceDfa ? r.getPrecedenceStartState(this.parser.getPrecedence()) : r.s0)) {
                null === n && (n = y.EMPTY), (this.debug || this.debug_list_atn_decisions) && console.log("predictATN decision " + r.decision + " exec LA(1)==" + this.getLookaheadName(t) + ", outerContext=" + n.toString(this.parser.ruleNames));
                var a = this.computeStartState(r.atnStartState, y.EMPTY, !1);
                r.precedenceDfa ? (r.s0.configs = a, a = this.applyPrecedenceFilter(a), s = this.addDFAState(r, new p(null, a)), r.setPrecedenceStartState(this.parser.getPrecedence(), s)) : (s = this.addDFAState(r, new p(null, a)), r.s0 = s);
            }
            var c = this.execATN(r, s, t, o, n);
            return this.debug && console.log("DFA after predictATN: " + r.toString(this.parser.literalNames)), c;
        }
        finally {
            this._dfa = null, this.mergeCache = null, t.seek(o), t.release(i);
        } }, L.prototype.execATN = function (t, e, n, r, i) { var o; (this.debug || this.debug_list_atn_decisions) && console.log("execATN decision " + t.decision + " exec LA(1)==" + this.getLookaheadName(n) + " line " + n.LT(1).line + ":" + n.LT(1).column); var s = e; this.debug && console.log("s0 = " + e); for (var c = n.LA(1);;) {
            var u = this.getExistingTargetState(s, c);
            if (null === u && (u = this.computeTargetState(t, s, c)), u === d.ERROR) {
                var l = this.noViableAlt(n, i, s.configs, r);
                if (n.seek(r), (o = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(s.configs, i)) !== a.INVALID_ALT_NUMBER)
                    return o;
                throw l;
            }
            if (u.requiresFullContext && this.predictionMode !== _.SLL) {
                var p = null;
                if (null !== u.predicates) {
                    this.debug && console.log("DFA state has preds in DFA sim LL failover");
                    var f = n.index;
                    if (f !== r && n.seek(r), 1 === (p = this.evalSemanticContext(u.predicates, i, !0)).length)
                        return this.debug && console.log("Full LL avoided"), p.minValue();
                    f !== r && n.seek(f);
                }
                this.dfa_debug && console.log("ctx sensitive state " + i + " in " + u);
                var y = this.computeStartState(t.atnStartState, i, !0);
                return this.reportAttemptingFullContext(t, p, u.configs, r, n.index), o = this.execATNWithFullContext(t, u, y, n, r, i);
            }
            if (u.isAcceptState) {
                if (null === u.predicates)
                    return u.prediction;
                var E = n.index;
                n.seek(r);
                var T = this.evalSemanticContext(u.predicates, i, !0);
                if (0 === T.length)
                    throw this.noViableAlt(n, i, u.configs, r);
                return 1 === T.length ? T.minValue() : (this.reportAmbiguity(t, u, r, E, !1, T, u.configs), T.minValue());
            }
            s = u, c !== h.EOF && (n.consume(), c = n.LA(1));
        } }, L.prototype.getExistingTargetState = function (t, e) { var n = t.edges; return null === n ? null : n[e + 1] || null; }, L.prototype.computeTargetState = function (t, e, n) { var i = this.computeReachSet(e.configs, n, !1); if (null === i)
            return this.addDFAEdge(t, e, n, d.ERROR), d.ERROR; var o = new p(null, i), s = this.getUniqueAlt(i); if (this.debug) {
            var c = _.getConflictingAltSubsets(i);
            console.log("SLL altSubSets=" + r.arrayToString(c) + ", previous=" + e.configs + ", configs=" + i + ", predict=" + s + ", allSubsetsConflict=" + _.allSubsetsConflict(c) + ", conflictingAlts=" + this.getConflictingAlts(i));
        } return s !== a.INVALID_ALT_NUMBER ? (o.isAcceptState = !0, o.configs.uniqueAlt = s, o.prediction = s) : _.hasSLLConflictTerminatingPrediction(this.predictionMode, i) && (o.configs.conflictingAlts = this.getConflictingAlts(i), o.requiresFullContext = !0, o.isAcceptState = !0, o.prediction = o.configs.conflictingAlts.minValue()), o.isAcceptState && o.configs.hasSemanticContext && (this.predicateDFAState(o, this.atn.getDecisionState(t.decision)), null !== o.predicates && (o.prediction = a.INVALID_ALT_NUMBER)), o = this.addDFAEdge(t, e, n, o); }, L.prototype.predicateDFAState = function (t, e) { var n = e.transitions.length, r = this.getConflictingAltsOrUniqueAlt(t.configs), i = this.getPredsForAmbigAlts(r, t.configs, n); null !== i ? (t.predicates = this.getPredicatePredictions(r, i), t.prediction = a.INVALID_ALT_NUMBER) : t.prediction = r.minValue(); }, L.prototype.execATNWithFullContext = function (t, e, n, r, i, o) { (this.debug || this.debug_list_atn_decisions) && console.log("execATNWithFullContext " + n); var s = !1, c = null, u = n; r.seek(i); for (var l = r.LA(1), p = -1;;) {
            if (null === (c = this.computeReachSet(u, l, !0))) {
                var f = this.noViableAlt(r, o, u, i);
                r.seek(i);
                var d = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(u, o);
                if (d !== a.INVALID_ALT_NUMBER)
                    return d;
                throw f;
            }
            var y = _.getConflictingAltSubsets(c);
            if (this.debug && console.log("LL altSubSets=" + y + ", predict=" + _.getUniqueAlt(y) + ", resolvesToJustOneViableAlt=" + _.resolvesToJustOneViableAlt(y)), c.uniqueAlt = this.getUniqueAlt(c), c.uniqueAlt !== a.INVALID_ALT_NUMBER) {
                p = c.uniqueAlt;
                break;
            }
            if (this.predictionMode !== _.LL_EXACT_AMBIG_DETECTION) {
                if ((p = _.resolvesToJustOneViableAlt(y)) !== a.INVALID_ALT_NUMBER)
                    break;
            }
            else if (_.allSubsetsConflict(y) && _.allSubsetsEqual(y)) {
                s = !0, p = _.getSingleViableAlt(y);
                break;
            }
            u = c, l !== h.EOF && (r.consume(), l = r.LA(1));
        } return c.uniqueAlt !== a.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(t, p, c, i, r.index), p) : (this.reportAmbiguity(t, e, i, r.index, s, null, c), p); }, L.prototype.computeReachSet = function (t, e, n) { this.debug && console.log("in computeReachSet, starting closure: " + t), null === this.mergeCache && (this.mergeCache = new s); for (var r = new l(n), o = null, c = 0; c < t.items.length; c++) {
            var p = t.items[c];
            if (this.debug_add && console.log("testing " + this.getTokenName(e) + " at " + p), p.state instanceof T)
                (n || e === h.EOF) && (null === o && (o = []), o.push(p), this.debug_add && console.log("added " + p + " to skippedStopStates"));
            else
                for (var f = 0; f < p.state.transitions.length; f++) {
                    var d = p.state.transitions[f], y = this.getReachableTarget(d, e);
                    if (null !== y) {
                        var E = new u({ state: y }, p);
                        r.add(E, this.mergeCache), this.debug_add && console.log("added " + E + " to intermediate");
                    }
                }
        } var x = null; if (null === o && e !== h.EOF && (1 === r.items.length ? x = r : this.getUniqueAlt(r) !== a.INVALID_ALT_NUMBER && (x = r)), null === x) {
            x = new l(n);
            for (var S = new i, g = e === h.EOF, R = 0; R < r.items.length; R++)
                this.closure(r.items[R], x, S, !1, n, g);
        } if (e === h.EOF && (x = this.removeAllConfigsNotInRuleStopState(x, x === r)), !(null === o || n && _.hasConfigInRuleStopState(x)))
            for (var A = 0; A < o.length; A++)
                x.add(o[A], this.mergeCache); return 0 === x.items.length ? null : x; }, L.prototype.removeAllConfigsNotInRuleStopState = function (t, e) { if (_.allConfigsInRuleStopStates(t))
            return t; for (var n = new l(t.fullCtx), r = 0; r < t.items.length; r++) {
            var i = t.items[r];
            if (i.state instanceof T)
                n.add(i, this.mergeCache);
            else if (e && i.state.epsilonOnlyTransitions)
                if (this.atn.nextTokens(i.state).contains(h.EPSILON)) {
                    var o = this.atn.ruleToStopState[i.state.ruleIndex];
                    n.add(new u({ state: o }, i), this.mergeCache);
                }
        } return n; }, L.prototype.computeStartState = function (t, e, n) { for (var r = O(this.atn, e), o = new l(n), s = 0; s < t.transitions.length; s++) {
            var a = t.transitions[s].target, c = new u({ state: a, alt: s + 1, context: r }, null), h = new i;
            this.closure(c, o, h, !0, n, !1);
        } return o; }, L.prototype.applyPrecedenceFilter = function (t) { for (var e, n = [], r = new l(t.fullCtx), i = 0; i < t.items.length; i++)
            if (1 === (e = t.items[i]).alt) {
                var o = e.semanticContext.evalPrecedence(this.parser, this._outerContext);
                null !== o && (n[e.state.stateNumber] = e.context, o !== e.semanticContext ? r.add(new u({ semanticContext: o }, e), this.mergeCache) : r.add(e, this.mergeCache));
            } for (i = 0; i < t.items.length; i++)
            if (1 !== (e = t.items[i]).alt) {
                if (!e.precedenceFilterSuppressed) {
                    var s = n[e.state.stateNumber] || null;
                    if (null !== s && s.equals(e.context))
                        continue;
                }
                r.add(e, this.mergeCache);
            } return r; }, L.prototype.getReachableTarget = function (t, e) { return t.matches(e, 0, this.atn.maxTokenType) ? t.target : null; }, L.prototype.getPredsForAmbigAlts = function (t, e, n) { for (var i = [], o = 0; o < e.items.length; o++) {
            var s = e.items[o];
            t.contains(s.alt) && (i[s.alt] = E.orContext(i[s.alt] || null, s.semanticContext));
        } var a = 0; for (o = 1; o < n + 1; o++) {
            var c = i[o] || null;
            null === c ? i[o] = E.NONE : c !== E.NONE && (a += 1);
        } return 0 === a && (i = null), this.debug && console.log("getPredsForAmbigAlts result " + r.arrayToString(i)), i; }, L.prototype.getPredicatePredictions = function (t, e) { for (var n = [], r = !1, i = 1; i < e.length; i++) {
            var o = e[i];
            null !== t && t.contains(i) && n.push(new f(o, i)), o !== E.NONE && (r = !0);
        } return r ? n : null; }, L.prototype.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule = function (t, e) { var n = this.splitAccordingToSemanticValidity(t, e), r = n[0], i = n[1], o = this.getAltThatFinishedDecisionEntryRule(r); return o !== a.INVALID_ALT_NUMBER ? o : i.items.length > 0 && (o = this.getAltThatFinishedDecisionEntryRule(i)) !== a.INVALID_ALT_NUMBER ? o : a.INVALID_ALT_NUMBER; }, L.prototype.getAltThatFinishedDecisionEntryRule = function (t) { for (var e = [], n = 0; n < t.items.length; n++) {
            var r = t.items[n];
            (r.reachesIntoOuterContext > 0 || r.state instanceof T && r.context.hasEmptyPath()) && e.indexOf(r.alt) < 0 && e.push(r.alt);
        } return 0 === e.length ? a.INVALID_ALT_NUMBER : Math.min.apply(null, e); }, L.prototype.splitAccordingToSemanticValidity = function (t, e) { for (var n = new l(t.fullCtx), r = new l(t.fullCtx), i = 0; i < t.items.length; i++) {
            var o = t.items[i];
            if (o.semanticContext !== E.NONE)
                o.semanticContext.evaluate(this.parser, e) ? n.add(o) : r.add(o);
            else
                n.add(o);
        } return [n, r]; }, L.prototype.evalSemanticContext = function (t, e, n) { for (var r = new o, i = 0; i < t.length; i++) {
            var s = t[i];
            if (s.pred !== E.NONE) {
                var a = s.pred.evaluate(this.parser, e);
                if ((this.debug || this.dfa_debug) && console.log("eval pred " + s + "=" + a), a && ((this.debug || this.dfa_debug) && console.log("PREDICT " + s.alt), r.add(s.alt), !n))
                    break;
            }
            else if (r.add(s.alt), !n)
                break;
        } return r; }, L.prototype.closure = function (t, e, n, r, i, o) { this.closureCheckingStopState(t, e, n, r, i, 0, o); }, L.prototype.closureCheckingStopState = function (t, e, n, r, i, o, s) { if ((this.debug || this.debug_closure) && (console.log("closure(" + t.toString(this.parser, !0) + ")"), t.reachesIntoOuterContext > 50))
            throw "problem"; if (t.state instanceof T) {
            if (!t.context.isEmpty()) {
                for (var a = 0; a < t.context.length; a++)
                    if (t.context.getReturnState(a) !== x.EMPTY_RETURN_STATE) {
                        var c = this.atn.states[t.context.getReturnState(a)], l = t.context.getParent(a), h = { state: c, alt: t.alt, context: l, semanticContext: t.semanticContext }, p = new u(h, null);
                        p.reachesIntoOuterContext = t.reachesIntoOuterContext, this.closureCheckingStopState(p, e, n, r, i, o - 1, s);
                    }
                    else {
                        if (i) {
                            e.add(new u({ state: t.state, context: x.EMPTY }, t), this.mergeCache);
                            continue;
                        }
                        this.debug && console.log("FALLING off rule " + this.getRuleName(t.state.ruleIndex)), this.closure_(t, e, n, r, i, o, s);
                    }
                return;
            }
            if (i)
                return void e.add(t, this.mergeCache);
            this.debug && console.log("FALLING off rule " + this.getRuleName(t.state.ruleIndex));
        } this.closure_(t, e, n, r, i, o, s); }, L.prototype.closure_ = function (t, e, n, r, i, o, s) { var a = t.state; a.epsilonOnlyTransitions || e.add(t, this.mergeCache); for (var c = 0; c < a.transitions.length; c++)
            if (0 != c || !this.canDropLoopEntryEdgeInLeftRecursiveRule(t)) {
                var u = a.transitions[c], l = r && !(u instanceof I), h = this.getEpsilonTarget(t, u, l, 0 === o, i, s);
                if (null !== h) {
                    if (!u.isEpsilon && n.add(h) !== h)
                        continue;
                    var p = o;
                    if (t.state instanceof T) {
                        if (n.add(h) !== h)
                            continue;
                        null !== this._dfa && this._dfa.precedenceDfa && u.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (h.precedenceFilterSuppressed = !0), h.reachesIntoOuterContext += 1, e.dipsIntoOuterContext = !0, p -= 1, this.debug && console.log("dips into outer ctx: " + h);
                    }
                    else
                        u instanceof C && p >= 0 && (p += 1);
                    this.closureCheckingStopState(h, e, n, l, i, p, s);
                }
            } }, L.prototype.canDropLoopEntryEdgeInLeftRecursiveRule = function (t) { var e = t.state; if (e.stateType != c.STAR_LOOP_ENTRY)
            return !1; if (e.stateType != c.STAR_LOOP_ENTRY || !e.isPrecedenceDecision || t.context.isEmpty() || t.context.hasEmptyPath())
            return !1; for (var n = t.context.length, r = 0; r < n; r++) {
            if ((s = this.atn.states[t.context.getReturnState(r)]).ruleIndex != e.ruleIndex)
                return !1;
        } var i = e.transitions[0].target.endState.stateNumber, o = this.atn.states[i]; for (r = 0; r < n; r++) {
            var s, a = t.context.getReturnState(r);
            if (1 != (s = this.atn.states[a]).transitions.length || !s.transitions[0].isEpsilon)
                return !1;
            var u = s.transitions[0].target;
            if ((s.stateType != c.BLOCK_END || u != e) && (s != o && u != o && (u.stateType != c.BLOCK_END || 1 != u.transitions.length || !u.transitions[0].isEpsilon || u.transitions[0].target != e)))
                return !1;
        } return !0; }, L.prototype.getRuleName = function (t) { return null !== this.parser && t >= 0 ? this.parser.ruleNames[t] : "<rule " + t + ">"; }, L.prototype.getEpsilonTarget = function (t, e, n, r, i, o) { switch (e.serializationType) {
            case R.RULE: return this.ruleTransition(t, e);
            case R.PRECEDENCE: return this.precedenceTransition(t, e, n, r, i);
            case R.PREDICATE: return this.predTransition(t, e, n, r, i);
            case R.ACTION: return this.actionTransition(t, e);
            case R.EPSILON: return new u({ state: e.target }, t);
            case R.ATOM:
            case R.RANGE:
            case R.SET: return o && e.matches(h.EOF, 0, 1) ? new u({ state: e.target }, t) : null;
            default: return null;
        } }, L.prototype.actionTransition = function (t, e) { if (this.debug) {
            var n = -1 == e.actionIndex ? 65535 : e.actionIndex;
            console.log("ACTION edge " + e.ruleIndex + ":" + n);
        } return new u({ state: e.target }, t); }, L.prototype.precedenceTransition = function (t, e, n, i, o) { this.debug && (console.log("PRED (collectPredicates=" + n + ") " + e.precedence + ">=_p, ctx dependent=true"), null !== this.parser && console.log("context surrounding pred is " + r.arrayToString(this.parser.getRuleInvocationStack()))); var s = null; if (n && i)
            if (o) {
                var a = this._input.index;
                this._input.seek(this._startIndex);
                var c = e.getPredicate().evaluate(this.parser, this._outerContext);
                this._input.seek(a), c && (s = new u({ state: e.target }, t));
            }
            else {
                var l = E.andContext(t.semanticContext, e.getPredicate());
                s = new u({ state: e.target, semanticContext: l }, t);
            }
        else
            s = new u({ state: e.target }, t); return this.debug && console.log("config from pred transition=" + s), s; }, L.prototype.predTransition = function (t, e, n, i, o) { this.debug && (console.log("PRED (collectPredicates=" + n + ") " + e.ruleIndex + ":" + e.predIndex + ", ctx dependent=" + e.isCtxDependent), null !== this.parser && console.log("context surrounding pred is " + r.arrayToString(this.parser.getRuleInvocationStack()))); var s = null; if (n && (e.isCtxDependent && i || !e.isCtxDependent))
            if (o) {
                var a = this._input.index;
                this._input.seek(this._startIndex);
                var c = e.getPredicate().evaluate(this.parser, this._outerContext);
                this._input.seek(a), c && (s = new u({ state: e.target }, t));
            }
            else {
                var l = E.andContext(t.semanticContext, e.getPredicate());
                s = new u({ state: e.target, semanticContext: l }, t);
            }
        else
            s = new u({ state: e.target }, t); return this.debug && console.log("config from pred transition=" + s), s; }, L.prototype.ruleTransition = function (t, e) { this.debug && console.log("CALL rule " + this.getRuleName(e.target.ruleIndex) + ", ctx=" + t.context); var n = e.followState, r = m.create(t.context, n.stateNumber); return new u({ state: e.target, context: r }, t); }, L.prototype.getConflictingAlts = function (t) { var e = _.getConflictingAltSubsets(t); return _.getAlts(e); }, L.prototype.getConflictingAltsOrUniqueAlt = function (t) { var e = null; return t.uniqueAlt !== a.INVALID_ALT_NUMBER ? (e = new o).add(t.uniqueAlt) : e = t.conflictingAlts, e; }, L.prototype.getTokenName = function (t) { if (t === h.EOF)
            return "EOF"; if (null !== this.parser && null !== this.parser.literalNames) {
            if (!(t >= this.parser.literalNames.length && t >= this.parser.symbolicNames.length))
                return (this.parser.literalNames[t] || this.parser.symbolicNames[t]) + "<" + t + ">";
            console.log(t + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens());
        } return "" + t; }, L.prototype.getLookaheadName = function (t) { return this.getTokenName(t.LA(1)); }, L.prototype.dumpDeadEndConfigs = function (t) { console.log("dead end configs: "); for (var e = t.getDeadEndConfigs(), n = 0; n < e.length; n++) {
            var r = e[n], i = "no edges";
            if (r.state.transitions.length > 0) {
                var o = r.state.transitions[0];
                if (o instanceof AtomTransition)
                    i = "Atom " + this.getTokenName(o.label);
                else if (o instanceof A) {
                    i = (o instanceof v ? "~" : "") + "Set " + o.set;
                }
            }
            console.error(r.toString(this.parser, !0) + ":" + i);
        } }, L.prototype.noViableAlt = function (t, e, n, r) { return new N(this.parser, t, t.get(r), t.LT(1), n, e); }, L.prototype.getUniqueAlt = function (t) { for (var e = a.INVALID_ALT_NUMBER, n = 0; n < t.items.length; n++) {
            var r = t.items[n];
            if (e === a.INVALID_ALT_NUMBER)
                e = r.alt;
            else if (r.alt !== e)
                return a.INVALID_ALT_NUMBER;
        } return e; }, L.prototype.addDFAEdge = function (t, e, n, r) { if (this.debug && console.log("EDGE " + e + " -> " + r + " upon " + this.getTokenName(n)), null === r)
            return null; if (r = this.addDFAState(t, r), null === e || n < -1 || n > this.atn.maxTokenType)
            return r; if (null === e.edges && (e.edges = []), e.edges[n + 1] = r, this.debug) {
            var i = null === this.parser ? null : this.parser.literalNames, o = null === this.parser ? null : this.parser.symbolicNames;
            console.log("DFA=\n" + t.toString(i, o));
        } return r; }, L.prototype.addDFAState = function (t, e) { if (e == d.ERROR)
            return e; var n = t.states.get(e); return null !== n ? n : (e.stateNumber = t.states.length, e.configs.readOnly || (e.configs.optimizeConfigs(this), e.configs.setReadonly(!0)), t.states.add(e), this.debug && console.log("adding new DFA state: " + e), e); }, L.prototype.reportAttemptingFullContext = function (t, e, n, r, i) { if (this.debug || this.retry_debug) {
            var o = new S(r, i + 1);
            console.log("reportAttemptingFullContext decision=" + t.decision + ":" + n + ", input=" + this.parser.getTokenStream().getText(o));
        } null !== this.parser && this.parser.getErrorListenerDispatch().reportAttemptingFullContext(this.parser, t, r, i, e, n); }, L.prototype.reportContextSensitivity = function (t, e, n, r, i) { if (this.debug || this.retry_debug) {
            var o = new S(r, i + 1);
            console.log("reportContextSensitivity decision=" + t.decision + ":" + n + ", input=" + this.parser.getTokenStream().getText(o));
        } null !== this.parser && this.parser.getErrorListenerDispatch().reportContextSensitivity(this.parser, t, r, i, e, n); }, L.prototype.reportAmbiguity = function (t, e, n, r, i, o, s) { if (this.debug || this.retry_debug) {
            var a = new S(n, r + 1);
            console.log("reportAmbiguity " + o + ":" + s + ", input=" + this.parser.getTokenStream().getText(a));
        } null !== this.parser && this.parser.getErrorListenerDispatch().reportAmbiguity(this.parser, t, n, r, i, o, s); }, e.ParserATNSimulator = L; }, function (t, e, n) { var r = n(10).DFAState, i = n(9).ATNConfigSet, o = n(6).getCachedPredictionContext; function s(t, e) { return this.atn = t, this.sharedContextCache = e, this; } s.ERROR = new r(2147483647, new i), s.prototype.getCachedContext = function (t) { if (null === this.sharedContextCache)
            return t; return o(t, this.sharedContextCache, {}); }, e.ATNSimulator = s; }, function (t, e, n) { var r = n(1).Token, i = n(12).ConsoleErrorListener, o = n(12).ProxyErrorListener; function s() { return this._listeners = [i.INSTANCE], this._interp = null, this._stateNumber = -1, this; } s.tokenTypeMapCache = {}, s.ruleIndexMapCache = {}, s.prototype.checkVersion = function (t) { "4.7.1" !== t && console.log("ANTLR runtime and generated code versions disagree: 4.7.1!=" + t); }, s.prototype.addErrorListener = function (t) { this._listeners.push(t); }, s.prototype.removeErrorListeners = function () { this._listeners = []; }, s.prototype.getTokenTypeMap = function () { var t = this.getTokenNames(); if (null === t)
            throw "The current recognizer does not provide a list of token names."; var e = this.tokenTypeMapCache[t]; return void 0 === e && ((e = t.reduce(function (t, e, n) { t[e] = n; })).EOF = r.EOF, this.tokenTypeMapCache[t] = e), e; }, s.prototype.getRuleIndexMap = function () { var t = this.ruleNames; if (null === t)
            throw "The current recognizer does not provide a list of rule names."; var e = this.ruleIndexMapCache[t]; return void 0 === e && (e = t.reduce(function (t, e, n) { t[e] = n; }), this.ruleIndexMapCache[t] = e), e; }, s.prototype.getTokenType = function (t) { var e = this.getTokenTypeMap()[t]; return void 0 !== e ? e : r.INVALID_TYPE; }, s.prototype.getErrorHeader = function (t) { return "line " + t.getOffendingToken().line + ":" + t.getOffendingToken().column; }, s.prototype.getTokenErrorDisplay = function (t) { if (null === t)
            return "<no token>"; var e = t.text; return null === e && (e = t.type === r.EOF ? "<EOF>" : "<" + t.type + ">"), "'" + (e = e.replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t")) + "'"; }, s.prototype.getErrorListenerDispatch = function () { return new o(this._listeners); }, s.prototype.sempred = function (t, e, n) { return !0; }, s.prototype.precpred = function (t, e) { return !0; }, Object.defineProperty(s.prototype, "state", { get: function () { return this._stateNumber; }, set: function (t) { this._stateNumber = t; } }), e.Recognizer = s; }, function (t, e) { function n() { } function r(t) { return this.actionType = t, this.isPositionDependent = !1, this; } function i() { return r.call(this, n.SKIP), this; } function o(t) { return r.call(this, n.TYPE), this.type = t, this; } function s(t) { return r.call(this, n.PUSH_MODE), this.mode = t, this; } function a() { return r.call(this, n.POP_MODE), this; } function c() { return r.call(this, n.MORE), this; } function u(t) { return r.call(this, n.MODE), this.mode = t, this; } function l(t, e) { return r.call(this, n.CUSTOM), this.ruleIndex = t, this.actionIndex = e, this.isPositionDependent = !0, this; } function h(t) { return r.call(this, n.CHANNEL), this.channel = t, this; } function p(t, e) { return r.call(this, e.actionType), this.offset = t, this.action = e, this.isPositionDependent = !0, this; } n.CHANNEL = 0, n.CUSTOM = 1, n.MODE = 2, n.MORE = 3, n.POP_MODE = 4, n.PUSH_MODE = 5, n.SKIP = 6, n.TYPE = 7, r.prototype.hashCode = function () { var t = new Hash; return this.updateHashCode(t), t.finish(); }, r.prototype.updateHashCode = function (t) { t.update(this.actionType); }, r.prototype.equals = function (t) { return this === t; }, i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.INSTANCE = new i, i.prototype.execute = function (t) { t.skip(); }, i.prototype.toString = function () { return "skip"; }, o.prototype = Object.create(r.prototype), o.prototype.constructor = o, o.prototype.execute = function (t) { t.type = this.type; }, o.prototype.updateHashCode = function (t) { t.update(this.actionType, this.type); }, o.prototype.equals = function (t) { return this === t || t instanceof o && this.type === t.type; }, o.prototype.toString = function () { return "type(" + this.type + ")"; }, s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype.execute = function (t) { t.pushMode(this.mode); }, s.prototype.updateHashCode = function (t) { t.update(this.actionType, this.mode); }, s.prototype.equals = function (t) { return this === t || t instanceof s && this.mode === t.mode; }, s.prototype.toString = function () { return "pushMode(" + this.mode + ")"; }, a.prototype = Object.create(r.prototype), a.prototype.constructor = a, a.INSTANCE = new a, a.prototype.execute = function (t) { t.popMode(); }, a.prototype.toString = function () { return "popMode"; }, c.prototype = Object.create(r.prototype), c.prototype.constructor = c, c.INSTANCE = new c, c.prototype.execute = function (t) { t.more(); }, c.prototype.toString = function () { return "more"; }, u.prototype = Object.create(r.prototype), u.prototype.constructor = u, u.prototype.execute = function (t) { t.mode(this.mode); }, u.prototype.updateHashCode = function (t) { t.update(this.actionType, this.mode); }, u.prototype.equals = function (t) { return this === t || t instanceof u && this.mode === t.mode; }, u.prototype.toString = function () { return "mode(" + this.mode + ")"; }, l.prototype = Object.create(r.prototype), l.prototype.constructor = l, l.prototype.execute = function (t) { t.action(null, this.ruleIndex, this.actionIndex); }, l.prototype.updateHashCode = function (t) { t.update(this.actionType, this.ruleIndex, this.actionIndex); }, l.prototype.equals = function (t) { return this === t || t instanceof l && (this.ruleIndex === t.ruleIndex && this.actionIndex === t.actionIndex); }, h.prototype = Object.create(r.prototype), h.prototype.constructor = h, h.prototype.execute = function (t) { t._channel = this.channel; }, h.prototype.updateHashCode = function (t) { t.update(this.actionType, this.channel); }, h.prototype.equals = function (t) { return this === t || t instanceof h && this.channel === t.channel; }, h.prototype.toString = function () { return "channel(" + this.channel + ")"; }, p.prototype = Object.create(r.prototype), p.prototype.constructor = p, p.prototype.execute = function (t) { this.action.execute(t); }, p.prototype.updateHashCode = function (t) { t.update(this.actionType, this.offset, this.action); }, p.prototype.equals = function (t) { return this === t || t instanceof p && (this.offset === t.offset && this.action === t.action); }, e.LexerActionType = n, e.LexerSkipAction = i, e.LexerChannelAction = h, e.LexerCustomAction = l, e.LexerIndexedCustomAction = p, e.LexerMoreAction = c, e.LexerTypeAction = o, e.LexerPushModeAction = s, e.LexerPopModeAction = a, e.LexerModeAction = u; }, function (t, e) { function n(t) { return void 0 === t && (t = null), this.readOnly = !1, this.verifyATN = null === t || t.verifyATN, this.generateRuleBypassTransitions = null !== t && t.generateRuleBypassTransitions, this; } n.defaultOptions = new n, n.defaultOptions.readOnly = !0, e.ATNDeserializationOptions = n; }, function (t, e, n) { var r = n(1).Token, i = n(8).ATN, o = n(52).ATNType, s = n(4), a = s.ATNState, c = s.BasicState, u = s.DecisionState, l = s.BlockStartState, h = s.BlockEndState, p = s.LoopEndState, f = s.RuleStartState, d = s.RuleStopState, _ = s.TokensStartState, y = s.PlusLoopbackState, E = s.StarLoopbackState, T = s.StarLoopEntryState, x = s.PlusBlockStartState, S = s.StarBlockStartState, g = s.BasicBlockStartState, R = n(7), A = R.Transition, v = R.AtomTransition, C = R.SetTransition, I = R.NotSetTransition, N = R.RuleTransition, m = R.RangeTransition, O = R.ActionTransition, L = R.EpsilonTransition, P = R.WildcardTransition, b = R.PredicateTransition, k = R.PrecedencePredicateTransition, w = n(2).IntervalSet, D = (n(2).Interval, n(31).ATNDeserializationOptions), U = n(30), F = U.LexerActionType, H = U.LexerSkipAction, M = U.LexerChannelAction, B = U.LexerCustomAction, j = U.LexerMoreAction, G = U.LexerTypeAction, K = U.LexerPushModeAction, V = U.LexerPopModeAction, Y = U.LexerModeAction, q = "59627784-3BE5-417A-B9EB-8131A7286089", W = ["AADB8D7E-AEEF-4415-AD2B-8204D6CF042E", q]; function z(t, e) { var n = []; return n[t - 1] = e, n.map(function (t) { return e; }); } function Q(t) { return void 0 !== t && null !== t || (t = D.defaultOptions), this.deserializationOptions = t, this.stateFactories = null, this.actionFactories = null, this; } Q.prototype.isFeatureSupported = function (t, e) { var n = W.indexOf(t); return !(n < 0) && W.indexOf(e) >= n; }, Q.prototype.deserialize = function (t) { this.reset(t), this.checkVersion(), this.checkUUID(); var e = this.readATN(); this.readStates(e), this.readRules(e), this.readModes(e); var n = []; return this.readSets(e, n, this.readInt.bind(this)), this.isFeatureSupported(q, this.uuid) && this.readSets(e, n, this.readInt32.bind(this)), this.readEdges(e, n), this.readDecisions(e), this.readLexerActions(e), this.markPrecedenceDecisions(e), this.verifyATN(e), this.deserializationOptions.generateRuleBypassTransitions && e.grammarType === o.PARSER && (this.generateRuleBypassTransitions(e), this.verifyATN(e)), e; }, Q.prototype.reset = function (t) { var e = t.split("").map(function (t) { var e = t.charCodeAt(0); return e > 1 ? e - 2 : e + 65533; }); e[0] = t.charCodeAt(0), this.data = e, this.pos = 0; }, Q.prototype.checkVersion = function () { var t = this.readInt(); if (3 !== t)
            throw "Could not deserialize ATN with version " + t + " (expected 3)."; }, Q.prototype.checkUUID = function () { var t = this.readUUID(); if (W.indexOf(t) < 0)
            throw "59627784-3BE5-417A-B9EB-8131A7286089"; this.uuid = t; }, Q.prototype.readATN = function () { var t = this.readInt(), e = this.readInt(); return new i(t, e); }, Q.prototype.readStates = function (t) { for (var e, n, r, i = [], o = [], s = this.readInt(), c = 0; c < s; c++) {
            var u = this.readInt();
            if (u !== a.INVALID_TYPE) {
                var h = this.readInt();
                65535 === h && (h = -1);
                var p = this.stateFactory(u, h);
                if (u === a.LOOP_END) {
                    var f = this.readInt();
                    i.push([p, f]);
                }
                else if (p instanceof l) {
                    var d = this.readInt();
                    o.push([p, d]);
                }
                t.addState(p);
            }
            else
                t.addState(null);
        } for (e = 0; e < i.length; e++)
            (n = i[e])[0].loopBackState = t.states[n[1]]; for (e = 0; e < o.length; e++)
            (n = o[e])[0].endState = t.states[n[1]]; var _ = this.readInt(); for (e = 0; e < _; e++)
            r = this.readInt(), t.states[r].nonGreedy = !0; var y = this.readInt(); for (e = 0; e < y; e++)
            r = this.readInt(), t.states[r].isPrecedenceRule = !0; }, Q.prototype.readRules = function (t) { var e, n = this.readInt(); for (t.grammarType === o.LEXER && (t.ruleToTokenType = z(n, 0)), t.ruleToStartState = z(n, 0), e = 0; e < n; e++) {
            var i = this.readInt(), s = t.states[i];
            if (t.ruleToStartState[e] = s, t.grammarType === o.LEXER) {
                var a = this.readInt();
                65535 === a && (a = r.EOF), t.ruleToTokenType[e] = a;
            }
        } for (t.ruleToStopState = z(n, 0), e = 0; e < t.states.length; e++) {
            var c = t.states[e];
            c instanceof d && (t.ruleToStopState[c.ruleIndex] = c, t.ruleToStartState[c.ruleIndex].stopState = c);
        } }, Q.prototype.readModes = function (t) { for (var e = this.readInt(), n = 0; n < e; n++) {
            var r = this.readInt();
            t.modeToStartState.push(t.states[r]);
        } }, Q.prototype.readSets = function (t, e, n) { for (var r = this.readInt(), i = 0; i < r; i++) {
            var o = new w;
            e.push(o);
            var s = this.readInt();
            0 !== this.readInt() && o.addOne(-1);
            for (var a = 0; a < s; a++) {
                var c = n(), u = n();
                o.addRange(c, u);
            }
        } }, Q.prototype.readEdges = function (t, e) { var n, r, i, o, s, a = this.readInt(); for (n = 0; n < a; n++) {
            var c = this.readInt(), u = this.readInt(), h = this.readInt(), p = this.readInt(), f = this.readInt(), d = this.readInt();
            o = this.edgeFactory(t, h, c, u, p, f, d, e), t.states[c].addTransition(o);
        } for (n = 0; n < t.states.length; n++)
            for (i = t.states[n], r = 0; r < i.transitions.length; r++) {
                var _ = i.transitions[r];
                if (_ instanceof N) {
                    var S = -1;
                    t.ruleToStartState[_.target.ruleIndex].isPrecedenceRule && 0 === _.precedence && (S = _.target.ruleIndex), o = new L(_.followState, S), t.ruleToStopState[_.target.ruleIndex].addTransition(o);
                }
            } for (n = 0; n < t.states.length; n++) {
            if ((i = t.states[n]) instanceof l) {
                if (null === i.endState)
                    throw "IllegalState";
                if (null !== i.endState.startState)
                    throw "IllegalState";
                i.endState.startState = i;
            }
            if (i instanceof y)
                for (r = 0; r < i.transitions.length; r++)
                    (s = i.transitions[r].target) instanceof x && (s.loopBackState = i);
            else if (i instanceof E)
                for (r = 0; r < i.transitions.length; r++)
                    (s = i.transitions[r].target) instanceof T && (s.loopBackState = i);
        } }, Q.prototype.readDecisions = function (t) { for (var e = this.readInt(), n = 0; n < e; n++) {
            var r = this.readInt(), i = t.states[r];
            t.decisionToState.push(i), i.decision = n;
        } }, Q.prototype.readLexerActions = function (t) { if (t.grammarType === o.LEXER) {
            var e = this.readInt();
            t.lexerActions = z(e, null);
            for (var n = 0; n < e; n++) {
                var r = this.readInt(), i = this.readInt();
                65535 === i && (i = -1);
                var s = this.readInt();
                65535 === s && (s = -1);
                var a = this.lexerActionFactory(r, i, s);
                t.lexerActions[n] = a;
            }
        } }, Q.prototype.generateRuleBypassTransitions = function (t) { var e, n = t.ruleToStartState.length; for (e = 0; e < n; e++)
            t.ruleToTokenType[e] = t.maxTokenType + e + 1; for (e = 0; e < n; e++)
            this.generateRuleBypassTransition(t, e); }, Q.prototype.generateRuleBypassTransition = function (t, e) { var n, r, i = new g; i.ruleIndex = e, t.addState(i); var o = new h; o.ruleIndex = e, t.addState(o), i.endState = o, t.defineDecisionState(i), o.startState = i; var s = null, a = null; if (t.ruleToStartState[e].isPrecedenceRule) {
            for (a = null, n = 0; n < t.states.length; n++)
                if (r = t.states[n], this.stateIsEndStateFor(r, e)) {
                    a = r, s = r.loopBackState.transitions[0];
                    break;
                }
            if (null === s)
                throw "Couldn't identify final state of the precedence rule prefix section.";
        }
        else
            a = t.ruleToStopState[e]; for (n = 0; n < t.states.length; n++) {
            r = t.states[n];
            for (var u = 0; u < r.transitions.length; u++) {
                var l = r.transitions[u];
                l !== s && (l.target === a && (l.target = o));
            }
        } for (var p = t.ruleToStartState[e], f = p.transitions.length; f > 0;)
            i.addTransition(p.transitions[f - 1]), p.transitions = p.transitions.slice(-1); t.ruleToStartState[e].addTransition(new L(i)), o.addTransition(new L(a)); var d = new c; t.addState(d), d.addTransition(new v(o, t.ruleToTokenType[e])), i.addTransition(new L(d)); }, Q.prototype.stateIsEndStateFor = function (t, e) { if (t.ruleIndex !== e)
            return null; if (!(t instanceof T))
            return null; var n = t.transitions[t.transitions.length - 1].target; return n instanceof p && n.epsilonOnlyTransitions && n.transitions[0].target instanceof d ? t : null; }, Q.prototype.markPrecedenceDecisions = function (t) { for (var e = 0; e < t.states.length; e++) {
            var n = t.states[e];
            if (n instanceof T && t.ruleToStartState[n.ruleIndex].isPrecedenceRule) {
                var r = n.transitions[n.transitions.length - 1].target;
                r instanceof p && r.epsilonOnlyTransitions && r.transitions[0].target instanceof d && (n.isPrecedenceDecision = !0);
            }
        } }, Q.prototype.verifyATN = function (t) { if (this.deserializationOptions.verifyATN)
            for (var e = 0; e < t.states.length; e++) {
                var n = t.states[e];
                if (null !== n)
                    if (this.checkCondition(n.epsilonOnlyTransitions || n.transitions.length <= 1), n instanceof x)
                        this.checkCondition(null !== n.loopBackState);
                    else if (n instanceof T)
                        if (this.checkCondition(null !== n.loopBackState), this.checkCondition(2 === n.transitions.length), n.transitions[0].target instanceof S)
                            this.checkCondition(n.transitions[1].target instanceof p), this.checkCondition(!n.nonGreedy);
                        else {
                            if (!(n.transitions[0].target instanceof p))
                                throw "IllegalState";
                            this.checkCondition(n.transitions[1].target instanceof S), this.checkCondition(n.nonGreedy);
                        }
                    else
                        n instanceof E ? (this.checkCondition(1 === n.transitions.length), this.checkCondition(n.transitions[0].target instanceof T)) : n instanceof p ? this.checkCondition(null !== n.loopBackState) : n instanceof f ? this.checkCondition(null !== n.stopState) : n instanceof l ? this.checkCondition(null !== n.endState) : n instanceof h ? this.checkCondition(null !== n.startState) : n instanceof u ? this.checkCondition(n.transitions.length <= 1 || n.decision >= 0) : this.checkCondition(n.transitions.length <= 1 || n instanceof d);
            } }, Q.prototype.checkCondition = function (t, e) { if (!t)
            throw void 0 !== e && null !== e || (e = "IllegalState"), e; }, Q.prototype.readInt = function () { return this.data[this.pos++]; }, Q.prototype.readInt32 = function () { return this.readInt() | this.readInt() << 16; }, Q.prototype.readLong = function () { return 4294967295 & this.readInt32() | this.readInt32() << 32; }; var X = function () { for (var t = [], e = 0; e < 256; e++)
            t[e] = (e + 256).toString(16).substr(1).toUpperCase(); return t; }(); Q.prototype.readUUID = function () { for (var t = [], e = 7; e >= 0; e--) {
            var n = this.readInt();
            t[2 * e + 1] = 255 & n, t[2 * e] = n >> 8 & 255;
        } return X[t[0]] + X[t[1]] + X[t[2]] + X[t[3]] + "-" + X[t[4]] + X[t[5]] + "-" + X[t[6]] + X[t[7]] + "-" + X[t[8]] + X[t[9]] + "-" + X[t[10]] + X[t[11]] + X[t[12]] + X[t[13]] + X[t[14]] + X[t[15]]; }, Q.prototype.edgeFactory = function (t, e, n, i, o, s, a, c) { var u = t.states[i]; switch (e) {
            case A.EPSILON: return new L(u);
            case A.RANGE: return new m(u, 0 !== a ? r.EOF : o, s);
            case A.RULE: return new N(t.states[o], s, a, u);
            case A.PREDICATE: return new b(u, o, s, 0 !== a);
            case A.PRECEDENCE: return new k(u, o);
            case A.ATOM: return new v(u, 0 !== a ? r.EOF : o);
            case A.ACTION: return new O(u, o, s, 0 !== a);
            case A.SET: return new C(u, c[o]);
            case A.NOT_SET: return new I(u, c[o]);
            case A.WILDCARD: return new P(u);
            default: throw "The specified transition type: " + e + " is not valid.";
        } }, Q.prototype.stateFactory = function (t, e) { if (null === this.stateFactories) {
            var n = [];
            n[a.INVALID_TYPE] = null, n[a.BASIC] = function () { return new c; }, n[a.RULE_START] = function () { return new f; }, n[a.BLOCK_START] = function () { return new g; }, n[a.PLUS_BLOCK_START] = function () { return new x; }, n[a.STAR_BLOCK_START] = function () { return new S; }, n[a.TOKEN_START] = function () { return new _; }, n[a.RULE_STOP] = function () { return new d; }, n[a.BLOCK_END] = function () { return new h; }, n[a.STAR_LOOP_BACK] = function () { return new E; }, n[a.STAR_LOOP_ENTRY] = function () { return new T; }, n[a.PLUS_LOOP_BACK] = function () { return new y; }, n[a.LOOP_END] = function () { return new p; }, this.stateFactories = n;
        } if (t > this.stateFactories.length || null === this.stateFactories[t])
            throw "The specified state type " + t + " is not valid."; var r = this.stateFactories[t](); if (null !== r)
            return r.ruleIndex = e, r; }, Q.prototype.lexerActionFactory = function (t, e, n) { if (null === this.actionFactories) {
            var r = [];
            r[F.CHANNEL] = function (t, e) { return new M(t); }, r[F.CUSTOM] = function (t, e) { return new B(t, e); }, r[F.MODE] = function (t, e) { return new Y(t); }, r[F.MORE] = function (t, e) { return j.INSTANCE; }, r[F.POP_MODE] = function (t, e) { return V.INSTANCE; }, r[F.PUSH_MODE] = function (t, e) { return new K(t); }, r[F.SKIP] = function (t, e) { return H.INSTANCE; }, r[F.TYPE] = function (t, e) { return new G(t); }, this.actionFactories = r;
        } if (t > this.actionFactories.length || null === this.actionFactories[t])
            throw "The specified lexer action type " + t + " is not valid."; return this.actionFactories[t](e, n); }, e.ATNDeserializer = Q; }, function (t, e, n) { var r = n(0), i = n(1).Token, o = (n(5).RuleNode, n(5).ErrorNode), s = n(5).TerminalNode, a = n(19).ParserRuleContext, c = n(16).RuleContext, u = n(8).INVALID_ALT_NUMBER; function l() { } l.toStringTree = function (t, e, n) { e = e || null, null !== (n = n || null) && (e = n.ruleNames); var i = l.getNodeText(t, e); i = r.escapeWhitespace(i, !1); var o = t.getChildCount(); if (0 === o)
            return i; var s = "(" + i + " "; o > 0 && (i = l.toStringTree(t.getChild(0), e), s = s.concat(i)); for (var a = 1; a < o; a++)
            i = l.toStringTree(t.getChild(a), e), s = s.concat(" " + i); return s = s.concat(")"); }, l.getNodeText = function (t, e, n) { if (e = e || null, null !== (n = n || null) && (e = n.ruleNames), null !== e) {
            if (t instanceof c) {
                var r = t.getAltNumber();
                return r != u ? e[t.ruleIndex] + ":" + r : e[t.ruleIndex];
            }
            if (t instanceof o)
                return t.toString();
            if (t instanceof s && null !== t.symbol)
                return t.symbol.text;
        } var a = t.getPayload(); return a instanceof i ? a.text : t.getPayload().toString(); }, l.getChildren = function (t) { for (var e = [], n = 0; n < t.getChildCount(); n++)
            e.push(t.getChild(n)); return e; }, l.getAncestors = function (t) { var e = []; for (t = t.getParent(); null !== t;)
            e = [t].concat(e), t = t.getParent(); return e; }, l.findAllTokenNodes = function (t, e) { return l.findAllNodes(t, e, !0); }, l.findAllRuleNodes = function (t, e) { return l.findAllNodes(t, e, !1); }, l.findAllNodes = function (t, e, n) { var r = []; return l._findAllNodes(t, e, n, r), r; }, l._findAllNodes = function (t, e, n, r) { n && t instanceof s ? t.symbol.type === e && r.push(t) : !n && t instanceof a && t.ruleIndex === e && r.push(t); for (var i = 0; i < t.getChildCount(); i++)
            l._findAllNodes(t.getChild(i), e, n, r); }, l.descendants = function (t) { for (var e = [t], n = 0; n < t.getChildCount(); n++)
            e = e.concat(l.descendants(t.getChild(n))); return e; }, e.Trees = l; }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = function () { function t() { } return t.KeywordTypeHintPrefix = "KeywordTypeHint:", t.keywordsRegisteredForCompletion = { AND: "AND", ARRAY: "ARRAY", AS: "AS", ASC: "ASC", BETWEEN: "BETWEEN", BY: "BY", CASE: "CASE", CAST: "CAST", CONVERT: "CONVERT", CROSS: "CROSS", DESC: "DESC", DISTINCT: "DISTINCT", ELSE: "ELSE", END: "END", ESCAPE: "ESCAPE", EXISTS: "EXISTS", K_false: "false", FOR: "FOR", FROM: "FROM", GROUP: "GROUP", HAVING: "HAVING", IN: "IN", INNER: "INNER", INSERT: "INSERT", INTO: "INTO", IS: "IS", JOIN: "JOIN", LEFT: "LEFT", LIKE: "LIKE", LIMIT: "LIMIT", NOT: "NOT", K_null: "null", OFFSET: "OFFSET", ON: "ON", OR: "OR", ORDER: "ORDER", OUTER: "OUTER", OVER: "OVER", RIGHT: "RIGHT", SELECT: "SELECT", SET: "SET", THEN: "THEN", TOP: "TOP", K_true: "true", K_udf: "udf", K_undefined: "undefined", UPDATE: "UPDATE", VALUE: "VALUE", WHEN: "WHEN", WHERE: "WHERE", WITH: "WITH", Infinity: "Infinity", NaN: "NaN", ABS: "ABS", ACOS: "ACOS", ARRAY_CONCAT: "ARRAY_CONCAT", ARRAY_CONTAINS: "ARRAY_CONTAINS", ARRAY_LENGTH: "ARRAY_LENGTH", ARRAY_SLICE: "ARRAY_SLICE", ASIN: "ASIN", ATAN: "ATAN", ATN2: "ATN2", AVG: "AVG", CEILING: "CEILING", CONCAT: "CONCAT", CONTAINS: "CONTAINS", COS: "COS", COT: "COT", COUNT: "COUNT", DEGREES: "DEGREES", ENDSWITH: "ENDSWITH", EXP: "EXP", FLOOR: "FLOOR", INDEX_OF: "INDEX_OF", S_ARRAY: "S_ARRAY", IS_BOOL: "IS_BOOL", IS_DEFINED: "IS_DEFINED", IS_FINITE_NUMBER: "IS_FINITE_NUMBER", IS_NULL: "IS_NULL", IS_NUMBER: "IS_NUMBER", IS_OBJECT: "IS_OBJECT", IS_PRIMITIVE: "IS_PRIMITIVE", IS_STRING: "IS_STRING", LENGTH: "LENGTH", LOG10: "LOG10", LOWER: "LOWER", LTRIM: "LTRIM", MAX: "MAX", MIN: "MIN", PI: "PI", POWER: "POWER", RADIANS: "RADIANS", RAND: "RAND", REPLACE: "REPLACE", REPLICATE: "REPLICATE", REVERSE: "REVERSE", ROUND: "ROUND", RTRIM: "RTRIM", SIGN: "SIGN", SIN: "SIN", SQRT: "SQRT", SQUARE: "SQUARE", ST_DISTANCE: "ST_DISTANCE", ST_INTERSECTS: "ST_INTERSECTS", ST_ISVALID: "ST_ISVALID", ST_ISVALIDDETAILED: "ST_ISVALIDDETAILED", ST_WITHIN: "ST_WITHIN", STARTSWITH: "STARTSWITH", SUBSTRING: "SUBSTRING", SUM: "SUM", TAN: "TAN", TRUNC: "TRUNC", UPPER: "UPPER", ID: t.KeywordTypeHintPrefix + "ID", NUMBER: t.KeywordTypeHintPrefix + "NUMBER" }, t; }();
            e.CosmosDBSqlKeywords = r;
        }, function (t, e, n) { var r = n(20), i = ["悋Ꜫ脳맭䅼㯧瞆奤", "ǽ\t\t", "\t\t\t\t", "\b\t\b\t\t\t\n\t\n\v\t\v\f\t\f", "\r\t\r\t\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t", "\t\t\t\t", '\t \t !\t!"\t"#\t#', "$\t$%\t%&\t&'\t'(\t()\t)*\t*", "+\t+,\t,-\t-.\t./\t/", "c\n", "f\ni\n", "m\n", "", "\b\b\b\b\t\t\t", "\t\n\t\n\n\n\v\v\v", "\v\v\v\v\n\v\f\v", "\v\v\v\f\f\f\f", "\f\n\f\r\r\r\r\n\r", "¢", "\n\f¥\v", "", "®\n", "¶\n\f¹", "\v", "Â\n", "Ç\n", "Î\n", "", "", "á", "\n\fä\v", "", "î\n\fñ\v", "õ\n", "", "", "ą\n\fĈ\v", "Č\n", "", "Ė\n\fę\v", "", "Ģ\n", "ī\n", "į\n ", "  ĳ\n !!!!ĸ\n!!", "!!!!!!ŀ\n!\f!!Ń\v", '!""""""""', '""""""Œ\n"##', "##########", "##š\n#$$$$$%%", "%%%&&&&&&&ų", "\n&\f&&Ŷ\v&'''''", "'''''''''", "'''''''''", "'''''''''", "'''''Ɯ\n'\f''Ɵ\v", "'(((((((((", "(ƪ\n())))))))", ")))))))))Ƽ\n)", ")))))))))ǆ\n)\f", "))ǉ\v)******", "*****Ǖ\n*+++Ǚ\n", "+++,,,,,,,ǣ", "\n,\f,,Ǧ\v,---Ǫ\n--", "-..../////", "//Ǹ\n/\f//ǻ\v//", "&*26@JLPV\\0\b\n\f", ' "$&(*,.02468:<>@BDFHJLNPRTVXZ\\', "ȕ^`", "j\bp\ns", "\fvy", "", "", "", "­¯", ' Á"Æ', "$Í&Ï", "(å*ç,ò", ".ø0ú", "2þ4ĉ", "6ď8Ě", ":Ĝ<Į", ">Ĳ@ķBő", "DŠFŢ", "HŧJŬ", "LŷNƩ", "PƻRǔ", "TǖVǜXǧ", "Zǭ\\Ǳ", "^__", "`bac\nba", "bccedf", "\fedeff", "hgi\bhg", "hiijl", "*km\blklm", "mnno\to", "pq-qrx", "r\tsttu", "u\vvw4wx", "> x\ryz&z{\b", "{||}", "\v~\n", "~}~", "", "2> ", "\b\v", "\f", "\fz", "\f", "", "", "> ", "> \r", "", "w", "w", "", "\b", "£", "\f z", " ¢¡", "¢¥£¡", "£¤¤", "¥£¦®> §", "¨> ¨©©®", "ª«> «¬", "\r¬®­¦", "­§­ª", "®¯°\b", "°± ±·", "²³\f³´", "´¶ µ²", "¶¹·µ", "·¸¸", "¹·ºÂ", '$»¼$¼½"', "½Â¾¿w", "¿ÀÀÂ$", "ÁºÁ»", "Á¾Â!", "ÃÇwÄÅ", "ÅÇwÆÃ", "ÆÄÇ#", "ÈÎ&ÉÊ", "ÊËËÌ", "ÌÎÍÈ", "ÍÉÎ%", "ÏÐ\bÐÑ(", "ÑâÒÓ\f", "ÓÔ{Ôá(Õ", "Ö\fÖ××", "ØxØáÙ", "Ú\fÚÛÛ", "ÜÜÝ(Ý", "ÞÞßß", "áàÒà", "ÕàÙá", "äâàâ", "ãã'ä", "âåæwæ", ")çè\bèé", "> éïêë\f", "ëìzìî> ", "íêîñ", "ïíïð", "ð+ñï", "òôóõ*", "ôóôõ", "õöö÷", "÷-øùwù", "/úû.ûü", "üý> ý1", "þÿ\bÿĀ0", "ĀĆāĂ\f", "Ăăzăą0", "ĄāąĈ", "ĆĄĆć", "ć3ĈĆ", "ĉċĊČ2", "ċĊċČ", "ČččĎ", "Ď5ďĐ\bĐ", "đ> đėĒē", "\fēĔzĔĖ", "> ĕĒĖę", "ėĕėĘ", "Ę7ęė", "Ěěwě9", "Ĝĝwĝ;", "Ğğ8ğġ", "ĠĢ6ġĠ", "ġĢĢģ", "ģĤĤį", "ĥĦ/Ħħ{ħ", "Ĩ:ĨĪĩ", "ī6ĪĩĪ", "īīĬĬ", "ĭĭįĮ", "ĞĮĥį", "=İĳ@!ıĳ", 'B"ĲİĲı', "ĳ?Ĵĵ\b!", "ĵĸL'ĶĸD#ķĴ", "ķĶĸŁ", "Ĺĺ\fĺĻ", "Ļŀ@!ļĽ\f", "Ľľ%ľŀ@!Ŀ", "ĹĿļŀ", "ŃŁĿŁ", "łłAŃ", "ŁńŅL'Ņņ", "ņŇL'Ňň", "ňŉL'ŉŒ", "ŊŋL'ŋŌ!", "ŌōōŎL'Ŏ", "ŏŏŐL'ŐŒ", "őńőŊ", "ŒCœŔ", "L'ŔŕŕŖ", "ŖŗJ&ŗŘ", "ŘšřŚL", "'Śś!śŜ", "ŜŝŝŞJ&", "Şşşš", "ŠœŠř", "šEŢţ", "ţŤŤť", "ťŦŦG", "ŧŨŨũ", "ũŪŪū", "ūIŬŭ\b&ŭŮ", "> ŮŴůŰ\f", "Űűzűų> ", "ŲůųŶ", "ŴŲŴŵ", "ŵKŶŴ", "ŷŸ\b'ŸŹN(ŹƝ", "źŻ\f\rŻż|", "żƜL'Žž\f\fž", "ſ}ſƜL'\rƀƁ\f\v", "ƁƂ~ƂƜL'\fƃ", "Ƅ\f\nƄƅƅƜ", "L'\vƆƇ\f\tƇƈ", "ƈƜL'\nƉƊ\f\bƊ", "ƋƋƜL'\tƌƍ\f", "ƍƎƎƜ", "L'\bƏƐ\fƐƑ", "ƑƜL'ƒƓ\fƓ", "ƔƔƜL'ƕƖ", "\fƖƗƗƜ", "L'Ƙƙ\fƙƚ", "ƚƜL'ƛź", "ƛŽƛƀ", "ƛƃƛƆ", "ƛƉƛƌ", "ƛƏƛƒ", "ƛƕƛƘ", "ƜƟƝƛ", "ƝƞƞM", "ƟƝƠƪP)", "ơƢ}ƢƪN(ƣƤ", "|ƤƪN(ƥƦ", "ƦƪN(Ƨƨ!", "ƨƪN(ƩƠƩ", "ơƩƣƩ", "ƥƩƧƪ", "OƫƬ\b)ƬƼ", 'R*ƭƼ"ƮƼ,', "ƯƼ4ưƼ<Ʊ", "ƲƲƳ> Ƴƴ", "ƴƼƵƶ", "ƶƷƷƸ", "ƸƼƹƼ", "F$ƺƼH%ƻƫ", "ƻƭƻƮ", "ƻƯƻư", "ƻƱƻƵ", "ƻƹƻƺ", "ƼǇƽƾ\f", "ƾƿ{ƿǆ.", "ǀǁ\fǁǂ", "ǂǃ> ǃǄǄ", "ǆǅƽǅ", "ǀǆǉǇ", "ǅǇǈǈ", "QǉǇǊ", 'Ǖ0ǋǕ"ǌǕ', ".ǍǕǎǕ", "xǏǐǐǑ", "wǑǕǒǕ", "T+ǓǕX-ǔǊ", "ǔǋǔǌ", "ǔǍǔǎ", "ǔǏǔǒ", "ǔǓǕS", "ǖǘǗǙV,", "ǘǗǘǙ", "ǙǚǚǛ", "ǛUǜǝ\b,ǝǞ", "R*ǞǤǟǠ\f", "ǠǡzǡǣR*", "ǢǟǣǦ", "ǤǢǤǥ", "ǥWǦǤ", "ǧǩǨǪ\\/ǩ", "ǨǩǪǪ", "ǫǫǬǬ", "YǭǮ.Ǯǯ", "ǯǰR*ǰ[", "Ǳǲ\b/ǲǳZ.ǳ", "ǹǴǵ\fǵ", "ǶzǶǸZ.ǷǴ", "ǸǻǹǷ", "ǹǺǺ]", "ǻǹ,behl", "£­·ÁÆÍàâïô", "ĆċėġĪĮĲķĿŁőŠ", "ŴƛƝƩƻǅǇǔǘǤǩǹ"].join(""), o = (new r.atn.ATNDeserializer).deserialize(i), s = o.decisionToState.map(function (t, e) { return new r.dfa.DFA(t, e); }), a = new r.PredictionContextCache, c = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "'false'", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "'null'", null, null, null, null, null, null, null, null, null, null, null, "'true'", "'udf'", "'undefined'", null, null, null, null, null, "'Infinity'", "'NaN'", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "'C'", "','", "'.'", "'+'", "'-'", "'*'", "'/'", "'%'", "':'", "'='", "'>'", "'<'", "'~'", "'|'", "'&'", "'^'", "'?'", "'{'", "'}'", "'['", "']'", "'('", "')'"], u = [null, "AND", "ARRAY", "AS", "ASC", "BETWEEN", "BY", "CASE", "CAST", "CONVERT", "CROSS", "DESC", "DISTINCT", "ELSE", "END", "ESCAPE", "EXISTS", "K_false", "FOR", "FROM", "GROUP", "HAVING", "IN", "INNER", "INSERT", "INTO", "IS", "JOIN", "LEFT", "LIKE", "LIMIT", "NOT", "K_null", "OFFSET", "ON", "OR", "ORDER", "OUTER", "OVER", "RIGHT", "SELECT", "SET", "THEN", "TOP", "K_true", "K_udf", "K_undefined", "UPDATE", "VALUE", "WHEN", "WHERE", "WITH", "Infinity", "NaN", "ABS", "ACOS", "ARRAY_CONCAT", "ARRAY_CONTAINS", "ARRAY_LENGTH", "ARRAY_SLICE", "ASIN", "ATAN", "ATN2", "AVG", "CEILING", "CONCAT", "CONTAINS", "COS", "COT", "COUNT", "DEGREES", "ENDSWITH", "EXP", "FLOOR", "INDEX_OF", "S_ARRAY", "IS_BOOL", "IS_DEFINED", "IS_FINITE_NUMBER", "IS_NULL", "IS_NUMBER", "IS_OBJECT", "IS_PRIMITIVE", "IS_STRING", "LENGTH", "LOG", "LOG10", "LOWER", "LTRIM", "MAX", "MIN", "PI", "POWER", "RADIANS", "RAND", "REPLACE", "REPLICATE", "REVERSE", "ROUND", "RTRIM", "SIGN", "SIN", "SQRT", "SQUARE", "ST_DISTANCE", "ST_INTERSECTS", "ST_ISVALID", "ST_ISVALIDDETAILED", "ST_WITHIN", "STARTSWITH", "SUBSTRING", "SUM", "TAN", "TRUNC", "UPPER", "SPACE", "COMMENTS", "ID", "NUMBER", "COL", "COMMA", "DOT", "ADD", "SUB", "MUL", "DIV", "MOD", "COLON", "EQUAL", "GREATER", "LESS", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "QUEST", "LEFT_BRACE", "RIGHT_BRACE", "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS", "QUOTE"], l = ["root", "sql_query", "select_clause", "top_spec", "from_clause", "where_clause", "orderby_clause", "selection", "select_value_spec", "select_list", "select_item", "select_alias", "orderby_item_list", "orderby_item", "from_specification", "primary_from_specification", "input_alias", "input_collection", "relative_path", "relative_path_segment", "array_item_list", "array_create_expression", "property_name", "object_property", "object_property_list", "object_create_expression", "function_arg_list", "sys_function_name", "udf_function_name", "function_call_expression", "scalar_expression", "logical_scalar_expression", "between_scalar_expression", "in_scalar_expression", "exists_scalar_expression", "array_scalar_expression", "in_scalar_expression_item_list", "binary_expression", "unary_expression", "primary_expression", "constant", "array_constant", "array_constant_list", "object_constant", "object_constant_item", "object_constant_items"]; function h(t) { return r.Parser.call(this, t), this._interp = new r.atn.ParserATNSimulator(this, o, s, a), this.ruleNames = l, this.literalNames = c, this.symbolicNames = u, this; } function p(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_root, this; } function f(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_sql_query, this; } function d(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_select_clause, this; } function _(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_top_spec, this; } function y(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_from_clause, this; } function E(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_where_clause, this; } function T(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_orderby_clause, this; } function x(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_selection, this; } function S(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_select_value_spec, this; } function g(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_select_list, this; } function R(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_select_item, this; } function A(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_select_alias, this; } function v(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_orderby_item_list, this; } function C(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_orderby_item, this; } function I(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_from_specification, this; } function N(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_primary_from_specification, this; } function m(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_input_alias, this; } function O(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_input_collection, this; } function L(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_relative_path, this; } function P(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_relative_path_segment, this; } function b(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_array_item_list, this; } function k(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_array_create_expression, this; } function w(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_property_name, this; } function D(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_object_property, this; } function U(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_object_property_list, this; } function F(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_object_create_expression, this; } function H(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_function_arg_list, this; } function M(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_sys_function_name, this; } function B(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_udf_function_name, this; } function j(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_function_call_expression, this; } function G(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_scalar_expression, this; } function K(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_logical_scalar_expression, this; } function V(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_between_scalar_expression, this; } function Y(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_in_scalar_expression, this; } function q(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_exists_scalar_expression, this; } function W(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_array_scalar_expression, this; } function z(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_in_scalar_expression_item_list, this; } function Q(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_binary_expression, this; } function X(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_unary_expression, this; } function J(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_primary_expression, this; } function $(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_constant, this; } function Z(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_array_constant, this; } function tt(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_array_constant_list, this; } function et(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_object_constant, this; } function nt(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_object_constant_item, this; } function rt(t, e, n) { return void 0 === e && (e = null), void 0 !== n && null !== n || (n = -1), r.ParserRuleContext.call(this, e, n), this.parser = t, this.ruleIndex = h.RULE_object_constant_items, this; } h.prototype = Object.create(r.Parser.prototype), h.prototype.constructor = h, Object.defineProperty(h.prototype, "atn", { get: function () { return o; } }), h.EOF = r.Token.EOF, h.AND = 1, h.ARRAY = 2, h.AS = 3, h.ASC = 4, h.BETWEEN = 5, h.BY = 6, h.CASE = 7, h.CAST = 8, h.CONVERT = 9, h.CROSS = 10, h.DESC = 11, h.DISTINCT = 12, h.ELSE = 13, h.END = 14, h.ESCAPE = 15, h.EXISTS = 16, h.K_false = 17, h.FOR = 18, h.FROM = 19, h.GROUP = 20, h.HAVING = 21, h.IN = 22, h.INNER = 23, h.INSERT = 24, h.INTO = 25, h.IS = 26, h.JOIN = 27, h.LEFT = 28, h.LIKE = 29, h.LIMIT = 30, h.NOT = 31, h.K_null = 32, h.OFFSET = 33, h.ON = 34, h.OR = 35, h.ORDER = 36, h.OUTER = 37, h.OVER = 38, h.RIGHT = 39, h.SELECT = 40, h.SET = 41, h.THEN = 42, h.TOP = 43, h.K_true = 44, h.K_udf = 45, h.K_undefined = 46, h.UPDATE = 47, h.VALUE = 48, h.WHEN = 49, h.WHERE = 50, h.WITH = 51, h.Infinity = 52, h.NaN = 53, h.ABS = 54, h.ACOS = 55, h.ARRAY_CONCAT = 56, h.ARRAY_CONTAINS = 57, h.ARRAY_LENGTH = 58, h.ARRAY_SLICE = 59, h.ASIN = 60, h.ATAN = 61, h.ATN2 = 62, h.AVG = 63, h.CEILING = 64, h.CONCAT = 65, h.CONTAINS = 66, h.COS = 67, h.COT = 68, h.COUNT = 69, h.DEGREES = 70, h.ENDSWITH = 71, h.EXP = 72, h.FLOOR = 73, h.INDEX_OF = 74, h.S_ARRAY = 75, h.IS_BOOL = 76, h.IS_DEFINED = 77, h.IS_FINITE_NUMBER = 78, h.IS_NULL = 79, h.IS_NUMBER = 80, h.IS_OBJECT = 81, h.IS_PRIMITIVE = 82, h.IS_STRING = 83, h.LENGTH = 84, h.LOG = 85, h.LOG10 = 86, h.LOWER = 87, h.LTRIM = 88, h.MAX = 89, h.MIN = 90, h.PI = 91, h.POWER = 92, h.RADIANS = 93, h.RAND = 94, h.REPLACE = 95, h.REPLICATE = 96, h.REVERSE = 97, h.ROUND = 98, h.RTRIM = 99, h.SIGN = 100, h.SIN = 101, h.SQRT = 102, h.SQUARE = 103, h.ST_DISTANCE = 104, h.ST_INTERSECTS = 105, h.ST_ISVALID = 106, h.ST_ISVALIDDETAILED = 107, h.ST_WITHIN = 108, h.STARTSWITH = 109, h.SUBSTRING = 110, h.SUM = 111, h.TAN = 112, h.TRUNC = 113, h.UPPER = 114, h.SPACE = 115, h.COMMENTS = 116, h.ID = 117, h.NUMBER = 118, h.COL = 119, h.COMMA = 120, h.DOT = 121, h.ADD = 122, h.SUB = 123, h.MUL = 124, h.DIV = 125, h.MOD = 126, h.COLON = 127, h.EQUAL = 128, h.GREATER = 129, h.LESS = 130, h.BIT_NOT_OP = 131, h.BIT_OR_OP = 132, h.BIT_AND_OP = 133, h.BIT_XOR_OP = 134, h.QUEST = 135, h.LEFT_BRACE = 136, h.RIGHT_BRACE = 137, h.LEFT_BRACKET = 138, h.RIGHT_BRACKET = 139, h.LEFT_PARENTHESIS = 140, h.RIGHT_PARENTHESIS = 141, h.QUOTE = 142, h.RULE_root = 0, h.RULE_sql_query = 1, h.RULE_select_clause = 2, h.RULE_top_spec = 3, h.RULE_from_clause = 4, h.RULE_where_clause = 5, h.RULE_orderby_clause = 6, h.RULE_selection = 7, h.RULE_select_value_spec = 8, h.RULE_select_list = 9, h.RULE_select_item = 10, h.RULE_select_alias = 11, h.RULE_orderby_item_list = 12, h.RULE_orderby_item = 13, h.RULE_from_specification = 14, h.RULE_primary_from_specification = 15, h.RULE_input_alias = 16, h.RULE_input_collection = 17, h.RULE_relative_path = 18, h.RULE_relative_path_segment = 19, h.RULE_array_item_list = 20, h.RULE_array_create_expression = 21, h.RULE_property_name = 22, h.RULE_object_property = 23, h.RULE_object_property_list = 24, h.RULE_object_create_expression = 25, h.RULE_function_arg_list = 26, h.RULE_sys_function_name = 27, h.RULE_udf_function_name = 28, h.RULE_function_call_expression = 29, h.RULE_scalar_expression = 30, h.RULE_logical_scalar_expression = 31, h.RULE_between_scalar_expression = 32, h.RULE_in_scalar_expression = 33, h.RULE_exists_scalar_expression = 34, h.RULE_array_scalar_expression = 35, h.RULE_in_scalar_expression_item_list = 36, h.RULE_binary_expression = 37, h.RULE_unary_expression = 38, h.RULE_primary_expression = 39, h.RULE_constant = 40, h.RULE_array_constant = 41, h.RULE_array_constant_list = 42, h.RULE_object_constant = 43, h.RULE_object_constant_item = 44, h.RULE_object_constant_items = 45, p.prototype = Object.create(r.ParserRuleContext.prototype), p.prototype.constructor = p, p.prototype.sql_query = function () { return this.getTypedRuleContext(f, 0); }, h.RootContext = p, h.prototype.root = function () { var t = new p(this, this._ctx, this.state); this.enterRule(t, 0, h.RULE_root); try {
            this.enterOuterAlt(t, 1), this.state = 92, this.sql_query();
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, f.prototype = Object.create(r.ParserRuleContext.prototype), f.prototype.constructor = f, f.prototype.select_clause = function () { return this.getTypedRuleContext(d, 0); }, f.prototype.from_clause = function () { return this.getTypedRuleContext(y, 0); }, f.prototype.where_clause = function () { return this.getTypedRuleContext(E, 0); }, f.prototype.orderby_clause = function () { return this.getTypedRuleContext(T, 0); }, h.Sql_queryContext = f, h.prototype.sql_query = function () { var t = new f(this, this._ctx, this.state); this.enterRule(t, 2, h.RULE_sql_query); try {
            this.enterOuterAlt(t, 1), this.state = 94, this.select_clause(), this.state = 96, this._errHandler.sync(this), this._input.LA(1) === h.FROM && (this.state = 95, this.from_clause()), this.state = 99, this._errHandler.sync(this), this._input.LA(1) === h.WHERE && (this.state = 98, this.where_clause()), this.state = 102, this._errHandler.sync(this), this._input.LA(1) === h.ORDER && (this.state = 101, this.orderby_clause());
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, d.prototype = Object.create(r.ParserRuleContext.prototype), d.prototype.constructor = d, d.prototype.SELECT = function () { return this.getToken(h.SELECT, 0); }, d.prototype.selection = function () { return this.getTypedRuleContext(x, 0); }, d.prototype.top_spec = function () { return this.getTypedRuleContext(_, 0); }, h.Select_clauseContext = d, h.prototype.select_clause = function () { var t = new d(this, this._ctx, this.state); this.enterRule(t, 4, h.RULE_select_clause); try {
            this.enterOuterAlt(t, 1), this.state = 104, this.match(h.SELECT), this.state = 106, this._errHandler.sync(this), this._input.LA(1) === h.TOP && (this.state = 105, this.top_spec()), this.state = 108, this.selection();
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, _.prototype = Object.create(r.ParserRuleContext.prototype), _.prototype.constructor = _, _.prototype.TOP = function () { return this.getToken(h.TOP, 0); }, _.prototype.NUMBER = function () { return this.getToken(h.NUMBER, 0); }, h.Top_specContext = _, h.prototype.top_spec = function () { var t = new _(this, this._ctx, this.state); this.enterRule(t, 6, h.RULE_top_spec); try {
            this.enterOuterAlt(t, 1), this.state = 110, this.match(h.TOP), this.state = 111, this.match(h.NUMBER);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, y.prototype = Object.create(r.ParserRuleContext.prototype), y.prototype.constructor = y, y.prototype.FROM = function () { return this.getToken(h.FROM, 0); }, y.prototype.from_specification = function () { return this.getTypedRuleContext(I, 0); }, h.From_clauseContext = y, h.prototype.from_clause = function () { var t = new y(this, this._ctx, this.state); this.enterRule(t, 8, h.RULE_from_clause); try {
            this.enterOuterAlt(t, 1), this.state = 113, this.match(h.FROM), this.state = 114, this.from_specification(0);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, E.prototype = Object.create(r.ParserRuleContext.prototype), E.prototype.constructor = E, E.prototype.WHERE = function () { return this.getToken(h.WHERE, 0); }, E.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, h.Where_clauseContext = E, h.prototype.where_clause = function () { var t = new E(this, this._ctx, this.state); this.enterRule(t, 10, h.RULE_where_clause); try {
            this.enterOuterAlt(t, 1), this.state = 116, this.match(h.WHERE), this.state = 117, this.scalar_expression();
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, T.prototype = Object.create(r.ParserRuleContext.prototype), T.prototype.constructor = T, T.prototype.ORDER = function () { return this.getToken(h.ORDER, 0); }, T.prototype.BY = function () { return this.getToken(h.BY, 0); }, T.prototype.orderby_item_list = function () { return this.getTypedRuleContext(v, 0); }, h.Orderby_clauseContext = T, h.prototype.orderby_clause = function () { var t = new T(this, this._ctx, this.state); this.enterRule(t, 12, h.RULE_orderby_clause); try {
            this.enterOuterAlt(t, 1), this.state = 119, this.match(h.ORDER), this.state = 120, this.match(h.BY), this.state = 121, this.orderby_item_list(0);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, x.prototype = Object.create(r.ParserRuleContext.prototype), x.prototype.constructor = x, x.prototype.select_list = function () { return this.getTypedRuleContext(g, 0); }, x.prototype.select_value_spec = function () { return this.getTypedRuleContext(S, 0); }, x.prototype.MUL = function () { return this.getToken(h.MUL, 0); }, h.SelectionContext = x, h.prototype.selection = function () { var t = new x(this, this._ctx, this.state); this.enterRule(t, 14, h.RULE_selection); try {
            switch (this.state = 126, this._errHandler.sync(this), this._input.LA(1)) {
                case h.ARRAY:
                case h.AS:
                case h.EXISTS:
                case h.K_false:
                case h.NOT:
                case h.K_null:
                case h.K_true:
                case h.K_udf:
                case h.K_undefined:
                case h.ID:
                case h.NUMBER:
                case h.ADD:
                case h.SUB:
                case h.BIT_NOT_OP:
                case h.LEFT_BRACE:
                case h.LEFT_BRACKET:
                case h.LEFT_PARENTHESIS:
                case h.QUOTE:
                    this.enterOuterAlt(t, 1), this.state = 123, this.select_list(0);
                    break;
                case h.VALUE:
                    this.enterOuterAlt(t, 2), this.state = 124, this.select_value_spec();
                    break;
                case h.MUL:
                    this.enterOuterAlt(t, 3), this.state = 125, this.match(h.MUL);
                    break;
                default: throw new r.error.NoViableAltException(this);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, S.prototype = Object.create(r.ParserRuleContext.prototype), S.prototype.constructor = S, S.prototype.VALUE = function () { return this.getToken(h.VALUE, 0); }, S.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, h.Select_value_specContext = S, h.prototype.select_value_spec = function () { var t = new S(this, this._ctx, this.state); this.enterRule(t, 16, h.RULE_select_value_spec); try {
            this.enterOuterAlt(t, 1), this.state = 128, this.match(h.VALUE), this.state = 129, this.scalar_expression();
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, g.prototype = Object.create(r.ParserRuleContext.prototype), g.prototype.constructor = g, g.prototype.select_item = function () { return this.getTypedRuleContext(R, 0); }, g.prototype.select_list = function () { return this.getTypedRuleContext(g, 0); }, g.prototype.COMMA = function () { return this.getToken(h.COMMA, 0); }, h.prototype.select_list = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new g(this, this._ctx, n); this.enterRecursionRule(i, 18, h.RULE_select_list, t); try {
            this.enterOuterAlt(i, 1), this.state = 132, this.select_item(), this._ctx.stop = this._input.LT(-1), this.state = 139, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 5, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new g(this, e, n), this.pushNewRecursionContext(i, 18, h.RULE_select_list), this.state = 134, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 135, this.match(h.COMMA), this.state = 136, this.select_item();
                }
                this.state = 141, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 5, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, R.prototype = Object.create(r.ParserRuleContext.prototype), R.prototype.constructor = R, R.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, R.prototype.select_alias = function () { return this.getTypedRuleContext(A, 0); }, h.Select_itemContext = R, h.prototype.select_item = function () { var t = new R(this, this._ctx, this.state); this.enterRule(t, 20, h.RULE_select_item); try {
            switch (this.state = 146, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(t, 1), this.state = 142, this.scalar_expression();
                    break;
                case 2: this.enterOuterAlt(t, 2), this.state = 143, this.scalar_expression(), this.state = 144, this.select_alias();
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, A.prototype = Object.create(r.ParserRuleContext.prototype), A.prototype.constructor = A, A.prototype.ID = function () { return this.getToken(h.ID, 0); }, A.prototype.AS = function () { return this.getToken(h.AS, 0); }, h.Select_aliasContext = A, h.prototype.select_alias = function () { var t = new A(this, this._ctx, this.state); this.enterRule(t, 22, h.RULE_select_alias); try {
            switch (this.state = 151, this._errHandler.sync(this), this._input.LA(1)) {
                case h.ID:
                    this.enterOuterAlt(t, 1), this.state = 148, this.match(h.ID);
                    break;
                case h.AS:
                    this.enterOuterAlt(t, 2), this.state = 149, this.match(h.AS), this.state = 150, this.match(h.ID);
                    break;
                default: throw new r.error.NoViableAltException(this);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, v.prototype = Object.create(r.ParserRuleContext.prototype), v.prototype.constructor = v, v.prototype.orderby_item = function () { return this.getTypedRuleContext(C, 0); }, v.prototype.orderby_item_list = function () { return this.getTypedRuleContext(v, 0); }, v.prototype.COMMA = function () { return this.getToken(h.COMMA, 0); }, h.prototype.orderby_item_list = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new v(this, this._ctx, n); this.enterRecursionRule(i, 24, h.RULE_orderby_item_list, t); try {
            this.enterOuterAlt(i, 1), this.state = 154, this.orderby_item(), this._ctx.stop = this._input.LT(-1), this.state = 161, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 8, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new v(this, e, n), this.pushNewRecursionContext(i, 24, h.RULE_orderby_item_list), this.state = 156, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 157, this.match(h.COMMA), this.state = 158, this.orderby_item();
                }
                this.state = 163, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 8, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, C.prototype = Object.create(r.ParserRuleContext.prototype), C.prototype.constructor = C, C.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, C.prototype.ASC = function () { return this.getToken(h.ASC, 0); }, C.prototype.DESC = function () { return this.getToken(h.DESC, 0); }, h.Orderby_itemContext = C, h.prototype.orderby_item = function () { var t = new C(this, this._ctx, this.state); this.enterRule(t, 26, h.RULE_orderby_item); try {
            switch (this.state = 171, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(t, 1), this.state = 164, this.scalar_expression();
                    break;
                case 2:
                    this.enterOuterAlt(t, 2), this.state = 165, this.scalar_expression(), this.state = 166, this.match(h.ASC);
                    break;
                case 3: this.enterOuterAlt(t, 3), this.state = 168, this.scalar_expression(), this.state = 169, this.match(h.DESC);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, I.prototype = Object.create(r.ParserRuleContext.prototype), I.prototype.constructor = I, I.prototype.primary_from_specification = function () { return this.getTypedRuleContext(N, 0); }, I.prototype.from_specification = function () { return this.getTypedRuleContext(I, 0); }, I.prototype.JOIN = function () { return this.getToken(h.JOIN, 0); }, h.prototype.from_specification = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new I(this, this._ctx, n); this.enterRecursionRule(i, 28, h.RULE_from_specification, t); try {
            this.enterOuterAlt(i, 1), this.state = 174, this.primary_from_specification(), this._ctx.stop = this._input.LT(-1), this.state = 181, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 10, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new I(this, e, n), this.pushNewRecursionContext(i, 28, h.RULE_from_specification), this.state = 176, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 177, this.match(h.JOIN), this.state = 178, this.primary_from_specification();
                }
                this.state = 183, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 10, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, N.prototype = Object.create(r.ParserRuleContext.prototype), N.prototype.constructor = N, N.prototype.input_collection = function () { return this.getTypedRuleContext(O, 0); }, N.prototype.input_alias = function () { return this.getTypedRuleContext(m, 0); }, N.prototype.ID = function () { return this.getToken(h.ID, 0); }, N.prototype.IN = function () { return this.getToken(h.IN, 0); }, h.Primary_from_specificationContext = N, h.prototype.primary_from_specification = function () { var t = new N(this, this._ctx, this.state); this.enterRule(t, 30, h.RULE_primary_from_specification); try {
            switch (this.state = 191, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(t, 1), this.state = 184, this.input_collection();
                    break;
                case 2:
                    this.enterOuterAlt(t, 2), this.state = 185, this.input_collection(), this.state = 186, this.input_alias();
                    break;
                case 3: this.enterOuterAlt(t, 3), this.state = 188, this.match(h.ID), this.state = 189, this.match(h.IN), this.state = 190, this.input_collection();
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, m.prototype = Object.create(r.ParserRuleContext.prototype), m.prototype.constructor = m, m.prototype.ID = function () { return this.getToken(h.ID, 0); }, m.prototype.AS = function () { return this.getToken(h.AS, 0); }, h.Input_aliasContext = m, h.prototype.input_alias = function () { var t = new m(this, this._ctx, this.state); this.enterRule(t, 32, h.RULE_input_alias); try {
            switch (this.state = 196, this._errHandler.sync(this), this._input.LA(1)) {
                case h.ID:
                    this.enterOuterAlt(t, 1), this.state = 193, this.match(h.ID);
                    break;
                case h.AS:
                    this.enterOuterAlt(t, 2), this.state = 194, this.match(h.AS), this.state = 195, this.match(h.ID);
                    break;
                default: throw new r.error.NoViableAltException(this);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, O.prototype = Object.create(r.ParserRuleContext.prototype), O.prototype.constructor = O, O.prototype.relative_path = function () { return this.getTypedRuleContext(L, 0); }, O.prototype.LEFT_PARENTHESIS = function () { return this.getToken(h.LEFT_PARENTHESIS, 0); }, O.prototype.sql_query = function () { return this.getTypedRuleContext(f, 0); }, O.prototype.RIGHT_PARENTHESIS = function () { return this.getToken(h.RIGHT_PARENTHESIS, 0); }, h.Input_collectionContext = O, h.prototype.input_collection = function () { var t = new O(this, this._ctx, this.state); this.enterRule(t, 34, h.RULE_input_collection); try {
            switch (this.state = 203, this._errHandler.sync(this), this._input.LA(1)) {
                case h.ID:
                    this.enterOuterAlt(t, 1), this.state = 198, this.relative_path(0);
                    break;
                case h.LEFT_PARENTHESIS:
                    this.enterOuterAlt(t, 2), this.state = 199, this.match(h.LEFT_PARENTHESIS), this.state = 200, this.sql_query(), this.state = 201, this.match(h.RIGHT_PARENTHESIS);
                    break;
                default: throw new r.error.NoViableAltException(this);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, L.prototype = Object.create(r.ParserRuleContext.prototype), L.prototype.constructor = L, L.prototype.relative_path_segment = function () { return this.getTypedRuleContext(P, 0); }, L.prototype.relative_path = function () { return this.getTypedRuleContext(L, 0); }, L.prototype.DOT = function () { return this.getToken(h.DOT, 0); }, L.prototype.LEFT_BRACKET = function () { return this.getToken(h.LEFT_BRACKET, 0); }, L.prototype.NUMBER = function () { return this.getToken(h.NUMBER, 0); }, L.prototype.RIGHT_BRACKET = function () { return this.getToken(h.RIGHT_BRACKET, 0); }, L.prototype.QUOTE = function (t) { return void 0 === t && (t = null), null === t ? this.getTokens(h.QUOTE) : this.getToken(h.QUOTE, t); }, h.prototype.relative_path = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new L(this, this._ctx, n); this.enterRecursionRule(i, 36, h.RULE_relative_path, t); try {
            this.enterOuterAlt(i, 1), this.state = 206, this.relative_path_segment(), this._ctx.stop = this._input.LT(-1), this.state = 224, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 15, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o)
                    switch (null !== this._parseListeners && this.triggerExitRuleEvent(), i, this.state = 222, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                        case 1:
                            if (i = new L(this, e, n), this.pushNewRecursionContext(i, 36, h.RULE_relative_path), this.state = 208, !this.precpred(this._ctx, 3))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                            this.state = 209, this.match(h.DOT), this.state = 210, this.relative_path_segment();
                            break;
                        case 2:
                            if (i = new L(this, e, n), this.pushNewRecursionContext(i, 36, h.RULE_relative_path), this.state = 211, !this.precpred(this._ctx, 2))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                            this.state = 212, this.match(h.LEFT_BRACKET), this.state = 213, this.match(h.NUMBER), this.state = 214, this.match(h.RIGHT_BRACKET);
                            break;
                        case 3:
                            if (i = new L(this, e, n), this.pushNewRecursionContext(i, 36, h.RULE_relative_path), this.state = 215, !this.precpred(this._ctx, 1))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                            this.state = 216, this.match(h.LEFT_BRACKET), this.state = 217, this.match(h.QUOTE), this.state = 218, this.relative_path_segment(), this.state = 219, this.match(h.QUOTE), this.state = 220, this.match(h.RIGHT_BRACKET);
                    }
                this.state = 226, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 15, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, P.prototype = Object.create(r.ParserRuleContext.prototype), P.prototype.constructor = P, P.prototype.ID = function () { return this.getToken(h.ID, 0); }, h.Relative_path_segmentContext = P, h.prototype.relative_path_segment = function () { var t = new P(this, this._ctx, this.state); this.enterRule(t, 38, h.RULE_relative_path_segment); try {
            this.enterOuterAlt(t, 1), this.state = 227, this.match(h.ID);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, b.prototype = Object.create(r.ParserRuleContext.prototype), b.prototype.constructor = b, b.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, b.prototype.array_item_list = function () { return this.getTypedRuleContext(b, 0); }, b.prototype.COMMA = function () { return this.getToken(h.COMMA, 0); }, h.prototype.array_item_list = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new b(this, this._ctx, n); this.enterRecursionRule(i, 40, h.RULE_array_item_list, t); try {
            this.enterOuterAlt(i, 1), this.state = 230, this.scalar_expression(), this._ctx.stop = this._input.LT(-1), this.state = 237, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 16, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new b(this, e, n), this.pushNewRecursionContext(i, 40, h.RULE_array_item_list), this.state = 232, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 233, this.match(h.COMMA), this.state = 234, this.scalar_expression();
                }
                this.state = 239, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 16, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, k.prototype = Object.create(r.ParserRuleContext.prototype), k.prototype.constructor = k, k.prototype.LEFT_BRACKET = function () { return this.getToken(h.LEFT_BRACKET, 0); }, k.prototype.RIGHT_BRACKET = function () { return this.getToken(h.RIGHT_BRACKET, 0); }, k.prototype.array_item_list = function () { return this.getTypedRuleContext(b, 0); }, h.Array_create_expressionContext = k, h.prototype.array_create_expression = function () { var t = new k(this, this._ctx, this.state); this.enterRule(t, 42, h.RULE_array_create_expression); var e = 0; try {
            this.enterOuterAlt(t, 1), this.state = 240, this.match(h.LEFT_BRACKET), this.state = 242, this._errHandler.sync(this), (0 == (-32 & (e = this._input.LA(1))) && 0 != (1 << e & (1 << h.ARRAY | 1 << h.AS | 1 << h.EXISTS | 1 << h.K_false | 1 << h.NOT)) || 0 == (e - 32 & -32) && 0 != (1 << e - 32 & (1 << h.K_null - 32 | 1 << h.K_true - 32 | 1 << h.K_udf - 32 | 1 << h.K_undefined - 32)) || 0 == (e - 117 & -32) && 0 != (1 << e - 117 & (1 << h.ID - 117 | 1 << h.NUMBER - 117 | 1 << h.ADD - 117 | 1 << h.SUB - 117 | 1 << h.BIT_NOT_OP - 117 | 1 << h.LEFT_BRACE - 117 | 1 << h.LEFT_BRACKET - 117 | 1 << h.LEFT_PARENTHESIS - 117 | 1 << h.QUOTE - 117))) && (this.state = 241, this.array_item_list(0)), this.state = 244, this.match(h.RIGHT_BRACKET);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, w.prototype = Object.create(r.ParserRuleContext.prototype), w.prototype.constructor = w, w.prototype.ID = function () { return this.getToken(h.ID, 0); }, h.Property_nameContext = w, h.prototype.property_name = function () { var t = new w(this, this._ctx, this.state); this.enterRule(t, 44, h.RULE_property_name); try {
            this.enterOuterAlt(t, 1), this.state = 246, this.match(h.ID);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, D.prototype = Object.create(r.ParserRuleContext.prototype), D.prototype.constructor = D, D.prototype.property_name = function () { return this.getTypedRuleContext(w, 0); }, D.prototype.COLON = function () { return this.getToken(h.COLON, 0); }, D.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, h.Object_propertyContext = D, h.prototype.object_property = function () { var t = new D(this, this._ctx, this.state); this.enterRule(t, 46, h.RULE_object_property); try {
            this.enterOuterAlt(t, 1), this.state = 248, this.property_name(), this.state = 249, this.match(h.COLON), this.state = 250, this.scalar_expression();
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, U.prototype = Object.create(r.ParserRuleContext.prototype), U.prototype.constructor = U, U.prototype.object_property = function () { return this.getTypedRuleContext(D, 0); }, U.prototype.object_property_list = function () { return this.getTypedRuleContext(U, 0); }, U.prototype.COMMA = function () { return this.getToken(h.COMMA, 0); }, h.prototype.object_property_list = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new U(this, this._ctx, n); this.enterRecursionRule(i, 48, h.RULE_object_property_list, t); try {
            this.enterOuterAlt(i, 1), this.state = 253, this.object_property(), this._ctx.stop = this._input.LT(-1), this.state = 260, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 18, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new U(this, e, n), this.pushNewRecursionContext(i, 48, h.RULE_object_property_list), this.state = 255, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 256, this.match(h.COMMA), this.state = 257, this.object_property();
                }
                this.state = 262, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 18, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, F.prototype = Object.create(r.ParserRuleContext.prototype), F.prototype.constructor = F, F.prototype.LEFT_BRACE = function () { return this.getToken(h.LEFT_BRACE, 0); }, F.prototype.RIGHT_BRACE = function () { return this.getToken(h.RIGHT_BRACE, 0); }, F.prototype.object_property_list = function () { return this.getTypedRuleContext(U, 0); }, h.Object_create_expressionContext = F, h.prototype.object_create_expression = function () { var t = new F(this, this._ctx, this.state); this.enterRule(t, 50, h.RULE_object_create_expression); try {
            this.enterOuterAlt(t, 1), this.state = 263, this.match(h.LEFT_BRACE), this.state = 265, this._errHandler.sync(this), this._input.LA(1) === h.ID && (this.state = 264, this.object_property_list(0)), this.state = 267, this.match(h.RIGHT_BRACE);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, H.prototype = Object.create(r.ParserRuleContext.prototype), H.prototype.constructor = H, H.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, H.prototype.function_arg_list = function () { return this.getTypedRuleContext(H, 0); }, H.prototype.COMMA = function () { return this.getToken(h.COMMA, 0); }, h.prototype.function_arg_list = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new H(this, this._ctx, n); this.enterRecursionRule(i, 52, h.RULE_function_arg_list, t); try {
            this.enterOuterAlt(i, 1), this.state = 270, this.scalar_expression(), this._ctx.stop = this._input.LT(-1), this.state = 277, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 20, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new H(this, e, n), this.pushNewRecursionContext(i, 52, h.RULE_function_arg_list), this.state = 272, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 273, this.match(h.COMMA), this.state = 274, this.scalar_expression();
                }
                this.state = 279, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 20, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, M.prototype = Object.create(r.ParserRuleContext.prototype), M.prototype.constructor = M, M.prototype.ID = function () { return this.getToken(h.ID, 0); }, h.Sys_function_nameContext = M, h.prototype.sys_function_name = function () { var t = new M(this, this._ctx, this.state); this.enterRule(t, 54, h.RULE_sys_function_name); try {
            this.enterOuterAlt(t, 1), this.state = 280, this.match(h.ID);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, B.prototype = Object.create(r.ParserRuleContext.prototype), B.prototype.constructor = B, B.prototype.ID = function () { return this.getToken(h.ID, 0); }, h.Udf_function_nameContext = B, h.prototype.udf_function_name = function () { var t = new B(this, this._ctx, this.state); this.enterRule(t, 56, h.RULE_udf_function_name); try {
            this.enterOuterAlt(t, 1), this.state = 282, this.match(h.ID);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, j.prototype = Object.create(r.ParserRuleContext.prototype), j.prototype.constructor = j, j.prototype.sys_function_name = function () { return this.getTypedRuleContext(M, 0); }, j.prototype.LEFT_PARENTHESIS = function () { return this.getToken(h.LEFT_PARENTHESIS, 0); }, j.prototype.RIGHT_PARENTHESIS = function () { return this.getToken(h.RIGHT_PARENTHESIS, 0); }, j.prototype.function_arg_list = function () { return this.getTypedRuleContext(H, 0); }, j.prototype.K_udf = function () { return this.getToken(h.K_udf, 0); }, j.prototype.DOT = function () { return this.getToken(h.DOT, 0); }, j.prototype.udf_function_name = function () { return this.getTypedRuleContext(B, 0); }, h.Function_call_expressionContext = j, h.prototype.function_call_expression = function () { var t = new j(this, this._ctx, this.state); this.enterRule(t, 58, h.RULE_function_call_expression); var e = 0; try {
            switch (this.state = 300, this._errHandler.sync(this), this._input.LA(1)) {
                case h.ID:
                    this.enterOuterAlt(t, 1), this.state = 284, this.sys_function_name(), this.state = 285, this.match(h.LEFT_PARENTHESIS), this.state = 287, this._errHandler.sync(this), (0 == (-32 & (e = this._input.LA(1))) && 0 != (1 << e & (1 << h.ARRAY | 1 << h.AS | 1 << h.EXISTS | 1 << h.K_false | 1 << h.NOT)) || 0 == (e - 32 & -32) && 0 != (1 << e - 32 & (1 << h.K_null - 32 | 1 << h.K_true - 32 | 1 << h.K_udf - 32 | 1 << h.K_undefined - 32)) || 0 == (e - 117 & -32) && 0 != (1 << e - 117 & (1 << h.ID - 117 | 1 << h.NUMBER - 117 | 1 << h.ADD - 117 | 1 << h.SUB - 117 | 1 << h.BIT_NOT_OP - 117 | 1 << h.LEFT_BRACE - 117 | 1 << h.LEFT_BRACKET - 117 | 1 << h.LEFT_PARENTHESIS - 117 | 1 << h.QUOTE - 117))) && (this.state = 286, this.function_arg_list(0)), this.state = 289, this.match(h.RIGHT_PARENTHESIS);
                    break;
                case h.K_udf:
                    this.enterOuterAlt(t, 2), this.state = 291, this.match(h.K_udf), this.state = 292, this.match(h.DOT), this.state = 293, this.udf_function_name(), this.state = 294, this.match(h.LEFT_PARENTHESIS), this.state = 296, this._errHandler.sync(this), (0 == (-32 & (e = this._input.LA(1))) && 0 != (1 << e & (1 << h.ARRAY | 1 << h.AS | 1 << h.EXISTS | 1 << h.K_false | 1 << h.NOT)) || 0 == (e - 32 & -32) && 0 != (1 << e - 32 & (1 << h.K_null - 32 | 1 << h.K_true - 32 | 1 << h.K_udf - 32 | 1 << h.K_undefined - 32)) || 0 == (e - 117 & -32) && 0 != (1 << e - 117 & (1 << h.ID - 117 | 1 << h.NUMBER - 117 | 1 << h.ADD - 117 | 1 << h.SUB - 117 | 1 << h.BIT_NOT_OP - 117 | 1 << h.LEFT_BRACE - 117 | 1 << h.LEFT_BRACKET - 117 | 1 << h.LEFT_PARENTHESIS - 117 | 1 << h.QUOTE - 117))) && (this.state = 295, this.function_arg_list(0)), this.state = 298, this.match(h.RIGHT_PARENTHESIS);
                    break;
                default: throw new r.error.NoViableAltException(this);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, G.prototype = Object.create(r.ParserRuleContext.prototype), G.prototype.constructor = G, G.prototype.logical_scalar_expression = function () { return this.getTypedRuleContext(K, 0); }, G.prototype.between_scalar_expression = function () { return this.getTypedRuleContext(V, 0); }, h.Scalar_expressionContext = G, h.prototype.scalar_expression = function () { var t = new G(this, this._ctx, this.state); this.enterRule(t, 60, h.RULE_scalar_expression); try {
            switch (this.state = 304, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(t, 1), this.state = 302, this.logical_scalar_expression(0);
                    break;
                case 2: this.enterOuterAlt(t, 2), this.state = 303, this.between_scalar_expression();
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, K.prototype = Object.create(r.ParserRuleContext.prototype), K.prototype.constructor = K, K.prototype.binary_expression = function () { return this.getTypedRuleContext(Q, 0); }, K.prototype.in_scalar_expression = function () { return this.getTypedRuleContext(Y, 0); }, K.prototype.logical_scalar_expression = function (t) { return void 0 === t && (t = null), null === t ? this.getTypedRuleContexts(K) : this.getTypedRuleContext(K, t); }, K.prototype.AND = function () { return this.getToken(h.AND, 0); }, K.prototype.OR = function () { return this.getToken(h.OR, 0); }, h.prototype.logical_scalar_expression = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new K(this, this._ctx, n); this.enterRecursionRule(i, 62, h.RULE_logical_scalar_expression, t); try {
            switch (this.enterOuterAlt(i, 1), this.state = 309, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.state = 307, this.binary_expression(0);
                    break;
                case 2: this.state = 308, this.in_scalar_expression();
            }
            this._ctx.stop = this._input.LT(-1), this.state = 319, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 27, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o)
                    switch (null !== this._parseListeners && this.triggerExitRuleEvent(), i, this.state = 317, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 26, this._ctx)) {
                        case 1:
                            if (i = new K(this, e, n), this.pushNewRecursionContext(i, 62, h.RULE_logical_scalar_expression), this.state = 311, !this.precpred(this._ctx, 2))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                            this.state = 312, this.match(h.AND), this.state = 313, this.logical_scalar_expression(3);
                            break;
                        case 2:
                            if (i = new K(this, e, n), this.pushNewRecursionContext(i, 62, h.RULE_logical_scalar_expression), this.state = 314, !this.precpred(this._ctx, 1))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                            this.state = 315, this.match(h.OR), this.state = 316, this.logical_scalar_expression(2);
                    }
                this.state = 321, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 27, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, V.prototype = Object.create(r.ParserRuleContext.prototype), V.prototype.constructor = V, V.prototype.binary_expression = function (t) { return void 0 === t && (t = null), null === t ? this.getTypedRuleContexts(Q) : this.getTypedRuleContext(Q, t); }, V.prototype.BETWEEN = function () { return this.getToken(h.BETWEEN, 0); }, V.prototype.AND = function () { return this.getToken(h.AND, 0); }, V.prototype.NOT = function () { return this.getToken(h.NOT, 0); }, h.Between_scalar_expressionContext = V, h.prototype.between_scalar_expression = function () { var t = new V(this, this._ctx, this.state); this.enterRule(t, 64, h.RULE_between_scalar_expression); try {
            switch (this.state = 335, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(t, 1), this.state = 322, this.binary_expression(0), this.state = 323, this.match(h.BETWEEN), this.state = 324, this.binary_expression(0), this.state = 325, this.match(h.AND), this.state = 326, this.binary_expression(0);
                    break;
                case 2: this.enterOuterAlt(t, 2), this.state = 328, this.binary_expression(0), this.state = 329, this.match(h.NOT), this.state = 330, this.match(h.BETWEEN), this.state = 331, this.binary_expression(0), this.state = 332, this.match(h.AND), this.state = 333, this.binary_expression(0);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, Y.prototype = Object.create(r.ParserRuleContext.prototype), Y.prototype.constructor = Y, Y.prototype.binary_expression = function () { return this.getTypedRuleContext(Q, 0); }, Y.prototype.IN = function () { return this.getToken(h.IN, 0); }, Y.prototype.LEFT_PARENTHESIS = function () { return this.getToken(h.LEFT_PARENTHESIS, 0); }, Y.prototype.in_scalar_expression_item_list = function () { return this.getTypedRuleContext(z, 0); }, Y.prototype.RIGHT_PARENTHESIS = function () { return this.getToken(h.RIGHT_PARENTHESIS, 0); }, Y.prototype.NOT = function () { return this.getToken(h.NOT, 0); }, h.In_scalar_expressionContext = Y, h.prototype.in_scalar_expression = function () { var t = new Y(this, this._ctx, this.state); this.enterRule(t, 66, h.RULE_in_scalar_expression); try {
            switch (this.state = 350, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(t, 1), this.state = 337, this.binary_expression(0), this.state = 338, this.match(h.IN), this.state = 339, this.match(h.LEFT_PARENTHESIS), this.state = 340, this.in_scalar_expression_item_list(0), this.state = 341, this.match(h.RIGHT_PARENTHESIS);
                    break;
                case 2: this.enterOuterAlt(t, 2), this.state = 343, this.binary_expression(0), this.state = 344, this.match(h.NOT), this.state = 345, this.match(h.IN), this.state = 346, this.match(h.LEFT_PARENTHESIS), this.state = 347, this.in_scalar_expression_item_list(0), this.state = 348, this.match(h.RIGHT_PARENTHESIS);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, q.prototype = Object.create(r.ParserRuleContext.prototype), q.prototype.constructor = q, q.prototype.EXISTS = function () { return this.getToken(h.EXISTS, 0); }, q.prototype.LEFT_PARENTHESIS = function () { return this.getToken(h.LEFT_PARENTHESIS, 0); }, q.prototype.sql_query = function () { return this.getTypedRuleContext(f, 0); }, q.prototype.RIGHT_PARENTHESIS = function () { return this.getToken(h.RIGHT_PARENTHESIS, 0); }, h.Exists_scalar_expressionContext = q, h.prototype.exists_scalar_expression = function () { var t = new q(this, this._ctx, this.state); this.enterRule(t, 68, h.RULE_exists_scalar_expression); try {
            this.enterOuterAlt(t, 1), this.state = 352, this.match(h.EXISTS), this.state = 353, this.match(h.LEFT_PARENTHESIS), this.state = 354, this.sql_query(), this.state = 355, this.match(h.RIGHT_PARENTHESIS);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, W.prototype = Object.create(r.ParserRuleContext.prototype), W.prototype.constructor = W, W.prototype.ARRAY = function () { return this.getToken(h.ARRAY, 0); }, W.prototype.LEFT_PARENTHESIS = function () { return this.getToken(h.LEFT_PARENTHESIS, 0); }, W.prototype.sql_query = function () { return this.getTypedRuleContext(f, 0); }, W.prototype.RIGHT_PARENTHESIS = function () { return this.getToken(h.RIGHT_PARENTHESIS, 0); }, h.Array_scalar_expressionContext = W, h.prototype.array_scalar_expression = function () { var t = new W(this, this._ctx, this.state); this.enterRule(t, 70, h.RULE_array_scalar_expression); try {
            this.enterOuterAlt(t, 1), this.state = 357, this.match(h.ARRAY), this.state = 358, this.match(h.LEFT_PARENTHESIS), this.state = 359, this.sql_query(), this.state = 360, this.match(h.RIGHT_PARENTHESIS);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, z.prototype = Object.create(r.ParserRuleContext.prototype), z.prototype.constructor = z, z.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, z.prototype.in_scalar_expression_item_list = function () { return this.getTypedRuleContext(z, 0); }, z.prototype.COMMA = function () { return this.getToken(h.COMMA, 0); }, h.prototype.in_scalar_expression_item_list = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new z(this, this._ctx, n); this.enterRecursionRule(i, 72, h.RULE_in_scalar_expression_item_list, t); try {
            this.enterOuterAlt(i, 1), this.state = 363, this.scalar_expression(), this._ctx.stop = this._input.LT(-1), this.state = 370, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 30, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new z(this, e, n), this.pushNewRecursionContext(i, 72, h.RULE_in_scalar_expression_item_list), this.state = 365, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 366, this.match(h.COMMA), this.state = 367, this.scalar_expression();
                }
                this.state = 372, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 30, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, Q.prototype = Object.create(r.ParserRuleContext.prototype), Q.prototype.constructor = Q, Q.prototype.unary_expression = function () { return this.getTypedRuleContext(X, 0); }, Q.prototype.binary_expression = function (t) { return void 0 === t && (t = null), null === t ? this.getTypedRuleContexts(Q) : this.getTypedRuleContext(Q, t); }, Q.prototype.ADD = function () { return this.getToken(h.ADD, 0); }, Q.prototype.SUB = function () { return this.getToken(h.SUB, 0); }, Q.prototype.MUL = function () { return this.getToken(h.MUL, 0); }, Q.prototype.DIV = function () { return this.getToken(h.DIV, 0); }, Q.prototype.MOD = function () { return this.getToken(h.MOD, 0); }, Q.prototype.EQUAL = function () { return this.getToken(h.EQUAL, 0); }, Q.prototype.LESS = function () { return this.getToken(h.LESS, 0); }, Q.prototype.GREATER = function () { return this.getToken(h.GREATER, 0); }, Q.prototype.BIT_AND_OP = function () { return this.getToken(h.BIT_AND_OP, 0); }, Q.prototype.BIT_OR_OP = function () { return this.getToken(h.BIT_OR_OP, 0); }, Q.prototype.BIT_XOR_OP = function () { return this.getToken(h.BIT_XOR_OP, 0); }, h.prototype.binary_expression = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new Q(this, this._ctx, n); this.enterRecursionRule(i, 74, h.RULE_binary_expression, t); try {
            this.enterOuterAlt(i, 1), this.state = 374, this.unary_expression(), this._ctx.stop = this._input.LT(-1), this.state = 411, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 32, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o)
                    switch (null !== this._parseListeners && this.triggerExitRuleEvent(), i, this.state = 409, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 31, this._ctx)) {
                        case 1:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 376, !this.precpred(this._ctx, 11))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                            this.state = 377, this.match(h.ADD), this.state = 378, this.binary_expression(12);
                            break;
                        case 2:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 379, !this.precpred(this._ctx, 10))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                            this.state = 380, this.match(h.SUB), this.state = 381, this.binary_expression(11);
                            break;
                        case 3:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 382, !this.precpred(this._ctx, 9))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                            this.state = 383, this.match(h.MUL), this.state = 384, this.binary_expression(10);
                            break;
                        case 4:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 385, !this.precpred(this._ctx, 8))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                            this.state = 386, this.match(h.DIV), this.state = 387, this.binary_expression(9);
                            break;
                        case 5:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 388, !this.precpred(this._ctx, 7))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                            this.state = 389, this.match(h.MOD), this.state = 390, this.binary_expression(8);
                            break;
                        case 6:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 391, !this.precpred(this._ctx, 6))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                            this.state = 392, this.match(h.EQUAL), this.state = 393, this.binary_expression(7);
                            break;
                        case 7:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 394, !this.precpred(this._ctx, 5))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                            this.state = 395, this.match(h.LESS), this.state = 396, this.binary_expression(6);
                            break;
                        case 8:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 397, !this.precpred(this._ctx, 4))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                            this.state = 398, this.match(h.GREATER), this.state = 399, this.binary_expression(5);
                            break;
                        case 9:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 400, !this.precpred(this._ctx, 3))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                            this.state = 401, this.match(h.BIT_AND_OP), this.state = 402, this.binary_expression(4);
                            break;
                        case 10:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 403, !this.precpred(this._ctx, 2))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                            this.state = 404, this.match(h.BIT_OR_OP), this.state = 405, this.binary_expression(3);
                            break;
                        case 11:
                            if (i = new Q(this, e, n), this.pushNewRecursionContext(i, 74, h.RULE_binary_expression), this.state = 406, !this.precpred(this._ctx, 1))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                            this.state = 407, this.match(h.BIT_XOR_OP), this.state = 408, this.binary_expression(2);
                    }
                this.state = 413, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 32, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, X.prototype = Object.create(r.ParserRuleContext.prototype), X.prototype.constructor = X, X.prototype.primary_expression = function () { return this.getTypedRuleContext(J, 0); }, X.prototype.SUB = function () { return this.getToken(h.SUB, 0); }, X.prototype.unary_expression = function () { return this.getTypedRuleContext(X, 0); }, X.prototype.ADD = function () { return this.getToken(h.ADD, 0); }, X.prototype.BIT_NOT_OP = function () { return this.getToken(h.BIT_NOT_OP, 0); }, X.prototype.NOT = function () { return this.getToken(h.NOT, 0); }, h.Unary_expressionContext = X, h.prototype.unary_expression = function () { var t = new X(this, this._ctx, this.state); this.enterRule(t, 76, h.RULE_unary_expression); try {
            switch (this.state = 423, this._errHandler.sync(this), this._input.LA(1)) {
                case h.ARRAY:
                case h.AS:
                case h.EXISTS:
                case h.K_false:
                case h.K_null:
                case h.K_true:
                case h.K_udf:
                case h.K_undefined:
                case h.ID:
                case h.NUMBER:
                case h.LEFT_BRACE:
                case h.LEFT_BRACKET:
                case h.LEFT_PARENTHESIS:
                case h.QUOTE:
                    this.enterOuterAlt(t, 1), this.state = 414, this.primary_expression(0);
                    break;
                case h.SUB:
                    this.enterOuterAlt(t, 2), this.state = 415, this.match(h.SUB), this.state = 416, this.unary_expression();
                    break;
                case h.ADD:
                    this.enterOuterAlt(t, 3), this.state = 417, this.match(h.ADD), this.state = 418, this.unary_expression();
                    break;
                case h.BIT_NOT_OP:
                    this.enterOuterAlt(t, 4), this.state = 419, this.match(h.BIT_NOT_OP), this.state = 420, this.unary_expression();
                    break;
                case h.NOT:
                    this.enterOuterAlt(t, 5), this.state = 421, this.match(h.NOT), this.state = 422, this.unary_expression();
                    break;
                default: throw new r.error.NoViableAltException(this);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, J.prototype = Object.create(r.ParserRuleContext.prototype), J.prototype.constructor = J, J.prototype.constant = function () { return this.getTypedRuleContext($, 0); }, J.prototype.input_alias = function () { return this.getTypedRuleContext(m, 0); }, J.prototype.array_create_expression = function () { return this.getTypedRuleContext(k, 0); }, J.prototype.object_create_expression = function () { return this.getTypedRuleContext(F, 0); }, J.prototype.function_call_expression = function () { return this.getTypedRuleContext(j, 0); }, J.prototype.LEFT_PARENTHESIS = function () { return this.getToken(h.LEFT_PARENTHESIS, 0); }, J.prototype.scalar_expression = function () { return this.getTypedRuleContext(G, 0); }, J.prototype.RIGHT_PARENTHESIS = function () { return this.getToken(h.RIGHT_PARENTHESIS, 0); }, J.prototype.sql_query = function () { return this.getTypedRuleContext(f, 0); }, J.prototype.exists_scalar_expression = function () { return this.getTypedRuleContext(q, 0); }, J.prototype.array_scalar_expression = function () { return this.getTypedRuleContext(W, 0); }, J.prototype.primary_expression = function () { return this.getTypedRuleContext(J, 0); }, J.prototype.DOT = function () { return this.getToken(h.DOT, 0); }, J.prototype.property_name = function () { return this.getTypedRuleContext(w, 0); }, J.prototype.LEFT_BRACKET = function () { return this.getToken(h.LEFT_BRACKET, 0); }, J.prototype.RIGHT_BRACKET = function () { return this.getToken(h.RIGHT_BRACKET, 0); }, h.prototype.primary_expression = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new J(this, this._ctx, n); this.enterRecursionRule(i, 78, h.RULE_primary_expression, t); try {
            switch (this.enterOuterAlt(i, 1), this.state = 441, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.state = 426, this.constant();
                    break;
                case 2:
                    this.state = 427, this.input_alias();
                    break;
                case 3:
                    this.state = 428, this.array_create_expression();
                    break;
                case 4:
                    this.state = 429, this.object_create_expression();
                    break;
                case 5:
                    this.state = 430, this.function_call_expression();
                    break;
                case 6:
                    this.state = 431, this.match(h.LEFT_PARENTHESIS), this.state = 432, this.scalar_expression(), this.state = 433, this.match(h.RIGHT_PARENTHESIS);
                    break;
                case 7:
                    this.state = 435, this.match(h.LEFT_PARENTHESIS), this.state = 436, this.sql_query(), this.state = 437, this.match(h.RIGHT_PARENTHESIS);
                    break;
                case 8:
                    this.state = 439, this.exists_scalar_expression();
                    break;
                case 9: this.state = 440, this.array_scalar_expression();
            }
            this._ctx.stop = this._input.LT(-1), this.state = 453, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 36, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o)
                    switch (null !== this._parseListeners && this.triggerExitRuleEvent(), i, this.state = 451, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 35, this._ctx)) {
                        case 1:
                            if (i = new J(this, e, n), this.pushNewRecursionContext(i, 78, h.RULE_primary_expression), this.state = 443, !this.precpred(this._ctx, 4))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                            this.state = 444, this.match(h.DOT), this.state = 445, this.property_name();
                            break;
                        case 2:
                            if (i = new J(this, e, n), this.pushNewRecursionContext(i, 78, h.RULE_primary_expression), this.state = 446, !this.precpred(this._ctx, 3))
                                throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                            this.state = 447, this.match(h.LEFT_BRACKET), this.state = 448, this.scalar_expression(), this.state = 449, this.match(h.RIGHT_BRACKET);
                    }
                this.state = 455, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 36, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, $.prototype = Object.create(r.ParserRuleContext.prototype), $.prototype.constructor = $, $.prototype.K_undefined = function () { return this.getToken(h.K_undefined, 0); }, $.prototype.K_null = function () { return this.getToken(h.K_null, 0); }, $.prototype.K_true = function () { return this.getToken(h.K_true, 0); }, $.prototype.K_false = function () { return this.getToken(h.K_false, 0); }, $.prototype.NUMBER = function () { return this.getToken(h.NUMBER, 0); }, $.prototype.QUOTE = function (t) { return void 0 === t && (t = null), null === t ? this.getTokens(h.QUOTE) : this.getToken(h.QUOTE, t); }, $.prototype.ID = function () { return this.getToken(h.ID, 0); }, $.prototype.array_constant = function () { return this.getTypedRuleContext(Z, 0); }, $.prototype.object_constant = function () { return this.getTypedRuleContext(et, 0); }, h.ConstantContext = $, h.prototype.constant = function () { var t = new $(this, this._ctx, this.state); this.enterRule(t, 80, h.RULE_constant); try {
            switch (this.state = 466, this._errHandler.sync(this), this._input.LA(1)) {
                case h.K_undefined:
                    this.enterOuterAlt(t, 1), this.state = 456, this.match(h.K_undefined);
                    break;
                case h.K_null:
                    this.enterOuterAlt(t, 2), this.state = 457, this.match(h.K_null);
                    break;
                case h.K_true:
                    this.enterOuterAlt(t, 3), this.state = 458, this.match(h.K_true);
                    break;
                case h.K_false:
                    this.enterOuterAlt(t, 4), this.state = 459, this.match(h.K_false);
                    break;
                case h.NUMBER:
                    this.enterOuterAlt(t, 5), this.state = 460, this.match(h.NUMBER);
                    break;
                case h.QUOTE:
                    this.enterOuterAlt(t, 6), this.state = 461, this.match(h.QUOTE), this.state = 462, this.match(h.ID), this.state = 463, this.match(h.QUOTE);
                    break;
                case h.LEFT_BRACKET:
                    this.enterOuterAlt(t, 7), this.state = 464, this.array_constant();
                    break;
                case h.LEFT_BRACE:
                    this.enterOuterAlt(t, 8), this.state = 465, this.object_constant();
                    break;
                default: throw new r.error.NoViableAltException(this);
            }
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, Z.prototype = Object.create(r.ParserRuleContext.prototype), Z.prototype.constructor = Z, Z.prototype.LEFT_BRACKET = function () { return this.getToken(h.LEFT_BRACKET, 0); }, Z.prototype.RIGHT_BRACKET = function () { return this.getToken(h.RIGHT_BRACKET, 0); }, Z.prototype.array_constant_list = function () { return this.getTypedRuleContext(tt, 0); }, h.Array_constantContext = Z, h.prototype.array_constant = function () { var t = new Z(this, this._ctx, this.state); this.enterRule(t, 82, h.RULE_array_constant); var e = 0; try {
            this.enterOuterAlt(t, 1), this.state = 468, this.match(h.LEFT_BRACKET), this.state = 470, this._errHandler.sync(this), (0 == ((e = this._input.LA(1)) - 17 & -32) && 0 != (1 << e - 17 & (1 << h.K_false - 17 | 1 << h.K_null - 17 | 1 << h.K_true - 17 | 1 << h.K_undefined - 17)) || 0 == (e - 118 & -32) && 0 != (1 << e - 118 & (1 << h.NUMBER - 118 | 1 << h.LEFT_BRACE - 118 | 1 << h.LEFT_BRACKET - 118 | 1 << h.QUOTE - 118))) && (this.state = 469, this.array_constant_list(0)), this.state = 472, this.match(h.RIGHT_BRACKET);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, tt.prototype = Object.create(r.ParserRuleContext.prototype), tt.prototype.constructor = tt, tt.prototype.constant = function () { return this.getTypedRuleContext($, 0); }, tt.prototype.array_constant_list = function () { return this.getTypedRuleContext(tt, 0); }, tt.prototype.COMMA = function () { return this.getToken(h.COMMA, 0); }, h.prototype.array_constant_list = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new tt(this, this._ctx, n); this.enterRecursionRule(i, 84, h.RULE_array_constant_list, t); try {
            this.enterOuterAlt(i, 1), this.state = 475, this.constant(), this._ctx.stop = this._input.LT(-1), this.state = 482, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 39, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new tt(this, e, n), this.pushNewRecursionContext(i, 84, h.RULE_array_constant_list), this.state = 477, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 478, this.match(h.COMMA), this.state = 479, this.constant();
                }
                this.state = 484, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 39, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, et.prototype = Object.create(r.ParserRuleContext.prototype), et.prototype.constructor = et, et.prototype.LEFT_BRACE = function () { return this.getToken(h.LEFT_BRACE, 0); }, et.prototype.RIGHT_BRACE = function () { return this.getToken(h.RIGHT_BRACE, 0); }, et.prototype.object_constant_items = function () { return this.getTypedRuleContext(rt, 0); }, h.Object_constantContext = et, h.prototype.object_constant = function () { var t = new et(this, this._ctx, this.state); this.enterRule(t, 86, h.RULE_object_constant); try {
            this.enterOuterAlt(t, 1), this.state = 485, this.match(h.LEFT_BRACE), this.state = 487, this._errHandler.sync(this), this._input.LA(1) === h.ID && (this.state = 486, this.object_constant_items(0)), this.state = 489, this.match(h.RIGHT_BRACE);
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, nt.prototype = Object.create(r.ParserRuleContext.prototype), nt.prototype.constructor = nt, nt.prototype.property_name = function () { return this.getTypedRuleContext(w, 0); }, nt.prototype.COLON = function () { return this.getToken(h.COLON, 0); }, nt.prototype.constant = function () { return this.getTypedRuleContext($, 0); }, h.Object_constant_itemContext = nt, h.prototype.object_constant_item = function () { var t = new nt(this, this._ctx, this.state); this.enterRule(t, 88, h.RULE_object_constant_item); try {
            this.enterOuterAlt(t, 1), this.state = 491, this.property_name(), this.state = 492, this.match(h.COLON), this.state = 493, this.constant();
        }
        catch (e) {
            if (!(e instanceof r.error.RecognitionException))
                throw e;
            t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
        }
        finally {
            this.exitRule();
        } return t; }, rt.prototype = Object.create(r.ParserRuleContext.prototype), rt.prototype.constructor = rt, rt.prototype.object_constant_item = function () { return this.getTypedRuleContext(nt, 0); }, rt.prototype.object_constant_items = function () { return this.getTypedRuleContext(rt, 0); }, rt.prototype.COMMA = function () { return this.getToken(h.COMMA, 0); }, h.prototype.object_constant_items = function (t) { void 0 === t && (t = 0); var e = this._ctx, n = this.state, i = new rt(this, this._ctx, n); this.enterRecursionRule(i, 90, h.RULE_object_constant_items, t); try {
            this.enterOuterAlt(i, 1), this.state = 496, this.object_constant_item(), this._ctx.stop = this._input.LT(-1), this.state = 503, this._errHandler.sync(this);
            for (var o = this._interp.adaptivePredict(this._input, 41, this._ctx); 2 != o && o != r.atn.ATN.INVALID_ALT_NUMBER;) {
                if (1 === o) {
                    if (null !== this._parseListeners && this.triggerExitRuleEvent(), i, i = new rt(this, e, n), this.pushNewRecursionContext(i, 90, h.RULE_object_constant_items), this.state = 498, !this.precpred(this._ctx, 1))
                        throw new r.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    this.state = 499, this.match(h.COMMA), this.state = 500, this.object_constant_item();
                }
                this.state = 505, this._errHandler.sync(this), o = this._interp.adaptivePredict(this._input, 41, this._ctx);
            }
        }
        catch (t) {
            if (!(t instanceof r.error.RecognitionException))
                throw t;
            i.exception = t, this._errHandler.reportError(this, t), this._errHandler.recover(this, t);
        }
        finally {
            this.unrollRecursionContexts(e);
        } return i; }, h.prototype.sempred = function (t, e, n) { switch (e) {
            case 9: return this.select_list_sempred(t, n);
            case 12: return this.orderby_item_list_sempred(t, n);
            case 14: return this.from_specification_sempred(t, n);
            case 18: return this.relative_path_sempred(t, n);
            case 20: return this.array_item_list_sempred(t, n);
            case 24: return this.object_property_list_sempred(t, n);
            case 26: return this.function_arg_list_sempred(t, n);
            case 31: return this.logical_scalar_expression_sempred(t, n);
            case 36: return this.in_scalar_expression_item_list_sempred(t, n);
            case 37: return this.binary_expression_sempred(t, n);
            case 39: return this.primary_expression_sempred(t, n);
            case 42: return this.array_constant_list_sempred(t, n);
            case 45: return this.object_constant_items_sempred(t, n);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.select_list_sempred = function (t, e) { switch (e) {
            case 0: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.orderby_item_list_sempred = function (t, e) { switch (e) {
            case 1: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.from_specification_sempred = function (t, e) { switch (e) {
            case 2: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.relative_path_sempred = function (t, e) { switch (e) {
            case 3: return this.precpred(this._ctx, 3);
            case 4: return this.precpred(this._ctx, 2);
            case 5: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.array_item_list_sempred = function (t, e) { switch (e) {
            case 6: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.object_property_list_sempred = function (t, e) { switch (e) {
            case 7: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.function_arg_list_sempred = function (t, e) { switch (e) {
            case 8: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.logical_scalar_expression_sempred = function (t, e) { switch (e) {
            case 9: return this.precpred(this._ctx, 2);
            case 10: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.in_scalar_expression_item_list_sempred = function (t, e) { switch (e) {
            case 11: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.binary_expression_sempred = function (t, e) { switch (e) {
            case 12: return this.precpred(this._ctx, 11);
            case 13: return this.precpred(this._ctx, 10);
            case 14: return this.precpred(this._ctx, 9);
            case 15: return this.precpred(this._ctx, 8);
            case 16: return this.precpred(this._ctx, 7);
            case 17: return this.precpred(this._ctx, 6);
            case 18: return this.precpred(this._ctx, 5);
            case 19: return this.precpred(this._ctx, 4);
            case 20: return this.precpred(this._ctx, 3);
            case 21: return this.precpred(this._ctx, 2);
            case 22: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.primary_expression_sempred = function (t, e) { switch (e) {
            case 23: return this.precpred(this._ctx, 4);
            case 24: return this.precpred(this._ctx, 3);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.array_constant_list_sempred = function (t, e) { switch (e) {
            case 25: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, h.prototype.object_constant_items_sempred = function (t, e) { switch (e) {
            case 26: return this.precpred(this._ctx, 1);
            default: throw "No predicate with index:" + e;
        } }, e.CosmosDBSqlParser = h; }, function (t, e, n) { var r = n(20), i = ["悋Ꜫ脳맭䅼㯧瞆奤", "ӓ\b\t\t", "\t\t\t\t", "\b\t\b\t\t\t\n\t\n\v\t\v", "\f\t\f\r\t\r\t\t", "\t\t\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t", '\t\t \t !\t!"\t"#', "\t#$\t$%\t%&\t&'\t'(\t()\t)", "*\t*+\t+,\t,-\t-.\t./\t/0\t0", "1\t12\t23\t34\t45\t56\t67\t7", "8\t89\t9:\t:;\t;<\t<=\t=>\t>", "?\t?@\t@A\tAB\tBC\tCD\tDE\tE", "F\tFG\tGH\tHI\tIJ\tJK\tKL\tL", "M\tMN\tNO\tOP\tPQ\tQR\tRS\tS", "T\tTU\tUV\tVW\tWX\tXY\tYZ\tZ", "[\t[\\\t\\]\t]^\t^_\t_`\t`a\ta", "b\tbc\tcd\tde\tef\tfg\tgh\th", "i\tij\tjk\tkl\tlm\tmn\tno\to", "p\tpq\tqr\trs\tst\ttu\tuv\tv", "w\twx\txy\tyz\tz{\t{|\t|}\t}", "~\t~\t\t\t", "\t\t\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t", "\t\t \t ¡\t", "¡¢\t¢£\t£¤\t¤", "¥\t¥¦\t¦§\t§¨\t", "¨©\t©", "", "", "", "", "\b\b\b\b\b\t\t", "\t\t\t\n\n\n\n\n\n", "\n\n\v\v\v\v\v", "\v\f\f\f\f\f\r\r", "\r\r\r\r\r\r\r", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", '   !!!!!"', '""""""###', "$$$%%%%%%&", "&&&&&''''", "'(((((()))", "))))****++", "+++,,,,---", "--....////", "//////0000", "0001111112", "2222333333", "4444455555", "5555666677", "7788888999", "9999999999", "::::::::::", ":::::;;;;;", ";;;;;;;;<<", "<<<<<<<<<<", "=====>>>>>", "?????@@@@A", "AAAAAAABBB", "BBBBCCCCCC", "CCCDDDDEEE", "EFFFFFFGGG", "GGGGGHHHHH", "HHHHIIIIJJ", "JJJJKKKKKK", "KKKLLLLLLL", "LLMMMMMMMM", "NNNNNNNNNN", "NOOOOOOOOO", "OOOOOOOOPP", "PPPPPPQQQQ", "QQQQQQRRRR", "RRRRRRSSSS", "SSSSSSSSST", "TTTTTTTTTU", "UUUUUUVVVV", "WWWWWWXXXX", "XXYYYYYYZZ", "ZZ[[[[\\\\\\]", "]]]]]^^^^", "^^^^_____`", "```````aaa", "aaaaaaabbb", "bbbbbccccc", "cddddddeee", "eeffffgggg", "ghhhhhhhii", "iiiiiiiiii", "jjjjjjjjjj", "jjjjkkkkkk", "kkkkklllll", "llllllllll", "llllmmmmmm", "mmmmnnnnnn", "nnnnnooooo", "oooooppppq", "qqqrrrrrrs", "sssssttё\nt\rttђ", "ttuuuuњ\nu\ruuћ", "uuuuvvvѤ\nv\fv", "vѧ\vvwwwѫ\nw\fwwѮ\vw", "xxyyzz{{|", "|}}~~", "", "", "", "", "", "", "", "", "", "", "  ¡", "¡¢¢££¤", "¤¥¥¦¦§", "§¨¨©©ª", "\t\v\r\b\t", "\n\v\f\r", "!#%')+-/", "13579;= ?!A\"C#E$G%I&K'M(O)Q*S", "+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;u<w=y>{?}@ABC", "DEFGHIJKLM", "NOPQ¡R£S¥T§U©V«W­", "X¯Y±Z³[µ\\·]¹^»_½`¿aÁ", "bÃcÅdÇeÉfËgÍhÏiÑjÓkÕ", "l×mÙnÛoÝpßqárãsåtçué", "vëwíxïyñzó{õ|÷}ù~û", "ýÿāăąć", "ĉċčďđē", "ĕėęěĝğ", "ġģĥħĩī", "ĭįıĳĵķ", "ĹĻĽĿŁŃ", "ŅŇŉŋōŏ", 'ő#\v\f""', "\v\fC\\aac|2;C\\aac|", "3;2;$$))CCccD", "DddEEeeFFffGGggHHhh", "IIiiJJjjKKkkLLll", "MMmmNNnnOOooPPpp", "QQqqRRrrSSssTTttUUu", "uVVvvWWwwXXxxYYyy", "ZZzz[[{{\\\\||Ҽ", "", "\t\v", "\r", "", "", "", "", "!#", "%'", ")+", "-/", "13", "579", ";=", "?A", "CE", "GI", "KMO", "QS", "UW", "Y[", "]_", "ace", "gi", "km", "oq", "su", "wy{", "}", "", "", "", "", "", "", "", "", "¡£", "¥§", "©«", "­¯", "±³", "µ·", "¹»", "½¿", "ÁÃ", "ÅÇ", "ÉË", "ÍÏ", "ÑÓ", "Õ×", "ÙÛ", "Ýß", "áã", "åç", "éë", "íï", "ñó", "õ÷", "ùû", "ýÿ", "āă", "ąć", "ĉċ", "čď", "đē", "ĕė", "ęě", "ĝœ", "ŗŝ", "\tŠ\vŤ", "\rŬů", "ŴŹ", "ƁƇ", "ƌƕ", "ƚƞ", "!ƥ#Ƭ", "%Ʋ'ƶ", ")ƻ+ǁ", "-ǈ/ǋ1Ǒ", "3ǘ5ǝ", "7Ǡ9ǥ", ";Ǫ=ǯ", "?ǵAǹ", "CǾEȅGȈ", "IȋKȑ", "MȗOȜ", "QȢSȩ", "UȭWȲ", "Yȶ[Ȼ]ȿ", "_ɉaɐ", "cɖeɛ", "gɡiɦ", "kɯmɳ", "oɷqɼsʉ", "uʘwʥ", "yʱ{ʶ", "}ʻˀ", "˄ˌ", "˓˜", "ˠˤ", "˪˲", "˻˿", "̅̎", "̗̟", "̪̻", "¡̓£͍", "¥͗§ͤ", "©ͮ«͵", "­͹¯Ϳ", "±΅³΋", "µΏ·Γ", "¹Ζ»Μ", "½Τ¿Ω", "ÁαÃλ", "ÅσÇω", "ÉϏËϔ", "ÍϘÏϝ", "ÑϤÓϰ", "ÕϾ×Љ", "ÙМÛЦ", "Ýбßл", "áпãу", "åщçѐ", "éіëѡ", "íѨïѯ", "ñѱóѳ", "õѵ÷ѷ", "ùѹûѻ", "ýѽÿѿ", "āҁă҃", "ą҅ć҇", "ĉ҉ċҋ", "čҍďҏ", "đґēғ", "ĕҕėҗ", "ęҙěқ", "ĝҝğҟ", "ġҡģң", "ĥҥħҧ", "ĩҩīҫ", "ĭҭįү", "ıұĳҳ", "ĵҵķҷ", "ĹҹĻһ", "ĽҽĿҿ", "ŁӁŃӃ", "ŅӅŇӇ", "ŉӉŋӋ", "ōӍŏӏ", "őӑœŔğ", "ŔŕĹŕŖĥ", "ŖŗŘğ", "ŘřŁ¡řŚŁ", "¡ŚśğśŜŏ", "¨ŜŝŞğ", "ŞşŃ¢ş\b", "ŠšğšŢŃ", "¢Ţţģţ\n", "ŤťġťŦħ", "ŦŧŅ£ŧŨŋ", "¦ŨũħũŪħ", "ŪūĹū\f", "ŬŭġŭŮŏ", "¨ŮůŰģ", "ŰűğűŲŃ", "¢Ųųħų", "ŴŵģŵŶğ", "ŶŷŃ¢ŷŸŅ", "£ŸŹźģ", "źŻĻŻżĹ", "żŽŉ¥Žžħ", "žſŁ¡ſƀŅ", "£ƀƁƂģ", "ƂƃŁ¡ƃƄĻ", "ƄƅŃ¢ƅƆŃ", "¢ƆƇƈĥ", "ƈƉħƉƊŃ", "¢ƊƋģƋ", "ƌƍĥƍƎį", "ƎƏŃ¢ƏƐŅ", "£ƐƑįƑƒĹ", "ƒƓģƓƔŅ", "£ƔƕƖħ", "ƖƗĵƗƘŃ", "¢Ƙƙħƙ", "ƚƛħƛƜĹ", "ƜƝĥƝ", "ƞƟħƟƠŃ", "¢ƠơģơƢğ", "ƢƣĽƣƤħ", "Ƥ ƥƦħ", "ƦƧō§Ƨƨį", "ƨƩŃ¢ƩƪŅ", '£ƪƫŃ¢ƫ"', "ƬƭhƭƮc", "ƮƯnƯưu", "ưƱgƱ$Ʋ", "ƳĩƳƴĻƴ", "ƵŁ¡Ƶ&ƶ", "ƷĩƷƸŁ¡Ƹ", "ƹĻƹƺķƺ", "(ƻƼīƼ", "ƽŁ¡ƽƾĻƾ", "ƿŇ¤ƿǀĽǀ", "*ǁǂĭǂ", "ǃğǃǄŉ¥Ǆ", "ǅįǅǆĹǆ", "ǇīǇ,ǈ", "ǉįǉǊĹǊ", ".ǋǌįǌ", "ǍĹǍǎĹǎ", "ǏħǏǐŁ¡ǐ", "0Ǒǒįǒ", "ǓĹǓǔŃ¢ǔ", "ǕħǕǖŁ¡ǖ", "ǗŅ£Ǘ2ǘ", "ǙįǙǚĹǚ", "ǛŅ£ǛǜĻǜ", "4ǝǞįǞ", "ǟŃ¢ǟ6Ǡ", "ǡıǡǢĻǢ", "ǣįǣǤĹǤ", "8ǥǦĵǦ", "ǧħǧǨĩǨ", "ǩŅ£ǩ:Ǫ", "ǫĵǫǬįǬ", "ǭĳǭǮħǮ", "<ǯǰĵǰ", "ǱįǱǲķǲ", "ǳįǳǴŅ£Ǵ", ">ǵǶĹǶ", "ǷĻǷǸŅ£Ǹ", "@ǹǺpǺǻ", "wǻǼnǼǽ", "nǽBǾǿĻ", "ǿȀĩȀȁĩ", "ȁȂŃ¢Ȃȃħ", "ȃȄŅ£ȄD", "ȅȆĻȆȇĹ", "ȇFȈȉĻ", "ȉȊŁ¡ȊH", "ȋȌĻȌȍŁ", "¡ȍȎĥȎȏħ", "ȏȐŁ¡ȐJ", "ȑȒĻȒȓŇ", "¤ȓȔŅ£Ȕȕħ", "ȕȖŁ¡ȖL", "ȗȘĻȘșŉ", "¥șȚħȚțŁ", "¡țNȜȝŁ", "¡ȝȞįȞȟī", "ȟȠĭȠȡŅ", "£ȡPȢȣŃ", "¢ȣȤħȤȥĵ", "ȥȦħȦȧģ", "ȧȨŅ£ȨR", "ȩȪŃ¢Ȫȫħ", "ȫȬŅ£ȬT", "ȭȮŅ£Ȯȯĭ", "ȯȰħȰȱĹ", "ȱVȲȳŅ", "£ȳȴĻȴȵĽ", "ȵXȶȷv", "ȷȸtȸȹw", "ȹȺgȺZȻ", "ȼwȼȽfȽȾ", "hȾ\\ȿɀ", "wɀɁpɁɂf", "ɂɃgɃɄh", "ɄɅkɅɆpɆ", "ɇgɇɈfɈ^", "ɉɊŇ¤Ɋɋ", "ĽɋɌĥɌɍ", "ğɍɎŅ£Ɏɏ", "ħɏ`ɐɑ", "ŉ¥ɑɒğɒɓ", "ĵɓɔŇ¤ɔɕ", "ħɕbɖɗ", "ŋ¦ɗɘĭɘə", "ħəɚĹɚd", "ɛɜŋ¦ɜɝ", "ĭɝɞħɞɟ", "Ł¡ɟɠħɠf", "ɡɢŋ¦ɢɣ", "įɣɤŅ£ɤɥ", "ĭɥhɦɧ", "Kɧɨpɨɩh", "ɩɪkɪɫp", "ɫɬkɬɭvɭ", "ɮ{ɮjɯɰ", "Pɰɱcɱɲ", "Pɲlɳɴğ", "ɴɵġɵɶŃ", "¢ɶnɷɸğ", "ɸɹģɹɺĻ", "ɺɻŃ¢ɻp", "ɼɽğɽɾŁ", "¡ɾɿŁ¡ɿʀğ", "ʀʁŏ¨ʁʂa", "ʂʃģʃʄĻ", "ʄʅĹʅʆģ", "ʆʇğʇʈŅ", "£ʈrʉʊğ", "ʊʋŁ¡ʋʌŁ", "¡ʌʍğʍʎŏ", "¨ʎʏaʏʐģ", "ʐʑĻʑʒĹ", "ʒʓŅ£ʓʔğ", "ʔʕįʕʖĹ", "ʖʗŃ¢ʗt", "ʘʙğʙʚŁ", "¡ʚʛŁ¡ʛʜğ", "ʜʝŏ¨ʝʞa", "ʞʟĵʟʠħ", "ʠʡĹʡʢī", "ʢʣŅ£ʣʤĭ", "ʤvʥʦğ", "ʦʧŁ¡ʧʨŁ", "¡ʨʩğʩʪŏ", "¨ʪʫaʫʬŃ", "¢ʬʭĵʭʮį", "ʮʯģʯʰħ", "ʰxʱʲğ", "ʲʳŃ¢ʳʴį", "ʴʵĹʵz", "ʶʷğʷʸŅ", "£ʸʹğʹʺĹ", "ʺ|ʻʼğ", "ʼʽŅ£ʽʾĹ", "ʾʿ4ʿ~", "ˀˁğˁ˂ŉ¥", "˂˃ī˃", "˄˅ģ˅ˆħ", "ˆˇįˇˈĵ", "ˈˉįˉˊĹ", "ˊˋīˋ", "ˌˍģˍˎĻ", "ˎˏĹˏːģ", "ːˑğˑ˒Ņ£", "˒˓˔ģ", "˔˕Ļ˕˖Ĺ", "˖˗Ņ£˗˘ğ", "˘˙į˙˚Ĺ", "˚˛Ń¢˛", "˜˝ģ˝˞Ļ", "˞˟Ń¢˟", "ˠˡģˡˢĻ", "ˢˣŅ£ˣ", "ˤ˥ģ˥˦Ļ", "˦˧Ň¤˧˨Ĺ", "˨˩Ņ£˩", "˪˫ĥ˫ˬħ", "ˬ˭ī˭ˮŁ¡", "ˮ˯ħ˯˰ħ", "˰˱Ń¢˱", "˲˳ħ˳˴Ĺ", "˴˵ĥ˵˶Ń¢", "˶˷ŋ¦˷˸į", "˸˹Ņ£˹˺ĭ", "˺˻˼ħ", "˼˽ō§˽˾Ľ", "˾˿̀ĩ", "̀́ĵ́̂Ļ", "̂̃Ļ̃̄Ł¡", "̄̅̆į", "̆̇Ĺ̇̈ĥ", "̈̉ħ̉̊ō§", "̊̋a̋̌Ļ", "̌̍ĩ̍", "̎̏į̏̐Ń¢", "̐̑a̑̒ğ", "̒̓Ł¡̓̔Ł¡", "̔̕ğ̖̕ŏ¨", "̖̗̘į", "̘̙Ń¢̙̚a", "̛̚ġ̛̜Ļ", "̜̝Ļ̝̞ĵ", "̞̟̠į", "̡̠Ń¢̡̢a", "̢̣ĥ̣̤ħ", "̤̥ĩ̥̦į", "̧̦Ĺ̧̨ħ", "̨̩ĥ̩", "̪̫į̫̬Ń¢", "̬̭a̭̮ĩ", "̮̯į̯̰Ĺ", "̰̱į̱̲Ņ£", "̲̳ħ̴̳a", "̴̵Ĺ̵̶Ň¤", "̶̷ķ̷̸ġ", "̸̹ħ̹̺Ł¡", "̺̻̼į", "̼̽Ń¢̽̾a", "̾̿Ĺ̿̀Ň¤", "̀́ĵ́͂ĵ", "͂ ̓̈́į", "̈́ͅŃ¢͆ͅa", "͇͆Ĺ͇͈Ň¤", "͈͉ķ͉͊ġ", "͊͋ħ͋͌Ł¡", "͌¢͍͎į", "͎͏Ń¢͏͐a", "͐͑Ļ͑͒ġ", "͓͒ı͓͔ħ", "͔͕ģ͕͖Ņ£", "͖¤͗͘į", "͙͘Ń¢͙͚a", "͚͛Ľ͛͜Ł¡", "͜͝į͝͞ķ", "͟͞į͟͠Ņ£", "͠͡į͢͡ŉ¥", "ͣ͢ħͣ¦", "ͤͥįͥͦŃ¢", "ͦͧaͧͨŃ¢", "ͨͩŅ£ͩͪŁ¡", "ͪͫįͫͬĹ", "ͬͭīͭ¨", "ͮͯĵͯͰħ", "ͰͱĹͱͲī", "ͲͳŅ£ͳʹĭ", "ʹª͵Ͷĵ", "ͶͷĻͷ͸ī", "͸¬͹ͺĵ", "ͺͻĻͻͼī", "ͼͽ3ͽ;2", ";®Ϳ΀ĵ", "΀΁Ļ΁΂ŋ¦", "΂΃ħ΃΄Ł¡", "΄°΅Άĵ", "Ά·Ņ£·ΈŁ¡", "ΈΉįΉΊķ", "Ί²΋Όķ", "Ό΍ğ΍Ύō§", "Ύ´Ώΐķ", "ΐΑįΑΒĹ", "Β¶ΓΔĽ", "ΔΕįΕ¸", "ΖΗĽΗΘĻ", "ΘΙŋ¦ΙΚħ", "ΚΛŁ¡Λº", "ΜΝŁ¡ΝΞğ", "ΞΟĥΟΠį", "ΠΡğΡ΢Ĺ", "΢ΣŃ¢Σ¼", "ΤΥŁ¡ΥΦğ", "ΦΧĹΧΨĥ", "Ψ¾ΩΪŁ¡", "ΪΫħΫάĽ", "άέĵέήğ", "ήίģίΰħ", "ΰÀαβŁ¡", "βγħγδĽ", "δεĵεζį", "ζηģηθğ", "θιŅ£ικħ", "κÂλμŁ¡", "μνħνξŉ¥", "ξοħοπŁ¡", "πρŃ¢ρςħ", "ςÄστŁ¡", "τυĻυφŇ¤", "φχĹχψĥ", "ψÆωϊŁ¡", "ϊϋŅ£ϋόŁ¡", "όύįύώķ", "ώÈϏϐŃ¢", "ϐϑįϑϒī", "ϒϓĹϓÊ", "ϔϕŃ¢ϕϖį", "ϖϗĹϗÌ", "ϘϙŃ¢ϙϚĿ ", "ϚϛŁ¡ϛϜŅ£", "ϜÎϝϞŃ¢", "ϞϟĿ ϟϠŇ¤", "ϠϡğϡϢŁ¡", "ϢϣħϣÐ", "ϤϥŃ¢ϥϦŅ£", "ϦϧaϧϨĥ", "ϨϩįϩϪŃ¢", "ϪϫŅ£ϫϬğ", "ϬϭĹϭϮģ", "ϮϯħϯÒ", "ϰϱŃ¢ϱϲŅ£", "ϲϳaϳϴį", "ϴϵĹϵ϶Ņ£", "϶ϷħϷϸŁ¡", "ϸϹŃ¢ϹϺħ", "ϺϻģϻϼŅ£", "ϼϽŃ¢ϽÔ", "ϾϿŃ¢ϿЀŅ£", "ЀЁaЁЂį", "ЂЃŃ¢ЃЄŉ¥", "ЄЅğЅІĵ", "ІЇįЇЈĥ", "ЈÖЉЊŃ¢", "ЊЋŅ£ЋЌa", "ЌЍįЍЎŃ¢", "ЎЏŉ¥ЏАğ", "АБĵБВį", "ВГĥГДĥ", "ДЕħЕЖŅ£", "ЖЗğЗИį", "ИЙĵЙКħ", "КЛĥЛØ", "МНŃ¢НОŅ£", "ОПaПРŋ¦", "РСįСТŅ£", "ТУĭУФį", "ФХĹХÚ", "ЦЧŃ¢ЧШŅ£", "ШЩğЩЪŁ¡", "ЪЫŅ£ЫЬŃ¢", "ЬЭŋ¦ЭЮį", "ЮЯŅ£Яаĭ", "аÜбвŃ¢", "вгŇ¤гдġ", "деŃ¢ежŅ£", "жзŁ¡зиį", "ийĹйкī", "кÞлмŃ¢", "мнŇ¤ноķ", "оàпрŅ£", "рсğстĹ", "тâуфŅ£", "фхŁ¡хцŇ¤", "цчĹчшģ", "шäщъŇ¤", "ъыĽыьĽ", "ьэħэюŁ¡", "юæяё\t", "ѐяёђ", "ђѐђѓ", "ѓєєѕ\btѕ", "èії/ї", "љ/јњ\nљј", "њћћљ", "ћќќѝ", "ѝў\tўџ", "џѠ\buѠê", "ѡѥ\tѢѤ\t", "ѣѢѤѧ", "ѥѣѥѦ", "Ѧìѧѥ", "ѨѬ\tѩѫ\t", "ѪѩѫѮ", "ѬѪѬѭ", "ѭîѮѬ", "ѯѰEѰð", "ѱѲ.Ѳò", "ѳѴ0Ѵô", "ѵѶ-Ѷö", "ѷѸ/Ѹø", "ѹѺ,Ѻú", "ѻѼ1Ѽü", "ѽѾ'Ѿþ", "ѿҀ<ҀĀ", "ҁ҂?҂Ă", "҃҄@҄Ą", "҅҆>҆Ć", "҇҈҈Ĉ", "҉Ҋ~ҊĊ", "ҋҌ(ҌČ", "ҍҎ`ҎĎ", "ҏҐAҐĐ", "ґҒ}ҒĒ", "ғҔҔĔ", "ҕҖ]ҖĖ", "җҘ_ҘĘ", "ҙҚ*ҚĚ", "қҜ+ҜĜ", "ҝҞ\t\bҞĞ", "ҟҠ\t\tҠĠҡ", "Ң\t\nҢĢңҤ", "\t\vҤĤҥҦ", "\t\fҦĦҧҨ\t\r", "ҨĨҩҪ\t", "ҪĪҫҬ\t", "ҬĬҭҮ\t", "ҮĮүҰ\t", "ҰİұҲ\t", "ҲĲҳҴ\t", "ҴĴҵҶ\t", "ҶĶҷҸ\t", "ҸĸҹҺ\t", "ҺĺһҼ\t", "ҼļҽҾ\t", "ҾľҿӀ\t", "ӀŀӁӂ\t", "ӂłӃӄ\t", "ӄńӅӆ\t", "ӆņӇӈ\t", "ӈňӉӊ\t", "ӊŊӋӌ\t", "ӌŌӍӎ\t ", "ӎŎӏӐ\t!", 'ӐŐӑӒ\t"Ӓ', "ŒђћѥѬ", "\b"].join(""), o = (new r.atn.ATNDeserializer).deserialize(i), s = o.decisionToState.map(function (t, e) { return new r.dfa.DFA(t, e); }); function a(t) { return r.Lexer.call(this, t), this._interp = new r.atn.LexerATNSimulator(this, o, s, new r.PredictionContextCache), this; } a.prototype = Object.create(r.Lexer.prototype), a.prototype.constructor = a, Object.defineProperty(a.prototype, "atn", { get: function () { return o; } }), a.EOF = r.Token.EOF, a.AND = 1, a.ARRAY = 2, a.AS = 3, a.ASC = 4, a.BETWEEN = 5, a.BY = 6, a.CASE = 7, a.CAST = 8, a.CONVERT = 9, a.CROSS = 10, a.DESC = 11, a.DISTINCT = 12, a.ELSE = 13, a.END = 14, a.ESCAPE = 15, a.EXISTS = 16, a.K_false = 17, a.FOR = 18, a.FROM = 19, a.GROUP = 20, a.HAVING = 21, a.IN = 22, a.INNER = 23, a.INSERT = 24, a.INTO = 25, a.IS = 26, a.JOIN = 27, a.LEFT = 28, a.LIKE = 29, a.LIMIT = 30, a.NOT = 31, a.K_null = 32, a.OFFSET = 33, a.ON = 34, a.OR = 35, a.ORDER = 36, a.OUTER = 37, a.OVER = 38, a.RIGHT = 39, a.SELECT = 40, a.SET = 41, a.THEN = 42, a.TOP = 43, a.K_true = 44, a.K_udf = 45, a.K_undefined = 46, a.UPDATE = 47, a.VALUE = 48, a.WHEN = 49, a.WHERE = 50, a.WITH = 51, a.Infinity = 52, a.NaN = 53, a.ABS = 54, a.ACOS = 55, a.ARRAY_CONCAT = 56, a.ARRAY_CONTAINS = 57, a.ARRAY_LENGTH = 58, a.ARRAY_SLICE = 59, a.ASIN = 60, a.ATAN = 61, a.ATN2 = 62, a.AVG = 63, a.CEILING = 64, a.CONCAT = 65, a.CONTAINS = 66, a.COS = 67, a.COT = 68, a.COUNT = 69, a.DEGREES = 70, a.ENDSWITH = 71, a.EXP = 72, a.FLOOR = 73, a.INDEX_OF = 74, a.S_ARRAY = 75, a.IS_BOOL = 76, a.IS_DEFINED = 77, a.IS_FINITE_NUMBER = 78, a.IS_NULL = 79, a.IS_NUMBER = 80, a.IS_OBJECT = 81, a.IS_PRIMITIVE = 82, a.IS_STRING = 83, a.LENGTH = 84, a.LOG = 85, a.LOG10 = 86, a.LOWER = 87, a.LTRIM = 88, a.MAX = 89, a.MIN = 90, a.PI = 91, a.POWER = 92, a.RADIANS = 93, a.RAND = 94, a.REPLACE = 95, a.REPLICATE = 96, a.REVERSE = 97, a.ROUND = 98, a.RTRIM = 99, a.SIGN = 100, a.SIN = 101, a.SQRT = 102, a.SQUARE = 103, a.ST_DISTANCE = 104, a.ST_INTERSECTS = 105, a.ST_ISVALID = 106, a.ST_ISVALIDDETAILED = 107, a.ST_WITHIN = 108, a.STARTSWITH = 109, a.SUBSTRING = 110, a.SUM = 111, a.TAN = 112, a.TRUNC = 113, a.UPPER = 114, a.SPACE = 115, a.COMMENTS = 116, a.ID = 117, a.NUMBER = 118, a.COL = 119, a.COMMA = 120, a.DOT = 121, a.ADD = 122, a.SUB = 123, a.MUL = 124, a.DIV = 125, a.MOD = 126, a.COLON = 127, a.EQUAL = 128, a.GREATER = 129, a.LESS = 130, a.BIT_NOT_OP = 131, a.BIT_OR_OP = 132, a.BIT_AND_OP = 133, a.BIT_XOR_OP = 134, a.QUEST = 135, a.LEFT_BRACE = 136, a.RIGHT_BRACE = 137, a.LEFT_BRACKET = 138, a.RIGHT_BRACKET = 139, a.LEFT_PARENTHESIS = 140, a.RIGHT_PARENTHESIS = 141, a.QUOTE = 142, a.prototype.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"], a.prototype.modeNames = ["DEFAULT_MODE"], a.prototype.literalNames = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "'false'", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "'null'", null, null, null, null, null, null, null, null, null, null, null, "'true'", "'udf'", "'undefined'", null, null, null, null, null, "'Infinity'", "'NaN'", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "'C'", "','", "'.'", "'+'", "'-'", "'*'", "'/'", "'%'", "':'", "'='", "'>'", "'<'", "'~'", "'|'", "'&'", "'^'", "'?'", "'{'", "'}'", "'['", "']'", "'('", "')'"], a.prototype.symbolicNames = [null, "AND", "ARRAY", "AS", "ASC", "BETWEEN", "BY", "CASE", "CAST", "CONVERT", "CROSS", "DESC", "DISTINCT", "ELSE", "END", "ESCAPE", "EXISTS", "K_false", "FOR", "FROM", "GROUP", "HAVING", "IN", "INNER", "INSERT", "INTO", "IS", "JOIN", "LEFT", "LIKE", "LIMIT", "NOT", "K_null", "OFFSET", "ON", "OR", "ORDER", "OUTER", "OVER", "RIGHT", "SELECT", "SET", "THEN", "TOP", "K_true", "K_udf", "K_undefined", "UPDATE", "VALUE", "WHEN", "WHERE", "WITH", "Infinity", "NaN", "ABS", "ACOS", "ARRAY_CONCAT", "ARRAY_CONTAINS", "ARRAY_LENGTH", "ARRAY_SLICE", "ASIN", "ATAN", "ATN2", "AVG", "CEILING", "CONCAT", "CONTAINS", "COS", "COT", "COUNT", "DEGREES", "ENDSWITH", "EXP", "FLOOR", "INDEX_OF", "S_ARRAY", "IS_BOOL", "IS_DEFINED", "IS_FINITE_NUMBER", "IS_NULL", "IS_NUMBER", "IS_OBJECT", "IS_PRIMITIVE", "IS_STRING", "LENGTH", "LOG", "LOG10", "LOWER", "LTRIM", "MAX", "MIN", "PI", "POWER", "RADIANS", "RAND", "REPLACE", "REPLICATE", "REVERSE", "ROUND", "RTRIM", "SIGN", "SIN", "SQRT", "SQUARE", "ST_DISTANCE", "ST_INTERSECTS", "ST_ISVALID", "ST_ISVALIDDETAILED", "ST_WITHIN", "STARTSWITH", "SUBSTRING", "SUM", "TAN", "TRUNC", "UPPER", "SPACE", "COMMENTS", "ID", "NUMBER", "COL", "COMMA", "DOT", "ADD", "SUB", "MUL", "DIV", "MOD", "COLON", "EQUAL", "GREATER", "LESS", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "QUEST", "LEFT_BRACE", "RIGHT_BRACE", "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS", "QUOTE"], a.prototype.ruleNames = ["AND", "ARRAY", "AS", "ASC", "BETWEEN", "BY", "CASE", "CAST", "CONVERT", "CROSS", "DESC", "DISTINCT", "ELSE", "END", "ESCAPE", "EXISTS", "K_false", "FOR", "FROM", "GROUP", "HAVING", "IN", "INNER", "INSERT", "INTO", "IS", "JOIN", "LEFT", "LIKE", "LIMIT", "NOT", "K_null", "OFFSET", "ON", "OR", "ORDER", "OUTER", "OVER", "RIGHT", "SELECT", "SET", "THEN", "TOP", "K_true", "K_udf", "K_undefined", "UPDATE", "VALUE", "WHEN", "WHERE", "WITH", "Infinity", "NaN", "ABS", "ACOS", "ARRAY_CONCAT", "ARRAY_CONTAINS", "ARRAY_LENGTH", "ARRAY_SLICE", "ASIN", "ATAN", "ATN2", "AVG", "CEILING", "CONCAT", "CONTAINS", "COS", "COT", "COUNT", "DEGREES", "ENDSWITH", "EXP", "FLOOR", "INDEX_OF", "S_ARRAY", "IS_BOOL", "IS_DEFINED", "IS_FINITE_NUMBER", "IS_NULL", "IS_NUMBER", "IS_OBJECT", "IS_PRIMITIVE", "IS_STRING", "LENGTH", "LOG", "LOG10", "LOWER", "LTRIM", "MAX", "MIN", "PI", "POWER", "RADIANS", "RAND", "REPLACE", "REPLICATE", "REVERSE", "ROUND", "RTRIM", "SIGN", "SIN", "SQRT", "SQUARE", "ST_DISTANCE", "ST_INTERSECTS", "ST_ISVALID", "ST_ISVALIDDETAILED", "ST_WITHIN", "STARTSWITH", "SUBSTRING", "SUM", "TAN", "TRUNC", "UPPER", "SPACE", "COMMENTS", "ID", "NUMBER", "COL", "COMMA", "DOT", "ADD", "SUB", "MUL", "DIV", "MOD", "COLON", "EQUAL", "GREATER", "LESS", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "QUEST", "LEFT_BRACE", "RIGHT_BRACE", "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS", "QUOTE", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a.prototype.grammarFileName = "CosmosDBSqlLexer.g4", e.CosmosDBSqlLexer = a; }, function (t, e, n) {
            "use strict";
            var r = this && this.__extends || function () { var t = function (e, n) { return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]); })(e, n); }; return function (e, n) { function r() { this.constructor = e; } t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(4), o = n(7), s = n(3), a = n(27), c = n(18), u = n(1), l = n(21), h = function (t) { function e(e, n, r, i, o) { var s = t.call(this, e, n, r, i) || this; return s.predictionMode = c.PredictionMode.LL, s.parser = e, s.atn = n, s.languageService = o, s; } return r(e, t), e.prototype.adaptivePredict = function (e, n, r) { var i = -1; try {
                if (this.languageService.IsInPredict = !0, this.languageService.EofReachedInPredict = !1, n >= 0)
                    return t.prototype.adaptivePredict.call(this, e, n, r);
            }
            catch (t) {
                if (t instanceof s.NoViableAltException && t.offendingToken.type === u.Token.EOF)
                    return i = t.offendingToken.tokenIndex - this.parser.getCurrentToken().tokenIndex, 1;
                throw t;
            }
            finally {
                if (this.languageService.EofReachedInPredict) {
                    if (i < 0)
                        for (i = 0; e.LA(i + 1) != u.Token.EOF;)
                            i++;
                    if (i > 0) {
                        var o = this.CalculateValidStates(e, i);
                        this.languageService.RecordErrorStatesBeforeEof(o);
                    }
                }
                this.languageService.IsInPredict = !1;
            } }, e.prototype.CalculateValidStates = function (t, e) { for (var n = this, r = [{ state: this.atn.states[this.parser.state], transitionStates: [] }], i = [], o = function (e) { var i = [], o = t.LA(e); r.forEach(function (t) { i = i.concat(n.ConsumeSingleTokenAhead(t, o)).filter(l.Utils.notDuplicate); }), r = i.filter(l.Utils.notDuplicate); }, s = 1; s <= e; s++)
                o(s); return r.forEach(function (t) { i = i.concat(n.SearchValidStates(t)); }), i.map(function (t) { return t.state; }).filter(l.Utils.notDuplicate); }, e.prototype.ConsumeSingleTokenAhead = function (t, e) { var n = [], r = t.state, o = { state: null, transitionStates: t.transitionStates.slice() }; if (o.transitionStates.length > 0 && o.transitionStates[o.transitionStates.length - 1].ruleIndex === r.ruleIndex && o.transitionStates.pop(), o.transitionStates.push(r), !(r instanceof i.RuleStopState))
                for (var s = 0; s < r.transitions.length; s++) {
                    var a = r.transitions[s], c = a.target;
                    o.state = c, a.isEpsilon ? n = n.concat(this.ConsumeSingleTokenAhead(o, e)).filter(l.Utils.notDuplicate) : null != a.label && a.label.contains(e) && (n = n.concat(this.SearchValidStates(o)));
                } return n.filter(l.Utils.notEmpty); }, e.prototype.SearchValidStates = function (t) { var e = []; return this.IsLastStateBeforeRuleStopState(t.state) ? (e = this.BackTracingAndFindActiveStates(t).filter(l.Utils.notDuplicate), this.HasActiveChildrenState(t.state) && e.push(t)) : e.push(t), e; }, e.prototype.BackTracingAndFindActiveStates = function (t) { for (var e = [], n = t.state.ruleIndex, r = this.GetLastStateInDifferentRulesFomStatesStack(t.transitionStates, n), s = r.length - 1, a = !0; a && s >= 0;) {
                var c = r[s];
                a = !1;
                for (var u = this.GetRuleFollowingState(c, n), h = 0; h < u.length; h++) {
                    for (var p = !1, f = !1, d = u[h].transitions; d.length > 0;) {
                        for (var _ = [], y = 0; y < d.length; y++)
                            d[y].isEpsilon ? d[y] instanceof o.RuleTransition ? f = !0 : d[y].target instanceof i.RuleStopState ? p = !0 : _ = _.concat(d[y].target.transitions) : f = !0;
                        if (d = _, p && f)
                            break;
                    }
                    if (p && (a = !0), f) {
                        var E = { state: u[h], transitionStates: r.slice(0, s + 1) };
                        e.push(E);
                    }
                }
                s--, a && (n = u[0].ruleIndex);
            } return e.filter(l.Utils.notEmpty); }, e.prototype.GetLastStateInDifferentRulesFomStatesStack = function (t, e) { for (var n = [], r = e, i = t.length - 1; i >= 0; i--)
                t[i].ruleIndex !== r && (n.push(t[i]), r = t[i].ruleIndex); return n.reverse(), n.filter(l.Utils.notEmpty); }, e.prototype.GetRuleFollowingState = function (t, e) { var n = []; if (t instanceof i.RuleStopState)
                return n; for (var r = t.transitions; r.length > 0;) {
                for (var s = [], a = 0; a < r.length; a++)
                    r[a].isEpsilon && (r[a] instanceof o.RuleTransition ? r[a].ruleIndex === e && n.push(r[a].followState) : r[a].target instanceof i.RuleStopState || (s = s.concat(r[a].target.transitions)));
                r = s;
            } return n.filter(l.Utils.notEmpty); }, e.prototype.IsLastStateBeforeRuleStopState = function (t) { for (var e = t.transitions; e.length > 0;) {
                for (var n = [], r = 0; r < e.length; r++)
                    if (e[r].isEpsilon) {
                        if (e[r].target instanceof i.RuleStopState)
                            return !0;
                        e[r] instanceof o.RuleTransition || (n = n.concat(e[r].target.transitions));
                    }
                e = n;
            } return !1; }, e.prototype.HasActiveChildrenState = function (t) { for (var e = t.transitions; e.length > 0;) {
                for (var n = [], r = 0; r < e.length; r++) {
                    if (!e[r].isEpsilon)
                        return !0;
                    if (e[r] instanceof o.RuleTransition)
                        return !0;
                    e[r].target instanceof i.RuleStopState || (n = n.concat(e[r].target.transitions));
                }
                e = n;
            } return !1; }, e; }(a.ParserATNSimulator);
            e.LSParserATNSimulator = h;
        }, function (t, e, n) {
            "use strict";
            var r = this && this.__extends || function () { var t = function (e, n) { return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]); })(e, n); }; return function (e, n) { function r() { this.constructor = e; } t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = function (t) { function e(e) { var n = t.call(this) || this; return n.AddSyntaxError = e, n; } return r(e, t), e.prototype.syntaxError = function (t, e, n, r, i, o) { this.AddSyntaxError(i, n, r); }, e; }(n(12).ErrorListener);
            e.LSErrorListener = i;
        }, function (t, e, n) {
            "use strict";
            var r = this && this.__extends || function () { var t = function (e, n) { return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]); })(e, n); }; return function (e, n) { function r() { this.constructor = e; } t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(22), o = n(1), s = function (t) { function e(e) { return t.call(this, e) || this; } return r(e, t), e.prototype.LA = function (e) { var n = t.prototype.LA.call(this, e); return null != n && n == o.Token.EOF && void 0 != this.EofListener && this.EofListener(), n; }, e.prototype.LT = function (e) { var n = t.prototype.LT.call(this, e); return null != n && n.type == o.Token.EOF && void 0 != this.EofListener && this.EofListener(), n; }, e; }(i.CommonTokenStream);
            e.LSCommonTokenStream = s;
        }, function (t, e, n) { var r = n(1).Token, i = n(5).ParseTreeListener, o = n(29).Recognizer, s = n(24).DefaultErrorStrategy, a = n(32).ATNDeserializer, c = n(31).ATNDeserializationOptions, u = n(5).TerminalNode, l = n(5).ErrorNode; function h(t) { return i.call(this), this.parser = t, this; } function p(t) { return o.call(this), this._input = null, this._errHandler = new s, this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = !0, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(t), this; } h.prototype = Object.create(i.prototype), h.prototype.constructor = h, h.prototype.enterEveryRule = function (t) { console.log("enter   " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text); }, h.prototype.visitTerminal = function (t) { console.log("consume " + t.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]); }, h.prototype.exitEveryRule = function (t) { console.log("exit    " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text); }, p.prototype = Object.create(o.prototype), p.prototype.contructor = p, p.bypassAltsAtnCache = {}, p.prototype.reset = function () { null !== this._input && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(!1), this._precedenceStack = [], this._precedenceStack.push(0), null !== this._interp && this._interp.reset(); }, p.prototype.match = function (t) { var e = this.getCurrentToken(); return e.type === t ? (this._errHandler.reportMatch(this), this.consume()) : (e = this._errHandler.recoverInline(this), this.buildParseTrees && -1 === e.tokenIndex && this._ctx.addErrorNode(e)), e; }, p.prototype.matchWildcard = function () { var t = this.getCurrentToken(); return t.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (t = this._errHandler.recoverInline(this), this._buildParseTrees && -1 === t.tokenIndex && this._ctx.addErrorNode(t)), t; }, p.prototype.getParseListeners = function () { return this._parseListeners || []; }, p.prototype.addParseListener = function (t) { if (null === t)
            throw "listener"; null === this._parseListeners && (this._parseListeners = []), this._parseListeners.push(t); }, p.prototype.removeParseListener = function (t) { if (null !== this._parseListeners) {
            var e = this._parseListeners.indexOf(t);
            e >= 0 && this._parseListeners.splice(e, 1), 0 === this._parseListeners.length && (this._parseListeners = null);
        } }, p.prototype.removeParseListeners = function () { this._parseListeners = null; }, p.prototype.triggerEnterRuleEvent = function () { if (null !== this._parseListeners) {
            var t = this._ctx;
            this._parseListeners.map(function (e) { e.enterEveryRule(t), t.enterRule(e); });
        } }, p.prototype.triggerExitRuleEvent = function () { if (null !== this._parseListeners) {
            var t = this._ctx;
            this._parseListeners.slice(0).reverse().map(function (e) { t.exitRule(e), e.exitEveryRule(t); });
        } }, p.prototype.getTokenFactory = function () { return this._input.tokenSource._factory; }, p.prototype.setTokenFactory = function (t) { this._input.tokenSource._factory = t; }, p.prototype.getATNWithBypassAlts = function () { var t = this.getSerializedATN(); if (null === t)
            throw "The current parser does not support an ATN with bypass alternatives."; var e = this.bypassAltsAtnCache[t]; if (null === e) {
            var n = new c;
            n.generateRuleBypassTransitions = !0, e = new a(n).deserialize(t), this.bypassAltsAtnCache[t] = e;
        } return e; }; var f = n(15).Lexer; p.prototype.compileParseTreePattern = function (t, e, n) { if (null === (n = n || null) && null !== this.getTokenStream()) {
            var r = this.getTokenStream().tokenSource;
            r instanceof f && (n = r);
        } if (null === n)
            throw "Parser can't discover a lexer to use"; return new ParseTreePatternMatcher(n, this).compile(t, e); }, p.prototype.getInputStream = function () { return this.getTokenStream(); }, p.prototype.setInputStream = function (t) { this.setTokenStream(t); }, p.prototype.getTokenStream = function () { return this._input; }, p.prototype.setTokenStream = function (t) { this._input = null, this.reset(), this._input = t; }, p.prototype.getCurrentToken = function () { return this._input.LT(1); }, p.prototype.notifyErrorListeners = function (t, e, n) { e = e || null, n = n || null, null === e && (e = this.getCurrentToken()), this._syntaxErrors += 1; var r = e.line, i = e.column; this.getErrorListenerDispatch().syntaxError(this, e, r, i, t, n); }, p.prototype.consume = function () { var t = this.getCurrentToken(); t.type !== r.EOF && this.getInputStream().consume(); var e, n = null !== this._parseListeners && this._parseListeners.length > 0; (this.buildParseTrees || n) && ((e = this._errHandler.inErrorRecoveryMode(this) ? this._ctx.addErrorNode(t) : this._ctx.addTokenNode(t)).invokingState = this.state, n && this._parseListeners.map(function (t) { e instanceof l || void 0 !== e.isErrorNode && e.isErrorNode() ? t.visitErrorNode(e) : e instanceof u && t.visitTerminal(e); })); return t; }, p.prototype.addContextToParseTree = function () { null !== this._ctx.parentCtx && this._ctx.parentCtx.addChild(this._ctx); }, p.prototype.enterRule = function (t, e, n) { this.state = e, this._ctx = t, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), null !== this._parseListeners && this.triggerEnterRuleEvent(); }, p.prototype.exitRule = function () { this._ctx.stop = this._input.LT(-1), null !== this._parseListeners && this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx; }, p.prototype.enterOuterAlt = function (t, e) { t.setAltNumber(e), this.buildParseTrees && this._ctx !== t && null !== this._ctx.parentCtx && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(t)), this._ctx = t; }, p.prototype.getPrecedence = function () { return 0 === this._precedenceStack.length ? -1 : this._precedenceStack[this._precedenceStack.length - 1]; }, p.prototype.enterRecursionRule = function (t, e, n, r) { this.state = e, this._precedenceStack.push(r), this._ctx = t, this._ctx.start = this._input.LT(1), null !== this._parseListeners && this.triggerEnterRuleEvent(); }, p.prototype.pushNewRecursionContext = function (t, e, n) { var r = this._ctx; r.parentCtx = t, r.invokingState = e, r.stop = this._input.LT(-1), this._ctx = t, this._ctx.start = r.start, this.buildParseTrees && this._ctx.addChild(r), null !== this._parseListeners && this.triggerEnterRuleEvent(); }, p.prototype.unrollRecursionContexts = function (t) { this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1); var e = this._ctx; if (null !== this._parseListeners)
            for (; this._ctx !== t;)
                this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
        else
            this._ctx = t; e.parentCtx = t, this.buildParseTrees && null !== t && t.addChild(e); }, p.prototype.getInvokingContext = function (t) { for (var e = this._ctx; null !== e;) {
            if (e.ruleIndex === t)
                return e;
            e = e.parentCtx;
        } return null; }, p.prototype.precpred = function (t, e) { return e >= this._precedenceStack[this._precedenceStack.length - 1]; }, p.prototype.inContext = function (t) { return !1; }, p.prototype.isExpectedToken = function (t) { var e = this._interp.atn, n = this._ctx, i = e.states[this.state], o = e.nextTokens(i); if (o.contains(t))
            return !0; if (!o.contains(r.EPSILON))
            return !1; for (; null !== n && n.invokingState >= 0 && o.contains(r.EPSILON);) {
            var s = e.states[n.invokingState].transitions[0];
            if ((o = e.nextTokens(s.followState)).contains(t))
                return !0;
            n = n.parentCtx;
        } return !(!o.contains(r.EPSILON) || t !== r.EOF); }, p.prototype.getExpectedTokens = function () { return this._interp.atn.getExpectedTokens(this.state, this._ctx); }, p.prototype.getExpectedTokensWithinCurrentRule = function () { var t = this._interp.atn, e = t.states[this.state]; return t.nextTokens(e); }, p.prototype.getRuleIndex = function (t) { var e = this.getRuleIndexMap()[t]; return null !== e ? e : -1; }, p.prototype.getRuleInvocationStack = function (t) { null === (t = t || null) && (t = this._ctx); for (var e = []; null !== t;) {
            var n = t.ruleIndex;
            n < 0 ? e.push("n/a") : e.push(this.ruleNames[n]), t = t.parentCtx;
        } return e; }, p.prototype.getDFAStrings = function () { return this._interp.decisionToDFA.toString(); }, p.prototype.dumpDFA = function () { for (var t = !1, e = 0; e < this._interp.decisionToDFA.length; e++) {
            var n = this._interp.decisionToDFA[e];
            n.states.length > 0 && (t && console.log(), this.printer.println("Decision " + n.decision + ":"), this.printer.print(n.toString(this.literalNames, this.symbolicNames)), t = !0);
        } }, p.prototype.getSourceName = function () { return this._input.sourceName; }, p.prototype.setTrace = function (t) { t ? (null !== this._tracer && this.removeParseListener(this._tracer), this._tracer = new h(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null); }, e.Parser = p; }, function (t, e, n) { var r = n(1).Token, i = n(15).Lexer, o = n(2).Interval; function s() { return this; } function a(t) { return s.call(this), this.tokenSource = t, this.tokens = [], this.index = -1, this.fetchedEOF = !1, this; } a.prototype = Object.create(s.prototype), a.prototype.constructor = a, a.prototype.mark = function () { return 0; }, a.prototype.release = function (t) { }, a.prototype.reset = function () { this.seek(0); }, a.prototype.seek = function (t) { this.lazyInit(), this.index = this.adjustSeekIndex(t); }, a.prototype.get = function (t) { return this.lazyInit(), this.tokens[t]; }, a.prototype.consume = function () { if (!(this.index >= 0 && (this.fetchedEOF ? this.index < this.tokens.length - 1 : this.index < this.tokens.length)) && this.LA(1) === r.EOF)
            throw "cannot consume EOF"; this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1)); }, a.prototype.sync = function (t) { var e = t - this.tokens.length + 1; return !(e > 0) || this.fetch(e) >= e; }, a.prototype.fetch = function (t) { if (this.fetchedEOF)
            return 0; for (var e = 0; e < t; e++) {
            var n = this.tokenSource.nextToken();
            if (n.tokenIndex = this.tokens.length, this.tokens.push(n), n.type === r.EOF)
                return this.fetchedEOF = !0, e + 1;
        } return t; }, a.prototype.getTokens = function (t, e, n) { if (void 0 === n && (n = null), t < 0 || e < 0)
            return null; this.lazyInit(); var i = []; e >= this.tokens.length && (e = this.tokens.length - 1); for (var o = t; o < e; o++) {
            var s = this.tokens[o];
            if (s.type === r.EOF)
                break;
            (null === n || n.contains(s.type)) && i.push(s);
        } return i; }, a.prototype.LA = function (t) { return this.LT(t).type; }, a.prototype.LB = function (t) { return this.index - t < 0 ? null : this.tokens[this.index - t]; }, a.prototype.LT = function (t) { if (this.lazyInit(), 0 === t)
            return null; if (t < 0)
            return this.LB(-t); var e = this.index + t - 1; return this.sync(e), e >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[e]; }, a.prototype.adjustSeekIndex = function (t) { return t; }, a.prototype.lazyInit = function () { -1 === this.index && this.setup(); }, a.prototype.setup = function () { this.sync(0), this.index = this.adjustSeekIndex(0); }, a.prototype.setTokenSource = function (t) { this.tokenSource = t, this.tokens = [], this.index = -1, this.fetchedEOF = !1; }, a.prototype.nextTokenOnChannel = function (t, e) { if (this.sync(t), t >= this.tokens.length)
            return -1; for (var n = this.tokens[t]; n.channel !== this.channel;) {
            if (n.type === r.EOF)
                return -1;
            t += 1, this.sync(t), n = this.tokens[t];
        } return t; }, a.prototype.previousTokenOnChannel = function (t, e) { for (; t >= 0 && this.tokens[t].channel !== e;)
            t -= 1; return t; }, a.prototype.getHiddenTokensToRight = function (t, e) { if (void 0 === e && (e = -1), this.lazyInit(), t < 0 || t >= this.tokens.length)
            throw t + " not in 0.." + this.tokens.length - 1; var n = this.nextTokenOnChannel(t + 1, i.DEFAULT_TOKEN_CHANNEL), r = t + 1, o = -1 === n ? this.tokens.length - 1 : n; return this.filterForChannel(r, o, e); }, a.prototype.getHiddenTokensToLeft = function (t, e) { if (void 0 === e && (e = -1), this.lazyInit(), t < 0 || t >= this.tokens.length)
            throw t + " not in 0.." + this.tokens.length - 1; var n = this.previousTokenOnChannel(t - 1, i.DEFAULT_TOKEN_CHANNEL); if (n === t - 1)
            return null; var r = n + 1, o = t - 1; return this.filterForChannel(r, o, e); }, a.prototype.filterForChannel = function (t, e, n) { for (var r = [], o = t; o < e + 1; o++) {
            var s = this.tokens[o];
            -1 === n ? s.channel !== i.DEFAULT_TOKEN_CHANNEL && r.push(s) : s.channel === n && r.push(s);
        } return 0 === r.length ? null : r; }, a.prototype.getSourceName = function () { return this.tokenSource.getSourceName(); }, a.prototype.getText = function (t) { this.lazyInit(), this.fill(), void 0 !== t && null !== t || (t = new o(0, this.tokens.length - 1)); var e = t.start; e instanceof r && (e = e.tokenIndex); var n = t.stop; if (n instanceof r && (n = n.tokenIndex), null === e || null === n || e < 0 || n < 0)
            return ""; n >= this.tokens.length && (n = this.tokens.length - 1); for (var i = "", s = e; s < n + 1; s++) {
            var a = this.tokens[s];
            if (a.type === r.EOF)
                break;
            i += a.text;
        } return i; }, a.prototype.fill = function () { for (this.lazyInit(); 1e3 === this.fetch(1e3);)
            ; }, e.BufferedTokenStream = a; }, function (t, e, n) { var r = n(13).InputStream, i = "undefined" == typeof window && "undefined" == typeof importScripts ? n(23) : null; function o(t, e) { var n = i.readFileSync(t, "utf8"); return r.call(this, n, e), this.fileName = t, this; } o.prototype = Object.create(r.prototype), o.prototype.constructor = o, e.FileStream = o; }, function (t, e, n) { var r = n(13).InputStream, i = "undefined" == typeof window && "undefined" == typeof importScripts ? n(23) : null, o = { fromString: function (t) { return new r(t, !0); }, fromBlob: function (t, e, n, i) { var o = FileReader(); o.onload = function (t) { var e = new r(t.target.result, !0); n(e); }, o.onerror = i, o.readAsText(t, e); }, fromBuffer: function (t, e) { return new r(t.toString(e), !0); }, fromPath: function (t, e, n) { i.readFile(t, e, function (t, e) { var i = null; null !== e && (i = new r(e, !0)), n(t, i); }); }, fromPathSync: function (t, e) { var n = i.readFileSync(t, e); return new r(n, !0); } }; e.CharStreams = o; }, function (t, e, n) { var r = n(0).BitSet, i = n(12).ErrorListener, o = n(2).Interval; function s(t) { return i.call(this), t = t || !0, this.exactOnly = t, this; } s.prototype = Object.create(i.prototype), s.prototype.constructor = s, s.prototype.reportAmbiguity = function (t, e, n, r, i, s, a) { if (!this.exactOnly || i) {
            var c = "reportAmbiguity d=" + this.getDecisionDescription(t, e) + ": ambigAlts=" + this.getConflictingAlts(s, a) + ", input='" + t.getTokenStream().getText(new o(n, r)) + "'";
            t.notifyErrorListeners(c);
        } }, s.prototype.reportAttemptingFullContext = function (t, e, n, r, i, s) { var a = "reportAttemptingFullContext d=" + this.getDecisionDescription(t, e) + ", input='" + t.getTokenStream().getText(new o(n, r)) + "'"; t.notifyErrorListeners(a); }, s.prototype.reportContextSensitivity = function (t, e, n, r, i, s) { var a = "reportContextSensitivity d=" + this.getDecisionDescription(t, e) + ", input='" + t.getTokenStream().getText(new o(n, r)) + "'"; t.notifyErrorListeners(a); }, s.prototype.getDecisionDescription = function (t, e) { var n = e.decision, r = e.atnStartState.ruleIndex, i = t.ruleNames; if (r < 0 || r >= i.length)
            return "" + n; var o = i[r] || null; return null === o || 0 === o.length ? "" + n : n + " (" + o + ")"; }, s.prototype.getConflictingAlts = function (t, e) { if (null !== t)
            return t; for (var n = new r, i = 0; i < e.items.length; i++)
            n.add(e.items[i].alt); return "{" + n.values().join(", ") + "}"; }, e.DiagnosticErrorListener = s; }, function (t, e, n) { e.RecognitionException = n(3).RecognitionException, e.NoViableAltException = n(3).NoViableAltException, e.LexerNoViableAltException = n(3).LexerNoViableAltException, e.InputMismatchException = n(3).InputMismatchException, e.FailedPredicateException = n(3).FailedPredicateException, e.DiagnosticErrorListener = n(44).DiagnosticErrorListener, e.BailErrorStrategy = n(24).BailErrorStrategy, e.ErrorListener = n(12).ErrorListener; }, function (t, e, n) { var r = n(5); e.Trees = n(33).Trees, e.RuleNode = r.RuleNode, e.ParseTreeListener = r.ParseTreeListener, e.ParseTreeVisitor = r.ParseTreeVisitor, e.ParseTreeWalker = r.ParseTreeWalker; }, function (t, e, n) { var r = n(0).Set, i = n(10).DFAState, o = n(4).StarLoopEntryState, s = n(9).ATNConfigSet, a = n(14).DFASerializer, c = n(14).LexerDFASerializer; function u(t, e) { if (void 0 === e && (e = 0), this.atnStartState = t, this.decision = e, this._states = new r, this.s0 = null, this.precedenceDfa = !1, t instanceof o && t.isPrecedenceDecision) {
            this.precedenceDfa = !0;
            var n = new i(null, new s);
            n.edges = [], n.isAcceptState = !1, n.requiresFullContext = !1, this.s0 = n;
        } return this; } u.prototype.getPrecedenceStartState = function (t) { if (!this.precedenceDfa)
            throw "Only precedence DFAs may contain a precedence start state."; return t < 0 || t >= this.s0.edges.length ? null : this.s0.edges[t] || null; }, u.prototype.setPrecedenceStartState = function (t, e) { if (!this.precedenceDfa)
            throw "Only precedence DFAs may contain a precedence start state."; t < 0 || (this.s0.edges[t] = e); }, u.prototype.setPrecedenceDfa = function (t) { if (this.precedenceDfa !== t) {
            if (this._states = new DFAStatesSet, t) {
                var e = new i(null, new s);
                e.edges = [], e.isAcceptState = !1, e.requiresFullContext = !1, this.s0 = e;
            }
            else
                this.s0 = null;
            this.precedenceDfa = t;
        } }, Object.defineProperty(u.prototype, "states", { get: function () { return this._states; } }), u.prototype.sortedStates = function () { return this._states.values().sort(function (t, e) { return t.stateNumber - e.stateNumber; }); }, u.prototype.toString = function (t, e) { return t = t || null, e = e || null, null === this.s0 ? "" : new a(this, t, e).toString(); }, u.prototype.toLexerString = function () { return null === this.s0 ? "" : new c(this).toString(); }, e.DFA = u; }, function (t, e, n) { e.DFA = n(47).DFA, e.DFASerializer = n(14).DFASerializer, e.LexerDFASerializer = n(14).LexerDFASerializer, e.PredPrediction = n(10).PredPrediction; }, function (t, e, n) { var r = n(0).hashStuff, i = n(30).LexerIndexedCustomAction; function o(t) { return this.lexerActions = null === t ? [] : t, this.cachedHashCode = r(t), this; } o.append = function (t, e) { return new o(null === t ? [e] : t.lexerActions.concat([e])); }, o.prototype.fixOffsetBeforeMatch = function (t) { for (var e = null, n = 0; n < this.lexerActions.length; n++)
            !this.lexerActions[n].isPositionDependent || this.lexerActions[n] instanceof i || (null === e && (e = this.lexerActions.concat([])), e[n] = new i(t, this.lexerActions[n])); return null === e ? this : new o(e); }, o.prototype.execute = function (t, e, n) { var r = !1, o = e.index; try {
            for (var s = 0; s < this.lexerActions.length; s++) {
                var a = this.lexerActions[s];
                if (a instanceof i) {
                    var c = a.offset;
                    e.seek(n + c), a = a.action, r = n + c !== o;
                }
                else
                    a.isPositionDependent && (e.seek(o), r = !1);
                a.execute(t);
            }
        }
        finally {
            r && e.seek(o);
        } }, o.prototype.hashCode = function () { return this.cachedHashCode; }, o.prototype.updateHashCode = function (t) { t.update(this.cachedHashCode); }, o.prototype.equals = function (t) { if (this === t)
            return !0; if (t instanceof o) {
            if (this.cachedHashCode != t.cachedHashCode)
                return !1;
            if (this.lexerActions.length != t.lexerActions.length)
                return !1;
            for (var e = this.lexerActions.length, n = 0; n < e; ++n)
                if (!this.lexerActions[n].equals(t.lexerActions[n]))
                    return !1;
            return !0;
        } return !1; }, e.LexerActionExecutor = o; }, function (t, e, n) { var r = n(1).CommonToken; function i() { return this; } function o(t) { return i.call(this), this.copyText = void 0 !== t && t, this; } o.prototype = Object.create(i.prototype), o.prototype.constructor = o, o.DEFAULT = new o, o.prototype.create = function (t, e, n, i, o, s, a, c) { var u = new r(t, e, i, o, s); return u.line = a, u.column = c, null !== n ? u.text = n : this.copyText && null !== t[1] && (u.text = t[1].getText(o, s)), u; }, o.prototype.createThin = function (t, e) { var n = new r(null, t); return n.text = e, n; }, e.CommonTokenFactory = o; }, function (t, e, n) { var r = n(1).Token, i = n(15).Lexer, o = n(8).ATN, s = n(28).ATNSimulator, a = n(10).DFAState, c = (n(9).ATNConfigSet, n(9).OrderedATNConfigSet), u = n(6).PredictionContext, l = n(6).SingletonPredictionContext, h = n(4).RuleStopState, p = n(17).LexerATNConfig, f = n(7).Transition, d = n(49).LexerActionExecutor, _ = n(3).LexerNoViableAltException; function y(t) { t.index = -1, t.line = 0, t.column = -1, t.dfaState = null; } function E() { return y(this), this; } function T(t, e, n, r) { return s.call(this, e, r), this.decisionToDFA = n, this.recog = t, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = i.DEFAULT_MODE, this.prevAccept = new E, this; } E.prototype.reset = function () { y(this); }, T.prototype = Object.create(s.prototype), T.prototype.constructor = T, T.debug = !1, T.dfa_debug = !1, T.MIN_DFA_EDGE = 0, T.MAX_DFA_EDGE = 127, T.match_calls = 0, T.prototype.copyState = function (t) { this.column = t.column, this.line = t.line, this.mode = t.mode, this.startIndex = t.startIndex; }, T.prototype.match = function (t, e) { this.match_calls += 1, this.mode = e; var n = t.mark(); try {
            this.startIndex = t.index, this.prevAccept.reset();
            var r = this.decisionToDFA[e];
            return null === r.s0 ? this.matchATN(t) : this.execATN(t, r.s0);
        }
        finally {
            t.release(n);
        } }, T.prototype.reset = function () { this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = i.DEFAULT_MODE; }, T.prototype.matchATN = function (t) { var e = this.atn.modeToStartState[this.mode]; T.debug && console.log("matchATN mode " + this.mode + " start: " + e); var n = this.mode, r = this.computeStartState(t, e), i = r.hasSemanticContext; r.hasSemanticContext = !1; var o = this.addDFAState(r); i || (this.decisionToDFA[this.mode].s0 = o); var s = this.execATN(t, o); return T.debug && console.log("DFA after matchATN: " + this.decisionToDFA[n].toLexerString()), s; }, T.prototype.execATN = function (t, e) { T.debug && console.log("start state closure=" + e.configs), e.isAcceptState && this.captureSimState(this.prevAccept, t, e); for (var n = t.LA(1), i = e;;) {
            T.debug && console.log("execATN loop starting closure: " + i.configs);
            var o = this.getExistingTargetState(i, n);
            if (null === o && (o = this.computeTargetState(t, i, n)), o === s.ERROR)
                break;
            if (n !== r.EOF && this.consume(t), o.isAcceptState && (this.captureSimState(this.prevAccept, t, o), n === r.EOF))
                break;
            n = t.LA(1), i = o;
        } return this.failOrAccept(this.prevAccept, t, i.configs, n); }, T.prototype.getExistingTargetState = function (t, e) { if (null === t.edges || e < T.MIN_DFA_EDGE || e > T.MAX_DFA_EDGE)
            return null; var n = t.edges[e - T.MIN_DFA_EDGE]; return void 0 === n && (n = null), T.debug && null !== n && console.log("reuse state " + t.stateNumber + " edge to " + n.stateNumber), n; }, T.prototype.computeTargetState = function (t, e, n) { var r = new c; return this.getReachableConfigSet(t, e.configs, r, n), 0 === r.items.length ? (r.hasSemanticContext || this.addDFAEdge(e, n, s.ERROR), s.ERROR) : this.addDFAEdge(e, n, null, r); }, T.prototype.failOrAccept = function (t, e, n, i) { if (null !== this.prevAccept.dfaState) {
            var o = t.dfaState.lexerActionExecutor;
            return this.accept(e, o, this.startIndex, t.index, t.line, t.column), t.dfaState.prediction;
        } if (i === r.EOF && e.index === this.startIndex)
            return r.EOF; throw new _(this.recog, e, this.startIndex, n); }, T.prototype.getReachableConfigSet = function (t, e, n, i) { for (var s = o.INVALID_ALT_NUMBER, a = 0; a < e.items.length; a++) {
            var c = e.items[a], u = c.alt === s;
            if (!u || !c.passedThroughNonGreedyDecision) {
                T.debug && console.log("testing %s at %s\n", this.getTokenName(i), c.toString(this.recog, !0));
                for (var l = 0; l < c.state.transitions.length; l++) {
                    var h = c.state.transitions[l], f = this.getReachableTarget(h, i);
                    if (null !== f) {
                        var d = c.lexerActionExecutor;
                        null !== d && (d = d.fixOffsetBeforeMatch(t.index - this.startIndex));
                        var _ = i === r.EOF, y = new p({ state: f, lexerActionExecutor: d }, c);
                        this.closure(t, y, n, u, !0, _) && (s = c.alt);
                    }
                }
            }
        } }, T.prototype.accept = function (t, e, n, r, i, o) { T.debug && console.log("ACTION %s\n", e), t.seek(r), this.line = i, this.column = o, null !== e && null !== this.recog && e.execute(this.recog, t, n); }, T.prototype.getReachableTarget = function (t, e) { return t.matches(e, 0, i.MAX_CHAR_VALUE) ? t.target : null; }, T.prototype.computeStartState = function (t, e) { for (var n = u.EMPTY, r = new c, i = 0; i < e.transitions.length; i++) {
            var o = e.transitions[i].target, s = new p({ state: o, alt: i + 1, context: n }, null);
            this.closure(t, s, r, !1, !1, !1);
        } return r; }, T.prototype.closure = function (t, e, n, r, i, o) { var s = null; if (T.debug && console.log("closure(" + e.toString(this.recog, !0) + ")"), e.state instanceof h) {
            if (T.debug && (null !== this.recog ? console.log("closure at %s rule stop %s\n", this.recog.ruleNames[e.state.ruleIndex], e) : console.log("closure at rule stop %s\n", e)), null === e.context || e.context.hasEmptyPath()) {
                if (null === e.context || e.context.isEmpty())
                    return n.add(e), !0;
                n.add(new p({ state: e.state, context: u.EMPTY }, e)), r = !0;
            }
            if (null !== e.context && !e.context.isEmpty())
                for (var a = 0; a < e.context.length; a++)
                    if (e.context.getReturnState(a) !== u.EMPTY_RETURN_STATE) {
                        var c = e.context.getParent(a), l = this.atn.states[e.context.getReturnState(a)];
                        s = new p({ state: l, context: c }, e), r = this.closure(t, s, n, r, i, o);
                    }
            return r;
        } e.state.epsilonOnlyTransitions || r && e.passedThroughNonGreedyDecision || n.add(e); for (var f = 0; f < e.state.transitions.length; f++) {
            var d = e.state.transitions[f];
            null !== (s = this.getEpsilonTarget(t, e, d, n, i, o)) && (r = this.closure(t, s, n, r, i, o));
        } return r; }, T.prototype.getEpsilonTarget = function (t, e, n, o, s, a) { var c = null; if (n.serializationType === f.RULE) {
            var u = l.create(e.context, n.followState.stateNumber);
            c = new p({ state: n.target, context: u }, e);
        }
        else {
            if (n.serializationType === f.PRECEDENCE)
                throw "Precedence predicates are not supported in lexers.";
            if (n.serializationType === f.PREDICATE)
                T.debug && console.log("EVAL rule " + n.ruleIndex + ":" + n.predIndex), o.hasSemanticContext = !0, this.evaluatePredicate(t, n.ruleIndex, n.predIndex, s) && (c = new p({ state: n.target }, e));
            else if (n.serializationType === f.ACTION)
                if (null === e.context || e.context.hasEmptyPath()) {
                    var h = d.append(e.lexerActionExecutor, this.atn.lexerActions[n.actionIndex]);
                    c = new p({ state: n.target, lexerActionExecutor: h }, e);
                }
                else
                    c = new p({ state: n.target }, e);
            else
                n.serializationType === f.EPSILON ? c = new p({ state: n.target }, e) : n.serializationType !== f.ATOM && n.serializationType !== f.RANGE && n.serializationType !== f.SET || a && n.matches(r.EOF, 0, i.MAX_CHAR_VALUE) && (c = new p({ state: n.target }, e));
        } return c; }, T.prototype.evaluatePredicate = function (t, e, n, r) { if (null === this.recog)
            return !0; if (!r)
            return this.recog.sempred(null, e, n); var i = this.column, o = this.line, s = t.index, a = t.mark(); try {
            return this.consume(t), this.recog.sempred(null, e, n);
        }
        finally {
            this.column = i, this.line = o, t.seek(s), t.release(a);
        } }, T.prototype.captureSimState = function (t, e, n) { t.index = e.index, t.line = this.line, t.column = this.column, t.dfaState = n; }, T.prototype.addDFAEdge = function (t, e, n, r) { if (void 0 === n && (n = null), void 0 === r && (r = null), null === n && null !== r) {
            var i = r.hasSemanticContext;
            if (r.hasSemanticContext = !1, n = this.addDFAState(r), i)
                return n;
        } return e < T.MIN_DFA_EDGE || e > T.MAX_DFA_EDGE ? n : (T.debug && console.log("EDGE " + t + " -> " + n + " upon " + e), null === t.edges && (t.edges = []), t.edges[e - T.MIN_DFA_EDGE] = n, n); }, T.prototype.addDFAState = function (t) { for (var e = new a(null, t), n = null, r = 0; r < t.items.length; r++) {
            var i = t.items[r];
            if (i.state instanceof h) {
                n = i;
                break;
            }
        } null !== n && (e.isAcceptState = !0, e.lexerActionExecutor = n.lexerActionExecutor, e.prediction = this.atn.ruleToTokenType[n.state.ruleIndex]); var o = this.decisionToDFA[this.mode], s = o.states.get(e); if (null !== s)
            return s; var c = e; return c.stateNumber = o.states.length, t.setReadonly(!0), c.configs = t, o.states.add(c), c; }, T.prototype.getDFA = function (t) { return this.decisionToDFA[t]; }, T.prototype.getText = function (t) { return t.getText(this.startIndex, t.index - 1); }, T.prototype.consume = function (t) { t.LA(1) === "\n".charCodeAt(0) ? (this.line += 1, this.column = 0) : this.column += 1, t.consume(); }, T.prototype.getTokenName = function (t) { return -1 === t ? "EOF" : "'" + String.fromCharCode(t) + "'"; }, e.LexerATNSimulator = T; }, function (t, e) { function n() { } n.LEXER = 0, n.PARSER = 1, e.ATNType = n; }, function (t, e, n) { var r = n(0).Set, i = n(0).BitSet, o = n(1).Token, s = n(17).ATNConfig, a = (n(2).Interval, n(2).IntervalSet), c = n(4).RuleStopState, u = n(7).RuleTransition, l = n(7).NotSetTransition, h = n(7).WildcardTransition, p = n(7).AbstractPredicateTransition, f = n(6), d = f.predictionContextFromRuleContext, _ = f.PredictionContext, y = f.SingletonPredictionContext; function E(t) { this.atn = t; } E.HIT_PRED = o.INVALID_TYPE, E.prototype.getDecisionLookahead = function (t) { if (null === t)
            return null; for (var e = t.transitions.length, n = [], o = 0; o < e; o++) {
            n[o] = new a;
            var s = new r;
            this._LOOK(t.transition(o).target, null, _.EMPTY, n[o], s, new i, !1, !1), (0 === n[o].length || n[o].contains(E.HIT_PRED)) && (n[o] = null);
        } return n; }, E.prototype.LOOK = function (t, e, n) { var o = new a, s = null !== (n = n || null) ? d(t.atn, n) : null; return this._LOOK(t, e, s, o, new r, new i, !0, !0), o; }, E.prototype._LOOK = function (t, e, n, r, i, a, f, d) { var T = new s({ state: t, alt: 0, context: n }, null); if (!i.contains(T)) {
            if (i.add(T), t === e) {
                if (null === n)
                    return void r.addOne(o.EPSILON);
                if (n.isEmpty() && d)
                    return void r.addOne(o.EOF);
            }
            if (t instanceof c) {
                if (null === n)
                    return void r.addOne(o.EPSILON);
                if (n.isEmpty() && d)
                    return void r.addOne(o.EOF);
                if (n !== _.EMPTY) {
                    for (var x = 0; x < n.length; x++) {
                        var S = this.atn.states[n.getReturnState(x)], g = a.contains(S.ruleIndex);
                        try {
                            a.remove(S.ruleIndex), this._LOOK(S, e, n.getParent(x), r, i, a, f, d);
                        }
                        finally {
                            g && a.add(S.ruleIndex);
                        }
                    }
                    return;
                }
            }
            for (var R = 0; R < t.transitions.length; R++) {
                var A = t.transitions[R];
                if (A.constructor === u) {
                    if (a.contains(A.target.ruleIndex))
                        continue;
                    var v = y.create(n, A.followState.stateNumber);
                    try {
                        a.add(A.target.ruleIndex), this._LOOK(A.target, e, v, r, i, a, f, d);
                    }
                    finally {
                        a.remove(A.target.ruleIndex);
                    }
                }
                else if (A instanceof p)
                    f ? this._LOOK(A.target, e, n, r, i, a, f, d) : r.addOne(E.HIT_PRED);
                else if (A.isEpsilon)
                    this._LOOK(A.target, e, n, r, i, a, f, d);
                else if (A.constructor === h)
                    r.addRange(o.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                else {
                    var C = A.label;
                    null !== C && (A instanceof l && (C = C.complement(o.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), r.addSet(C));
                }
            }
        } }, e.LL1Analyzer = E; }, function (t, e, n) { e.ATN = n(8).ATN, e.ATNDeserializer = n(32).ATNDeserializer, e.LexerATNSimulator = n(51).LexerATNSimulator, e.ParserATNSimulator = n(27).ParserATNSimulator, e.PredictionMode = n(18).PredictionMode; }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(20), i = n(13), o = n(2), s = n(39), a = n(38), c = n(37), u = n(21), l = function () { return function (t, e, n, r) { this.State = t, this.RuleIndex = e, this.ExpectedTokens = n, this.RuleStack = r; }; }(), h = function () { function t(t, e, n) { var r = this; this._lexer = null, this._parser = null, this._keywordsDict = null, this.StatesBeforeEof = {}, this.SyntaxErrors = [], this.EofReached = !1, this.EofReachedInPredict = !1, this.ExThrownAfterEofReached = !1, this.IsInPredict = !1, this.GetExpectedTokenStrs = function () { var t = new o.IntervalSet; for (var e in this.StatesBeforeEof)
                this.StatesBeforeEof.hasOwnProperty(e) && t.addSet(this.StatesBeforeEof[e].ExpectedTokens); var n = []; if (null === t.intervals)
                return n; for (var r = 0; r < t.intervals.length; r++) {
                var i = t.intervals[r];
                if (!(i.start < 0))
                    for (var s = i.start; s < i.stop; s++) {
                        var a = this._parser._input.tokenSource.symbolicNames[s];
                        if (null != a) {
                            var c = this._keywordsDict[a.replace(/^\'|\'$/gi, "")];
                            null != c && n.push(c);
                        }
                    }
            } return n.filter(u.Utils.notDuplicate); }, this.RecordStateBeforeEof = function () { this.IsInPredict ? this.EofReachedInPredict = !0 : (this.EofReached = !0, this.ExThrownAfterEofReached || void 0 != this.StatesBeforeEof[this._parser.state] && null != this.StatesBeforeEof[this._parser.state] || (this.StatesBeforeEof[this._parser.state] = new l(this._parser.state, this._parser._ctx.ruleIndex, this._parser.getExpectedTokens(), this._parser.getRuleInvocationStack()))); }, this.RecordErrorStatesBeforeEof = function (t) { var e = this; t.length > 0 && t.forEach(function (t) { null != t && (void 0 != e.StatesBeforeEof[t.stateNumber] && null != e.StatesBeforeEof[t.stateNumber] || (e.StatesBeforeEof[t.stateNumber] = new l(t.stateNumber, t.ruleIndex, e._parser._interp.atn.nextTokens(t), e._parser.getRuleInvocationStack()))); }); }, this.AddSyntaxError = function (t, e, n) { var i = { line: e, column: n, Message: t }; r.SyntaxErrors.push(i), r.EofReached && (r.ExThrownAfterEofReached = !0); }, this._lexerCtr = t, this._parserCtr = e, this._keywordsDict = n; } return t.prototype._parse = function (t) { var e = this; this.PrepareParse(), this._lexer = new this._lexerCtr(new i.InputStream(t)), this._parser = new this._parserCtr(new s.LSCommonTokenStream(this._lexer)), this._parser.getTokenStream().EofListener = function () { e.RecordStateBeforeEof(); }, this._parser.removeErrorListeners(), this._parser.addErrorListener(new a.LSErrorListener(function (t, n, r) { e.AddSyntaxError(t, n, r); })); var n = this._parser.atn.decisionToState.map(function (t, e) { return new r.dfa.DFA(t, e); }); this._parser._interp = new c.LSParserATNSimulator(this._parser, this._parser.atn, n, new r.PredictionContextCache, this), this._parser.root(); }, t.prototype.PrepareParse = function () { this.EofReached = !1, this.EofReachedInPredict = !1, this.ExThrownAfterEofReached = !1, this.StatesBeforeEof = {}, this.SyntaxErrors = []; }, t.prototype.getCompletionWords = function (t) { return this._parse(t), this.GetExpectedTokenStrs(); }, t.prototype.getSyntaxErrors = function (t) { return this._parse(t), this.SyntaxErrors; }, t; }();
            e.LanguageService = h;
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r, i = n(55), o = n(36), s = n(35), a = n(34);
            !function (t) { t[t.GetCompletionWords = 1] = "GetCompletionWords", t[t.GetErrors = 2] = "GetErrors"; }(r || (r = {})), e.LanguageServiceWorker || (e.LanguageServiceWorker = {}), onmessage = function (t) { var e = t.data.code, n = t.data.reason, c = [], u = new i.LanguageService(o.CosmosDBSqlLexer, s.CosmosDBSqlParser, a.CosmosDBSqlKeywords.keywordsRegisteredForCompletion); n == r.GetCompletionWords ? c = u.getCompletionWords(e) : n == r.GetErrors && (c = u.getSyntaxErrors(e)), postMessage(c, void 0), close(); };
        }]);
});
//# sourceMappingURL=LanguageServiceWorker.js.map