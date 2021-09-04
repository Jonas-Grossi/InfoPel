import { Product } from '../pruduct.model';
import{ProductService} from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  product:Product = {
    name:'',
    price: 0
  }
  constructor(private productService: ProductService,
  private router: Router){}
  
  
  ngOnInit(): void {

  }
createProduct(): void{
  if(this.product.name == '' ||  this.product.price == 0 ){
    this.productService.showMessage('Prencha os dados corretamente!!')

  }else{    
  this.productService.create(this.product).subscribe(()=>{
        
        this.productService.showMessage('Produto criado!!')
        this.router.navigate(['/products'])
        
  })
}    
    }

cancel(): void{

      this.router.navigate(['/products'])

}

}
