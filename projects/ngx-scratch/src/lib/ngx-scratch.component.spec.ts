import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScratchComponent } from './ngx-scratch.component';

describe('NgxScratchComponent', () => {
  let component: NgxScratchComponent;
  let fixture: ComponentFixture<NgxScratchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxScratchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxScratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
