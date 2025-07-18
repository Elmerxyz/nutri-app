import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/features/branches-feature/my-branch/my-branch.component.spec.ts
import { MyBranchComponent } from './my-branch.component';

describe('MyBranchComponent', () => {
  let component: MyBranchComponent;
  let fixture: ComponentFixture<MyBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBranchComponent);
========
import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
>>>>>>>> 82af0fd9ecd5ba8015c59302a88feaf3c8f95b08:src/app/features/contacts-feature/contacts/contacts.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
