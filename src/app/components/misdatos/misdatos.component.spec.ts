import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MisdatosComponent } from './misdatos.component';

describe('MisdatosComponent', () => {
  let component: MisdatosComponent;
  let fixture: ComponentFixture<MisdatosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MisdatosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MisdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
