import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WildlandSceneComponent } from './wildland.component';

describe('WildlandSceneComponent', () => {
  let component: WildlandSceneComponent;
  let fixture: ComponentFixture<WildlandSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildlandSceneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WildlandSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
