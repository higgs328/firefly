import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructureSceneComponent } from './structure.component';

describe('StructureSceneComponent', () => {
  let component: StructureSceneComponent;
  let fixture: ComponentFixture<StructureSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureSceneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StructureSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
