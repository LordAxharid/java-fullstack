import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';  // Importar el servicio
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgFor]  // Agregar NgFor a los imports
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}
 
  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;  // Asignamos la respuesta de la API a la variable users
    });
  }
}
