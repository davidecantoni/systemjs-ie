"bundle";
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("app/lazy.js", ["jquery.js", "app/main.js"], function($) {
  console.log('[OK] lazy init');
});

_removeDefine();
})();
//# sourceMappingURL=lazy-bundle.js.map