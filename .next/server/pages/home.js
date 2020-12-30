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
  }, "Sholinghur Road Nethaji Nagar Arakkonam Near Yamaha show room ", __jsx("br", null), " +91 84896 51082")), __jsx("div", {
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
  })))))), __jsx("div", {
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    class: "navbar navbar-expand-lg text-uppercase fixed-top",
    id: "mainNav"
  }, __jsx("div", {
    class: "container"
  }, __jsx("a", {
    class: "navbar-brand js-scroll-trigger",
    href: "#page-top"
  }, "NSR Chicken"), __jsx("button", {
    class: "navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, "Menu ", __jsx("i", {
    class: "fas fa-bars"
  })), __jsx("div", {
    class: "collapse navbar-collapse",
    id: "navbarResponsive"
  }, __jsx("ul", {
    class: "navbar-nav ml-auto"
  }, __jsx("li", {
    class: "nav-item mx-0 mx-lg-1"
  }, __jsx("a", {
    class: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",
    href: "#product"
  }, "Product")), __jsx("li", {
    class: "nav-item mx-0 mx-lg-1"
  }, __jsx("a", {
    class: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",
    href: "#about"
  }, "About")), __jsx("li", {
    class: "nav-item mx-0 mx-lg-1"
  }, __jsx("a", {
    class: "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",
    href: "#contact"
  }, "Contact")))))));
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import './banner.scss'

class About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let {
      about
    } = this.props;
    return (// <!-- About Section-->
      __jsx("section", {
        class: "page-section bg-primary text-white mb-0",
        id: "about"
      }, __jsx("div", {
        class: "container"
      }, __jsx("h2", {
        class: "page-section-heading text-center text-uppercase text-white"
      }, "About"), __jsx("div", {
        class: "divider-custom divider-light"
      }, __jsx("div", {
        class: "divider-custom-line"
      }), __jsx("div", {
        class: "divider-custom-icon"
      }, __jsx("i", {
        class: "fas fa-star"
      })), __jsx("div", {
        class: "divider-custom-line"
      })), __jsx("div", {
        class: "row"
      }, __jsx("div", {
        class: "col ml-auto"
      }, __jsx("p", {
        class: "lead"
      }, about.text)))))
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import './banner.scss'

class Banner extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let {
      bannerImg
    } = this.props;
    return (// <!-- Masthead-->
      __jsx("header", {
        class: "masthead bg-primary text-white text-center",
        style: {
          backgroundImage: `url(${bannerImg})`
        }
      }, __jsx("div", {
        class: "container banner-container d-flex align-items-center flex-column"
      }, __jsx("h1", {
        class: "masthead-heading text-uppercase mb-0 wow slideInRight"
      }, "NSR farm"), __jsx("div", {
        class: "divider-custom divider-light wow  fadeIn"
      }, __jsx("div", {
        class: "divider-custom-line"
      }), __jsx("div", {
        class: "divider-custom-icon"
      }, __jsx("i", {
        class: "fas fa-star"
      })), __jsx("div", {
        class: "divider-custom-line"
      }))))
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
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simple-react-validator */ "simple-react-validator");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simple_react_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/toast */ "./service/toast.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import './banner.scss'



class ContactUs extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleInputChange", event => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        email: _objectSpread(_objectSpread({}, this.state.email), {}, {
          [name]: value
        })
      });
    });

    _defineProperty(this, "sendEmail", () => {
      let {
        email
      } = this.state;

      if (this.validator.allValid()) {
        this.setState({
          isSendLoder: true
        });
        console.log(JSON.stringify(email), email.body);
        this.validator.hideMessages();
        Email.send({
          Host: "smtp.gmail.com",
          Username: "nsrchicken2020@gmail.com",
          Password: "nsr2020@123",
          To: email.toId,
          From: "nsrchicken2020@gmail.com",
          Subject: "Customer number: " + email.phone,
          Body: email.body
        }).then(message => {
          let email = {
            name: '',
            toId: '',
            phone: '',
            body: ''
          };
          Object(_service_toast__WEBPACK_IMPORTED_MODULE_2__["Toast"])({
            type: 'success',
            message: 'mail sent successfully',
            title: 'success'
          });
          this.setState({
            isSendLoder: false,
            email
          });
        }).catch(error => {
          Object(_service_toast__WEBPACK_IMPORTED_MODULE_2__["Toast"])({
            type: 'danger',
            message: 'mail server error',
            title: 'Error'
          });
          this.setState({
            isSendLoder: false
          });
        });
      } else {
        this.validator.showMessages();
      }
    });

    this.state = {
      email: {
        name: '',
        toId: '',
        phone: '',
        body: ''
      },
      isSendLoder: false
    };
    this.validator = new simple_react_validator__WEBPACK_IMPORTED_MODULE_1___default.a({
      element: message => __jsx("span", {
        className: "error-message text-danger validNo fs14"
      }, message),
      autoForceUpdate: this
    });
  } // componentDidMount() {
  //     this.validator = new SimpleReactValidator({
  //         element: message => (
  //             <span className="error-message text-danger validNo fs14">{message}</span>
  //         ),
  //         autoForceUpdate: this,
  //     });
  // }


  render() {
    let {
      email,
      isSendLoder
    } = this.state;
    return (// <!-- Contact Section-->
      __jsx("section", {
        className: "page-section",
        id: "contact"
      }, __jsx("div", {
        className: "container"
      }, __jsx("h2", {
        className: "page-section-heading text-center text-uppercase text-secondary mb-0"
      }, "CONTACT US"), __jsx("div", {
        className: "divider-custom"
      }, __jsx("div", {
        className: "divider-custom-line"
      }), __jsx("div", {
        className: "divider-custom-icon"
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("div", {
        className: "divider-custom-line"
      })), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-lg-8 mx-auto"
      }, __jsx("div", {
        className: "control-group"
      }, __jsx("div", {
        className: "form-group floating-label-form-group controls mb-0 pb-2"
      }, __jsx("label", null, "Name"), __jsx("input", {
        className: "form-control",
        type: "text",
        placeholder: "Name",
        value: email.name,
        name: "name",
        onChange: this.handleInputChange
      })), this.validator.message('Name', email.name, 'required|max:15')), __jsx("div", {
        className: "control-group"
      }, __jsx("div", {
        className: "form-group floating-label-form-group controls mb-0 pb-2"
      }, __jsx("label", null, "Email Address"), __jsx("input", {
        className: "form-control",
        id: "email",
        type: "email",
        value: email.toId,
        name: "toId",
        onChange: this.handleInputChange,
        placeholder: "Email Address",
        required: "required"
      })), this.validator.message('Email', email.toId, 'required|email')), __jsx("div", {
        className: "control-group"
      }, __jsx("div", {
        className: "form-group floating-label-form-group controls mb-0 pb-2"
      }, __jsx("label", null, "Phone Number"), __jsx("input", {
        className: "form-control",
        id: "phone",
        type: "text",
        value: email.phone,
        name: "phone",
        onChange: this.handleInputChange,
        placeholder: "Phone Number"
      })), this.validator.message('Phone', email.phone, 'required')), __jsx("div", {
        className: "control-group"
      }, __jsx("div", {
        className: "form-group floating-label-form-group controls mb-0 pb-2"
      }, __jsx("label", null, "Message"), __jsx("textarea", {
        className: "form-control",
        id: "message",
        rows: "5",
        placeholder: "Message",
        value: email.body,
        onChange: this.handleInputChange,
        name: "body"
      })), this.validator.message('body', email.body, 'required|max:3000')), __jsx("br", null), __jsx("div", {
        id: "success"
      }), __jsx("div", {
        className: "form-group"
      }, __jsx("button", {
        onClick: this.sendEmail,
        className: "btn btn-primary btn-xl",
        id: "sendMessageButton",
        type: "submit"
      }, isSendLoder ? __jsx("span", {
        className: "spinner-border spinner-border-sm",
        role: "status",
        "aria-hidden": "true"
      }) : "", " Send"))))))
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
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
      slidesPerView: 4,
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
    let {
      productList,
      productLoder
    } = this.props;
    return (// <!-- Portfolio Section-->
      __jsx("section", {
        class: "page-section portfolio product-page",
        id: "product"
      }, __jsx("div", {
        class: "container-fluid"
      }, __jsx("h2", {
        class: "page-section-heading text-center text-uppercase text-secondary mb-0"
      }, "Product"), __jsx("div", {
        class: "divider-custom"
      }, __jsx("div", {
        class: "divider-custom-line"
      }), __jsx("div", {
        class: "divider-custom-icon"
      }, __jsx("i", {
        class: "fas fa-star"
      })), __jsx("div", {
        class: "divider-custom-line"
      })), __jsx("div", {
        class: "row pr-5 pl-5"
      }, productLoder && [1, 2, 3, 4].map((data, i) => __jsx("div", {
        className: "col-md-3 "
      }, __jsx("div", {
        className: `card mb-4 `
      }, __jsx("div", {
        className: "card-img-top",
        style: {
          height: '250px'
        }
      }, __jsx("div", {
        className: "align-items-center h-100 d-flex justify-content-center"
      }, __jsx("div", {
        class: "lds-ripple"
      }, __jsx("div", null), __jsx("div", null)))), __jsx("div", {
        className: "card-body",
        style: {
          height: '221px'
        }
      }, __jsx("div", {
        className: "ph-loader ph-19h mb-3 w-50"
      }), __jsx("div", {
        className: "ph-loader ph-5h w-25"
      }))))), __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, params, !productLoder && productList.map(({
        distribution,
        Image,
        Price,
        saleType,
        name,
        active
      }, i) => __jsx("div", {
        className: "item"
      }, __jsx("div", {
        className: "card border-0 shadow mb-5"
      }, __jsx("img", {
        className: "card-img-top",
        src: Image,
        alt: "Card image cap"
      }), __jsx("div", {
        class: "card-body"
      }, __jsx("h5", {
        class: "card-title"
      }, name), __jsx("p", {
        class: "card-text"
      }, distribution), __jsx("h5", {
        className: "text-right"
      }, "1", saleType, " ", Price, " \u20B9")))))))))
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import './mainlayout.scss';

class MainLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    let {} = this.state;
    let {
      children,
      headerLoder
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_common__WEBPACK_IMPORTED_MODULE_1__["Header"], null), !headerLoder ? __jsx("div", {
      class: "progress-line header-progress"
    }) : '', headerLoder ? __jsx("body", {
      id: "page-top"
    }, children) : '', headerLoder ? __jsx(_component_common__WEBPACK_IMPORTED_MODULE_1__["Footer"], null) : '');
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./pages/home/firebaseConfig.js":
/*!**************************************!*\
  !*** ./pages/home/firebaseConfig.js ***!
  \**************************************/
/*! exports provided: storage, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__);






if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp({
    apiKey: "AIzaSyC2GIk1pnAtTdDgn-UiqIDW3y4EGy448pg",
    authDomain: "nrs-cms.firebaseapp.com",
    databaseURL: "https://nrs-cms-default-rtdb.firebaseio.com",
    projectId: "nrs-cms",
    storageBucket: "nrs-cms.appspot.com",
    messagingSenderId: "94826903466",
    appId: "1:94826903466:web:24fe51cce92e1cb2e39dd3"
  });
} else {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
} //  export const auth = app.auth();


const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage().ref();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore(); //  export default app

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
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebaseConfig */ "./pages/home/firebaseConfig.js");
/* harmony import */ var _service_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/toast */ "./service/toast.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      bannerImg: '',
      productList: [],
      productLoder: true,
      about: {
        createDate: '',
        text: '',
        updatedDate: ''
      },
      allPromos: []
    });
  }

  componentDidMount() {
    let {
      allPromos
    } = this.state;
    _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("banner").doc("001").get().then(docRef => {
      let {
        b_img
      } = docRef.data();
      allPromos.push('1');
      this.setState({
        bannerImg: b_img,
        allPromos
      });
    }).catch(error => {
      Object(_service_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"])({
        type: 'danger',
        message: 'Internal server error 500',
        title: 'Error'
      });
    });
    _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("product").where("active", "==", true).get().then(querySnapshot => {
      let data = querySnapshot.docs.map(doc => {
        console.log('LOG 1', doc.data());
        return _objectSpread({
          id: doc.id
        }, doc.data());
      });
      console.log('LOG 2', data);
      allPromos.push('2');
      this.setState({
        productList: data,
        productLoder: false,
        allPromos
      });
    }).catch(error => {
      Object(_service_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"])({
        type: 'danger',
        message: 'Internal server error 500',
        title: 'Error'
      });
    });
    _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__["db"].collection("about").doc("001").get().then(docRef => {
      allPromos.push('3');
      this.setState({
        about: docRef.data(),
        isLoder: false,
        allPromos
      }); // console.log(docRef.data())
    }).catch(error => {
      Object(_service_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"])({
        type: 'danger',
        message: 'Internal server error 500',
        title: 'Error'
      });
      this.setState({
        isLoder: false
      });
    });
  }

  render() {
    let {
      bannerImg,
      productList,
      productLoder,
      about,
      allPromos
    } = this.state;
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "NRS CHICKEN"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico"
    }), __jsx("script", {
      src: "https://smtpjs.com/v3/smtp.js"
    })), __jsx(_layout_mainlayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      headerLoder: !(allPromos.length !== 3)
    }, allPromos.length === 3 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
      bannerImg: bannerImg
    }), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_3__["Product"], {
      productList: productList,
      productLoder: productLoder
    }), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_3__["ContactUs"], null), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_3__["About"], {
      about: about
    })) : ""));
  }

}

/***/ }),

/***/ "./service/toast.js":
/*!**************************!*\
  !*** ./service/toast.js ***!
  \**************************/
/*! exports provided: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-notifications-component */ "react-notifications-component");
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_notifications_component__WEBPACK_IMPORTED_MODULE_0__);

const Toast = ({
  type = 'success',
  message,
  title
}) => {
  console.log(typeof message);
  react_notifications_component__WEBPACK_IMPORTED_MODULE_0__["store"].addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
}; // Notification type
// success
// danger
// info
// default
// warning

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

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

/***/ }),

/***/ "react-notifications-component":
/*!************************************************!*\
  !*** external "react-notifications-component" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-notifications-component");

/***/ }),

/***/ "simple-react-validator":
/*!*****************************************!*\
  !*** external "simple-react-validator" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-react-validator");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9iYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L3BhZ2VzL2hvbWUvY29udGFjdC11cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvcGFnZXMvaG9tZS9wcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvbWFpbmxheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2ZpcmViYXNlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS90b2FzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZGF0YWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pZC1zd2lwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ub3RpZmljYXRpb25zLWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNpbXBsZS1yZWFjdC12YWxpZGF0b3JcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJIZWFkZXIiLCJBYm91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYWJvdXQiLCJwcm9wcyIsInRleHQiLCJCYW5uZXIiLCJiYW5uZXJJbWciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJDb250YWN0VXMiLCJjb25zdHJ1Y3RvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsIm5hbWUiLCJzZXRTdGF0ZSIsImVtYWlsIiwic3RhdGUiLCJ2YWxpZGF0b3IiLCJhbGxWYWxpZCIsImlzU2VuZExvZGVyIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5IiwiaGlkZU1lc3NhZ2VzIiwiRW1haWwiLCJzZW5kIiwiSG9zdCIsIlVzZXJuYW1lIiwiUGFzc3dvcmQiLCJUbyIsInRvSWQiLCJGcm9tIiwiU3ViamVjdCIsInBob25lIiwiQm9keSIsInRoZW4iLCJtZXNzYWdlIiwiVG9hc3QiLCJ0aXRsZSIsImNhdGNoIiwiZXJyb3IiLCJzaG93TWVzc2FnZXMiLCJTaW1wbGVSZWFjdFZhbGlkYXRvciIsImVsZW1lbnQiLCJhdXRvRm9yY2VVcGRhdGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsInNlbmRFbWFpbCIsIlByb2R1Y3QiLCJwYXJhbXMiLCJzcGFjZUJldHdlZW4iLCJDb250YWluZXJFbCIsIldyYXBwZXJFbCIsInJlYnVpbGRPblVwZGF0ZSIsInNsaWRlc1BlclZpZXciLCJmcmVlTW9kZSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImJyZWFrcG9pbnRzIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0TG9kZXIiLCJtYXAiLCJkYXRhIiwiaSIsImhlaWdodCIsImRpc3RyaWJ1dGlvbiIsIkltYWdlIiwiUHJpY2UiLCJzYWxlVHlwZSIsImFjdGl2ZSIsIk1haW5MYXlvdXQiLCJjaGlsZHJlbiIsImhlYWRlckxvZGVyIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwic3RvcmFnZSIsInJlZiIsImRiIiwiZmlyZXN0b3JlIiwiSG9tZSIsImNyZWF0ZURhdGUiLCJ1cGRhdGVkRGF0ZSIsImFsbFByb21vcyIsImNvbXBvbmVudERpZE1vdW50IiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsImRvY1JlZiIsImJfaW1nIiwicHVzaCIsIndoZXJlIiwicXVlcnlTbmFwc2hvdCIsImRvY3MiLCJpZCIsImlzTG9kZXIiLCJzdG9yZSIsImFkZE5vdGlmaWNhdGlvbiIsImluc2VydCIsImNvbnRhaW5lciIsImFuaW1hdGlvbkluIiwiYW5pbWF0aW9uT3V0IiwiZGlzbWlzcyIsImR1cmF0aW9uIiwib25TY3JlZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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YSxRQUFiLENBTks7QUFPbEJDLGdCQUFZLEVBQUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQVBJO0FBUWxCQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFLElBREg7QUFFUEMsY0FBUSxFQUFFO0FBRkg7QUFSUyxHQUF0QjtBQWFILENBZkksQyxDQWlCTDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVTs7Ozs7Ozs7Ozs7QUN2QkEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaG9tZS9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiAvLyA8IS0tIEZvb3Rlci0tPiAqL31cclxuICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgey8qIDwhLS0gRm9vdGVyIExvY2F0aW9uLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgbWItNSBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC11cHBlcmNhc2UgbWItNFwiPkxvY2F0aW9uPC9oND5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWQgbWItMFwiPlNob2xpbmdodXIgUm9hZCBOZXRoYWppIE5hZ2FyIEFyYWtrb25hbSBOZWFyIFlhbWFoYSBzaG93IHJvb20gPGJyIC8+ICs5MSA4NDg5NiA1MTA4MjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIEZvb3RlciBTb2NpYWwgSWNvbnMtLT4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBtYi01IG1iLWxnLTBcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZSBtYi00XCI+Rk9MTE9XIFVTPC9oND5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc29jaWFsIG14LTFcIiBocmVmPVwiI1wiPjxpXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZhYiBmYS1mdyBmYS1mYWNlYm9vay1mXCI+PC9pPjwvYT48YSBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tc29jaWFsIG14LTFcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFiIGZhLWZ3IGZhLXR3aXR0ZXJcIj48L2k+PC9hPjxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNvY2lhbCBteC0xXCIgaHJlZj1cIiNcIj48aVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYWIgZmEtZncgZmEtbGlua2VkaW4taW5cIj48L2k+PC9hPjxhIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zb2NpYWwgbXgtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYWIgZmEtZncgZmEtZHJpYmJibGVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gRm9vdGVyIEFib3V0IFRleHQtLT4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZSBtYi00XCI+QWJvdXQgRnJlZWxhbmNlcjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkIG1iLTBcIj5GcmVlbGFuY2UgaXMgYSBmcmVlIHRvIHVzZSwgTUlUIGxpY2Vuc2VkIEJvb3RzdHJhcCB0aGVtZSBjcmVhdGVkIGJ5IDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3N0YXJ0Ym9vdHN0cmFwLmNvbVwiPlN0YXJ0IEJvb3RzdHJhcDwvYT4uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIHsvKiAvLyAgPCEtLSBDb3B5cmlnaHQgU2VjdGlvbi0tPiAqL31cclxuICAgICAgPGRpdiBjbGFzcz1cImNvcHlyaWdodCBweS00IHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PHNtYWxsPkNvcHlyaWdodCDCqSBOUlMgMjAyMDwvc21hbGw+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogLy8gPCEtLSBOYXZpZ2F0aW9uLS0+ICovfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIHRleHQtdXBwZXJjYXNlIGZpeGVkLXRvcFwiIGlkPVwibWFpbk5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIGpzLXNjcm9sbC10cmlnZ2VyXCIgaHJlZj1cIiNwYWdlLXRvcFwiPk5TUiBDaGlja2VuPC9hPjxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkIGJnLXByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJSZXNwb25zaXZlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5NZW51IDxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyUmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIG14LTAgbXgtbGctMVwiPjxhIGNsYXNzPVwibmF2LWxpbmsgcHktMyBweC0wIHB4LWxnLTMgcm91bmRlZCBqcy1zY3JvbGwtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwcm9kdWN0XCI+UHJvZHVjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gbXgtMCBteC1sZy0xXCI+PGEgY2xhc3M9XCJuYXYtbGluayBweS0zIHB4LTAgcHgtbGctMyByb3VuZGVkIGpzLXNjcm9sbC10cmlnZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIG14LTAgbXgtbGctMVwiPjxhIGNsYXNzPVwibmF2LWxpbmsgcHktMyBweC0wIHB4LWxnLTMgcm91bmRlZCBqcy1zY3JvbGwtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQge0Zvb3Rlcn0gZnJvbSAnLi9mb290ZXInXHJcbmV4cG9ydCB7SGVhZGVyfSBmcm9tICcuL2hlYWRlciciLCIvLyBpbXBvcnQgJy4vYmFubmVyLnNjc3MnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IHthYm91dH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDwhLS0gQWJvdXQgU2VjdGlvbi0tPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhZ2Utc2VjdGlvbiBiZy1wcmltYXJ5IHRleHQtd2hpdGUgbWItMFwiIGlkPVwiYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBBYm91dCBTZWN0aW9uIEhlYWRpbmctLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGFnZS1zZWN0aW9uLWhlYWRpbmcgdGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZVwiPkFib3V0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBJY29uIERpdmlkZXItLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tIGRpdmlkZXItbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWljb25cIj48aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIEFib3V0IFNlY3Rpb24gQ29udGVudC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+e2Fib3V0LnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5Zb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBjdXN0b20gYXZhdGFyIGZvciB0aGUgbWFzdGhlYWQsIGNoYW5nZSB0aGUgaWNvbiBpbiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZpZGVycywgYW5kIGFkZCB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gdGhlIGNvbnRhY3QgZm9ybSB0byBtYWtlIGl0IGZ1bGx5IGZ1bmN0aW9uYWwhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQWJvdXQgU2VjdGlvbiBCdXR0b24tLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8gaW1wb3J0ICcuL2Jhbm5lci5zY3NzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBiYW5uZXJJbWcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvLyA8IS0tIE1hc3RoZWFkLS0+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJtYXN0aGVhZCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYW5uZXJJbWd9KWAgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBiYW5uZXItY29udGFpbmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIHsvKiA8IS0tIDxpbWcgY2xhc3M9XCJtYXN0aGVhZC1hdmF0YXIgbWItNVwiIHNyYz1cImFzc2V0cy9pbWcvYXZhdGFhYXJzLnN2Z1wiIGFsdD1cIlwiIC8+IC0tPiAqL31cclxuICAgICAgICAgIDxoMSBjbGFzcz1cIm1hc3RoZWFkLWhlYWRpbmcgdGV4dC11cHBlcmNhc2UgbWItMCB3b3cgc2xpZGVJblJpZ2h0XCIgPk5TUiBmYXJtPC9oMT5cclxuICAgICAgICAgIHsvKiA8IS0tIEljb24gRGl2aWRlci0tPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbSBkaXZpZGVyLWxpZ2h0IHdvdyAgZmFkZUluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1pY29uXCI+PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY3VzdG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDwhLS0gTWFzdGhlYWQgU3ViaGVhZGluZy0tPiAqL31cclxuICAgICAgICAgIHsvKiA8cCBjbGFzcz1cIm1hc3RoZWFkLXN1YmhlYWRpbmcgZm9udC13ZWlnaHQtbGlnaHQgbWItMCAgd293ICBmYWRlSW5SaWdodFwiPkNvdW50cnkgQ2hpY2tlbiBXaXRoIEVnZyAtIER1Y2sgV2l0aCBFZ2cgLSBRdWFpbCBXaXRoXHJcbiAgICAgICAgICAgICAgICAgIEVnZyAtIEdvYXQgPC9wPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4iLCIvLyBpbXBvcnQgJy4vYmFubmVyLnNjc3MnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaW1wbGVSZWFjdFZhbGlkYXRvciBmcm9tICdzaW1wbGUtcmVhY3QtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZS90b2FzdFwiO1xyXG5leHBvcnQgY2xhc3MgQ29udGFjdFVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICB0b0lkOiAnJyxcclxuICAgICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICcnXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc1NlbmRMb2RlcjogZmFsc2VcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFNpbXBsZVJlYWN0VmFsaWRhdG9yKHtcclxuICAgICAgICAgICAgZWxlbWVudDogbWVzc2FnZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlIHRleHQtZGFuZ2VyIHZhbGlkTm8gZnMxNFwiPnttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgYXV0b0ZvcmNlVXBkYXRlOiB0aGlzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyAgICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgU2ltcGxlUmVhY3RWYWxpZGF0b3Ioe1xyXG4gICAgLy8gICAgICAgICBlbGVtZW50OiBtZXNzYWdlID0+IChcclxuICAgIC8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2UgdGV4dC1kYW5nZXIgdmFsaWRObyBmczE0XCI+e21lc3NhZ2V9PC9zcGFuPlxyXG4gICAgLy8gICAgICAgICApLFxyXG4gICAgLy8gICAgICAgICBhdXRvRm9yY2VVcGRhdGU6IHRoaXMsXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHNlbmRFbWFpbCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgeyBlbWFpbCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLmFsbFZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2VuZExvZGVyOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVtYWlsKSxlbWFpbC5ib2R5KVxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5oaWRlTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgRW1haWwuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBIb3N0OiBcInNtdHAuZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogXCJuc3JjaGlja2VuMjAyMEBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOiBcIm5zcjIwMjBAMTIzXCIsXHJcbiAgICAgICAgICAgICAgICBUbzogZW1haWwudG9JZCxcclxuICAgICAgICAgICAgICAgIEZyb206IFwibnNyY2hpY2tlbjIwMjBAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBTdWJqZWN0OiBcIkN1c3RvbWVyIG51bWJlcjogXCIgKyBlbWFpbC5waG9uZSxcclxuICAgICAgICAgICAgICAgIEJvZHk6IGVtYWlsLmJvZHksXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlbWFpbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0b0lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJydcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBUb2FzdCh7IHR5cGU6ICdzdWNjZXNzJywgbWVzc2FnZTogJ21haWwgc2VudCBzdWNjZXNzZnVsbHknLCB0aXRsZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTZW5kTG9kZXI6IGZhbHNlLCBlbWFpbCB9KVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvYXN0KHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdtYWlsIHNlcnZlciBlcnJvcicsIHRpdGxlOiAnRXJyb3InIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTZW5kTG9kZXI6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3Iuc2hvd01lc3NhZ2VzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IGVtYWlsLCBpc1NlbmRMb2RlciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPCEtLSBDb250YWN0IFNlY3Rpb24tLT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENvbnRhY3QgU2VjdGlvbiBIZWFkaW5nLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXNlY29uZGFyeSBtYi0wXCI+Q09OVEFDVCBVUzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gSWNvbiBEaXZpZGVyLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlci1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlci1jdXN0b20taWNvblwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXItY3VzdG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBDb250YWN0IFNlY3Rpb24gRm9ybS0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFRvIGNvbmZpZ3VyZSB0aGUgY29udGFjdCBmb3JtIGVtYWlsIGFkZHJlc3MsIGdvIHRvIG1haWwvY29udGFjdF9tZS5waHAgYW5kIHVwZGF0ZSB0aGUgZW1haWwgYWRkcmVzcyBpbiB0aGUgUEhQIGZpbGUgb24gbGluZSAxOS4tLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgY29udHJvbHMgbWItMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e2VtYWlsLm5hbWV9IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMudmFsaWRhdG9yLm1lc3NhZ2UoJ05hbWUnLCBlbWFpbC5uYW1lLCAncmVxdWlyZWR8bWF4OjE1Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGNvbnRyb2xzIG1iLTAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsLnRvSWR9IG5hbWU9XCJ0b0lkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRvci5tZXNzYWdlKCdFbWFpbCcsIGVtYWlsLnRvSWQsICdyZXF1aXJlZHxlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2wtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBjb250cm9scyBtYi0wIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBob25lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17ZW1haWwucGhvbmV9IG5hbWU9XCJwaG9uZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRvci5tZXNzYWdlKCdQaG9uZScsIGVtYWlsLnBob25lLCAncmVxdWlyZWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgY29udHJvbHMgbWItMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibWVzc2FnZVwiIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIHZhbHVlPXtlbWFpbC5ib2R5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gbmFtZT1cImJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRvci5tZXNzYWdlKCdib2R5JywgZW1haWwuYm9keSwgJ3JlcXVpcmVkfG1heDozMDAwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPjxidXR0b24gb25DbGljaz17dGhpcy5zZW5kRW1haWx9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teGxcIiBpZD1cInNlbmRNZXNzYWdlQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+e2lzU2VuZExvZGVyID8gPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIiByb2xlPVwic3RhdHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPiA6IFwiXCJ9IFNlbmQ8L2J1dHRvbj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCB7QmFubmVyfSBmcm9tICcuL2Jhbm5lcidcclxuZXhwb3J0IHtQcm9kdWN0fSBmcm9tICcuL3Byb2R1Y3QnXHJcbmV4cG9ydCB7QWJvdXR9IGZyb20gJy4vYWJvdXQnO1xyXG5leHBvcnQge0NvbnRhY3RVc30gZnJvbSAnLi9jb250YWN0LXVzJyIsIi8vIGltcG9ydCAnLi9iYW5uZXIuc2NzcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXBlciBmcm9tICdyZWFjdC1pZC1zd2lwZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICBDb250YWluZXJFbDogJ3NlY3Rpb24nLFxyXG4gICAgICAgICAgICBXcmFwcGVyRWw6ICdzZWN0aW9uJyxcclxuICAgICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAvLyAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIC8vICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvLyBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIC8vICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy8gc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgLy8gbGF6eTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVidWlsZE9uVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHJlbmRlclByZXZCdXR0b246ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tcHJldlwiPjxpbWcgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL2ljb25zL2Fycm93X2ZvcndhcmQtMjRweC5zdmdcIj48L2ltZz48L3NwYW4+LFxyXG4gICAgICAgICAgICAvLyByZW5kZXJOZXh0QnV0dG9uOiAoKSA9PiA8c3BhbiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLW5leHRcIj48aW1nIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9pY29ucy9hcnJvd19iYWNrLTI0cHguc3ZnXCI+PC9pbWc+PC9zcGFuPixcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA1Njc6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHsgcHJvZHVjdExpc3QsIHByb2R1Y3RMb2RlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8IS0tIFBvcnRmb2xpbyBTZWN0aW9uLS0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1zZWN0aW9uIHBvcnRmb2xpbyBwcm9kdWN0LXBhZ2VcIiBpZD1cInByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBQb3J0Zm9saW8gU2VjdGlvbiBIZWFkaW5nLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBhZ2Utc2VjdGlvbi1oZWFkaW5nIHRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlIHRleHQtc2Vjb25kYXJ5IG1iLTBcIj5Qcm9kdWN0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSA8aWZyYW1lIHNyYz1cIi4vdGVzdC5odG1sXCI+PC9pZnJhbWU+IC0tPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gSWNvbiBEaXZpZGVyLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20tbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jdXN0b20taWNvblwiPjxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWN1c3RvbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gUG9ydGZvbGlvIEdyaWQgSXRlbXMtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHItNSBwbC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0TG9kZXIgJiYgWzEsIDIsIDMsIDRdLm1hcCgoZGF0YSwgaSkgPT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZCBtYi00IGB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzdHlsZT17eyBoZWlnaHQ6ICcyNTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZHMtcmlwcGxlXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzIyMXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGgtbG9hZGVyIHBoLTE5aCBtYi0zIHctNTBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGgtbG9hZGVyIHBoLTVoIHctMjVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyIHsuLi5wYXJhbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFwcm9kdWN0TG9kZXIgJiYgcHJvZHVjdExpc3QubWFwKCh7IGRpc3RyaWJ1dGlvbiwgSW1hZ2UsIFByaWNlLCBzYWxlVHlwZSwgbmFtZSxhY3RpdmUgfSwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvdyBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtJbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e2Rpc3RyaWJ1dGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjF7c2FsZVR5cGV9IHtQcmljZX0g4oK5PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCB7QmFubmVyLFByb2R1Y3QsQWJvdXQsQ29udGFjdFVzfSBmcm9tICcuL2hvbWUnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEhlYWRlciwgRm9vdGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L2NvbW1vbidcclxuXHJcbi8vIGltcG9ydCAnLi9tYWlubGF5b3V0LnNjc3MnO1xyXG5cclxuY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0ge31cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgfSA9IHRoaXMuc3RhdGVcclxuICAgIGxldCB7IGNoaWxkcmVuLGhlYWRlckxvZGVyIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgeyFoZWFkZXJMb2Rlcj9cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtbGluZSBoZWFkZXItcHJvZ3Jlc3NcIj48L2Rpdj46Jyd9XHJcbiAgICAgICAgICB7aGVhZGVyTG9kZXI/ICA8Ym9keSBpZD1cInBhZ2UtdG9wXCI+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9ib2R5PjonJ31cclxuICAgICAgICB7aGVhZGVyTG9kZXI/IDxGb290ZXIgLz46Jyd9XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXRcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIlxyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCJcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiXHJcbmltcG9ydCAnZmlyZWJhc2UvZGF0YWJhc2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICBhcGlLZXk6IFwiQUl6YVN5QzJHSWsxcG5BdFRkRGduLVVpcUlEVzN5NEVHeTQ0OHBnXCIsXHJcbiAgICAgICAgYXV0aERvbWFpbjogXCJucnMtY21zLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbnJzLWNtcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwibnJzLWNtc1wiLFxyXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwibnJzLWNtcy5hcHBzcG90LmNvbVwiLFxyXG4gICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjk0ODI2OTAzNDY2XCIsXHJcbiAgICAgICAgYXBwSWQ6IFwiMTo5NDgyNjkwMzQ2Njp3ZWI6MjRmZTUxY2NlOTJlMWNiMmUzOWRkM1wiXHJcbiAgICB9KTtcclxuXHJcbn0gZWxzZSB7XHJcbiAgICBmaXJlYmFzZS5hcHAoKVxyXG59XHJcbi8vICBleHBvcnQgY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpO1xyXG5leHBvcnQgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuLy8gIGV4cG9ydCBkZWZhdWx0IGFwcCIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNYWlubGF5b3V0IGZyb20gJy4uLy4uL2xheW91dC9tYWlubGF5b3V0J1xuaW1wb3J0IHsgQmFubmVyLCBQcm9kdWN0LCBBYm91dCwgQ29udGFjdFVzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L3BhZ2VzJ1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZS90b2FzdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICBzdGF0ZSA9IHtcbiAgICBiYW5uZXJJbWc6ICcnLFxuICAgIHByb2R1Y3RMaXN0OiBbXSxcbiAgICBwcm9kdWN0TG9kZXI6IHRydWUsXG4gICAgYWJvdXQ6IHtcbiAgICAgIGNyZWF0ZURhdGU6ICcnLFxuICAgICAgdGV4dDogJycsXG4gICAgICB1cGRhdGVkRGF0ZTogJydcbiAgICB9LFxuICAgIGFsbFByb21vczogW11cbiAgfVxuXG5cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCB7IGFsbFByb21vcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBkYi5jb2xsZWN0aW9uKFwiYmFubmVyXCIsKS5kb2MoXCIwMDFcIikuZ2V0KCkudGhlbigoZG9jUmVmKSA9PiB7XG4gICAgICBsZXQgeyBiX2ltZyB9ID0gZG9jUmVmLmRhdGEoKTtcbiAgICAgIGFsbFByb21vcy5wdXNoKCcxJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFubmVySW1nOiBiX2ltZywgYWxsUHJvbW9zIH0pXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7IFxuICAgICAgIFRvYXN0KHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IgNTAwJywgdGl0bGU6ICdFcnJvcicgfSlcbiAgICAgIH0pXG5cbiAgICBkYi5jb2xsZWN0aW9uKFwicHJvZHVjdFwiKVxuICAgIC53aGVyZShcImFjdGl2ZVwiLCBcIj09XCIsIHRydWUpLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgIGxldCBkYXRhID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTE9HIDEnLCBkb2MuZGF0YSgpKTtcblxuICAgICAgICByZXR1cm4geyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ0xPRyAyJywgZGF0YSk7XG4gICAgICBhbGxQcm9tb3MucHVzaCgnMicpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RMaXN0OiBkYXRhLCBwcm9kdWN0TG9kZXI6IGZhbHNlLCBhbGxQcm9tb3MgfSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHsgXG4gICAgICAgVG9hc3QoeyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvciA1MDAnLCB0aXRsZTogJ0Vycm9yJyB9KVxuICAgICAgfSlcblxuXG4gICAgZGIuY29sbGVjdGlvbihcImFib3V0XCIpLmRvYyhcIjAwMVwiKS5nZXQoKS50aGVuKChkb2NSZWYpID0+IHtcbiAgICAgIGFsbFByb21vcy5wdXNoKCczJylcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhYm91dDogZG9jUmVmLmRhdGEoKSwgaXNMb2RlcjogZmFsc2UsIGFsbFByb21vcyB9KVxuICAgICAgLy8gY29uc29sZS5sb2coZG9jUmVmLmRhdGEoKSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHsgXG4gICAgICBUb2FzdCh7IHR5cGU6ICdkYW5nZXInLCBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yIDUwMCcsIHRpdGxlOiAnRXJyb3InIH0pIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9kZXI6IGZhbHNlIH0pXG4gICAgIH0pXG4gIH1cblxuXG5cbiAgXG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBiYW5uZXJJbWcsIHByb2R1Y3RMaXN0LCBwcm9kdWN0TG9kZXIsIGFib3V0LCBhbGxQcm9tb3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TlJTIENISUNLRU48L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc210cGpzLmNvbS92My9zbXRwLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPE1haW5sYXlvdXQgaGVhZGVyTG9kZXI9eyEoYWxsUHJvbW9zLmxlbmd0aCAhPT0gMyl9PlxuICAgICAgICAgIHthbGxQcm9tb3MubGVuZ3RoID09PSAzID9cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxCYW5uZXIgYmFubmVySW1nPXtiYW5uZXJJbWd9IC8+XG4gICAgICAgICAgICAgIDxQcm9kdWN0IHByb2R1Y3RMaXN0PXtwcm9kdWN0TGlzdH0gcHJvZHVjdExvZGVyPXtwcm9kdWN0TG9kZXJ9IC8+XG4gICAgICAgICAgICAgIDxDb250YWN0VXMgLz5cbiAgICAgICAgICAgICAgPEFib3V0IGFib3V0PXthYm91dH0gLz5cbiAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG4gICAgICAgIDwvTWFpbmxheW91dD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdyZWFjdC1ub3RpZmljYXRpb25zLWNvbXBvbmVudCc7XHJcbmV4cG9ydCBjb25zdCBUb2FzdCA9ICh7IHR5cGUgPSAnc3VjY2VzcycsIG1lc3NhZ2UsdGl0bGUgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIG1lc3NhZ2UpO1xyXG4gICAgICBzdG9yZS5hZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICBpbnNlcnQ6IFwidG9wXCIsXHJcbiAgICAgICAgICBjb250YWluZXI6IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICBhbmltYXRpb25JbjogW1wiYW5pbWF0ZWRcIiwgXCJmYWRlSW5cIl0sXHJcbiAgICAgICAgICBhbmltYXRpb25PdXQ6IFtcImFuaW1hdGVkXCIsIFwiZmFkZU91dFwiXSxcclxuICAgICAgICAgIGRpc21pc3M6IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgICAgICAgIG9uU2NyZWVuOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBOb3RpZmljYXRpb24gdHlwZVxyXG4vLyBzdWNjZXNzXHJcbi8vIGRhbmdlclxyXG4vLyBpbmZvXHJcbi8vIGRlZmF1bHRcclxuLy8gd2FybmluZyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2RhdGFiYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pZC1zd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtbm90aWZpY2F0aW9ucy1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2ltcGxlLXJlYWN0LXZhbGlkYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9