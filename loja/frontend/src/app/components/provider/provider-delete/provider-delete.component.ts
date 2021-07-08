import { Provider } from '../provider.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../provider.service';


@Component({
  selector: 'app-provider-delete',
  templateUrl: './provider-delete.component.html',
  styleUrls: ['./provider-delete.component.css']
})
export class ProviderDeleteComponent implements OnInit {


  provider: Provider = {
    name: '',
    product: ''
  }

  constructor(private providerService: ProviderService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.providerService.readById(id).subscribe(provider => {

      this.provider = provider = provider

    })


  }

  deleteProvider(): void {
    this.providerService.delete(this.provider.id).subscribe(() => {
      this.providerService.showMessage('Fornecedor excluido com sucesso!!!')
      this.router.navigate(['/fornecedor'])
    })


  }
  cancel(): void {
    this.router.navigate(['/fornecedor'])

  }

}
