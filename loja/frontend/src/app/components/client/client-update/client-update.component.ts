import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client = {
    name: '',
    cel: ''
  }

  constructor(private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(client => {
      this.client = client

    });


  }

  updateClient(): void {

    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente atualizado com sucesso')
      this.router.navigate(['/client'])
    })


  }
  cancel(): void {
    this.router.navigate(['/client'])

  }
}
