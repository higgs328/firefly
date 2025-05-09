import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapWildlandComponent } from './map-wildland.component';

describe('MapStructureComponent', () => {
  let component: MapWildlandComponent;
  let fixture: ComponentFixture<MapWildlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapWildlandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapWildlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
