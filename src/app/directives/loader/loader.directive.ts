import { Directive, ElementRef, Renderer, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective implements AfterContentInit {
  private _nativeElement: Node;
  constructor(
    private _renderer: Renderer,
    private _element: ElementRef
  ) {
    this._nativeElement = _element.nativeElement;
  }

  ngAfterContentInit() {
    let loaderElement = this._renderer.createElement(this._nativeElement, 'div');
    this._renderer.setElementClass(loaderElement,'loading-overlay',true);
  }
}
