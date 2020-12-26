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
var _jsxFileName = "E:\\projects\\next\\NRS (vivek)\\component\\common\\footer\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
    class: "footer text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "col-lg-4 mb-5 mb-lg-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h4", {
    class: "text-uppercase mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, "Location"), __jsx("p", {
    class: "lead mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  }, "Solingar Road Nethaji Nagar Arakkonam Near Yamaha store room", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 96
    }
  }), " +91 84896 51082")), __jsx("div", {
    class: "col-lg-4 mb-5 mb-lg-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("h4", {
    class: "text-uppercase mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, "FOLLOW US"), __jsx("a", {
    class: "btn btn-outline-light btn-social mx-1",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("i", {
    class: "fab fa-fw fa-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 73
    }
  })), __jsx("a", {
    class: "btn btn-outline-light btn-social mx-1",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 57
    }
  }, __jsx("i", {
    class: "fab fa-fw fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 28
    }
  })), __jsx("a", {
    class: "btn btn-outline-light btn-social mx-1",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 68
    }
  }, __jsx("i", {
    class: "fab fa-fw fa-linkedin-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 76
    }
  })), __jsx("a", {
    class: "btn btn-outline-light btn-social mx-1",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 64
    }
  }, __jsx("i", {
    class: "fab fa-fw fa-dribbble",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 34
    }
  }))), __jsx("div", {
    class: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("h4", {
    class: "text-uppercase mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "About Freelancer"), __jsx("p", {
    class: "lead mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "Freelance is a free to use, MIT licensed Bootstrap theme created by ", __jsx("a", {
    href: "http://startbootstrap.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 104
    }
  }, "Start Bootstrap"), "."))))), __jsx("section", {
    class: "copyright py-4 text-center text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 32
    }
  }, "Copyright \xA9 NRS 2020"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9iYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L3BhZ2VzL2hvbWUvY29udGFjdC11cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9wcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvbWFpbmxheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWQtc3dpcGVyXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiSGVhZGVyIiwiQWJvdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsIkJhbm5lciIsIkNvbnRhY3RVcyIsIlByb2R1Y3QiLCJwYXJhbXMiLCJzcGFjZUJldHdlZW4iLCJDb250YWluZXJFbCIsIldyYXBwZXJFbCIsInJlYnVpbGRPblVwZGF0ZSIsInNsaWRlc1BlclZpZXciLCJmcmVlTW9kZSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImJyZWFrcG9pbnRzIiwibWFwIiwiZGF0YSIsImkiLCJNYWluTGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsInByb3BzIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rk8sU0FBU0EsTUFBVCxHQUFrQjtBQUN2QixTQUNFLG1FQUVFO0FBQVEsU0FBSyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFLLFNBQUssRUFBQyx1QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBTEYsQ0FERjtBQWVELEM7Ozs7Ozs7Ozs7O0FDcEJELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2hvbWUvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogLy8gPCEtLSBGb290ZXItLT4gKi99XHJcbiAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIEZvb3RlciBMb2NhdGlvbi0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IG1iLTUgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtdXBwZXJjYXNlIG1iLTRcIj5Mb2NhdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkIG1iLTBcIj5Tb2xpbmdhciBSb2FkIE5ldGhhamkgTmFnYXIgQXJha2tvbmFtIE5lYXIgWWFtYWhhIHN0b3JlIHJvb208YnIgLz4gKzkxIDg0ODk2IDUxMDgyPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gRm9vdGVyIFNvY2lhbCBJY29ucy0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IG1iLTUgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtdXBwZXJjYXNlIG1iLTRcIj5GT0xMT1cgVVM8L2g0PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zb2NpYWwgbXgtMVwiIGhyZWY9XCIjXCI+PGlcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFiIGZhLWZ3IGZhLWZhY2Vib29rLWZcIj48L2k+PC9hPjxhIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zb2NpYWwgbXgtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYWIgZmEtZncgZmEtdHdpdHRlclwiPjwvaT48L2E+PGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc29jaWFsIG14LTFcIiBocmVmPVwiI1wiPjxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhYiBmYS1mdyBmYS1saW5rZWRpbi1pblwiPjwvaT48L2E+PGEgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNvY2lhbCBteC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhYiBmYS1mdyBmYS1kcmliYmJsZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBGb290ZXIgQWJvdXQgVGV4dC0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC11cHBlcmNhc2UgbWItNFwiPkFib3V0IEZyZWVsYW5jZXI8L2g0PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZCBtYi0wXCI+RnJlZWxhbmNlIGlzIGEgZnJlZSB0byB1c2UsIE1JVCBsaWNlbnNlZCBCb290c3RyYXAgdGhlbWUgY3JlYXRlZCBieSA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zdGFydGJvb3RzdHJhcC5jb21cIj5TdGFydCBCb290c3RyYXA8L2E+LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIHsvKiAvLyAgPCEtLSBDb3B5cmlnaHQgU2VjdGlvbi0tPiAqL31cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb3B5cmlnaHQgcHktNCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjxzbWFsbD5Db3B5cmlnaHQgwqkgTlJTIDIwMjA8L3NtYWxsPjwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvLyA8IS0tIE5hdmlnYXRpb24tLT5cclxuICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIHRleHQtdXBwZXJjYXNlIGZpeGVkLXRvcFwiIGlkPVwibWFpbk5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIGpzLXNjcm9sbC10cmlnZ2VyXCIgaHJlZj1cIiNwYWdlLXRvcFwiPk5SUyBDaGlja2VuPC9hPjxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIGJnLXByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJSZXNwb25zaXZlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5NZW51IDxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyUmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIG14LTAgbXgtbGctMVwiPjxhIGNsYXNzPVwibmF2LWxpbmsgcHktMyBweC0wIHB4LWxnLTMgcm91bmRlZCBqcy1zY3JvbGwtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcHJvZHVjdFwiPlByb2R1Y3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIG14LTAgbXgtbGctMVwiPjxhIGNsYXNzPVwibmF2LWxpbmsgcHktMyBweC0wIHB4LWxnLTMgcm91bmRlZCBqcy1zY3JvbGwtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjYWJvdXRcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gbXgtMCBteC1sZy0xXCI+PGEgY2xhc3M9XCJuYXYtbGluayBweS0zIHB4LTAgcHgtbGctMyByb3VuZGVkIGpzLXNjcm9sbC10cmlnZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuICBcclxuIiwiZXhwb3J0IHtGb290ZXJ9IGZyb20gJy4vZm9vdGVyJ1xyXG5leHBvcnQge0hlYWRlcn0gZnJvbSAnLi9oZWFkZXInIiwiLy8gaW1wb3J0ICcuL2Jhbm5lci5zY3NzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8IS0tIEFib3V0IFNlY3Rpb24tLT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYWdlLXNlY3Rpb24gYmctcHJpbWFyeSB0ZXh0LXdoaXRlIG1iLTBcIiBpZD1cImFib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQWJvdXQgU2VjdGlvbiBIZWFkaW5nLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBhZ2Utc2VjdGlvbi1oZWFkaW5nIHRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGVcIj5BYm91dDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gSWNvbiBEaXZpZGVyLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbSBkaXZpZGVyLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1pY29uXCI+PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBBYm91dCBTZWN0aW9uIENvbnRlbnQtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPkZyZWVsYW5jZXIgaXMgYSBmcmVlIGJvb3RzdHJhcCB0aGVtZSBjcmVhdGVkIGJ5IFN0YXJ0IEJvb3RzdHJhcC4gVGhlIGRvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZXMgdGhlIGNvbXBsZXRlIHNvdXJjZSBmaWxlcyBpbmNsdWRpbmcgSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdCBhcyB3ZWxsIGFzIG9wdGlvbmFsIFNBU1NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNoZWV0cyBmb3IgZWFzeSBjdXN0b21pemF0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+WW91IGNhbiBjcmVhdGUgeW91ciBvd24gY3VzdG9tIGF2YXRhciBmb3IgdGhlIG1hc3RoZWFkLCBjaGFuZ2UgdGhlIGljb24gaW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2aWRlcnMsIGFuZCBhZGQgeW91ciBlbWFpbCBhZGRyZXNzIHRvIHRoZSBjb250YWN0IGZvcm0gdG8gbWFrZSBpdCBmdWxseSBmdW5jdGlvbmFsITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIEFib3V0IFNlY3Rpb24gQnV0dG9uLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIGltcG9ydCAnLi9iYW5uZXIuc2NzcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJhbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gPCEtLSBNYXN0aGVhZC0tPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzPVwibWFzdGhlYWQgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGJhbm5lci1jb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIDxpbWcgY2xhc3M9XCJtYXN0aGVhZC1hdmF0YXIgbWItNVwiIHNyYz1cImFzc2V0cy9pbWcvYXZhdGFhYXJzLnN2Z1wiIGFsdD1cIlwiIC8+IC0tPiAqL31cclxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtYXN0aGVhZC1oZWFkaW5nIHRleHQtdXBwZXJjYXNlIG1iLTAgd293IHNsaWRlSW5SaWdodFwiID5TZWx2aSBvcmdhbmljIGZhcm08L2gxPlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIEljb24gRGl2aWRlci0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20gZGl2aWRlci1saWdodCB3b3cgIGZhZGVJblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20taWNvblwiPjxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gTWFzdGhlYWQgU3ViaGVhZGluZy0tPiAqL31cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1hc3RoZWFkLXN1YmhlYWRpbmcgZm9udC13ZWlnaHQtbGlnaHQgbWItMCAgd293ICBmYWRlSW5SaWdodFwiPkNvdW50cnkgQ2hpY2tlbiBXaXRoIEVnZyAtIER1Y2sgV2l0aCBFZ2cgLSBRdWFpbCBXaXRoXHJcbiAgICAgICAgICAgICAgICAgIEVnZyAtIEdvYXQgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuIiwiLy8gaW1wb3J0ICcuL2Jhbm5lci5zY3NzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0VXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPCEtLSBDb250YWN0IFNlY3Rpb24tLT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYWdlLXNlY3Rpb25cIiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBDb250YWN0IFNlY3Rpb24gSGVhZGluZy0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwYWdlLXNlY3Rpb24taGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXNlY29uZGFyeSBtYi0wXCI+Q09OVEFDVCBVUzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gSWNvbiBEaXZpZGVyLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20taWNvblwiPjxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQ29udGFjdCBTZWN0aW9uIEZvcm0tLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gVG8gY29uZmlndXJlIHRoZSBjb250YWN0IGZvcm0gZW1haWwgYWRkcmVzcywgZ28gdG8gbWFpbC9jb250YWN0X21lLnBocCBhbmQgdXBkYXRlIHRoZSBlbWFpbCBhZGRyZXNzIGluIHRoZSBQSFAgZmlsZSBvbiBsaW5lIDE5Li0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiY29udGFjdEZvcm1cIiBuYW1lPVwic2VudE1lc3NhZ2VcIiBub3ZhbGlkYXRlPVwibm92YWxpZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgY29udHJvbHMgbWItMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBkYXRhLXZhbGlkYXRpb24tcmVxdWlyZWQtbWVzc2FnZT1cIlBsZWFzZSBlbnRlciB5b3VyIG5hbWUuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBjb250cm9scyBtYi0wIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzPC9sYWJlbD48aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiByZXF1aXJlZD1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbGlkYXRpb24tcmVxdWlyZWQtbWVzc2FnZT1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBjb250cm9scyBtYi0wIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QaG9uZSBOdW1iZXI8L2xhYmVsPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicGhvbmVcIiB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsaWRhdGlvbi1yZXF1aXJlZC1tZXNzYWdlPVwiUGxlYXNlIGVudGVyIHlvdXIgcGhvbmUgbnVtYmVyLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2sgdGV4dC1kYW5nZXJcIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgY29udHJvbHMgbWItMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+PHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtZXNzYWdlXCIgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsaWRhdGlvbi1yZXF1aXJlZC1tZXNzYWdlPVwiUGxlYXNlIGVudGVyIGEgbWVzc2FnZS5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3VjY2Vzc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4teGxcIiBpZD1cInNlbmRNZXNzYWdlQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCB7QmFubmVyfSBmcm9tICcuL2Jhbm5lcidcclxuZXhwb3J0IHtQcm9kdWN0fSBmcm9tICcuL3Byb2R1Y3QnXHJcbmV4cG9ydCB7QWJvdXR9IGZyb20gJy4vYWJvdXQnO1xyXG5leHBvcnQge0NvbnRhY3RVc30gZnJvbSAnLi9jb250YWN0LXVzJyIsIi8vIGltcG9ydCAnLi9iYW5uZXIuc2NzcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXBlciBmcm9tICdyZWFjdC1pZC1zd2lwZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICBDb250YWluZXJFbDogJ3NlY3Rpb24nLFxyXG4gICAgICAgICAgICBXcmFwcGVyRWw6ICdzZWN0aW9uJyxcclxuICAgICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAvLyAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIC8vICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvLyBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIC8vICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy8gc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgLy8gbGF6eTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVidWlsZE9uVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcmVuZGVyUHJldkJ1dHRvbjogKCkgPT4gPHNwYW4gY2xhc3NOYW1lPVwic3dpcGVyLWJ1dHRvbi1wcmV2XCI+PGltZyBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvaWNvbnMvYXJyb3dfZm9yd2FyZC0yNHB4LnN2Z1wiPjwvaW1nPjwvc3Bhbj4sXHJcbiAgICAgICAgICAgIC8vIHJlbmRlck5leHRCdXR0b246ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tbmV4dFwiPjxpbWcgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL2ljb25zL2Fycm93X2JhY2stMjRweC5zdmdcIj48L2ltZz48L3NwYW4+LFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDU2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPCEtLSBQb3J0Zm9saW8gU2VjdGlvbi0tPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhZ2Utc2VjdGlvbiBwb3J0Zm9saW9cIiBpZD1cInByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBQb3J0Zm9saW8gU2VjdGlvbiBIZWFkaW5nLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBhZ2Utc2VjdGlvbi1oZWFkaW5nIHRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIHRleHQtc2Vjb25kYXJ5IG1iLTBcIj5Qcm9kdWN0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSA8aWZyYW1lIHNyYz1cIi4vdGVzdC5odG1sXCI+PC9pZnJhbWU+IC0tPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gSWNvbiBEaXZpZGVyLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20taWNvblwiPjxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gUG9ydGZvbGlvIEdyaWQgSXRlbXMtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHItNSBwbC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2lwZXIgey4uLnBhcmFtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WydjaGlja2VuJywgJ2VnZycsICdkdWNrJywgJ3F1YWlsJywgJ2dvYXQnXS5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2wtbWQtNCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm9yZGVyLTAgc2hhZG93IG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBzcmM9XCIvaW1nL3Byb2R1Y3QvY2hpY2tlbi5wbmdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPkNvdW50cnkgQ2hpY2tlbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5HbyBzb21ld2hlcmU8L2E+IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQge0Jhbm5lcixQcm9kdWN0LEFib3V0LENvbnRhY3RVc30gZnJvbSAnLi9ob21lJyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5pbXBvcnQge0hlYWRlcixGb290ZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9jb21tb24nXHJcblxyXG5cclxuXHJcbmNsYXNzIE1haW5MYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHt9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IH0gPSB0aGlzLnN0YXRlXHJcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxib2R5IGlkPVwicGFnZS10b3BcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dFxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWFpbmxheW91dCBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbmxheW91dCdcbmltcG9ydCB7IEJhbm5lciwgUHJvZHVjdCwgQWJvdXQsIENvbnRhY3RVcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9wYWdlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TlJTIENISUNLRU48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWFpbmxheW91dD5cbiAgICAgICAgPEJhbm5lciAvPlxuICAgICAgICA8UHJvZHVjdCAvPlxuICAgICAgICA8Q29udGFjdFVzIC8+XG4gICAgICAgIDxBYm91dCAvPlxuXG4gICAgICA8L01haW5sYXlvdXQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pZC1zd2lwZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==