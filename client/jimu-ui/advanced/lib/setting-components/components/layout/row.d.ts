import { React } from 'jimu-core';
type ActionType = 'drilldown';
/**
 * The SettingRow component props.
 */
export interface SettingRowProps {
    /**
     * To provide a role for row
     */
    role?: string;
    /**
     * To provide a label for interactive components for accessibility purposes.
     * By default, the accessible name is computed from any text content inside the element.
     * If lacking, provide an aria-label.
     */
    'aria-label'?: string;
    /**
     * @ignore
     * Three different levels of label
     */
    level?: 1 | 2 | 3;
    /**
     * Defines the label text for the setting row.
     */
    label?: string | JSX.Element;
    /**
     * Indicates whether the children should flow to the next line.
     * 'wrap' - the children will flow to the next line.
     * 'no-wrap' - the children will stay in the line as the label.
     */
    flow?: 'wrap' | 'no-wrap';
    /**
     * Defines the optional action to take when clicked.
     * 'drilldown': indicates the row is clickable and a right arrow will appear at the end.
     *
     * @deprecated Deprecated since the design has changed.
     */
    action?: ActionType;
    /**
     * Indicates whether to indent the row.
     */
    indented?: boolean;
    /**
     * Defines the class names added to the element.
     */
    className?: string;
    /**
     * Indicates whether to truncate long label text.
     */
    truncateLabel?: boolean;
    /**
     * Callback fired when the row is clicked.
     * @event
     * @deprecated Deprecated since the design has changed.
     */
    onDrillDown?: () => void;
    /**
     * The children of this component.
     */
    children?: React.ReactNode;
    /**
     * Whether to show the bottom line.
     * @default false
     */
    bottomLine?: boolean;
}
/**
 * The unstyled version of the SettingRow component.
 * Please use {@link SettingRow} instead.
 */
export declare class _SettingRow extends React.PureComponent<SettingRowProps> {
    onActionClick: (type: ActionType) => void;
    render(): React.JSX.Element;
}
/**
 * The `SettingRow` component allows users to display setting content in a row.
 * Use this component inside of the `SettingSection` component.
 *
 * ```ts
 * import { SettingRow } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare const SettingRow: import("@emotion/styled").StyledComponent<SettingRowProps, {}, {}>;
export {};
