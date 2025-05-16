import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreetSceneComponent } from './street.component';

describe('StreetSceneComponent', () => {
  let component: StreetSceneComponent;
  let fixture: ComponentFixture<StreetSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreetSceneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StreetSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
