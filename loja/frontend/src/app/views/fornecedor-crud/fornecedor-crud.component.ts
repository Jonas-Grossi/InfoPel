import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { HeaderService } from './../../components/template/header/header.service';
@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class FornecedorCrudComponent implements OnInit {
 
 constructor(private router: Router,private headerService: HeaderService){ 
 headerService.headerData={
  title:'Cadastro de Fornecedores',
  icon:'storefront',
  icon2:'logout',
  routeUrl:'/providers'


}

 }
  ngOnInit(): void {
  }
navigateToProviderCreate(): void{
this.router.navigate(['/provider/create'])
  
}
}
