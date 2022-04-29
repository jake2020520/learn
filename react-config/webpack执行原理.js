;(function () {
  var __webpack_modules__ = {
    './src/js/main.js': function (module) {
      module.exports = (num1, num2) => {
        return num1 + num2
      }
    },
  }
  // 缓存
  var __webpack_module_cache__ = {}
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId]
    if (cachedModule !== undefined) {
      return cachedModule.exports
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    })
    // 没有缓存，去 __webpack_modules__ 获取 并且赋值给module.exports
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    return module.exports
  }
  var __webpack_exports__ = {}
  !(function () {
    const num = __webpack_require__(/*! ./js/main */ './src/js/main.js')
    console.log(num(1, 2))
  })()
})()
