module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/common/footer/index.js":
/*!******************************************!*\
  !*** ./component/common/footer/index.js ***!
  \******************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
    class: "footer text-center"
  }, __jsx("div", {
    class: "container"
  }, __jsx("div", {
    class: "row"
  }, __jsx("div", {
    class: "col-lg-4 mb-5 mb-lg-0"
  }, __jsx("h4", {
    class: "text-uppercase mb-4"
  }, "Location"), __jsx("p", {
    class: "lead mb-0"
  }, "Solingar Road Nethaji Nagar Arakkonam Near Yamaha store room", __jsx("br", null), " +91 84896 51082")), __jsx("div", {
    class: "col-lg-4 mb-5 mb-lg-0"
  }, __jsx("h4", {
    class: "text-uppercase mb-4"
  }, "FOLLOW US"), __jsx("a", {
    class: "btn btn-outline-light btn-social mx-1",
    href: "#"
  }, __jsx("i", {
    class: "fab fa-fw fa-facebook-f"
  })), __jsx("a", {
    class: "btn btn-outline-light btn-social mx-1",
    href: "#"
  }, __jsx("i", {
    class: "fab fa-fw fa-twitter"
  })), __jsx("a", {
    class: "btn btn-outline-light btn-social mx-1",
    href: "#"
  }, __jsx("i", {
    class: "fab fa-fw fa-linkedin-in"
  })), __jsx("a", {
    class: "btn btn-outline-light btn-social mx-1",
    href: "#"
  }, __jsx("i", {
    class: "fab fa-fw fa-dribbble"
  }))), __jsx("div", {
    class: "col-lg-4"
  }, __jsx("h4", {
    class: "text-uppercase mb-4"
  }, "About Freelancer"), __jsx("p", {
    class: "lead mb-0"
  }, "Freelance is a free to use, MIT licensed Bootstrap theme created by ", __jsx("a", {
    href: "http://startbootstrap.com"
  }, "Start Bootstrap"), "."))))), __jsx("div", {
    class: "copyright py-4 text-center text-white"
  }, __jsx("div", {
    class: "container"
  }, __jsx("small", null, "Copyright \xA9 NRS 2020"))));
}

/***/ }),

/***/ "./component/common/header/index.js":
/*!******************************************!*\
  !*** ./component/common/header/index.js ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\projects\\next\\NRS (vivek)\\component\\common\\header\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Header() {
  return (// <!-- Navigation-->
    __jsx("nav", {
      class: "navbar navbar-expand-lg text-uppercase fixed-top",
      id: "mainNav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 7
      }
    }, __jsx("div", {
      class: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 11
      }
    }, __jsx("a", {
      class: "navbar-brand js-scroll-trigger",
      href: "#page-top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 15
      }
    }, "NRS Chicken"), __jsx("button", {
      class: "navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarResponsive",
      "aria-controls": "navbarResponsive",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 89
      }
    }, "Menu ", __jsx("i", {
      class: "fas fa-bars",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 77
      }
    })), __jsx("div", {
      class: "collapse navbar-collapse",
      id: "navbarResponsive",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 15
      }
    }, __jsx("ul", {
      class: "navbar-nav ml-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 19
      }
    }, __jsx("li", {
      class: "nav-item mx-0 mx-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }, __jsx("a", {
      class: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",
      href: "#product",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 57
      }
    }, "Product")), __jsx("li", {
      class: "nav-item mx-0 mx-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 23
      }
    }, __jsx("a", {
      class: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",
      href: "#about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 57
      }
    }, "About")), __jsx("li", {
      class: "nav-item mx-0 mx-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 23
      }
    }, __jsx("a", {
      class: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",
      href: "#contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 57
      }
    }, "Contact"))))))
  );
}

/***/ }),

/***/ "./component/common/index.js":
/*!***********************************!*\
  !*** ./component/common/index.js ***!
  \***********************************/
/*! exports provided: Footer, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./component/common/footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./component/common/header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["Header"]; });




/***/ }),

/***/ "./component/pages/home/about/index.js":
/*!*********************************************!*\
  !*** ./component/pages/home/about/index.js ***!
  \*********************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\projects\\next\\NRS (vivek)\\component\\pages\\home\\about\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import './banner.scss'

class About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return (// <!-- About Section-->
      __jsx("section", {
        class: "page-section bg-primary text-white mb-0",
        id: "about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      }, __jsx("div", {
        class: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }, __jsx("h2", {
        class: "page-section-heading text-center text-uppercase text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }
      }, "About"), __jsx("div", {
        class: "divider-custom divider-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }
      }, __jsx("div", {
        class: "divider-custom-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }
      }), __jsx("div", {
        class: "divider-custom-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }
      }, __jsx("i", {
        class: "fas fa-star",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 58
        }
      })), __jsx("div", {
        class: "divider-custom-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }
      })), __jsx("div", {
        class: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }
      }, __jsx("div", {
        class: "col ml-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }
      }, __jsx("p", {
        class: "lead",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 29
        }
      }, "Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.")))))
    );
  }

}

/***/ }),

/***/ "./component/pages/home/banner/index.js":
/*!**********************************************!*\
  !*** ./component/pages/home/banner/index.js ***!
  \**********************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\projects\\next\\NRS (vivek)\\component\\pages\\home\\banner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import './banner.scss'

class Banner extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return (// <!-- Masthead-->
      __jsx("header", {
        class: "masthead bg-primary text-white text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 7
        }
      }, __jsx("div", {
        class: "container banner-container d-flex align-items-center flex-column",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }
      }, __jsx("h1", {
        class: "masthead-heading text-uppercase mb-0 wow slideInRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 15
        }
      }, "Selvi organic farm"), __jsx("div", {
        class: "divider-custom divider-light wow  fadeIn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }
      }, __jsx("div", {
        class: "divider-custom-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 19
        }
      }), __jsx("div", {
        class: "divider-custom-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 19
        }
      }, __jsx("i", {
        class: "fas fa-star",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 52
        }
      })), __jsx("div", {
        class: "divider-custom-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 19
        }
      })), __jsx("p", {
        class: "masthead-subheading font-weight-light mb-0  wow  fadeInRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }
      }, "Country Chicken With Egg - Duck With Egg - Quail With Egg - Goat ")))
    );
  }

}

/***/ }),

/***/ "./component/pages/home/contact-us/index.js":
/*!**************************************************!*\
  !*** ./component/pages/home/contact-us/index.js ***!
  \**************************************************/
/*! exports provided: ContactUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return ContactUs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\projects\\next\\NRS (vivek)\\component\\pages\\home\\contact-us\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import './banner.scss'

class ContactUs extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return (// <!-- Contact Section-->
      __jsx("section", {
        class: "page-section",
        id: "contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      }, __jsx("div", {
        class: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }, __jsx("h2", {
        class: "page-section-heading text-center text-uppercase text-secondary mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }
      }, "CONTACT US"), __jsx("div", {
        class: "divider-custom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }
      }, __jsx("div", {
        class: "divider-custom-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }
      }), __jsx("div", {
        class: "divider-custom-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }
      }, __jsx("i", {
        class: "fas fa-star",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 58
        }
      })), __jsx("div", {
        class: "divider-custom-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }
      })), __jsx("div", {
        class: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }
      }, __jsx("div", {
        class: "col-lg-8 mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }
      }, __jsx("form", {
        id: "contactForm",
        name: "sentMessage",
        novalidate: "novalidate",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 29
        }
      }, __jsx("div", {
        class: "control-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 33
        }
      }, __jsx("div", {
        class: "form-group floating-label-form-group controls mb-0 pb-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 41
        }
      }, "Name"), __jsx("input", {
        class: "form-control",
        id: "name",
        type: "text",
        placeholder: "Name",
        required: "required",
        "data-validation-required-message": "Please enter your name.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 60
        }
      }), __jsx("p", {
        class: "help-block text-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 41
        }
      }))), __jsx("div", {
        class: "control-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 33
        }
      }, __jsx("div", {
        class: "form-group floating-label-form-group controls mb-0 pb-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 41
        }
      }, "Email Address"), __jsx("input", {
        class: "form-control",
        id: "email",
        type: "email",
        placeholder: "Email Address",
        required: "required",
        "data-validation-required-message": "Please enter your email address.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 69
        }
      }), __jsx("p", {
        class: "help-block text-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 41
        }
      }))), __jsx("div", {
        class: "control-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 33
        }
      }, __jsx("div", {
        class: "form-group floating-label-form-group controls mb-0 pb-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 41
        }
      }, "Phone Number"), __jsx("input", {
        class: "form-control",
        id: "phone",
        type: "tel",
        placeholder: "Phone Number",
        required: "required",
        "data-validation-required-message": "Please enter your phone number.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 68
        }
      }), __jsx("p", {
        class: "help-block text-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 41
        }
      }))), __jsx("div", {
        class: "control-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 33
        }
      }, __jsx("div", {
        class: "form-group floating-label-form-group controls mb-0 pb-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 37
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 41
        }
      }, "Message"), __jsx("textarea", {
        class: "form-control",
        id: "message",
        rows: "5",
        placeholder: "Message",
        required: "required",
        "data-validation-required-message": "Please enter a message.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 63
        }
      }), __jsx("p", {
        class: "help-block text-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 41
        }
      }))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 33
        }
      }), __jsx("div", {
        id: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 33
        }
      }), __jsx("div", {
        class: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      }, __jsx("button", {
        class: "btn btn-primary btn-xl",
        id: "sendMessageButton",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 57
        }
      }, "Send")))))))
    );
  }

}

/***/ }),

/***/ "./component/pages/home/index.js":
/*!***************************************!*\
  !*** ./component/pages/home/index.js ***!
  \***************************************/
/*! exports provided: Banner, Product, About, ContactUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ "./component/pages/home/banner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner__WEBPACK_IMPORTED_MODULE_0__["Banner"]; });

/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./component/pages/home/product/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _product__WEBPACK_IMPORTED_MODULE_1__["Product"]; });

/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./component/pages/home/about/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _about__WEBPACK_IMPORTED_MODULE_2__["About"]; });

/* harmony import */ var _contact_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us */ "./component/pages/home/contact-us/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return _contact_us__WEBPACK_IMPORTED_MODULE_3__["ContactUs"]; });






/***/ }),

/***/ "./component/pages/home/product/index.js":
/*!***********************************************!*\
  !*** ./component/pages/home/product/index.js ***!
  \***********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\projects\\next\\NRS (vivek)\\component\\pages\\home\\product\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import './banner.scss'


class Product extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const params = {
      spaceBetween: 30,
      ContainerEl: 'section',
      WrapperEl: 'section',
      // navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev'
      // },
      // pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      // },
      // slidesPerView: 4,
      // lazy: true,
      rebuildOnUpdate: true,
      // centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      // renderPrevButton: () => <span className="swiper-button-prev"><img src="./static/images/icons/arrow_forward-24px.svg"></img></span>,
      // renderNextButton: () => <span className="swiper-button-next"><img src="./static/images/icons/arrow_back-24px.svg"></img></span>,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        567: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    };
    return (// <!-- Portfolio Section-->
      __jsx("section", {
        class: "page-section portfolio",
        id: "product",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("div", {
        class: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }, __jsx("h2", {
        class: "page-section-heading text-center text-uppercase text-secondary mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }, "Product"), __jsx("div", {
        class: "divider-custom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }, __jsx("div", {
        class: "divider-custom-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }
      }), __jsx("div", {
        class: "divider-custom-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }
      }, __jsx("i", {
        class: "fas fa-star",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 58
        }
      })), __jsx("div", {
        class: "divider-custom-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }
      })), __jsx("div", {
        class: "row pr-5 pl-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }
      }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, params, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      }), ['chicken', 'egg', 'duck', 'quail', 'goat'].map((data, i) => __jsx("div", {
        class: "item col-md-4 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 33
        }
      }, __jsx("div", {
        class: "card border-0 shadow mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 37
        }
      }, __jsx("img", {
        class: "card-img-top",
        src: "/img/product/chicken.png",
        alt: "Card image cap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 41
        }
      }), __jsx("div", {
        class: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 41
        }
      }, __jsx("h5", {
        class: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 45
        }
      }, "Country Chicken"), __jsx("p", {
        class: "card-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 45
        }
      }, "Some quick example text to build on the card title and make up the bulk of the card's content.")))))))))
    );
  }

}

/***/ }),

/***/ "./component/pages/index.js":
/*!**********************************!*\
  !*** ./component/pages/index.js ***!
  \**********************************/
/*! exports provided: Banner, Product, About, ContactUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./component/pages/home/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["Banner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["Product"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["About"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["ContactUs"]; });



/***/ }),

/***/ "./layout/mainlayout/index.js":
/*!************************************!*\
  !*** ./layout/mainlayout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/common */ "./component/common/index.js");
var _jsxFileName = "E:\\projects\\next\\NRS (vivek)\\layout\\mainlayout\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MainLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    let {} = this.state;
    let {
      children
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_common__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }), __jsx("body", {
      id: "page-top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, children), __jsx(_component_common__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_mainlayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/mainlayout */ "./layout/mainlayout/index.js");
/* harmony import */ var _component_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/pages */ "./component/pages/index.js");
var _jsxFileName = "E:\\projects\\next\\NRS (vivek)\\pages\\home\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "NRS CHICKEN"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx(_layout_mainlayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_3__["Product"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_3__["ContactUs"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_3__["About"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9iYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L3BhZ2VzL2hvbWUvY29udGFjdC11cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9wcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvbWFpbmxheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWQtc3dpcGVyXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiSGVhZGVyIiwiQWJvdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsIkJhbm5lciIsIkNvbnRhY3RVcyIsIlByb2R1Y3QiLCJwYXJhbXMiLCJzcGFjZUJldHdlZW4iLCJDb250YWluZXJFbCIsIldyYXBwZXJFbCIsInJlYnVpbGRPblVwZGF0ZSIsInNsaWRlc1BlclZpZXciLCJmcmVlTW9kZSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImJyZWFrcG9pbnRzIiwibWFwIiwiZGF0YSIsImkiLCJNYWluTGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsInByb3BzIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGTyxTQUFTQSxNQUFULEdBQWtCO0FBQ3ZCLFNBQ0UsbUVBRUU7QUFBUSxTQUFLLEVBQUM7QUFBZCxLQUNFO0FBQUssU0FBSyxFQUFDO0FBQVgsS0FDRTtBQUFLLFNBQUssRUFBQztBQUFYLEtBRUU7QUFBSyxTQUFLLEVBQUM7QUFBWCxLQUNFO0FBQUksU0FBSyxFQUFDO0FBQVYsZ0JBREYsRUFFRTtBQUFHLFNBQUssRUFBQztBQUFULHFFQUFpRixpQkFBakYscUJBRkYsQ0FGRixFQU9FO0FBQUssU0FBSyxFQUFDO0FBQVgsS0FDRTtBQUFJLFNBQUssRUFBQztBQUFWLGlCQURGLEVBRUU7QUFB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QUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBTEYsQ0FERjtBQWVELEM7Ozs7Ozs7Ozs7O0FDcEJELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2hvbWUvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogLy8gPCEtLSBGb290ZXItLT4gKi99XHJcbiAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIEZvb3RlciBMb2NhdGlvbi0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IG1iLTUgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtdXBwZXJjYXNlIG1iLTRcIj5Mb2NhdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkIG1iLTBcIj5Tb2xpbmdhciBSb2FkIE5ldGhhamkgTmFnYXIgQXJha2tvbmFtIE5lYXIgWWFtYWhhIHN0b3JlIHJvb208YnIgLz4gKzkxIDg0ODk2IDUxMDgyPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gRm9vdGVyIFNvY2lhbCBJY29ucy0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IG1iLTUgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtdXBwZXJjYXNlIG1iLTRcIj5GT0xMT1cgVVM8L2g0PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zb2NpYWwgbXgtMVwiIGhyZWY9XCIjXCI+PGlcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFiIGZhLWZ3IGZhLWZhY2Vib29rLWZcIj48L2k+PC9hPjxhIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zb2NpYWwgbXgtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYWIgZmEtZncgZmEtdHdpdHRlclwiPjwvaT48L2E+PGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc29jaWFsIG14LTFcIiBocmVmPVwiI1wiPjxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhYiBmYS1mdyBmYS1saW5rZWRpbi1pblwiPjwvaT48L2E+PGEgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNvY2lhbCBteC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhYiBmYS1mdyBmYS1kcmliYmJsZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBGb290ZXIgQWJvdXQgVGV4dC0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC11cHBlcmNhc2UgbWItNFwiPkFib3V0IEZyZWVsYW5jZXI8L2g0PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZCBtYi0wXCI+RnJlZWxhbmNlIGlzIGEgZnJlZSB0byB1c2UsIE1JVCBsaWNlbnNlZCBCb290c3RyYXAgdGhlbWUgY3JlYXRlZCBieSA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zdGFydGJvb3RzdHJhcC5jb21cIj5TdGFydCBCb290c3RyYXA8L2E+LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIHsvKiAvLyAgPCEtLSBDb3B5cmlnaHQgU2VjdGlvbi0tPiAqL31cclxuICAgICAgPGRpdiBjbGFzcz1cImNvcHlyaWdodCBweS00IHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PHNtYWxsPkNvcHlyaWdodCDCqSBOUlMgMjAyMDwvc21hbGw+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gPCEtLSBOYXZpZ2F0aW9uLS0+XHJcbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyB0ZXh0LXVwcGVyY2FzZSBmaXhlZC10b3BcIiBpZD1cIm1haW5OYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZCBqcy1zY3JvbGwtdHJpZ2dlclwiIGhyZWY9XCIjcGFnZS10b3BcIj5OUlMgQ2hpY2tlbjwvYT48YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHQgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyUmVzcG9uc2l2ZVwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJSZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+TWVudSA8aSBjbGFzcz1cImZhcyBmYS1iYXJzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBteC0wIG14LWxnLTFcIj48YSBjbGFzcz1cIm5hdi1saW5rIHB5LTMgcHgtMCBweC1sZy0zIHJvdW5kZWQganMtc2Nyb2xsLXRyaWdnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3Byb2R1Y3RcIj5Qcm9kdWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBteC0wIG14LWxnLTFcIj48YSBjbGFzcz1cIm5hdi1saW5rIHB5LTMgcHgtMCBweC1sZy0zIHJvdW5kZWQganMtc2Nyb2xsLXRyaWdnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIG14LTAgbXgtbGctMVwiPjxhIGNsYXNzPVwibmF2LWxpbmsgcHktMyBweC0wIHB4LWxnLTMgcm91bmRlZCBqcy1zY3JvbGwtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiAgXHJcbiIsImV4cG9ydCB7Rm9vdGVyfSBmcm9tICcuL2Zvb3RlcidcclxuZXhwb3J0IHtIZWFkZXJ9IGZyb20gJy4vaGVhZGVyJyIsIi8vIGltcG9ydCAnLi9iYW5uZXIuc2NzcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPCEtLSBBYm91dCBTZWN0aW9uLS0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1zZWN0aW9uIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBtYi0wXCIgaWQ9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIEFib3V0IFNlY3Rpb24gSGVhZGluZy0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwYWdlLXNlY3Rpb24taGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlXCI+QWJvdXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIEljb24gRGl2aWRlci0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20gZGl2aWRlci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20taWNvblwiPjxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQWJvdXQgU2VjdGlvbiBDb250ZW50LS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5GcmVlbGFuY2VyIGlzIGEgZnJlZSBib290c3RyYXAgdGhlbWUgY3JlYXRlZCBieSBTdGFydCBCb290c3RyYXAuIFRoZSBkb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVzIHRoZSBjb21wbGV0ZSBzb3VyY2UgZmlsZXMgaW5jbHVkaW5nIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQgYXMgd2VsbCBhcyBvcHRpb25hbCBTQVNTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzaGVldHMgZm9yIGVhc3kgY3VzdG9taXphdGlvbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzcz1cImNvbC1sZy00IG1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPllvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGN1c3RvbSBhdmF0YXIgZm9yIHRoZSBtYXN0aGVhZCwgY2hhbmdlIHRoZSBpY29uIGluIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXJzLCBhbmQgYWRkIHlvdXIgZW1haWwgYWRkcmVzcyB0byB0aGUgY29udGFjdCBmb3JtIHRvIG1ha2UgaXQgZnVsbHkgZnVuY3Rpb25hbCE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBBYm91dCBTZWN0aW9uIEJ1dHRvbi0tPiAqL31cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLyBpbXBvcnQgJy4vYmFubmVyLnNjc3MnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCYW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8vIDwhLS0gTWFzdGhlYWQtLT5cclxuICAgICAgPGhlYWRlciBjbGFzcz1cIm1hc3RoZWFkIGJnLXByaW1hcnkgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBiYW5uZXItY29udGFpbmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSA8aW1nIGNsYXNzPVwibWFzdGhlYWQtYXZhdGFyIG1iLTVcIiBzcmM9XCJhc3NldHMvaW1nL2F2YXRhYWFycy5zdmdcIiBhbHQ9XCJcIiAvPiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFzdGhlYWQtaGVhZGluZyB0ZXh0LXVwcGVyY2FzZSBtYi0wIHdvdyBzbGlkZUluUmlnaHRcIiA+U2Vsdmkgb3JnYW5pYyBmYXJtPC9oMT5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBJY29uIERpdmlkZXItLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tIGRpdmlkZXItbGlnaHQgd293ICBmYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWljb25cIj48aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIE1hc3RoZWFkIFN1YmhlYWRpbmctLT4gKi99XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYXN0aGVhZC1zdWJoZWFkaW5nIGZvbnQtd2VpZ2h0LWxpZ2h0IG1iLTAgIHdvdyAgZmFkZUluUmlnaHRcIj5Db3VudHJ5IENoaWNrZW4gV2l0aCBFZ2cgLSBEdWNrIFdpdGggRWdnIC0gUXVhaWwgV2l0aFxyXG4gICAgICAgICAgICAgICAgICBFZ2cgLSBHb2F0IDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbiIsIi8vIGltcG9ydCAnLi9iYW5uZXIuc2NzcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFjdFVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDwhLS0gQ29udGFjdCBTZWN0aW9uLS0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQ29udGFjdCBTZWN0aW9uIEhlYWRpbmctLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGFnZS1zZWN0aW9uLWhlYWRpbmcgdGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2UgdGV4dC1zZWNvbmRhcnkgbWItMFwiPkNPTlRBQ1QgVVM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIEljb24gRGl2aWRlci0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWljb25cIj48aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENvbnRhY3QgU2VjdGlvbiBGb3JtLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFRvIGNvbmZpZ3VyZSB0aGUgY29udGFjdCBmb3JtIGVtYWlsIGFkZHJlc3MsIGdvIHRvIG1haWwvY29udGFjdF9tZS5waHAgYW5kIHVwZGF0ZSB0aGUgZW1haWwgYWRkcmVzcyBpbiB0aGUgUEhQIGZpbGUgb24gbGluZSAxOS4tLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImNvbnRhY3RGb3JtXCIgbmFtZT1cInNlbnRNZXNzYWdlXCIgbm92YWxpZGF0ZT1cIm5vdmFsaWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGNvbnRyb2xzIG1iLTAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCIgZGF0YS12YWxpZGF0aW9uLXJlcXVpcmVkLW1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2sgdGV4dC1kYW5nZXJcIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgY29udHJvbHMgbWItMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWwgQWRkcmVzczwvbGFiZWw+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWxpZGF0aW9uLXJlcXVpcmVkLW1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2sgdGV4dC1kYW5nZXJcIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgY29udHJvbHMgbWItMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmUgTnVtYmVyPC9sYWJlbD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBob25lXCIgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiByZXF1aXJlZD1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbGlkYXRpb24tcmVxdWlyZWQtbWVzc2FnZT1cIlBsZWFzZSBlbnRlciB5b3VyIHBob25lIG51bWJlci5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGNvbnRyb2xzIG1iLTAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1lc3NhZ2U8L2xhYmVsPjx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibWVzc2FnZVwiIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiByZXF1aXJlZD1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbGlkYXRpb24tcmVxdWlyZWQtbWVzc2FnZT1cIlBsZWFzZSBlbnRlciBhIG1lc3NhZ2UuXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhsXCIgaWQ9XCJzZW5kTWVzc2FnZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQge0Jhbm5lcn0gZnJvbSAnLi9iYW5uZXInXHJcbmV4cG9ydCB7UHJvZHVjdH0gZnJvbSAnLi9wcm9kdWN0J1xyXG5leHBvcnQge0Fib3V0fSBmcm9tICcuL2Fib3V0JztcclxuZXhwb3J0IHtDb250YWN0VXN9IGZyb20gJy4vY29udGFjdC11cyciLCIvLyBpbXBvcnQgJy4vYmFubmVyLnNjc3MnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAncmVhY3QtaWQtc3dpcGVyJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgQ29udGFpbmVyRWw6ICdzZWN0aW9uJyxcclxuICAgICAgICAgICAgV3JhcHBlckVsOiAnc2VjdGlvbicsXHJcbiAgICAgICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgLy8gICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAvLyAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy8gcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAvLyAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAvLyAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIC8vIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgIC8vIGxhenk6IHRydWUsXHJcbiAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHJlbmRlclByZXZCdXR0b246ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tcHJldlwiPjxpbWcgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL2ljb25zL2Fycm93X2ZvcndhcmQtMjRweC5zdmdcIj48L2ltZz48L3NwYW4+LFxyXG4gICAgICAgICAgICAvLyByZW5kZXJOZXh0QnV0dG9uOiAoKSA9PiA8c3BhbiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLW5leHRcIj48aW1nIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9pY29ucy9hcnJvd19iYWNrLTI0cHguc3ZnXCI+PC9pbWc+PC9zcGFuPixcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA1Njc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDwhLS0gUG9ydGZvbGlvIFNlY3Rpb24tLT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYWdlLXNlY3Rpb24gcG9ydGZvbGlvXCIgaWQ9XCJwcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gUG9ydGZvbGlvIFNlY3Rpb24gSGVhZGluZy0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwYWdlLXNlY3Rpb24taGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXNlY29uZGFyeSBtYi0wXCI+UHJvZHVjdDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gPGlmcmFtZSBzcmM9XCIuL3Rlc3QuaHRtbFwiPjwvaWZyYW1lPiAtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIEljb24gRGl2aWRlci0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWljb25cIj48aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFBvcnRmb2xpbyBHcmlkIEl0ZW1zLS0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHByLTUgcGwtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyIHsuLi5wYXJhbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1snY2hpY2tlbicsICdlZ2cnLCAnZHVjaycsICdxdWFpbCcsICdnb2F0J10ubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gY29sLW1kLTQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJvcmRlci0wIHNoYWRvdyBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiL2ltZy9wcm9kdWN0L2NoaWNrZW4ucG5nXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5Db3VudHJ5IENoaWNrZW48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+R28gc29tZXdoZXJlPC9hPiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IHtCYW5uZXIsUHJvZHVjdCxBYm91dCxDb250YWN0VXN9IGZyb20gJy4vaG9tZSciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW1wb3J0IHtIZWFkZXIsRm9vdGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnQvY29tbW9uJ1xyXG5cclxuXHJcblxyXG5jbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGUgPSB7fVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Ym9keSBpZD1cInBhZ2UtdG9wXCI+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXRcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1haW5sYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0L21haW5sYXlvdXQnXG5pbXBvcnQgeyBCYW5uZXIsIFByb2R1Y3QsIEFib3V0LCBDb250YWN0VXMgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvcGFnZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5SUyBDSElDS0VOPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1haW5sYXlvdXQ+XG4gICAgICAgIDxCYW5uZXIgLz5cbiAgICAgICAgPFByb2R1Y3QgLz5cbiAgICAgICAgPENvbnRhY3RVcyAvPlxuICAgICAgICA8QWJvdXQgLz5cblxuICAgICAgPC9NYWlubGF5b3V0PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWQtc3dpcGVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=