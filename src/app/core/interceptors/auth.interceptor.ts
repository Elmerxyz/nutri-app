import {
  HttpEvent,
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs'; 
import { LocalstorageService } from '../services/localstorage-services/localstorage.service';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const _localstorageService = inject(LocalstorageService);

  return next(req).pipe(
    switchMap((event: HttpEvent<any>) => {
      if (event.type === 0) {
        const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZkZTQwZjA0ODgxYzZhMDE2MTFlYjI4NGE0Yzk1YTI1MWU5MTEyNTAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRWxtZXIgSHVhbWFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lia3pmQmNLRjM2SVlIVURzNTROMTZXVkEtbkt2WHI2UVp1bW9wZ2k1NzE3ZDhubms9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbnV0cmktcGF6IiwiYXVkIjoibnV0cmktcGF6IiwiYXV0aF90aW1lIjoxNzUzMjE4OTYyLCJ1c2VyX2lkIjoiOVpRdGlOdzdSZVhyaWRLOHM2YXU0SFlRTjN5MiIsInN1YiI6IjlaUXRpTnc3UmVYcmlkSzhzNmF1NEhZUU4zeTIiLCJpYXQiOjE3NTMyMTg5NjIsImV4cCI6MTc1MzIyMjU2MiwiZW1haWwiOiJoZWFyZWxtZXIyMDA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE3NjgxNzQxMDgzODYxNjc2NTYyIl0sImVtYWlsIjpbImhlYXJlbG1lcjIwMDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.F6EcPhMnpWVEb2oEobQ4Chom9lV2_9Q69RDPCrvdhGC8E5eq2Kj_HUfhBCJvp8U3bXuDTpmkG32R2rF64AShaiwrQa_gwJs0PhwkbrgemCn0N8YfKzDDDmVeMYW4H32VbGF9ac4b0e5ioiznqtaG0UZ2kBuWdMmyNKTchu6HNCCmbt1-qc5b2Xdu2lL77XCshn-1rGMrVyo-eJ_bNk-4qq9XzJ1s-AxoPv91mLGyaWYYS4BmyP_m7O2GXleKWIu6puJIql7Nxhl3sFBZoQnOIpUttqgF8ceo4cliKHPqp3Ff78fGEl4GdokxFTCE3_JM2zQk03m8m_kqWSlJl8OqSw';
        if (token) {
          const clonedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next(clonedReq);
        }
      }
      return next(req);
    }),
    catchError((error) => {
      return throwError(() => error);
    })
  );
};
