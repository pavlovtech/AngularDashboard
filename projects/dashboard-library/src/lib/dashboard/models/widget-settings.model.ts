export class WidgetSettings {
    widgetTitle: string;

    /* Widget settings component to create dynamically */
    component?: any;
    componentName?: string;

    /* Arbitrary options for the settings component */
    settings?: any;
}
