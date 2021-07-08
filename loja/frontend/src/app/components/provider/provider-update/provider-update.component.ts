import { ProviderService } from '../provider.service';
import { Provider } from '../provider.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdateComponent implements OnInit {

  provider: Provider = {
    name: '',
    product: ''
  }

  constructor(private providerService: ProviderService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.providerService.readById(id).subscribe(provider => {
      this.provider = provider

    });


  }

  updateProvider(): void {

    this.providerService.update(this.provider).subscribe(() => {
      this.providerService.showMessage('Fornecedor atualizado com sucesso')
      this.router.navigate(['/fornecedor'])
    })


  }
  cancel(): void {
    this.router.navigate(['/fornecedor'])

  }
}
