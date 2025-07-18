import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/features/reports-feature/hitory-detail/hitory-detail.component.spec.ts
import { HitoryDetailComponent } from './hitory-detail.component';

describe('HitoryDetailComponent', () => {
  let component: HitoryDetailComponent;
  let fixture: ComponentFixture<HitoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitoryDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitoryDetailComponent);
========
import { MyRecipesComponent } from './my-recipes.component';

describe('MyRecipesComponent', () => {
  let component: MyRecipesComponent;
  let fixture: ComponentFixture<MyRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecipesComponent);
>>>>>>>> 82af0fd9ecd5ba8015c59302a88feaf3c8f95b08:src/app/features/recipes-feature/pages/my-recipes/my-recipes.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
