import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailLayerComponent } from './trail.component';

describe('TrailLayerComponent', () => {
  let component: TrailLayerComponent;
  let fixture: ComponentFixture<TrailLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailLayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrailLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
