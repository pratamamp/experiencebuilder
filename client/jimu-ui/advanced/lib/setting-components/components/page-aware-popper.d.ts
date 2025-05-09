/** @jsx jsx */
import { type PopperProps } from 'jimu-ui';
import { React, ReactRedux, type BrowserSizeMode, type IMThemeVariables, jsx } from 'jimu-core';
interface StateToPopperProps {
    pageId: string;
    sizemode: BrowserSizeMode;
    dispatch?: any;
}
declare class PageAwarePopper extends React.PureComponent<PopperProps & StateToPopperProps & {
    theme?: IMThemeVariables;
}> {
    componentDidUpdate(prevProps: PopperProps & StateToPopperProps): void;
    getStyle(): import("jimu-core").SerializedStyles;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof PageAwarePopper, {
    color?: string | undefined;
    content?: string | undefined;
    position?: import("react-draggable").ControlPosition;
    translate?: "yes" | "no" | undefined;
    zIndex?: number;
    offset?: number[];
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean;
    className?: string | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLDivElement>;
    onCopyCapture?: React.ClipboardEventHandler<HTMLDivElement>;
    onCut?: React.ClipboardEventHandler<HTMLDivElement>;
    onCutCapture?: React.ClipboardEventHandler<HTMLDivElement>;
    onPaste?: React.ClipboardEventHandler<HTMLDivElement>;
    onPasteCapture?: React.ClipboardEventHandler<HTMLDivElement>;
    onCompositionEnd?: React.CompositionEventHandler<HTMLDivElement>;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLDivElement>;
    onCompositionStart?: React.CompositionEventHandler<HTMLDivElement>;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLDivElement>;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLDivElement>;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLDivElement>;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    onFocusCapture?: React.FocusEventHandler<HTMLDivElement>;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onBlurCapture?: React.FocusEventHandler<HTMLDivElement>;
    onChange?: React.FormEventHandler<HTMLDivElement>;
    onChangeCapture?: React.FormEventHandler<HTMLDivElement>;
    onBeforeInput?: React.FormEventHandler<HTMLDivElement>;
    onBeforeInputCapture?: React.FormEventHandler<HTMLDivElement>;
    onInput?: React.FormEventHandler<HTMLDivElement>;
    onInputCapture?: React.FormEventHandler<HTMLDivElement>;
    onReset?: React.FormEventHandler<HTMLDivElement>;
    onResetCapture?: React.FormEventHandler<HTMLDivElement>;
    onSubmit?: React.FormEventHandler<HTMLDivElement>;
    onSubmitCapture?: React.FormEventHandler<HTMLDivElement>;
    onInvalid?: React.FormEventHandler<HTMLDivElement>;
    onInvalidCapture?: React.FormEventHandler<HTMLDivElement>;
    onLoad?: React.ReactEventHandler<HTMLDivElement>;
    onLoadCapture?: React.ReactEventHandler<HTMLDivElement>;
    onError?: React.ReactEventHandler<HTMLDivElement>;
    onErrorCapture?: React.ReactEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLDivElement>;
    onAbort?: React.ReactEventHandler<HTMLDivElement>;
    onAbortCapture?: React.ReactEventHandler<HTMLDivElement>;
    onCanPlay?: React.ReactEventHandler<HTMLDivElement>;
    onCanPlayCapture?: React.ReactEventHandler<HTMLDivElement>;
    onCanPlayThrough?: React.ReactEventHandler<HTMLDivElement>;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLDivElement>;
    onDurationChange?: React.ReactEventHandler<HTMLDivElement>;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLDivElement>;
    onEmptied?: React.ReactEventHandler<HTMLDivElement>;
    onEmptiedCapture?: React.ReactEventHandler<HTMLDivElement>;
    onEncrypted?: React.ReactEventHandler<HTMLDivElement>;
    onEncryptedCapture?: React.ReactEventHandler<HTMLDivElement>;
    onEnded?: React.ReactEventHandler<HTMLDivElement>;
    onEndedCapture?: React.ReactEventHandler<HTMLDivElement>;
    onLoadedData?: React.ReactEventHandler<HTMLDivElement>;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLDivElement>;
    onLoadedMetadata?: React.ReactEventHandler<HTMLDivElement>;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLDivElement>;
    onLoadStart?: React.ReactEventHandler<HTMLDivElement>;
    onLoadStartCapture?: React.ReactEventHandler<HTMLDivElement>;
    onPause?: React.ReactEventHandler<HTMLDivElement>;
    onPauseCapture?: React.ReactEventHandler<HTMLDivElement>;
    onPlay?: React.ReactEventHandler<HTMLDivElement>;
    onPlayCapture?: React.ReactEventHandler<HTMLDivElement>;
    onPlaying?: React.ReactEventHandler<HTMLDivElement>;
    onPlayingCapture?: React.ReactEventHandler<HTMLDivElement>;
    onProgress?: React.ReactEventHandler<HTMLDivElement>;
    onProgressCapture?: React.ReactEventHandler<HTMLDivElement>;
    onRateChange?: React.ReactEventHandler<HTMLDivElement>;
    onRateChangeCapture?: React.ReactEventHandler<HTMLDivElement>;
    onResize?: (size: import("jimu-ui").Size, position?: import("react-draggable").ControlPosition) => void;
    onResizeCapture?: React.ReactEventHandler<HTMLDivElement>;
    onSeeked?: React.ReactEventHandler<HTMLDivElement>;
    onSeekedCapture?: React.ReactEventHandler<HTMLDivElement>;
    onSeeking?: React.ReactEventHandler<HTMLDivElement>;
    onSeekingCapture?: React.ReactEventHandler<HTMLDivElement>;
    onStalled?: React.ReactEventHandler<HTMLDivElement>;
    onStalledCapture?: React.ReactEventHandler<HTMLDivElement>;
    onSuspend?: React.ReactEventHandler<HTMLDivElement>;
    onSuspendCapture?: React.ReactEventHandler<HTMLDivElement>;
    onTimeUpdate?: React.ReactEventHandler<HTMLDivElement>;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLDivElement>;
    onVolumeChange?: React.ReactEventHandler<HTMLDivElement>;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLDivElement>;
    onWaiting?: React.ReactEventHandler<HTMLDivElement>;
    onWaitingCapture?: React.ReactEventHandler<HTMLDivElement>;
    onAuxClick?: React.MouseEventHandler<HTMLDivElement>;
    onAuxClickCapture?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onClickCapture?: React.MouseEventHandler<HTMLDivElement>;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
    onContextMenuCapture?: React.MouseEventHandler<HTMLDivElement>;
    onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLDivElement>;
    onDragCapture?: React.DragEventHandler<HTMLDivElement>;
    onDragEnd?: React.DragEventHandler<HTMLDivElement>;
    onDragEndCapture?: React.DragEventHandler<HTMLDivElement>;
    onDragEnter?: React.DragEventHandler<HTMLDivElement>;
    onDragEnterCapture?: React.DragEventHandler<HTMLDivElement>;
    onDragExit?: React.DragEventHandler<HTMLDivElement>;
    onDragExitCapture?: React.DragEventHandler<HTMLDivElement>;
    onDragLeave?: React.DragEventHandler<HTMLDivElement>;
    onDragLeaveCapture?: React.DragEventHandler<HTMLDivElement>;
    onDragOver?: React.DragEventHandler<HTMLDivElement>;
    onDragOverCapture?: React.DragEventHandler<HTMLDivElement>;
    onDragStart?: import("react-draggable").DraggableEventHandler;
    onDragStartCapture?: React.DragEventHandler<HTMLDivElement>;
    onDrop?: React.DragEventHandler<HTMLDivElement>;
    onDropCapture?: React.DragEventHandler<HTMLDivElement>;
    onMouseDownCapture?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLDivElement>;
    onMouseOut?: React.MouseEventHandler<HTMLDivElement>;
    onMouseOutCapture?: React.MouseEventHandler<HTMLDivElement>;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
    onMouseOverCapture?: React.MouseEventHandler<HTMLDivElement>;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
    onMouseUpCapture?: React.MouseEventHandler<HTMLDivElement>;
    onSelect?: React.ReactEventHandler<HTMLDivElement>;
    onSelectCapture?: React.ReactEventHandler<HTMLDivElement>;
    onTouchCancel?: React.TouchEventHandler<HTMLDivElement>;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLDivElement>;
    onTouchEnd?: React.TouchEventHandler<HTMLDivElement>;
    onTouchEndCapture?: React.TouchEventHandler<HTMLDivElement>;
    onTouchMove?: React.TouchEventHandler<HTMLDivElement>;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLDivElement>;
    onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
    onTouchStartCapture?: React.TouchEventHandler<HTMLDivElement>;
    onPointerDown?: React.PointerEventHandler<HTMLDivElement>;
    onPointerDownCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerMove?: React.PointerEventHandler<HTMLDivElement>;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerUp?: React.PointerEventHandler<HTMLDivElement>;
    onPointerUpCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerCancel?: React.PointerEventHandler<HTMLDivElement>;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerEnter?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeave?: React.PointerEventHandler<HTMLDivElement>;
    onPointerOver?: React.PointerEventHandler<HTMLDivElement>;
    onPointerOverCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerOut?: React.PointerEventHandler<HTMLDivElement>;
    onPointerOutCapture?: React.PointerEventHandler<HTMLDivElement>;
    onGotPointerCapture?: React.PointerEventHandler<HTMLDivElement>;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLDivElement>;
    onLostPointerCapture?: React.PointerEventHandler<HTMLDivElement>;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLDivElement>;
    onScroll?: React.UIEventHandler<HTMLDivElement>;
    onScrollCapture?: React.UIEventHandler<HTMLDivElement>;
    onWheel?: React.WheelEventHandler<HTMLDivElement>;
    onWheelCapture?: React.WheelEventHandler<HTMLDivElement>;
    onAnimationStart?: React.AnimationEventHandler<HTMLDivElement>;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLDivElement>;
    onAnimationEnd?: React.AnimationEventHandler<HTMLDivElement>;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLDivElement>;
    onAnimationIteration?: React.AnimationEventHandler<HTMLDivElement>;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLDivElement>;
    onTransitionEnd?: React.TransitionEventHandler<HTMLDivElement>;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLDivElement>;
    size?: import("jimu-ui").Size;
    ref?: React.LegacyRef<PageAwarePopper>;
    version?: number;
    key?: React.Key | null | undefined;
    open: boolean;
    theme?: IMThemeVariables;
    manifest?: string | undefined;
    toggle?: (evt?: React.MouseEvent<any> | React.TouchEvent<any> | React.KeyboardEvent<any>, type?: "clickOutside" | "pageOrSizeMode" | "appMode" | "escape") => any;
    modifiers?: import("jimu-ui").Modifiers;
    strategy?: import("jimu-ui").PositioningStrategy;
    showArrow?: boolean;
    trapFocus?: boolean;
    forceLatestFocusElements?: boolean;
    avoidNestedToggle?: boolean;
    delayToggle?: number;
    referenceHiddenVisibility?: boolean;
    reference: import("jimu-ui").TargetType;
    onFirstUpdate?: (state: import("jimu-ui").PopperState) => void;
    placement?: import("jimu-ui").Placement;
    disablePortal?: boolean;
    disableActivateOverlay?: boolean;
    disableOverlayManager?: boolean;
    headerTitle?: React.ReactNode;
    headerClassName?: string;
    showHeaderClose?: boolean;
    showHeaderCollapse?: boolean;
    onHeaderClose?: (e?: React.MouseEvent<HTMLDivElement>) => void;
    minSize?: import("jimu-ui").Size;
    defaultSize?: import("jimu-ui").Size;
    autoSize?: boolean;
    defaultPosition?: import("react-draggable").ControlPosition;
    positionOffset?: import("react-draggable").PositionOffsetControlPosition;
    disableResize?: boolean;
    disableDraggable?: boolean;
    resizeGrid?: [number, number];
    resizeHandle?: React.ReactElement;
    onResizeStart?: (size: import("jimu-ui").Size, position?: import("react-draggable").ControlPosition) => void;
    onResizeStop?: (size: import("jimu-ui").Size, position?: import("react-draggable").ControlPosition) => void;
    resizeHandles?: import("jimu-ui").ResizeHandle[];
    dragBounds?: import("react-draggable").DraggableBounds | string | false;
    dragGrid?: [number, number];
    dragOffsetParent?: HTMLElement;
    onDragStop?: import("react-draggable").DraggableEventHandler;
    dragScale?: number;
    onLeave?: () => void;
    activateOnlyForHeader?: boolean;
    onHeaderClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
    floating?: boolean;
    arrowStyle?: import("jimu-theme").ArrowStyle;
    flipPlacement?: boolean;
    keepMount?: boolean;
    popperNodeRef?: React.Ref<HTMLDivElement>;
    listenContextPopperVersion?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export default _default;
