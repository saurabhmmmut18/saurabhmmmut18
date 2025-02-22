import { Provider } from '@angular/core';
import { AuthInterceptor } from './auth.interceptor';

// Injection token for the Http Interceptors multi-provider
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';

/** Provider for the Noop Interceptor. */
export const AuthInterceptorProvider: Provider =[
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
]