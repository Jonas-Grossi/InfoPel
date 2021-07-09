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
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ProviderUpdateComponent } from './components/provider/provider-update/provider-update.component';
import { ProviderCreateComponent } from './components/provider/provider-create/provider-create.component';
import { ProviderDeleteComponent } from './components/provider/provider-delete/provider-delete.component';
import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
  

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
    path: "client/create",
    component: ClientCreateComponent

  },
  {
    path: "client/update/:id",
    component: ClientUpdateComponent

  },
  {
    path: "client/delete/:id",
    component: ClientDeleteComponent

  }, {
    path: "fornecedor",
    component: FornecedorCrudComponent
  }, {
    path: "provider/create",
    component: ProviderCreateComponent

  },
  {
    path: "provider/update/:id",
    component: ProviderUpdateComponent

  },
  {
    path: "provider/delete/:id",
    component: ProviderDeleteComponent

  },{
    path: "employee",
    component: EmployeeCrudComponent

  },{
    path: "employee/create",
    component: EmployeeCreateComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

