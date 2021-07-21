import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionario.model';


@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  displayedColumns = ['id','name','type','action']
  constructor(private FuncionarioService: FuncionarioService) { }

  ngOnInit(): void {

      this.FuncionarioService.read().subscribe(funcionarios => {
      this.funcionarios = funcionarios
        
      console.log(funcionarios)
    })
  }

}
