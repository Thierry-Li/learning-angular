import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderCardDirective } from './border-card.directive';

describe('BorderCardDirective', () => {
  let fixture: ComponentFixture<BorderCardDirective>;
  let component: BorderCardDirective;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorderCardDirective, BorderCardDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(BorderCardDirective);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });
  // it('should create an instance', () => {
  //   const directive = new BorderCardDirective();
  //   expect(directive).toBeTruthy();
  // });

  it('should have the initial border color set', () => {
    const initialColor = '#f5f5f5';
    expect(element.style.border).toBe(`4px solid ${initialColor}`);
  });

  it('should change the border color on mouse enter', () => {
    const borderColor = 'red';
    element.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(element.style.border).toBe(`4px solid ${borderColor}`);
  });
});
