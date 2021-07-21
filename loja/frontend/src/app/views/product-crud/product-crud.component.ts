import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HeaderService } from './../../components/template/header/header.service';
import { Product } from '../../components/product/pruduct.model';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
  

})
export class ProductCrudComponent implements OnInit {
  myControl = new FormControl();
  options:Product = {
    name:'',
    price: 0
  }
   

  
 constructor(private router: Router,private headerService: HeaderService){ 
 headerService.headerData={
  title:'Cadastro de Produtos',
  icon:'storefront',
  icon2:'logout',
  routeUrl:'/products'


}

 }
  ngOnInit(){

  }
navigateToProductCreate(): void{
this.router.navigate(['/products/create'])
  
}
}
