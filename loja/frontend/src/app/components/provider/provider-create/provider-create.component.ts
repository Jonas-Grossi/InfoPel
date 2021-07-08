import { Provider } from '../provider.model';
import{ProviderService} from './../provider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.css']
})
export class ProviderCreateComponent implements OnInit {
  
  provider:Provider = {
    name:'',
    product:''
  }
  constructor(private providerService: ProviderService,
  private router: Router){}
  
  
  ngOnInit(): void {

  }
createProvider(): void{
      this.providerService.create(this.provider).subscribe(()=>{
        this.providerService.showMessage('Fornecedor criado!!')
        this.router.navigate(['/fornecedor'])
      })
      
    }

cancel(): void{

      this.router.navigate(['/fornecedor'])

}

}
