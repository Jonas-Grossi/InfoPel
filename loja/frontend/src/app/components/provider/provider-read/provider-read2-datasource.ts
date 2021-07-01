import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface ProviderRead2Item {
  name: string;
  id: number;
  product: string;
}

export class ProviderRead2DataSource extends DataSource<ProviderRead2Item> {
  connect(collectionViewer: CollectionViewer): Observable<readonly ProviderRead2Item[]> {
    throw new Error('Method not implemented.');
  }
 
  paginator: MatPaginator | undefined;
 

  constructor() {
    super();
  }

    
  disconnect(): void {}

  private getPagedData(data: ProviderRead2Item[]): ProviderRead2Item[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  
   
  }


