import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../provider.service';
import { Provider } from './../provider.model';


@Component({
  selector: 'app-provider-read',
  templateUrl: './provider-read.component.html',
  styleUrls: ['./provider-read.component.css']
})
export class ProviderReadComponent implements OnInit {

  providers: Provider[] = [];
  displayedColumns = ['id','name','product','action']
  constructor(private ProviderService: ProviderService) { }

  ngOnInit(): void {

      this.ProviderService.read().subscribe(providers => {
      this.providers = providers
        
      console.log(providers)
    })
  }

}
