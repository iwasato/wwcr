/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = __webpack_require__(20);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var APP_NAME = 'mediasoup-client';

var Logger = function () {
	function Logger(prefix) {
		_classCallCheck(this, Logger);

		if (prefix) {
			this._debug = (0, _debug2.default)(APP_NAME + ':' + prefix);
			this._warn = (0, _debug2.default)(APP_NAME + ':WARN:' + prefix);
			this._error = (0, _debug2.default)(APP_NAME + ':ERROR:' + prefix);
		} else {
			this._debug = (0, _debug2.default)(APP_NAME);
			this._warn = (0, _debug2.default)(APP_NAME + ':WARN');
			this._error = (0, _debug2.default)(APP_NAME + ':ERROR');
		}

		/* eslint-disable no-console */
		this._debug.log = console.info.bind(console);
		this._warn.log = console.warn.bind(console);
		this._error.log = console.error.bind(console);
		/* eslint-enable no-console */
	}

	_createClass(Logger, [{
		key: 'debug',
		get: function get() {
			return this._debug;
		}
	}, {
		key: 'warn',
		get: function get() {
			return this._warn;
		}
	}, {
		key: 'error',
		get: function get() {
			return this._error;
		}
	}]);

	return Logger;
}();

exports.default = Logger;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(12);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnhancedEventEmitter = function (_EventEmitter) {
	_inherits(EnhancedEventEmitter, _EventEmitter);

	function EnhancedEventEmitter(logger) {
		_classCallCheck(this, EnhancedEventEmitter);

		var _this = _possibleConstructorReturn(this, (EnhancedEventEmitter.__proto__ || Object.getPrototypeOf(EnhancedEventEmitter)).call(this));

		_this.setMaxListeners(Infinity);

		_this._logger = logger || new _Logger2.default('EnhancedEventEmitter');
		return _this;
	}

	_createClass(EnhancedEventEmitter, [{
		key: 'safeEmit',
		value: function safeEmit(event) {
			try {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				this.emit.apply(this, [event].concat(args));
			} catch (error) {
				this._logger.error('safeEmit() | event listener threw an error [event:%s]:%o', event, error);
			}
		}
	}, {
		key: 'safeEmitAsPromise',
		value: function safeEmitAsPromise(event) {
			var _this2 = this;

			for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				args[_key2 - 1] = arguments[_key2];
			}

			return new Promise(function (resolve, reject) {
				var callback = function callback(result) {
					resolve(result);
				};

				var errback = function errback(error) {
					_this2._logger.error('safeEmitAsPromise() | errback called [event:%s]:%o', event, error);

					reject(error);
				};

				_this2.safeEmit.apply(_this2, [event].concat(args, [callback, errback]));
			});
		}
	}]);

	return EnhancedEventEmitter;
}(_events.EventEmitter);

exports.default = EnhancedEventEmitter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomNumber = randomNumber;
exports.clone = clone;

var _randomNumber = __webpack_require__(27);

var _randomNumber2 = _interopRequireDefault(_randomNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var randomNumberGenerator = _randomNumber2.default.generator({
  min: 10000000,
  max: 99999999,
  integer: true
});

/**
 * Generates a random positive number between 10000000 and 99999999.
 *
 * @return {Number}
 */
function randomNumber() {
  return randomNumberGenerator();
}

/**
 * Clones the given Object/Array.
 *
 * @param {Object|Array} obj
 *
 * @return {Object|Array}
 */
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getExtendedRtpCapabilities = getExtendedRtpCapabilities;
exports.getRtpCapabilities = getRtpCapabilities;
exports.getUnsupportedCodecs = getUnsupportedCodecs;
exports.canSend = canSend;
exports.canReceive = canReceive;
exports.getSendingRtpParameters = getSendingRtpParameters;
exports.getReceivingFullRtpParameters = getReceivingFullRtpParameters;
/**
 * Generate extended RTP capabilities for sending and receiving.
 *
 * @param {RTCRtpCapabilities} localCaps - Local capabilities.
 * @param {RTCRtpCapabilities} remoteCaps - Remote capabilities.
 *
 * @return {RTCExtendedRtpCapabilities}
 */
function getExtendedRtpCapabilities(localCaps, remoteCaps) {
	var extendedCaps = {
		codecs: [],
		headerExtensions: [],
		fecMechanisms: []
	};

	// Match media codecs and keep the order preferred by remoteCaps.

	var _loop = function _loop(remoteCodec) {
		// TODO: Ignore pseudo-codecs and feature codecs.
		if (remoteCodec.name === 'rtx') return 'continue';

		var matchingLocalCodec = (localCaps.codecs || []).find(function (localCodec) {
			return matchCapCodecs(localCodec, remoteCodec);
		});

		if (matchingLocalCodec) {
			var extendedCodec = {
				name: remoteCodec.name,
				mimeType: remoteCodec.mimeType,
				kind: remoteCodec.kind,
				clockRate: remoteCodec.clockRate,
				sendPayloadType: matchingLocalCodec.preferredPayloadType,
				sendRtxPayloadType: null,
				recvPayloadType: remoteCodec.preferredPayloadType,
				recvRtxPayloadType: null,
				channels: remoteCodec.channels,
				rtcpFeedback: reduceRtcpFeedback(matchingLocalCodec, remoteCodec),
				parameters: remoteCodec.parameters
			};

			if (!extendedCodec.channels) delete extendedCodec.channels;

			extendedCaps.codecs.push(extendedCodec);
		}
	};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (remoteCaps.codecs || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var remoteCodec = _step.value;

			var _ret = _loop(remoteCodec);

			if (_ret === 'continue') continue;
		}

		// Match RTX codecs.
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var _loop2 = function _loop2(extendedCodec) {
		var matchingLocalRtxCodec = (localCaps.codecs || []).find(function (localCodec) {
			return localCodec.name === 'rtx' && localCodec.parameters.apt === extendedCodec.sendPayloadType;
		});

		var matchingRemoteRtxCodec = (remoteCaps.codecs || []).find(function (remoteCodec) {
			return remoteCodec.name === 'rtx' && remoteCodec.parameters.apt === extendedCodec.recvPayloadType;
		});

		if (matchingLocalRtxCodec && matchingRemoteRtxCodec) {
			extendedCodec.sendRtxPayloadType = matchingLocalRtxCodec.preferredPayloadType;
			extendedCodec.recvRtxPayloadType = matchingRemoteRtxCodec.preferredPayloadType;
		}
	};

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = (extendedCaps.codecs || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var extendedCodec = _step2.value;

			_loop2(extendedCodec);
		}

		// Match header extensions.
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var _loop3 = function _loop3(remoteExt) {
		var matchingLocalExt = (localCaps.headerExtensions || []).find(function (localExt) {
			return matchCapHeaderExtensions(localExt, remoteExt);
		});

		if (matchingLocalExt) {
			var extendedExt = {
				kind: remoteExt.kind,
				uri: remoteExt.uri,
				sendId: matchingLocalExt.preferredId,
				recvId: remoteExt.preferredId
			};

			extendedCaps.headerExtensions.push(extendedExt);
		}
	};

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = (remoteCaps.headerExtensions || [])[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var remoteExt = _step3.value;

			_loop3(remoteExt);
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return extendedCaps;
}

/**
 * Generate RTP capabilities for receiving media based on the given extended
 * RTP capabilities.
 *
 * @param {RTCExtendedRtpCapabilities} extendedRtpCapabilities
 *
 * @return {RTCRtpCapabilities}
 */
function getRtpCapabilities(extendedRtpCapabilities) {
	var caps = {
		codecs: [],
		headerExtensions: [],
		fecMechanisms: []
	};

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = extendedRtpCapabilities.codecs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var capCodec = _step4.value;

			var codec = {
				name: capCodec.name,
				mimeType: capCodec.mimeType,
				kind: capCodec.kind,
				clockRate: capCodec.clockRate,
				preferredPayloadType: capCodec.recvPayloadType,
				channels: capCodec.channels,
				rtcpFeedback: capCodec.rtcpFeedback,
				parameters: capCodec.parameters
			};

			if (!codec.channels) delete codec.channels;

			caps.codecs.push(codec);

			// Add RTX codec.
			if (capCodec.recvRtxPayloadType) {
				var rtxCapCodec = {
					name: 'rtx',
					mimeType: capCodec.kind + '/rtx',
					kind: capCodec.kind,
					clockRate: capCodec.clockRate,
					preferredPayloadType: capCodec.recvRtxPayloadType,
					parameters: {
						apt: capCodec.recvPayloadType
					}
				};

				caps.codecs.push(rtxCapCodec);
			}

			// TODO: In the future, we need to add FEC, CN, etc, codecs.
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	var _iteratorNormalCompletion5 = true;
	var _didIteratorError5 = false;
	var _iteratorError5 = undefined;

	try {
		for (var _iterator5 = extendedRtpCapabilities.headerExtensions[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
			var capExt = _step5.value;

			var ext = {
				kind: capExt.kind,
				uri: capExt.uri,
				preferredId: capExt.recvId
			};

			caps.headerExtensions.push(ext);
		}
	} catch (err) {
		_didIteratorError5 = true;
		_iteratorError5 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion5 && _iterator5.return) {
				_iterator5.return();
			}
		} finally {
			if (_didIteratorError5) {
				throw _iteratorError5;
			}
		}
	}

	caps.fecMechanisms = extendedRtpCapabilities.fecMechanisms;

	return caps;
}

/**
 * Get unsupported remote codecs.
 *
 * @param {RTCRtpCapabilities} remoteCaps - Remote capabilities.
 * @param {Array<Number>} mandatoryCodecPayloadTypes - List of codec PT values.
 * @param {RTCExtendedRtpCapabilities} extendedRtpCapabilities
 *
 * @return {Boolean}
 */
function getUnsupportedCodecs(remoteCaps, mandatoryCodecPayloadTypes, extendedRtpCapabilities) {
	// If not given just ignore.
	if (!Array.isArray(mandatoryCodecPayloadTypes)) return [];

	var unsupportedCodecs = [];
	var remoteCodecs = remoteCaps.codecs;
	var supportedCodecs = extendedRtpCapabilities.codecs;

	var _loop4 = function _loop4(pt) {
		if (!supportedCodecs.some(function (codec) {
			return codec.recvPayloadType === pt;
		})) {
			var unsupportedCodec = remoteCodecs.find(function (codec) {
				return codec.preferredPayloadType === pt;
			});

			if (!unsupportedCodec) throw new Error('mandatory codec PT ' + pt + ' not found in remote codecs');

			unsupportedCodecs.push(unsupportedCodec);
		}
	};

	var _iteratorNormalCompletion6 = true;
	var _didIteratorError6 = false;
	var _iteratorError6 = undefined;

	try {
		for (var _iterator6 = mandatoryCodecPayloadTypes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
			var pt = _step6.value;

			_loop4(pt);
		}
	} catch (err) {
		_didIteratorError6 = true;
		_iteratorError6 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion6 && _iterator6.return) {
				_iterator6.return();
			}
		} finally {
			if (_didIteratorError6) {
				throw _iteratorError6;
			}
		}
	}

	return unsupportedCodecs;
}

/**
 * Whether media can be sent based on the given RTP capabilities.
 *
 * @param {String} kind
 * @param {RTCExtendedRtpCapabilities} extendedRtpCapabilities
 *
 * @return {Boolean}
 */
function canSend(kind, extendedRtpCapabilities) {
	return extendedRtpCapabilities.codecs.some(function (codec) {
		return codec.kind === kind;
	});
}

/**
 * Whether the given RTP parameters can be received with the given RTP
 * capabilities.
 *
 * @param {RTCRtpParameters} rtpParameters
 * @param {RTCExtendedRtpCapabilities} extendedRtpCapabilities
 *
 * @return {Boolean}
 */
function canReceive(rtpParameters, extendedRtpCapabilities) {
	if (rtpParameters.codecs.length === 0) return false;

	var firstMediaCodec = rtpParameters.codecs[0];

	return extendedRtpCapabilities.codecs.some(function (codec) {
		return codec.recvPayloadType === firstMediaCodec.payloadType;
	});
}

/**
 * Generate RTP parameters of the given kind for sending media.
 * Just the first media codec per kind is considered.
 * NOTE: muxId, encodings and rtcp fields are left empty.
 *
 * @param {kind} kind
 * @param {RTCExtendedRtpCapabilities} extendedRtpCapabilities
 *
 * @return {RTCRtpParameters}
 */
function getSendingRtpParameters(kind, extendedRtpCapabilities) {
	var params = {
		muxId: null,
		codecs: [],
		headerExtensions: [],
		encodings: [],
		rtcp: {}
	};

	var _iteratorNormalCompletion7 = true;
	var _didIteratorError7 = false;
	var _iteratorError7 = undefined;

	try {
		for (var _iterator7 = extendedRtpCapabilities.codecs[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
			var capCodec = _step7.value;

			if (capCodec.kind !== kind) continue;

			var codec = {
				name: capCodec.name,
				mimeType: capCodec.mimeType,
				clockRate: capCodec.clockRate,
				payloadType: capCodec.sendPayloadType,
				channels: capCodec.channels,
				rtcpFeedback: capCodec.rtcpFeedback,
				parameters: capCodec.parameters
			};

			if (!codec.channels) delete codec.channels;

			params.codecs.push(codec);

			// Add RTX codec.
			if (capCodec.sendRtxPayloadType) {
				var rtxCodec = {
					name: 'rtx',
					mimeType: capCodec.kind + '/rtx',
					clockRate: capCodec.clockRate,
					payloadType: capCodec.sendRtxPayloadType,
					parameters: {
						apt: capCodec.sendPayloadType
					}
				};

				params.codecs.push(rtxCodec);
			}

			// NOTE: We assume a single media codec plus an optional RTX codec for now.
			// TODO: In the future, we need to add FEC, CN, etc, codecs.
			break;
		}
	} catch (err) {
		_didIteratorError7 = true;
		_iteratorError7 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion7 && _iterator7.return) {
				_iterator7.return();
			}
		} finally {
			if (_didIteratorError7) {
				throw _iteratorError7;
			}
		}
	}

	var _iteratorNormalCompletion8 = true;
	var _didIteratorError8 = false;
	var _iteratorError8 = undefined;

	try {
		for (var _iterator8 = extendedRtpCapabilities.headerExtensions[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
			var capExt = _step8.value;

			if (capExt.kind && capExt.kind !== kind) continue;

			var ext = {
				uri: capExt.uri,
				id: capExt.sendId
			};

			params.headerExtensions.push(ext);
		}
	} catch (err) {
		_didIteratorError8 = true;
		_iteratorError8 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion8 && _iterator8.return) {
				_iterator8.return();
			}
		} finally {
			if (_didIteratorError8) {
				throw _iteratorError8;
			}
		}
	}

	return params;
}

/**
 * Generate RTP parameters of the given kind for receiving media.
 * All the media codecs per kind are considered. This is useful for generating
 * a SDP remote offer.
 * NOTE: muxId, encodings and rtcp fields are left empty.
 *
 * @param {String} kind
 * @param {RTCExtendedRtpCapabilities} extendedRtpCapabilities
 *
 * @return {RTCRtpParameters}
 */
function getReceivingFullRtpParameters(kind, extendedRtpCapabilities) {
	var params = {
		muxId: null,
		codecs: [],
		headerExtensions: [],
		encodings: [],
		rtcp: {}
	};

	var _iteratorNormalCompletion9 = true;
	var _didIteratorError9 = false;
	var _iteratorError9 = undefined;

	try {
		for (var _iterator9 = extendedRtpCapabilities.codecs[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
			var capCodec = _step9.value;

			if (capCodec.kind !== kind) continue;

			var codec = {
				name: capCodec.name,
				mimeType: capCodec.mimeType,
				clockRate: capCodec.clockRate,
				payloadType: capCodec.recvPayloadType,
				channels: capCodec.channels,
				rtcpFeedback: capCodec.rtcpFeedback,
				parameters: capCodec.parameters
			};

			if (!codec.channels) delete codec.channels;

			params.codecs.push(codec);

			// Add RTX codec.
			if (capCodec.recvRtxPayloadType) {
				var rtxCodec = {
					name: 'rtx',
					mimeType: capCodec.kind + '/rtx',
					clockRate: capCodec.clockRate,
					payloadType: capCodec.recvRtxPayloadType,
					parameters: {
						apt: capCodec.recvPayloadType
					}
				};

				params.codecs.push(rtxCodec);
			}

			// TODO: In the future, we need to add FEC, CN, etc, codecs.
		}
	} catch (err) {
		_didIteratorError9 = true;
		_iteratorError9 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion9 && _iterator9.return) {
				_iterator9.return();
			}
		} finally {
			if (_didIteratorError9) {
				throw _iteratorError9;
			}
		}
	}

	var _iteratorNormalCompletion10 = true;
	var _didIteratorError10 = false;
	var _iteratorError10 = undefined;

	try {
		for (var _iterator10 = extendedRtpCapabilities.headerExtensions[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
			var capExt = _step10.value;

			if (capExt.kind && capExt.kind !== kind) continue;

			var ext = {
				uri: capExt.uri,
				id: capExt.recvId
			};

			params.headerExtensions.push(ext);
		}
	} catch (err) {
		_didIteratorError10 = true;
		_iteratorError10 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion10 && _iterator10.return) {
				_iterator10.return();
			}
		} finally {
			if (_didIteratorError10) {
				throw _iteratorError10;
			}
		}
	}

	return params;
}

function matchCapCodecs(aCodec, bCodec) {
	var aMimeType = aCodec.mimeType.toLowerCase();
	var bMimeType = bCodec.mimeType.toLowerCase();

	if (aMimeType !== bMimeType) return false;

	if (aCodec.clockRate !== bCodec.clockRate) return false;

	if (aCodec.channels !== bCodec.channels) return false;

	// Match H264 parameters.
	if (aMimeType === 'video/h264') {
		var aPacketizationMode = (aCodec.parameters || {})['packetization-mode'] || 0;
		var bPacketizationMode = (bCodec.parameters || {})['packetization-mode'] || 0;

		if (aPacketizationMode !== bPacketizationMode) return false;
	}

	return true;
}

function matchCapHeaderExtensions(aExt, bExt) {
	if (aExt.kind && bExt.kind && aExt.kind !== bExt.kind) return false;

	if (aExt.uri !== bExt.uri) return false;

	return true;
}

function reduceRtcpFeedback(codecA, codecB) {
	var reducedRtcpFeedback = [];

	var _loop5 = function _loop5(aFb) {
		var matchingBFb = (codecB.rtcpFeedback || []).find(function (bFb) {
			return bFb.type === aFb.type && bFb.parameter === aFb.parameter;
		});

		if (matchingBFb) reducedRtcpFeedback.push(matchingBFb);
	};

	var _iteratorNormalCompletion11 = true;
	var _didIteratorError11 = false;
	var _iteratorError11 = undefined;

	try {
		for (var _iterator11 = (codecA.rtcpFeedback || [])[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
			var aFb = _step11.value;

			_loop5(aFb);
		}
	} catch (err) {
		_didIteratorError11 = true;
		_iteratorError11 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion11 && _iterator11.return) {
				_iterator11.return();
			}
		} finally {
			if (_didIteratorError11) {
				throw _iteratorError11;
			}
		}
	}

	return reducedRtcpFeedback;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(25);
var writer = __webpack_require__(26);

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parseParams = parser.parseParams;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.extractRtpCapabilities = extractRtpCapabilities;
exports.extractDtlsParameters = extractDtlsParameters;

var _sdpTransform = __webpack_require__(4);

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extract RTP capabilities from a SDP.
 *
 * @param {Object} sdpObj - SDP Object generated by sdp-transform.
 * @return {RTCRtpCapabilities}
 */
function extractRtpCapabilities(sdpObj) {
	// Map of RtpCodecParameters indexed by payload type.
	var codecsMap = new Map();

	// Array of RtpHeaderExtensions.
	var headerExtensions = [];

	// Whether a m=audio/video section has been already found.
	var gotAudio = false;
	var gotVideo = false;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = sdpObj.media[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var m = _step.value;

			var kind = m.type;

			switch (kind) {
				case 'audio':
					{
						if (gotAudio) continue;

						gotAudio = true;
						break;
					}
				case 'video':
					{
						if (gotVideo) continue;

						gotVideo = true;
						break;
					}
				default:
					{
						continue;
					}
			}

			// Get codecs.
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = m.rtp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var rtp = _step2.value;

					var codec = {
						name: rtp.codec,
						mimeType: kind + '/' + rtp.codec,
						kind: kind,
						clockRate: rtp.rate,
						preferredPayloadType: rtp.payload,
						channels: rtp.encoding,
						rtcpFeedback: [],
						parameters: {}
					};

					if (codec.kind !== 'audio') delete codec.channels;else if (!codec.channels) codec.channels = 1;

					codecsMap.set(codec.preferredPayloadType, codec);
				}

				// Get codec parameters.
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = (m.fmtp || [])[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var fmtp = _step3.value;

					var parameters = _sdpTransform2.default.parseFmtpConfig(fmtp.config);
					var codec = codecsMap.get(fmtp.payload);

					if (!codec) continue;

					codec.parameters = parameters;
				}

				// Get RTCP feedback for each codec.
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = (m.rtcpFb || [])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var fb = _step4.value;

					var codec = codecsMap.get(fb.payload);

					if (!codec) continue;

					var feedback = {
						type: fb.type,
						parameter: fb.subtype
					};

					if (!feedback.parameter) delete feedback.parameter;

					codec.rtcpFeedback.push(feedback);
				}

				// Get RTP header extensions.
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = (m.ext || [])[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var ext = _step5.value;

					var headerExtension = {
						kind: kind,
						uri: ext.uri,
						preferredId: ext.value
					};

					headerExtensions.push(headerExtension);
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var rtpCapabilities = {
		codecs: Array.from(codecsMap.values()),
		headerExtensions: headerExtensions,
		fecMechanisms: [] // TODO
	};

	return rtpCapabilities;
}

/**
 * Extract DTLS parameters from a SDP.
 *
 * @param {Object} sdpObj - SDP Object generated by sdp-transform.
 * @return {RTCDtlsParameters}
 */
function extractDtlsParameters(sdpObj) {
	var media = getFirstActiveMediaSection(sdpObj);
	var fingerprint = media.fingerprint || sdpObj.fingerprint;
	var role = void 0;

	switch (media.setup) {
		case 'active':
			role = 'client';
			break;
		case 'passive':
			role = 'server';
			break;
		case 'actpass':
			role = 'auto';
			break;
	}

	var dtlsParameters = {
		role: role,
		fingerprints: [{
			algorithm: fingerprint.type,
			value: fingerprint.hash
		}]
	};

	return dtlsParameters;
}

/**
 * Get the first acive media section.
 *
 * @private
 * @param {Object} sdpObj - SDP Object generated by sdp-transform.
 * @return {Object} SDP media section as parsed by sdp-transform.
 */
function getFirstActiveMediaSection(sdpObj) {
	return (sdpObj.media || []).find(function (m) {
		return m.iceUfrag && m.port !== 0;
	});
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _fixBabelExtend = function (O) {
	var gPO = O.getPrototypeOf || function (o) {
		return o.__proto__;
	},
	    sPO = O.setPrototypeOf || function (o, p) {
		o.__proto__ = p;
		return o;
	},
	    construct = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
		var Constructor,
		    a = [null];
		a.push.apply(a, args);
		Constructor = Parent.bind.apply(Parent, a);
		return sPO(new Constructor(), Class.prototype);
	};

	return function fixBabelExtend(Class) {
		var Parent = gPO(Class);
		return sPO(Class, sPO(function Super() {
			return construct(Parent, arguments, gPO(this).constructor);
		}, Parent));
	};
}(Object);

/**
 * Error produced when calling a method in an invalid state.
 */
var InvalidStateError = exports.InvalidStateError = _fixBabelExtend(function (_Error) {
	_inherits(InvalidStateError, _Error);

	function InvalidStateError(message) {
		_classCallCheck(this, InvalidStateError);

		var _this = _possibleConstructorReturn(this, (InvalidStateError.__proto__ || Object.getPrototypeOf(InvalidStateError)).call(this, message));

		_this.name = 'InvalidStateError';

		if (Error.hasOwnProperty('captureStackTrace')) // Just in V8.
			Error.captureStackTrace(_this, InvalidStateError);else _this.stack = new Error(message).stack;
		return _this;
	}

	return InvalidStateError;
}(Error));

global.InvalidStateError = InvalidStateError;

/**
 * Error produced when a Promise is rejected due to a timeout.
 */

var TimeoutError = exports.TimeoutError = _fixBabelExtend(function (_Error2) {
	_inherits(TimeoutError, _Error2);

	function TimeoutError(message) {
		_classCallCheck(this, TimeoutError);

		var _this2 = _possibleConstructorReturn(this, (TimeoutError.__proto__ || Object.getPrototypeOf(TimeoutError)).call(this, message));

		_this2.name = 'TimeoutError';

		if (Error.hasOwnProperty('captureStackTrace')) // Just in V8.
			Error.captureStackTrace(_this2, InvalidStateError);else _this2.stack = new Error(message).stack;
		return _this2;
	}

	return TimeoutError;
}(Error));

/**
 * Error indicating not support for something.
 */


var UnsupportedError = exports.UnsupportedError = _fixBabelExtend(function (_Error3) {
	_inherits(UnsupportedError, _Error3);

	function UnsupportedError(message, data) {
		_classCallCheck(this, UnsupportedError);

		var _this3 = _possibleConstructorReturn(this, (UnsupportedError.__proto__ || Object.getPrototypeOf(UnsupportedError)).call(this, message));

		_this3.name = 'UnsupportedError';

		if (Error.hasOwnProperty('captureStackTrace')) // Just in V8.
			Error.captureStackTrace(_this3, InvalidStateError);else _this3.stack = new Error(message).stack;

		_this3.data = data;
		return _this3;
	}

	return UnsupportedError;
}(Error));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bowser = __webpack_require__(18);

var _bowser2 = _interopRequireDefault(_bowser);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _Chrome = __webpack_require__(24);

var _Chrome2 = _interopRequireDefault(_Chrome);

var _Safari = __webpack_require__(28);

var _Safari2 = _interopRequireDefault(_Safari);

var _Firefox = __webpack_require__(29);

var _Firefox2 = _interopRequireDefault(_Firefox);

var _Firefox3 = __webpack_require__(30);

var _Firefox4 = _interopRequireDefault(_Firefox3);

var _Edge = __webpack_require__(31);

var _Edge2 = _interopRequireDefault(_Edge);

var _ReactNative = __webpack_require__(33);

var _ReactNative2 = _interopRequireDefault(_ReactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _Logger2.default('Device');

/**
 * Class with static members representing the underlying device or browser.
 */

var Device = function () {
	function Device() {
		_classCallCheck(this, Device);
	}

	_createClass(Device, null, [{
		key: 'getFlag',

		/**
   * Get the device flag.
   *
   * @return {String}
   */
		value: function getFlag() {
			if (!Device._detected) Device._detect();

			return Device._flag;
		}

		/**
   * Get the device name.
   *
   * @return {String}
   */

	}, {
		key: 'getName',
		value: function getName() {
			if (!Device._detected) Device._detect();

			return Device._name;
		}

		/**
   * Get the device version.
   *
   * @return {String}
   */

	}, {
		key: 'getVersion',
		value: function getVersion() {
			if (!Device._detected) Device._detect();

			return Device._version;
		}

		/**
   * Get the bowser module Object.
   *
   * @return {Object}
   */

	}, {
		key: 'getBowser',
		value: function getBowser() {
			if (!Device._detected) Device._detect();

			return Device._bowser;
		}

		/**
   * Whether this device is supported.
   *
   * @return {Boolean}
   */

	}, {
		key: 'isSupported',
		value: function isSupported() {
			if (!Device._detected) Device._detect();

			return Boolean(Device._handlerClass);
		}

		/**
   * Returns a suitable WebRTC handler class.
   *
   * @type {Class}
   */

	}, {
		key: '_detect',


		/**
   * Detects the current device/browser.
   *
   * @private
   */
		value: function _detect() {
			Device._detected = true;

			// If this is React-Native manually fill data.
			if (global.navigator && global.navigator.product === 'ReactNative') {
				Device._flag = 'react-native';
				Device._name = 'ReactNative';
				Device._version = undefined; // NOTE: No idea how to know it.
				Device._bowser = {};
				Device._handlerClass = _ReactNative2.default;
			}
			// If this is a browser use bowser module detection.
			else if (global.navigator && typeof global.navigator.userAgent === 'string') {
					var ua = global.navigator.userAgent;
					var browser = _bowser2.default.detect(ua);

					Device._flag = undefined;
					Device._name = browser.name || undefined;
					Device._version = browser.version || undefined;
					Device._bowser = browser;
					Device._handlerClass = null;

					// Chrome, Chromium (desktop and mobile).
					if (_bowser2.default.check({ chrome: '55', chromium: '55' }, true, ua)) {
						Device._flag = 'chrome';
						Device._handlerClass = _Chrome2.default;
					}
					// Firefox (desktop and mobile).
					else if (_bowser2.default.check({ firefox: '59' }, true, ua)) {
							Device._flag = 'firefox';
							Device._handlerClass = _Firefox4.default;
						} else if (_bowser2.default.check({ firefox: '50' }, true, ua)) {
							Device._flag = 'firefox';
							Device._handlerClass = _Firefox2.default;
						}
						// Safari (desktop and mobile).
						else if (_bowser2.default.check({ safari: '11' }, true, ua)) {
								Device._flag = 'safari';
								Device._handlerClass = _Safari2.default;
							}
							// Edge (desktop).
							else if (_bowser2.default.check({ msedge: '11' }, true, ua)) {
									Device._flag = 'msedge';
									Device._handlerClass = _Edge2.default;
								}
					// Opera (desktop and mobile).
					if (_bowser2.default.check({ opera: '44' }, true, ua)) {
						Device._flag = 'opera';
						Device._handlerClass = _Chrome2.default;
					}

					if (Device.isSupported()) {
						logger.debug('browser supported [flag:%s, name:"%s", version:%s, handler:%s]', Device._flag, Device._name, Device._version, Device._handlerClass.tag);
					} else {
						logger.warn('browser not supported [name:%s, version:%s]', Device._name, Device._version);
					}
				}
				// Otherwise fail.
				else {
						logger.warn('device not supported');
					}
		}
	}, {
		key: 'Handler',
		get: function get() {
			if (!Device._detected) Device._detect();

			return Device._handlerClass;
		}
	}]);

	return Device;
}();

// Initialized flag.
// @type {Boolean}


exports.default = Device;
Device._detected = false;

// Device flag.
// @type {String}
Device._flag = undefined;

// Device name.
// @type {String}
Device._name = undefined;

// Device version.
// @type {String}
Device._version = undefined;

// bowser module Object.
// @type {Object}
Device._bowser = undefined;

// WebRTC hander for this device.
// @type {Class}
Device._handlerClass = null;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.fillRtpParametersForTrack = fillRtpParametersForTrack;
exports.addSimulcastForTrack = addSimulcastForTrack;
/**
 * Fill the given RTP parameters for the given track.
 *
 * @param {RTCRtpParameters} rtpParameters -  RTP parameters to be filled.
 * @param {Object} sdpObj - Local SDP Object generated by sdp-transform.
 * @param {MediaStreamTrack} track
 */
function fillRtpParametersForTrack(rtpParameters, sdpObj, track) {
	var kind = track.kind;
	var rtcp = {
		cname: null,
		reducedSize: true,
		mux: true
	};

	var mSection = (sdpObj.media || []).find(function (m) {
		return m.type === kind;
	});

	if (!mSection) throw new Error('m=' + kind + ' section not found');

	// First media SSRC (or the only one).
	var firstSsrc = void 0;

	// Get all the SSRCs.

	var ssrcs = new Set();

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (mSection.ssrcs || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var line = _step.value;

			if (line.attribute !== 'msid') continue;

			var trackId = line.value.split(' ')[1];

			if (trackId === track.id) {
				var _ssrc2 = line.id;

				ssrcs.add(_ssrc2);

				if (!firstSsrc) firstSsrc = _ssrc2;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	if (ssrcs.size === 0) throw new Error('a=ssrc line not found for local track [track.id:' + track.id + ']');

	// Get media and RTX SSRCs.

	var ssrcToRtxSsrc = new Map();

	// First assume RTX is used.
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = (mSection.ssrcGroups || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _line = _step2.value;

			if (_line.semantics !== 'FID') continue;

			var _line$ssrcs$split = _line.ssrcs.split(/\s+/),
			    _line$ssrcs$split2 = _slicedToArray(_line$ssrcs$split, 2),
			    ssrc = _line$ssrcs$split2[0],
			    rtxSsrc = _line$ssrcs$split2[1];

			ssrc = Number(ssrc);
			rtxSsrc = Number(rtxSsrc);

			if (ssrcs.has(ssrc)) {
				// Remove both the SSRC and RTX SSRC from the Set so later we know that they
				// are already handled.
				ssrcs.delete(ssrc);
				ssrcs.delete(rtxSsrc);

				// Add to the map.
				ssrcToRtxSsrc.set(ssrc, rtxSsrc);
			}
		}

		// If the Set of SSRCs is not empty it means that RTX is not being used, so take
		// media SSRCs from there.
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = ssrcs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var ssrc = _step3.value;

			// Add to the map.
			ssrcToRtxSsrc.set(ssrc, null);
		}

		// Get RTCP info.
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	var ssrcCnameLine = mSection.ssrcs.find(function (line) {
		return line.attribute === 'cname' && line.id === firstSsrc;
	});

	if (ssrcCnameLine) rtcp.cname = ssrcCnameLine.value;

	// Fill RTP parameters.

	rtpParameters.rtcp = rtcp;
	rtpParameters.encodings = [];

	var simulcast = ssrcToRtxSsrc.size > 1;
	var simulcastProfiles = ['low', 'medium', 'high'];

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = ssrcToRtxSsrc[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var _ref = _step4.value;

			var _ref2 = _slicedToArray(_ref, 2);

			var _ssrc = _ref2[0];
			var rtxSsrc = _ref2[1];

			var encoding = { ssrc: _ssrc };

			if (rtxSsrc) encoding.rtx = { ssrc: rtxSsrc };

			if (simulcast) encoding.profile = simulcastProfiles.shift();

			rtpParameters.encodings.push(encoding);
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}
}

/**
 * Adds simulcast into the given SDP for the given track.
 *
 * @param {Object} sdpObj - Local SDP Object generated by sdp-transform.
 * @param {MediaStreamTrack} track
 */
function addSimulcastForTrack(sdpObj, track) {
	var kind = track.kind;

	var mSection = (sdpObj.media || []).find(function (m) {
		return m.type === kind;
	});

	if (!mSection) throw new Error('m=' + kind + ' section not found');

	var ssrc = void 0;
	var rtxSsrc = void 0;
	var msid = void 0;

	// Get the SSRC.

	var ssrcMsidLine = (mSection.ssrcs || []).find(function (line) {
		if (line.attribute !== 'msid') return false;

		var trackId = line.value.split(' ')[1];

		if (trackId === track.id) {
			ssrc = line.id;
			msid = line.value.split(' ')[0];

			return true;
		}
	});

	if (!ssrcMsidLine) throw new Error('a=ssrc line not found for local track [track.id:' + track.id + ']');

	// Get the SSRC for RTX.

	(mSection.ssrcGroups || []).some(function (line) {
		if (line.semantics !== 'FID') return;

		var ssrcs = line.ssrcs.split(/\s+/);

		if (Number(ssrcs[0]) === ssrc) {
			rtxSsrc = Number(ssrcs[1]);

			return true;
		}
	});

	var ssrcCnameLine = mSection.ssrcs.find(function (line) {
		return line.attribute === 'cname' && line.id === ssrc;
	});

	if (!ssrcCnameLine) throw new Error('CNAME line not found for local track [track.id:' + track.id + ']');

	var cname = ssrcCnameLine.value;
	var ssrc2 = ssrc + 1;
	var ssrc3 = ssrc + 2;

	mSection.ssrcGroups = mSection.ssrcGroups || [];

	mSection.ssrcGroups.push({
		semantics: 'SIM',
		ssrcs: ssrc + ' ' + ssrc2 + ' ' + ssrc3
	});

	mSection.ssrcs.push({
		id: ssrc2,
		attribute: 'cname',
		value: cname
	});

	mSection.ssrcs.push({
		id: ssrc2,
		attribute: 'msid',
		value: msid + ' ' + track.id
	});

	mSection.ssrcs.push({
		id: ssrc3,
		attribute: 'cname',
		value: cname
	});

	mSection.ssrcs.push({
		id: ssrc3,
		attribute: 'msid',
		value: msid + ' ' + track.id
	});

	if (rtxSsrc) {
		var rtxSsrc2 = rtxSsrc + 1;
		var rtxSsrc3 = rtxSsrc + 2;

		mSection.ssrcGroups.push({
			semantics: 'FID',
			ssrcs: ssrc2 + ' ' + rtxSsrc2
		});

		mSection.ssrcs.push({
			id: rtxSsrc2,
			attribute: 'cname',
			value: cname
		});

		mSection.ssrcs.push({
			id: rtxSsrc2,
			attribute: 'msid',
			value: msid + ' ' + track.id
		});

		mSection.ssrcGroups.push({
			semantics: 'FID',
			ssrcs: ssrc3 + ' ' + rtxSsrc3
		});

		mSection.ssrcs.push({
			id: rtxSsrc3,
			attribute: 'cname',
			value: cname
		});

		mSection.ssrcs.push({
			id: rtxSsrc3,
			attribute: 'msid',
			value: msid + ' ' + track.id
		});
	}
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdpTransform = __webpack_require__(4);

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _Logger2.default('RemotePlanBSdp');

var RemoteSdp = function () {
	function RemoteSdp(rtpParametersByKind) {
		_classCallCheck(this, RemoteSdp);

		// Generic sending RTP parameters for audio and video.
		// @type {Object}
		this._rtpParametersByKind = rtpParametersByKind;

		// Transport local parameters, including DTLS parameteres.
		// @type {Object}
		this._transportLocalParameters = null;

		// Transport remote parameters, including ICE parameters, ICE candidates
		// and DTLS parameteres.
		// @type {Object}
		this._transportRemoteParameters = null;

		// SDP global fields.
		// @type {Object}
		this._sdpGlobalFields = {
			id: utils.randomNumber(),
			version: 0
		};
	}

	_createClass(RemoteSdp, [{
		key: 'setTransportLocalParameters',
		value: function setTransportLocalParameters(transportLocalParameters) {
			logger.debug('setTransportLocalParameters() [transportLocalParameters:%o]', transportLocalParameters);

			this._transportLocalParameters = transportLocalParameters;
		}
	}, {
		key: 'setTransportRemoteParameters',
		value: function setTransportRemoteParameters(transportRemoteParameters) {
			logger.debug('setTransportRemoteParameters() [transportRemoteParameters:%o]', transportRemoteParameters);

			this._transportRemoteParameters = transportRemoteParameters;
		}
	}, {
		key: 'updateTransportRemoteIceParameters',
		value: function updateTransportRemoteIceParameters(remoteIceParameters) {
			logger.debug('updateTransportRemoteIceParameters() [remoteIceParameters:%o]', remoteIceParameters);

			this._transportRemoteParameters.iceParameters = remoteIceParameters;
		}
	}]);

	return RemoteSdp;
}();

var SendRemoteSdp = function (_RemoteSdp) {
	_inherits(SendRemoteSdp, _RemoteSdp);

	function SendRemoteSdp(rtpParametersByKind) {
		_classCallCheck(this, SendRemoteSdp);

		return _possibleConstructorReturn(this, (SendRemoteSdp.__proto__ || Object.getPrototypeOf(SendRemoteSdp)).call(this, rtpParametersByKind));
	}

	_createClass(SendRemoteSdp, [{
		key: 'createAnswerSdp',
		value: function createAnswerSdp(localSdpObj) {
			logger.debug('createAnswerSdp()');

			if (!this._transportLocalParameters) throw new Error('no transport local parameters');else if (!this._transportRemoteParameters) throw new Error('no transport remote parameters');

			var remoteIceParameters = this._transportRemoteParameters.iceParameters;
			var remoteIceCandidates = this._transportRemoteParameters.iceCandidates;
			var remoteDtlsParameters = this._transportRemoteParameters.dtlsParameters;
			var sdpObj = {};
			var mids = (localSdpObj.media || []).map(function (m) {
				return m.mid;
			});

			// Increase our SDP version.
			this._sdpGlobalFields.version++;

			sdpObj.version = 0;
			sdpObj.origin = {
				address: '0.0.0.0',
				ipVer: 4,
				netType: 'IN',
				sessionId: this._sdpGlobalFields.id,
				sessionVersion: this._sdpGlobalFields.version,
				username: 'mediasoup-client'
			};
			sdpObj.name = '-';
			sdpObj.timing = { start: 0, stop: 0 };
			sdpObj.icelite = remoteIceParameters.iceLite ? 'ice-lite' : null;
			sdpObj.msidSemantic = {
				semantic: 'WMS',
				token: '*'
			};
			sdpObj.groups = [{
				type: 'BUNDLE',
				mids: mids.join(' ')
			}];
			sdpObj.media = [];

			// NOTE: We take the latest fingerprint.
			var numFingerprints = remoteDtlsParameters.fingerprints.length;

			sdpObj.fingerprint = {
				type: remoteDtlsParameters.fingerprints[numFingerprints - 1].algorithm,
				hash: remoteDtlsParameters.fingerprints[numFingerprints - 1].value
			};

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (localSdpObj.media || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var localMediaObj = _step.value;

					var kind = localMediaObj.type;
					var codecs = this._rtpParametersByKind[kind].codecs;
					var headerExtensions = this._rtpParametersByKind[kind].headerExtensions;
					var remoteMediaObj = {};

					remoteMediaObj.type = localMediaObj.type;
					remoteMediaObj.port = 7;
					remoteMediaObj.protocol = 'RTP/SAVPF';
					remoteMediaObj.connection = { ip: '127.0.0.1', version: 4 };
					remoteMediaObj.mid = localMediaObj.mid;

					remoteMediaObj.iceUfrag = remoteIceParameters.usernameFragment;
					remoteMediaObj.icePwd = remoteIceParameters.password;
					remoteMediaObj.candidates = [];

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = remoteIceCandidates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var candidate = _step2.value;

							var candidateObj = {};

							// mediasoup does not support non rtcp-mux so candidates component is
							// always RTP (1).
							candidateObj.component = 1;
							candidateObj.foundation = candidate.foundation;
							candidateObj.ip = candidate.ip;
							candidateObj.port = candidate.port;
							candidateObj.priority = candidate.priority;
							candidateObj.transport = candidate.protocol;
							candidateObj.type = candidate.type;
							if (candidate.tcpType) candidateObj.tcptype = candidate.tcpType;

							remoteMediaObj.candidates.push(candidateObj);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					remoteMediaObj.endOfCandidates = 'end-of-candidates';

					// Announce support for ICE renomination.
					// https://tools.ietf.org/html/draft-thatcher-ice-renomination
					remoteMediaObj.iceOptions = 'renomination';

					switch (remoteDtlsParameters.role) {
						case 'client':
							remoteMediaObj.setup = 'active';
							break;
						case 'server':
							remoteMediaObj.setup = 'passive';
							break;
					}

					switch (localMediaObj.direction) {
						case 'sendrecv':
						case 'sendonly':
							remoteMediaObj.direction = 'recvonly';
							break;
						case 'recvonly':
						case 'inactive':
							remoteMediaObj.direction = 'inactive';
							break;
					}

					// If video, be ready for simulcast.
					if (kind === 'video') remoteMediaObj.xGoogleFlag = 'conference';

					remoteMediaObj.rtp = [];
					remoteMediaObj.rtcpFb = [];
					remoteMediaObj.fmtp = [];

					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = codecs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var codec = _step3.value;

							var rtp = {
								payload: codec.payloadType,
								codec: codec.name,
								rate: codec.clockRate
							};

							if (codec.channels > 1) rtp.encoding = codec.channels;

							remoteMediaObj.rtp.push(rtp);

							if (codec.parameters) {
								var paramFmtp = {
									payload: codec.payloadType,
									config: ''
								};

								var _iteratorNormalCompletion5 = true;
								var _didIteratorError5 = false;
								var _iteratorError5 = undefined;

								try {
									for (var _iterator5 = Object.keys(codec.parameters)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
										var key = _step5.value;

										if (paramFmtp.config) paramFmtp.config += ';';

										paramFmtp.config += key + '=' + codec.parameters[key];
									}
								} catch (err) {
									_didIteratorError5 = true;
									_iteratorError5 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion5 && _iterator5.return) {
											_iterator5.return();
										}
									} finally {
										if (_didIteratorError5) {
											throw _iteratorError5;
										}
									}
								}

								if (paramFmtp.config) remoteMediaObj.fmtp.push(paramFmtp);
							}

							if (codec.rtcpFeedback) {
								var _iteratorNormalCompletion6 = true;
								var _didIteratorError6 = false;
								var _iteratorError6 = undefined;

								try {
									for (var _iterator6 = codec.rtcpFeedback[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
										var fb = _step6.value;

										remoteMediaObj.rtcpFb.push({
											payload: codec.payloadType,
											type: fb.type,
											subtype: fb.parameter || ''
										});
									}
								} catch (err) {
									_didIteratorError6 = true;
									_iteratorError6 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion6 && _iterator6.return) {
											_iterator6.return();
										}
									} finally {
										if (_didIteratorError6) {
											throw _iteratorError6;
										}
									}
								}
							}
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}

					remoteMediaObj.payloads = codecs.map(function (codec) {
						return codec.payloadType;
					}).join(' ');

					remoteMediaObj.ext = [];

					var _loop = function _loop(ext) {
						// Don't add a header extension if not present in the offer.
						var matchedLocalExt = (localMediaObj.ext || []).find(function (localExt) {
							return localExt.uri === ext.uri;
						});

						if (!matchedLocalExt) return 'continue';

						remoteMediaObj.ext.push({
							uri: ext.uri,
							value: ext.id
						});
					};

					var _iteratorNormalCompletion4 = true;
					var _didIteratorError4 = false;
					var _iteratorError4 = undefined;

					try {
						for (var _iterator4 = headerExtensions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
							var ext = _step4.value;

							var _ret = _loop(ext);

							if (_ret === 'continue') continue;
						}
					} catch (err) {
						_didIteratorError4 = true;
						_iteratorError4 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion4 && _iterator4.return) {
								_iterator4.return();
							}
						} finally {
							if (_didIteratorError4) {
								throw _iteratorError4;
							}
						}
					}

					remoteMediaObj.rtcpMux = 'rtcp-mux';
					remoteMediaObj.rtcpRsize = 'rtcp-rsize';

					// Push it.
					sdpObj.media.push(remoteMediaObj);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var sdp = _sdpTransform2.default.write(sdpObj);

			return sdp;
		}
	}]);

	return SendRemoteSdp;
}(RemoteSdp);

var RecvRemoteSdp = function (_RemoteSdp2) {
	_inherits(RecvRemoteSdp, _RemoteSdp2);

	function RecvRemoteSdp(rtpParametersByKind) {
		_classCallCheck(this, RecvRemoteSdp);

		return _possibleConstructorReturn(this, (RecvRemoteSdp.__proto__ || Object.getPrototypeOf(RecvRemoteSdp)).call(this, rtpParametersByKind));
	}

	/**
  * @param {Array<String>} kinds - Media kinds.
  * @param {Array<Object>} consumerInfos - Consumer informations.
  * @return {String}
  */


	_createClass(RecvRemoteSdp, [{
		key: 'createOfferSdp',
		value: function createOfferSdp(kinds, consumerInfos) {
			var _this3 = this;

			logger.debug('createOfferSdp()');

			if (!this._transportRemoteParameters) throw new Error('no transport remote parameters');

			var remoteIceParameters = this._transportRemoteParameters.iceParameters;
			var remoteIceCandidates = this._transportRemoteParameters.iceCandidates;
			var remoteDtlsParameters = this._transportRemoteParameters.dtlsParameters;
			var sdpObj = {};
			var mids = kinds;

			// Increase our SDP version.
			this._sdpGlobalFields.version++;

			sdpObj.version = 0;
			sdpObj.origin = {
				address: '0.0.0.0',
				ipVer: 4,
				netType: 'IN',
				sessionId: this._sdpGlobalFields.id,
				sessionVersion: this._sdpGlobalFields.version,
				username: 'mediasoup-client'
			};
			sdpObj.name = '-';
			sdpObj.timing = { start: 0, stop: 0 };
			sdpObj.icelite = remoteIceParameters.iceLite ? 'ice-lite' : null;
			sdpObj.msidSemantic = {
				semantic: 'WMS',
				token: '*'
			};
			sdpObj.groups = [{
				type: 'BUNDLE',
				mids: mids.join(' ')
			}];
			sdpObj.media = [];

			// NOTE: We take the latest fingerprint.
			var numFingerprints = remoteDtlsParameters.fingerprints.length;

			sdpObj.fingerprint = {
				type: remoteDtlsParameters.fingerprints[numFingerprints - 1].algorithm,
				hash: remoteDtlsParameters.fingerprints[numFingerprints - 1].value
			};

			var _loop2 = function _loop2(kind) {
				var codecs = _this3._rtpParametersByKind[kind].codecs;
				var headerExtensions = _this3._rtpParametersByKind[kind].headerExtensions;
				var remoteMediaObj = {};

				remoteMediaObj.type = kind;
				remoteMediaObj.port = 7;
				remoteMediaObj.protocol = 'RTP/SAVPF';
				remoteMediaObj.connection = { ip: '127.0.0.1', version: 4 };
				remoteMediaObj.mid = kind;

				remoteMediaObj.iceUfrag = remoteIceParameters.usernameFragment;
				remoteMediaObj.icePwd = remoteIceParameters.password;
				remoteMediaObj.candidates = [];

				var _iteratorNormalCompletion8 = true;
				var _didIteratorError8 = false;
				var _iteratorError8 = undefined;

				try {
					for (var _iterator8 = remoteIceCandidates[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
						var candidate = _step8.value;

						var candidateObj = {};

						// mediasoup does not support non rtcp-mux so candidates component is
						// always RTP (1).
						candidateObj.component = 1;
						candidateObj.foundation = candidate.foundation;
						candidateObj.ip = candidate.ip;
						candidateObj.port = candidate.port;
						candidateObj.priority = candidate.priority;
						candidateObj.transport = candidate.protocol;
						candidateObj.type = candidate.type;
						if (candidate.tcpType) candidateObj.tcptype = candidate.tcpType;

						remoteMediaObj.candidates.push(candidateObj);
					}
				} catch (err) {
					_didIteratorError8 = true;
					_iteratorError8 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion8 && _iterator8.return) {
							_iterator8.return();
						}
					} finally {
						if (_didIteratorError8) {
							throw _iteratorError8;
						}
					}
				}

				remoteMediaObj.endOfCandidates = 'end-of-candidates';

				// Announce support for ICE renomination.
				// https://tools.ietf.org/html/draft-thatcher-ice-renomination
				remoteMediaObj.iceOptions = 'renomination';

				remoteMediaObj.setup = 'actpass';

				if (consumerInfos.some(function (info) {
					return info.kind === kind;
				})) remoteMediaObj.direction = 'sendonly';else remoteMediaObj.direction = 'inactive';

				remoteMediaObj.rtp = [];
				remoteMediaObj.rtcpFb = [];
				remoteMediaObj.fmtp = [];

				var _iteratorNormalCompletion9 = true;
				var _didIteratorError9 = false;
				var _iteratorError9 = undefined;

				try {
					for (var _iterator9 = codecs[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
						var codec = _step9.value;

						var rtp = {
							payload: codec.payloadType,
							codec: codec.name,
							rate: codec.clockRate
						};

						if (codec.channels > 1) rtp.encoding = codec.channels;

						remoteMediaObj.rtp.push(rtp);

						if (codec.parameters) {
							var paramFmtp = {
								payload: codec.payloadType,
								config: ''
							};

							var _iteratorNormalCompletion12 = true;
							var _didIteratorError12 = false;
							var _iteratorError12 = undefined;

							try {
								for (var _iterator12 = Object.keys(codec.parameters)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
									var key = _step12.value;

									if (paramFmtp.config) paramFmtp.config += ';';

									paramFmtp.config += key + '=' + codec.parameters[key];
								}
							} catch (err) {
								_didIteratorError12 = true;
								_iteratorError12 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion12 && _iterator12.return) {
										_iterator12.return();
									}
								} finally {
									if (_didIteratorError12) {
										throw _iteratorError12;
									}
								}
							}

							if (paramFmtp.config) remoteMediaObj.fmtp.push(paramFmtp);
						}

						if (codec.rtcpFeedback) {
							var _iteratorNormalCompletion13 = true;
							var _didIteratorError13 = false;
							var _iteratorError13 = undefined;

							try {
								for (var _iterator13 = codec.rtcpFeedback[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
									var fb = _step13.value;

									remoteMediaObj.rtcpFb.push({
										payload: codec.payloadType,
										type: fb.type,
										subtype: fb.parameter || ''
									});
								}
							} catch (err) {
								_didIteratorError13 = true;
								_iteratorError13 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion13 && _iterator13.return) {
										_iterator13.return();
									}
								} finally {
									if (_didIteratorError13) {
										throw _iteratorError13;
									}
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError9 = true;
					_iteratorError9 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion9 && _iterator9.return) {
							_iterator9.return();
						}
					} finally {
						if (_didIteratorError9) {
							throw _iteratorError9;
						}
					}
				}

				remoteMediaObj.payloads = codecs.map(function (codec) {
					return codec.payloadType;
				}).join(' ');

				remoteMediaObj.ext = [];

				var _iteratorNormalCompletion10 = true;
				var _didIteratorError10 = false;
				var _iteratorError10 = undefined;

				try {
					for (var _iterator10 = headerExtensions[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
						var ext = _step10.value;

						remoteMediaObj.ext.push({
							uri: ext.uri,
							value: ext.id
						});
					}
				} catch (err) {
					_didIteratorError10 = true;
					_iteratorError10 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion10 && _iterator10.return) {
							_iterator10.return();
						}
					} finally {
						if (_didIteratorError10) {
							throw _iteratorError10;
						}
					}
				}

				remoteMediaObj.rtcpMux = 'rtcp-mux';
				remoteMediaObj.rtcpRsize = 'rtcp-rsize';

				remoteMediaObj.ssrcs = [];
				remoteMediaObj.ssrcGroups = [];

				var _iteratorNormalCompletion11 = true;
				var _didIteratorError11 = false;
				var _iteratorError11 = undefined;

				try {
					for (var _iterator11 = consumerInfos[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
						var info = _step11.value;

						if (info.kind !== kind) continue;

						remoteMediaObj.ssrcs.push({
							id: info.ssrc,
							attribute: 'msid',
							value: info.streamId + ' ' + info.trackId
						});

						remoteMediaObj.ssrcs.push({
							id: info.ssrc,
							attribute: 'mslabel',
							value: info.streamId
						});

						remoteMediaObj.ssrcs.push({
							id: info.ssrc,
							attribute: 'label',
							value: info.trackId
						});

						remoteMediaObj.ssrcs.push({
							id: info.ssrc,
							attribute: 'cname',
							value: info.cname
						});

						if (info.rtxSsrc) {
							remoteMediaObj.ssrcs.push({
								id: info.rtxSsrc,
								attribute: 'msid',
								value: info.streamId + ' ' + info.trackId
							});

							remoteMediaObj.ssrcs.push({
								id: info.rtxSsrc,
								attribute: 'mslabel',
								value: info.streamId
							});

							remoteMediaObj.ssrcs.push({
								id: info.rtxSsrc,
								attribute: 'label',
								value: info.trackId
							});

							remoteMediaObj.ssrcs.push({
								id: info.rtxSsrc,
								attribute: 'cname',
								value: info.cname
							});

							// Associate original and retransmission SSRC.
							remoteMediaObj.ssrcGroups.push({
								semantics: 'FID',
								ssrcs: info.ssrc + ' ' + info.rtxSsrc
							});
						}
					}

					// Push it.
				} catch (err) {
					_didIteratorError11 = true;
					_iteratorError11 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion11 && _iterator11.return) {
							_iterator11.return();
						}
					} finally {
						if (_didIteratorError11) {
							throw _iteratorError11;
						}
					}
				}

				sdpObj.media.push(remoteMediaObj);
			};

			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = kinds[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var kind = _step7.value;

					_loop2(kind);
				}
			} catch (err) {
				_didIteratorError7 = true;
				_iteratorError7 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion7 && _iterator7.return) {
						_iterator7.return();
					}
				} finally {
					if (_didIteratorError7) {
						throw _iteratorError7;
					}
				}
			}

			var sdp = _sdpTransform2.default.write(sdpObj);

			return sdp;
		}
	}]);

	return RecvRemoteSdp;
}(RemoteSdp);

var RemotePlanBSdp = function RemotePlanBSdp(direction, rtpParametersByKind) {
	_classCallCheck(this, RemotePlanBSdp);

	logger.debug('constructor() [direction:%s, rtpParametersByKind:%o]', direction, rtpParametersByKind);

	switch (direction) {
		case 'send':
			return new SendRemoteSdp(rtpParametersByKind);
		case 'recv':
			return new RecvRemoteSdp(rtpParametersByKind);
	}
};

exports.default = RemotePlanBSdp;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{ //c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{ //b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          'rtpmap:%d %s/%s/%s':
          o.rate ?
          'rtpmap:%d %s/%s':
          'rtpmap:%d %s';
      }
    },
    { //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    { //a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          'rtcp:%d %s IP%d %s':
          'rtcp:%d';
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%d trr-int %d'
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          'rtcp-fb:%s %s %s':
          'rtcp-fb:%s %s';
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'uri', 'config'],
      format: function (o) {
        return 'extmap:%d' + (o.direction ? '/%s' : '%v') + ' %s' + (o.config ? ' %s' : '');
      }
    },
    { //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          'crypto:%d %s %s %s':
          'crypto:%d %s %s';
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: 'msid:%s'
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: 'ptime:%d'
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: 'maxptime:%d'
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    { //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
      format: function (o) {
        var str = 'candidate:%s %d %s %d %s %d typ %s';

        str += (o.raddr != null) ? ' raddr %s rport %d' : '%v%v';

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? ' tcptype %s' : '%v';

        if (o.generation != null) {
          str += ' generation %d';
        }

        str += (o['network-id'] != null) ? ' network-id %d' : '%v';
        str += (o['network-cost'] != null) ? ' network-cost %d' : '%v';
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: 'ssrcs',
      reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
      names: ['id', 'attribute', 'value'],
      format: function (o) {
        var str = 'ssrc:%d';
        if (o.attribute != null) {
          str += ' %s';
          if (o.value != null) {
            str += ':%s';
          }
        }
        return str;
      }
    },
    { //a=ssrc-group:FEC 1 2
      //a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { //a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null) ?
          'sctpmap:%s %s %s' :
          'sctpmap:%s %s';
      }
    },
    { //a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    { //a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    { //a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      //a=imageattr:* send [x=800,y=640] recv *
      //a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        //a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        //send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        //recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      //a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        //a=simulcast:
        '^simulcast:' +
        //send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        //space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        //end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //Old simulcast draft 03 (implemented by Firefox)
      //  https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      //a=simulcast: recv pt=97;98 send pt=97
      //a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      //a=framerate:25
      //a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    { // RFC4570
      //a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
      name: 'sourceFilter',
      reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
      names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
      format: 'source-filter: %s %s %s %s %s'
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ['value']
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = '%s';
    }
  });
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fillRtpParametersForTrack = fillRtpParametersForTrack;
/**
 * Fill the given RTP parameters for the given track.
 *
 * @param {RTCRtpParameters} rtpParameters -  RTP parameters to be filled.
 * @param {Object} sdpObj - Local SDP Object generated by sdp-transform.
 * @param {MediaStreamTrack} track
 */
function fillRtpParametersForTrack(rtpParameters, sdpObj, track) {
	var kind = track.kind;
	var rtcp = {
		cname: null,
		reducedSize: true,
		mux: true
	};

	var mSection = (sdpObj.media || []).find(function (m) {
		if (m.type !== kind) return;

		var msidLine = m.msid;

		if (!msidLine) return;

		var trackId = msidLine.split(' ')[1];

		if (trackId === track.id) return true;
	});

	if (!mSection) throw new Error('m=' + kind + ' section not found');

	// Get the SSRC and CNAME.

	var ssrcCnameLine = (mSection.ssrcs || []).find(function (line) {
		return line.attribute === 'cname';
	});

	var ssrc = void 0;

	if (ssrcCnameLine) {
		ssrc = ssrcCnameLine.id;
		rtcp.cname = ssrcCnameLine.value;
	}

	// Get a=rid lines.

	// Array of Objects with rid and profile keys.
	var simulcastStreams = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (mSection.rids || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var rid = _step.value;

			if (rid.direction !== 'send') continue;

			if (/^low/.test(rid.id)) simulcastStreams.push({ rid: rid.id, profile: 'low' });else if (/^medium/.test(rid.id)) simulcastStreams.push({ rid: rid.id, profile: 'medium' });
			if (/^high/.test(rid.id)) simulcastStreams.push({ rid: rid.id, profile: 'high' });
		}

		// Fill RTP parameters.
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	rtpParameters.rtcp = rtcp;
	rtpParameters.encodings = [];

	if (simulcastStreams.length === 0) {
		var encoding = { ssrc: ssrc };

		rtpParameters.encodings.push(encoding);
	} else {
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = simulcastStreams[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var simulcastStream = _step2.value;

				var _encoding = {
					encodingId: simulcastStream.rid,
					profile: simulcastStream.profile
				};

				rtpParameters.encodings.push(_encoding);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdpTransform = __webpack_require__(4);

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _Logger2.default('RemoteUnifiedPlanSdp');

var RemoteSdp = function () {
	function RemoteSdp(rtpParametersByKind) {
		_classCallCheck(this, RemoteSdp);

		// Generic sending RTP parameters for audio and video.
		// @type {Object}
		this._rtpParametersByKind = rtpParametersByKind;

		// Transport local parameters, including DTLS parameteres.
		// @type {Object}
		this._transportLocalParameters = null;

		// Transport remote parameters, including ICE parameters, ICE candidates
		// and DTLS parameteres.
		// @type {Object}
		this._transportRemoteParameters = null;

		// SDP global fields.
		// @type {Object}
		this._sdpGlobalFields = {
			id: utils.randomNumber(),
			version: 0
		};
	}

	_createClass(RemoteSdp, [{
		key: 'setTransportLocalParameters',
		value: function setTransportLocalParameters(transportLocalParameters) {
			logger.debug('setTransportLocalParameters() [transportLocalParameters:%o]', transportLocalParameters);

			this._transportLocalParameters = transportLocalParameters;
		}
	}, {
		key: 'setTransportRemoteParameters',
		value: function setTransportRemoteParameters(transportRemoteParameters) {
			logger.debug('setTransportRemoteParameters() [transportRemoteParameters:%o]', transportRemoteParameters);

			this._transportRemoteParameters = transportRemoteParameters;
		}
	}, {
		key: 'updateTransportRemoteIceParameters',
		value: function updateTransportRemoteIceParameters(remoteIceParameters) {
			logger.debug('updateTransportRemoteIceParameters() [remoteIceParameters:%o]', remoteIceParameters);

			this._transportRemoteParameters.iceParameters = remoteIceParameters;
		}
	}]);

	return RemoteSdp;
}();

var SendRemoteSdp = function (_RemoteSdp) {
	_inherits(SendRemoteSdp, _RemoteSdp);

	function SendRemoteSdp(rtpParametersByKind) {
		_classCallCheck(this, SendRemoteSdp);

		return _possibleConstructorReturn(this, (SendRemoteSdp.__proto__ || Object.getPrototypeOf(SendRemoteSdp)).call(this, rtpParametersByKind));
	}

	_createClass(SendRemoteSdp, [{
		key: 'createAnswerSdp',
		value: function createAnswerSdp(localSdpObj) {
			logger.debug('createAnswerSdp()');

			if (!this._transportLocalParameters) throw new Error('no transport local parameters');else if (!this._transportRemoteParameters) throw new Error('no transport remote parameters');

			var remoteIceParameters = this._transportRemoteParameters.iceParameters;
			var remoteIceCandidates = this._transportRemoteParameters.iceCandidates;
			var remoteDtlsParameters = this._transportRemoteParameters.dtlsParameters;
			var sdpObj = {};
			var mids = (localSdpObj.media || []).filter(function (m) {
				return m.mid;
			}).map(function (m) {
				return m.mid;
			});

			// Increase our SDP version.
			this._sdpGlobalFields.version++;

			sdpObj.version = 0;
			sdpObj.origin = {
				address: '0.0.0.0',
				ipVer: 4,
				netType: 'IN',
				sessionId: this._sdpGlobalFields.id,
				sessionVersion: this._sdpGlobalFields.version,
				username: 'mediasoup-client'
			};
			sdpObj.name = '-';
			sdpObj.timing = { start: 0, stop: 0 };
			sdpObj.icelite = remoteIceParameters.iceLite ? 'ice-lite' : null;
			sdpObj.msidSemantic = {
				semantic: 'WMS',
				token: '*'
			};

			if (mids.length > 0) {
				sdpObj.groups = [{
					type: 'BUNDLE',
					mids: mids.join(' ')
				}];
			}

			sdpObj.media = [];

			// NOTE: We take the latest fingerprint.
			var numFingerprints = remoteDtlsParameters.fingerprints.length;

			sdpObj.fingerprint = {
				type: remoteDtlsParameters.fingerprints[numFingerprints - 1].algorithm,
				hash: remoteDtlsParameters.fingerprints[numFingerprints - 1].value
			};

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (localSdpObj.media || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var localMediaObj = _step.value;

					var closed = localMediaObj.direction === 'inactive';
					var kind = localMediaObj.type;
					var codecs = this._rtpParametersByKind[kind].codecs;
					var headerExtensions = this._rtpParametersByKind[kind].headerExtensions;
					var remoteMediaObj = {};

					remoteMediaObj.type = localMediaObj.type;
					remoteMediaObj.port = 7;
					remoteMediaObj.protocol = 'RTP/SAVPF';
					remoteMediaObj.connection = { ip: '127.0.0.1', version: 4 };
					remoteMediaObj.mid = localMediaObj.mid;

					remoteMediaObj.iceUfrag = remoteIceParameters.usernameFragment;
					remoteMediaObj.icePwd = remoteIceParameters.password;
					remoteMediaObj.candidates = [];

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = remoteIceCandidates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var candidate = _step2.value;

							var candidateObj = {};

							// mediasoup does not support non rtcp-mux so candidates component is
							// always RTP (1).
							candidateObj.component = 1;
							candidateObj.foundation = candidate.foundation;
							candidateObj.ip = candidate.ip;
							candidateObj.port = candidate.port;
							candidateObj.priority = candidate.priority;
							candidateObj.transport = candidate.protocol;
							candidateObj.type = candidate.type;
							if (candidate.tcpType) candidateObj.tcptype = candidate.tcpType;

							remoteMediaObj.candidates.push(candidateObj);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					remoteMediaObj.endOfCandidates = 'end-of-candidates';

					// Announce support for ICE renomination.
					// https://tools.ietf.org/html/draft-thatcher-ice-renomination
					remoteMediaObj.iceOptions = 'renomination';

					switch (remoteDtlsParameters.role) {
						case 'client':
							remoteMediaObj.setup = 'active';
							break;
						case 'server':
							remoteMediaObj.setup = 'passive';
							break;
					}

					switch (localMediaObj.direction) {
						case 'sendrecv':
						case 'sendonly':
							remoteMediaObj.direction = 'recvonly';
							break;
						case 'recvonly':
						case 'inactive':
							remoteMediaObj.direction = 'inactive';
							break;
					}

					remoteMediaObj.rtp = [];
					remoteMediaObj.rtcpFb = [];
					remoteMediaObj.fmtp = [];

					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = codecs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var codec = _step3.value;

							var rtp = {
								payload: codec.payloadType,
								codec: codec.name,
								rate: codec.clockRate
							};

							if (codec.channels > 1) rtp.encoding = codec.channels;

							remoteMediaObj.rtp.push(rtp);

							if (codec.parameters) {
								var paramFmtp = {
									payload: codec.payloadType,
									config: ''
								};

								var _iteratorNormalCompletion6 = true;
								var _didIteratorError6 = false;
								var _iteratorError6 = undefined;

								try {
									for (var _iterator6 = Object.keys(codec.parameters)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
										var key = _step6.value;

										if (paramFmtp.config) paramFmtp.config += ';';

										paramFmtp.config += key + '=' + codec.parameters[key];
									}
								} catch (err) {
									_didIteratorError6 = true;
									_iteratorError6 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion6 && _iterator6.return) {
											_iterator6.return();
										}
									} finally {
										if (_didIteratorError6) {
											throw _iteratorError6;
										}
									}
								}

								if (paramFmtp.config) remoteMediaObj.fmtp.push(paramFmtp);
							}

							if (codec.rtcpFeedback) {
								var _iteratorNormalCompletion7 = true;
								var _didIteratorError7 = false;
								var _iteratorError7 = undefined;

								try {
									for (var _iterator7 = codec.rtcpFeedback[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
										var fb = _step7.value;

										remoteMediaObj.rtcpFb.push({
											payload: codec.payloadType,
											type: fb.type,
											subtype: fb.parameter || ''
										});
									}
								} catch (err) {
									_didIteratorError7 = true;
									_iteratorError7 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion7 && _iterator7.return) {
											_iterator7.return();
										}
									} finally {
										if (_didIteratorError7) {
											throw _iteratorError7;
										}
									}
								}
							}
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}

					remoteMediaObj.payloads = codecs.map(function (codec) {
						return codec.payloadType;
					}).join(' ');

					// NOTE: Firefox does not like a=extmap lines if a=inactive.
					if (!closed) {
						remoteMediaObj.ext = [];

						var _loop = function _loop(ext) {
							// Don't add a header extension if not present in the offer.
							var matchedLocalExt = (localMediaObj.ext || []).find(function (localExt) {
								return localExt.uri === ext.uri;
							});

							if (!matchedLocalExt) return 'continue';

							remoteMediaObj.ext.push({
								uri: ext.uri,
								value: ext.id
							});
						};

						var _iteratorNormalCompletion4 = true;
						var _didIteratorError4 = false;
						var _iteratorError4 = undefined;

						try {
							for (var _iterator4 = headerExtensions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
								var ext = _step4.value;

								var _ret = _loop(ext);

								if (_ret === 'continue') continue;
							}
						} catch (err) {
							_didIteratorError4 = true;
							_iteratorError4 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion4 && _iterator4.return) {
									_iterator4.return();
								}
							} finally {
								if (_didIteratorError4) {
									throw _iteratorError4;
								}
							}
						}
					}

					// Simulcast.
					if (localMediaObj.simulcast_03) {
						// eslint-disable-next-line camelcase
						remoteMediaObj.simulcast_03 = {
							value: localMediaObj.simulcast_03.value.replace(/send/g, 'recv')
						};

						remoteMediaObj.rids = [];

						var _iteratorNormalCompletion5 = true;
						var _didIteratorError5 = false;
						var _iteratorError5 = undefined;

						try {
							for (var _iterator5 = (localMediaObj.rids || [])[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
								var rid = _step5.value;

								if (rid.direction !== 'send') continue;

								remoteMediaObj.rids.push({
									id: rid.id,
									direction: 'recv'
								});
							}
						} catch (err) {
							_didIteratorError5 = true;
							_iteratorError5 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion5 && _iterator5.return) {
									_iterator5.return();
								}
							} finally {
								if (_didIteratorError5) {
									throw _iteratorError5;
								}
							}
						}
					}

					remoteMediaObj.rtcpMux = 'rtcp-mux';
					remoteMediaObj.rtcpRsize = 'rtcp-rsize';

					// Push it.
					sdpObj.media.push(remoteMediaObj);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var sdp = _sdpTransform2.default.write(sdpObj);

			return sdp;
		}
	}]);

	return SendRemoteSdp;
}(RemoteSdp);

var RecvRemoteSdp = function (_RemoteSdp2) {
	_inherits(RecvRemoteSdp, _RemoteSdp2);

	function RecvRemoteSdp(rtpParametersByKind) {
		_classCallCheck(this, RecvRemoteSdp);

		return _possibleConstructorReturn(this, (RecvRemoteSdp.__proto__ || Object.getPrototypeOf(RecvRemoteSdp)).call(this, rtpParametersByKind));
	}

	/**
  * @param {Array<Object>} consumerInfos - Consumer informations.
  * @return {String}
  */


	_createClass(RecvRemoteSdp, [{
		key: 'createOfferSdp',
		value: function createOfferSdp(consumerInfos) {
			logger.debug('createOfferSdp()');

			if (!this._transportRemoteParameters) throw new Error('no transport remote parameters');

			var remoteIceParameters = this._transportRemoteParameters.iceParameters;
			var remoteIceCandidates = this._transportRemoteParameters.iceCandidates;
			var remoteDtlsParameters = this._transportRemoteParameters.dtlsParameters;
			var sdpObj = {};
			var mids = consumerInfos.map(function (info) {
				return info.mid;
			});

			// Increase our SDP version.
			this._sdpGlobalFields.version++;

			sdpObj.version = 0;
			sdpObj.origin = {
				address: '0.0.0.0',
				ipVer: 4,
				netType: 'IN',
				sessionId: this._sdpGlobalFields.id,
				sessionVersion: this._sdpGlobalFields.version,
				username: 'mediasoup-client'
			};
			sdpObj.name = '-';
			sdpObj.timing = { start: 0, stop: 0 };
			sdpObj.icelite = remoteIceParameters.iceLite ? 'ice-lite' : null;
			sdpObj.msidSemantic = {
				semantic: 'WMS',
				token: '*'
			};

			if (mids.length > 0) {
				sdpObj.groups = [{
					type: 'BUNDLE',
					mids: mids.join(' ')
				}];
			}

			sdpObj.media = [];

			// NOTE: We take the latest fingerprint.
			var numFingerprints = remoteDtlsParameters.fingerprints.length;

			sdpObj.fingerprint = {
				type: remoteDtlsParameters.fingerprints[numFingerprints - 1].algorithm,
				hash: remoteDtlsParameters.fingerprints[numFingerprints - 1].value
			};

			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = consumerInfos[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var info = _step8.value;

					var closed = info.closed;
					var kind = info.kind;
					var codecs = void 0;
					var headerExtensions = void 0;

					if (info.kind !== 'application') {
						codecs = this._rtpParametersByKind[kind].codecs;
						headerExtensions = this._rtpParametersByKind[kind].headerExtensions;
					}

					var remoteMediaObj = {};

					if (info.kind !== 'application') {
						remoteMediaObj.type = kind;
						remoteMediaObj.port = 7;
						remoteMediaObj.protocol = 'RTP/SAVPF';
						remoteMediaObj.connection = { ip: '127.0.0.1', version: 4 };
						remoteMediaObj.mid = info.mid;
						remoteMediaObj.msid = info.streamId + ' ' + info.trackId;
					} else {
						remoteMediaObj.type = kind;
						remoteMediaObj.port = 9;
						remoteMediaObj.protocol = 'DTLS/SCTP';
						remoteMediaObj.connection = { ip: '127.0.0.1', version: 4 };
						remoteMediaObj.mid = info.mid;
					}

					remoteMediaObj.iceUfrag = remoteIceParameters.usernameFragment;
					remoteMediaObj.icePwd = remoteIceParameters.password;
					remoteMediaObj.candidates = [];

					var _iteratorNormalCompletion9 = true;
					var _didIteratorError9 = false;
					var _iteratorError9 = undefined;

					try {
						for (var _iterator9 = remoteIceCandidates[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
							var candidate = _step9.value;

							var candidateObj = {};

							// mediasoup does not support non rtcp-mux so candidates component is
							// always RTP (1).
							candidateObj.component = 1;
							candidateObj.foundation = candidate.foundation;
							candidateObj.ip = candidate.ip;
							candidateObj.port = candidate.port;
							candidateObj.priority = candidate.priority;
							candidateObj.transport = candidate.protocol;
							candidateObj.type = candidate.type;
							if (candidate.tcpType) candidateObj.tcptype = candidate.tcpType;

							remoteMediaObj.candidates.push(candidateObj);
						}
					} catch (err) {
						_didIteratorError9 = true;
						_iteratorError9 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion9 && _iterator9.return) {
								_iterator9.return();
							}
						} finally {
							if (_didIteratorError9) {
								throw _iteratorError9;
							}
						}
					}

					remoteMediaObj.endOfCandidates = 'end-of-candidates';

					// Announce support for ICE renomination.
					// https://tools.ietf.org/html/draft-thatcher-ice-renomination
					remoteMediaObj.iceOptions = 'renomination';

					remoteMediaObj.setup = 'actpass';

					if (info.kind !== 'application') {
						if (!closed) remoteMediaObj.direction = 'sendonly';else remoteMediaObj.direction = 'inactive';

						remoteMediaObj.rtp = [];
						remoteMediaObj.rtcpFb = [];
						remoteMediaObj.fmtp = [];

						var _iteratorNormalCompletion10 = true;
						var _didIteratorError10 = false;
						var _iteratorError10 = undefined;

						try {
							for (var _iterator10 = codecs[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
								var codec = _step10.value;

								var rtp = {
									payload: codec.payloadType,
									codec: codec.name,
									rate: codec.clockRate
								};

								if (codec.channels > 1) rtp.encoding = codec.channels;

								remoteMediaObj.rtp.push(rtp);

								if (codec.parameters) {
									var paramFmtp = {
										payload: codec.payloadType,
										config: ''
									};

									var _iteratorNormalCompletion12 = true;
									var _didIteratorError12 = false;
									var _iteratorError12 = undefined;

									try {
										for (var _iterator12 = Object.keys(codec.parameters)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
											var key = _step12.value;

											if (paramFmtp.config) paramFmtp.config += ';';

											paramFmtp.config += key + '=' + codec.parameters[key];
										}
									} catch (err) {
										_didIteratorError12 = true;
										_iteratorError12 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion12 && _iterator12.return) {
												_iterator12.return();
											}
										} finally {
											if (_didIteratorError12) {
												throw _iteratorError12;
											}
										}
									}

									if (paramFmtp.config) remoteMediaObj.fmtp.push(paramFmtp);
								}

								if (codec.rtcpFeedback) {
									var _iteratorNormalCompletion13 = true;
									var _didIteratorError13 = false;
									var _iteratorError13 = undefined;

									try {
										for (var _iterator13 = codec.rtcpFeedback[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
											var fb = _step13.value;

											remoteMediaObj.rtcpFb.push({
												payload: codec.payloadType,
												type: fb.type,
												subtype: fb.parameter || ''
											});
										}
									} catch (err) {
										_didIteratorError13 = true;
										_iteratorError13 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion13 && _iterator13.return) {
												_iterator13.return();
											}
										} finally {
											if (_didIteratorError13) {
												throw _iteratorError13;
											}
										}
									}
								}
							}
						} catch (err) {
							_didIteratorError10 = true;
							_iteratorError10 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion10 && _iterator10.return) {
									_iterator10.return();
								}
							} finally {
								if (_didIteratorError10) {
									throw _iteratorError10;
								}
							}
						}

						remoteMediaObj.payloads = codecs.map(function (codec) {
							return codec.payloadType;
						}).join(' ');

						// NOTE: Firefox does not like a=extmap lines if a=inactive.
						if (!closed) {
							remoteMediaObj.ext = [];

							var _iteratorNormalCompletion11 = true;
							var _didIteratorError11 = false;
							var _iteratorError11 = undefined;

							try {
								for (var _iterator11 = headerExtensions[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
									var ext = _step11.value;

									remoteMediaObj.ext.push({
										uri: ext.uri,
										value: ext.id
									});
								}
							} catch (err) {
								_didIteratorError11 = true;
								_iteratorError11 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion11 && _iterator11.return) {
										_iterator11.return();
									}
								} finally {
									if (_didIteratorError11) {
										throw _iteratorError11;
									}
								}
							}
						}

						remoteMediaObj.rtcpMux = 'rtcp-mux';
						remoteMediaObj.rtcpRsize = 'rtcp-rsize';

						if (!closed) {
							remoteMediaObj.ssrcs = [];
							remoteMediaObj.ssrcGroups = [];

							remoteMediaObj.ssrcs.push({
								id: info.ssrc,
								attribute: 'cname',
								value: info.cname
							});

							if (info.rtxSsrc) {
								remoteMediaObj.ssrcs.push({
									id: info.rtxSsrc,
									attribute: 'cname',
									value: info.cname
								});

								// Associate original and retransmission SSRC.
								remoteMediaObj.ssrcGroups.push({
									semantics: 'FID',
									ssrcs: info.ssrc + ' ' + info.rtxSsrc
								});
							}
						}
					} else {
						remoteMediaObj.payloads = 5000;
						remoteMediaObj.sctpmap = {
							app: 'webrtc-datachannel',
							maxMessageSize: 256,
							sctpmapNumber: 5000
						};
					}

					// Push it.
					sdpObj.media.push(remoteMediaObj);
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8.return) {
						_iterator8.return();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}

			var sdp = _sdpTransform2.default.write(sdpObj);

			return sdp;
		}
	}]);

	return RecvRemoteSdp;
}(RemoteSdp);

var RemoteUnifiedPlanSdp = function RemoteUnifiedPlanSdp(direction, rtpParametersByKind) {
	_classCallCheck(this, RemoteUnifiedPlanSdp);

	logger.debug('constructor() [direction:%s, rtpParametersByKind:%o]', direction, rtpParametersByKind);

	switch (direction) {
		case 'send':
			return new SendRemoteSdp(rtpParametersByKind);
		case 'recv':
			return new RecvRemoteSdp(rtpParametersByKind);
	}
};

exports.default = RemoteUnifiedPlanSdp;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EasySocket extends WebSocket {
	constructor(url){
		super(url || `${location.protocol=='https:'?'wss':'ws'}://${location.host}`);
		
		this.messageHandler = {}
		this.addEventListener('message',(e)=>{
			const data = JSON.parse(e.data);
			if(!data.returnSync && !data.sync){
				return;
			}

			if(data.sync){
				const value = this.onsyncmessage(e);
				if(!value.then){
					this.returnSync(value,data.handlerId);
				} else {
					value.then((returnValue)=>{
						this.returnValue(returnValue,data.handlerId);
					});
				}
			} else {
				this.messageHandler[data.handlerId](data.value);
				delete this.messageHandler[data.handlerId];
			}
			e.stopImmediatePropagation();
		});
	}

	onsyncmessage(){}

	send(data){
		super.send(JSON.stringify({
			sync: false,
			body: data
		}));
	}

	sendSync(data){
		return new Promise((resolve)=>{
			const handlerId = this._handlerId();
			super.send(JSON.stringify({
				handlerId: handlerId,
				sync: true,
				body: data
			}));

			this.messageHandler[handlerId] = (data)=>{
				resolve(data)
			};
		});
	}

	returnSync(value,handlerId){
		super.send(JSON.stringify({
			returnSync: true,
			value: value,
			handlerId: handlerId
		}));
	}

	_handlerId(){
		var id = new Date().getTime().toString(16)  + Math.floor(1000*Math.random()).toString(16);
		if(this.messageHandler[id]){
			id = id+'0'
		}
		return id;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EasySocket;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mediasoupClient = __webpack_require__(17);

class Room extends mediasoupClient.Room {
	constructor(socket,id){
		super({
			requestTimeout: 8000
		});

		this.socket = socket;
		this.sendTransport = null;
		this.recvTransport = null;
		this.videoProducers = {}
		this.id = id;
		this.streams = {};
		this.streamInfoMap = {};
		super.on('request',this._onsendrequest);
		super.on('notify',this._onsendnotify);
		super.on('newpeer',this._onnewpeer);

		socket.addEventListener('message',(e)=>{
			const data = JSON.parse(e.data);
			switch(data.action){
				case 'mediasoup_notify':
				this._onreceivenotify(data.value.notification);
				break;
			}
		});

		window.addEventListener('beforeunload',(e)=>{
			super.leave();
		});
	}

	joinRoom(){
		return new Promise((resolve)=>{
			super.join(this.socket.userId,{device: mediasoupClient.getDeviceInfo(), userId: this.socket.userId, userName: this.socket.userName, rank: this.socket.rank})
			.then((peers)=>{
				this.sendTransport = super.createTransport('send',{media: 'SEND'});
				this.recvTransport = super.createTransport('recv',{media: 'RECV'});
				for(const peer of peers){
					this._onnewpeer(peer);
				}
				console.log(`%cjoin: %c${this.id}`,'color:green','color: magenta');
				resolve();
			});
		});
	}

	createRoom(){
		return new Promise((resolve)=>{
			super.join(this.socket.clientId,{device: mediasoupClient.getDeviceInfo()})
			.then((peers)=>{
				this.sendTransport = super.createTransport('send',{media: 'SEND'});
				this.recvTransport = super.createTransport('recv',{media: 'RECV'});
				for(const peer of peers){
					this._onnewpeer(peer);
				}
				console.log(`%cjoin: %c${this.id}`,'color:green','color: magenta');
				resolve();
			});
		});
	}

	addStream(stream, appData){
		console.log(`at: %c${this.id}\n	%cnew stream source: %c${appData.source}\n	%cnew stream number: %c${appData.windowNumber}`,'color: magenta', 'color: blue', 'color: magenta', 'color: blue', 'color: magenta');
		this.streams[`${appData.userId}.${appData.source}.${appData.windowNumber}.${appData.roomId}`] = stream;
		const videoTrack = stream.getVideoTracks()[0];
		const videoProducer = super.createProducer(videoTrack, {simulcast: false}, appData);

		videoProducer.send(this.sendTransport);

		this.videoProducers[appData.windowNumber] = videoProducer;
	}

	deleteStream(windowNumber){
	}

	searchStream({query,logic='and'}){
		const indexes = [];
		const keys = ['userId','source','number','roomId'];
		for(const key in query){
			indexes.push(keys.indexOf(key));
		}
		indexes.filter((index)=>{
			return index != -1;
		});

		var checkFunc = null;
		if(logic == 'or'){
			checkFunc = (bools)=>{
				return bools.some((bool)=>{
					return bool;
				});
			}
		} else {
			checkFunc = (bools)=>{
				return bools.every((bool)=>{
					return bool;
				});
			}
		}
		const streamIds = Object.keys(this.streams).filter((streamId)=>{
			const values = streamId.split('.');
			const bools = indexes.map((index)=>{
				return values[index] == query[keys[index]];
			});
			return checkFunc(bools);
		});

		return streamIds;
	}

	getStream(streamId){
		return this.streams[streamId];
	}

	onnewpeer(peer){}
	onclosepeer(peer){}
	onnewstream(stream,appData){}

	_onnewpeer(peer){
		peer.on('newconsumer',(consumer)=>{
			this._onnewconsumer(consumer);
		});
		peer.on('close',()=>{
			this.onclosepeer(peer);
		});
		peer.consumers.forEach((consumer)=>{
			this._onnewconsumer(consumer);
		});
		this.onnewpeer(peer);
	}

	_onnewconsumer(consumer){
		consumer.receive(this.recvTransport)
		.then((track)=>{
			const appData = consumer.appData;
			console.log(`at: %c${this.id}\n	%cnew stream source: %c${appData.source}\n	%cnew stream number: %c${appData.windowNumber}`,'color: magenta', 'color: blue', 'color: magenta', 'color: blue', 'color: magenta');
			const stream = new MediaStream();
			stream.addTrack(track);
			this.streams[`${appData.userId}.${appData.source}.${appData.windowNumber}.${appData.roomId}`] = stream;
			this.onnewstream(stream,appData);
		});
	}

	_onsendnotify(notification){
		console.log(`at: %c${this.id}\n	%cnotify: %c${notification.method}`,'color:magenta','color: orange','color: magenta');
		this.socket.send({
			action: 'mediasoup_notify',
			option: {
				notification: notification,
				roomId: this.id,
				userId: this.socket.userId
			}
		});
	}

	_onsendrequest(request,callback,errback){
		console.log(`at: %c${this.id || 'No ID'}\n	%crequest: %c${request.method}`,'color:magenta','color: blue','color: magenta');
		this.socket.sendSync({
			action: 'mediasoup_request',
			option: {
				roomId: this.id,
				userId: this.socket.userId,
				request: request
			}
		}).then(({response})=>{
			callback(response);
		}).catch(errback);
	}

	_onreceivenotify(notification){
		super.receiveNotification(notification);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Room;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Room = undefined;
exports.isDeviceSupported = isDeviceSupported;
exports.getDeviceInfo = getDeviceInfo;
exports.checkCapabilitiesForRoom = checkCapabilitiesForRoom;

var _ortc = __webpack_require__(3);

var ortc = _interopRequireWildcard(_ortc);

var _Device = __webpack_require__(7);

var _Device2 = _interopRequireDefault(_Device);

var _Room = __webpack_require__(34);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Whether the current browser or device is supported.
 *
 * @return {Boolean}
 *
 * @example
 * isDeviceSupported()
 * // => true
 */
function isDeviceSupported() {
  return _Device2.default.isSupported();
}

/**
 * Get information regarding the current browser or device.
 *
 * @return {Object} - Object with `name` (String) and version {String}.
 *
 * @example
 * getDeviceInfo()
 * // => { flag: 'chrome', name: 'Chrome', version: '59.0', bowser: {} }
 */
function getDeviceInfo() {
  return {
    flag: _Device2.default.getFlag(),
    name: _Device2.default.getName(),
    version: _Device2.default.getVersion(),
    bowser: _Device2.default.getBowser()
  };
}

/**
 * Check whether this device/browser can send/receive audio/video in a room
 * whose RTP capabilities are given.
 *
 * @param {Object} Room RTP capabilities.
 *
 * @return {Promise} Resolves to an Object with 'audio' and 'video' Booleans.
 */
function checkCapabilitiesForRoom(roomRtpCapabilities) {
  if (!_Device2.default.isSupported()) return Promise.reject(new Error('current browser/device not supported'));

  return _Device2.default.Handler.getNativeRtpCapabilities().then(function (nativeRtpCapabilities) {
    var extendedRtpCapabilities = ortc.getExtendedRtpCapabilities(nativeRtpCapabilities, roomRtpCapabilities);

    return {
      audio: ortc.canSend('audio', extendedRtpCapabilities),
      video: ortc.canSend('video', extendedRtpCapabilities)
    };
  });
}

/**
 * Expose the Room class.
 *
 * @example
 * const room = new Room();`
 */
exports.Room = _Room2.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) __webpack_require__(19)(name, definition)
  else root[name] = definition()
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)os/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t
      result.osname = 'Android'
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t
      result.ios = t
      result.osname = 'iOS'
    } else if (mac) {
      result.mac = t
      result.osname = 'macOS'
    } else if (xbox) {
      result.xbox = t
      result.osname = 'Xbox'
    } else if (windows) {
      result.windows = t
      result.osname = 'Windows'
    } else if (linux) {
      result.linux = t
      result.osname = 'Linux'
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(22);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
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
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(23);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdpTransform = __webpack_require__(4);

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _ortc = __webpack_require__(3);

var ortc = _interopRequireWildcard(_ortc);

var _commonUtils = __webpack_require__(5);

var sdpCommonUtils = _interopRequireWildcard(_commonUtils);

var _planBUtils = __webpack_require__(8);

var sdpPlanBUtils = _interopRequireWildcard(_planBUtils);

var _RemotePlanBSdp = __webpack_require__(9);

var _RemotePlanBSdp2 = _interopRequireDefault(_RemotePlanBSdp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default('Chrome55');

var Handler = function (_EnhancedEventEmitter) {
	_inherits(Handler, _EnhancedEventEmitter);

	function Handler(direction, rtpParametersByKind, settings) {
		_classCallCheck(this, Handler);

		// RTCPeerConnection instance.
		// @type {RTCPeerConnection}
		var _this = _possibleConstructorReturn(this, (Handler.__proto__ || Object.getPrototypeOf(Handler)).call(this, logger));

		_this._pc = new RTCPeerConnection({
			iceServers: settings.turnServers || [],
			iceTransportPolicy: 'all',
			bundlePolicy: 'max-bundle',
			rtcpMuxPolicy: 'require'
		});

		// Generic sending RTP parameters for audio and video.
		// @type {Object}
		_this._rtpParametersByKind = rtpParametersByKind;

		// Remote SDP handler.
		// @type {RemotePlanBSdp}
		_this._remoteSdp = new _RemotePlanBSdp2.default(direction, rtpParametersByKind);

		// Handle RTCPeerConnection connection status.
		_this._pc.addEventListener('iceconnectionstatechange', function () {
			switch (_this._pc.iceConnectionState) {
				case 'checking':
					_this.emit('@connectionstatechange', 'connecting');
					break;
				case 'connected':
				case 'completed':
					_this.emit('@connectionstatechange', 'connected');
					break;
				case 'failed':
					_this.emit('@connectionstatechange', 'failed');
					break;
				case 'disconnected':
					_this.emit('@connectionstatechange', 'disconnected');
					break;
				case 'closed':
					_this.emit('@connectionstatechange', 'closed');
					break;
			}
		});
		return _this;
	}

	_createClass(Handler, [{
		key: 'close',
		value: function close() {
			logger.debug('close()');

			// Close RTCPeerConnection.
			try {
				this._pc.close();
			} catch (error) {}
		}
	}]);

	return Handler;
}(_EnhancedEventEmitter3.default);

var SendHandler = function (_Handler) {
	_inherits(SendHandler, _Handler);

	function SendHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, SendHandler);

		// Got transport local and remote parameters.
		// @type {Boolean}
		var _this2 = _possibleConstructorReturn(this, (SendHandler.__proto__ || Object.getPrototypeOf(SendHandler)).call(this, 'send', rtpParametersByKind, settings));

		_this2._transportReady = false;

		// Local stream.
		// @type {MediaStream}
		_this2._stream = new MediaStream();
		return _this2;
	}

	_createClass(SendHandler, [{
		key: 'addProducer',
		value: function addProducer(producer) {
			var _this3 = this;

			var track = producer.track;


			logger.debug('addProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			if (this._stream.getTrackById(track.id)) return Promise.reject(new Error('track already added'));

			var localSdpObj = void 0;

			return Promise.resolve().then(function () {
				// Add the track to the local stream.
				_this3._stream.addTrack(track);

				// Add the stream to the PeerConnection.
				_this3._pc.addStream(_this3._stream);

				return _this3._pc.createOffer();
			}).then(function (offer) {
				// If simulcast is set, mangle the offer.
				if (producer.simulcast) {
					logger.debug('addProducer() | enabling simulcast');

					var sdpObject = _sdpTransform2.default.parse(offer.sdp);

					sdpPlanBUtils.addSimulcastForTrack(sdpObject, track);

					var offerSdp = _sdpTransform2.default.write(sdpObject);

					offer = { type: 'offer', sdp: offerSdp };
				}

				logger.debug('addProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this3._pc.setLocalDescription(offer);
			}).then(function () {
				if (!_this3._transportReady) return _this3._setupTransport();
			}).then(function () {
				localSdpObj = _sdpTransform2.default.parse(_this3._pc.localDescription.sdp);

				var remoteSdp = _this3._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('addProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this3._pc.setRemoteDescription(answer);
			}).then(function () {
				var rtpParameters = utils.clone(_this3._rtpParametersByKind[producer.kind]);

				// Fill the RTP parameters for this track.
				sdpPlanBUtils.fillRtpParametersForTrack(rtpParameters, localSdpObj, track);

				return rtpParameters;
			}).catch(function (error) {
				// Panic here. Try to undo things.

				_this3._stream.removeTrack(track);
				_this3._pc.addStream(_this3._stream);

				throw error;
			});
		}
	}, {
		key: 'removeProducer',
		value: function removeProducer(producer) {
			var _this4 = this;

			var track = producer.track;


			logger.debug('removeProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			return Promise.resolve().then(function () {
				// Remove the track from the local stream.
				_this4._stream.removeTrack(track);

				// Add the stream to the PeerConnection.
				_this4._pc.addStream(_this4._stream);

				return _this4._pc.createOffer();
			}).then(function (offer) {
				logger.debug('removeProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this4._pc.setLocalDescription(offer);
			}).catch(function (error) {
				// NOTE: If there are no sending tracks, setLocalDescription() will fail with
				// "Failed to create channels". If so, ignore it.
				if (_this4._stream.getTracks().length === 0) {
					logger.warn('removeProducer() | ignoring expected error due no sending tracks: %s', error.toString());

					return;
				}

				throw error;
			}).then(function () {
				if (_this4._pc.signalingState === 'stable') return;

				var localSdpObj = _sdpTransform2.default.parse(_this4._pc.localDescription.sdp);
				var remoteSdp = _this4._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('removeProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this4._pc.setRemoteDescription(answer);
			});
		}
	}, {
		key: 'replaceProducerTrack',
		value: function replaceProducerTrack(producer, track) {
			var _this5 = this;

			logger.debug('replaceProducerTrack() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			var oldTrack = producer.track;
			var localSdpObj = void 0;

			return Promise.resolve().then(function () {
				// Remove the old track from the local stream.
				_this5._stream.removeTrack(oldTrack);

				// Add the new track to the local stream.
				_this5._stream.addTrack(track);

				// Add the stream to the PeerConnection.
				_this5._pc.addStream(_this5._stream);

				return _this5._pc.createOffer();
			}).then(function (offer) {
				// If simulcast is set, mangle the offer.
				if (producer.simulcast) {
					logger.debug('addProducer() | enabling simulcast');

					var sdpObject = _sdpTransform2.default.parse(offer.sdp);

					sdpPlanBUtils.addSimulcastForTrack(sdpObject, track);

					var offerSdp = _sdpTransform2.default.write(sdpObject);

					offer = { type: 'offer', sdp: offerSdp };
				}

				logger.debug('replaceProducerTrack() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this5._pc.setLocalDescription(offer);
			}).then(function () {
				localSdpObj = _sdpTransform2.default.parse(_this5._pc.localDescription.sdp);

				var remoteSdp = _this5._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('replaceProducerTrack() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this5._pc.setRemoteDescription(answer);
			}).then(function () {
				var rtpParameters = utils.clone(_this5._rtpParametersByKind[producer.kind]);

				// Fill the RTP parameters for the new track.
				sdpPlanBUtils.fillRtpParametersForTrack(rtpParameters, localSdpObj, track);

				// We need to provide new RTP parameters.
				_this5.safeEmit('@needupdateproducer', producer, rtpParameters);
			}).catch(function (error) {
				// Panic here. Try to undo things.

				_this5._stream.removeTrack(track);
				_this5._stream.addTrack(oldTrack);
				_this5._pc.addStream(_this5._stream);

				throw error;
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this6 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				return _this6._pc.createOffer({ iceRestart: true });
			}).then(function (offer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this6._pc.setLocalDescription(offer);
			}).then(function () {
				var localSdpObj = _sdpTransform2.default.parse(_this6._pc.localDescription.sdp);
				var remoteSdp = _this6._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this6._pc.setRemoteDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this7 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// Get our local DTLS parameters.
				var transportLocalParameters = {};
				var sdp = _this7._pc.localDescription.sdp;
				var sdpObj = _sdpTransform2.default.parse(sdp);
				var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);

				// Let's decide that we'll be DTLS server (because we can).
				dtlsParameters.role = 'server';

				transportLocalParameters.dtlsParameters = dtlsParameters;

				// Provide the remote SDP handler with transport local parameters.
				_this7._remoteSdp.setTransportLocalParameters(transportLocalParameters);

				// We need transport remote parameters.
				return _this7.safeEmitAsPromise('@needcreatetransport', transportLocalParameters);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this7._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this7._transportReady = true;
			});
		}
	}]);

	return SendHandler;
}(Handler);

var RecvHandler = function (_Handler2) {
	_inherits(RecvHandler, _Handler2);

	function RecvHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, RecvHandler);

		// Got transport remote parameters.
		// @type {Boolean}
		var _this8 = _possibleConstructorReturn(this, (RecvHandler.__proto__ || Object.getPrototypeOf(RecvHandler)).call(this, 'recv', rtpParametersByKind, settings));

		_this8._transportCreated = false;

		// Got transport local parameters.
		// @type {Boolean}
		_this8._transportUpdated = false;

		// Seen media kinds.
		// @type {Set<String>}
		_this8._kinds = new Set();

		// Map of Consumers information indexed by consumer.id.
		// - kind {String}
		// - trackId {String}
		// - ssrc {Number}
		// - rtxSsrc {Number}
		// - cname {String}
		// @type {Map<Number, Object>}
		_this8._consumerInfos = new Map();
		return _this8;
	}

	_createClass(RecvHandler, [{
		key: 'addConsumer',
		value: function addConsumer(consumer) {
			var _this9 = this;

			logger.debug('addConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (this._consumerInfos.has(consumer.id)) return Promise.reject(new Error('Consumer already added'));

			var encoding = consumer.rtpParameters.encodings[0];
			var cname = consumer.rtpParameters.rtcp.cname;
			var consumerInfo = {
				kind: consumer.kind,
				streamId: 'recv-stream-' + consumer.id,
				trackId: 'consumer-' + consumer.kind + '-' + consumer.id,
				ssrc: encoding.ssrc,
				cname: cname
			};

			if (encoding.rtx && encoding.rtx.ssrc) consumerInfo.rtxSsrc = encoding.rtx.ssrc;

			this._consumerInfos.set(consumer.id, consumerInfo);
			this._kinds.add(consumer.kind);

			return Promise.resolve().then(function () {
				if (!_this9._transportCreated) return _this9._setupTransport();
			}).then(function () {
				var remoteSdp = _this9._remoteSdp.createOfferSdp(Array.from(_this9._kinds), Array.from(_this9._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('addConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this9._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this9._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('addConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this9._pc.setLocalDescription(answer);
			}).then(function () {
				if (!_this9._transportUpdated) return _this9._updateTransport();
			}).then(function () {
				var stream = _this9._pc.getRemoteStreams().find(function (s) {
					return s.id === consumerInfo.streamId;
				});
				var track = stream.getTrackById(consumerInfo.trackId);

				if (!track) throw new Error('remote track not found');

				return track;
			});
		}
	}, {
		key: 'removeConsumer',
		value: function removeConsumer(consumer) {
			var _this10 = this;

			logger.debug('removeConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (!this._consumerInfos.has(consumer.id)) return Promise.reject(new Error('Consumer not found'));

			this._consumerInfos.delete(consumer.id);

			return Promise.resolve().then(function () {
				var remoteSdp = _this10._remoteSdp.createOfferSdp(Array.from(_this10._kinds), Array.from(_this10._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('removeConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this10._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this10._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('removeConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this10._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this11 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				var remoteSdp = _this11._remoteSdp.createOfferSdp(Array.from(_this11._kinds), Array.from(_this11._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this11._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this11._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this11._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this12 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// We need transport remote parameters.
				return _this12.safeEmitAsPromise('@needcreatetransport', null);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this12._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this12._transportCreated = true;
			});
		}
	}, {
		key: '_updateTransport',
		value: function _updateTransport() {
			logger.debug('_updateTransport()');

			// Get our local DTLS parameters.
			// const transportLocalParameters = {};
			var sdp = this._pc.localDescription.sdp;
			var sdpObj = _sdpTransform2.default.parse(sdp);
			var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);
			var transportLocalParameters = { dtlsParameters: dtlsParameters };

			// We need to provide transport local parameters.
			this.safeEmit('@needupdatetransport', transportLocalParameters);

			this._transportUpdated = true;
		}
	}]);

	return RecvHandler;
}(Handler);

var Chrome55 = function () {
	_createClass(Chrome55, null, [{
		key: 'getNativeRtpCapabilities',
		value: function getNativeRtpCapabilities() {
			logger.debug('getNativeRtpCapabilities()');

			var pc = new RTCPeerConnection({
				iceServers: [],
				iceTransportPolicy: 'all',
				bundlePolicy: 'max-bundle',
				rtcpMuxPolicy: 'require'
			});

			return pc.createOffer({
				offerToReceiveAudio: true,
				offerToReceiveVideo: true
			}).then(function (offer) {
				try {
					pc.close();
				} catch (error) {}

				var sdpObj = _sdpTransform2.default.parse(offer.sdp);
				var nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities(sdpObj);

				return nativeRtpCapabilities;
			}).catch(function (error) {
				try {
					pc.close();
				} catch (error2) {}

				throw error;
			});
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'Chrome55';
		}
	}]);

	function Chrome55(direction, extendedRtpCapabilities, settings) {
		_classCallCheck(this, Chrome55);

		logger.debug('constructor() [direction:%s, extendedRtpCapabilities:%o]', direction, extendedRtpCapabilities);

		var rtpParametersByKind = void 0;

		switch (direction) {
			case 'send':
				{
					rtpParametersByKind = {
						audio: ortc.getSendingRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getSendingRtpParameters('video', extendedRtpCapabilities)
					};

					return new SendHandler(rtpParametersByKind, settings);
				}
			case 'recv':
				{
					rtpParametersByKind = {
						audio: ortc.getReceivingFullRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getReceivingFullRtpParameters('video', extendedRtpCapabilities)
					};

					return new RecvHandler(rtpParametersByKind, settings);
				}
		}
	}

	return Chrome55;
}();

exports.default = Chrome55;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(11);
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  }
  return acc;
};

exports.parseParams = function (str) {
  return str.split(/\;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length-1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid, paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(11);

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
    case '%%':
      return '%';
    case '%s':
      return String(arg);
    case '%d':
      return Number(arg);
    case '%v':
      return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

void function(root){

  function defaults(options){
    var options = options || {}
    var min = options.min
    var max = options.max
    var integer = options.integer || false
    if ( min == null && max == null ) {
      min = 0
      max = 1
    } else if ( min == null ) {
      min = max - 1
    } else if ( max == null ) {
      max = min + 1
    }
    if ( max < min ) throw new Error('invalid options, max must be >= min')
    return {
      min:     min
    , max:     max
    , integer: integer
    }
  }

  function random(options){
    options = defaults(options)
    if ( options.max === options.min ) return options.min
    var r = Math.random() * (options.max - options.min + Number(!!options.integer)) + options.min
    return options.integer ? Math.floor(r) : r
  }

  function generator(options){
    options = defaults(options)
    return function(min, max, integer){
      options.min     = min != null ? min : options.min
      options.max     = max != null ? max : options.max
      options.integer = integer != null ? integer : options.integer
      return random(options)
    }
  }

  module.exports =  random
  module.exports.generator = generator
  module.exports.defaults = defaults
}(this)


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdpTransform = __webpack_require__(4);

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _ortc = __webpack_require__(3);

var ortc = _interopRequireWildcard(_ortc);

var _commonUtils = __webpack_require__(5);

var sdpCommonUtils = _interopRequireWildcard(_commonUtils);

var _planBUtils = __webpack_require__(8);

var sdpPlanBUtils = _interopRequireWildcard(_planBUtils);

var _RemotePlanBSdp = __webpack_require__(9);

var _RemotePlanBSdp2 = _interopRequireDefault(_RemotePlanBSdp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default('Safari11');

var Handler = function (_EnhancedEventEmitter) {
	_inherits(Handler, _EnhancedEventEmitter);

	function Handler(direction, rtpParametersByKind, settings) {
		_classCallCheck(this, Handler);

		// RTCPeerConnection instance.
		// @type {RTCPeerConnection}
		var _this = _possibleConstructorReturn(this, (Handler.__proto__ || Object.getPrototypeOf(Handler)).call(this, logger));

		_this._pc = new RTCPeerConnection({
			iceServers: settings.turnServers || [],
			iceTransportPolicy: 'all',
			bundlePolicy: 'max-bundle',
			rtcpMuxPolicy: 'require'
		});

		// Generic sending RTP parameters for audio and video.
		// @type {Object}
		_this._rtpParametersByKind = rtpParametersByKind;

		// Remote SDP handler.
		// @type {RemotePlanBSdp}
		_this._remoteSdp = new _RemotePlanBSdp2.default(direction, rtpParametersByKind);

		// Handle RTCPeerConnection connection status.
		_this._pc.addEventListener('iceconnectionstatechange', function () {
			switch (_this._pc.iceConnectionState) {
				case 'checking':
					_this.emit('@connectionstatechange', 'connecting');
					break;
				case 'connected':
				case 'completed':
					_this.emit('@connectionstatechange', 'connected');
					break;
				case 'failed':
					_this.emit('@connectionstatechange', 'failed');
					break;
				case 'disconnected':
					_this.emit('@connectionstatechange', 'disconnected');
					break;
				case 'closed':
					_this.emit('@connectionstatechange', 'closed');
					break;
			}
		});
		return _this;
	}

	_createClass(Handler, [{
		key: 'close',
		value: function close() {
			logger.debug('close()');

			// Close RTCPeerConnection.
			try {
				this._pc.close();
			} catch (error) {}
		}
	}]);

	return Handler;
}(_EnhancedEventEmitter3.default);

var SendHandler = function (_Handler) {
	_inherits(SendHandler, _Handler);

	function SendHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, SendHandler);

		// Got transport local and remote parameters.
		// @type {Boolean}
		var _this2 = _possibleConstructorReturn(this, (SendHandler.__proto__ || Object.getPrototypeOf(SendHandler)).call(this, 'send', rtpParametersByKind, settings));

		_this2._transportReady = false;

		// Local stream.
		// @type {MediaStream}
		_this2._stream = new MediaStream();
		return _this2;
	}

	_createClass(SendHandler, [{
		key: 'addProducer',
		value: function addProducer(producer) {
			var _this3 = this;

			var track = producer.track;


			logger.debug('addProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			if (this._stream.getTrackById(track.id)) return Promise.reject(new Error('track already added'));

			var rtpSender = void 0;
			var localSdpObj = void 0;

			return Promise.resolve().then(function () {
				_this3._stream.addTrack(track);

				// Add the stream to the PeerConnection.
				rtpSender = _this3._pc.addTrack(track, _this3._stream);

				return _this3._pc.createOffer();
			}).then(function (offer) {
				logger.debug('addProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this3._pc.setLocalDescription(offer);
			}).then(function () {
				if (!_this3._transportReady) return _this3._setupTransport();
			}).then(function () {
				localSdpObj = _sdpTransform2.default.parse(_this3._pc.localDescription.sdp);

				var remoteSdp = _this3._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('addProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this3._pc.setRemoteDescription(answer);
			}).then(function () {
				var rtpParameters = utils.clone(_this3._rtpParametersByKind[producer.kind]);

				// Fill the RTP parameters for this track.
				sdpPlanBUtils.fillRtpParametersForTrack(rtpParameters, localSdpObj, track);

				return rtpParameters;
			}).catch(function (error) {
				// Panic here. Try to undo things.

				try {
					_this3._pc.removeTrack(rtpSender);
				} catch (error2) {}

				_this3._stream.removeTrack(track);

				throw error;
			});
		}
	}, {
		key: 'removeProducer',
		value: function removeProducer(producer) {
			var _this4 = this;

			var track = producer.track;


			logger.debug('removeProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			return Promise.resolve().then(function () {
				// Get the associated RTCRtpSender.
				var rtpSender = _this4._pc.getSenders().find(function (s) {
					return s.track === track;
				});

				if (!rtpSender) throw new Error('RTCRtpSender found');

				// Remove the associated RtpSender.
				_this4._pc.removeTrack(rtpSender);

				// Remove the track from the local stream.
				_this4._stream.removeTrack(track);

				return _this4._pc.createOffer();
			}).then(function (offer) {
				logger.debug('removeProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this4._pc.setLocalDescription(offer);
			}).catch(function (error) {
				// NOTE: If there are no sending tracks, setLocalDescription() will fail with
				// "Failed to create channels". If so, ignore it.
				if (_this4._stream.getTracks().length === 0) {
					logger.warn('removeLocalTrack() | ignoring expected error due no sending tracks: %s', error.toString());

					return;
				}

				throw error;
			}).then(function () {
				if (_this4._pc.signalingState === 'stable') return;

				var localSdpObj = _sdpTransform2.default.parse(_this4._pc.localDescription.sdp);
				var remoteSdp = _this4._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('removeProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this4._pc.setRemoteDescription(answer);
			});
		}
	}, {
		key: 'replaceProducerTrack',
		value: function replaceProducerTrack(producer, track) {
			var _this5 = this;

			logger.debug('replaceProducerTrack() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			var oldTrack = producer.track;

			return Promise.resolve().then(function () {
				// Get the associated RTCRtpSender.
				var rtpSender = _this5._pc.getSenders().find(function (s) {
					return s.track === oldTrack;
				});

				if (!rtpSender) throw new Error('local track not found');

				return rtpSender.replaceTrack(track);
			}).then(function () {
				// Remove the old track from the local stream.
				_this5._stream.removeTrack(oldTrack);

				// Add the new track to the local stream.
				_this5._stream.addTrack(track);
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this6 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				return _this6._pc.createOffer({ iceRestart: true });
			}).then(function (offer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this6._pc.setLocalDescription(offer);
			}).then(function () {
				var localSdpObj = _sdpTransform2.default.parse(_this6._pc.localDescription.sdp);
				var remoteSdp = _this6._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this6._pc.setRemoteDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this7 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// Get our local DTLS parameters.
				var transportLocalParameters = {};
				var sdp = _this7._pc.localDescription.sdp;
				var sdpObj = _sdpTransform2.default.parse(sdp);
				var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);

				// Let's decide that we'll be DTLS server (because we can).
				dtlsParameters.role = 'server';

				transportLocalParameters.dtlsParameters = dtlsParameters;

				// Provide the remote SDP handler with transport local parameters.
				_this7._remoteSdp.setTransportLocalParameters(transportLocalParameters);

				// We need transport remote parameters.
				return _this7.safeEmitAsPromise('@needcreatetransport', transportLocalParameters);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this7._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this7._transportReady = true;
			});
		}
	}]);

	return SendHandler;
}(Handler);

var RecvHandler = function (_Handler2) {
	_inherits(RecvHandler, _Handler2);

	function RecvHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, RecvHandler);

		// Got transport remote parameters.
		// @type {Boolean}
		var _this8 = _possibleConstructorReturn(this, (RecvHandler.__proto__ || Object.getPrototypeOf(RecvHandler)).call(this, 'recv', rtpParametersByKind, settings));

		_this8._transportCreated = false;

		// Got transport local parameters.
		// @type {Boolean}
		_this8._transportUpdated = false;

		// Seen media kinds.
		// @type {Set<String>}
		_this8._kinds = new Set();

		// Map of Consumers information indexed by consumer.id.
		// - kind {String}
		// - trackId {String}
		// - ssrc {Number}
		// - rtxSsrc {Number}
		// - cname {String}
		// @type {Map<Number, Object>}
		_this8._consumerInfos = new Map();
		return _this8;
	}

	_createClass(RecvHandler, [{
		key: 'addConsumer',
		value: function addConsumer(consumer) {
			var _this9 = this;

			logger.debug('addConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (this._consumerInfos.has(consumer.id)) return Promise.reject(new Error('Consumer already added'));

			var encoding = consumer.rtpParameters.encodings[0];
			var cname = consumer.rtpParameters.rtcp.cname;
			var consumerInfo = {
				kind: consumer.kind,
				streamId: 'recv-stream-' + consumer.id,
				trackId: 'consumer-' + consumer.kind + '-' + consumer.id,
				ssrc: encoding.ssrc,
				cname: cname
			};

			if (encoding.rtx && encoding.rtx.ssrc) consumerInfo.rtxSsrc = encoding.rtx.ssrc;

			this._consumerInfos.set(consumer.id, consumerInfo);
			this._kinds.add(consumer.kind);

			return Promise.resolve().then(function () {
				if (!_this9._transportCreated) return _this9._setupTransport();
			}).then(function () {
				var remoteSdp = _this9._remoteSdp.createOfferSdp(Array.from(_this9._kinds), Array.from(_this9._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('addConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this9._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this9._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('addConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this9._pc.setLocalDescription(answer);
			}).then(function () {
				if (!_this9._transportUpdated) return _this9._updateTransport();
			}).then(function () {
				var newRtpReceiver = _this9._pc.getReceivers().find(function (rtpReceiver) {
					var track = rtpReceiver.track;


					if (!track) return false;

					return track.id === consumerInfo.trackId;
				});

				if (!newRtpReceiver) throw new Error('remote track not found');

				return newRtpReceiver.track;
			});
		}
	}, {
		key: 'removeConsumer',
		value: function removeConsumer(consumer) {
			var _this10 = this;

			logger.debug('removeConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (!this._consumerInfos.has(consumer.id)) return Promise.reject(new Error('Consumer not found'));

			this._consumerInfos.delete(consumer.id);

			return Promise.resolve().then(function () {
				var remoteSdp = _this10._remoteSdp.createOfferSdp(Array.from(_this10._kinds), Array.from(_this10._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('removeConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this10._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this10._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('removeConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this10._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this11 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				var remoteSdp = _this11._remoteSdp.createOfferSdp(Array.from(_this11._kinds), Array.from(_this11._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this11._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this11._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this11._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this12 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// We need transport remote parameters.
				return _this12.safeEmitAsPromise('@needcreatetransport', null);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this12._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this12._transportCreated = true;
			});
		}
	}, {
		key: '_updateTransport',
		value: function _updateTransport() {
			logger.debug('_updateTransport()');

			// Get our local DTLS parameters.
			// const transportLocalParameters = {};
			var sdp = this._pc.localDescription.sdp;
			var sdpObj = _sdpTransform2.default.parse(sdp);
			var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);
			var transportLocalParameters = { dtlsParameters: dtlsParameters };

			// We need to provide transport local parameters.
			this.safeEmit('@needupdatetransport', transportLocalParameters);

			this._transportUpdated = true;
		}
	}]);

	return RecvHandler;
}(Handler);

var Safari11 = function () {
	_createClass(Safari11, null, [{
		key: 'getNativeRtpCapabilities',
		value: function getNativeRtpCapabilities() {
			logger.debug('getNativeRtpCapabilities()');

			var pc = new RTCPeerConnection({
				iceServers: [],
				iceTransportPolicy: 'all',
				bundlePolicy: 'max-bundle',
				rtcpMuxPolicy: 'require'
			});

			pc.addTransceiver('audio');
			pc.addTransceiver('video');

			return pc.createOffer().then(function (offer) {
				try {
					pc.close();
				} catch (error) {}

				var sdpObj = _sdpTransform2.default.parse(offer.sdp);
				var nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities(sdpObj);

				return nativeRtpCapabilities;
			}).catch(function (error) {
				try {
					pc.close();
				} catch (error2) {}

				throw error;
			});
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'Safari11';
		}
	}]);

	function Safari11(direction, extendedRtpCapabilities, settings) {
		_classCallCheck(this, Safari11);

		logger.debug('constructor() [direction:%s, extendedRtpCapabilities:%o]', direction, extendedRtpCapabilities);

		var rtpParametersByKind = void 0;

		switch (direction) {
			case 'send':
				{
					rtpParametersByKind = {
						audio: ortc.getSendingRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getSendingRtpParameters('video', extendedRtpCapabilities)
					};

					return new SendHandler(rtpParametersByKind, settings);
				}
			case 'recv':
				{
					rtpParametersByKind = {
						audio: ortc.getReceivingFullRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getReceivingFullRtpParameters('video', extendedRtpCapabilities)
					};

					return new RecvHandler(rtpParametersByKind, settings);
				}
		}
	}

	return Safari11;
}();

exports.default = Safari11;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdpTransform = __webpack_require__(4);

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _ortc = __webpack_require__(3);

var ortc = _interopRequireWildcard(_ortc);

var _commonUtils = __webpack_require__(5);

var sdpCommonUtils = _interopRequireWildcard(_commonUtils);

var _unifiedPlanUtils = __webpack_require__(13);

var sdpUnifiedPlanUtils = _interopRequireWildcard(_unifiedPlanUtils);

var _RemoteUnifiedPlanSdp = __webpack_require__(14);

var _RemoteUnifiedPlanSdp2 = _interopRequireDefault(_RemoteUnifiedPlanSdp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default('Firefox50');

var Handler = function (_EnhancedEventEmitter) {
	_inherits(Handler, _EnhancedEventEmitter);

	function Handler(direction, rtpParametersByKind, settings) {
		_classCallCheck(this, Handler);

		// RTCPeerConnection instance.
		// @type {RTCPeerConnection}
		var _this = _possibleConstructorReturn(this, (Handler.__proto__ || Object.getPrototypeOf(Handler)).call(this, logger));

		_this._pc = new RTCPeerConnection({
			iceServers: settings.turnServers || [],
			iceTransportPolicy: 'all',
			bundlePolicy: 'max-bundle',
			rtcpMuxPolicy: 'require'
		});

		// Generic sending RTP parameters for audio and video.
		// @type {Object}
		_this._rtpParametersByKind = rtpParametersByKind;

		// Remote SDP handler.
		// @type {RemoteUnifiedPlanSdp}
		_this._remoteSdp = new _RemoteUnifiedPlanSdp2.default(direction, rtpParametersByKind);

		// Handle RTCPeerConnection connection status.
		_this._pc.addEventListener('iceconnectionstatechange', function () {
			switch (_this._pc.iceConnectionState) {
				case 'checking':
					_this.emit('@connectionstatechange', 'connecting');
					break;
				case 'connected':
				case 'completed':
					_this.emit('@connectionstatechange', 'connected');
					break;
				case 'failed':
					_this.emit('@connectionstatechange', 'failed');
					break;
				case 'disconnected':
					_this.emit('@connectionstatechange', 'disconnected');
					break;
				case 'closed':
					_this.emit('@connectionstatechange', 'closed');
					break;
			}
		});
		return _this;
	}

	_createClass(Handler, [{
		key: 'close',
		value: function close() {
			logger.debug('close()');

			// Close RTCPeerConnection.
			try {
				this._pc.close();
			} catch (error) {}
		}
	}]);

	return Handler;
}(_EnhancedEventEmitter3.default);

var SendHandler = function (_Handler) {
	_inherits(SendHandler, _Handler);

	function SendHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, SendHandler);

		// Got transport local and remote parameters.
		// @type {Boolean}
		var _this2 = _possibleConstructorReturn(this, (SendHandler.__proto__ || Object.getPrototypeOf(SendHandler)).call(this, 'send', rtpParametersByKind, settings));

		_this2._transportReady = false;

		// Local stream.
		// @type {MediaStream}
		_this2._stream = new MediaStream();

		// RID value counter for simulcast (so they never match).
		// @type {Number}
		_this2._nextRid = 1;
		return _this2;
	}

	_createClass(SendHandler, [{
		key: 'addProducer',
		value: function addProducer(producer) {
			var _this3 = this;

			var track = producer.track;


			logger.debug('addProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			if (this._stream.getTrackById(track.id)) return Promise.reject(new Error('track already added'));

			var rtpSender = void 0;
			var localSdpObj = void 0;

			return Promise.resolve().then(function () {
				_this3._stream.addTrack(track);

				// Add the stream to the PeerConnection.
				rtpSender = _this3._pc.addTrack(track, _this3._stream);
			}).then(function () {
				// If simulcast is not enabled, do nothing.
				if (!producer.simulcast) return;

				logger.debug('addProducer() | enabling simulcast');

				var encodings = [];

				if (producer.simulcast.high) {
					encodings.push({
						rid: 'high' + _this3._nextRid,
						active: true,
						priority: 'high',
						maxBitrate: producer.simulcast.high
					});
				}

				if (producer.simulcast.medium) {
					encodings.push({
						rid: 'medium' + _this3._nextRid,
						active: true,
						priority: 'medium',
						maxBitrate: producer.simulcast.medium
					});
				}

				if (producer.simulcast.low) {
					encodings.push({
						rid: 'low' + _this3._nextRid,
						active: true,
						priority: 'low',
						maxBitrate: producer.simulcast.low
					});
				}

				// Update RID counter for future ones.
				_this3._nextRid++;

				return rtpSender.setParameters({ encodings: encodings });
			}).then(function () {
				return _this3._pc.createOffer();
			}).then(function (offer) {
				logger.debug('addProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this3._pc.setLocalDescription(offer);
			}).then(function () {
				if (!_this3._transportReady) return _this3._setupTransport();
			}).then(function () {
				localSdpObj = _sdpTransform2.default.parse(_this3._pc.localDescription.sdp);

				var remoteSdp = _this3._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('addProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this3._pc.setRemoteDescription(answer);
			}).then(function () {
				var rtpParameters = utils.clone(_this3._rtpParametersByKind[producer.kind]);

				// Fill the RTP parameters for this track.
				sdpUnifiedPlanUtils.fillRtpParametersForTrack(rtpParameters, localSdpObj, track);

				return rtpParameters;
			}).catch(function (error) {
				// Panic here. Try to undo things.

				try {
					_this3._pc.removeTrack(rtpSender);
				} catch (error2) {}

				_this3._stream.removeTrack(track);

				throw error;
			});
		}
	}, {
		key: 'removeProducer',
		value: function removeProducer(producer) {
			var _this4 = this;

			var track = producer.track;


			logger.debug('removeProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			return Promise.resolve().then(function () {
				// Get the associated RTCRtpSender.
				var rtpSender = _this4._pc.getSenders().find(function (s) {
					return s.track === track;
				});

				if (!rtpSender) throw new Error('RTCRtpSender found');

				// Remove the associated RtpSender.
				_this4._pc.removeTrack(rtpSender);

				// Remove the track from the local stream.
				_this4._stream.removeTrack(track);

				return Promise.resolve().then(function () {
					return _this4._pc.createOffer();
				}).then(function (offer) {
					logger.debug('removeProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

					return _this4._pc.setLocalDescription(offer);
				});
			}).then(function () {
				var localSdpObj = _sdpTransform2.default.parse(_this4._pc.localDescription.sdp);
				var remoteSdp = _this4._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('removeProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this4._pc.setRemoteDescription(answer);
			});
		}
	}, {
		key: 'replaceProducerTrack',
		value: function replaceProducerTrack(producer, track) {
			var _this5 = this;

			logger.debug('replaceProducerTrack() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			var oldTrack = producer.track;

			return Promise.resolve().then(function () {
				// Get the associated RTCRtpSender.
				var rtpSender = _this5._pc.getSenders().find(function (s) {
					return s.track === oldTrack;
				});

				if (!rtpSender) throw new Error('local track not found');

				return rtpSender.replaceTrack(track);
			}).then(function () {
				// Remove the old track from the local stream.
				_this5._stream.removeTrack(oldTrack);

				// Add the new track to the local stream.
				_this5._stream.addTrack(track);
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this6 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				return _this6._pc.createOffer({ iceRestart: true });
			}).then(function (offer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this6._pc.setLocalDescription(offer);
			}).then(function () {
				var localSdpObj = _sdpTransform2.default.parse(_this6._pc.localDescription.sdp);
				var remoteSdp = _this6._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this6._pc.setRemoteDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this7 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// Get our local DTLS parameters.
				var transportLocalParameters = {};
				var sdp = _this7._pc.localDescription.sdp;
				var sdpObj = _sdpTransform2.default.parse(sdp);
				var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);

				// Let's decide that we'll be DTLS server (because we can).
				dtlsParameters.role = 'server';

				transportLocalParameters.dtlsParameters = dtlsParameters;

				// Provide the remote SDP handler with transport local parameters.
				_this7._remoteSdp.setTransportLocalParameters(transportLocalParameters);

				// We need transport remote parameters.
				return _this7.safeEmitAsPromise('@needcreatetransport', transportLocalParameters);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this7._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this7._transportReady = true;
			});
		}
	}]);

	return SendHandler;
}(Handler);

var RecvHandler = function (_Handler2) {
	_inherits(RecvHandler, _Handler2);

	function RecvHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, RecvHandler);

		// Got transport remote parameters.
		// @type {Boolean}
		var _this8 = _possibleConstructorReturn(this, (RecvHandler.__proto__ || Object.getPrototypeOf(RecvHandler)).call(this, 'recv', rtpParametersByKind, settings));

		_this8._transportCreated = false;

		// Got transport local parameters.
		// @type {Boolean}
		_this8._transportUpdated = false;

		// Map of Consumers information indexed by consumer.id.
		// - mid {String}
		// - kind {String}
		// - closed {Boolean}
		// - trackId {String}
		// - ssrc {Number}
		// - rtxSsrc {Number}
		// - cname {String}
		// @type {Map<Number, Object>}
		_this8._consumerInfos = new Map();

		// Add an entry into consumers info to hold a fake DataChannel, so
		// the first m= section of the remote SDP is always "active" and Firefox
		// does not close the transport when there is no remote audio/video Consumers.
		//
		// ISSUE: https://github.com/versatica/mediasoup-client/issues/2
		var fakeDataChannelConsumerInfo = {
			mid: 'fake-dc',
			kind: 'application',
			closed: false,
			cname: null
		};

		_this8._consumerInfos.set(555, fakeDataChannelConsumerInfo);
		return _this8;
	}

	_createClass(RecvHandler, [{
		key: 'addConsumer',
		value: function addConsumer(consumer) {
			var _this9 = this;

			logger.debug('addConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (this._consumerInfos.has(consumer.id)) return Promise.reject(new Error('Consumer already added'));

			var encoding = consumer.rtpParameters.encodings[0];
			var cname = consumer.rtpParameters.rtcp.cname;
			var consumerInfo = {
				mid: '' + consumer.kind[0] + consumer.id,
				kind: consumer.kind,
				closed: consumer.closed,
				streamId: 'recv-stream-' + consumer.id,
				trackId: 'consumer-' + consumer.kind + '-' + consumer.id,
				ssrc: encoding.ssrc,
				cname: cname
			};

			if (encoding.rtx && encoding.rtx.ssrc) consumerInfo.rtxSsrc = encoding.rtx.ssrc;

			this._consumerInfos.set(consumer.id, consumerInfo);

			return Promise.resolve().then(function () {
				if (!_this9._transportCreated) return _this9._setupTransport();
			}).then(function () {
				var remoteSdp = _this9._remoteSdp.createOfferSdp(Array.from(_this9._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('addConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this9._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this9._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('addConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this9._pc.setLocalDescription(answer);
			}).then(function () {
				if (!_this9._transportUpdated) return _this9._updateTransport();
			}).then(function () {
				var newRtpReceiver = _this9._pc.getReceivers().find(function (rtpReceiver) {
					var track = rtpReceiver.track;


					if (!track) return false;

					return track.id === consumerInfo.trackId;
				});

				if (!newRtpReceiver) throw new Error('remote track not found');

				return newRtpReceiver.track;
			});
		}
	}, {
		key: 'removeConsumer',
		value: function removeConsumer(consumer) {
			var _this10 = this;

			logger.debug('removeConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			var consumerInfo = this._consumerInfos.get(consumer.id);

			if (!consumerInfo) return Promise.reject(new Error('Consumer not found'));

			consumerInfo.closed = true;

			return Promise.resolve().then(function () {
				var remoteSdp = _this10._remoteSdp.createOfferSdp(Array.from(_this10._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('removeConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this10._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this10._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('removeConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this10._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this11 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				var remoteSdp = _this11._remoteSdp.createOfferSdp(Array.from(_this11._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this11._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this11._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this11._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this12 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// We need transport remote parameters.
				return _this12.safeEmitAsPromise('@needcreatetransport', null);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this12._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this12._transportCreated = true;
			});
		}
	}, {
		key: '_updateTransport',
		value: function _updateTransport() {
			logger.debug('_updateTransport()');

			// Get our local DTLS parameters.
			// const transportLocalParameters = {};
			var sdp = this._pc.localDescription.sdp;
			var sdpObj = _sdpTransform2.default.parse(sdp);
			var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);
			var transportLocalParameters = { dtlsParameters: dtlsParameters };

			// We need to provide transport local parameters.
			this.safeEmit('@needupdatetransport', transportLocalParameters);

			this._transportUpdated = true;
		}
	}]);

	return RecvHandler;
}(Handler);

var Firefox50 = function () {
	_createClass(Firefox50, null, [{
		key: 'getNativeRtpCapabilities',
		value: function getNativeRtpCapabilities() {
			logger.debug('getNativeRtpCapabilities()');

			var pc = new RTCPeerConnection({
				iceServers: [],
				iceTransportPolicy: 'all',
				bundlePolicy: 'max-bundle',
				rtcpMuxPolicy: 'require'
			});

			// NOTE: We need to add a real video track to get the RID extension mapping.
			var canvas = document.createElement('canvas');

			// NOTE: Otherwise Firefox fails in next line.
			canvas.getContext('2d');

			var fakeStream = canvas.captureStream();
			var fakeVideoTrack = fakeStream.getVideoTracks()[0];
			var rtpSender = pc.addTrack(fakeVideoTrack, fakeStream);

			rtpSender.setParameters({
				encodings: [{ rid: 'RID1', maxBitrate: 40000 }, { rid: 'RID2', maxBitrate: 10000 }]
			});

			return pc.createOffer({
				offerToReceiveAudio: true,
				offerToReceiveVideo: true
			}).then(function (offer) {
				try {
					canvas.remove();
				} catch (error) {}

				try {
					pc.close();
				} catch (error) {}

				var sdpObj = _sdpTransform2.default.parse(offer.sdp);
				var nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities(sdpObj);

				return nativeRtpCapabilities;
			}).catch(function (error) {
				try {
					canvas.remove();
				} catch (error2) {}

				try {
					pc.close();
				} catch (error2) {}

				throw error;
			});
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'Firefox50';
		}
	}]);

	function Firefox50(direction, extendedRtpCapabilities, settings) {
		_classCallCheck(this, Firefox50);

		logger.debug('constructor() [direction:%s, extendedRtpCapabilities:%o]', direction, extendedRtpCapabilities);

		var rtpParametersByKind = void 0;

		switch (direction) {
			case 'send':
				{
					rtpParametersByKind = {
						audio: ortc.getSendingRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getSendingRtpParameters('video', extendedRtpCapabilities)
					};

					return new SendHandler(rtpParametersByKind, settings);
				}
			case 'recv':
				{
					rtpParametersByKind = {
						audio: ortc.getReceivingFullRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getReceivingFullRtpParameters('video', extendedRtpCapabilities)
					};

					return new RecvHandler(rtpParametersByKind, settings);
				}
		}
	}

	return Firefox50;
}();

exports.default = Firefox50;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdpTransform = __webpack_require__(4);

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _ortc = __webpack_require__(3);

var ortc = _interopRequireWildcard(_ortc);

var _commonUtils = __webpack_require__(5);

var sdpCommonUtils = _interopRequireWildcard(_commonUtils);

var _unifiedPlanUtils = __webpack_require__(13);

var sdpUnifiedPlanUtils = _interopRequireWildcard(_unifiedPlanUtils);

var _RemoteUnifiedPlanSdp = __webpack_require__(14);

var _RemoteUnifiedPlanSdp2 = _interopRequireDefault(_RemoteUnifiedPlanSdp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default('Firefox59');

var Handler = function (_EnhancedEventEmitter) {
	_inherits(Handler, _EnhancedEventEmitter);

	function Handler(direction, rtpParametersByKind, settings) {
		_classCallCheck(this, Handler);

		// RTCPeerConnection instance.
		// @type {RTCPeerConnection}
		var _this = _possibleConstructorReturn(this, (Handler.__proto__ || Object.getPrototypeOf(Handler)).call(this, logger));

		_this._pc = new RTCPeerConnection({
			iceServers: settings.turnServers || [],
			iceTransportPolicy: 'all',
			bundlePolicy: 'max-bundle',
			rtcpMuxPolicy: 'require'
		});

		// Generic sending RTP parameters for audio and video.
		// @type {Object}
		_this._rtpParametersByKind = rtpParametersByKind;

		// Remote SDP handler.
		// @type {RemoteUnifiedPlanSdp}
		_this._remoteSdp = new _RemoteUnifiedPlanSdp2.default(direction, rtpParametersByKind);

		// Handle RTCPeerConnection connection status.
		_this._pc.addEventListener('iceconnectionstatechange', function () {
			switch (_this._pc.iceConnectionState) {
				case 'checking':
					_this.emit('@connectionstatechange', 'connecting');
					break;
				case 'connected':
				case 'completed':
					_this.emit('@connectionstatechange', 'connected');
					break;
				case 'failed':
					_this.emit('@connectionstatechange', 'failed');
					break;
				case 'disconnected':
					_this.emit('@connectionstatechange', 'disconnected');
					break;
				case 'closed':
					_this.emit('@connectionstatechange', 'closed');
					break;
			}
		});
		return _this;
	}

	_createClass(Handler, [{
		key: 'close',
		value: function close() {
			logger.debug('close()');

			// Close RTCPeerConnection.
			try {
				this._pc.close();
			} catch (error) {}
		}
	}]);

	return Handler;
}(_EnhancedEventEmitter3.default);

var SendHandler = function (_Handler) {
	_inherits(SendHandler, _Handler);

	function SendHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, SendHandler);

		// Got transport local and remote parameters.
		// @type {Boolean}
		var _this2 = _possibleConstructorReturn(this, (SendHandler.__proto__ || Object.getPrototypeOf(SendHandler)).call(this, 'send', rtpParametersByKind, settings));

		_this2._transportReady = false;

		// Local stream.
		// @type {MediaStream}
		_this2._stream = new MediaStream();

		// RID value counter for simulcast (so they never match).
		// @type {Number}
		_this2._nextRid = 1;
		return _this2;
	}

	_createClass(SendHandler, [{
		key: 'addProducer',
		value: function addProducer(producer) {
			var _this3 = this;

			var track = producer.track;


			logger.debug('addProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			if (this._stream.getTrackById(track.id)) return Promise.reject(new Error('track already added'));

			var rtpSender = void 0;
			var localSdpObj = void 0;

			return Promise.resolve().then(function () {
				_this3._stream.addTrack(track);

				// Add the stream to the PeerConnection.
				rtpSender = _this3._pc.addTrack(track, _this3._stream);
			}).then(function () {
				// If simulcast is not enabled, do nothing.
				if (!producer.simulcast) return;

				logger.debug('addProducer() | enabling simulcast');

				var encodings = [];

				if (producer.simulcast.high) {
					encodings.push({
						rid: 'high' + _this3._nextRid,
						active: true,
						priority: 'high',
						maxBitrate: producer.simulcast.high
					});
				}

				if (producer.simulcast.medium) {
					encodings.push({
						rid: 'medium' + _this3._nextRid,
						active: true,
						priority: 'medium',
						maxBitrate: producer.simulcast.medium
					});
				}

				if (producer.simulcast.low) {
					encodings.push({
						rid: 'low' + _this3._nextRid,
						active: true,
						priority: 'low',
						maxBitrate: producer.simulcast.low
					});
				}

				// Update RID counter for future ones.
				_this3._nextRid++;

				return rtpSender.setParameters({ encodings: encodings });
			}).then(function () {
				return _this3._pc.createOffer();
			}).then(function (offer) {
				logger.debug('addProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this3._pc.setLocalDescription(offer);
			}).then(function () {
				if (!_this3._transportReady) return _this3._setupTransport();
			}).then(function () {
				localSdpObj = _sdpTransform2.default.parse(_this3._pc.localDescription.sdp);

				var remoteSdp = _this3._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('addProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this3._pc.setRemoteDescription(answer);
			}).then(function () {
				var rtpParameters = utils.clone(_this3._rtpParametersByKind[producer.kind]);

				// Fill the RTP parameters for this track.
				sdpUnifiedPlanUtils.fillRtpParametersForTrack(rtpParameters, localSdpObj, track);

				return rtpParameters;
			}).catch(function (error) {
				// Panic here. Try to undo things.

				try {
					_this3._pc.removeTrack(rtpSender);
				} catch (error2) {}

				_this3._stream.removeTrack(track);

				throw error;
			});
		}
	}, {
		key: 'removeProducer',
		value: function removeProducer(producer) {
			var _this4 = this;

			var track = producer.track;


			logger.debug('removeProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			return Promise.resolve().then(function () {
				// Get the associated RTCRtpSender.
				var rtpSender = _this4._pc.getSenders().find(function (s) {
					return s.track === track;
				});

				if (!rtpSender) throw new Error('RTCRtpSender found');

				// Remove the associated RtpSender.
				_this4._pc.removeTrack(rtpSender);

				// Remove the track from the local stream.
				_this4._stream.removeTrack(track);

				return Promise.resolve().then(function () {
					return _this4._pc.createOffer();
				}).then(function (offer) {
					logger.debug('removeProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

					return _this4._pc.setLocalDescription(offer);
				});
			}).then(function () {
				var localSdpObj = _sdpTransform2.default.parse(_this4._pc.localDescription.sdp);
				var remoteSdp = _this4._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('removeProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this4._pc.setRemoteDescription(answer);
			});
		}
	}, {
		key: 'replaceProducerTrack',
		value: function replaceProducerTrack(producer, track) {
			var _this5 = this;

			logger.debug('replaceProducerTrack() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			var oldTrack = producer.track;

			return Promise.resolve().then(function () {
				// Get the associated RTCRtpSender.
				var rtpSender = _this5._pc.getSenders().find(function (s) {
					return s.track === oldTrack;
				});

				if (!rtpSender) throw new Error('local track not found');

				return rtpSender.replaceTrack(track);
			}).then(function () {
				// Remove the old track from the local stream.
				_this5._stream.removeTrack(oldTrack);

				// Add the new track to the local stream.
				_this5._stream.addTrack(track);
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this6 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				return _this6._pc.createOffer({ iceRestart: true });
			}).then(function (offer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this6._pc.setLocalDescription(offer);
			}).then(function () {
				var localSdpObj = _sdpTransform2.default.parse(_this6._pc.localDescription.sdp);
				var remoteSdp = _this6._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [answer:%o]', answer);

				return _this6._pc.setRemoteDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this7 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// Get our local DTLS parameters.
				var transportLocalParameters = {};
				var sdp = _this7._pc.localDescription.sdp;
				var sdpObj = _sdpTransform2.default.parse(sdp);
				var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);

				// Let's decide that we'll be DTLS server (because we can).
				dtlsParameters.role = 'server';

				transportLocalParameters.dtlsParameters = dtlsParameters;

				// Provide the remote SDP handler with transport local parameters.
				_this7._remoteSdp.setTransportLocalParameters(transportLocalParameters);

				// We need transport remote parameters.
				return _this7.safeEmitAsPromise('@needcreatetransport', transportLocalParameters);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this7._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this7._transportReady = true;
			});
		}
	}]);

	return SendHandler;
}(Handler);

var RecvHandler = function (_Handler2) {
	_inherits(RecvHandler, _Handler2);

	function RecvHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, RecvHandler);

		// Got transport remote parameters.
		// @type {Boolean}
		var _this8 = _possibleConstructorReturn(this, (RecvHandler.__proto__ || Object.getPrototypeOf(RecvHandler)).call(this, 'recv', rtpParametersByKind, settings));

		_this8._transportCreated = false;

		// Got transport local parameters.
		// @type {Boolean}
		_this8._transportUpdated = false;

		// Map of Consumers information indexed by consumer.id.
		// - mid {String}
		// - kind {String}
		// - closed {Boolean}
		// - trackId {String}
		// - ssrc {Number}
		// - rtxSsrc {Number}
		// - cname {String}
		// @type {Map<Number, Object>}
		_this8._consumerInfos = new Map();
		return _this8;
	}

	_createClass(RecvHandler, [{
		key: 'addConsumer',
		value: function addConsumer(consumer) {
			var _this9 = this;

			logger.debug('addConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (this._consumerInfos.has(consumer.id)) return Promise.reject(new Error('Consumer already added'));

			var encoding = consumer.rtpParameters.encodings[0];
			var cname = consumer.rtpParameters.rtcp.cname;
			var consumerInfo = {
				mid: '' + consumer.kind[0] + consumer.id,
				kind: consumer.kind,
				closed: consumer.closed,
				streamId: 'recv-stream-' + consumer.id,
				trackId: 'consumer-' + consumer.kind + '-' + consumer.id,
				ssrc: encoding.ssrc,
				cname: cname
			};

			if (encoding.rtx && encoding.rtx.ssrc) consumerInfo.rtxSsrc = encoding.rtx.ssrc;

			this._consumerInfos.set(consumer.id, consumerInfo);

			return Promise.resolve().then(function () {
				if (!_this9._transportCreated) return _this9._setupTransport();
			}).then(function () {
				var remoteSdp = _this9._remoteSdp.createOfferSdp(Array.from(_this9._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('addConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this9._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this9._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('addConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this9._pc.setLocalDescription(answer);
			}).then(function () {
				if (!_this9._transportUpdated) return _this9._updateTransport();
			}).then(function () {
				var newTransceiver = _this9._pc.getTransceivers().find(function (transceiver) {
					var receiver = transceiver.receiver;


					if (!receiver) return false;

					var track = receiver.track;


					if (!track) return false;

					return transceiver.mid === consumerInfo.mid;
				});

				if (!newTransceiver) throw new Error('remote track not found');

				return newTransceiver.receiver.track;
			});
		}
	}, {
		key: 'removeConsumer',
		value: function removeConsumer(consumer) {
			var _this10 = this;

			logger.debug('removeConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			var consumerInfo = this._consumerInfos.get(consumer.id);

			if (!consumerInfo) return Promise.reject(new Error('Consumer not found'));

			consumerInfo.closed = true;

			return Promise.resolve().then(function () {
				var remoteSdp = _this10._remoteSdp.createOfferSdp(Array.from(_this10._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('removeConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this10._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this10._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('removeConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this10._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this11 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				var remoteSdp = _this11._remoteSdp.createOfferSdp(Array.from(_this11._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [offer:%o]', offer);

				return _this11._pc.setRemoteDescription(offer);
			}).then(function () {
				return _this11._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this11._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this12 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// We need transport remote parameters.
				return _this12.safeEmitAsPromise('@needcreatetransport', null);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this12._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this12._transportCreated = true;
			});
		}
	}, {
		key: '_updateTransport',
		value: function _updateTransport() {
			logger.debug('_updateTransport()');

			// Get our local DTLS parameters.
			// const transportLocalParameters = {};
			var sdp = this._pc.localDescription.sdp;
			var sdpObj = _sdpTransform2.default.parse(sdp);
			var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);
			var transportLocalParameters = { dtlsParameters: dtlsParameters };

			// We need to provide transport local parameters.
			this.safeEmit('@needupdatetransport', transportLocalParameters);

			this._transportUpdated = true;
		}
	}]);

	return RecvHandler;
}(Handler);

var Firefox59 = function () {
	_createClass(Firefox59, null, [{
		key: 'getNativeRtpCapabilities',
		value: function getNativeRtpCapabilities() {
			logger.debug('getNativeRtpCapabilities()');

			var pc = new RTCPeerConnection({
				iceServers: [],
				iceTransportPolicy: 'all',
				bundlePolicy: 'max-bundle',
				rtcpMuxPolicy: 'require'
			});

			// NOTE: We need to add a real video track to get the RID extension mapping.
			var canvas = document.createElement('canvas');

			// NOTE: Otherwise Firefox fails in next line.
			canvas.getContext('2d');

			var fakeStream = canvas.captureStream();
			var fakeVideoTrack = fakeStream.getVideoTracks()[0];
			var rtpSender = pc.addTrack(fakeVideoTrack, fakeStream);

			rtpSender.setParameters({
				encodings: [{ rid: 'RID1', maxBitrate: 40000 }, { rid: 'RID2', maxBitrate: 10000 }]
			});

			return pc.createOffer({
				offerToReceiveAudio: true,
				offerToReceiveVideo: true
			}).then(function (offer) {
				try {
					canvas.remove();
				} catch (error) {}

				try {
					pc.close();
				} catch (error) {}

				var sdpObj = _sdpTransform2.default.parse(offer.sdp);
				var nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities(sdpObj);

				return nativeRtpCapabilities;
			}).catch(function (error) {
				try {
					canvas.remove();
				} catch (error2) {}

				try {
					pc.close();
				} catch (error2) {}

				throw error;
			});
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'Firefox59';
		}
	}]);

	function Firefox59(direction, extendedRtpCapabilities, settings) {
		_classCallCheck(this, Firefox59);

		logger.debug('constructor() [direction:%s, extendedRtpCapabilities:%o]', direction, extendedRtpCapabilities);

		var rtpParametersByKind = void 0;

		switch (direction) {
			case 'send':
				{
					rtpParametersByKind = {
						audio: ortc.getSendingRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getSendingRtpParameters('video', extendedRtpCapabilities)
					};

					return new SendHandler(rtpParametersByKind, settings);
				}
			case 'recv':
				{
					rtpParametersByKind = {
						audio: ortc.getReceivingFullRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getReceivingFullRtpParameters('video', extendedRtpCapabilities)
					};

					return new RecvHandler(rtpParametersByKind, settings);
				}
		}
	}

	return Firefox59;
}();

exports.default = Firefox59;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _ortc = __webpack_require__(3);

var ortc = _interopRequireWildcard(_ortc);

var _edgeUtils = __webpack_require__(32);

var edgeUtils = _interopRequireWildcard(_edgeUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global RTCIceGatherer, RTCIceTransport, RTCDtlsTransport, RTCRtpReceiver, RTCRtpSender */

var CNAME = 'CNAME-EDGE-' + utils.randomNumber();

var logger = new _Logger2.default('Edge11');

var Edge11 = function (_EnhancedEventEmitter) {
	_inherits(Edge11, _EnhancedEventEmitter);

	_createClass(Edge11, null, [{
		key: 'getNativeRtpCapabilities',
		value: function getNativeRtpCapabilities() {
			logger.debug('getNativeRtpCapabilities()');

			return edgeUtils.getCapabilities();
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'Edge11';
		}
	}]);

	function Edge11(direction, extendedRtpCapabilities, settings) {
		_classCallCheck(this, Edge11);

		var _this = _possibleConstructorReturn(this, (Edge11.__proto__ || Object.getPrototypeOf(Edge11)).call(this, logger));

		logger.debug('constructor() [direction:%s, extendedRtpCapabilities:%o]', direction, extendedRtpCapabilities);

		// Generic sending RTP parameters for audio and video.
		// @type {Object}
		_this._rtpParametersByKind = {
			audio: ortc.getSendingRtpParameters('audio', extendedRtpCapabilities),
			video: ortc.getSendingRtpParameters('video', extendedRtpCapabilities)
		};

		// Got transport local and remote parameters.
		// @type {Boolean}
		_this._transportReady = false;

		// ICE gatherer.
		_this._iceGatherer = null;

		// ICE transport.
		_this._iceTransport = null;

		// DTLS transport.
		// @type {RTCDtlsTransport}
		_this._dtlsTransport = null;

		// Map of RTCRtpSenders indexed by Producer.id.
		// @type {Map<Number, RTCRtpSender}
		_this._rtpSenders = new Map();

		// Map of RTCRtpReceivers indexed by Consumer.id.
		// @type {Map<Number, RTCRtpReceiver}
		_this._rtpReceivers = new Map();

		// Remote Transport parameters.
		// @type {Object}
		_this._transportRemoteParameters = null;

		_this._setIceGatherer(settings);
		_this._setIceTransport();
		_this._setDtlsTransport();
		return _this;
	}

	_createClass(Edge11, [{
		key: 'close',
		value: function close() {
			logger.debug('close()');

			// Close the ICE gatherer.
			// NOTE: Not yet implemented by Edge.
			try {
				this._iceGatherer.close();
			} catch (error) {}

			// Close the ICE transport.
			try {
				this._iceTransport.stop();
			} catch (error) {}

			// Close the DTLS transport.
			try {
				this._dtlsTransport.stop();
			} catch (error) {}

			// Close RTCRtpSenders.
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this._rtpSenders.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var rtpSender = _step.value;

					try {
						rtpSender.stop();
					} catch (error) {}
				}

				// Close RTCRtpReceivers.
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this._rtpReceivers.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var rtpReceiver = _step2.value;

					try {
						rtpReceiver.stop();
					} catch (error) {}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	}, {
		key: 'addProducer',
		value: function addProducer(producer) {
			var _this2 = this;

			var track = producer.track;


			logger.debug('addProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			if (this._rtpSenders.has(producer.id)) return Promise.reject(new Error('Producer already added'));

			return Promise.resolve().then(function () {
				if (!_this2._transportReady) return _this2._setupTransport();
			}).then(function () {
				logger.debug('addProducer() | calling new RTCRtpSender()');

				var rtpSender = new RTCRtpSender(track, _this2._dtlsTransport);
				var rtpParameters = utils.clone(_this2._rtpParametersByKind[producer.kind]);

				// Fill RTCRtpParameters.encodings.
				var encoding = {
					ssrc: utils.randomNumber()
				};

				if (rtpParameters.codecs.some(function (codec) {
					return codec.name === 'rtx';
				})) {
					encoding.rtx = {
						ssrc: utils.randomNumber()
					};
				}

				rtpParameters.encodings.push(encoding);

				// Fill RTCRtpParameters.rtcp.
				rtpParameters.rtcp = {
					cname: CNAME,
					reducedSize: true,
					mux: true
				};

				// NOTE: Convert our standard RTCRtpParameters into those that Edge
				// expects.
				var edgeRtpParameters = edgeUtils.mangleRtpParameters(rtpParameters);

				logger.debug('addProducer() | calling rtpSender.send() [params:%o]', edgeRtpParameters);

				rtpSender.send(edgeRtpParameters);

				// Store it.
				_this2._rtpSenders.set(producer.id, rtpSender);

				return rtpParameters;
			});
		}
	}, {
		key: 'removeProducer',
		value: function removeProducer(producer) {
			var _this3 = this;

			var track = producer.track;


			logger.debug('removeProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			return Promise.resolve().then(function () {
				var rtpSender = _this3._rtpSenders.get(producer.id);

				if (!rtpSender) throw new Error('RTCRtpSender not found');

				_this3._rtpSenders.delete(producer.id);

				try {
					logger.debug('removeProducer() | calling rtpSender.stop()');

					rtpSender.stop();
				} catch (error) {
					logger.warn('rtpSender.stop() failed:%o', error);
				}
			});
		}
	}, {
		key: 'replaceProducerTrack',
		value: function replaceProducerTrack(producer, track) {
			var _this4 = this;

			logger.debug('replaceProducerTrack() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			return Promise.resolve().then(function () {
				var rtpSender = _this4._rtpSenders.get(producer.id);

				if (!rtpSender) throw new Error('RTCRtpSender not found');

				rtpSender.setTrack(track);
			});
		}
	}, {
		key: 'addConsumer',
		value: function addConsumer(consumer) {
			var _this5 = this;

			logger.debug('addConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (this._rtpReceivers.has(consumer.id)) return Promise.reject(new Error('Consumer already added'));

			return Promise.resolve().then(function () {
				if (!_this5._transportReady) return _this5._setupTransport();
			}).then(function () {
				logger.debug('addProducer() | calling new RTCRtpReceiver()');

				var rtpReceiver = new RTCRtpReceiver(_this5._dtlsTransport, consumer.kind);

				rtpReceiver.addEventListener('error', function (event) {
					logger.error('iceGatherer "error" event [event:%o]', event);
				});

				// NOTE: Convert our standard RTCRtpParameters into those that Edge
				// expects.
				var edgeRtpParameters = edgeUtils.mangleRtpParameters(consumer.rtpParameters);

				logger.debug('addProducer() | calling rtpReceiver.receive() [params:%o]', edgeRtpParameters);

				rtpReceiver.receive(edgeRtpParameters);

				// Store it.
				_this5._rtpReceivers.set(consumer.id, rtpReceiver);

				return rtpReceiver.track;
			});
		}
	}, {
		key: 'removeConsumer',
		value: function removeConsumer(consumer) {
			var _this6 = this;

			logger.debug('removeConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			return Promise.resolve().then(function () {
				var rtpReceiver = _this6._rtpReceivers.get(consumer.id);

				if (!rtpReceiver) throw new Error('RTCRtpReceiver not found');

				_this6._rtpReceivers.delete(consumer.id);

				try {
					logger.debug('removeConsumer() | calling rtpReceiver.stop()');

					rtpReceiver.stop();
				} catch (error) {
					logger.warn('rtpReceiver.stop() failed:%o', error);
				}
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this7 = this;

			logger.debug('restartIce()');

			Promise.resolve().then(function () {
				_this7._transportRemoteParameters.iceParameters = remoteIceParameters;

				var remoteIceCandidates = _this7._transportRemoteParameters.iceCandidates;

				logger.debug('restartIce() | calling iceTransport.start()');

				_this7._iceTransport.start(_this7._iceGatherer, remoteIceParameters, 'controlling');

				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = remoteIceCandidates[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var candidate = _step3.value;

						_this7._iceTransport.addRemoteCandidate(candidate);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				_this7._iceTransport.addRemoteCandidate({});
			});
		}
	}, {
		key: '_setIceGatherer',
		value: function _setIceGatherer(settings) {
			var iceGatherer = new RTCIceGatherer({
				iceServers: settings.turnServers || [],
				gatherPolicy: 'all'
			});

			iceGatherer.addEventListener('error', function (event) {
				logger.error('iceGatherer "error" event [event:%o]', event);
			});

			// NOTE: Not yet implemented by Edge, which starts gathering automatically.
			try {
				iceGatherer.gather();
			} catch (error) {
				logger.debug('iceGatherer.gather() failed: %s', error.toString());
			}

			this._iceGatherer = iceGatherer;
		}
	}, {
		key: '_setIceTransport',
		value: function _setIceTransport() {
			var _this8 = this;

			var iceTransport = new RTCIceTransport(this._iceGatherer);

			// NOTE: Not yet implemented by Edge.
			iceTransport.addEventListener('statechange', function () {
				switch (iceTransport.state) {
					case 'checking':
						_this8.emit('@connectionstatechange', 'connecting');
						break;
					case 'connected':
					case 'completed':
						_this8.emit('@connectionstatechange', 'connected');
						break;
					case 'failed':
						_this8.emit('@connectionstatechange', 'failed');
						break;
					case 'disconnected':
						_this8.emit('@connectionstatechange', 'disconnected');
						break;
					case 'closed':
						_this8.emit('@connectionstatechange', 'closed');
						break;
				}
			});

			// NOTE: Not standard, but implemented by Edge.
			iceTransport.addEventListener('icestatechange', function () {
				switch (iceTransport.state) {
					case 'checking':
						_this8.emit('@connectionstatechange', 'connecting');
						break;
					case 'connected':
					case 'completed':
						_this8.emit('@connectionstatechange', 'connected');
						break;
					case 'failed':
						_this8.emit('@connectionstatechange', 'failed');
						break;
					case 'disconnected':
						_this8.emit('@connectionstatechange', 'disconnected');
						break;
					case 'closed':
						_this8.emit('@connectionstatechange', 'closed');
						break;
				}
			});

			iceTransport.addEventListener('candidatepairchange', function (event) {
				logger.debug('iceTransport "candidatepairchange" event [pair:%o]', event.pair);
			});

			this._iceTransport = iceTransport;
		}
	}, {
		key: '_setDtlsTransport',
		value: function _setDtlsTransport() {
			var dtlsTransport = new RTCDtlsTransport(this._iceTransport);

			// NOTE: Not yet implemented by Edge.
			dtlsTransport.addEventListener('statechange', function () {
				logger.debug('dtlsTransport "statechange" event [state:%s]', dtlsTransport.state);
			});

			// NOTE: Not standard, but implemented by Edge.
			dtlsTransport.addEventListener('dtlsstatechange', function () {
				logger.debug('dtlsTransport "dtlsstatechange" event [state:%s]', dtlsTransport.state);
			});

			dtlsTransport.addEventListener('error', function (event) {
				logger.error('dtlsTransport "error" event [event:%o]', event);
			});

			this._dtlsTransport = dtlsTransport;
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this9 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// Get our local DTLS parameters.
				var transportLocalParameters = {};
				var dtlsParameters = _this9._dtlsTransport.getLocalParameters();

				// Let's decide that we'll be DTLS server (because we can).
				dtlsParameters.role = 'server';

				transportLocalParameters.dtlsParameters = dtlsParameters;

				// We need transport remote parameters.
				return _this9.safeEmitAsPromise('@needcreatetransport', transportLocalParameters);
			}).then(function (transportRemoteParameters) {
				_this9._transportRemoteParameters = transportRemoteParameters;

				var remoteIceParameters = transportRemoteParameters.iceParameters;
				var remoteIceCandidates = transportRemoteParameters.iceCandidates;
				var remoteDtlsParameters = transportRemoteParameters.dtlsParameters;

				// Start the RTCIceTransport.
				_this9._iceTransport.start(_this9._iceGatherer, remoteIceParameters, 'controlling');

				// Add remote ICE candidates.
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = remoteIceCandidates[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var candidate = _step4.value;

						_this9._iceTransport.addRemoteCandidate(candidate);
					}

					// Also signal a 'complete' candidate as per spec.
					// NOTE: It should be {complete: true} but Edge prefers {}.
					// NOTE: If we don't signal end of candidates, the Edge RTCIceTransport
					// won't enter the 'completed' state.
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}

				_this9._iceTransport.addRemoteCandidate({});

				// NOTE: Edge does not like SHA less than 256.
				remoteDtlsParameters.fingerprints = remoteDtlsParameters.fingerprints.filter(function (fingerprint) {
					return fingerprint.algorithm === 'sha-256' || fingerprint.algorithm === 'sha-384' || fingerprint.algorithm === 'sha-512';
				});

				// Start the RTCDtlsTransport.
				_this9._dtlsTransport.start(remoteDtlsParameters);

				_this9._transportReady = true;
			});
		}
	}]);

	return Edge11;
}(_EnhancedEventEmitter3.default);

exports.default = Edge11;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getCapabilities = getCapabilities;
exports.mangleRtpParameters = mangleRtpParameters;

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Normalize Edge's RTCRtpReceiver.getCapabilities() to produce a full
 * compliant ORTC RTCRtpCapabilities.
 *
 * @return {RTCRtpCapabilities}
 */
function getCapabilities() {
	var nativeCaps = RTCRtpReceiver.getCapabilities();
	var caps = utils.clone(nativeCaps);

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = caps.codecs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var codec = _step.value;

			// Rename numChannels to channels.
			codec.channels = codec.numChannels;
			delete codec.numChannels;

			// Normalize channels.
			if (codec.kind !== 'audio') delete codec.channels;else if (!codec.channels) codec.channels = 1;

			// Add mimeType.
			codec.mimeType = codec.kind + '/' + codec.name;

			// NOTE: Edge sets some numeric parameters as String rather than Number. Fix them.
			if (codec.parameters) {
				var parameters = codec.parameters;

				if (parameters.apt) parameters.apt = Number(parameters.apt);

				if (parameters['packetization-mode']) parameters['packetization-mode'] = Number(parameters['packetization-mode']);
			}

			// Delete emty parameter String in rtcpFeedback.
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = (codec.rtcpFeedback || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var feedback = _step2.value;

					if (!feedback.parameter) delete feedback.parameter;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return caps;
}

/**
 * Generate RTCRtpParameters as Edge like them.
 *
 * @param  {RTCRtpParameters} rtpParameters
 * @return {RTCRtpParameters}
 */
/* global RTCRtpReceiver */

function mangleRtpParameters(rtpParameters) {
	var params = utils.clone(rtpParameters);

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = params.codecs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var codec = _step3.value;

			// Rename channels to numChannels.
			if (codec.channels) {
				codec.numChannels = codec.channels;
				delete codec.channels;
			}

			// Remove mimeType.
			delete codec.mimeType;
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return params;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdpTransform = __webpack_require__(4);

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _ortc = __webpack_require__(3);

var ortc = _interopRequireWildcard(_ortc);

var _commonUtils = __webpack_require__(5);

var sdpCommonUtils = _interopRequireWildcard(_commonUtils);

var _planBUtils = __webpack_require__(8);

var sdpPlanBUtils = _interopRequireWildcard(_planBUtils);

var _RemotePlanBSdp = __webpack_require__(9);

var _RemotePlanBSdp2 = _interopRequireDefault(_RemotePlanBSdp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default('ReactNative');

var Handler = function (_EnhancedEventEmitter) {
	_inherits(Handler, _EnhancedEventEmitter);

	function Handler(direction, rtpParametersByKind, settings) {
		_classCallCheck(this, Handler);

		// RTCPeerConnection instance.
		// @type {RTCPeerConnection}
		var _this = _possibleConstructorReturn(this, (Handler.__proto__ || Object.getPrototypeOf(Handler)).call(this, logger));

		_this._pc = new RTCPeerConnection({
			iceServers: settings.turnServers || [],
			iceTransportPolicy: 'all',
			bundlePolicy: 'max-bundle',
			rtcpMuxPolicy: 'require'
		});

		// Generic sending RTP parameters for audio and video.
		// @type {Object}
		_this._rtpParametersByKind = rtpParametersByKind;

		// Remote SDP handler.
		// @type {RemotePlanBSdp}
		_this._remoteSdp = new _RemotePlanBSdp2.default(direction, rtpParametersByKind);

		// Handle RTCPeerConnection connection status.
		_this._pc.addEventListener('iceconnectionstatechange', function () {
			switch (_this._pc.iceConnectionState) {
				case 'checking':
					_this.emit('@connectionstatechange', 'connecting');
					break;
				case 'connected':
				case 'completed':
					_this.emit('@connectionstatechange', 'connected');
					break;
				case 'failed':
					_this.emit('@connectionstatechange', 'failed');
					break;
				case 'disconnected':
					_this.emit('@connectionstatechange', 'disconnected');
					break;
				case 'closed':
					_this.emit('@connectionstatechange', 'closed');
					break;
			}
		});
		return _this;
	}

	_createClass(Handler, [{
		key: 'close',
		value: function close() {
			logger.debug('close()');

			// Close RTCPeerConnection.
			try {
				this._pc.close();
			} catch (error) {}
		}
	}]);

	return Handler;
}(_EnhancedEventEmitter3.default);

var SendHandler = function (_Handler) {
	_inherits(SendHandler, _Handler);

	function SendHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, SendHandler);

		// Got transport local and remote parameters.
		// @type {Boolean}
		var _this2 = _possibleConstructorReturn(this, (SendHandler.__proto__ || Object.getPrototypeOf(SendHandler)).call(this, 'send', rtpParametersByKind, settings));

		_this2._transportReady = false;

		// Handled tracks.
		// @type {Set<MediaStreamTrack>}
		_this2._tracks = new Set();
		return _this2;
	}

	_createClass(SendHandler, [{
		key: 'addProducer',
		value: function addProducer(producer) {
			var _this3 = this;

			var track = producer.track;


			logger.debug('addProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			if (this._tracks.has(track)) return Promise.reject(new Error('track already added'));

			if (!track.streamReactTag) return Promise.reject(new Error('no track.streamReactTag property'));

			var stream = void 0;
			var localSdpObj = void 0;

			return Promise.resolve().then(function () {
				// Add the track to the Set.
				_this3._tracks.add(track);

				// Hack: Create a new stream with track.streamReactTag as id.
				stream = new MediaStream(track.streamReactTag);

				// Add the track to the stream.
				stream.addTrack(track);

				// Add the stream to the PeerConnection.
				_this3._pc.addStream(stream);

				return _this3._pc.createOffer();
			}).then(function (offer) {
				// If simulcast is set, mangle the offer.
				if (producer.simulcast) {
					logger.debug('addProducer() | enabling simulcast');

					var sdpObject = _sdpTransform2.default.parse(offer.sdp);

					sdpPlanBUtils.addSimulcastForTrack(sdpObject, track);

					var offerSdp = _sdpTransform2.default.write(sdpObject);

					offer = { type: 'offer', sdp: offerSdp };
				}

				logger.debug('addProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

				var offerDesc = new RTCSessionDescription(offer);

				return _this3._pc.setLocalDescription(offerDesc);
			}).then(function () {
				if (!_this3._transportReady) return _this3._setupTransport();
			}).then(function () {
				localSdpObj = _sdpTransform2.default.parse(_this3._pc.localDescription.sdp);

				var remoteSdp = _this3._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('addProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				var answerDesc = new RTCSessionDescription(answer);

				return _this3._pc.setRemoteDescription(answerDesc);
			}).then(function () {
				var rtpParameters = utils.clone(_this3._rtpParametersByKind[producer.kind]);

				// Fill the RTP parameters for this track.
				sdpPlanBUtils.fillRtpParametersForTrack(rtpParameters, localSdpObj, track);

				return rtpParameters;
			}).catch(function (error) {
				// Panic here. Try to undo things.

				_this3._tracks.delete(track);
				stream.removeTrack(track);
				_this3._pc.addStream(stream);

				throw error;
			});
		}
	}, {
		key: 'removeProducer',
		value: function removeProducer(producer) {
			var _this4 = this;

			var track = producer.track;


			logger.debug('removeProducer() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			if (!track.streamReactTag) return Promise.reject(new Error('no track.streamReactTag property'));

			return Promise.resolve().then(function () {
				// Remove the track from the Set.
				_this4._tracks.delete(track);

				// Hack: Create a new stream with track.streamReactTag as id.
				var stream = new MediaStream(track.streamReactTag);

				// Add the track to the stream.
				stream.addTrack(track);

				// Add the stream to the PeerConnection.
				_this4._pc.addStream(stream);

				return _this4._pc.createOffer();
			}).then(function (offer) {
				logger.debug('removeProducer() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this4._pc.setLocalDescription(offer);
			}).catch(function (error) {
				// NOTE: If there are no sending tracks, setLocalDescription() will fail with
				// "Failed to create channels". If so, ignore it.
				if (_this4._tracks.size === 0) {
					logger.warn('removeProducer() | ignoring expected error due no sending tracks: %s', error.toString());

					return;
				}

				throw error;
			}).then(function () {
				if (_this4._pc.signalingState === 'stable') return;

				var localSdpObj = _sdpTransform2.default.parse(_this4._pc.localDescription.sdp);
				var remoteSdp = _this4._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('removeProducer() | calling pc.setRemoteDescription() [answer:%o]', answer);

				var answerDesc = new RTCSessionDescription(answer);

				return _this4._pc.setRemoteDescription(answerDesc);
			});
		}
	}, {
		key: 'replaceProducerTrack',
		value: function replaceProducerTrack(producer, track) {
			var _this5 = this;

			logger.debug('replaceProducerTrack() [id:%s, kind:%s, trackId:%s]', producer.id, producer.kind, track.id);

			if (!track.streamReactTag) return Promise.reject(new Error('no track.streamReactTag property'));

			var oldTrack = producer.track;
			var stream = void 0;
			var localSdpObj = void 0;

			return Promise.resolve().then(function () {
				// Add the new Track to the Set and remove the old one.
				_this5._tracks.add(track);
				_this5._tracks.delete(oldTrack);

				// Hack: Create a new stream with track.streamReactTag as id.
				stream = new MediaStream(track.streamReactTag);

				// Add the track to the stream and remove the old one.
				stream.addTrack(track);
				stream.removeTrack(oldTrack);

				// Add the stream to the PeerConnection.
				_this5._pc.addStream(stream);

				return _this5._pc.createOffer();
			}).then(function (offer) {
				// If simulcast is set, mangle the offer.
				if (producer.simulcast) {
					logger.debug('addProducer() | enabling simulcast');

					var sdpObject = _sdpTransform2.default.parse(offer.sdp);

					sdpPlanBUtils.addSimulcastForTrack(sdpObject, track);

					var offerSdp = _sdpTransform2.default.write(sdpObject);

					offer = { type: 'offer', sdp: offerSdp };
				}

				logger.debug('replaceProducerTrack() | calling pc.setLocalDescription() [offer:%o]', offer);

				var offerDesc = new RTCSessionDescription(offer);

				return _this5._pc.setLocalDescription(offerDesc);
			}).then(function () {
				localSdpObj = _sdpTransform2.default.parse(_this5._pc.localDescription.sdp);

				var remoteSdp = _this5._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('replaceProducerTrack() | calling pc.setRemoteDescription() [answer:%o]', answer);

				var answerDesc = new RTCSessionDescription(answer);

				return _this5._pc.setRemoteDescription(answerDesc);
			}).then(function () {
				var rtpParameters = utils.clone(_this5._rtpParametersByKind[producer.kind]);

				// Fill the RTP parameters for the new track.
				sdpPlanBUtils.fillRtpParametersForTrack(rtpParameters, localSdpObj, track);

				// We need to provide new RTP parameters.
				_this5.safeEmit('@needupdateproducer', producer, rtpParameters);
			}).catch(function (error) {
				// Panic here. Try to undo things.

				_this5._tracks.delete(track);
				stream.removeTrack(track);
				_this5._pc.addStream(stream);

				throw error;
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this6 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				return _this6._pc.createOffer({ iceRestart: true });
			}).then(function (offer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [offer:%o]', offer);

				return _this6._pc.setLocalDescription(offer);
			}).then(function () {
				var localSdpObj = _sdpTransform2.default.parse(_this6._pc.localDescription.sdp);
				var remoteSdp = _this6._remoteSdp.createAnswerSdp(localSdpObj);
				var answer = { type: 'answer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [answer:%o]', answer);

				var answerDesc = new RTCSessionDescription(answer);

				return _this6._pc.setRemoteDescription(answerDesc);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this7 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// Get our local DTLS parameters.
				var transportLocalParameters = {};
				var sdp = _this7._pc.localDescription.sdp;
				var sdpObj = _sdpTransform2.default.parse(sdp);
				var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);

				// Let's decide that we'll be DTLS server (because we can).
				dtlsParameters.role = 'server';

				transportLocalParameters.dtlsParameters = dtlsParameters;

				// Provide the remote SDP handler with transport local parameters.
				_this7._remoteSdp.setTransportLocalParameters(transportLocalParameters);

				// We need transport remote parameters.
				return _this7.safeEmitAsPromise('@needcreatetransport', transportLocalParameters);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this7._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this7._transportReady = true;
			});
		}
	}]);

	return SendHandler;
}(Handler);

var RecvHandler = function (_Handler2) {
	_inherits(RecvHandler, _Handler2);

	function RecvHandler(rtpParametersByKind, settings) {
		_classCallCheck(this, RecvHandler);

		// Got transport remote parameters.
		// @type {Boolean}
		var _this8 = _possibleConstructorReturn(this, (RecvHandler.__proto__ || Object.getPrototypeOf(RecvHandler)).call(this, 'recv', rtpParametersByKind, settings));

		_this8._transportCreated = false;

		// Got transport local parameters.
		// @type {Boolean}
		_this8._transportUpdated = false;

		// Seen media kinds.
		// @type {Set<String>}
		_this8._kinds = new Set();

		// Map of Consumers information indexed by consumer.id.
		// - kind {String}
		// - trackId {String}
		// - ssrc {Number}
		// - rtxSsrc {Number}
		// - cname {String}
		// @type {Map<Number, Object>}
		_this8._consumerInfos = new Map();
		return _this8;
	}

	_createClass(RecvHandler, [{
		key: 'addConsumer',
		value: function addConsumer(consumer) {
			var _this9 = this;

			logger.debug('addConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (this._consumerInfos.has(consumer.id)) return Promise.reject(new Error('Consumer already added'));

			var encoding = consumer.rtpParameters.encodings[0];
			var cname = consumer.rtpParameters.rtcp.cname;
			var consumerInfo = {
				kind: consumer.kind,
				streamId: 'recv-stream-' + consumer.id,
				trackId: 'consumer-' + consumer.kind + '-' + consumer.id,
				ssrc: encoding.ssrc,
				cname: cname
			};

			if (encoding.rtx && encoding.rtx.ssrc) consumerInfo.rtxSsrc = encoding.rtx.ssrc;

			this._consumerInfos.set(consumer.id, consumerInfo);
			this._kinds.add(consumer.kind);

			return Promise.resolve().then(function () {
				if (!_this9._transportCreated) return _this9._setupTransport();
			}).then(function () {
				var remoteSdp = _this9._remoteSdp.createOfferSdp(Array.from(_this9._kinds), Array.from(_this9._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('addConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				var offerDesc = new RTCSessionDescription(offer);

				return _this9._pc.setRemoteDescription(offerDesc);
			}).then(function () {
				return _this9._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('addConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this9._pc.setLocalDescription(answer);
			}).then(function () {
				if (!_this9._transportUpdated) return _this9._updateTransport();
			}).then(function () {
				var stream = _this9._pc.getRemoteStreams().find(function (s) {
					return s.id === consumerInfo.streamId;
				});
				var track = stream.getTrackById(consumerInfo.trackId);

				// Hack: Add a streamReactTag property with the reactTag of the MediaStream
				// generated by react-native-webrtc (this is needed because react-native-webrtc
				// assumes that we're gonna use the streams generated by it).
				track.streamReactTag = stream.reactTag;

				if (!track) throw new Error('remote track not found');

				return track;
			});
		}
	}, {
		key: 'removeConsumer',
		value: function removeConsumer(consumer) {
			var _this10 = this;

			logger.debug('removeConsumer() [id:%s, kind:%s]', consumer.id, consumer.kind);

			if (!this._consumerInfos.has(consumer.id)) return Promise.reject(new Error('Consumer not found'));

			this._consumerInfos.delete(consumer.id);

			return Promise.resolve().then(function () {
				var remoteSdp = _this10._remoteSdp.createOfferSdp(Array.from(_this10._kinds), Array.from(_this10._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('removeConsumer() | calling pc.setRemoteDescription() [offer:%o]', offer);

				var offerDesc = new RTCSessionDescription(offer);

				return _this10._pc.setRemoteDescription(offerDesc);
			}).then(function () {
				return _this10._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('removeConsumer() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this10._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: 'restartIce',
		value: function restartIce(remoteIceParameters) {
			var _this11 = this;

			logger.debug('restartIce()');

			// Provide the remote SDP handler with new remote ICE parameters.
			this._remoteSdp.updateTransportRemoteIceParameters(remoteIceParameters);

			return Promise.resolve().then(function () {
				var remoteSdp = _this11._remoteSdp.createOfferSdp(Array.from(_this11._kinds), Array.from(_this11._consumerInfos.values()));
				var offer = { type: 'offer', sdp: remoteSdp };

				logger.debug('restartIce() | calling pc.setRemoteDescription() [offer:%o]', offer);

				var offerDesc = new RTCSessionDescription(offer);

				return _this11._pc.setRemoteDescription(offerDesc);
			}).then(function () {
				return _this11._pc.createAnswer();
			}).then(function (answer) {
				logger.debug('restartIce() | calling pc.setLocalDescription() [answer:%o]', answer);

				return _this11._pc.setLocalDescription(answer);
			});
		}
	}, {
		key: '_setupTransport',
		value: function _setupTransport() {
			var _this12 = this;

			logger.debug('_setupTransport()');

			return Promise.resolve().then(function () {
				// We need transport remote parameters.
				return _this12.safeEmitAsPromise('@needcreatetransport', null);
			}).then(function (transportRemoteParameters) {
				// Provide the remote SDP handler with transport remote parameters.
				_this12._remoteSdp.setTransportRemoteParameters(transportRemoteParameters);

				_this12._transportCreated = true;
			});
		}
	}, {
		key: '_updateTransport',
		value: function _updateTransport() {
			logger.debug('_updateTransport()');

			// Get our local DTLS parameters.
			// const transportLocalParameters = {};
			var sdp = this._pc.localDescription.sdp;
			var sdpObj = _sdpTransform2.default.parse(sdp);
			var dtlsParameters = sdpCommonUtils.extractDtlsParameters(sdpObj);
			var transportLocalParameters = { dtlsParameters: dtlsParameters };

			// We need to provide transport local parameters.
			this.safeEmit('@needupdatetransport', transportLocalParameters);

			this._transportUpdated = true;
		}
	}]);

	return RecvHandler;
}(Handler);

var ReactNative = function () {
	_createClass(ReactNative, null, [{
		key: 'getNativeRtpCapabilities',
		value: function getNativeRtpCapabilities() {
			logger.debug('getNativeRtpCapabilities()');

			var pc = new RTCPeerConnection({
				iceServers: [],
				iceTransportPolicy: 'all',
				bundlePolicy: 'max-bundle',
				rtcpMuxPolicy: 'require'
			});

			return pc.createOffer({
				offerToReceiveAudio: true,
				offerToReceiveVideo: true
			}).then(function (offer) {
				try {
					pc.close();
				} catch (error) {}

				var sdpObj = _sdpTransform2.default.parse(offer.sdp);
				var nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities(sdpObj);

				return nativeRtpCapabilities;
			}).catch(function (error) {
				try {
					pc.close();
				} catch (error2) {}

				throw error;
			});
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'ReactNative';
		}
	}]);

	function ReactNative(direction, extendedRtpCapabilities, settings) {
		_classCallCheck(this, ReactNative);

		logger.debug('constructor() [direction:%s, extendedRtpCapabilities:%o]', direction, extendedRtpCapabilities);

		var rtpParametersByKind = void 0;

		switch (direction) {
			case 'send':
				{
					rtpParametersByKind = {
						audio: ortc.getSendingRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getSendingRtpParameters('video', extendedRtpCapabilities)
					};

					return new SendHandler(rtpParametersByKind, settings);
				}
			case 'recv':
				{
					rtpParametersByKind = {
						audio: ortc.getReceivingFullRtpParameters('audio', extendedRtpCapabilities),
						video: ortc.getReceivingFullRtpParameters('video', extendedRtpCapabilities)
					};

					return new RecvHandler(rtpParametersByKind, settings);
				}
		}
	}

	return ReactNative;
}();

exports.default = ReactNative;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _errors = __webpack_require__(6);

var _ortc = __webpack_require__(3);

var ortc = _interopRequireWildcard(_ortc);

var _Device = __webpack_require__(7);

var _Device2 = _interopRequireDefault(_Device);

var _Transport = __webpack_require__(35);

var _Transport2 = _interopRequireDefault(_Transport);

var _Producer = __webpack_require__(37);

var _Producer2 = _interopRequireDefault(_Producer);

var _Peer = __webpack_require__(38);

var _Peer2 = _interopRequireDefault(_Peer);

var _Consumer = __webpack_require__(39);

var _Consumer2 = _interopRequireDefault(_Consumer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default('Room');

var RoomState = {
	new: 'new',
	joining: 'joining',
	joined: 'joined',
	closed: 'closed'
};

/**
 * An instance of Room represents a remote multi conference and a local
 * peer that joins it.
 */

var Room = function (_EnhancedEventEmitter) {
	_inherits(Room, _EnhancedEventEmitter);

	/**
  * Room class.
  *
  * @param {Object} [options]
  * @param {Object} [roomSettings] Remote room settings, including its RTP
  * capabilities, mandatory codecs, etc. If given, no 'queryRoom' request is sent
  * to the server to discover them.
  * @param {Number} [options.requestTimeout=10000] - Timeout for sent requests
  * (in milliseconds). Defaults to 10000 (10 seconds).
  * @param {Object} [options.transportOptions] - Options for Transport created in mediasoup.
  * @param {Array<RTCIceServer>} [options.turnServers] - Array of TURN servers.
  *
  * @throws {Error} if device is not supported.
  *
  * @emits {request: Object, callback: Function, errback: Function} request
  * @emits {notification: Object} notify
  * @emits {peer: Peer} newpeer
  * @emits {originator: String, [appData]: Any} close
  */
	function Room(options) {
		_classCallCheck(this, Room);

		var _this = _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this, logger));

		logger.debug('constructor() [options:%o]', options);

		if (!_Device2.default.isSupported()) throw new Error('current browser/device not supported');

		options = options || {};

		// Computed settings.
		// @type {Object}
		_this._settings = {
			roomSettings: options.roomSettings,
			requestTimeout: options.requestTimeout || 10000,
			transportOptions: options.transportOptions || {},
			turnServers: options.turnServers || []
		};

		// Room state.
		// @type {Boolean}
		_this._state = RoomState.new;

		// My mediasoup Peer name.
		// @type {String}
		_this._peerName = null;

		// Map of Transports indexed by id.
		// @type {map<Number, Transport>}
		_this._transports = new Map();

		// Map of Producers indexed by id.
		// @type {map<Number, Producer>}
		_this._producers = new Map();

		// Map of Peers indexed by name.
		// @type {map<String, Peer>}
		_this._peers = new Map();

		// Extended RTP capabilities.
		// @type {Object}
		_this._extendedRtpCapabilities = null;

		// Whether we can send audio/video based on computed extended RTP
		// capabilities.
		// @type {Object}
		_this._canSendByKind = {
			audio: false,
			video: false
		};
		return _this;
	}

	/**
  * Whether the Room is joined.
  *
  * @return {Boolean}
  */


	_createClass(Room, [{
		key: 'getTransportById',


		/**
   * Get the Transport with the given id.
   *
   * @param {Number} id
   *
   * @return {Transport}
   */
		value: function getTransportById(id) {
			return this._transports.get(id);
		}

		/**
   * Get the Producer with the given id.
   *
   * @param {Number} id
   *
   * @return {Producer}
   */

	}, {
		key: 'getProducerById',
		value: function getProducerById(id) {
			return this._producers.get(id);
		}

		/**
   * Get the Peer with the given name.
   *
   * @param {String} name
   *
   * @return {Peer}
   */

	}, {
		key: 'getPeerByName',
		value: function getPeerByName(name) {
			return this._peers.get(name);
		}

		/**
   * Start the procedures to join a remote room.
   * @param {String} peerName - My mediasoup Peer name.
   * @param {Any} [appData] - App custom data.
   * @return {Promise}
   */

	}, {
		key: 'join',
		value: function join(peerName, appData) {
			var _this2 = this;

			logger.debug('join() [peerName:"%s"]', peerName);

			if (typeof peerName !== 'string') return Promise.reject(new TypeError('invalid peerName'));

			if (this._state !== RoomState.new && this._state !== RoomState.closed) {
				return Promise.reject(new _errors.InvalidStateError('invalid state "' + this._state + '"'));
			}

			this._peerName = peerName;
			this._state = RoomState.joining;

			var roomSettings = void 0;

			return Promise.resolve().then(function () {
				// If Room settings are provided don't query them.
				if (_this2._settings.roomSettings) {
					roomSettings = _this2._settings.roomSettings;

					return;
				} else {
					return _this2._sendRequest('queryRoom', { target: 'room' }).then(function (response) {
						roomSettings = response;

						logger.debug('join() | got Room settings:%o', roomSettings);
					});
				}
			}).then(function () {
				return _Device2.default.Handler.getNativeRtpCapabilities();
			}).then(function (nativeRtpCapabilities) {
				logger.debug('join() | native RTP capabilities:%o', nativeRtpCapabilities);

				// Get extended RTP capabilities.
				_this2._extendedRtpCapabilities = ortc.getExtendedRtpCapabilities(nativeRtpCapabilities, roomSettings.rtpCapabilities);

				logger.debug('join() | extended RTP capabilities:%o', _this2._extendedRtpCapabilities);

				// Check unsupported codecs.
				var unsupportedRoomCodecs = ortc.getUnsupportedCodecs(roomSettings.rtpCapabilities, roomSettings.mandatoryCodecPayloadTypes, _this2._extendedRtpCapabilities);

				if (unsupportedRoomCodecs.length > 0) {
					logger.error('%s mandatory room codecs not supported:%o', unsupportedRoomCodecs.length, unsupportedRoomCodecs);

					throw new _errors.UnsupportedError('mandatory room codecs not supported', unsupportedRoomCodecs);
				}

				// Check whether we can send audio/video.
				_this2._canSendByKind.audio = ortc.canSend('audio', _this2._extendedRtpCapabilities);
				_this2._canSendByKind.video = ortc.canSend('video', _this2._extendedRtpCapabilities);

				// Generate our effective RTP capabilities for receiving media.
				var effectiveLocalRtpCapabilities = ortc.getRtpCapabilities(_this2._extendedRtpCapabilities);

				logger.debug('join() | effective local RTP capabilities for receiving:%o', effectiveLocalRtpCapabilities);

				var data = {
					target: 'room',
					peerName: _this2._peerName,
					rtpCapabilities: effectiveLocalRtpCapabilities,
					appData: appData
				};

				return _this2._sendRequest('join', data).then(function (response) {
					return response.peers;
				});
			}).then(function (peers) {
				// Handle Peers already existing in the room.
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = (peers || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var peerData = _step.value;

						try {
							_this2._handlePeerData(peerData);
						} catch (error) {
							logger.error('join() | error handling Peer:%o', error);
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				_this2._state = RoomState.joined;

				logger.debug('join() | joined the Room');

				// Return the list of already existing Peers.
				return _this2.peers;
			}).catch(function (error) {
				_this2._state = RoomState.new;

				throw error;
			});
		}

		/**
   * Leave the Room.
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'leave',
		value: function leave(appData) {
			logger.debug('leave()');

			if (this.closed) return;

			// Send a notification.
			this._sendNotification('leave', { appData: appData });

			// Set closed state after sending the notification (otherwise the
			// notification won't be sent).
			this._state = RoomState.closed;

			this.safeEmit('close', 'local', appData);

			// Close all the Transports.
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this._transports.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var transport = _step2.value;

					transport.close();
				}

				// Close all the Producers.
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this._producers.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var producer = _step3.value;

					producer.close();
				}

				// Close all the Peers.
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this._peers.values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var peer = _step4.value;

					peer.close();
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		}

		/**
   * The remote Room was closed or our remote Peer has been closed.
   * Invoked via remote notification or via API.
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'remoteClose',
		value: function remoteClose(appData) {
			logger.debug('remoteClose()');

			if (this.closed) return;

			this._state = RoomState.closed;

			this.safeEmit('close', 'remote', appData);

			// Close all the Transports.
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = this._transports.values()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var transport = _step5.value;

					transport.remoteClose();
				}

				// Close all the Producers.
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			var _iteratorNormalCompletion6 = true;
			var _didIteratorError6 = false;
			var _iteratorError6 = undefined;

			try {
				for (var _iterator6 = this._producers.values()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
					var producer = _step6.value;

					producer.remoteClose();
				}

				// Close all the Peers.
			} catch (err) {
				_didIteratorError6 = true;
				_iteratorError6 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion6 && _iterator6.return) {
						_iterator6.return();
					}
				} finally {
					if (_didIteratorError6) {
						throw _iteratorError6;
					}
				}
			}

			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = this._peers.values()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var peer = _step7.value;

					peer.remoteClose();
				}
			} catch (err) {
				_didIteratorError7 = true;
				_iteratorError7 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion7 && _iterator7.return) {
						_iterator7.return();
					}
				} finally {
					if (_didIteratorError7) {
						throw _iteratorError7;
					}
				}
			}
		}

		/**
   * Whether we can send audio/video.
   *
   * @param {String} kind - 'audio' or 'video'.
   *
   * @return {Boolean}
   */

	}, {
		key: 'canSend',
		value: function canSend(kind) {
			if (!this.joined) throw new _errors.InvalidStateError('invalid state "' + this._state + '"');else if (kind !== 'audio' && kind !== 'video') throw new TypeError('invalid kind "' + kind + '"');

			return this._canSendByKind[kind];
		}

		/**
   * Creates a Transport.
   *
   * @param {String} direction - Must be 'send' or 'recv'.
   * @param {Any} [appData] - App custom data.
   *
   * @return {Transport}
   *
   * @throws {InvalidStateError} if not joined.
   * @throws {TypeError} if wrong arguments.
   */

	}, {
		key: 'createTransport',
		value: function createTransport(direction, appData) {
			var _this3 = this;

			logger.debug('createTransport() [direction:%s]', direction);

			if (!this.joined) throw new _errors.InvalidStateError('invalid state "' + this._state + '"');else if (direction !== 'send' && direction !== 'recv') throw new TypeError('invalid direction "' + direction + '"');

			// Create a new Transport.
			var transport = new _Transport2.default(direction, this._extendedRtpCapabilities, this._settings, appData);

			// Store it.
			this._transports.set(transport.id, transport);

			transport.on('@request', function (method, data, callback, errback) {
				_this3._sendRequest(method, data).then(callback).catch(errback);
			});

			transport.on('@notify', function (method, data) {
				_this3._sendNotification(method, data);
			});

			transport.on('@close', function () {
				_this3._transports.delete(transport.id);
			});

			return transport;
		}

		/**
   * Creates a Producer.
   *
   * @param {MediaStreamTrack} track
   * @param {Object} [options]
   * @param {Object} [options.simulcast]
   * @param {Any} [appData] - App custom data.
   *
   * @return {Producer}
   *
   * @throws {InvalidStateError} if not joined.
   * @throws {TypeError} if wrong arguments.
   * @throws {Error} if cannot send the given kind.
   */

	}, {
		key: 'createProducer',
		value: function createProducer(track, options, appData) {
			var _this4 = this;

			logger.debug('createProducer() [track:%o, options:%o]', track, options);

			if (!this.joined) throw new _errors.InvalidStateError('invalid state "' + this._state + '"');else if (!(track instanceof MediaStreamTrack)) throw new TypeError('track is not a MediaStreamTrack');else if (!this._canSendByKind[track.kind]) throw new Error('cannot send ' + track.kind);else if (track.readyState === 'ended') throw new Error('track.readyState is "ended"');

			options = options || {};

			// Create a new Producer.
			var producer = new _Producer2.default(track, options, appData);

			// Store it.
			this._producers.set(producer.id, producer);

			producer.on('@close', function () {
				_this4._producers.delete(producer.id);
			});

			return producer;
		}

		/**
   * Produce a ICE restart in all the Transports.
   */

	}, {
		key: 'restartIce',
		value: function restartIce() {
			if (!this.joined) throw new _errors.InvalidStateError('invalid state "' + this._state + '"');

			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = this._transports.values()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var transport = _step8.value;

					transport.restartIce();
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8.return) {
						_iterator8.return();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}
		}

		/**
   * Provide the local Room with a notification generated by mediasoup server.
   *
   * @param {Object} notification
   */

	}, {
		key: 'receiveNotification',
		value: function receiveNotification(notification) {
			var _this5 = this;

			if (this.closed) return Promise.reject(new _errors.InvalidStateError('Room closed'));else if ((typeof notification === 'undefined' ? 'undefined' : _typeof(notification)) !== 'object') return Promise.reject(new TypeError('wrong notification Object'));else if (notification.notification !== true) return Promise.reject(new TypeError('not a notification'));else if (typeof notification.method !== 'string') return Promise.reject(new TypeError('wrong/missing notification method'));

			var method = notification.method;


			logger.debug('receiveNotification() [method:%s, notification:%o]', method, notification);

			return Promise.resolve().then(function () {
				switch (method) {
					case 'closed':
						{
							var appData = notification.appData;


							_this5.remoteClose(appData);

							break;
						}

					case 'transportClosed':
						{
							var id = notification.id,
							    _appData = notification.appData;

							var transport = _this5._transports.get(id);

							if (!transport) throw new Error('Transport not found [id:"' + id + '"]');

							transport.remoteClose(_appData);

							break;
						}

					case 'transportStats':
						{
							var _id = notification.id,
							    stats = notification.stats;

							var _transport = _this5._transports.get(_id);

							if (!_transport) throw new Error('transport not found [id:' + _id + ']');

							_transport.remoteStats(stats);

							break;
						}

					case 'newPeer':
						{
							var name = notification.name;


							if (_this5._peers.has(name)) throw new Error('Peer already exists [name:"' + name + '"]');

							var peerData = notification;

							_this5._handlePeerData(peerData);

							break;
						}

					case 'peerClosed':
						{
							var peerName = notification.name;
							var _appData2 = notification.appData;

							var peer = _this5._peers.get(peerName);

							if (!peer) throw new Error('no Peer found [name:"' + peerName + '"]');

							peer.remoteClose(_appData2);

							break;
						}

					case 'producerPaused':
						{
							var _id2 = notification.id,
							    _appData3 = notification.appData;

							var producer = _this5._producers.get(_id2);

							if (!producer) throw new Error('Producer not found [id:' + _id2 + ']');

							producer.remotePause(_appData3);

							break;
						}

					case 'producerResumed':
						{
							var _id3 = notification.id,
							    _appData4 = notification.appData;

							var _producer = _this5._producers.get(_id3);

							if (!_producer) throw new Error('Producer not found [id:' + _id3 + ']');

							_producer.remoteResume(_appData4);

							break;
						}

					case 'producerClosed':
						{
							var _id4 = notification.id,
							    _appData5 = notification.appData;

							var _producer2 = _this5._producers.get(_id4);

							if (!_producer2) throw new Error('Producer not found [id:' + _id4 + ']');

							_producer2.remoteClose(_appData5);

							break;
						}

					case 'producerStats':
						{
							var _id5 = notification.id,
							    _stats = notification.stats;

							var _producer3 = _this5._producers.get(_id5);

							if (!_producer3) throw new Error('Producer not found [id:' + _id5 + ']');

							_producer3.remoteStats(_stats);

							break;
						}

					case 'newConsumer':
						{
							var _peerName = notification.peerName;

							var _peer = _this5._peers.get(_peerName);

							if (!_peer) throw new Error('no Peer found [name:"' + _peerName + '"]');

							var consumerData = notification;

							_this5._handleConsumerData(consumerData, _peer);

							break;
						}

					case 'consumerClosed':
						{
							var _id6 = notification.id,
							    _peerName2 = notification.peerName,
							    _appData6 = notification.appData;

							var _peer2 = _this5._peers.get(_peerName2);

							if (!_peer2) throw new Error('no Peer found [name:"' + _peerName2 + '"]');

							var consumer = _peer2.getConsumerById(_id6);

							if (!consumer) throw new Error('Consumer not found [id:' + _id6 + ']');

							consumer.remoteClose(_appData6);

							break;
						}

					case 'consumerPaused':
						{
							var _id7 = notification.id,
							    _peerName3 = notification.peerName,
							    _appData7 = notification.appData;

							var _peer3 = _this5._peers.get(_peerName3);

							if (!_peer3) throw new Error('no Peer found [name:"' + _peerName3 + '"]');

							var _consumer = _peer3.getConsumerById(_id7);

							if (!_consumer) throw new Error('Consumer not found [id:' + _id7 + ']');

							_consumer.remotePause(_appData7);

							break;
						}

					case 'consumerResumed':
						{
							var _id8 = notification.id,
							    _peerName4 = notification.peerName,
							    _appData8 = notification.appData;

							var _peer4 = _this5._peers.get(_peerName4);

							if (!_peer4) throw new Error('no Peer found [name:"' + _peerName4 + '"]');

							var _consumer2 = _peer4.getConsumerById(_id8);

							if (!_consumer2) throw new Error('Consumer not found [id:' + _id8 + ']');

							_consumer2.remoteResume(_appData8);

							break;
						}

					case 'consumerPreferredProfileSet':
						{
							var _id9 = notification.id,
							    _peerName5 = notification.peerName,
							    profile = notification.profile;

							var _peer5 = _this5._peers.get(_peerName5);

							if (!_peer5) throw new Error('no Peer found [name:"' + _peerName5 + '"]');

							var _consumer3 = _peer5.getConsumerById(_id9);

							if (!_consumer3) throw new Error('Consumer not found [id:' + _id9 + ']');

							_consumer3.remoteSetPreferredProfile(profile);

							break;
						}

					case 'consumerEffectiveProfileChanged':
						{
							var _id10 = notification.id,
							    _peerName6 = notification.peerName,
							    _profile = notification.profile;

							var _peer6 = _this5._peers.get(_peerName6);

							if (!_peer6) throw new Error('no Peer found [name:"' + _peerName6 + '"]');

							var _consumer4 = _peer6.getConsumerById(_id10);

							if (!_consumer4) throw new Error('Consumer not found [id:' + _id10 + ']');

							_consumer4.remoteEffectiveProfileChanged(_profile);

							break;
						}

					case 'consumerStats':
						{
							var _id11 = notification.id,
							    _peerName7 = notification.peerName,
							    _stats2 = notification.stats;

							var _peer7 = _this5._peers.get(_peerName7);

							if (!_peer7) throw new Error('no Peer found [name:"' + _peerName7 + '"]');

							var _consumer5 = _peer7.getConsumerById(_id11);

							if (!_consumer5) throw new Error('Consumer not found [id:' + _id11 + ']');

							_consumer5.remoteStats(_stats2);

							break;
						}

					default:
						throw new Error('unknown notification method "' + method + '"');
				}
			}).catch(function (error) {
				logger.error('receiveNotification() failed [notification:%o]: %s', notification, error);
			});
		}
	}, {
		key: '_sendRequest',
		value: function _sendRequest(method, data) {
			var _this6 = this;

			var request = Object.assign({ method: method, target: 'peer' }, data);

			// Should never happen.
			// Ignore if closed.
			if (this.closed) {
				logger.error('_sendRequest() | Room closed [method:%s, request:%o]', method, request);

				return Promise.reject(new _errors.InvalidStateError('Room closed'));
			}

			logger.debug('_sendRequest() [method:%s, request:%o]', method, request);

			return new Promise(function (resolve, reject) {
				var done = false;

				var timer = setTimeout(function () {
					logger.error('request failed [method:%s]: timeout', method);

					done = true;
					reject(new _errors.TimeoutError('timeout'));
				}, _this6._settings.requestTimeout);

				var callback = function callback(response) {
					if (done) return;

					done = true;
					clearTimeout(timer);

					if (_this6.closed) {
						logger.error('request failed [method:%s]: Room closed', method);

						reject(new Error('Room closed'));

						return;
					}

					logger.debug('request succeeded [method:%s, response:%o]', method, response);

					resolve(response);
				};

				var errback = function errback(error) {
					if (done) return;

					done = true;
					clearTimeout(timer);

					if (_this6.closed) {
						logger.error('request failed [method:%s]: Room closed', method);

						reject(new Error('Room closed'));

						return;
					}

					// Make sure message is an Error.
					if (!(error instanceof Error)) error = new Error(String(error));

					logger.error('request failed [method:%s]:%o', method, error);

					reject(error);
				};

				_this6.safeEmit('request', request, callback, errback);
			});
		}
	}, {
		key: '_sendNotification',
		value: function _sendNotification(method, data) {
			// Ignore if closed.
			if (this.closed) return;

			var notification = Object.assign({ method: method, target: 'peer', notification: true }, data);

			logger.debug('_sendNotification() [method:%s, notification:%o]', method, notification);

			this.safeEmit('notify', notification);
		}
	}, {
		key: '_handlePeerData',
		value: function _handlePeerData(peerData) {
			var _this7 = this;

			var name = peerData.name,
			    consumers = peerData.consumers,
			    appData = peerData.appData;

			var peer = new _Peer2.default(name, appData);

			// Store it.
			this._peers.set(peer.name, peer);

			peer.on('@close', function () {
				_this7._peers.delete(peer.name);
			});

			// Add consumers.
			var _iteratorNormalCompletion9 = true;
			var _didIteratorError9 = false;
			var _iteratorError9 = undefined;

			try {
				for (var _iterator9 = consumers[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
					var consumerData = _step9.value;

					try {
						this._handleConsumerData(consumerData, peer);
					} catch (error) {
						logger.error('error handling existing Consumer in Peer:%o', error);
					}
				}

				// If already joined emit event.
			} catch (err) {
				_didIteratorError9 = true;
				_iteratorError9 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion9 && _iterator9.return) {
						_iterator9.return();
					}
				} finally {
					if (_didIteratorError9) {
						throw _iteratorError9;
					}
				}
			}

			if (this.joined) this.safeEmit('newpeer', peer);
		}
	}, {
		key: '_handleConsumerData',
		value: function _handleConsumerData(producerData, peer) {
			var id = producerData.id,
			    kind = producerData.kind,
			    rtpParameters = producerData.rtpParameters,
			    paused = producerData.paused,
			    appData = producerData.appData;

			var consumer = new _Consumer2.default(id, kind, rtpParameters, peer, appData);
			var supported = ortc.canReceive(consumer.rtpParameters, this._extendedRtpCapabilities);

			if (supported) consumer.setSupported(true);

			if (paused) consumer.remotePause();

			peer.addConsumer(consumer);
		}
	}, {
		key: 'joined',
		get: function get() {
			return this._state === RoomState.joined;
		}

		/**
   * Whether the Room is closed.
   *
   * @return {Boolean}
   */

	}, {
		key: 'closed',
		get: function get() {
			return this._state === RoomState.closed;
		}

		/**
   * My mediasoup Peer name.
   *
   * @return {String}
   */

	}, {
		key: 'peerName',
		get: function get() {
			return this._peerName;
		}

		/**
   * The list of Transports.
   *
   * @return {Array<Transport>}
   */

	}, {
		key: 'transports',
		get: function get() {
			return Array.from(this._transports.values());
		}

		/**
   * The list of Producers.
   *
   * @return {Array<Producer>}
   */

	}, {
		key: 'producers',
		get: function get() {
			return Array.from(this._producers.values());
		}

		/**
   * The list of Peers.
   *
   * @return {Array<Peer>}
   */

	}, {
		key: 'peers',
		get: function get() {
			return Array.from(this._peers.values());
		}
	}]);

	return Room;
}(_EnhancedEventEmitter3.default);

exports.default = Room;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _errors = __webpack_require__(6);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _Device = __webpack_require__(7);

var _Device2 = _interopRequireDefault(_Device);

var _CommandQueue = __webpack_require__(36);

var _CommandQueue2 = _interopRequireDefault(_CommandQueue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_STATS_INTERVAL = 1000;

var logger = new _Logger2.default('Transport');

var Transport = function (_EnhancedEventEmitter) {
	_inherits(Transport, _EnhancedEventEmitter);

	/**
  * @private
  *
  * @emits {state: String} connectionstatechange
  * @emits {stats: Object} stats
  * @emits {originator: String, [appData]: Any} close
  *
  * @emits {method: String, [data]: Object, callback: Function, errback: Function} @request
  * @emits {method: String, [data]: Object} @notify
  * @emits @close
  */
	function Transport(direction, extendedRtpCapabilities, settings, appData) {
		_classCallCheck(this, Transport);

		var _this = _possibleConstructorReturn(this, (Transport.__proto__ || Object.getPrototypeOf(Transport)).call(this, logger));

		logger.debug('constructor() [direction:%s, extendedRtpCapabilities:%o]', direction, extendedRtpCapabilities);

		// Id.
		// @type {Number}
		_this._id = utils.randomNumber();

		// Closed flag.
		// @type {Boolean}
		_this._closed = false;

		// Direction.
		// @type {String}
		_this._direction = direction;

		// Room settings.
		// @type {Object}
		_this._settings = settings;

		// App custom data.
		// @type {Any}
		_this._appData = appData;

		// Periodic stats flag.
		// @type {Boolean}
		_this._statsEnabled = false;

		// Commands handler.
		// @type {CommandQueue}
		_this._commandQueue = new _CommandQueue2.default();

		// Device specific handler.
		_this._handler = new _Device2.default.Handler(direction, extendedRtpCapabilities, settings);

		// Transport state. Values can be:
		// 'new'/'connecting'/'connected'/'failed'/'disconnected'/'closed'
		// @type {String}
		_this._connectionState = 'new';

		_this._commandQueue.on('exec', _this._execCommand.bind(_this));

		_this._handleHandler();
		return _this;
	}

	/**
  * Transport id.
  *
  * @return {Number}
  */


	_createClass(Transport, [{
		key: 'close',


		/**
   * Close the Transport.
   *
   * @param {Any} [appData] - App custom data.
   */
		value: function close(appData) {
			logger.debug('close()');

			if (this._closed) return;

			this._closed = true;

			if (this._statsEnabled) {
				this._statsEnabled = false;
				this.disableStats();
			}

			this.safeEmit('@notify', 'closeTransport', { id: this._id, appData: appData });

			this.emit('@close');
			this.safeEmit('close', 'local', appData);

			this._destroy();
		}

		/**
   * My remote Transport was closed.
   * Invoked via remote notification.
   *
   * @private
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'remoteClose',
		value: function remoteClose(appData) {
			logger.debug('remoteClose()');

			if (this._closed) return;

			this._closed = true;

			this.emit('@close');
			this.safeEmit('close', 'remote', appData);

			this._destroy();
		}
	}, {
		key: '_destroy',
		value: function _destroy() {
			// Close the CommandQueue.
			this._commandQueue.close();

			// Close the handler.
			this._handler.close();
		}
	}, {
		key: 'restartIce',
		value: function restartIce() {
			var _this2 = this;

			logger.debug('restartIce()');

			if (this._closed) return;else if (this._connectionState === 'new') return;

			Promise.resolve().then(function () {
				var data = {
					id: _this2._id
				};

				return _this2.safeEmitAsPromise('@request', 'restartTransport', data);
			}).then(function (response) {
				var remoteIceParameters = response.iceParameters;

				// Enqueue command.
				return _this2._commandQueue.push('restartIce', { remoteIceParameters: remoteIceParameters });
			}).catch(function (error) {
				logger.error('restartIce() | failed: %o', error);
			});
		}
	}, {
		key: 'enableStats',
		value: function enableStats() {
			var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATS_INTERVAL;

			logger.debug('enableStats() [interval:%s]', interval);

			if (typeof interval !== 'number' || interval < 1000) interval = DEFAULT_STATS_INTERVAL;

			this._statsEnabled = true;

			var data = {
				id: this._id,
				interval: interval
			};

			this.safeEmit('@notify', 'enableTransportStats', data);
		}
	}, {
		key: 'disableStats',
		value: function disableStats() {
			logger.debug('disableStats()');

			this._statsEnabled = false;

			var data = {
				id: this._id
			};

			this.safeEmit('@notify', 'disableTransportStats', data);
		}
	}, {
		key: '_handleHandler',
		value: function _handleHandler() {
			var _this3 = this;

			var handler = this._handler;

			handler.on('@connectionstatechange', function (state) {
				if (_this3._connectionState === state) return;

				logger.debug('Transport connection state changed to %s', state);

				_this3._connectionState = state;

				if (!_this3._closed) _this3.safeEmit('connectionstatechange', state);
			});

			handler.on('@needcreatetransport', function (transportLocalParameters, callback, errback) {
				var data = {
					id: _this3._id,
					direction: _this3._direction,
					options: _this3._settings.transportOptions,
					appData: _this3._appData
				};

				if (transportLocalParameters) data.dtlsParameters = transportLocalParameters.dtlsParameters;

				_this3.safeEmit('@request', 'createTransport', data, callback, errback);
			});

			handler.on('@needupdatetransport', function (transportLocalParameters) {
				var data = {
					id: _this3._id,
					dtlsParameters: transportLocalParameters.dtlsParameters
				};

				_this3.safeEmit('@notify', 'updateTransport', data);
			});

			handler.on('@needupdateproducer', function (producer, rtpParameters) {
				var data = {
					id: producer.id,
					rtpParameters: rtpParameters
				};

				// Update Producer RTP parameters.
				producer.setRtpParameters(rtpParameters);

				// Notify the server.
				_this3.safeEmit('@notify', 'updateProducer', data);
			});
		}

		/**
   * Send the given Producer over this Transport.
   *
   * @private
   *
   * @param {Producer} producer
   *
   * @return {Promise}
   */

	}, {
		key: 'addProducer',
		value: function addProducer(producer) {
			logger.debug('addProducer() [producer:%o]', producer);

			if (this._closed) return Promise.reject(new _errors.InvalidStateError('Transport closed'));
			if (this._direction !== 'send') return Promise.reject(new Error('not a sending Transport'));

			// Enqueue command.
			return this._commandQueue.push('addProducer', { producer: producer });
		}

		/**
   * @private
   */

	}, {
		key: 'removeProducer',
		value: function removeProducer(producer, originator, appData) {
			logger.debug('removeProducer() [producer:%o]', producer);

			// Enqueue command.
			if (!this._closed) {
				this._commandQueue.push('removeProducer', { producer: producer }).catch(function () {});
			}

			if (originator === 'local') this.safeEmit('@notify', 'closeProducer', { id: producer.id, appData: appData });
		}

		/**
   * @private
   */

	}, {
		key: 'pauseProducer',
		value: function pauseProducer(producer, appData) {
			logger.debug('pauseProducer() [producer:%o]', producer);

			var data = {
				id: producer.id,
				appData: appData
			};

			this.safeEmit('@notify', 'pauseProducer', data);
		}

		/**
   * @private
   */

	}, {
		key: 'resumeProducer',
		value: function resumeProducer(producer, appData) {
			logger.debug('resumeProducer() [producer:%o]', producer);

			var data = {
				id: producer.id,
				appData: appData
			};

			this.safeEmit('@notify', 'resumeProducer', data);
		}

		/**
   * @private
   *
   * @return {Promise}
   */

	}, {
		key: 'replaceProducerTrack',
		value: function replaceProducerTrack(producer, track) {
			logger.debug('replaceProducerTrack() [producer:%o]', producer);

			return this._commandQueue.push('replaceProducerTrack', { producer: producer, track: track });
		}

		/**
   * @private
   */

	}, {
		key: 'enableProducerStats',
		value: function enableProducerStats(producer, interval) {
			logger.debug('enableProducerStats() [producer:%o]', producer);

			var data = {
				id: producer.id,
				interval: interval
			};

			this.safeEmit('@notify', 'enableProducerStats', data);
		}

		/**
   * @private
   */

	}, {
		key: 'disableProducerStats',
		value: function disableProducerStats(producer) {
			logger.debug('disableProducerStats() [producer:%o]', producer);

			var data = {
				id: producer.id
			};

			this.safeEmit('@notify', 'disableProducerStats', data);
		}

		/**
   * Receive the given Consumer over this Transport.
   *
   * @private
   *
   * @param {Consumer} consumer
   *
   * @return {Promise} Resolves to a remote MediaStreamTrack.
   */

	}, {
		key: 'addConsumer',
		value: function addConsumer(consumer) {
			logger.debug('addConsumer() [consumer:%o]', consumer);

			if (this._closed) return Promise.reject(new _errors.InvalidStateError('Transport closed'));
			if (this._direction !== 'recv') return Promise.reject(new Error('not a receiving Transport'));

			// Enqueue command.
			return this._commandQueue.push('addConsumer', { consumer: consumer });
		}

		/**
   * @private
   */

	}, {
		key: 'removeConsumer',
		value: function removeConsumer(consumer) {
			logger.debug('removeConsumer() [consumer:%o]', consumer);

			// Enqueue command.
			this._commandQueue.push('removeConsumer', { consumer: consumer }).catch(function () {});
		}

		/**
   * @private
   */

	}, {
		key: 'pauseConsumer',
		value: function pauseConsumer(consumer, appData) {
			logger.debug('pauseConsumer() [consumer:%o]', consumer);

			var data = {
				id: consumer.id,
				appData: appData
			};

			this.safeEmit('@notify', 'pauseConsumer', data);
		}

		/**
   * @private
   */

	}, {
		key: 'resumeConsumer',
		value: function resumeConsumer(consumer, appData) {
			logger.debug('resumeConsumer() [consumer:%o]', consumer);

			var data = {
				id: consumer.id,
				appData: appData
			};

			this.safeEmit('@notify', 'resumeConsumer', data);
		}

		/**
   * @private
   */

	}, {
		key: 'setConsumerPreferredProfile',
		value: function setConsumerPreferredProfile(consumer, profile) {
			logger.debug('setConsumerPreferredProfile() [consumer:%o]', consumer);

			var data = {
				id: consumer.id,
				profile: profile
			};

			this.safeEmit('@notify', 'setConsumerPreferredProfile', data);
		}

		/**
   * @private
   */

	}, {
		key: 'enableConsumerStats',
		value: function enableConsumerStats(consumer, interval) {
			logger.debug('enableConsumerStats() [consumer:%o]', consumer);

			var data = {
				id: consumer.id,
				interval: interval
			};

			this.safeEmit('@notify', 'enableConsumerStats', data);
		}

		/**
   * @private
   */

	}, {
		key: 'disableConsumerStats',
		value: function disableConsumerStats(consumer) {
			logger.debug('disableConsumerStats() [consumer:%o]', consumer);

			var data = {
				id: consumer.id
			};

			this.safeEmit('@notify', 'disableConsumerStats', data);
		}

		/**
   * Receive remote stats.
   *
   * @private
   *
   * @param {Object} stats
   */

	}, {
		key: 'remoteStats',
		value: function remoteStats(stats) {
			this.safeEmit('stats', stats);
		}
	}, {
		key: '_execCommand',
		value: function _execCommand(command, promiseHolder) {
			var promise = void 0;

			try {
				switch (command.method) {
					case 'addProducer':
						{
							var producer = command.producer;


							promise = this._execAddProducer(producer);
							break;
						}

					case 'removeProducer':
						{
							var _producer = command.producer;


							promise = this._execRemoveProducer(_producer);
							break;
						}

					case 'replaceProducerTrack':
						{
							var _producer2 = command.producer,
							    track = command.track;


							promise = this._execReplaceProducerTrack(_producer2, track);
							break;
						}

					case 'addConsumer':
						{
							var consumer = command.consumer;


							promise = this._execAddConsumer(consumer);
							break;
						}

					case 'removeConsumer':
						{
							var _consumer = command.consumer;


							promise = this._execRemoveConsumer(_consumer);
							break;
						}

					case 'restartIce':
						{
							var remoteIceParameters = command.remoteIceParameters;


							promise = this._execRestartIce(remoteIceParameters);
							break;
						}

					default:
						{
							promise = Promise.reject(new Error('unknown command method "' + command.method + '"'));
						}
				}
			} catch (error) {
				promise = Promise.reject(error);
			}

			// Fill the given Promise holder.
			promiseHolder.promise = promise;
		}
	}, {
		key: '_execAddProducer',
		value: function _execAddProducer(producer) {
			var _this4 = this;

			logger.debug('_execAddProducer()');

			var producerRtpParameters = void 0;

			// Call the handler.
			return Promise.resolve().then(function () {
				return _this4._handler.addProducer(producer);
			}).then(function (rtpParameters) {
				producerRtpParameters = rtpParameters;

				var data = {
					id: producer.id,
					kind: producer.kind,
					transportId: _this4._id,
					rtpParameters: rtpParameters,
					paused: producer.locallyPaused,
					appData: producer.appData
				};

				return _this4.safeEmitAsPromise('@request', 'createProducer', data);
			}).then(function () {
				producer.setRtpParameters(producerRtpParameters);
			});
		}
	}, {
		key: '_execRemoveProducer',
		value: function _execRemoveProducer(producer) {
			logger.debug('_execRemoveProducer()');

			// Call the handler.
			return this._handler.removeProducer(producer);
		}
	}, {
		key: '_execReplaceProducerTrack',
		value: function _execReplaceProducerTrack(producer, track) {
			logger.debug('_execReplaceProducerTrack()');

			// Call the handler.
			return this._handler.replaceProducerTrack(producer, track);
		}
	}, {
		key: '_execAddConsumer',
		value: function _execAddConsumer(consumer) {
			var _this5 = this;

			logger.debug('_execAddConsumer()');

			var consumerTrack = void 0;

			// Call the handler.
			return Promise.resolve().then(function () {
				return _this5._handler.addConsumer(consumer);
			}).then(function (track) {
				consumerTrack = track;

				var data = {
					id: consumer.id,
					transportId: _this5.id,
					paused: consumer.locallyPaused,
					preferredProfile: consumer.preferredProfile
				};

				return _this5.safeEmitAsPromise('@request', 'enableConsumer', data);
			}).then(function (response) {
				var paused = response.paused,
				    preferredProfile = response.preferredProfile,
				    effectiveProfile = response.effectiveProfile;


				if (paused) consumer.remotePause();

				if (preferredProfile) consumer.remoteSetPreferredProfile(preferredProfile);

				if (effectiveProfile) consumer.remoteEffectiveProfileChanged(effectiveProfile);

				return consumerTrack;
			});
		}
	}, {
		key: '_execRemoveConsumer',
		value: function _execRemoveConsumer(consumer) {
			logger.debug('_execRemoveConsumer()');

			// Call the handler.
			return this._handler.removeConsumer(consumer);
		}
	}, {
		key: '_execRestartIce',
		value: function _execRestartIce(remoteIceParameters) {
			logger.debug('_execRestartIce()');

			// Call the handler.
			return this._handler.restartIce(remoteIceParameters);
		}
	}, {
		key: 'id',
		get: function get() {
			return this._id;
		}

		/**
   * Whether the Transport is closed.
   *
   * @return {Boolean}
   */

	}, {
		key: 'closed',
		get: function get() {
			return this._closed;
		}

		/**
   * Transport direction.
   *
   * @return {String}
   */

	}, {
		key: 'direction',
		get: function get() {
			return this._direction;
		}

		/**
   * App custom data.
   *
   * @return {Any}
   */

	}, {
		key: 'appData',
		get: function get() {
			return this._appData;
		}

		/**
   * Connection state.
   *
   * @return {String}
   */

	}, {
		key: 'connectionState',
		get: function get() {
			return this._connectionState;
		}
	}]);

	return Transport;
}(_EnhancedEventEmitter3.default);

exports.default = Transport;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(12);

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _errors = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default('CommandQueue');

var CommandQueue = function (_EventEmitter) {
	_inherits(CommandQueue, _EventEmitter);

	function CommandQueue() {
		_classCallCheck(this, CommandQueue);

		var _this = _possibleConstructorReturn(this, (CommandQueue.__proto__ || Object.getPrototypeOf(CommandQueue)).call(this));

		_this.setMaxListeners(Infinity);

		// Closed flag.
		// @type {Boolean}
		_this._closed = false;

		// Busy running a command.
		// @type {Boolean}
		_this._busy = false;

		// Queue for pending commands. Each command is an Object with method,
		// resolve, reject, and other members (depending the case).
		// @type {Array<Object>}
		_this._queue = [];
		return _this;
	}

	_createClass(CommandQueue, [{
		key: 'close',
		value: function close() {
			this._closed = true;
		}
	}, {
		key: 'push',
		value: function push(method, data) {
			var _this2 = this;

			var command = Object.assign({ method: method }, data);

			logger.debug('push() [method:%s]', method);

			return new Promise(function (resolve, reject) {
				var queue = _this2._queue;

				command.resolve = resolve;
				command.reject = reject;

				// Append command to the queue.
				queue.push(command);
				_this2._handlePendingCommands();
			});
		}
	}, {
		key: '_handlePendingCommands',
		value: function _handlePendingCommands() {
			var _this3 = this;

			if (this._busy) return;

			var queue = this._queue;

			// Take the first command.
			var command = queue[0];

			if (!command) return;

			this._busy = true;

			// Execute it.
			this._handleCommand(command).then(function () {
				_this3._busy = false;

				// Remove the first command (the completed one) from the queue.
				queue.shift();

				// And continue.
				_this3._handlePendingCommands();
			});
		}
	}, {
		key: '_handleCommand',
		value: function _handleCommand(command) {
			var _this4 = this;

			logger.debug('_handleCommand() [method:%s]', command.method);

			if (this._closed) {
				command.reject(new _errors.InvalidStateError('closed'));

				return Promise.resolve();
			}

			var promiseHolder = { promise: null };

			this.emit('exec', command, promiseHolder);

			return Promise.resolve().then(function () {
				return promiseHolder.promise;
			}).then(function (result) {
				logger.debug('_handleCommand() | command succeeded [method:%s]', command.method);

				if (_this4._closed) {
					command.reject(new _errors.InvalidStateError('closed'));

					return;
				}

				// Resolve the command with the given result (if any).
				command.resolve(result);
			}).catch(function (error) {
				logger.error('_handleCommand() | command failed [method:%s]: %o', command.method, error);

				// Reject the command with the error.
				command.reject(error);
			});
		}
	}]);

	return CommandQueue;
}(_events.EventEmitter);

exports.default = CommandQueue;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _errors = __webpack_require__(6);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_STATS_INTERVAL = 1000;
var SIMULCAST_DEFAULT = {
	low: 100000,
	medium: 300000,
	high: 1500000
};

var logger = new _Logger2.default('Producer');

var Producer = function (_EnhancedEventEmitter) {
	_inherits(Producer, _EnhancedEventEmitter);

	/**
  * @private
  *
  * @emits {originator: String, [appData]: Any} pause
  * @emits {originator: String, [appData]: Any} resume
  * @emits {stats: Object} stats
  * @emits handled
  * @emits unhandled
  * @emits trackended
  * @emits {originator: String, [appData]: Any} close
  *
  * @emits {originator: String, [appData]: Any} @close
  */
	function Producer(track, options, appData) {
		_classCallCheck(this, Producer);

		// Id.
		// @type {Number}
		var _this = _possibleConstructorReturn(this, (Producer.__proto__ || Object.getPrototypeOf(Producer)).call(this, logger));

		_this._id = utils.randomNumber();

		// Closed flag.
		// @type {Boolean}
		_this._closed = false;

		// Original track.
		// @type {MediaStreamTrack}
		_this._originalTrack = track;

		// Track cloned from the original one (if supported).
		// @type {MediaStreamTrack}
		try {
			_this._track = track.clone();
		} catch (error) {
			_this._track = track;
		}

		// App custom data.
		// @type {Any}
		_this._appData = appData;

		// Simulcast.
		// @type {Object|false}
		_this._simulcast = false;

		if (_typeof(options.simulcast) === 'object') _this._simulcast = Object.assign({}, SIMULCAST_DEFAULT, options.simulcast);else if (options.simulcast === true) _this._simulcast = Object.assign({}, SIMULCAST_DEFAULT);

		// Associated Transport.
		// @type {Transport}
		_this._transport = null;

		// RTP parameters.
		// @type {RTCRtpParameters}
		_this._rtpParameters = null;

		// Locally paused flag.
		// @type {Boolean}
		_this._locallyPaused = !_this._track.enabled;

		// Remotely paused flag.
		// @type {Boolean}
		_this._remotelyPaused = false;

		// Periodic stats flag.
		// @type {Boolean}
		_this._statsEnabled = false;

		// Periodic stats gathering interval (milliseconds).
		// @type {Number}
		_this._statsInterval = DEFAULT_STATS_INTERVAL;

		// Handle the effective track.
		_this._handleTrack();
		return _this;
	}

	/**
  * Producer id.
  *
  * @return {Number}
  */


	_createClass(Producer, [{
		key: 'close',


		/**
   * Closes the Producer.
   *
   * @param {Any} [appData] - App custom data.
   */
		value: function close(appData) {
			logger.debug('close()');

			if (this._closed) return;

			this._closed = true;

			if (this._statsEnabled) {
				this._statsEnabled = false;

				if (this.transport) {
					this.transport.disableProducerStats(this);
				}
			}

			if (this._transport) this._transport.removeProducer(this, 'local', appData);

			this._destroy();

			this.emit('@close', 'local', appData);
			this.safeEmit('close', 'local', appData);
		}

		/**
   * My remote Producer was closed.
   * Invoked via remote notification.
   *
   * @private
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'remoteClose',
		value: function remoteClose(appData) {
			logger.debug('remoteClose()');

			if (this._closed) return;

			this._closed = true;

			if (this._transport) this._transport.removeProducer(this, 'remote', appData);

			this._destroy();

			this.emit('@close', 'remote', appData);
			this.safeEmit('close', 'remote', appData);
		}
	}, {
		key: '_destroy',
		value: function _destroy() {
			this._transport = false;
			this._rtpParameters = null;

			try {
				this._track.stop();
			} catch (error) {}
		}

		/**
   * Sends RTP.
   *
   * @param {transport} Transport instance.
   *
   * @return {Promise}
   */

	}, {
		key: 'send',
		value: function send(transport) {
			var _this2 = this;

			logger.debug('send() [transport:%o]', transport);

			if (this._closed) return Promise.reject(new _errors.InvalidStateError('Producer closed'));else if (this._transport) return Promise.reject(new Error('already handled by a Transport'));else if ((typeof transport === 'undefined' ? 'undefined' : _typeof(transport)) !== 'object') return Promise.reject(new TypeError('invalid Transport'));

			this._transport = transport;

			return transport.addProducer(this).then(function () {
				transport.once('@close', function () {
					if (_this2._closed || _this2._transport !== transport) return;

					_this2._transport.removeProducer(_this2, 'local');

					_this2._transport = null;
					_this2._rtpParameters = null;

					_this2.safeEmit('unhandled');
				});

				_this2.safeEmit('handled');

				if (_this2._statsEnabled) transport.enableProducerStats(_this2, _this2._statsInterval);
			}).catch(function (error) {
				_this2._transport = null;

				throw error;
			});
		}

		/**
   * Pauses sending media.
   *
   * @param {Any} [appData] - App custom data.
   *
   * @return {Boolean} true if paused.
   */

	}, {
		key: 'pause',
		value: function pause(appData) {
			logger.debug('pause()');

			if (this._closed) {
				logger.error('pause() | Producer closed');

				return false;
			} else if (this._locallyPaused) {
				return true;
			}

			this._locallyPaused = true;
			this._track.enabled = false;

			if (this._transport) this._transport.pauseProducer(this, appData);

			this.safeEmit('pause', 'local', appData);

			// Return true if really paused.
			return this.paused;
		}

		/**
   * My remote Producer was paused.
   * Invoked via remote notification.
   *
   * @private
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'remotePause',
		value: function remotePause(appData) {
			logger.debug('remotePause()');

			if (this._closed || this._remotelyPaused) return;

			this._remotelyPaused = true;
			this._track.enabled = false;

			this.safeEmit('pause', 'remote', appData);
		}

		/**
   * Resumes sending media.
   *
   * @param {Any} [appData] - App custom data.
   *
   * @return {Boolean} true if not paused.
   */

	}, {
		key: 'resume',
		value: function resume(appData) {
			logger.debug('resume()');

			if (this._closed) {
				logger.error('resume() | Producer closed');

				return false;
			} else if (!this._locallyPaused) {
				return true;
			}

			this._locallyPaused = false;

			if (!this._remotelyPaused) this._track.enabled = true;

			if (this._transport) this._transport.resumeProducer(this, appData);

			this.safeEmit('resume', 'local', appData);

			// Return true if not paused.
			return !this.paused;
		}

		/**
   * My remote Producer was resumed.
   * Invoked via remote notification.
   *
   * @private
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'remoteResume',
		value: function remoteResume(appData) {
			logger.debug('remoteResume()');

			if (this._closed || !this._remotelyPaused) return;

			this._remotelyPaused = false;

			if (!this._locallyPaused) this._track.enabled = true;

			this.safeEmit('resume', 'remote', appData);
		}

		/**
   * Replaces the current track with a new one.
   *
   * @param {MediaStreamTrack} track - New track.
   *
   * @return {Promise} Resolves with the new track itself.
   */

	}, {
		key: 'replaceTrack',
		value: function replaceTrack(track) {
			var _this3 = this;

			logger.debug('replaceTrack() [track:%o]', track);

			if (this._closed) return Promise.reject(new _errors.InvalidStateError('Producer closed'));else if (!(track instanceof MediaStreamTrack)) return Promise.reject(new TypeError('track is not a MediaStreamTrack'));else if (track.readyState === 'ended') return Promise.reject(new Error('track.readyState is "ended"'));

			var clonedTrack = void 0;

			try {
				clonedTrack = track.clone();
			} catch (error) {
				clonedTrack = track;
			}

			return Promise.resolve().then(function () {
				// If this Producer is handled by a Transport, we need to tell it about
				// the new track.
				if (_this3._transport) return _this3._transport.replaceProducerTrack(_this3, clonedTrack);
			}).then(function () {
				// Stop the previous track.
				try {
					_this3._track.onended = null;_this3._track.stop();
				} catch (error) {}

				// If this Producer was locally paused/resumed and the state of the new
				// track does not match, fix it.
				if (!_this3.paused) clonedTrack.enabled = true;else clonedTrack.enabled = false;

				// Set the new tracks.
				_this3._originalTrack = track;
				_this3._track = clonedTrack;

				// Handle the effective track.
				_this3._handleTrack();

				// Return the new track.
				return _this3._track;
			});
		}

		/**
   * Set/update RTP parameters.
   *
   * @private
   *
   * @param {RTCRtpParameters} rtpParameters
   */

	}, {
		key: 'setRtpParameters',
		value: function setRtpParameters(rtpParameters) {
			this._rtpParameters = rtpParameters;
		}

		/**
   * Enables periodic stats retrieval.
   */

	}, {
		key: 'enableStats',
		value: function enableStats() {
			var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATS_INTERVAL;

			logger.debug('enableStats() [interval:%s]', interval);

			if (this._closed) {
				logger.error('enableStats() | Producer closed');

				return;
			}

			if (this._statsEnabled) return;

			if (typeof interval !== 'number' || interval < 1000) this._statsInterval = DEFAULT_STATS_INTERVAL;else this._statsInterval = interval;

			this._statsEnabled = true;

			if (this._transport) this._transport.enableProducerStats(this, this._statsInterval);
		}

		/**
   * Disables periodic stats retrieval.
   */

	}, {
		key: 'disableStats',
		value: function disableStats() {
			logger.debug('disableStats()');

			if (this._closed) {
				logger.error('disableStats() | Producer closed');

				return;
			}

			if (!this._statsEnabled) return;

			this._statsEnabled = false;

			if (this._transport) this._transport.disableProducerStats(this);
		}

		/**
   * Receive remote stats.
   *
   * @private
   *
   * @param {Object} stats
   */

	}, {
		key: 'remoteStats',
		value: function remoteStats(stats) {
			this.safeEmit('stats', stats);
		}

		/**
   * @private
   */

	}, {
		key: '_handleTrack',
		value: function _handleTrack() {
			var _this4 = this;

			// If the cloned track is closed (for example if the desktop sharing is closed
			// via chrome UI) notify the app and let it decide wheter to close the Producer
			// or not.
			this._track.onended = function () {
				if (_this4._closed) return;

				logger.warn('track "ended" event');

				_this4.safeEmit('trackended');
			};
		}
	}, {
		key: 'id',
		get: function get() {
			return this._id;
		}

		/**
   * Whether the Producer is closed.
   *
   * @return {Boolean}
   */

	}, {
		key: 'closed',
		get: function get() {
			return this._closed;
		}

		/**
   * Media kind.
   *
   * @return {String}
   */

	}, {
		key: 'kind',
		get: function get() {
			return this._track.kind;
		}

		/**
   * The associated track.
   *
   * @return {MediaStreamTrack}
   */

	}, {
		key: 'track',
		get: function get() {
			return this._track;
		}

		/**
   * The associated original track.
   *
   * @return {MediaStreamTrack}
   */

	}, {
		key: 'originalTrack',
		get: function get() {
			return this._originalTrack;
		}

		/**
   * Simulcast settings.
   *
   * @return {Object|false}
   */

	}, {
		key: 'simulcast',
		get: function get() {
			return this._simulcast;
		}

		/**
   * App custom data.
   *
   * @return {Any}
   */

	}, {
		key: 'appData',
		get: function get() {
			return this._appData;
		}

		/**
   * Associated Transport.
   *
   * @return {Transport}
   */

	}, {
		key: 'transport',
		get: function get() {
			return this._transport;
		}

		/**
   * RTP parameters.
   *
   * @return {RTCRtpParameters}
   */

	}, {
		key: 'rtpParameters',
		get: function get() {
			return this._rtpParameters;
		}

		/**
   * Whether the Producer is locally paused.
   *
   * @return {Boolean}
   */

	}, {
		key: 'locallyPaused',
		get: function get() {
			return this._locallyPaused;
		}

		/**
   * Whether the Producer is remotely paused.
   *
   * @return {Boolean}
   */

	}, {
		key: 'remotelyPaused',
		get: function get() {
			return this._remotelyPaused;
		}

		/**
   * Whether the Producer is paused.
   *
   * @return {Boolean}
   */

	}, {
		key: 'paused',
		get: function get() {
			return this._locallyPaused || this._remotelyPaused;
		}
	}]);

	return Producer;
}(_EnhancedEventEmitter3.default);

exports.default = Producer;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default('Peer');

var Peer = function (_EnhancedEventEmitter) {
	_inherits(Peer, _EnhancedEventEmitter);

	/**
  * @private
  *
  * @emits {consumer: Consumer} newconsumer
  * @emits {originator: String, [appData]: Any} close
  *
  * @emits @close
  */
	function Peer(name, appData) {
		_classCallCheck(this, Peer);

		// Name.
		// @type {String}
		var _this = _possibleConstructorReturn(this, (Peer.__proto__ || Object.getPrototypeOf(Peer)).call(this, logger));

		_this._name = name;

		// Closed flag.
		// @type {Boolean}
		_this._closed = false;

		// App custom data.
		// @type {Any}
		_this._appData = appData;

		// Map of Consumers indexed by id.
		// @type {map<Number, Consumer>}
		_this._consumers = new Map();
		return _this;
	}

	/**
  * Peer name.
  *
  * @return {String}
  */


	_createClass(Peer, [{
		key: 'close',


		/**
   * Closes the Peer.
   * This is called when the local Room is closed.
   *
   * @private
   */
		value: function close() {
			logger.debug('close()');

			if (this._closed) return;

			this._closed = true;

			this.emit('@close');
			this.safeEmit('close', 'local');

			// Close all the Consumers.
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this._consumers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var consumer = _step.value;

					consumer.close();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		/**
   * The remote Peer or Room was closed.
   * Invoked via remote notification.
   *
   * @private
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'remoteClose',
		value: function remoteClose(appData) {
			logger.debug('remoteClose()');

			if (this._closed) return;

			this._closed = true;

			this.emit('@close');
			this.safeEmit('close', 'remote', appData);

			// Close all the Consumers.
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this._consumers.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var consumer = _step2.value;

					consumer.remoteClose();
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}

		/**
   * Get the Consumer with the given id.
   *
   * @param {Number} id
   *
   * @return {Consumer}
   */

	}, {
		key: 'getConsumerById',
		value: function getConsumerById(id) {
			return this._consumers.get(id);
		}

		/**
   * Add an associated Consumer.
   *
   * @private
   *
   * @param {Consumer} consumer
   */

	}, {
		key: 'addConsumer',
		value: function addConsumer(consumer) {
			var _this2 = this;

			if (this._consumers.has(consumer.id)) throw new Error('Consumer already exists [id:' + consumer.id + ']');

			// Store it.
			this._consumers.set(consumer.id, consumer);

			// Handle it.
			consumer.on('@close', function () {
				_this2._consumers.delete(consumer.id);
			});

			// Emit event.
			this.safeEmit('newconsumer', consumer);
		}
	}, {
		key: 'name',
		get: function get() {
			return this._name;
		}

		/**
   * Whether the Peer is closed.
   *
   * @return {Boolean}
   */

	}, {
		key: 'closed',
		get: function get() {
			return this._closed;
		}

		/**
   * App custom data.
   *
   * @return {Any}
   */

	}, {
		key: 'appData',
		get: function get() {
			return this._appData;
		}

		/**
   * The list of Consumers.
   *
   * @return {Array<Consumer>}
   */

	}, {
		key: 'consumers',
		get: function get() {
			return Array.from(this._consumers.values());
		}
	}]);

	return Peer;
}(_EnhancedEventEmitter3.default);

exports.default = Peer;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = __webpack_require__(0);

var _Logger2 = _interopRequireDefault(_Logger);

var _EnhancedEventEmitter2 = __webpack_require__(1);

var _EnhancedEventEmitter3 = _interopRequireDefault(_EnhancedEventEmitter2);

var _errors = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROFILES = new Set(['default', 'low', 'medium', 'high']);
var DEFAULT_STATS_INTERVAL = 1000;

var logger = new _Logger2.default('Consumer');

var Consumer = function (_EnhancedEventEmitter) {
	_inherits(Consumer, _EnhancedEventEmitter);

	/**
  * @private
  *
  * @emits {originator: String, [appData]: Any} pause
  * @emits {originator: String, [appData]: Any} resume
  * @emits {profile: String} effectiveprofilechange
  * @emits {stats: Object} stats
  * @emits handled
  * @emits unhandled
  * @emits {originator: String} close
  *
  * @emits @close
  */
	function Consumer(id, kind, rtpParameters, peer, appData) {
		_classCallCheck(this, Consumer);

		// Id.
		// @type {Number}
		var _this = _possibleConstructorReturn(this, (Consumer.__proto__ || Object.getPrototypeOf(Consumer)).call(this, logger));

		_this._id = id;

		// Closed flag.
		// @type {Boolean}
		_this._closed = false;

		// Media kind.
		// @type {String}
		_this._kind = kind;

		// RTP parameters.
		// @type {RTCRtpParameters}
		_this._rtpParameters = rtpParameters;

		// Associated Peer.
		// @type {Peer}
		_this._peer = peer;

		// App custom data.
		// @type {Any}
		_this._appData = appData;

		// Whether we can receive this Consumer (based on our RTP capabilities).
		// @type {Boolean}
		_this._supported = false;

		// Associated Transport.
		// @type {Transport}
		_this._transport = null;

		// Remote track.
		// @type {MediaStreamTrack}
		_this._track = null;

		// Locally paused flag.
		// @type {Boolean}
		_this._locallyPaused = false;

		// Remotely paused flag.
		// @type {Boolean}
		_this._remotelyPaused = false;

		// Periodic stats flag.
		// @type {Boolean}
		_this._statsEnabled = false;

		// Periodic stats gathering interval (milliseconds).
		// @type {Number}
		_this._statsInterval = DEFAULT_STATS_INTERVAL;

		// Preferred profile.
		// @type {String}
		_this._preferredProfile = 'default';

		// Effective profile.
		// @type {String}
		_this._effectiveProfile = null;
		return _this;
	}

	/**
  * Consumer id.
  *
  * @return {Number}
  */


	_createClass(Consumer, [{
		key: 'close',


		/**
   * Closes the Consumer.
   * This is called when the local Room is closed.
   *
   * @private
   */
		value: function close() {
			logger.debug('close()');

			if (this._closed) return;

			this._closed = true;

			if (this._statsEnabled) {
				this._statsEnabled = false;

				if (this.transport) this.transport.disableConsumerStats(this);
			}

			this.emit('@close');
			this.safeEmit('close', 'local');

			this._destroy();
		}

		/**
   * My remote Consumer was closed.
   * Invoked via remote notification.
   *
   * @private
   */

	}, {
		key: 'remoteClose',
		value: function remoteClose() {
			logger.debug('remoteClose()');

			if (this._closed) return;

			this._closed = true;

			if (this._transport) this._transport.removeConsumer(this);

			this._destroy();

			this.emit('@close');
			this.safeEmit('close', 'remote');
		}
	}, {
		key: '_destroy',
		value: function _destroy() {
			this._transport = null;

			try {
				this._track.stop();
			} catch (error) {}

			this._track = null;
		}

		/**
   * Receives RTP.
   *
   * @param {transport} Transport instance.
   *
   * @return {Promise} Resolves with a remote MediaStreamTrack.
   */

	}, {
		key: 'receive',
		value: function receive(transport) {
			var _this2 = this;

			logger.debug('receive() [transport:%o]', transport);

			if (this._closed) return Promise.reject(new _errors.InvalidStateError('Consumer closed'));else if (!this._supported) return Promise.reject(new Error('unsupported codecs'));else if (this._transport) return Promise.reject(new Error('already handled by a Transport'));else if ((typeof transport === 'undefined' ? 'undefined' : _typeof(transport)) !== 'object') return Promise.reject(new TypeError('invalid Transport'));

			this._transport = transport;

			return transport.addConsumer(this).then(function (track) {
				_this2._track = track;

				// If we were paused, disable the track.
				if (_this2.paused) track.enabled = false;

				transport.once('@close', function () {
					if (_this2._closed || _this2._transport !== transport) return;

					_this2._transport = null;

					try {
						_this2._track.stop();
					} catch (error) {}

					_this2._track = null;

					_this2.safeEmit('unhandled');
				});

				_this2.safeEmit('handled');

				if (_this2._statsEnabled) transport.enableConsumerStats(_this2, _this2._statsInterval);

				return track;
			}).catch(function (error) {
				_this2._transport = null;

				throw error;
			});
		}

		/**
   * Pauses receiving media.
   *
   * @param {Any} [appData] - App custom data.
   *
   * @return {Boolean} true if paused.
   */

	}, {
		key: 'pause',
		value: function pause(appData) {
			logger.debug('pause()');

			if (this._closed) {
				logger.error('pause() | Consumer closed');

				return false;
			} else if (this._locallyPaused) {
				return true;
			}

			this._locallyPaused = true;

			if (this._track) this._track.enabled = false;

			if (this._transport) this._transport.pauseConsumer(this, appData);

			this.safeEmit('pause', 'local', appData);

			// Return true if really paused.
			return this.paused;
		}

		/**
   * My remote Consumer was paused.
   * Invoked via remote notification.
   *
   * @private
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'remotePause',
		value: function remotePause(appData) {
			logger.debug('remotePause()');

			if (this._closed || this._remotelyPaused) return;

			this._remotelyPaused = true;

			if (this._track) this._track.enabled = false;

			this.safeEmit('pause', 'remote', appData);
		}

		/**
   * Resumes receiving media.
   *
   * @param {Any} [appData] - App custom data.
   *
   * @return {Boolean} true if not paused.
   */

	}, {
		key: 'resume',
		value: function resume(appData) {
			logger.debug('resume()');

			if (this._closed) {
				logger.error('resume() | Consumer closed');

				return false;
			} else if (!this._locallyPaused) {
				return true;
			}

			this._locallyPaused = false;

			if (this._track && !this._remotelyPaused) this._track.enabled = true;

			if (this._transport) this._transport.resumeConsumer(this, appData);

			this.safeEmit('resume', 'local', appData);

			// Return true if not paused.
			return !this.paused;
		}

		/**
   * My remote Consumer was resumed.
   * Invoked via remote notification.
   *
   * @private
   *
   * @param {Any} [appData] - App custom data.
   */

	}, {
		key: 'remoteResume',
		value: function remoteResume(appData) {
			logger.debug('remoteResume()');

			if (this._closed || !this._remotelyPaused) return;

			this._remotelyPaused = false;

			if (this._track && !this._locallyPaused) this._track.enabled = true;

			this.safeEmit('resume', 'remote', appData);
		}

		/**
   * Set preferred receiving profile.
   *
   * @param {String} profile
   */

	}, {
		key: 'setPreferredProfile',
		value: function setPreferredProfile(profile) {
			logger.debug('setPreferredProfile() [profile:%s]', profile);

			if (this._closed) {
				logger.error('setPreferredProfile() | Consumer closed');

				return;
			} else if (profile === this._preferredProfile) {
				return;
			} else if (!PROFILES.has(profile)) {
				logger.error('setPreferredProfile() | invalid profile "%s"', profile);

				return;
			}

			this._preferredProfile = profile;

			if (this._transport) this._transport.setConsumerPreferredProfile(this, this._preferredProfile);
		}

		/**
   * Preferred receiving profile was set on my remote Consumer.
   *
   * @param {String} profile
   */

	}, {
		key: 'remoteSetPreferredProfile',
		value: function remoteSetPreferredProfile(profile) {
			logger.debug('remoteSetPreferredProfile() [profile:%s]', profile);

			if (this._closed || profile === this._preferredProfile) return;

			this._preferredProfile = profile;
		}

		/**
   * Effective receiving profile changed on my remote Consumer.
   *
   * @param {String} profile
   */

	}, {
		key: 'remoteEffectiveProfileChanged',
		value: function remoteEffectiveProfileChanged(profile) {
			logger.debug('remoteEffectiveProfileChanged() [profile:%s]', profile);

			if (this._closed || profile === this._effectiveProfile) return;

			this._effectiveProfile = profile;

			this.safeEmit('effectiveprofilechange', this._effectiveProfile);
		}

		/**
   * Enables periodic stats retrieval.
   */

	}, {
		key: 'enableStats',
		value: function enableStats() {
			var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATS_INTERVAL;

			logger.debug('enableStats() [interval:%s]', interval);

			if (this._closed) {
				logger.error('enableStats() | Consumer closed');

				return;
			}

			if (this._statsEnabled) return;

			if (typeof interval !== 'number' || interval < 1000) this._statsInterval = DEFAULT_STATS_INTERVAL;else this._statsInterval = interval;

			this._statsEnabled = true;

			if (this._transport) this._transport.enableConsumerStats(this, this._statsInterval);
		}

		/**
   * Disables periodic stats retrieval.
   */

	}, {
		key: 'disableStats',
		value: function disableStats() {
			logger.debug('disableStats()');

			if (this._closed) {
				logger.error('disableStats() | Consumer closed');

				return;
			}

			if (!this._statsEnabled) return;

			this._statsEnabled = false;

			if (this._transport) this._transport.disableConsumerStats(this);
		}

		/**
   * Mark this Consumer as suitable for reception or not.
   *
   * @private
   *
   * @param {Boolean} flag
   */

	}, {
		key: 'setSupported',
		value: function setSupported(flag) {
			this._supported = flag;
		}

		/**
   * Receive remote stats.
   *
   * @private
   *
   * @param {Object} stats
   */

	}, {
		key: 'remoteStats',
		value: function remoteStats(stats) {
			this.safeEmit('stats', stats);
		}
	}, {
		key: 'id',
		get: function get() {
			return this._id;
		}

		/**
   * Whether the Consumer is closed.
   *
   * @return {Boolean}
   */

	}, {
		key: 'closed',
		get: function get() {
			return this._closed;
		}

		/**
   * Media kind.
   *
   * @return {String}
   */

	}, {
		key: 'kind',
		get: function get() {
			return this._kind;
		}

		/**
   * RTP parameters.
   *
   * @return {RTCRtpParameters}
   */

	}, {
		key: 'rtpParameters',
		get: function get() {
			return this._rtpParameters;
		}

		/**
   * Associated Peer.
   *
   * @return {Peer}
   */

	}, {
		key: 'peer',
		get: function get() {
			return this._peer;
		}

		/**
   * App custom data.
   *
   * @return {Any}
   */

	}, {
		key: 'appData',
		get: function get() {
			return this._appData;
		}

		/**
   * Whether we can receive this Consumer (based on our RTP capabilities).
   *
   * @return {Boolean}
   */

	}, {
		key: 'supported',
		get: function get() {
			return this._supported;
		}

		/**
   * Associated Transport.
   *
   * @return {Transport}
   */

	}, {
		key: 'transport',
		get: function get() {
			return this._transport;
		}

		/**
   * The associated track (if any yet).
   *
   * @return {MediaStreamTrack|Null}
   */

	}, {
		key: 'track',
		get: function get() {
			return this._track;
		}

		/**
   * Whether the Consumer is locally paused.
   *
   * @return {Boolean}
   */

	}, {
		key: 'locallyPaused',
		get: function get() {
			return this._locallyPaused;
		}

		/**
   * Whether the Consumer is remotely paused.
   *
   * @return {Boolean}
   */

	}, {
		key: 'remotelyPaused',
		get: function get() {
			return this._remotelyPaused;
		}

		/**
   * Whether the Consumer is paused.
   *
   * @return {Boolean}
   */

	}, {
		key: 'paused',
		get: function get() {
			return this._locallyPaused || this._remotelyPaused;
		}

		/**
   * The preferred profile.
   *
   * @type {String}
   */

	}, {
		key: 'preferredProfile',
		get: function get() {
			return this._preferredProfile;
		}

		/**
   * The effective profile.
   *
   * @type {String}
   */

	}, {
		key: 'effectiveProfile',
		get: function get() {
			return this._effectiveProfile;
		}
	}]);

	return Consumer;
}(_EnhancedEventEmitter3.default);

exports.default = Consumer;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__socket_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_js__ = __webpack_require__(16);



/*
	外部ファイル内で読み込んだモジュールを，わかりやすくするためにここでまた呼び出し．
*/
const electron = window.electron;
const remote = window.remote;
const BrowserWindow = window.BrowserWindow;
const appman = window.appman;
const Bridge = window.Bridge;
const eprocess = window._eprocess
const size = remote.screen.getPrimaryDisplay().size;
const mouseevent = window.mouseevent;
const initConfig = window.initConfig;

/* その他 */
var socket = null;
var bridge = null;
var room = null;
var windowList = null;
var forwardcover = null;
var ROOMID = decodeURIComponent(location.search.match(/roomid=(.*?)(&|$)/)[1]);
var ROOMNAME = decodeURIComponent(location.search.match(/roomname=(.*?)(&|$)/)[1]);
var USERID = decodeURIComponent(location.search.match(/userid=(.*?)(&|$)/)[1]);
var USERNAME = decodeURIComponent(location.search.match(/username=(.*?)(&|$)/)[1]);
var RANK = decodeURIComponent(location.search.match(/rank=(.*?)(&|$)/)[1]);
const PROCESSID = remote.getGlobal('pid');
const INVALID_APP_NAME = ['Window Server','Dock','通知センター','SystemUIServer','Spotlight','loginwindow','QuickLookUIService','日本語入力プログラム'];
const INVALID_WIN_NAME = ['(null)',''];
const INVALID_APP_LAYER = [24,25,103];
var COLOR = 'white';

window.onload = ()=>{
	bridge = new Bridge(electron);
	bridge.setLabel('parent');
	bridge.onaddpeer = (from)=>{
		const valueList = from.split('.');
		const streamId = valueList[0]+'.'+valueList[1]+'.'+valueList[2]+'.'+valueList[3];
		const stream = room.getStream(streamId);
		bridge.addStream(from,stream);
	}
	bridge.on('vw-mouseevent',(e,{mouseEventList})=>{
		const values = e.from.split('.');
		const target = values[0];
		const windowNumber = values[2];
		socket.send({
			action: 'vw-mouseevent',
			option: {
				target: target,
				windowNumber: windowNumber,
				mouseEventList: mouseEventList,
				userId: USERID
			}
		});
	});
	bridge.on('vw-point',(e,{pointEventList})=>{
		const values = e.from.split('.');
		const target = values[0];
		const windowNumber = values[2];
		socket.send({
			action: 'vw-point',
			option: {
				roomId: ROOMID,
				target: target,
				pointEventList: pointEventList,
				streamId: e.from,
				userId: USERID
			}
		});
	});
	bridge.on('as-publicscreen',(e,value)=>{
		socket.send({
			action: 'as-publicscreen',
			option: {
				roomId: ROOMID,
				userId: USERID,
				value: value
			}
		})
	});

	/* init component */

	socket = new __WEBPACK_IMPORTED_MODULE_0__socket_js__["a" /* default */]();
	socket.onopen = ()=>{
		socket.userId = USERID;
		socket.userName = USERNAME;
		socket.rank = RANK;
		socket.sendSync({
			action: 'socket-init',
			option: {
				userId: USERID
			}
		}).then(()=>{
			initRoom();
		});
	}
	socket.onmessage = (e)=>{
		const data = JSON.parse(e.data);
		switch(data.action){
			case 'add-vw': {
				data.value.options.forEach((option)=>{
					option.type = 'theater';
					createVirtualWindow(option);
				}); 
			} break;
			case 'share-app':{
				data.value.windowNumberList.forEach((windowNumber)=>{
					const option = {
						source: data.value.source,
						userId: data.value.userId,
						roomId: data.value.roomId,
						windowNumber: windowNumber,
						type: 'share'
					}
					createVirtualWindow(option);
				});
			} break;
			case 'theater':{
				data.value.windowNumberList.forEach((windowNumber)=>{
					const option = {
						source: data.value.source,
						userId: data.value.userId,
						roomId: data.value.roomId,
						windowNumber: windowNumber,
						type: 'theater'
					}
					// createVirtualWindow(option);




					const loop = ()=>{
						if(count<MAXNUM){
							createVirtualWindowDebug(option);
							setTimeout(()=>{
								loop();
							},3000);
						}
					}
					loop();



				});
			} break;
			case 'vw-mouseevent': {
				const {mouseEventList,windowNumber} = data.value;
				mouseEventList.forEach((value)=>{
					if(value.type=='keyinput'){
						keyeventHandler(value.key);
					} else {
						mouseeventHandler(value.type,value.x,value.y,windowNumber);
					}
				});
			} break;
			case 'vw-point': {
				const {pointEventList,streamId} = data.value;
				bridge.send(streamId,'vw-point',pointEventList);
			}
		}
	}

	appman.watch();
	appman.on('loop',(_windowList)=>{
		windowList = _windowList.filter(isValid);
	});
	windowList = appman.getWindows().filter(isValid);
}

/* 便利関数 */

// create
const createVirtualWindow = (option)=>{
	const streamId = `${option.userId}.${option.source}.${option.windowNumber}.${option.roomId}`;
	const virtualWindow = new BrowserWindow({
		center: true,
		title: 'virtual window',
		width: 500,
		height: 500
	});
	virtualWindow.loadURL(`${location.protocol}//${location.host}/vw?streamId=${streamId}&type=${option.type}`);
	virtualWindow.on('closed',()=>{
		socket.send({
			action: 'vw-close',
			option: {
				streamId: streamId,
				roomId: option.roomId,
				userId: USERID,
				ownerId: option.userId,
				windowNumber: option.windowNumber
			}
		});
	});
}
const createScreenStream = ()=>{
	return new Promise((resolve,reject)=>{
		navigator.getUserMedia({
			audio: false,
			video: {
				mandatory: {
					chromeMediaSource: 'screen',
					minWidth: size.width,
					minHeight: size.height,
					maxWidth: size.width,
					maxHeight: size.height
				}
			}
		},(stream)=>{
			resolve(stream);
		},(err)=>{
			reject(err);
		});
	});
}
const createAllWindowStream = ()=>{
	return new Promise((resolve,reject)=>{
		const valueList = [];
		const length = windowList.length;
		windowList.forEach(win=>{
			createWindowStream(win.number)
			.then(stream=>{
				valueList.push({
					stream: stream,
					name: win.ownerName,
					number: win.number
				});
				if(valueList.length==length){
					resolve(valueList);
				}
			}).catch(err=>{
				reject(err);
			});
		});
	});
}
const createWindowStream = (windowNumber)=>{
	return new Promise((resolve,reject)=>{
		navigator.getUserMedia({
			audio: false,
			video: {
				mandatory: {
					chromeMediaSource: 'desktop',
					chromeMediaSourceId: `window:${windowNumber}`,
					minWidth: 0,
					minHeight: 0,
					maxWidth: window.parent.screen.width,
					maxHeight: window.parent.screen.height
				}
			}
		},(stream)=>{
			resolve(stream);
		},(err)=>{
			reject(err);
		});
	});
}

// check
const isValid = (win)=>{
	return win.alpha != 0 && win.layer > -1 && win.bounds.width*win.bounds.height > 1 && INVALID_APP_NAME.indexOf(win.ownerName) == -1 && INVALID_APP_LAYER.indexOf(win.layer) == -1 && INVALID_WIN_NAME.indexOf(win.name) == -1 && win.ownerPID != PROCESSID;
}

// mouseevent
const keyeventHandler = (key)=>{
	keyevent.input(key);
}
const mouseeventHandler = (type,x,y,windowNumber)=>{
	switch(type){
		case 'click':
		click(x,y,windowNumber);
		break;

		case 'mousemove':
		dragged(x,y,windowNumber);
		break;

		case 'doubleclick':
		doubleclick(x,y,windowNumber);
		break;

		case 'mousedown':
		mousedown(x,y,windowNumber);
		break;

		case 'mouseup':
		mouseup(x,y,windowNumber);
		break;
	}
}
const click = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.click(x,y);
}
const dragged = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.drag(x,y);
}
const doubleclick = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.doubleclick(x,y);	
}
const mousedown = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.mousedown(x,y);	
}
const mouseup = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.mouseup(x,y);	
}

// webrtc
const initRoom = ()=>{
	room = new __WEBPACK_IMPORTED_MODULE_1__room_js__["a" /* default */](socket,ROOMID,null);
	room.onnewpeer = (peer)=>{
	}
	room.onnewstream = (stream,appData)=>{
		const option = {
			userId: appData.userId,
			source: appData.source,
			windowNumber: appData.windowNumber,
			roomId: appData.roomId
		}
		createVirtualWindow(option);
	}
	room.joinRoom()
	.then(()=>{
		return createScreenStream();
	}).then((stream)=>{
		room.addStream(stream,{
			source: 'screen',
			userId: USERID,
			userName: USERNAME,
			roomId: room.id,
			aspublicscreen: initConfig['as-publicscreen']
		});
		createAllWindowStream()
		.then(values=>values.map(value=>{
			room.addStream(value.stream,{
				source: 'window',
				userId: USERID,
				userName: USERNAME,
				windowNumber: value.number,
				roomId: room.id
			});
		}));
	});
}








































var _stream_ = null;
var count = -1;
const MARGIN = 40;
const YNUM = 4;
const XNUM = 5;
const MAXNUM = XNUM*YNUM;
const WIDTH = parseInt((size.width-MARGIN)/XNUM)-MARGIN;
const HEIGHT = parseInt((size.height-22-MARGIN)/YNUM)-MARGIN;
const MEMORY = {};
const createVirtualWindowDebug = (option)=>{
	const streamId = `${option.userId}.${option.source}.${option.windowNumber}.${option.roomId}.${count}`;
	const virtualWindow = new BrowserWindow({
		center: true,
		title: 'virtual window',
		width: WIDTH,
		height: HEIGHT,
		x: MARGIN+(count%XNUM)*(WIDTH+MARGIN),
		y: 22+MARGIN+parseInt(count/XNUM)*(HEIGHT+MARGIN)
	});
	virtualWindow.loadURL(`${location.protocol}//${location.host}/vw?streamId=${streamId}&type=${option.type}`);
	virtualWindow.on('closed',()=>{
		socket.send({
			action: 'vw-close',
			option: {
				streamId: streamId,
				roomId: option.roomId,
				userId: USERID,
				ownerId: option.userId,
				windowNumber: option.windowNumber
			}
		});
	});
	count++;
	if(count == 0){
		measureMemoryUsage();
	}
}

const measureMemoryUsage = ()=>{
	const loop = ()=>{
		if(count<MAXNUM){
			setTimeout(()=>{
				if(!MEMORY[count]){
					MEMORY[count] = [];
				}
				MEMORY[count].push(eprocess.getProcessMemoryInfo());
				loop();
			},40);
		} else {
			bridge.sendToMain('debug-save', MEMORY);
		}
	}
	loop();
}

/***/ })
/******/ ]);