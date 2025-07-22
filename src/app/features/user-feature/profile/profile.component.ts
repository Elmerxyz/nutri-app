import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth-services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { LocalstorageService } from '../../../core/services/localstorage-services/localstorage.service';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-profile',
  imports: [NgClass,DatePipe, UpperCasePipe,Tag],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private readonly _localstorageService = inject(LocalstorageService);

  userData =  this._localstorageService.getUserAuthorized() 
}
