import { Client } from '../client.model';
import{ClientService} from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  
  client:Client = {
    name:'',
    cel:''
  }
  constructor(private clientService: ClientService,
  private router: Router){}
  
  
  ngOnInit(): void {

  }
createClient(): void{
  if(this.client.name == '' ||  this.client.cel == '' ){

    this.clientService.showMessage('Prencha os dados corretamente!!')
  }else{
      this.clientService.create(this.client).subscribe(()=>{
        this.clientService.showMessage('Cliente criado!!')
        this.router.navigate(['/client'])
      })
    }
    }

cancel(): void{

      this.router.navigate(['/client'])

}

}
