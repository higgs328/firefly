import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPanelComponent } from './main-panel.component';

describe('PanelComponent', () => {
  let component: MainPanelComponent;
  let fixture: ComponentFixture<MainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
