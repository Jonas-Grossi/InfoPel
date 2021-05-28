import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface ProductRead2Item {
  name: string;
  id: number;
  price: number;
}

export class ProductRead2DataSource extends DataSource<ProductRead2Item> {
  connect(collectionViewer: CollectionViewer): Observable<readonly ProductRead2Item[]> {
    throw new Error('Method not implemented.');
  }
 
  paginator: MatPaginator | undefined;
 

  constructor() {
    super();
  }

    
  disconnect(): void {}

  private getPagedData(data: ProductRead2Item[]): ProductRead2Item[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  
   
  }


