import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: string = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuario = this.route.snapshot.params['id'];

  }

}
