"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var s = __importStar(require("./Button.css"));
var Button = function (props) {
    var children = props.children, className = props.className;
    var classNames = classnames_1.default(s.root, className);
    var handleClick = function (event) {
        var onClick = props.onClick;
        if (typeof onClick === 'function') {
            onClick(event);
        }
    };
    return (<button className={classNames} onClick={handleClick} type="button">
      <span className={s.text}>{children}</span>
    </button>);
};
exports.default = Button;
