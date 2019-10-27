import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, OnInit, EventEmitter, ComponentRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]',
})
export class DynamicComponentDirective implements OnInit {
  @Input()
  component: any;

  @Input()
  inputs: { [name: string]: any; }[] = [];

  @Input()
  outputs: { [name: string]: any; }[] = [];

  constructor(public viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.resolver.resolveComponentFactory<any>(this.component);
    const componentRef = this.viewContainerRef.createComponent<any>(componentFactory);

    this.SetComponentInputs(componentRef);
    this.SetComponentOutputs(componentRef);

    this.viewContainerRef.insert(componentRef.hostView);
  }

  private SetComponentOutputs(componentRef: ComponentRef<any>) {
    for (const [eventName, eventHandler] of Object.entries(this.outputs)) {
      if (eventName in componentRef.instance) {
        const eventEmitter: EventEmitter<any> = componentRef.instance[eventName];
        eventEmitter.subscribe(eventHandler);
      }
    }
  }

  private SetComponentInputs(componentRef: ComponentRef<any>) {
    for (const [key, value] of Object.entries(this.inputs)) {
      componentRef.instance[key] = value;
    }
  }
}
