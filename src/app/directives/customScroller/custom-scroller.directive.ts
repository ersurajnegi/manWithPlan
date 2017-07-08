import { Directive, ElementRef, OnInit } from '@angular/core';
declare var $:any;
@Directive({
  selector: '[appCustomScroller]'
})
export class CustomScrollerDirective implements OnInit{

  constructor(private _ele : ElementRef) {   }

  ngOnInit(){
        $(this._ele.nativeElement).mCustomScrollbar({
          theme: "dark-thick",
            axis: "y"
        });
  }
}
