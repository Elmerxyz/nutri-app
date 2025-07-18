import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/features/reports-feature/history-reports/history-reports.component.spec.ts
import { HistoryReportsComponent } from './history-reports.component';

describe('HistoryReportsComponent', () => {
  let component: HistoryReportsComponent;
  let fixture: ComponentFixture<HistoryReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryReportsComponent);
========
import { RecipeItemComponent } from './recipe-item.component';

describe('RecipeItemComponent', () => {
  let component: RecipeItemComponent;
  let fixture: ComponentFixture<RecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeItemComponent);
>>>>>>>> 82af0fd9ecd5ba8015c59302a88feaf3c8f95b08:src/app/features/recipes-feature/components/recipe-item/recipe-item.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
