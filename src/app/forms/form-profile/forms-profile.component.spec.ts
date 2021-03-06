import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsProfileComponent  } from './forms-profile.component';

describe('FormsComponent', () => {
  let component: FormsProfileComponent;
  let fixture: ComponentFixture<FormsProfileComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsProfileComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsProfileComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
