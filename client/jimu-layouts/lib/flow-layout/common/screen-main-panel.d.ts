/** @jsx jsx */
import { React, jsx, type IMThemeVariables } from 'jimu-core';
import type { LayoutProps } from 'jimu-layouts/layout-runtime';
interface OwnProps {
    rootLayoutId: string;
    index: number;
    isActive: boolean;
    isAbsolute?: boolean;
    viewHeight: number;
    headerHeight: number;
    screenId: string;
    isLast: boolean;
    isSmallSize: boolean;
    layoutEntry: React.ComponentType<LayoutProps>;
    isDesignMode?: boolean;
    formatMessage?: (id: string) => string;
    builderTheme?: IMThemeVariables;
}
export declare function ScreenMainPanel(props: OwnProps): jsx.JSX.Element;
export {};
