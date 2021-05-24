import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ClientCrudComponent } from "./views/client-crud/client-crud.component";
import { FornecedorCrudComponent } from "./views/fornecedor-crud/fornecedor-crud.component";
const routes: Routes = [
  {
path:"",
component: HomeComponent
},{

  path:"products",
  component:ProductCrudComponent
},{
  path:"client",
component:ClientCrudComponent
},{path:"fornecedor",
component:FornecedorCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
