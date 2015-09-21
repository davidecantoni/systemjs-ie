System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {},
  bundles: {
    "dist/lazy-bundle.js": [
      "app/lazy.js"
    ]
  },

  map: {
    "jquery": "jquery.js"
  }
});
