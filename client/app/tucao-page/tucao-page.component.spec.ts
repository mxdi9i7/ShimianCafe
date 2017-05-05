import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TucaoPageComponent } from './tucao-page.component';

describe('TucaoPageComponent', () => {
  let component: TucaoPageComponent;
  let fixture: ComponentFixture<TucaoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TucaoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TucaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
