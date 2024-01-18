"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTheme = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = (0, tslib_1.__importStar)(require("react"));
function withTheme(Component) {
    return (0, react_1.forwardRef)(function ComponentWithTheme(props, ref) {
        const theme = (0, material_1.useTheme)();
        const combinedProps = Object.assign(Object.assign({}, props), { theme });
        return react_1.default.createElement(Component, Object.assign({ ref: ref }, combinedProps));
    });
}
exports.withTheme = withTheme;
//# sourceMappingURL=withTheme.js.map