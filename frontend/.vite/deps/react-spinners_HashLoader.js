import {
  require_react
} from "./chunk-2CLD7BNN.js";
import {
  __commonJS
} from "./chunk-WOOG5QLI.js";

// node_modules/react-spinners/helpers/colors.js
var require_colors = __commonJS({
  "node_modules/react-spinners/helpers/colors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateRgba = void 0;
    var BasicColors;
    (function(BasicColors2) {
      BasicColors2["maroon"] = "#800000";
      BasicColors2["red"] = "#FF0000";
      BasicColors2["orange"] = "#FFA500";
      BasicColors2["yellow"] = "#FFFF00";
      BasicColors2["olive"] = "#808000";
      BasicColors2["green"] = "#008000";
      BasicColors2["purple"] = "#800080";
      BasicColors2["fuchsia"] = "#FF00FF";
      BasicColors2["lime"] = "#00FF00";
      BasicColors2["teal"] = "#008080";
      BasicColors2["aqua"] = "#00FFFF";
      BasicColors2["blue"] = "#0000FF";
      BasicColors2["navy"] = "#000080";
      BasicColors2["black"] = "#000000";
      BasicColors2["gray"] = "#808080";
      BasicColors2["silver"] = "#C0C0C0";
      BasicColors2["white"] = "#FFFFFF";
    })(BasicColors || (BasicColors = {}));
    var handleRgbColorString = function(color, opacity) {
      if (color.includes("/")) {
        return color.replace("rgb(", "rgba(");
      }
      var rgbValues = color.substring(color.startsWith("rgba(") ? 5 : 4, color.length - 1).trim();
      var splittedByCommas = rgbValues.split(",");
      if (splittedByCommas.length === 4) {
        return color.replace("rgb(", "rgba(");
      }
      if (splittedByCommas.length === 3) {
        return "rgba(".concat(rgbValues, ", ").concat(opacity, ")");
      }
      return "rgba(".concat(rgbValues, " / ").concat(opacity, ")");
    };
    var calculateRgba = function(color, opacity) {
      if (color.startsWith("rgb")) {
        return handleRgbColorString(color, opacity);
      }
      if (Object.keys(BasicColors).includes(color)) {
        color = BasicColors[color];
      }
      if (color[0] === "#") {
        color = color.slice(1);
      }
      if (color.length === 3) {
        var res_1 = "";
        color.split("").forEach(function(c) {
          res_1 += c;
          res_1 += c;
        });
        color = res_1;
      }
      var rgbValues = (color.match(/.{2}/g) || []).map(function(hex) {
        return parseInt(hex, 16);
      }).join(", ");
      return "rgba(".concat(rgbValues, ", ").concat(opacity, ")");
    };
    exports.calculateRgba = calculateRgba;
  }
});

// node_modules/react-spinners/helpers/unitConverter.js
var require_unitConverter = __commonJS({
  "node_modules/react-spinners/helpers/unitConverter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cssValue = exports.parseLengthAndUnit = void 0;
    var cssUnit = {
      cm: true,
      mm: true,
      in: true,
      px: true,
      pt: true,
      pc: true,
      em: true,
      ex: true,
      ch: true,
      rem: true,
      vw: true,
      vh: true,
      vmin: true,
      vmax: true,
      "%": true
    };
    function parseLengthAndUnit(size) {
      if (typeof size === "number") {
        return {
          value: size,
          unit: "px"
        };
      }
      var value;
      var valueString = (size.match(/^[0-9.]*/) || "").toString();
      if (valueString.includes(".")) {
        value = parseFloat(valueString);
      } else {
        value = parseInt(valueString, 10);
      }
      var unit = (size.match(/[^0-9]*$/) || "").toString();
      if (cssUnit[unit]) {
        return {
          value,
          unit
        };
      }
      console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
      return {
        value,
        unit: "px"
      };
    }
    exports.parseLengthAndUnit = parseLengthAndUnit;
    function cssValue(value) {
      var lengthWithunit = parseLengthAndUnit(value);
      return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
    }
    exports.cssValue = cssValue;
  }
});

// node_modules/react-spinners/helpers/animation.js
var require_animation = __commonJS({
  "node_modules/react-spinners/helpers/animation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createAnimation = void 0;
    var createAnimation = function(loaderName, frames, suffix) {
      var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
      if (typeof window == "undefined" || !window.document) {
        return animationName;
      }
      var styleEl = document.createElement("style");
      document.head.appendChild(styleEl);
      var styleSheet = styleEl.sheet;
      var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
      if (styleSheet) {
        styleSheet.insertRule(keyFrames, 0);
      }
      return animationName;
    };
    exports.createAnimation = createAnimation;
  }
});

// node_modules/react-spinners/HashLoader.js
var require_HashLoader = __commonJS({
  "node_modules/react-spinners/HashLoader.js"(exports) {
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __importStar(require_react());
    var colors_1 = require_colors();
    var unitConverter_1 = require_unitConverter();
    var animation_1 = require_animation();
    function HashLoader(_a) {
      var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 50 : _f, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
      var _g = (0, unitConverter_1.parseLengthAndUnit)(size), value = _g.value, unit = _g.unit;
      var wrapper = __assign({ display: "inherit", position: "relative", width: (0, unitConverter_1.cssValue)(size), height: (0, unitConverter_1.cssValue)(size), transform: "rotate(165deg)" }, cssOverride);
      var thickness = value / 5;
      var lat = (value - thickness) / 2;
      var offset = lat - thickness;
      var colorValue = (0, colors_1.calculateRgba)(color, 0.75);
      var before = (0, animation_1.createAnimation)("HashLoader", "0% {width: ".concat(thickness, "px; box-shadow: ").concat(lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(-lat, "px ").concat(offset, "px ").concat(colorValue, "}\n    35% {width: ").concat((0, unitConverter_1.cssValue)(size), "; box-shadow: 0 ").concat(-offset, "px ").concat(colorValue, ", 0 ").concat(offset, "px ").concat(colorValue, "}\n    70% {width: ").concat(thickness, "px; box-shadow: ").concat(-lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(lat, "px ").concat(offset, "px ").concat(colorValue, "}\n    100% {box-shadow: ").concat(lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(-lat, "px ").concat(offset, "px ").concat(colorValue, "}"), "before");
      var after = (0, animation_1.createAnimation)("HashLoader", "0% {height: ".concat(thickness, "px; box-shadow: ").concat(offset, "px ").concat(lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(-lat, "px ").concat(color, "}\n    35% {height: ").concat((0, unitConverter_1.cssValue)(size), "; box-shadow: ").concat(offset, "px 0 ").concat(color, ", ").concat(-offset, "px 0 ").concat(color, "}\n    70% {height: ").concat(thickness, "px; box-shadow: ").concat(offset, "px ").concat(-lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(lat, "px ").concat(color, "}\n    100% {box-shadow: ").concat(offset, "px ").concat(lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(-lat, "px ").concat(color, "}"), "after");
      var style = function(i) {
        return {
          position: "absolute",
          top: "50%",
          left: "50%",
          display: "block",
          width: "".concat(value / 5).concat(unit),
          height: "".concat(value / 5).concat(unit),
          borderRadius: "".concat(value / 10).concat(unit),
          transform: "translate(-50%, -50%)",
          animationFillMode: "none",
          animation: "".concat(i === 1 ? before : after, " ").concat(2 / speedMultiplier, "s infinite")
        };
      };
      if (!loading) {
        return null;
      }
      return React.createElement(
        "span",
        __assign({ style: wrapper }, additionalprops),
        React.createElement("span", { style: style(1) }),
        React.createElement("span", { style: style(2) })
      );
    }
    exports.default = HashLoader;
  }
});
export default require_HashLoader();
//# sourceMappingURL=react-spinners_HashLoader.js.map
