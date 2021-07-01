import { Component, OnInit } from '@angular/core';
import { ClientService } from './../client.service';
import { Client } from './../client.model';


@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[] = [];
  displayedColumns = ['id','name','cel','action']
  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {

      this.ClientService.read().subscribe(clients => {
      this.clients = clients
        
      console.log(clients)
    })
  }

}
