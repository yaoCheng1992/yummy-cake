/// <reference types="react" />
import { BoxProps } from "@mui/material/Box";
import { ChipProps } from "@mui/material/Chip";
import PropTypes from "prop-types";
import { FileObject } from "../types";
export interface PreviewListProps {
    classes?: {
        image?: string;
        imageContainer?: string;
        removeButton?: string;
        root?: string;
    };
    fileObjects: FileObject[];
    getPreviewIcon: (fileObject: FileObject, classes: PreviewListProps["classes"]) => JSX.Element;
    handleRemove: (index: number) => ChipProps["onDelete"];
    previewChipProps?: ChipProps;
    previewGridClasses?: {
        container?: string;
        item?: string;
    };
    previewGridProps?: {
        container?: BoxProps;
        item?: BoxProps;
    };
    showFileNames?: boolean;
    useChipsForPreview?: boolean;
}
declare function PreviewList(props: PreviewListProps): JSX.Element;
declare namespace PreviewList {
    var propTypes: {
        classes: PropTypes.Requireable<object>;
        fileObjects: PropTypes.Validator<(object | null | undefined)[]>;
        getPreviewIcon: PropTypes.Validator<(...args: any[]) => any>;
        handleRemove: PropTypes.Validator<(...args: any[]) => any>;
        previewChipProps: PropTypes.Requireable<object>;
        previewGridClasses: PropTypes.Requireable<object>;
        previewGridProps: PropTypes.Requireable<object>;
        showFileNames: PropTypes.Requireable<boolean>;
        useChipsForPreview: PropTypes.Requireable<boolean>;
    };
}
export default PreviewList;
//# sourceMappingURL=PreviewList.d.ts.map