import { Component, inject } from '@angular/core';
import { LocalstorageService } from '../../../core/services/localstorage-services/localstorage.service';
import { DatePipe } from '@angular/common';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-profile',
  imports: [DatePipe, Tag],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private readonly _localstorageService = inject(LocalstorageService);

  userData =  this._localstorageService.getUserAuthorized() 
}
