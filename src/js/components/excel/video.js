new((function i(e) { var t = {};

	function r(i) { if (t[i]) return t[i].exports; var a = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports } r.m = e, r.c = t, r.i = function(e) { return e }, r.d = function(e, t, i) { r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: i }) }, r.r = function(e) { Object.defineProperty(e, "__esModule", { value: !0 }) }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/", r.oe = function(e) { throw console.error(e), e }; var i = r(r.s = 52); return i.default || i })({ 52: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(21),
			a = r(1),
			n = r(0),
			o = r(53);
		t.default = function(e) { var t = new o.EventEmitter;
			t.trigger = function(e) { for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
				t.emit.apply(t, [e, e].concat(r)) }, t.off = function(e) { for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
				t.removeListener.apply(t, [e].concat(r)) }; var r = function(t, r) { e.postMessage({ event: t, data: r }) };
			e.addEventListener("message", function(a) { var o = a.data; switch (o.cmd) {
					case "init":
						var s = JSON.parse(o.config);
						e.demuxer = new i.default(t, o.typeSupported, s, o.vendor), n.enableLogs(s.debug), r("init", null); break;
					case "demux":
						e.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS) } }), t.on(a.default.FRAG_DECRYPTED, r), t.on(a.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(a.default.FRAG_PARSED, r), t.on(a.default.ERROR, r), t.on(a.default.FRAG_PARSING_METADATA, r), t.on(a.default.FRAG_PARSING_USERDATA, r), t.on(a.default.INIT_PTS_FOUND, r), t.on(a.default.FRAG_PARSING_DATA, function(t, r) { var i = [],
					a = { event: t, data: r };
				r.data1 && (a.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1), r.data2 && (a.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2), e.postMessage(a, i) }) } }, 53: function(e, t) {
		function r() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0 }

		function i(e) { return "function" == typeof e }

		function a(e) { return "object" == typeof e && null !== e }

		function n(e) { return void 0 === e } e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) { if (! function(e) { return "number" == typeof e }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number"); return this._maxListeners = e, this }, r.prototype.emit = function(e) { var t, r, o, s, l, u; if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) { if ((t = arguments[1]) instanceof Error) throw t; var d = new Error('Uncaught, unspecified "error" event. (' + t + ")"); throw d.context = t, d } if (n(r = this._events[e])) return !1; if (i(r)) switch (arguments.length) {
				case 1:
					r.call(this); break;
				case 2:
					r.call(this, arguments[1]); break;
				case 3:
					r.call(this, arguments[1], arguments[2]); break;
				default:
					s = Array.prototype.slice.call(arguments, 1), r.apply(this, s) } else if (a(r))
				for (s = Array.prototype.slice.call(arguments, 1), o = (u = r.slice()).length, l = 0; l < o; l++) u[l].apply(this, s); return !0 }, r.prototype.addListener = function(e, t) { var o; if (!i(t)) throw TypeError("listener must be a function"); return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (o = n(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) { if (!i(t)) throw TypeError("listener must be a function"); var r = !1;

			function a() { this.removeListener(e, a), r || (r = !0, t.apply(this, arguments)) } return a.listener = t, this.on(e, a), this }, r.prototype.removeListener = function(e, t) { var r, n, o, s; if (!i(t)) throw TypeError("listener must be a function"); if (!this._events || !this._events[e]) return this; if (o = (r = this._events[e]).length, n = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
			else if (a(r)) { for (s = o; s-- > 0;)
					if (r[s] === t || r[s].listener && r[s].listener === t) { n = s; break } if (n < 0) return this;
				1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t) } return this }, r.prototype.removeAllListeners = function(e) { var t, r; if (!this._events) return this; if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this; if (0 === arguments.length) { for (t in this._events) "removeListener" !== t && this.removeAllListeners(t); return this.removeAllListeners("removeListener"), this._events = {}, this } if (i(r = this._events[e])) this.removeListener(e, r);
			else if (r)
				for (; r.length;) this.removeListener(e, r[r.length - 1]); return delete this._events[e], this }, r.prototype.listeners = function(e) { return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [] }, r.prototype.listenerCount = function(e) { if (this._events) { var t = this._events[e]; if (i(t)) return 1; if (t) return t.length } return 0 }, r.listenerCount = function(e, t) { return e.listenerCount(t) } }, 0: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(6);

		function a() {} var n = { trace: a, debug: a, log: a, warn: a, info: a, error: a },
			o = n; var s = i.getSelfScope();

		function l(e) { for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
			t.forEach(function(t) { o[t] = e[t] ? e[t].bind(e) : function(e) { var t = s.console[e]; return t ? function() { for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
						r[0] && (r[0] = function(e, t) { return t = "[" + e + "] > " + t }(e, r[0])), t.apply(s.console, r) } : a }(t) }) } t.enableLogs = function(e) { if (!0 === e || "object" == typeof e) { l(e, "debug", "log", "info", "warn", "error"); try { o.log() } catch (e) { o = n } } else o = n }, t.logger = o }, 6: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }), t.getSelfScope = function() { return "undefined" == typeof window ? self : window } }, 1: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		t.default = { MEDIA_ATTACHING: "hlsMediaAttaching", MEDIA_ATTACHED: "hlsMediaAttached", MEDIA_DETACHING: "hlsMediaDetaching", MEDIA_DETACHED: "hlsMediaDetached", BUFFER_RESET: "hlsBufferReset", BUFFER_CODECS: "hlsBufferCodecs", BUFFER_CREATED: "hlsBufferCreated", BUFFER_APPENDING: "hlsBufferAppending", BUFFER_APPENDED: "hlsBufferAppended", BUFFER_EOS: "hlsBufferEos", BUFFER_FLUSHING: "hlsBufferFlushing", BUFFER_FLUSHED: "hlsBufferFlushed", MANIFEST_LOADING: "hlsManifestLoading", MANIFEST_LOADED: "hlsManifestLoaded", MANIFEST_PARSED: "hlsManifestParsed", LEVEL_SWITCHING: "hlsLevelSwitching", LEVEL_SWITCHED: "hlsLevelSwitched", LEVEL_LOADING: "hlsLevelLoading", LEVEL_LOADED: "hlsLevelLoaded", LEVEL_UPDATED: "hlsLevelUpdated", LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated", AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated", AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching", AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched", AUDIO_TRACK_LOADING: "hlsAudioTrackLoading", AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded", SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated", SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch", SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading", SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded", SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed", INIT_PTS_FOUND: "hlsInitPtsFound", FRAG_LOADING: "hlsFragLoading", FRAG_LOAD_PROGRESS: "hlsFragLoadProgress", FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted", FRAG_LOADED: "hlsFragLoaded", FRAG_DECRYPTED: "hlsFragDecrypted", FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment", FRAG_PARSING_USERDATA: "hlsFragParsingUserdata", FRAG_PARSING_METADATA: "hlsFragParsingMetadata", FRAG_PARSING_DATA: "hlsFragParsingData", FRAG_PARSED: "hlsFragParsed", FRAG_BUFFERED: "hlsFragBuffered", FRAG_CHANGED: "hlsFragChanged", FPS_DROP: "hlsFpsDrop", FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping", ERROR: "hlsError", DESTROYING: "hlsDestroying", KEY_LOADING: "hlsKeyLoading", KEY_LOADED: "hlsKeyLoaded", STREAM_STATE_TRANSITION: "hlsStreamStateTransition" } }, 21: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i, a = r(1),
			n = r(3),
			o = r(13),
			s = r(42),
			l = r(17),
			u = r(43),
			d = r(46),
			f = r(47),
			c = r(50),
			h = r(6),
			p = r(0),
			g = h.getSelfScope(); try { i = g.performance.now.bind(g.performance) } catch (e) { p.logger.debug("Unable to use Performance API on this environment"), i = g.Date.now } var v = function() {
			function e(e, t, r, i) { this.observer = e, this.typeSupported = t, this.config = r, this.vendor = i } return e.prototype.destroy = function() { var e = this.demuxer;
				e && e.destroy() }, e.prototype.push = function(e, t, r, n, s, l, u, d, f, c, h, p) { var g = this; if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) { var v = this.decrypter;
					null == v && (v = this.decrypter = new o.default(this.observer, this.config)); var y = i();
					v.decrypt(e, t.key.buffer, t.iv.buffer, function(e) { var o = i();
						g.observer.trigger(a.default.FRAG_DECRYPTED, { stats: { tstart: y, tdecrypt: o } }), g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, s, l, u, d, f, c, h, p) }) } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, s, l, u, d, f, c, h, p) }, e.prototype.pushDecrypted = function(e, t, r, i, o, h, p, g, v, y, m, E) { var _ = this.demuxer; if (!_ || (p || g) && !this.probe(e)) { for (var T = this.observer, S = this.typeSupported, b = this.config, A = [{ demux: u.default, remux: f.default }, { demux: l.default, remux: c.default }, { demux: s.default, remux: f.default }, { demux: d.default, remux: f.default }], R = 0, D = A.length; R < D; R++) { var L = A[R],
							w = L.demux.probe; if (w(e)) { var O = this.remuxer = new L.remux(T, b, S, this.vendor);
							_ = new L.demux(T, O, b, S), this.probe = w; break } } if (!_) return void T.trigger(a.default.ERROR, { type: n.ErrorTypes.MEDIA_ERROR, details: n.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: "no demux matching with content found" });
					this.demuxer = _ } var I = this.remuxer;
				(p || g) && (_.resetInitSegment(r, i, o, y), I.resetInitSegment()), p && (_.resetTimeStamp(E), I.resetTimeStamp(E)), "function" == typeof _.setDecryptData && _.setDecryptData(t), _.append(e, h, v, m) }, e }();
		t.default = v }, 50: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(1),
			a = function() {
				function e(e) { this.observer = e } return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function() {}, e.prototype.resetInitSegment = function() {}, e.prototype.remux = function(e, t, r, a, n, o, s, l) { var u = this.observer,
						d = "";
					e && (d += "audio"), t && (d += "video"), u.trigger(i.default.FRAG_PARSING_DATA, { data1: l, startPTS: n, startDTS: n, type: d, hasAudio: !!e, hasVideo: !!t, nb: 1, dropped: 0 }), u.trigger(i.default.FRAG_PARSED) }, e }();
		t.default = a }, 47: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(48),
			a = r(49),
			n = r(1),
			o = r(3),
			s = r(0),
			l = function() {
				function e(e, t, r, i) { this.observer = e, this.config = t, this.typeSupported = r; var a = navigator.userAgent;
					this.isSafari = i && i.indexOf("Apple") > -1 && a && !a.match("CriOS"), this.ISGenerated = !1 } return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function(e) { this._initPTS = this._initDTS = e }, e.prototype.resetInitSegment = function() { this.ISGenerated = !1 }, e.prototype.remux = function(e, t, r, i, a, o, l) { if (this.ISGenerated || this.generateIS(e, t, a), this.ISGenerated) { var u = e.samples.length,
							d = t.samples.length,
							f = a,
							c = a; if (u && d) { var h = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
							f += Math.max(0, h), c += Math.max(0, -h) } if (u) { e.timescale || (s.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, a)); var p = this.remuxAudio(e, f, o, l); if (d) { var g = void 0;
								p && (g = p.endPTS - p.startPTS), t.timescale || (s.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, a)), this.remuxVideo(t, c, o, g, l) } } else if (d) { var v = this.remuxVideo(t, c, o, 0, l);
							v && e.codec && this.remuxEmptyAudio(e, f, o, v) } } r.samples.length && this.remuxID3(r, a), i.samples.length && this.remuxText(i, a), this.observer.trigger(n.default.FRAG_PARSED) }, e.prototype.generateIS = function(e, t, r) { var i, l, u = this.observer,
						d = e.samples,
						f = t.samples,
						c = this.typeSupported,
						h = "audio/mp4",
						p = {},
						g = { tracks: p },
						v = void 0 === this._initPTS; if (v && (i = l = 1 / 0), e.config && d.length && (e.timescale = e.samplerate, s.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (c.mpeg ? (h = "audio/mpeg", e.codec = "") : c.mp3 && (e.codec = "mp3")), p.audio = { container: h, codec: e.codec, initSegment: !e.isAAC && c.mpeg ? new Uint8Array : a.default.initSegment([e]), metadata: { channelCount: e.channelCount } }, v && (i = l = d[0].pts - e.inputTimeScale * r)), t.sps && t.pps && f.length) { var y = t.inputTimeScale;
						t.timescale = y, p.video = { container: "video/mp4", codec: t.codec, initSegment: a.default.initSegment([t]), metadata: { width: t.width, height: t.height } }, v && (i = Math.min(i, f[0].pts - y * r), l = Math.min(l, f[0].dts - y * r), this.observer.trigger(n.default.INIT_PTS_FOUND, { initPTS: i })) } Object.keys(p).length ? (u.trigger(n.default.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, v && (this._initPTS = i, this._initDTS = l)) : u.trigger(n.default.ERROR, { type: o.ErrorTypes.MEDIA_ERROR, details: o.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: "no audio/video samples found" }) }, e.prototype.remuxVideo = function(e, t, r, i, l) { var u, d, f, c, h, p, g, v = 8,
						y = e.timescale,
						m = e.samples,
						E = [],
						_ = m.length,
						T = this._PTSNormalize,
						S = this._initPTS,
						b = this.nextAvcDts,
						A = this.isSafari; if (0 !== _) { A && (r |= m.length && b && (l && Math.abs(t - b / y) < .1 || Math.abs(m[0].pts - b - S) < y / 5)), r || (b = t * y), m.forEach(function(e) { e.pts = T(e.pts - S, b), e.dts = T(e.dts - S, b) }), m.sort(function(e, t) { var r = e.dts - t.dts,
								i = e.pts - t.pts; return r || i || e.id - t.id }); var R = m.reduce(function(e, t) { return Math.max(Math.min(e, t.pts - t.dts), -18e3) }, 0); if (R < 0) { s.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(R / 90) + " ms to overcome this issue"); for (var D = 0; D < m.length; D++) m[D].dts += R } var L = m[0];
						h = Math.max(L.dts, 0), c = Math.max(L.pts, 0); var w = Math.round((h - b) / 90);
						r && w && (w > 1 ? s.logger.log("AVC:" + w + " ms hole between fragments detected,filling it") : w < -1 && s.logger.log("AVC:" + -w + " ms overlapping between fragments detected"), h = b, m[0].dts = h, c = Math.max(c - w, b), m[0].pts = c, s.logger.log("Video/PTS/DTS adjusted: " + Math.round(c / 90) + "/" + Math.round(h / 90) + ",delta:" + w + " ms")), L = m[m.length - 1], g = Math.max(L.dts, 0), p = Math.max(L.pts, 0, g), A && (u = Math.round((g - h) / (m.length - 1))); var O = 0,
							I = 0; for (D = 0; D < _; D++) { for (var P = m[D], k = P.units, C = k.length, F = 0, x = 0; x < C; x++) F += k[x].data.length;
							I += F, O += C, P.length = F, P.dts = A ? h + D * u : Math.max(P.dts, h), P.pts = Math.max(P.pts, P.dts) } var M = I + 4 * O + 8; try { d = new Uint8Array(M) } catch (e) { return void this.observer.trigger(n.default.ERROR, { type: o.ErrorTypes.MUX_ERROR, details: o.ErrorDetails.REMUX_ALLOC_ERROR, fatal: !1, bytes: M, reason: "fail allocating video mdat " + M }) } var N = new DataView(d.buffer);
						N.setUint32(0, M), d.set(a.default.types.mdat, 4); for (D = 0; D < _; D++) { var U = m[D],
								B = U.units,
								G = 0,
								j = void 0; for (x = 0, C = B.length; x < C; x++) { var K = B[x],
									H = K.data,
									V = K.data.byteLength;
								N.setUint32(v, V), v += 4, d.set(H, v), v += V, G += 4 + V } if (A) j = Math.max(0, u * Math.round((U.pts - U.dts) / u));
							else { if (D < _ - 1) u = m[D + 1].dts - U.dts;
								else { var W = this.config,
										Y = U.dts - m[D > 0 ? D - 1 : D].dts; if (W.stretchShortVideoTrack) { var q = W.maxBufferHole,
											X = Math.floor(q * y),
											z = (i ? c + i * y : this.nextAudioPts) - U.pts;
										z > X ? ((u = z - Y) < 0 && (u = Y), s.logger.log("It is approximately " + z / 90 + " ms to the next segment; using duration " + u / 90 + " ms for the last video frame.")) : u = Y } else u = Y } j = Math.round(U.pts - U.dts) } E.push({ size: G, duration: u, cts: j, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: U.key ? 2 : 1, isNonSync: U.key ? 0 : 1 } }) } this.nextAvcDts = g + u; var Q = e.dropped; if (e.len = 0, e.nbNalu = 0, e.dropped = 0, E.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) { var $ = E[0].flags;
							$.dependsOn = 2, $.isNonSync = 0 } e.samples = E, f = a.default.moof(e.sequenceNumber++, h, e), e.samples = []; var J = { data1: f, data2: d, startPTS: c / y, endPTS: (p + u) / y, startDTS: h / y, endDTS: this.nextAvcDts / y, type: "video", hasAudio: !1, hasVideo: !0, nb: E.length, dropped: Q }; return this.observer.trigger(n.default.FRAG_PARSING_DATA, J), J } }, e.prototype.remuxAudio = function(e, t, r, l) { var u, d, f, c, h, p, g, v = e.inputTimeScale,
						y = e.timescale,
						m = v / y,
						E = (e.isAAC ? 1024 : 1152) * m,
						_ = this._PTSNormalize,
						T = this._initPTS,
						S = !e.isAAC && this.typeSupported.mpeg,
						b = e.samples,
						A = [],
						R = this.nextAudioPts; if (r |= b.length && R && (l && Math.abs(t - R / v) < .1 || Math.abs(b[0].pts - R - T) < 20 * E), b.forEach(function(e) { e.pts = e.dts = _(e.pts - T, t * v) }), 0 !== (b = b.filter(function(e) { return e.pts >= 0 })).length) { if (r || (R = l ? t * v : b[0].pts), e.isAAC)
							for (var D = this.config.maxAudioFramesDrift, L = 0, w = R; L < b.length;) { var O, I = b[L];
								O = (U = I.pts) - w; var P = Math.abs(1e3 * O / v); if (O <= -D * E) s.logger.warn("Dropping 1 audio frame @ " + (w / v).toFixed(3) + "s due to " + Math.round(P) + " ms overlap."), b.splice(L, 1), e.len -= I.unit.length;
								else if (O >= D * E && P < 1e4 && w) { var k = Math.round(O / E);
									s.logger.warn("Injecting " + k + " audio frame @ " + (w / v).toFixed(3) + "s due to " + Math.round(1e3 * O / v) + " ms gap."); for (var C = 0; C < k; C++) { var F = Math.max(w, 0);
										(f = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (s.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), f = I.unit.subarray()), b.splice(L, 0, { unit: f, pts: F, dts: F }), e.len += f.length, w += E, L++ } I.pts = I.dts = w, w += E, L++ } else Math.abs(O), I.pts = I.dts = w, w += E, L++ } C = 0; for (var x = b.length; C < x; C++) { var M = b[C],
								N = M.unit,
								U = M.pts; if (void 0 !== g) d.duration = Math.round((U - g) / m);
							else { var B = Math.round(1e3 * (U - R) / v),
									G = 0; if (r && e.isAAC && B) { if (B > 0 && B < 1e4) G = Math.round((U - R) / E), s.logger.log(B + " ms hole between AAC samples detected,filling it"), G > 0 && ((f = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (f = N.subarray()), e.len += G * f.length);
									else if (B < -12) { s.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (R / v).toFixed(3) + "s/" + (U / v).toFixed(3) + "s/" + -B + "ms"), e.len -= N.byteLength; continue } U = R } if (p = U, !(e.len > 0)) return; var j = S ? e.len : e.len + 8;
								u = S ? 0 : 8; try { c = new Uint8Array(j) } catch (e) { return void this.observer.trigger(n.default.ERROR, { type: o.ErrorTypes.MUX_ERROR, details: o.ErrorDetails.REMUX_ALLOC_ERROR, fatal: !1, bytes: j, reason: "fail allocating audio mdat " + j }) } S || (new DataView(c.buffer).setUint32(0, j), c.set(a.default.types.mdat, 4)); for (L = 0; L < G; L++)(f = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (s.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), f = N.subarray()), c.set(f, u), u += f.byteLength, d = { size: f.byteLength, cts: 0, duration: 1024, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, A.push(d) } c.set(N, u); var K = N.byteLength;
							u += K, d = { size: K, cts: 0, duration: 0, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, A.push(d), g = U } var H = 0,
							V = A.length; if (V >= 2 && (H = A[V - 2].duration, d.duration = H), V) { this.nextAudioPts = R = g + m * H, e.len = 0, e.samples = A, h = S ? new Uint8Array : a.default.moof(e.sequenceNumber++, p / m, e), e.samples = []; var W = p / v,
								Y = R / v,
								q = { data1: h, data2: c, startPTS: W, endPTS: Y, startDTS: W, endDTS: Y, type: "audio", hasAudio: !0, hasVideo: !1, nb: V }; return this.observer.trigger(n.default.FRAG_PARSING_DATA, q), q } return null } }, e.prototype.remuxEmptyAudio = function(e, t, r, a) { var n = e.inputTimeScale,
						o = n / (e.samplerate ? e.samplerate : n),
						l = this.nextAudioPts,
						u = (void 0 !== l ? l : a.startDTS * n) + this._initDTS,
						d = a.endDTS * n + this._initDTS,
						f = 1024 * o,
						c = Math.ceil((d - u) / f),
						h = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount); if (s.logger.warn("remux empty Audio"), h) { for (var p = [], g = 0; g < c; g++) { var v = u + g * f;
							p.push({ unit: h, pts: v, dts: v }), e.len += h.length } e.samples = p, this.remuxAudio(e, t, r) } else s.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!") }, e.prototype.remuxID3 = function(e) { var t, r = e.samples.length,
						i = e.inputTimeScale,
						a = this._initPTS,
						o = this._initDTS; if (r) { for (var s = 0; s < r; s++)(t = e.samples[s]).pts = (t.pts - a) / i, t.dts = (t.dts - o) / i;
						this.observer.trigger(n.default.FRAG_PARSING_METADATA, { samples: e.samples }) } e.samples = [] }, e.prototype.remuxText = function(e) { e.samples.sort(function(e, t) { return e.pts - t.pts }); var t, r = e.samples.length,
						i = e.inputTimeScale,
						a = this._initPTS; if (r) { for (var o = 0; o < r; o++)(t = e.samples[o]).pts = (t.pts - a) / i;
						this.observer.trigger(n.default.FRAG_PARSING_USERDATA, { samples: e.samples }) } e.samples = [] }, e.prototype._PTSNormalize = function(e, t) { var r; if (void 0 === t) return e; for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r; return e }, e }();
		t.default = l }, 3: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }), t.ErrorTypes = { NETWORK_ERROR: "networkError", MEDIA_ERROR: "mediaError", KEY_SYSTEM_ERROR: "keySystemError", MUX_ERROR: "muxError", OTHER_ERROR: "otherError" }, t.ErrorDetails = { KEY_SYSTEM_NO_KEYS: "keySystemNoKeys", KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess", KEY_SYSTEM_NO_SESSION: "keySystemNoSession", KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed", MANIFEST_LOAD_ERROR: "manifestLoadError", MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut", MANIFEST_PARSING_ERROR: "manifestParsingError", MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError", LEVEL_LOAD_ERROR: "levelLoadError", LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut", LEVEL_SWITCH_ERROR: "levelSwitchError", AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError", AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut", FRAG_LOAD_ERROR: "fragLoadError", FRAG_LOAD_TIMEOUT: "fragLoadTimeOut", FRAG_DECRYPT_ERROR: "fragDecryptError", FRAG_PARSING_ERROR: "fragParsingError", REMUX_ALLOC_ERROR: "remuxAllocError", KEY_LOAD_ERROR: "keyLoadError", KEY_LOAD_TIMEOUT: "keyLoadTimeOut", BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError", BUFFER_APPEND_ERROR: "bufferAppendError", BUFFER_APPENDING_ERROR: "bufferAppendingError", BUFFER_STALLED_ERROR: "bufferStalledError", BUFFER_FULL_ERROR: "bufferFullError", BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole", BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall", INTERNAL_EXCEPTION: "internalException" } }, 49: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = Math.pow(2, 32) - 1,
			a = function() {
				function e() {} return e.init = function() { var t; for (t in e.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]); var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
						i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
					e.HDLR_TYPES = { video: r, audio: i }; var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
						n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
					e.STTS = e.STSC = e.STCO = n, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]); var o = new Uint8Array([105, 115, 111, 109]),
						s = new Uint8Array([97, 118, 99, 49]),
						l = new Uint8Array([0, 0, 0, 1]);
					e.FTYP = e.box(e.types.ftyp, o, l, o, s), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a)) }, e.box = function(e) { for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;) i += r[a].byteLength; for ((t = new Uint8Array(i))[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), a = 0, i = 8; a < n; a++) t.set(r[a], i), i += r[a].byteLength; return t }, e.hdlr = function(t) { return e.box(e.types.hdlr, e.HDLR_TYPES[t]) }, e.mdat = function(t) { return e.box(e.types.mdat, t) }, e.mdhd = function(t, r) { r *= t; var a = Math.floor(r / (i + 1)),
						n = Math.floor(r % (i + 1)); return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0])) }, e.mdia = function(t) { return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t)) }, e.mfhd = function(t) { return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t])) }, e.minf = function(t) { return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t)) }, e.moof = function(t, r, i) { return e.box(e.types.moof, e.mfhd(t), e.traf(i, r)) }, e.moov = function(t) { for (var r = t.length, i = []; r--;) i[r] = e.trak(t[r]); return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t))) }, e.mvex = function(t) { for (var r = t.length, i = []; r--;) i[r] = e.trex(t[r]); return e.box.apply(null, [e.types.mvex].concat(i)) }, e.mvhd = function(t, r) { r *= t; var a = Math.floor(r / (i + 1)),
						n = Math.floor(r % (i + 1)),
						o = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]); return e.box(e.types.mvhd, o) }, e.sdtp = function(t) { var r, i, a = t.samples || [],
						n = new Uint8Array(4 + a.length); for (i = 0; i < a.length; i++) r = a[i].flags, n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy; return e.box(e.types.sdtp, n) }, e.stbl = function(t) { return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO)) }, e.avc1 = function(t) { var r, i, a, n = [],
						o = []; for (r = 0; r < t.sps.length; r++) a = (i = t.sps[r]).byteLength, n.push(a >>> 8 & 255), n.push(255 & a), n = n.concat(Array.prototype.slice.call(i)); for (r = 0; r < t.pps.length; r++) a = (i = t.pps[r]).byteLength, o.push(a >>> 8 & 255), o.push(255 & a), o = o.concat(Array.prototype.slice.call(i)); var s = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(o))),
						l = t.width,
						u = t.height,
						d = t.pixelRatio[0],
						f = t.pixelRatio[1]; return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, f >> 24, f >> 16 & 255, f >> 8 & 255, 255 & f]))) }, e.esds = function(e) { var t = e.config.length; return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2])) }, e.mp4a = function(t) { var r = t.samplerate; return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t))) }, e.mp3 = function(t) { var r = t.samplerate; return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0])) }, e.stsd = function(t) { return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t)) }, e.tkhd = function(t) { var r = t.id,
						a = t.duration * t.timescale,
						n = t.width,
						o = t.height,
						s = Math.floor(a / (i + 1)),
						l = Math.floor(a % (i + 1)); return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, o >> 8 & 255, 255 & o, 0, 0])) }, e.traf = function(t, r) { var a = e.sdtp(t),
						n = t.id,
						o = Math.floor(r / (i + 1)),
						s = Math.floor(r % (i + 1)); return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, a.length + 16 + 20 + 8 + 16 + 8 + 8), a) }, e.trak = function(t) { return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t)) }, e.trex = function(t) { var r = t.id; return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1])) }, e.trun = function(t, r) { var i, a, n, o, s, l, u = t.samples || [],
						d = u.length,
						f = 12 + 16 * d,
						c = new Uint8Array(f); for (r += 8 + f, c.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < d; i++) n = (a = u[i]).duration, o = a.size, s = a.flags, l = a.cts, c.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i); return e.box(e.types.trun, c) }, e.initSegment = function(t) { e.types || e.init(); var r, i = e.moov(t); return (r = new Uint8Array(e.FTYP.byteLength + i.byteLength)).set(e.FTYP), r.set(i, e.FTYP.byteLength), r }, e }();
		t.default = a }, 48: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = function() {
			function e() {} return e.getSilentFrame = function(e, t) { switch (e) {
					case "mp4a.40.2":
						if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]); if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]); if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]); if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]); if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]); if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]); break;
					default:
						if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]); if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]); if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]) } return null }, e }();
		t.default = i }, 46: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(11),
			a = r(0),
			n = r(23),
			o = function() {
				function e(e, t, r) { this.observer = e, this.config = r, this.remuxer = t } return e.prototype.resetInitSegment = function(e, t, r, i) { this._audioTrack = { container: "audio/mpeg", type: "audio", id: -1, sequenceNumber: 0, isAAC: !1, samples: [], len: 0, manifestCodec: t, duration: i, inputTimeScale: 9e4 } }, e.prototype.resetTimeStamp = function() {}, e.probe = function(e) { var t, r, o = i.default.getID3Data(e, 0); if (o && void 0 !== i.default.getTimeStamp(o))
						for (t = o.length, r = Math.min(e.length - 1, t + 100); t < r; t++)
							if (n.default.probe(e, t)) return a.logger.log("MPEG Audio sync word found !"), !0; return !1 }, e.prototype.append = function(e, t, r, a) { for (var o = i.default.getID3Data(e, 0), s = i.default.getTimeStamp(o), l = s ? 90 * s : 9e4 * t, u = o.length, d = e.length, f = 0, c = 0, h = this._audioTrack, p = [{ pts: l, dts: l, data: o }]; u < d;)
						if (n.default.isHeader(e, u)) { var g = n.default.appendFrame(h, e, u, l, f); if (!g) break;
							u += g.length, c = g.sample.pts, f++ } else i.default.isHeader(e, u) ? (o = i.default.getID3Data(e, u), p.push({ pts: c, dts: c, data: o }), u += o.length) : u++;
					this.remuxer.remux(h, { samples: [] }, { samples: p, inputTimeScale: 9e4 }, { samples: [] }, t, r, a) }, e.prototype.destroy = function() {}, e }();
		t.default = o }, 23: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = { BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], SamplesCoefficients: [
				[0, 72, 144, 12],
				[0, 0, 0, 0],
				[0, 72, 144, 12],
				[0, 144, 144, 12]
			], BytesInSlot: [0, 1, 1, 4], appendFrame: function(e, t, r, i, a) { if (!(r + 24 > t.length)) { var n = this.parseHeader(t, r); if (n && r + n.frameLength <= t.length) { var o = i + a * (9e4 * n.samplesPerFrame / n.sampleRate),
							s = { unit: t.subarray(r, r + n.frameLength), pts: o, dts: o }; return e.config = [], e.channelCount = n.channelCount, e.samplerate = n.sampleRate, e.samples.push(s), e.len += n.frameLength, { sample: s, length: n.frameLength } } } }, parseHeader: function(e, t) { var r = e[t + 1] >> 3 & 3,
					a = e[t + 1] >> 1 & 3,
					n = e[t + 2] >> 4 & 15,
					o = e[t + 2] >> 2 & 3,
					s = e[t + 2] >> 1 & 1; if (1 !== r && 0 !== n && 15 !== n && 3 !== o) { var l = 3 === r ? 3 - a : 3 === a ? 3 : 4,
						u = 1e3 * i.BitratesMap[14 * l + n - 1],
						d = 3 === r ? 0 : 2 === r ? 1 : 2,
						f = i.SamplingRateMap[3 * d + o],
						c = e[t + 3] >> 6 == 3 ? 1 : 2,
						h = i.SamplesCoefficients[r][a],
						p = i.BytesInSlot[a],
						g = 8 * h * p; return { sampleRate: f, channelCount: c, frameLength: parseInt(h * u / f + s, 10) * p, samplesPerFrame: g } } }, isHeaderPattern: function(e, t) { return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1]) }, isHeader: function(e, t) { return !!(t + 1 < e.length && this.isHeaderPattern(e, t)) }, probe: function(e, t) { if (t + 1 < e.length && this.isHeaderPattern(e, t)) { var r = this.parseHeader(e, t),
						i = 4;
					r && r.frameLength && (i = r.frameLength); var a = t + i; if (a === e.length || a + 1 < e.length && this.isHeaderPattern(e, a)) return !0 } return !1 } };
		t.default = i }, 11: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = function() {
				function e() {} return e.isHeader = function(e, t) { return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128 }, e.isFooter = function(e, t) { return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128 }, e.getID3Data = function(t, r) { for (var i = r, a = 0; e.isHeader(t, r);) { a += 10, a += e._readSize(t, r + 6), e.isFooter(t, r + 10) && (a += 10), r += a } if (a > 0) return t.subarray(i, i + a) }, e._readSize = function(e, t) { var r = 0; return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3] }, e.getTimeStamp = function(t) { for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) { var a = r[i]; if (e.isTimeStampFrame(a)) return e._readTimeStamp(a) } }, e.isTimeStampFrame = function(e) { return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info }, e._getFrameData = function(t) { var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
						i = e._readSize(t, 4); return { type: r, size: i, data: t.subarray(10, 10 + i) } }, e.getID3Frames = function(t) { for (var r = 0, i = []; e.isHeader(t, r);) { for (var a = e._readSize(t, r + 6), n = (r += 10) + a; r + 8 < n;) { var o = e._getFrameData(t.subarray(r)),
								s = e._decodeFrame(o);
							s && i.push(s), r += o.size + 10 } e.isFooter(t, r) && (r += 10) } return i }, e._decodeFrame = function(t) { return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0 }, e._readTimeStamp = function(e) { if (8 === e.data.byteLength) { var t = new Uint8Array(e.data),
							r = 1 & t[3],
							i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7]; return i /= 45, r && (i += 47721858.84), Math.round(i) } }, e._decodePrivFrame = function(t) { if (!(t.size < 2)) { var r = e._utf8ArrayToStr(t.data, !0),
							i = new Uint8Array(t.data.subarray(r.length + 1)); return { key: t.type, info: r, data: i.buffer } } }, e._decodeTextFrame = function(t) { if (!(t.size < 2)) { if ("TXXX" === t.type) { var r = 1,
								i = e._utf8ArrayToStr(t.data.subarray(r));
							r += i.length + 1; var a = e._utf8ArrayToStr(t.data.subarray(r)); return { key: t.type, info: i, data: a } } var n = e._utf8ArrayToStr(t.data.subarray(1)); return { key: t.type, data: n } } }, e._decodeURLFrame = function(t) { if ("WXXX" === t.type) { if (t.size < 2) return; var r = 1,
							i = e._utf8ArrayToStr(t.data.subarray(r));
						r += i.length + 1; var a = e._utf8ArrayToStr(t.data.subarray(r)); return { key: t.type, info: i, data: a } } var n = e._utf8ArrayToStr(t.data); return { key: t.type, data: n } }, e._utf8ArrayToStr = function(e, t) { void 0 === t && (t = !1); for (var r, i, a, n = e.length, o = "", s = 0; s < n;) { if (0 === (r = e[s++]) && t) return o; if (0 !== r && 3 !== r) switch (r >> 4) {
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
							case 6:
							case 7:
								o += String.fromCharCode(r); break;
							case 12:
							case 13:
								i = e[s++], o += String.fromCharCode((31 & r) << 6 | 63 & i); break;
							case 14:
								i = e[s++], a = e[s++], o += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | (63 & a) << 0) } } return o }, e }(),
			a = i._utf8ArrayToStr;
		t.utf8ArrayToStr = a, t.default = i }, 43: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(22),
			a = r(23),
			n = r(1),
			o = r(44),
			s = r(45),
			l = r(0),
			u = r(3),
			d = { video: 1, audio: 2, id3: 3, text: 4 },
			f = function() {
				function e(e, t, r, i) { this.observer = e, this.config = r, this.typeSupported = i, this.remuxer = t, this.sampleAes = null } return e.prototype.setDecryptData = function(e) { null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new s.default(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null }, e.probe = function(t) { var r = e._syncOffset(t); return !(r < 0) && (r && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0) }, e._syncOffset = function(e) { for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) { if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
						r++ } return -1 }, e.createTrack = function(e, t) { return { container: "video" === e || "audio" === e ? "video/mp2t" : void 0, type: e, id: d[e], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], len: 0, dropped: "video" === e ? 0 : void 0, isAAC: "audio" === e || void 0, duration: "audio" === e ? t : void 0 } }, e.prototype.resetInitSegment = function(t, r, i, a) { this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = e.createTrack("video", a), this._audioTrack = e.createTrack("audio", a), this._id3Track = e.createTrack("id3", a), this._txtTrack = e.createTrack("text", a), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = i, this._duration = a }, e.prototype.resetTimeStamp = function() {}, e.prototype.append = function(t, r, i, a) { var o, s, d, f, c, h = t.length,
						p = !1;
					this.contiguous = i; var g = this.pmtParsed,
						v = this._avcTrack,
						y = this._audioTrack,
						m = this._id3Track,
						E = v.pid,
						_ = y.pid,
						T = m.pid,
						S = this._pmtId,
						b = v.pesData,
						A = y.pesData,
						R = m.pesData,
						D = this._parsePAT,
						L = this._parsePMT,
						w = this._parsePES,
						O = this._parseAVCPES.bind(this),
						I = this._parseAACPES.bind(this),
						P = this._parseMPEGPES.bind(this),
						k = this._parseID3PES.bind(this),
						C = e._syncOffset(t); for (h -= (h + C) % 188, o = C; o < h; o += 188)
						if (71 === t[o]) { if (s = !!(64 & t[o + 1]), d = ((31 & t[o + 1]) << 8) + t[o + 2], (48 & t[o + 3]) >> 4 > 1) { if ((f = o + 5 + t[o + 4]) === o + 188) continue } else f = o + 4; switch (d) {
								case E:
									s && (b && (c = w(b)) && void 0 !== c.pts && O(c, !1), b = { data: [], size: 0 }), b && (b.data.push(t.subarray(f, o + 188)), b.size += o + 188 - f); break;
								case _:
									s && (A && (c = w(A)) && void 0 !== c.pts && (y.isAAC ? I(c) : P(c)), A = { data: [], size: 0 }), A && (A.data.push(t.subarray(f, o + 188)), A.size += o + 188 - f); break;
								case T:
									s && (R && (c = w(R)) && void 0 !== c.pts && k(c), R = { data: [], size: 0 }), R && (R.data.push(t.subarray(f, o + 188)), R.size += o + 188 - f); break;
								case 0:
									s && (f += t[f] + 1), S = this._pmtId = D(t, f); break;
								case S:
									s && (f += t[f] + 1); var F = L(t, f, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
									(E = F.avc) > 0 && (v.pid = E), (_ = F.audio) > 0 && (y.pid = _, y.isAAC = F.isAAC), (T = F.id3) > 0 && (m.pid = T), p && !g && (l.logger.log("reparse from beginning"), p = !1, o = C - 188), g = this.pmtParsed = !0; break;
								case 17:
								case 8191:
									break;
								default:
									p = !0 } } else this.observer.trigger(n.default.ERROR, { type: u.ErrorTypes.MEDIA_ERROR, details: u.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: "TS packet did not start with 0x47" });
					b && (c = w(b)) && void 0 !== c.pts ? (O(c, !0), v.pesData = null) : v.pesData = b, A && (c = w(A)) && void 0 !== c.pts ? (y.isAAC ? I(c) : P(c), y.pesData = null) : (A && A.size && l.logger.log("last AAC PES packet truncated,might overlap between fragments"), y.pesData = A), R && (c = w(R)) && void 0 !== c.pts ? (k(c), m.pesData = null) : m.pesData = R, null == this.sampleAes ? this.remuxer.remux(y, v, m, this._txtTrack, r, i, a) : this.decryptAndRemux(y, v, m, this._txtTrack, r, i, a) }, e.prototype.decryptAndRemux = function(e, t, r, i, a, n, o) { if (e.samples && e.isAAC) { var s = this;
						this.sampleAes.decryptAacSamples(e.samples, 0, function() { s.decryptAndRemuxAvc(e, t, r, i, a, n, o) }) } else this.decryptAndRemuxAvc(e, t, r, i, a, n, o) }, e.prototype.decryptAndRemuxAvc = function(e, t, r, i, a, n, o) { if (t.samples) { var s = this;
						this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function() { s.remuxer.remux(e, t, r, i, a, n, o) }) } else this.remuxer.remux(e, t, r, i, a, n, o) }, e.prototype.destroy = function() { this._initPTS = this._initDTS = void 0, this._duration = 0 }, e.prototype._parsePAT = function(e, t) { return (31 & e[t + 10]) << 8 | e[t + 11] }, e.prototype._parsePMT = function(e, t, r, i) { var a, n, o = { audio: -1, avc: -1, id3: -1, isAAC: !0 }; for (a = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < a;) { switch (n = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
							case 207:
								if (!i) { l.logger.log("unkown stream type:" + e[t]); break }
							case 15:
								-1 === o.audio && (o.audio = n); break;
							case 21:
								-1 === o.id3 && (o.id3 = n); break;
							case 219:
								if (!i) { l.logger.log("unkown stream type:" + e[t]); break }
							case 27:
								-1 === o.avc && (o.avc = n); break;
							case 3:
							case 4:
								r ? -1 === o.audio && (o.audio = n, o.isAAC = !1) : l.logger.log("MPEG audio found, not supported in this browser for now"); break;
							case 36:
								l.logger.warn("HEVC stream type found, not supported for now"); break;
							default:
								l.logger.log("unkown stream type:" + e[t]) } t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4]) } return o }, e.prototype._parsePES = function(e) { var t, r, i, a, n, o, s, u, d = 0,
						f = e.data; if (!e || 0 === e.size) return null; for (; f[0].length < 19 && f.length > 1;) { var c = new Uint8Array(f[0].length + f[1].length);
						c.set(f[0]), c.set(f[1], f[0].length), f[0] = c, f.splice(1, 1) } if (1 === ((t = f[0])[0] << 16) + (t[1] << 8) + t[2]) { if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
						192 & (r = t[7]) && ((o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (o -= 8589934592), 64 & r ? ((s = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (s -= 8589934592), o - s > 54e5 && (l.logger.warn(Math.round((o - s) / 9e4) + "s delta between PTS and DTS, align them"), o = s)) : s = o), u = (a = t[8]) + 9, e.size -= u, n = new Uint8Array(e.size); for (var h = 0, p = f.length; h < p; h++) { var g = (t = f[h]).byteLength; if (u) { if (u > g) { u -= g; continue } t = t.subarray(u), g -= u, u = 0 } n.set(t, d), d += g } return i && (i -= a + 3), { data: n, pts: o, dts: s, len: i } } return null }, e.prototype.pushAccesUnit = function(e, t) { if (e.units.length && e.frame) { var r = t.samples,
							i = r.length;!this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i, r.push(e)) : t.dropped++ } e.debug.length && l.logger.log(e.pts + "/" + e.dts + ":" + e.debug) }, e.prototype._parseAVCPES = function(e, t) { var r, i, a, n = this,
						s = this._avcTrack,
						l = this._parseAVCNALu(e.data),
						u = this.avcSample,
						d = !1,
						f = this.pushAccesUnit.bind(this),
						c = function(e, t, r, i) { return { key: e, pts: t, dts: r, units: [], debug: i } };
					e.data = null, u && l.length && !s.audFound && (f(u, s), u = this.avcSample = c(!1, e.pts, e.dts, "")), l.forEach(function(t) { switch (t.type) {
							case 1:
								i = !0, u || (u = n.avcSample = c(!0, e.pts, e.dts, "")), u.frame = !0; var l = t.data; if (d && l.length > 4) { var h = new o.default(l).readSliceType();
									2 !== h && 4 !== h && 7 !== h && 9 !== h || (u.key = !0) } break;
							case 5:
								i = !0, u || (u = n.avcSample = c(!0, e.pts, e.dts, "")), u.key = !0, u.frame = !0; break;
							case 6:
								i = !0, (r = new o.default(n.discardEPB(t.data))).readUByte(); for (var p = 0, g = 0, v = !1, y = 0; !v && r.bytesAvailable > 1;) { p = 0;
									do { p += y = r.readUByte() } while (255 === y);
									g = 0;
									do { g += y = r.readUByte() } while (255 === y); if (4 === p && 0 !== r.bytesAvailable) { if (v = !0, 181 === r.readUByte())
											if (49 === r.readUShort())
												if (1195456820 === r.readUInt())
													if (3 === r.readUByte()) { var m = r.readUByte(),
															E = 31 & m,
															_ = [m, r.readUByte()]; for (a = 0; a < E; a++) _.push(r.readUByte()), _.push(r.readUByte()), _.push(r.readUByte());
														n._insertSampleInOrder(n._txtTrack.samples, { type: 3, pts: e.pts, bytes: _ }) } } else if (g < r.bytesAvailable)
										for (a = 0; a < g; a++) r.readUByte() } break;
							case 7:
								if (i = !0, d = !0, !s.sps) { var T = (r = new o.default(t.data)).readSPS();
									s.width = T.width, s.height = T.height, s.pixelRatio = T.pixelRatio, s.sps = [t.data], s.duration = n._duration; var S = t.data.subarray(1, 4),
										b = "avc1."; for (a = 0; a < 3; a++) { var A = S[a].toString(16);
										A.length < 2 && (A = "0" + A), b += A } s.codec = b } break;
							case 8:
								i = !0, s.pps || (s.pps = [t.data]); break;
							case 9:
								i = !1, s.audFound = !0, u && f(u, s), u = n.avcSample = c(!1, e.pts, e.dts, ""); break;
							case 12:
								i = !1; break;
							default:
								i = !1, u && (u.debug += "unknown NAL " + t.type + " ") } u && i && u.units.push(t) }), t && u && (f(u, s), this.avcSample = null) }, e.prototype._insertSampleInOrder = function(e, t) { var r = e.length; if (r > 0) { if (t.pts >= e[r - 1].pts) e.push(t);
						else
							for (var i = r - 1; i >= 0; i--)
								if (t.pts < e[i].pts) { e.splice(i, 0, t); break } } else e.push(t) }, e.prototype._getLastNalUnit = function() { var e, t = this.avcSample; if (!t || 0 === t.units.length) { var r = this._avcTrack.samples;
						t = r[r.length - 1] } if (t) { var i = t.units;
						e = i[i.length - 1] } return e }, e.prototype._parseAVCNALu = function(e) { var t, r, i, a, n = 0,
						o = e.byteLength,
						s = this._avcTrack,
						l = s.naluState || 0,
						u = l,
						d = [],
						f = -1; for (-1 === l && (f = 0, a = 31 & e[0], l = 0, n = 1); n < o;)
						if (t = e[n++], l)
							if (1 !== l)
								if (t)
									if (1 === t) { var c, h; if (f >= 0) i = { data: e.subarray(f, n - l - 1), type: a }, d.push(i);
										else if (c = this._getLastNalUnit())
											if (u && n <= 4 - u && c.state && (c.data = c.data.subarray(0, c.data.byteLength - u)), (r = n - l - 1) > 0)(h = new Uint8Array(c.data.byteLength + r)).set(c.data, 0), h.set(e.subarray(0, r), c.data.byteLength), c.data = h;
										n < o ? (f = n, a = 31 & e[n], l = 0) : l = -1 } else l = 0;
					else l = 3;
					else l = t ? 0 : 2;
					else l = t ? 0 : 1;
					(f >= 0 && l >= 0 && (i = { data: e.subarray(f, o), type: a, state: l }, d.push(i)), 0 === d.length) && ((c = this._getLastNalUnit()) && ((h = new Uint8Array(c.data.byteLength + e.byteLength)).set(c.data, 0), h.set(e, c.data.byteLength), c.data = h)); return s.naluState = l, d }, e.prototype.discardEPB = function(e) { for (var t, r, i = e.byteLength, a = [], n = 1; n < i - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (a.push(n + 2), n += 2) : n++; if (0 === a.length) return e;
					t = i - a.length, r = new Uint8Array(t); var o = 0; for (n = 0; n < t; o++, n++) o === a[0] && (o++, a.shift()), r[n] = e[o]; return r }, e.prototype._parseAACPES = function(e) { var t, r, a, o, s, d = this._audioTrack,
						f = e.data,
						c = e.pts,
						h = this.aacOverFlow,
						p = this.aacLastPTS; if (h) { var g = new Uint8Array(h.byteLength + f.byteLength);
						g.set(h, 0), g.set(f, h.byteLength), f = g } for (a = 0, s = f.length; a < s - 1 && !i.isHeader(f, a); a++); if (a) { var v = void 0,
							y = void 0; if (a < s - 1 ? (v = "AAC PES did not start with ADTS header,offset:" + a, y = !1) : (v = "no ADTS header found in AAC PES", y = !0), l.logger.warn("parsing error:" + v), this.observer.trigger(n.default.ERROR, { type: u.ErrorTypes.MEDIA_ERROR, details: u.ErrorDetails.FRAG_PARSING_ERROR, fatal: y, reason: v }), y) return } if (i.initTrackConfig(d, this.observer, f, a, this.audioCodec), r = 0, t = i.getFrameDuration(d.samplerate), h && p) { var m = p + t;
						Math.abs(m - c) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((m - c) / 90)), c = m) } for (; a < s;)
						if (i.isHeader(f, a) && a + 5 < s) { var E = i.appendFrame(d, f, a, c, r); if (!E) break;
							a += E.length, o = E.sample.pts, r++ } else a++;
					h = a < s ? f.subarray(a, s) : null, this.aacOverFlow = h, this.aacLastPTS = o }, e.prototype._parseMPEGPES = function(e) { for (var t = e.data, r = t.length, i = 0, n = 0, o = e.pts; n < r;)
						if (a.default.isHeader(t, n)) { var s = a.default.appendFrame(this._audioTrack, t, n, o, i); if (!s) break;
							n += s.length, i++ } else n++ }, e.prototype._parseID3PES = function(e) { this._id3Track.samples.push(e) }, e }();
		t.default = f }, 45: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(13),
			a = function() {
				function e(e, t, r, a) { this.decryptdata = r, this.discardEPB = a, this.decrypter = new i.default(e, t, { removePKCS7Padding: !1 }) } return e.prototype.decryptBuffer = function(e, t) { this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t) }, e.prototype.decryptAacSample = function(e, t, r, i) { var a = e[t].unit,
						n = a.subarray(16, a.length - a.length % 16),
						o = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
						s = this;
					this.decryptBuffer(o, function(n) { n = new Uint8Array(n), a.set(n, 16), i || s.decryptAacSamples(e, t + 1, r) }) }, e.prototype.decryptAacSamples = function(e, t, r) { for (;; t++) { if (t >= e.length) return void r(); if (!(e[t].unit.length < 32)) { var i = this.decrypter.isSync(); if (this.decryptAacSample(e, t, r, i), !i) return } } }, e.prototype.getAvcEncryptedData = function(e) { for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, a = 32; a <= e.length - 16; a += 160, i += 16) r.set(e.subarray(a, a + 16), i); return r }, e.prototype.getAvcDecryptedUnit = function(e, t) { t = new Uint8Array(t); for (var r = 0, i = 32; i <= e.length - 16; i += 160, r += 16) e.set(t.subarray(r, r + 16), i); return e }, e.prototype.decryptAvcSample = function(e, t, r, i, a, n) { var o = this.discardEPB(a.data),
						s = this.getAvcEncryptedData(o),
						l = this;
					this.decryptBuffer(s.buffer, function(s) { a.data = l.getAvcDecryptedUnit(o, s), n || l.decryptAvcSamples(e, t, r + 1, i) }) }, e.prototype.decryptAvcSamples = function(e, t, r, i) { for (;; t++, r = 0) { if (t >= e.length) return void i(); for (var a = e[t].units; !(r >= a.length); r++) { var n = a[r]; if (!(n.length <= 48 || 1 !== n.type && 5 !== n.type)) { var o = this.decrypter.isSync(); if (this.decryptAvcSample(e, t, r, i, n, o), !o) return } } } }, e }();
		t.default = a }, 13: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(39),
			a = r(40),
			n = r(41),
			o = r(3),
			s = r(0),
			l = r(1),
			u = r(6).getSelfScope(),
			d = function() {
				function e(e, t, r) { var i = (void 0 === r ? {} : r).removePKCS7Padding,
						a = void 0 === i || i; if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = a, a) try { var n = u.crypto;
						n && (this.subtle = n.subtle || n.webkitSubtle) } catch (e) {} this.disableWebCrypto = !this.subtle } return e.prototype.isSync = function() { return this.disableWebCrypto && this.config.enableSoftwareAES }, e.prototype.decrypt = function(e, t, r, o) { var l = this; if (this.disableWebCrypto && this.config.enableSoftwareAES) { this.logEnabled && (s.logger.log("JS AES decrypt"), this.logEnabled = !1); var u = this.decryptor;
						u || (this.decryptor = u = new n.default), u.expandKey(t), o(u.decrypt(e, 0, r, this.removePKCS7Padding)) } else { this.logEnabled && (s.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1); var d = this.subtle;
						this.key !== t && (this.key = t, this.fastAesKey = new a.default(d, t)), this.fastAesKey.expandKey().then(function(a) { new i.default(d, r).decrypt(e, a).catch(function(i) { l.onWebCryptoError(i, e, t, r, o) }).then(function(e) { o(e) }) }).catch(function(i) { l.onWebCryptoError(i, e, t, r, o) }) } }, e.prototype.onWebCryptoError = function(e, t, r, i, a) { this.config.enableSoftwareAES ? (s.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, i, a)) : (s.logger.error("decrypting error : " + e.message), this.observer.trigger(l.default.ERROR, { type: o.ErrorTypes.MEDIA_ERROR, details: o.ErrorDetails.FRAG_DECRYPT_ERROR, fatal: !0, reason: e.message })) }, e.prototype.destroy = function() { var e = this.decryptor;
					e && (e.destroy(), this.decryptor = void 0) }, e }();
		t.default = d }, 41: function(e, t, r) { "use strict";

		function i(e) { var t = e.byteLength,
				r = t && new DataView(e).getUint8(t - 1); return r ? e.slice(0, t - r) : e } Object.defineProperty(t, "__esModule", { value: !0 }), t.removePadding = i; var a = function() {
			function e() { this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable() } return e.prototype.uint8ArrayToUint32Array_ = function(e) { for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = t.getUint32(4 * i); return r }, e.prototype.initTable = function() { var e = this.sBox,
					t = this.invSBox,
					r = this.subMix,
					i = r[0],
					a = r[1],
					n = r[2],
					o = r[3],
					s = this.invSubMix,
					l = s[0],
					u = s[1],
					d = s[2],
					f = s[3],
					c = new Uint32Array(256),
					h = 0,
					p = 0,
					g = 0; for (g = 0; g < 256; g++) c[g] = g < 128 ? g << 1 : g << 1 ^ 283; for (g = 0; g < 256; g++) { var v = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
					v = v >>> 8 ^ 255 & v ^ 99, e[h] = v, t[v] = h; var y = c[h],
						m = c[y],
						E = c[m],
						_ = 257 * c[v] ^ 16843008 * v;
					i[h] = _ << 24 | _ >>> 8, a[h] = _ << 16 | _ >>> 16, n[h] = _ << 8 | _ >>> 24, o[h] = _, _ = 16843009 * E ^ 65537 * m ^ 257 * y ^ 16843008 * h, l[v] = _ << 24 | _ >>> 8, u[v] = _ << 16 | _ >>> 16, d[v] = _ << 8 | _ >>> 24, f[v] = _, h ? (h = y ^ c[c[c[E ^ y]]], p ^= c[c[p]]) : h = p = 1 } }, e.prototype.expandKey = function(e) { for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;) r = t[i] === this.key[i], i++; if (!r) { this.key = t; var a = this.keySize = t.length; if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a); var n, o, s, l, u = this.ksRows = 4 * (a + 6 + 1),
						d = this.keySchedule = new Uint32Array(u),
						f = this.invKeySchedule = new Uint32Array(u),
						c = this.sBox,
						h = this.rcon,
						p = this.invSubMix,
						g = p[0],
						v = p[1],
						y = p[2],
						m = p[3]; for (n = 0; n < u; n++) n < a ? s = d[n] = t[n] : (l = s, n % a == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= h[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), d[n] = s = (d[n - a] ^ l) >>> 0); for (o = 0; o < u; o++) n = u - o, l = 3 & o ? d[n] : d[n - 4], f[o] = o < 4 || n <= 4 ? l : g[c[l >>> 24]] ^ v[c[l >>> 16 & 255]] ^ y[c[l >>> 8 & 255]] ^ m[c[255 & l]], f[o] = f[o] >>> 0 } }, e.prototype.networkToHostOrderSwap = function(e) { return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24 }, e.prototype.decrypt = function(e, t, r, a) { for (var n, o, s, l, u, d, f, c, h, p, g, v, y, m, E = this.keySize + 6, _ = this.invKeySchedule, T = this.invSBox, S = this.invSubMix, b = S[0], A = S[1], R = S[2], D = S[3], L = this.uint8ArrayToUint32Array_(r), w = L[0], O = L[1], I = L[2], P = L[3], k = new Int32Array(e), C = new Int32Array(k.length), F = this.networkToHostOrderSwap; t < k.length;) { for (h = F(k[t]), p = F(k[t + 1]), g = F(k[t + 2]), v = F(k[t + 3]), u = h ^ _[0], d = v ^ _[1], f = g ^ _[2], c = p ^ _[3], y = 4, m = 1; m < E; m++) n = b[u >>> 24] ^ A[d >> 16 & 255] ^ R[f >> 8 & 255] ^ D[255 & c] ^ _[y], o = b[d >>> 24] ^ A[f >> 16 & 255] ^ R[c >> 8 & 255] ^ D[255 & u] ^ _[y + 1], s = b[f >>> 24] ^ A[c >> 16 & 255] ^ R[u >> 8 & 255] ^ D[255 & d] ^ _[y + 2], l = b[c >>> 24] ^ A[u >> 16 & 255] ^ R[d >> 8 & 255] ^ D[255 & f] ^ _[y + 3], u = n, d = o, f = s, c = l, y += 4;
					n = T[u >>> 24] << 24 ^ T[d >> 16 & 255] << 16 ^ T[f >> 8 & 255] << 8 ^ T[255 & c] ^ _[y], o = T[d >>> 24] << 24 ^ T[f >> 16 & 255] << 16 ^ T[c >> 8 & 255] << 8 ^ T[255 & u] ^ _[y + 1], s = T[f >>> 24] << 24 ^ T[c >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & d] ^ _[y + 2], l = T[c >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[d >> 8 & 255] << 8 ^ T[255 & f] ^ _[y + 3], y += 3, C[t] = F(n ^ w), C[t + 1] = F(l ^ O), C[t + 2] = F(s ^ I), C[t + 3] = F(o ^ P), w = h, O = p, I = g, P = v, t += 4 } return a ? i(C.buffer) : C.buffer }, e.prototype.destroy = function() { this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0 }, e }();
		t.default = a }, 40: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = function() {
			function e(e, t) { this.subtle = e, this.key = t } return e.prototype.expandKey = function() { return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, !1, ["encrypt", "decrypt"]) }, e }();
		t.default = i }, 39: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = function() {
			function e(e, t) { this.subtle = e, this.aesIV = t } return e.prototype.decrypt = function(e, t) { return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e) }, e }();
		t.default = i }, 44: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(0),
			a = function() {
				function e(e) { this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0 } return e.prototype.loadWord = function() { var e = this.data,
						t = this.bytesAvailable,
						r = e.byteLength - t,
						i = new Uint8Array(4),
						a = Math.min(4, t); if (0 === a) throw new Error("no bytes available");
					i.set(e.subarray(r, r + a)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * a, this.bytesAvailable -= a }, e.prototype.skipBits = function(e) { var t;
					this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e) }, e.prototype.readBits = function(e) { var t = Math.min(this.bitsAvailable, e),
						r = this.word >>> 32 - t; return e > 32 && i.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r }, e.prototype.skipLZ = function() { var e; for (e = 0; e < this.bitsAvailable; ++e)
						if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e; return this.loadWord(), e + this.skipLZ() }, e.prototype.skipUEG = function() { this.skipBits(1 + this.skipLZ()) }, e.prototype.skipEG = function() { this.skipBits(1 + this.skipLZ()) }, e.prototype.readUEG = function() { var e = this.skipLZ(); return this.readBits(e + 1) - 1 }, e.prototype.readEG = function() { var e = this.readUEG(); return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1) }, e.prototype.readBoolean = function() { return 1 === this.readBits(1) }, e.prototype.readUByte = function() { return this.readBits(8) }, e.prototype.readUShort = function() { return this.readBits(16) }, e.prototype.readUInt = function() { return this.readBits(32) }, e.prototype.skipScalingList = function(e) { var t, r = 8,
						i = 8; for (t = 0; t < e; t++) 0 !== i && (i = (r + this.readEG() + 256) % 256), r = 0 === i ? r : i }, e.prototype.readSPS = function() { var e, t, r, i, a, n, o, s = 0,
						l = 0,
						u = 0,
						d = 0,
						f = this.readUByte.bind(this),
						c = this.readBits.bind(this),
						h = this.readUEG.bind(this),
						p = this.readBoolean.bind(this),
						g = this.skipBits.bind(this),
						v = this.skipEG.bind(this),
						y = this.skipUEG.bind(this),
						m = this.skipScalingList.bind(this); if (f(), e = f(), c(5), g(3), f(), y(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) { var E = h(); if (3 === E && g(1), y(), y(), g(1), p())
							for (n = 3 !== E ? 8 : 12, o = 0; o < n; o++) p() && m(o < 6 ? 16 : 64) } y(); var _ = h(); if (0 === _) h();
					else if (1 === _)
						for (g(1), v(), v(), t = h(), o = 0; o < t; o++) v();
					y(), g(1), r = h(), i = h(), 0 === (a = c(1)) && g(1), g(1), p() && (s = h(), l = h(), u = h(), d = h()); var T = [1, 1]; if (p() && p()) switch (f()) {
						case 1:
							T = [1, 1]; break;
						case 2:
							T = [12, 11]; break;
						case 3:
							T = [10, 11]; break;
						case 4:
							T = [16, 11]; break;
						case 5:
							T = [40, 33]; break;
						case 6:
							T = [24, 11]; break;
						case 7:
							T = [20, 11]; break;
						case 8:
							T = [32, 11]; break;
						case 9:
							T = [80, 33]; break;
						case 10:
							T = [18, 11]; break;
						case 11:
							T = [15, 11]; break;
						case 12:
							T = [64, 33]; break;
						case 13:
							T = [160, 99]; break;
						case 14:
							T = [4, 3]; break;
						case 15:
							T = [3, 2]; break;
						case 16:
							T = [2, 1]; break;
						case 255:
							T = [f() << 8 | f(), f() << 8 | f()] }
					return { width: Math.ceil(16 * (r + 1) - 2 * s - 2 * l), height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (u + d), pixelRatio: T } }, e.prototype.readSliceType = function() { return this.readUByte(), this.readUEG(), this.readUEG() }, e }();
		t.default = a }, 22: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(0),
			a = r(3),
			n = r(1);

		function o(e, t, r, o) { var s, l, u, d, f, c = navigator.userAgent.toLowerCase(),
				h = o,
				p = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]; if (s = 1 + ((192 & t[r + 2]) >>> 6), !((l = (60 & t[r + 2]) >>> 2) > p.length - 1)) return d = (1 & t[r + 2]) << 2, d |= (192 & t[r + 3]) >>> 6, i.logger.log("manifest codec:" + o + ",ADTS data:type:" + s + ",sampleingIndex:" + l + "[" + p[l] + "Hz],channelConfig:" + d), /firefox/i.test(c) ? l >= 6 ? (s = 5, f = new Array(4), u = l - 3) : (s = 2, f = new Array(2), u = l) : -1 !== c.indexOf("android") ? (s = 2, f = new Array(2), u = l) : (s = 5, f = new Array(4), o && (-1 !== o.indexOf("mp4a.40.29") || -1 !== o.indexOf("mp4a.40.5")) || !o && l >= 6 ? u = l - 3 : ((o && -1 !== o.indexOf("mp4a.40.2") && (l >= 6 && 1 === d || /vivaldi/i.test(c)) || !o && 1 === d) && (s = 2, f = new Array(2)), u = l)), f[0] = s << 3, f[0] |= (14 & l) >> 1, f[1] |= (1 & l) << 7, f[1] |= d << 3, 5 === s && (f[1] |= (14 & u) >> 1, f[2] = (1 & u) << 7, f[2] |= 8, f[3] = 0), { config: f, samplerate: p[l], channelCount: d, codec: "mp4a.40." + s, manifestCodec: h };
			e.trigger(n.default.ERROR, { type: a.ErrorTypes.MEDIA_ERROR, details: a.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: "invalid ADTS sampling index:" + l }) }

		function s(e, t) { return 255 === e[t] && 240 == (246 & e[t + 1]) }

		function l(e, t) { return 1 & e[t + 1] ? 7 : 9 }

		function u(e, t) { return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5 }

		function d(e) { return 9216e4 / e }

		function f(e, t, r, i, a) { var n, o, s = e.length; if (n = l(e, t), o = u(e, t), (o -= n) > 0 && t + n + o <= s) return { headerLength: n, frameLength: o, stamp: r + i * a } } t.getAudioConfig = o, t.isHeaderPattern = s, t.getHeaderLength = l, t.getFullFrameLength = u, t.isHeader = function(e, t) { return !!(t + 1 < e.length && s(e, t)) }, t.probe = function(e, t) { if (t + 1 < e.length && s(e, t)) { var r = l(e, t);
				t + 5 < e.length && (r = u(e, t)); var i = t + r; if (i === e.length || i + 1 < e.length && s(e, i)) return !0 } return !1 }, t.initTrackConfig = function(e, t, r, a, n) { if (!e.samplerate) { var s = o(t, r, a, n);
				e.config = s.config, e.samplerate = s.samplerate, e.channelCount = s.channelCount, e.codec = s.codec, e.manifestCodec = s.manifestCodec, i.logger.log("parsed codec:" + e.codec + ",rate:" + s.samplerate + ",nb channel:" + s.channelCount) } }, t.getFrameDuration = d, t.parseFrameHeader = f, t.appendFrame = function(e, t, r, i, a) { var n = f(t, r, i, a, d(e.samplerate)); if (n) { var o = n.stamp,
					s = n.headerLength,
					l = n.frameLength,
					u = { unit: t.subarray(r + s, r + s + l), pts: o, dts: o }; return e.samples.push(u), e.len += l, { sample: u, length: l + s } } } }, 17: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(0),
			a = r(1),
			n = Math.pow(2, 32) - 1,
			o = function() {
				function e(e, t) { this.observer = e, this.remuxer = t } return e.prototype.resetTimeStamp = function(e) { this.initPTS = e }, e.prototype.resetInitSegment = function(t, r, i, n) { if (t && t.byteLength) { var o = this.initData = e.parseInitSegment(t);
						null == r && (r = "mp4a.40.5"), null == i && (i = "avc1.42e01e"); var s = {};
						o.audio && o.video ? s.audiovideo = { container: "video/mp4", codec: r + "," + i, initSegment: n ? t : null } : (o.audio && (s.audio = { container: "audio/mp4", codec: r, initSegment: n ? t : null }), o.video && (s.video = { container: "video/mp4", codec: i, initSegment: n ? t : null })), this.observer.trigger(a.default.FRAG_PARSING_INIT_SEGMENT, { tracks: s }) } else r && (this.audioCodec = r), i && (this.videoCodec = i) }, e.probe = function(t) { return e.findBox({ data: t, start: 0, end: Math.min(t.length, 16384) }, ["moof"]).length > 0 }, e.bin2str = function(e) { return String.fromCharCode.apply(null, e) }, e.readUint16 = function(e, t) { e.data && (t += e.start, e = e.data); var r = e[t] << 8 | e[t + 1]; return r < 0 ? 65536 + r : r }, e.readUint32 = function(e, t) { e.data && (t += e.start, e = e.data); var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]; return r < 0 ? 4294967296 + r : r }, e.writeUint32 = function(e, t, r) { e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r }, e.findBox = function(t, r) { var i, a, n, o, s, l, u, d = []; if (t.data ? (l = t.start, o = t.end, t = t.data) : (l = 0, o = t.byteLength), !r.length) return null; for (i = l; i < o;) a = e.readUint32(t, i), n = e.bin2str(t.subarray(i + 4, i + 8)), u = a > 1 ? i + a : o, n === r[0] && (1 === r.length ? d.push({ data: t, start: i + 8, end: u }) : (s = e.findBox({ data: t, start: i + 8, end: u }, r.slice(1))).length && (d = d.concat(s))), i = u; return d }, e.parseSegmentIndex = function(t) { var r, i = e.findBox(t, ["moov"])[0],
						a = i ? i.end : null,
						n = 0,
						o = e.findBox(t, ["sidx"]); if (!o || !o[0]) return null;
					r = []; var s = (o = o[0]).data[0];
					n = 0 === s ? 8 : 16; var l = e.readUint32(o, n);
					n += 4;
					n += 0 === s ? 8 : 16, n += 2; var u = o.end + 0,
						d = e.readUint16(o, n);
					n += 2; for (var f = 0; f < d; f++) { var c = n,
							h = e.readUint32(o, c);
						c += 4; var p = 2147483647 & h; if (1 === (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)"); var g = e.readUint32(o, c);
						c += 4, r.push({ referenceSize: p, subsegmentDuration: g, info: { duration: g / l, start: u, end: u + p - 1 } }), u += p, n = c += 4 } return { earliestPresentationTime: 0, timescale: l, version: s, referencesCount: d, references: r, moovEndOffset: a } }, e.parseInitSegment = function(t) { var r = []; return e.findBox(t, ["moov", "trak"]).forEach(function(t) { var a = e.findBox(t, ["tkhd"])[0]; if (a) { var n = a.data[a.start],
								o = 0 === n ? 12 : 20,
								s = e.readUint32(a, o),
								l = e.findBox(t, ["mdia", "mdhd"])[0]; if (l) { o = 0 === (n = l.data[l.start]) ? 12 : 20; var u = e.readUint32(l, o),
									d = e.findBox(t, ["mdia", "hdlr"])[0]; if (d) { var f = { soun: "audio", vide: "video" } [e.bin2str(d.data.subarray(d.start + 8, d.start + 12))]; if (f) { var c = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]); if (c.length) { c = c[0]; var h = e.bin2str(c.data.subarray(c.start + 12, c.start + 16));
											i.logger.log("MP4Demuxer:" + f + ":" + h + " found") } r[s] = { timescale: u, type: f }, r[f] = { timescale: u, id: s } } } } } }), r }, e.getStartDTS = function(t, r) { var i, a, n; return i = e.findBox(r, ["moof", "traf"]), a = [].concat.apply([], i.map(function(r) { return e.findBox(r, ["tfhd"]).map(function(i) { var a, n; return a = e.readUint32(i, 4), n = t[a].timescale || 9e4, e.findBox(r, ["tfdt"]).map(function(t) { var r, i; return r = t.data[t.start], i = e.readUint32(t, 4), 1 === r && (i *= Math.pow(2, 32), i += e.readUint32(t, 8)), i })[0] / n }) })), n = Math.min.apply(null, a), isFinite(n) ? n : 0 }, e.offsetStartDTS = function(t, r, i) { e.findBox(r, ["moof", "traf"]).map(function(r) { return e.findBox(r, ["tfhd"]).map(function(a) { var o = e.readUint32(a, 4),
								s = t[o].timescale || 9e4;
							e.findBox(r, ["tfdt"]).map(function(t) { var r = t.data[t.start],
									a = e.readUint32(t, 4); if (0 === r) e.writeUint32(t, 4, a - i * s);
								else { a *= Math.pow(2, 32), a += e.readUint32(t, 8), a -= i * s, a = Math.max(a, 0); var o = Math.floor(a / (n + 1)),
										l = Math.floor(a % (n + 1));
									e.writeUint32(t, 4, o), e.writeUint32(t, 8, l) } }) }) }) }, e.prototype.append = function(t, r, i, n) { var o = this.initData;
					o || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), o = this.initData); var s, l = this.initPTS; if (void 0 === l) { var u = e.getStartDTS(o, t);
						this.initPTS = l = u - r, this.observer.trigger(a.default.INIT_PTS_FOUND, { initPTS: l }) } e.offsetStartDTS(o, t, l), s = e.getStartDTS(o, t), this.remuxer.remux(o.audio, o.video, null, null, s, i, n, t) }, e.prototype.destroy = function() {}, e }();
		t.default = o }, 42: function(e, t, r) { "use strict";
		(function(e) { Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(22),
				a = r(0),
				n = r(11),
				o = function() {
					function t(e, t, r) { this.observer = e, this.config = r, this.remuxer = t } return t.prototype.resetInitSegment = function(e, t, r, i) { this._audioTrack = { container: "audio/adts", type: "audio", id: 0, sequenceNumber: 0, isAAC: !0, samples: [], len: 0, manifestCodec: t, duration: i, inputTimeScale: 9e4 } }, t.prototype.resetTimeStamp = function() {}, t.probe = function(e) { if (!e) return !1; for (var t = (n.default.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
							if (i.probe(e, t)) return a.logger.log("ADTS sync word found !"), !0; return !1 }, t.prototype.append = function(t, r, o, s) { for (var l = this._audioTrack, u = n.default.getID3Data(t, 0) || [], d = n.default.getTimeStamp(u), f = e.isFinite(d) ? 90 * d : 9e4 * r, c = 0, h = f, p = t.length, g = u.length, v = [{ pts: h, dts: h, data: u }]; g < p - 1;)
							if (i.isHeader(t, g) && g + 5 < p) { i.initTrackConfig(l, this.observer, t, g, l.manifestCodec); var y = i.appendFrame(l, t, g, f, c); if (!y) { a.logger.log("Unable to parse AAC frame"); break } g += y.length, h = y.sample.pts, c++ } else n.default.isHeader(t, g) ? (u = n.default.getID3Data(t, g), v.push({ pts: h, dts: h, data: u }), g += u.length) : g++;
						this.remuxer.remux(l, { samples: [] }, { samples: v, inputTimeScale: 9e4 }, { samples: [] }, r, o, s) }, t.prototype.destroy = function() {}, t }();
			t.default = o }).call(this, r(2).Number) }, 2: function(e, t, r) { "use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }); var i = r(6).getSelfScope().Number;
		t.Number = i, i.isFinite = i.isFinite || function(e) { return "number" == typeof e && isFinite(e) } } }))(self);