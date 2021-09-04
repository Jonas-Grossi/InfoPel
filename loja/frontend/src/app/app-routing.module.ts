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
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { AuthGuard } from './components/login/auth.guard';
  

const routes: Routes = [
  {
    path: "",
    component:RouterModule,
    canActivate: [AuthGuard] 
    
    
  },{
    path: "home",
    component:HomeComponent,
    canActivate: [AuthGuard] 
    
    
  },{
  path: "login",
    component: LoginComponent,
    
  },
  {
    

    path: "products",
    component: ProductCrudComponent,
    canActivate: [AuthGuard]
  }, {
    path: "products/create",
    component: ProductCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent,
    canActivate: [AuthGuard]

  },
  
  {
    path: "client",
    component: ClientCrudComponent,
    canActivate: [AuthGuard]
  }, {
    path: "client/create",
    component: ClientCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "client/update/:id",
    component: ClientUpdateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "client/delete/:id",
    component: ClientDeleteComponent,
    canActivate: [AuthGuard]

  }, {
    path: "fornecedor",
    component: FornecedorCrudComponent,
    canActivate: [AuthGuard]
  }, {
    path: "provider/create",
    component: ProviderCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "provider/update/:id",
    component: ProviderUpdateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "provider/delete/:id",
    component: ProviderDeleteComponent,
    canActivate: [AuthGuard]

  },{
    path: "funcionarios",
    component: FuncionariosCrudComponent,
    canActivate: [AuthGuard]

  }, {
    path: "funcionarios/create",
    component: FuncionarioCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "funcionarios/update/:id",
    component: FuncionarioUpdateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "funcionarios/delete/:id",
    component: FuncionarioDeleteComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

