"bundle";
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("jquery.js", [], function() {
  "use strict";
  return window.jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("app/main.js", ["jquery.js", "module"], function($) {
  console.log('[OK] main script init');
});

_removeDefine();
})();
//# sourceMappingURL=main-bundle.js.map