import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapMVAComponent } from './map-mva.component';

describe('MapMVAComponent', () => {
  let component: MapMVAComponent;
  let fixture: ComponentFixture<MapMVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapMVAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapMVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
