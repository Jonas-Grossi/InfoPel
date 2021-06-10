import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ClientCrudComponent } from "./views/client-crud/client-crud.component";
import { FornecedorCrudComponent } from "./views/fornecedor-crud/fornecedor-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { LoginComponent } from './components/login/login.component';
  

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
  path: "login",
    component: LoginComponent
  },
  {

    path: "products",
    component: ProductCrudComponent
  }, {
    path: "products/create",
    component: ProductCreateComponent

  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent

  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent

  },
  
  {
    path: "client",
    component: ClientCrudComponent
  }, {
    path: "fornecedor",
    component: FornecedorCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

