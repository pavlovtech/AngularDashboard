import { GridsterItem } from 'angular-gridster2';
import { WidgetSettings } from './widget-settings.model';

export class WidgetType {
    placement: GridsterItem;

    /* Widget component to create dynamically */
    component: any;
    componentName: string;

    widgetSettings: WidgetSettings;

    description: string;
    module: string;
    thumbnailUrl: string;
}
