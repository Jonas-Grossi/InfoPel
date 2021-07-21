import { Funcionario } from '../funcionario.model';
import{FuncionarioService} from './../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {
  
  funcionario:Funcionario = {
    name:'',
    type:''
  }
  constructor(private funcionarioService: FuncionarioService,
  private router: Router){}
  
  
  ngOnInit(): void {

  }
createFuncionario(): void{
      this.funcionarioService.create(this.funcionario).subscribe(()=>{
        this.funcionarioService.showMessage('Funcionario criado!!')
        this.router.navigate(['/funcionarios'])
      })
      
    }

cancel(): void{

      this.router.navigate(['/funcionarios'])

}

}
