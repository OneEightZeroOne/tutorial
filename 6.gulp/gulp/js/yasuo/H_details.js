"use strict";
var _createClass = function() {
	function r(e, t) {
		for(var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	return function(e, t, n) {
		return t && r(e.prototype, t), n && r(e, n), e
	}
}();

function _possibleConstructorReturn(e, t) {
	if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
	if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
	e.prototype = Object.create(t && t.prototype, {
		constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		}
	}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}

function _classCallCheck(e, t) {
	if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
for(var pi = 3.14, a = ["a", "b", "c"], i = 1; i <= a.length; i++) console.log(i);
var b = function(e, t) {
	return e + t
};
a.map(function(e, t) {
	return "<li>" + e + "</li>"
});
var Person = function() {
		function n(e, t) {
			_classCallCheck(this, n), this.name = e, this.age = t
		}
		return _createClass(n, [{
			key: "say",
			value: function() {
				console.log(this.name + this.age)
			}
		}]), n
	}(),
	Child = function(e) {
		function t(e) {
			return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return _inherits(t, Person), t
	}();
new Person("laoxie", 18), new Child("laoxie", 18);