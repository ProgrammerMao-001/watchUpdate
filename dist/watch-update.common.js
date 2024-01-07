/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./utils/updateModal.vue?vue&type=template&id=2843c149&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "update-modal"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("系统更新🚀")]), _c('div', {
    staticClass: "content"
  }, [_vm._v(" 系统已更新，请刷新页面（请在刷新前注意保存当前页面数据）。 ")]), _c('div', {
    staticClass: "actions"
  }, [_c('button', {
    on: {
      "click": _vm.handleAfterLeave
    }
  }, [_vm._v("忽略")]), _c('button', {
    on: {
      "click": _vm.refresh
    }
  }, [_vm._v("刷新")])])]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./utils/updateModal.vue?vue&type=script&lang=js
/* harmony default export */ var updateModalvue_type_script_lang_js = ({
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    refresh() {
      this.handleAfterLeave();
      // window.location.replace(window.location.href); //没有刷新缓存
      location.reload(true); // 刷新了缓存
    }
  }
});
;// CONCATENATED MODULE: ./utils/updateModal.vue?vue&type=script&lang=js
 /* harmony default export */ var utils_updateModalvue_type_script_lang_js = (updateModalvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./utils/updateModal.vue?vue&type=style&index=0&id=2843c149&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./utils/updateModal.vue?vue&type=style&index=0&id=2843c149&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./utils/updateModal.vue



;


/* normalize component */

var component = normalizeComponent(
  utils_updateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2843c149",
  null
  
)

/* harmony default export */ var updateModal = (component.exports);
;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject);
;// CONCATENATED MODULE: ./utils/index.js
// 引入提示框页面组件


let time = 0; // 计算轮询次数
let version = ""; // 缓存的版本号
let prodFlag = "production" === "production"; // 是否是生产环境
console.log("production", prodFlag, "prodFlag");
let timer = null; // 轮询定时器
// 轮询用检测方法
let timerFuncion = async () => {
  // 次数超过的时候 停止轮询 防止用户挂着网页一直轮询
  if (time >= 5) {
    // 仅清除计时器
    clearInterval(timer);
    return timer = null;
  }
  // fetch 部署后同层级的version文件 并且加上时间戳参数 防止去访问本地硬盘的缓存
  let res = await fetch(`/version.txt?v=${new Date().getTime().toString()}`).then(res => {
    return res.json();
  }).catch(err => {
    console.log(err);
    return clearTimer(); // 访问失败就完全关闭轮询
  });

  // 首次加载网页的时候 存储第一份version
  if (!version) {
    version = res;
    console.log("首次加载版本", version);
  } else if (version != res) {
    console.log("发现版本更新", version);
    // 弹出更新提示 发现verison文件更新了 就代表新部署了
    // 借鉴Element的Message实现挂载vue组件到页面上
    let MessageConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default().extend(updateModal);
    let instance = new MessageConstructor({
      data: {}
    });
    instance.id = new Date().getTime().toString();
    instance.$mount();
    document.body.appendChild(instance.$el);
    return clearTimer();
  }
  time++;
};
// 检测鼠标是否移动 移动代表用户活跃中 把轮询比较用的次数一直清0
let moveFunction = () => {
  // 判断在生产环境下才执行
  if (prodFlag) {
    time = 0;
    // 长时间挂机后 不在轮询的网页 在鼠标活跃于窗口的时候重新检测
    if (!timer) {
      timer = setInterval(timerFuncion, 1000);
    }
  }
};
// 当被main.js 引用的时候 开始轮询于监听鼠标移动事件
if (prodFlag) timer = setInterval(timerFuncion, 5000);
window.addEventListener("mousemove", moveFunction);
// 完全清除轮询 不轮询 不监听鼠标事件
let clearTimer = () => {
  clearInterval(timer);
  window.removeEventListener("mousemove", moveFunction);
  timer = null;
};
;// CONCATENATED MODULE: ./components/index.js
// 公共方法

const components = [];
// 定义install方法
const install = function (Vue) {
  if (install.installed) return;
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
// 导出install方法
/* harmony default export */ var components_0 = ({
  install,
  ...components
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (components_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=watch-update.common.js.map