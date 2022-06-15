import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { UsersService } from '../services/users.service';


interface Data{
  created_at: string,
  email: string,
  email_verified_at: any,
  id: number,
  name: string,
  surname: string,
  updated_at: string,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {

  data: any = [];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.createUser('Kiprian', 'Zelenkov', 'Iddk22k@gmail.com', 'sth').subscribe(reseponse => console.log(reseponse));
    this.usersService.getUsers().subscribe(response  => this.data = response);
    
  }

  getUsers = async () => {
    const res: any = await axios.get('https://adminpanelangular.ddev.site/api/user/');

    this.data = res.data;
  }

}
