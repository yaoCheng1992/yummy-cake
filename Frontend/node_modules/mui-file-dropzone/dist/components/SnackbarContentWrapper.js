"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CheckCircle_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/CheckCircle"));
const Close_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/Close"));
const Error_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/Error"));
const Info_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/Info"));
const Warning_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/Warning"));
const material_1 = require("@mui/material");
const IconButton_1 = (0, tslib_1.__importDefault)(require("@mui/material/IconButton"));
const SnackbarContent_1 = (0, tslib_1.__importDefault)(require("@mui/material/SnackbarContent"));
const clsx_1 = (0, tslib_1.__importDefault)(require("clsx"));
const prop_types_1 = (0, tslib_1.__importDefault)(require("prop-types"));
const react_1 = (0, tslib_1.__importStar)(require("react"));
const variantIcon = {
    error: Error_1.default,
    info: Info_1.default,
    success: CheckCircle_1.default,
    warning: Warning_1.default,
};
const SnackbarContentWrapper = (0, react_1.forwardRef)(function SnackbarContentWrapper(props, ref) {
    const { classes, className, message, onClose, variant = "info" } = props, other = (0, tslib_1.__rest)(props, ["classes", "className", "message", "onClose", "variant"]);
    const Icon = variantIcon[variant];
    const sx = (0, react_1.useMemo)(() => ({
        icon: {
            fontSize: 20,
            opacity: 0.9,
        },
        message: {
            display: "flex",
            alignItems: "center",
            "& > svg": {
                marginRight: 1,
            },
        },
    }), []);
    const sxVariant = (0, react_1.useMemo)(() => ({ backgroundColor: `${variant}.main` }), [variant]);
    return (react_1.default.createElement(SnackbarContent_1.default, Object.assign({ ref: ref, sx: sxVariant, className: (0, clsx_1.default)(classes === null || classes === void 0 ? void 0 : classes[variant], className), "aria-describedby": "client-snackbar", message: react_1.default.createElement(material_1.Box, { component: "span", id: "client-snackbar", sx: sx.message, className: classes === null || classes === void 0 ? void 0 : classes.message },
            react_1.default.createElement(Icon, { sx: sx.icon, className: classes === null || classes === void 0 ? void 0 : classes.icon }),
            message), action: react_1.default.createElement(IconButton_1.default, { key: "close", "aria-label": "Close", color: "inherit", className: classes === null || classes === void 0 ? void 0 : classes.closeButton, onClick: onClose },
            react_1.default.createElement(Close_1.default, { sx: sx.icon, className: classes === null || classes === void 0 ? void 0 : classes.icon })) }, other)));
});
SnackbarContentWrapper.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    message: prop_types_1.default.node,
    onClose: prop_types_1.default.func,
    variant: prop_types_1.default.oneOf(["success", "warning", "error", "info"]),
};
exports.default = SnackbarContentWrapper;
//# sourceMappingURL=SnackbarContentWrapper.js.map