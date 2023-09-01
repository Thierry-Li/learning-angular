import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPokemonBorderCard]'
})

export class BorderCardDirective {
  private INITIAL_COLOR = '#f5f5f5';
  private DEFAULT_GREEN = '#009688';
  private DEFAULT_HEIGHT = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.INITIAL_COLOR);
    this.setHeight(this.DEFAULT_HEIGHT);
  }

  @Input('appPokemonBorderCard') borderColor: string; //alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.DEFAULT_GREEN);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.INITIAL_COLOR);

  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }
}
