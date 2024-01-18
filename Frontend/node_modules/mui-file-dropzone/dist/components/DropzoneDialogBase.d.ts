import { Breakpoint } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { DialogProps } from "@mui/material/Dialog";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { DropzoneAreaBaseProps } from "./DropzoneAreaBase";
export declare type DropzoneDialogBaseProps = DropzoneAreaBaseProps & {
    /** Cancel button text in dialog. */
    cancelButtonText?: string;
    /**
     * Props to pass to the Material-UI Dialog components.
     * @see See [Material-UI Dialog](https://material-ui.com/api/dialog/#props) for available values.
     */
    dialogProps?: DialogProps;
    /** The Dialog title. */
    dialogTitle?: string | JSX.Element;
    /**
     * If `true`, the dialog stretches to `maxWidth`.
     *
     * Notice that the dialog width grow is limited by the default margin.
     */
    fullWidth?: boolean;
    /**
     * Determine the max-width of the dialog. The dialog width grows with the size of the screen.
     *
     * Set to `false` to disable `maxWidth`.
     */
    maxWidth?: Breakpoint;
    /**
     * Fired when the modal is closed.
     *
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     */
    onClose?: DialogProps["onClose"];
    /**
     * Fired when the user clicks the Submit button.
     *
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     */
    onSave?: (event: React.SyntheticEvent) => void;
    /** Sets whether the dialog is open or closed. */
    open?: boolean;
    /**
     * Shows previews **BELOW** the dropzone.
     *
     * **Note:** By default previews show up under in the Dialog and inside in the standalone.
     */
    showPreviews?: boolean;
    /** Submit button text in dialog. */
    submitButtonText?: string;
};
/**
 * This component provides the DropzoneArea inside of a Material-UI Dialog.
 *
 * It supports all the Props and Methods from `DropzoneAreaBase`.
 */
declare class DropzoneDialogBase extends PureComponent<DropzoneDialogBaseProps> {
    static propTypes: {
        open: PropTypes.Requireable<boolean>;
        dialogTitle: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        dialogProps: PropTypes.Requireable<object>;
        fullWidth: PropTypes.Requireable<boolean>;
        maxWidth: PropTypes.Requireable<string>;
        cancelButtonText: PropTypes.Requireable<string>;
        submitButtonText: PropTypes.Requireable<string>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onSave: PropTypes.Requireable<(...args: any[]) => any>;
        showPreviews: PropTypes.Requireable<boolean>;
        showPreviewsInDropzone: PropTypes.Requireable<boolean>;
        showFileNamesInPreview: PropTypes.Requireable<boolean>;
        classes?: React.Validator<Partial<import("./DropzoneAreaBase").DropzoneAreaBaseClasses> | null | undefined> | undefined;
        onDelete?: React.Validator<((deletedFileObject: import("..").FileObject, index: number) => void) | null | undefined> | undefined;
        onDrop?: React.Validator<((droppedFiles: File[], event: import("react-dropzone").DropEvent) => void) | null | undefined> | undefined;
        fileObjects?: React.Validator<import("..").FileObject[]> | undefined;
        showFileNames?: React.Validator<boolean | null | undefined> | undefined;
        useChipsForPreview?: React.Validator<boolean | null | undefined> | undefined;
        previewChipProps?: React.Validator<import("@mui/material").ChipProps<"div", {}> | null | undefined> | undefined;
        previewGridClasses?: React.Validator<{
            container?: string | undefined;
            item?: string | undefined;
            image?: string | undefined;
        } | null | undefined> | undefined;
        previewGridProps?: React.Validator<{
            container?: import("@mui/material").GridProps<"div", {}> | undefined;
            item?: import("@mui/material").GridProps<"div", {}> | undefined;
        } | null | undefined> | undefined;
        getPreviewIcon?: React.Validator<((fileObject: import("..").FileObject, classes: {
            image?: string | undefined;
            imageContainer?: string | undefined;
            removeButton?: string | undefined;
            root?: string | undefined;
        } | undefined) => JSX.Element) | null | undefined> | undefined;
        getFileLimitExceedMessage?: React.Validator<((filesLimit: number) => string) | null | undefined> | undefined;
        getFileAddedMessage?: React.Validator<((fileName: string) => string) | null | undefined> | undefined;
        getFileRemovedMessage?: React.Validator<((fileName: string) => string) | null | undefined> | undefined;
        getDropRejectMessage?: React.Validator<((rejectedFile: File, acceptedFiles: string[], maxFileSize: number) => string) | null | undefined> | undefined;
        onAlert?: React.Validator<((message: string, variant: import("..").AlertType) => void) | null | undefined> | undefined;
        acceptedFiles?: React.Validator<string[] | null | undefined> | undefined;
        filesLimit?: React.Validator<number | null | undefined> | undefined;
        Icon?: React.Validator<(import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
            muiName: string;
        }) | null | undefined> | undefined;
        maxFileSize?: React.Validator<number | null | undefined> | undefined;
        dropzoneText?: React.Validator<string | null | undefined> | undefined;
        previewText?: React.Validator<string | null | undefined> | undefined;
        showAlerts?: React.Validator<boolean | import("..").AlertType[] | null | undefined> | undefined;
        alertSnackbarProps?: React.Validator<import("@mui/material").SnackbarProps | null | undefined> | undefined;
        dropzoneProps?: React.Validator<import("react-dropzone").DropzoneProps | null | undefined> | undefined;
        inputProps?: React.Validator<React.HTMLProps<HTMLInputElement> | null | undefined> | undefined;
        clearOnUnmount?: React.Validator<boolean | null | undefined> | undefined;
        dropzoneClass?: React.Validator<string | null | undefined> | undefined;
        dropzoneParagraphClass?: React.Validator<string | null | undefined> | undefined;
        disableRejectionFeedback?: React.Validator<boolean | null | undefined> | undefined;
        onAdd?: React.Validator<((newFiles: import("..").FileObject[]) => void) | null | undefined> | undefined;
        onDropRejected?: React.Validator<((rejectedFiles: File[], event: import("react-dropzone").DropEvent) => void) | null | undefined> | undefined;
        ref?: React.Validator<React.Ref<unknown> | undefined> | undefined;
        key?: React.Validator<React.Key | null | undefined> | undefined;
    };
    static defaultProps: {
        open: boolean;
        dialogTitle: string;
        dialogProps: DialogProps;
        fullWidth: boolean;
        maxWidth: Breakpoint;
        cancelButtonText: string;
        submitButtonText: string;
        showPreviews: boolean;
        showPreviewsInDropzone: boolean;
        showFileNamesInPreview: boolean;
    };
    handlePressClose: ButtonProps["onClick"];
    render(): JSX.Element;
}
export default DropzoneDialogBase;
//# sourceMappingURL=DropzoneDialogBase.d.ts.map