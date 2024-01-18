import { Theme } from "@mui/material";
import React, { ComponentType } from "react";
declare type WithoutTheme<P> = Omit<P, "theme">;
declare function withTheme<P extends {
    theme?: Theme;
}>(Component: ComponentType<P>): React.ForwardRefExoticComponent<React.PropsWithoutRef<WithoutTheme<P>> & React.RefAttributes<unknown>>;
export { withTheme };
//# sourceMappingURL=withTheme.d.ts.map