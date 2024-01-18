"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileObjectShape = void 0;
const tslib_1 = require("tslib");
const AttachFile_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/AttachFile"));
const CloudUpload_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/CloudUpload"));
const material_1 = require("@mui/material");
const Snackbar_1 = (0, tslib_1.__importDefault)(require("@mui/material/Snackbar"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@mui/material/Typography"));
const clsx_1 = (0, tslib_1.__importDefault)(require("clsx"));
const prop_types_1 = (0, tslib_1.__importDefault)(require("prop-types"));
const react_1 = (0, tslib_1.__importStar)(require("react"));
const react_dropzone_1 = (0, tslib_1.__importDefault)(require("react-dropzone"));
const helpers_1 = require("../helpers");
const withTheme_1 = require("../withTheme");
const PreviewList_1 = (0, tslib_1.__importDefault)(require("./PreviewList"));
const SnackbarContentWrapper_1 = (0, tslib_1.__importDefault)(require("./SnackbarContentWrapper"));
const defaultSnackbarAnchorOrigin = {
    horizontal: "left",
    vertical: "bottom",
};
const defaultGetPreviewIcon = (fileObject, classes) => {
    const { data, file } = fileObject || {};
    if ((0, helpers_1.isImage)(file)) {
        const src = typeof data === "string" ? data : undefined;
        return react_1.default.createElement("img", { className: classes === null || classes === void 0 ? void 0 : classes.image, role: "presentation", src: src });
    }
    return (react_1.default.createElement(AttachFile_1.default, { sx: {
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
        }, className: classes === null || classes === void 0 ? void 0 : classes.image }));
};
exports.FileObjectShape = prop_types_1.default.shape({
    file: prop_types_1.default.object,
    data: prop_types_1.default.any,
});
/**
 * This components creates a Material-UI Dropzone, with previews and snackbar notifications.
 */
class DropzoneAreaBase extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            openSnackBar: false,
            snackbarMessage: "",
            snackbarVariant: "success",
        };
        this.handleDropAccepted = (acceptedFiles, evt) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { fileObjects, filesLimit = DropzoneAreaBase.defaultProps.filesLimit, getFileAddedMessage = DropzoneAreaBase.defaultProps.getFileAddedMessage, getFileLimitExceedMessage = DropzoneAreaBase.defaultProps
                .getFileLimitExceedMessage, onAdd, onDrop, } = this.props;
            if (filesLimit > 1 &&
                fileObjects.length + acceptedFiles.length > filesLimit) {
                this.setState({
                    openSnackBar: true,
                    snackbarMessage: getFileLimitExceedMessage(filesLimit),
                    snackbarVariant: "error",
                }, this.notifyAlert);
                return;
            }
            // Notify Drop event
            if (onDrop) {
                onDrop(acceptedFiles, evt);
            }
            // Retrieve fileObjects data
            const fileObjs = yield Promise.all(acceptedFiles.map((file) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                const data = yield (0, helpers_1.readFile)(file);
                return {
                    file,
                    data,
                };
            })));
            // Notify added files
            if (onAdd) {
                onAdd(fileObjs);
            }
            // Display message
            const message = fileObjs.reduce((msg, fileObj) => msg + getFileAddedMessage(fileObj.file.name), "");
            this.setState({
                openSnackBar: true,
                snackbarMessage: message,
                snackbarVariant: "success",
            }, this.notifyAlert);
        });
        this.handleDropRejected = (rejectedFiles, evt) => {
            const { acceptedFiles, filesLimit = DropzoneAreaBase.defaultProps.filesLimit, fileObjects, getDropRejectMessage = DropzoneAreaBase.defaultProps.getDropRejectMessage, getFileLimitExceedMessage = DropzoneAreaBase.defaultProps
                .getFileLimitExceedMessage, maxFileSize = DropzoneAreaBase.defaultProps.maxFileSize, onDropRejected, } = this.props;
            let message = "";
            if (fileObjects.length + rejectedFiles.length > filesLimit) {
                message = getFileLimitExceedMessage(filesLimit);
            }
            else {
                rejectedFiles.forEach((rejectedFile) => {
                    message = getDropRejectMessage(rejectedFile, acceptedFiles || [], maxFileSize);
                });
            }
            if (onDropRejected) {
                onDropRejected(rejectedFiles, evt);
            }
            this.setState({
                openSnackBar: true,
                snackbarMessage: message,
                snackbarVariant: "error",
            }, this.notifyAlert);
        };
        this.handleRemove = (fileIndex) => (event) => {
            event.stopPropagation();
            const { fileObjects, getFileRemovedMessage = DropzoneAreaBase.defaultProps
                .getFileRemovedMessage, onDelete, } = this.props;
            // Find removed fileObject
            const removedFileObj = fileObjects[fileIndex];
            // Notify removed file
            if (onDelete) {
                onDelete(removedFileObj, fileIndex);
            }
            this.setState({
                openSnackBar: true,
                snackbarMessage: getFileRemovedMessage(removedFileObj.file.name),
                snackbarVariant: "info",
            }, this.notifyAlert);
        };
        this.handleCloseSnackbar = () => {
            this.setState({
                openSnackBar: false,
            });
        };
        this.defaultSx = {
            root: {
                "@keyframes progress": {
                    "0%": {
                        backgroundPosition: "0 0",
                    },
                    "100%": {
                        backgroundPosition: "-70px 0",
                    },
                },
                position: "relative",
                width: "100%",
                minHeight: "250px",
                backgroundColor: "background.paper",
                border: "dashed",
                borderColor: "divider",
                borderRadius: 1,
                boxSizing: "border-box",
                cursor: "pointer",
                overflow: "hidden",
            },
            active: {
                animation: "$progress 2s linear infinite !important",
                backgroundImage: `repeating-linear-gradient(-45deg, ${this.props.theme.palette.background.paper}, ${this.props.theme.palette.background.paper} 25px, ${this.props.theme.palette.divider} 25px, ${this.props.theme.palette.divider} 50px)`,
                backgroundSize: "150% 100%",
                border: "solid",
                borderColor: "primary.light",
            },
            invalid: {
                backgroundImage: `repeating-linear-gradient(-45deg, ${this.props.theme.palette.error.light}, ${this.props.theme.palette.error.light} 25px, ${this.props.theme.palette.error.dark} 25px, ${this.props.theme.palette.error.dark} 50px)`,
                borderColor: "error.main",
            },
            textContainer: {
                textAlign: "center",
            },
            text: {
                marginBottom: 3,
                marginTop: 3,
            },
            icon: {
                width: 51,
                height: 51,
                color: "text.primary",
            },
        };
    }
    notifyAlert() {
        const { onAlert } = this.props;
        const { openSnackBar, snackbarMessage, snackbarVariant } = this.state;
        if (openSnackBar && onAlert) {
            onAlert(snackbarMessage, snackbarVariant);
        }
    }
    render() {
        const { acceptedFiles, alertSnackbarProps, classes = {}, disableRejectionFeedback, dropzoneClass, dropzoneParagraphClass, dropzoneProps, dropzoneText, fileObjects, filesLimit = DropzoneAreaBase.defaultProps.filesLimit, getPreviewIcon = DropzoneAreaBase.defaultProps.getPreviewIcon, Icon, inputProps, maxFileSize, previewChipProps, previewGridClasses, previewGridProps, previewText, showAlerts, showFileNames, showFileNamesInPreview, showPreviews, showPreviewsInDropzone, useChipsForPreview, } = this.props;
        const { openSnackBar, snackbarMessage, snackbarVariant } = this.state;
        const acceptFiles = acceptedFiles === null || acceptedFiles === void 0 ? void 0 : acceptedFiles.join(",");
        const isMultiple = filesLimit > 1;
        const previewsVisible = showPreviews && fileObjects.length > 0;
        const previewsInDropzoneVisible = showPreviewsInDropzone && fileObjects.length > 0;
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(react_dropzone_1.default, Object.assign({}, dropzoneProps, { accept: acceptFiles, onDropAccepted: this.handleDropAccepted, onDropRejected: this.handleDropRejected, maxSize: maxFileSize, multiple: isMultiple }), ({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
                const isActive = isDragActive;
                const isInvalid = !disableRejectionFeedback && isDragReject;
                return (react_1.default.createElement(material_1.Box, Object.assign({ sx: Object.assign(Object.assign(Object.assign({}, this.defaultSx.root), (isActive ? this.defaultSx.active : {})), (isInvalid ? this.defaultSx.invalid : {})) }, getRootProps({
                    className: (0, clsx_1.default)(classes.root, dropzoneClass, isActive && classes.active, isInvalid && classes.invalid),
                })),
                    react_1.default.createElement("input", Object.assign({}, getInputProps(inputProps))),
                    react_1.default.createElement(material_1.Box, { sx: this.defaultSx.textContainer, className: classes.textContainer },
                        react_1.default.createElement(Typography_1.default, { variant: "h5", component: "p", sx: this.defaultSx.text, className: (0, clsx_1.default)(classes.text, dropzoneParagraphClass) }, dropzoneText),
                        Icon ? (react_1.default.createElement(Icon, { sx: this.defaultSx.icon, className: classes.icon })) : (react_1.default.createElement(CloudUpload_1.default, { sx: this.defaultSx.icon, className: classes.icon }))),
                    previewsInDropzoneVisible ? (react_1.default.createElement(PreviewList_1.default, { fileObjects: fileObjects, handleRemove: this.handleRemove, getPreviewIcon: getPreviewIcon, showFileNames: showFileNames, useChipsForPreview: useChipsForPreview, previewChipProps: previewChipProps, previewGridClasses: previewGridClasses, previewGridProps: previewGridProps })) : null));
            }),
            previewsVisible ? (react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement(Typography_1.default, { variant: "subtitle1", component: "span" }, previewText),
                react_1.default.createElement(PreviewList_1.default, { fileObjects: fileObjects, handleRemove: this.handleRemove, getPreviewIcon: getPreviewIcon, showFileNames: showFileNamesInPreview, useChipsForPreview: useChipsForPreview, previewChipProps: previewChipProps, previewGridClasses: previewGridClasses, previewGridProps: previewGridProps }))) : null,
            (typeof showAlerts === "boolean" && showAlerts) ||
                (Array.isArray(showAlerts) && showAlerts.includes(snackbarVariant)) ? (react_1.default.createElement(Snackbar_1.default, Object.assign({ anchorOrigin: defaultSnackbarAnchorOrigin, autoHideDuration: 6000 }, alertSnackbarProps, { open: openSnackBar, onClose: this.handleCloseSnackbar }),
                react_1.default.createElement(SnackbarContentWrapper_1.default, { onClose: this.handleCloseSnackbar, variant: snackbarVariant, message: snackbarMessage }))) : null));
    }
}
DropzoneAreaBase.propTypes = {
    classes: prop_types_1.default.object,
    acceptedFiles: prop_types_1.default.arrayOf(prop_types_1.default.string),
    filesLimit: prop_types_1.default.number,
    Icon: prop_types_1.default.elementType,
    fileObjects: prop_types_1.default.arrayOf(exports.FileObjectShape),
    maxFileSize: prop_types_1.default.number,
    dropzoneText: prop_types_1.default.string,
    dropzoneClass: prop_types_1.default.string,
    dropzoneParagraphClass: prop_types_1.default.string,
    disableRejectionFeedback: prop_types_1.default.bool,
    showPreviews: prop_types_1.default.bool,
    showPreviewsInDropzone: prop_types_1.default.bool,
    showFileNames: prop_types_1.default.bool,
    showFileNamesInPreview: prop_types_1.default.bool,
    useChipsForPreview: prop_types_1.default.bool,
    previewChipProps: prop_types_1.default.object,
    previewGridClasses: prop_types_1.default.object,
    previewGridProps: prop_types_1.default.object,
    previewText: prop_types_1.default.string,
    showAlerts: prop_types_1.default.oneOfType([
        prop_types_1.default.bool,
        prop_types_1.default.arrayOf(prop_types_1.default.oneOf(["error", "success", "info", "warning"])),
    ]),
    alertSnackbarProps: prop_types_1.default.object,
    dropzoneProps: prop_types_1.default.object,
    inputProps: prop_types_1.default.object,
    getFileLimitExceedMessage: prop_types_1.default.func,
    getFileAddedMessage: prop_types_1.default.func,
    getFileRemovedMessage: prop_types_1.default.func,
    getDropRejectMessage: prop_types_1.default.func,
    getPreviewIcon: prop_types_1.default.func,
    onAdd: prop_types_1.default.func,
    onDelete: prop_types_1.default.func,
    onDrop: prop_types_1.default.func,
    onDropRejected: prop_types_1.default.func,
    onAlert: prop_types_1.default.func,
};
DropzoneAreaBase.defaultProps = {
    acceptedFiles: [],
    filesLimit: 3,
    fileObjects: [],
    maxFileSize: 3000000,
    dropzoneText: "Drag and drop a file here or click",
    previewText: "Preview:",
    disableRejectionFeedback: false,
    showPreviews: false,
    showPreviewsInDropzone: true,
    showFileNames: false,
    showFileNamesInPreview: false,
    useChipsForPreview: false,
    previewChipProps: {},
    previewGridClasses: {},
    previewGridProps: {},
    showAlerts: true,
    alertSnackbarProps: {
        anchorOrigin: {
            horizontal: "left",
            vertical: "bottom",
        },
        autoHideDuration: 6000,
    },
    getFileLimitExceedMessage: ((filesLimit) => `Maximum allowed number of files exceeded. Only ${filesLimit} allowed`),
    getFileAddedMessage: ((fileName) => `File ${fileName} successfully added.`),
    getPreviewIcon: defaultGetPreviewIcon,
    getFileRemovedMessage: ((fileName) => `File ${fileName} removed.`),
    getDropRejectMessage: ((rejectedFile, acceptedFiles, maxFileSize) => {
        let message = `File ${rejectedFile.name} was rejected. `;
        if (!acceptedFiles.includes(rejectedFile.type)) {
            message += "File type not supported. ";
        }
        if (rejectedFile.size > maxFileSize) {
            message +=
                "File is too big. Size limit is " +
                    (0, helpers_1.convertBytesToMbsOrKbs)(maxFileSize) +
                    ". ";
        }
        return message;
    }),
};
// @ts-expect-error
const ThemedDropzoneAreaBase = (0, withTheme_1.withTheme)(DropzoneAreaBase);
exports.default = ThemedDropzoneAreaBase;
//# sourceMappingURL=DropzoneAreaBase.js.map