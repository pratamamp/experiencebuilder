import { BaseTool, type BaseToolProps, type IconType } from '../layout/base/base-tool';
export default class BaseMap extends BaseTool<BaseToolProps, unknown> {
    toolName: string;
    getTitle(): string;
    getIcon(): IconType;
    getExpandPanel(): JSX.Element;
}
