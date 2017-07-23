import { Directive, ElementRef, OnInit, OnDestroy, Renderer, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[appCustomScroller]'
})
export class CustomScrollerDirective implements OnInit, OnDestroy {
  @Input() scrollOptions: any;
  @Output() onTotalScroll: EventEmitter<any> = new EventEmitter();
  element: Element;
  constructor(private _ele: ElementRef,
    private _renderer: Renderer
  ) { }

  ngOnInit() {
    this.generateOptions();
    this.element = $(this._ele.nativeElement);
  }
  ngAfterViewInit() {
    this.initCustomScroll();
  }
  generateOptions() {
    this.scrollOptions.callbacks = this.getCallbackOptions();
  }
  getCallbackOptions() {
    return {
      onTotalScroll: this.onTotalScrollCallbak.bind(this)
    };
  }
  initCustomScroll() {
    this._renderer.invokeElementMethod(this.element, 'mCustomScrollbar', [this.scrollOptions]);
  }

  destroyCustomScroll() {
    this._renderer.invokeElementMethod(this.element, 'mCustomScrollbar', ['destroy']);
  }
  onTotalScrollCallbak() {
    this.onTotalScroll.emit();
  }
  ngOnDestroy() {
    this.destroyCustomScroll();
  }
}
