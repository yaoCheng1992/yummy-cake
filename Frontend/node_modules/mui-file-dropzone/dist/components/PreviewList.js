"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Delete_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/Delete"));
const Box_1 = (0, tslib_1.__importDefault)(require("@mui/material/Box"));
const Chip_1 = (0, tslib_1.__importDefault)(require("@mui/material/Chip"));
const Fab_1 = (0, tslib_1.__importDefault)(require("@mui/material/Fab"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@mui/material/Typography"));
const clsx_1 = (0, tslib_1.__importDefault)(require("clsx"));
const prop_types_1 = (0, tslib_1.__importDefault)(require("prop-types"));
const react_1 = (0, tslib_1.__importStar)(require("react"));
function PreviewList(props) {
    const { fileObjects, handleRemove, showFileNames, useChipsForPreview, previewChipProps, previewGridClasses, previewGridProps, classes, getPreviewIcon, } = props;
    const sxGridContainer = (0, react_1.useMemo)(() => ({
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        gap: useChipsForPreview ? 1 : 8,
    }), [useChipsForPreview]);
    const sxImageContainer = (0, react_1.useMemo)(() => ({
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        "& img": {
            height: 100,
            width: "initial",
            maxWidth: "100%",
            color: "text.primary",
            transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
            boxSizing: "border-box",
            boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px",
            borderRadius: 1,
            zIndex: 5,
            opacity: 1,
        },
        "&:hover svg": {
            opacity: 0.3,
        },
        "&:hover button": {
            opacity: 1,
        },
    }), []);
    const sxRemoveButton = (0, react_1.useMemo)(() => ({
        transition: ".5s ease",
        position: "absolute",
        opacity: 0,
        top: -16,
        right: -16,
        width: 40,
        height: 40,
        "&:focus": {
            opacity: 1,
        },
    }), []);
    if (useChipsForPreview) {
        return (react_1.default.createElement(Box_1.default, Object.assign({ sx: sxGridContainer }, previewGridProps === null || previewGridProps === void 0 ? void 0 : previewGridProps.container, { className: (0, clsx_1.default)(classes === null || classes === void 0 ? void 0 : classes.root, previewGridClasses === null || previewGridClasses === void 0 ? void 0 : previewGridClasses.container) }), fileObjects.map((fileObject, i) => {
            return (react_1.default.createElement(Box_1.default, Object.assign({}, previewGridProps === null || previewGridProps === void 0 ? void 0 : previewGridProps.item, { key: i, sx: sxImageContainer, className: classes === null || classes === void 0 ? void 0 : classes.imageContainer }),
                react_1.default.createElement(Chip_1.default, Object.assign({ variant: "outlined" }, previewChipProps, { label: fileObject.file.name, onDelete: handleRemove(i) }))));
        })));
    }
    return (react_1.default.createElement(Box_1.default, Object.assign({ sx: sxGridContainer }, previewGridProps === null || previewGridProps === void 0 ? void 0 : previewGridProps.container, { className: (0, clsx_1.default)(classes === null || classes === void 0 ? void 0 : classes.root, previewGridClasses === null || previewGridClasses === void 0 ? void 0 : previewGridClasses.container) }), fileObjects.map((fileObject, i) => {
        return (react_1.default.createElement(Box_1.default, Object.assign({}, previewGridProps === null || previewGridProps === void 0 ? void 0 : previewGridProps.item, { key: i, sx: sxImageContainer, className: (0, clsx_1.default)(classes === null || classes === void 0 ? void 0 : classes.imageContainer, previewGridClasses === null || previewGridClasses === void 0 ? void 0 : previewGridClasses.item) }),
            getPreviewIcon(fileObject, classes),
            showFileNames ? (react_1.default.createElement(Typography_1.default, { component: "p" }, fileObject.file.name)) : null,
            react_1.default.createElement(Fab_1.default, { onClick: handleRemove(i), "aria-label": "Delete", sx: sxRemoveButton, className: classes === null || classes === void 0 ? void 0 : classes.removeButton },
                react_1.default.createElement(Delete_1.default, null))));
    })));
}
PreviewList.propTypes = {
    classes: prop_types_1.default.object,
    fileObjects: prop_types_1.default.arrayOf(prop_types_1.default.object).isRequired,
    getPreviewIcon: prop_types_1.default.func.isRequired,
    handleRemove: prop_types_1.default.func.isRequired,
    previewChipProps: prop_types_1.default.object,
    previewGridClasses: prop_types_1.default.object,
    previewGridProps: prop_types_1.default.object,
    showFileNames: prop_types_1.default.bool,
    useChipsForPreview: prop_types_1.default.bool,
};
exports.default = PreviewList;
//# sourceMappingURL=PreviewList.js.map