import { Funcionario } from '../funcionario.model';
import{FuncionarioService} from './../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface Func {
  
  value: string;
  
  viewValue: string;
}

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  selectedValue!: string;  
  funcs: Func[] = [
    {value: 'Atendente', viewValue: 'Atendente'},
    {value: 'Informatica', viewValue: 'Informatica'},
    
    
  ];
  
  funcionario:Funcionario = {
    name:'',
    type:''
  }
  constructor(private funcionarioService: FuncionarioService,
  private router: Router){}
  
  
  ngOnInit(): void {

  }

  showValue() {
    console.log(this.selectedValue);
    
  }
  
createFuncionario(): void{
  if(this.funcionario.name == '' ){
    this.funcionarioService.showMessage('Prencha os dados corretamente!!')
  }else{
    this.funcionario.type = this.selectedValue

  this.funcionarioService.create(this.funcionario).subscribe(()=>{
        this.funcionarioService.showMessage('Funcionario criado!!')
        this.router.navigate(['/funcionarios'])
      })
      
    }
  }
cancel(): void{

      this.router.navigate(['/funcionarios'])

}

}
