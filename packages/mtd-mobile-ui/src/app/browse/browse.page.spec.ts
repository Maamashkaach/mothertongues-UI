import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowsePage } from './browse.page';

describe('BrowsePage', () => {
  let component: BrowsePage;
  let fixture: ComponentFixture<BrowsePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(BrowsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});