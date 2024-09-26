"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConnect = void 0;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // src/hooks/useToggle.js
var useConnect = exports.useConnect = function useConnect() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var _useState = (0, _react.useState)(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var toggle = function toggle() {
    return setValue(!value);
  };
  return [value, toggle];
};

// export const useWalletSDK = () => {
//   const [sdk] = useState(WalletSDK());
//   const [account, setAccount] = useState(null);
//   const [response, setResponse] = useState(null);

//   useEffect(() => {
//     const cleanup = sdk.setupDeepLinkListener((url) => {
//       // Handle the deep link response
//       const urlParams = new URLSearchParams(url.split("?")[1]);
//       if (urlParams.has("account")) {
//         const newAccount = urlParams.get("account");
//         setAccount(newAccount); // Set the account from the deep link response
//       } else if (urlParams.has("success")) {
//         setResponse(urlParams.get("success")); // Assuming success param
//       } else if (urlParams.has("error")) {
//         setResponse(urlParams.get("error")); // Assuming error param
//       }
//     });

//     return cleanup; // Clean up the listener on unmount
//   }, [sdk]);

//   // Connect to the wallet
//   const connect = async () => {
//     await sdk.connect();
//     // The account will be set through the deep link listener
//   };

//   // Expose SDK methods and state
//   return {
//     connect,
//     account,
//     signMessage: sdk.signMessage,
//     sendTransaction: sdk.sendTransaction,
//     response, // Include the response state
//   };
// };