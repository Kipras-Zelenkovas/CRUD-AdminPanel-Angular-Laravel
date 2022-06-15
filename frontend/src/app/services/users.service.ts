import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(){
    return this.httpClient.get('https://adminpanelangular.ddev.site/api/user/');
  }

  createUser(_name: string, _surname: string, _email: string, _password: string){
    return this.httpClient.post('https://adminpanelangular.ddev.site/api/user', {
      name: _name,
      surname: _surname,
      email: _email,
      password: _password
    });
  }
}
 