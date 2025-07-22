import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { toSignal } from '@angular/core/rxjs-interop';
import { LogInForm } from '../../../core/services/auth-services/auth.interface';
import { ToastSeverity } from '../../../shared/enums/toast-severity.enum';
import { AuthService } from '../../../core/services/auth-services/auth.service';
@Component({
  selector: 'app-log-in',
  imports: [FormsModule, ReactiveFormsModule, Toast],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LogInComponent {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  private readonly _messageService = inject(MessageService);

  userAuthorized = toSignal<any>(this._authService.session(), {
    initialValue: null,
  });

  logInWithGoogle(){
    this._authService.signInWithGoogle().subscribe({
      next: (user) => {
        if (user) {
          this._router.navigate(['/nutri']);
        }
      },
      error: (error) => {
        console.error('Error al iniciar sesión con Google:', error);
        this.showToast(ToastSeverity.ERROR, 'Error', 'No se pudo iniciar sesión con Google');
      }
    });
  }

  showToast(severity: ToastSeverity, summary: string, detail: string) {
    this._messageService.add({
      severity,
      summary,
      detail,
    });
  }
}
