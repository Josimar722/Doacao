import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin)
  {
    return this.http.post('http://localhost:8080/candidatos/logar', userLogin)
  }

  cadastrar(user: User)
  {
    return this.http.post('http://localhost:8080/candidatos/cadastrar', user)
  }
  btnSair(){

    let ok = false
    let token = environment.token

    if(token != null){
      ok = true

    }
    return ok

  }
  btnLogin(){
    let ok = false
    let token = environment.token

    if(token == ''){
      ok = true

    }
    return ok


  }

  nomeUser()
  {
    let nome = environment.nome
    return nome
  }
}