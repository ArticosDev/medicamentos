import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedComponent } from './search-med.component';

describe('SearchMedComponent', () => {
  let component: SearchMedComponent;
  let fixture: ComponentFixture<SearchMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
