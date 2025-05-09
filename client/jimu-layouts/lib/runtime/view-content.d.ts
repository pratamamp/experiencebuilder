/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { type LayoutProps } from '../types';
interface Props {
    viewId: string;
    isActive: boolean;
    layoutEntryComponent: React.ComponentClass<LayoutProps>;
    viewVisibilityContext: React.ComponentClass;
}
export declare function ViewContent(props: Props): jsx.JSX.Element;
export {};
