"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  WalletSDK: true
};
Object.defineProperty(exports, "WalletSDK", {
  enumerable: true,
  get: function get() {
    return _walletSdk.WalletSDK;
  }
});
var _sdkHooks = require("./hooks/sdkHooks");
Object.keys(_sdkHooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sdkHooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sdkHooks[key];
    }
  });
});
var _utils = require("./utils/utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});
var _walletSdk = require("./utils/wallet-sdk");