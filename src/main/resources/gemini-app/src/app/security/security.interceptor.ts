import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SimpleMessageService } from 'src/app/service/simple-message.service';
import { LoginUserService } from './../service/login.service';
import { Observable } from 'rxjs';
// src/app/auth/token.interceptor.ts
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { SimpleMessageEnum } from '../enum/alert.enum';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
	constructor(public loginService: LoginUserService, private messageService: SimpleMessageService, private router: Router) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.loginService.isUserLoged()) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${this.loginService.getToken()}`,
				},
			});
		} else {
			this.messageService.showSimpleMessage({ message: 'Usuário não logado ou login expirado.', type: SimpleMessageEnum.ERRO });
			this.router.navigate(['/']);
		}

		return next.handle(request);
	}
}
