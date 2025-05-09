import { type React, LoadingType } from 'jimu-core';
export type InputType = 'text' | 'email' | 'select' | 'file' | 'radio' | 'checkbox' | 'textarea' | 'button' | 'reset' | 'submit' | 'date' | 'datetime-local' | 'hidden' | 'image' | 'month' | 'number' | 'range' | 'search' | 'tel' | 'url' | 'week' | 'password' | 'datetime' | 'time' | 'color';
/**
 * The Input component props.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * The type attribute applied to the root input element.
     */
    type?: InputType;
    /**
     * To define the size of the button. The default size will be applied if the value is `undefined`.
     */
    size?: 'lg' | 'sm';
    /**
     * The native size attribute applied to the root input element.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefsize)
     */
    htmlSize?: number;
    /**
     * Part of the form validation.
     * If `true`, the input is considered as passing the validation and its UI will be updated to reflect this state.
     */
    valid?: boolean;
    /**
     * Part of the form validation.
     * If `true`, the input is considered as NOT passing the validation and its UI will be updated to reflect this state.
     */
    invalid?: boolean;
    /**
     * Tag name used for the root input element.
     * The default value is `input`.
     */
    tag?: React.ElementType;
    /**
     * The reference forwarded to the root input element.
     */
    innerRef?: React.Ref<HTMLInputElement>;
}
export interface IconProps {
    name: string;
    size?: number;
    color?: string;
}
export interface TextWithIconProps {
    icon: IconProps;
    text: string;
}
export declare enum NavIconType {
    IMAGE = "image",
    ICON = "icon"
}
export interface NavIcon {
    icon?: any;
    type: NavIconType;
    right?: boolean;
}
/**
 * @ignore
 */
export { LoadingType };
export interface StandardComponentProps {
    /**
     * Defines the class names added to the component.
     */
    className?: string;
    /**
     * Defines the styles added to the element.
     */
    style?: React.CSSProperties;
}
export type ComponentSize = 'default' | 'sm' | 'lg';
export interface StyleState<T> {
    styleState: Partial<T>;
}
