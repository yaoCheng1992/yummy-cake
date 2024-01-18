import PropTypes from "prop-types";
import React, { PureComponent, SyntheticEvent } from "react";
import { FileObject } from "../types";
import { DropzoneDialogBaseProps } from "./DropzoneDialogBase";
export declare type DropzoneDialogProps = Omit<DropzoneDialogBaseProps, "fileObjects" | "onAdd" | "onDelete" | "onSave"> & {
    /** Clear uploaded files when component is unmounted. */
    clearOnUnmount?: boolean;
    /** Maximum number of files that can be loaded into the dropzone. */
    filesLimit?: number;
    /** List containing File objects or URL strings.
     *
     * **Note:** Please take care of CORS.
     */
    initialFiles?: (File | string)[];
    /**
     * Fired when the files inside dropzone change.
     *
     * @param {File[]} loadedFiles All the files currently loaded into the dropzone.
     */
    onChange?: (loadedFiles: File[]) => void;
    /**
     * Fired when the user clicks the Submit button.
     *
     * @param {File[]} files All the files currently inside the Dropzone.
     * @param {SyntheticEvent} event The react `SyntheticEvent`.
     */
    onSave?: (files: File[], event: SyntheticEvent) => void;
    /**
     * Fired when a file is deleted from the previews panel.
     *
     * @param {File} deletedFile The file that was removed.
     */
    onDelete?: (deletedFile: File) => void;
};
declare type DropzoneDialogState = {
    fileObjects: FileObject[];
};
/**
 * This component provides an uncontrolled version of the DropzoneDialogBase component.
 *
 * It supports all the Props and Methods from `DropzoneDialogBase` but keeps the files state internally.
 *
 * **Note** The `onSave` handler also returns `File[]` with all the accepted files.
 */
declare class DropzoneDialog extends PureComponent<DropzoneDialogProps, DropzoneDialogState> {
    static propTypes: {
        clearOnUnmount: PropTypes.Requireable<boolean>;
        filesLimit: PropTypes.Requireable<number>;
        initialFiles: PropTypes.Requireable<any[]>;
        onSave: PropTypes.Requireable<(...args: any[]) => any>;
        open: PropTypes.Requireable<boolean>;
        dialogTitle: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        dialogProps: PropTypes.Requireable<object>;
        fullWidth: PropTypes.Requireable<boolean>;
        maxWidth: PropTypes.Requireable<string>;
        cancelButtonText: PropTypes.Requireable<string>;
        submitButtonText: PropTypes.Requireable<string>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        showPreviews: PropTypes.Requireable<boolean>;
        showPreviewsInDropzone: PropTypes.Requireable<boolean>;
        showFileNamesInPreview: PropTypes.Requireable<boolean>;
        classes?: React.Validator<Partial<import("./DropzoneAreaBase").DropzoneAreaBaseClasses> | null | undefined> | undefined;
        onDelete?: React.Validator<((deletedFileObject: FileObject, index: number) => void) | null | undefined> | undefined;
        onDrop?: React.Validator<((droppedFiles: File[], event: import("react-dropzone").DropEvent) => void) | null | undefined> | undefined;
        fileObjects?: React.Validator<FileObject[]> | undefined;
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
        getPreviewIcon?: React.Validator<((fileObject: FileObject, classes: {
            image?: string | undefined;
            imageContainer?: string | undefined;
            removeButton?: string | undefined;
            root?: string | undefined;
        } | undefined) => JSX.Element) | null | undefined> | undefined;
        getFileLimitExceedMessage?: React.Validator<((filesLimit: number) => string) | null | undefined> | undefined;
        getFileAddedMessage?: React.Validator<((fileName: string) => string) | null | undefined> | undefined;
        getFileRemovedMessage?: React.Validator<((fileName: string) => string) | null | undefined> | undefined;
        getDropRejectMessage?: React.Validator<((rejectedFile: File, acceptedFiles: string[], maxFileSize: number) => string) | null | undefined> | undefined;
        onAlert?: React.Validator<((message: string, variant: import("../types").AlertType) => void) | null | undefined> | undefined;
        acceptedFiles?: React.Validator<string[] | null | undefined> | undefined;
        Icon?: React.Validator<(import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
            muiName: string;
        }) | null | undefined> | undefined;
        maxFileSize?: React.Validator<number | null | undefined> | undefined;
        dropzoneText?: React.Validator<string | null | undefined> | undefined;
        previewText?: React.Validator<string | null | undefined> | undefined;
        showAlerts?: React.Validator<boolean | import("../types").AlertType[] | null | undefined> | undefined;
        alertSnackbarProps?: React.Validator<import("@mui/material").SnackbarProps | null | undefined> | undefined;
        dropzoneProps?: React.Validator<import("react-dropzone").DropzoneProps | null | undefined> | undefined;
        inputProps?: React.Validator<React.HTMLProps<HTMLInputElement> | null | undefined> | undefined;
        dropzoneClass?: React.Validator<string | null | undefined> | undefined;
        dropzoneParagraphClass?: React.Validator<string | null | undefined> | undefined;
        disableRejectionFeedback?: React.Validator<boolean | null | undefined> | undefined;
        onAdd?: React.Validator<((newFiles: FileObject[]) => void) | null | undefined> | undefined;
        onDropRejected?: React.Validator<((rejectedFiles: File[], event: import("react-dropzone").DropEvent) => void) | null | undefined> | undefined;
        ref?: React.Validator<React.Ref<unknown> | undefined> | undefined;
        key?: React.Validator<React.Key | null | undefined> | undefined;
    };
    static defaultProps: {
        clearOnUnmount: boolean;
        filesLimit: number;
        initialFiles: never[];
    };
    state: DropzoneDialogState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    notifyFileChange: () => void;
    loadInitialFiles: () => Promise<void>;
    addFiles: DropzoneDialogBaseProps["onAdd"];
    deleteFile: DropzoneDialogBaseProps["onDelete"];
    handleClose: DropzoneDialogBaseProps["onClose"];
    handleSave: DropzoneDialogBaseProps["onSave"];
    render(): JSX.Element;
}
export default DropzoneDialog;
//# sourceMappingURL=DropzoneDialog.d.ts.map