import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { FileObject } from "../types";
import { DropzoneAreaBaseProps } from "./DropzoneAreaBase";
export declare type DropzoneAreaProps = Omit<DropzoneAreaBaseProps, "fileObjects" | "onAdd" | "onDelete"> & {
    /** Clear uploaded files when component is unmounted. */
    clearOnUnmount?: boolean;
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
     * Fired when a file is deleted from the previews panel.
     *
     * @param {File} deletedFile The file that was removed.
     */
    onDelete?: (deletedFile: File) => void;
};
declare type DropzoneAreaState = {
    fileObjects: FileObject[];
};
/**
 * This components creates an uncontrolled Material-UI Dropzone, with previews and snackbar notifications.
 *
 * It supports all props of `DropzoneAreaBase` but keeps the files state internally.
 *
 * **Note** To listen to file changes use `onChange` event handler and notice that `onDelete` returns a `File` instance instead of `FileObject`.
 */
declare class DropzoneArea extends PureComponent<DropzoneAreaProps, DropzoneAreaState> {
    static propTypes: {
        clearOnUnmount: PropTypes.Requireable<boolean>;
        initialFiles: PropTypes.Requireable<any[]>;
        filesLimit: PropTypes.Requireable<number>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onDelete: PropTypes.Requireable<(...args: any[]) => any>;
        classes?: React.Validator<Partial<import("./DropzoneAreaBase").DropzoneAreaBaseClasses> | null | undefined> | undefined;
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
        showPreviews?: React.Validator<boolean | null | undefined> | undefined;
        showPreviewsInDropzone?: React.Validator<boolean | null | undefined> | undefined;
        showFileNamesInPreview?: React.Validator<boolean | null | undefined> | undefined;
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
        initialFiles: (string | File)[];
    };
    state: DropzoneAreaState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    notifyFileChange: () => void;
    loadInitialFiles: () => Promise<void>;
    addFiles: DropzoneAreaBaseProps["onAdd"];
    deleteFile: DropzoneAreaBaseProps["onDelete"];
    render(): JSX.Element;
}
export default DropzoneArea;
//# sourceMappingURL=DropzoneArea.d.ts.map