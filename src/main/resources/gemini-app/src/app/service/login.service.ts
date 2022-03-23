import { SimpleMessageService } from 'src/app/service/simple-message.service';
import { TokenDTO } from './../DTOs/TokenDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { LoginUser } from '../model/login-user';
import { environment } from './../../environments/environment';
import { SimpleMessageEnum } from '../enum/alert.enum';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class LoginUserService {
	private ENDPOINT_LOGIN: string = 'login';
	private TOKEN_ENTRY_LOCAL_STORAGE: string = 'token';
	private TOKEN_ENTRY_LOCAL_STORAGE_USER_DATA: string = 'user_data';

	constructor(private http: HttpClient, private messageService: SimpleMessageService, private router: Router) {}

	public loginUser = (loginUser: LoginUser) => {
		this.http.post(`${environment.apiurl}/${this.ENDPOINT_LOGIN}`, loginUser).subscribe(
			(tokenDTO: TokenDTO) => {
				console.log('User', tokenDTO);
				this.processJwtToken(tokenDTO);
				this.showMessageLogin('Login realizado com sucesso.', SimpleMessageEnum.SUCESSO);
				this.router.navigate(['/turma/list']);
			},
			(error) => {
				this.showMessageLogin('Erro ao fazer login.', SimpleMessageEnum.ERRO);
			}
		);
	};

	private processJwtToken = (tokenDTO: TokenDTO) => {
		localStorage.setItem(this.TOKEN_ENTRY_LOCAL_STORAGE, tokenDTO.tokenString);
		localStorage.setItem(this.TOKEN_ENTRY_LOCAL_STORAGE_USER_DATA, JSON.stringify(tokenDTO.user));
	};

	public isUserLoged = () => {
		let tokenString = this.getToken();

		if (tokenString && tokenString !== '') {
			let isTokenExpired = this.isTokenExpired();
			if (!isTokenExpired) {
				return true;
			}
		}
		return false;
	};

	private isTokenExpired = () => {
		let tokenString = this.getToken();
		let jwtHelperService = new JwtHelperService();

		if (tokenString && tokenString !== '') {
			let isTokenExpired = jwtHelperService.isTokenExpired(tokenString);
			return isTokenExpired;
		}
		return true;
	};

	public getToken = () => {
		return localStorage.getItem(this.TOKEN_ENTRY_LOCAL_STORAGE);
	};

	private showMessageLogin = (message: string, type: SimpleMessageEnum) => {
		this.messageService.showSimpleMessage({ message: message, type: type });
	};

	public logoutUser = () => {};
}
