import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface EmployeeRead2Item {
  name: string;
  id: number;
  type: string;
}

export class EmployeeRead2DataSource extends DataSource<EmployeeRead2Item> {
  connect(collectionViewer: CollectionViewer): Observable<readonly EmployeeRead2Item[]> {
    throw new Error('Method not implemented.');
  }
 
  paginator: MatPaginator | undefined;
 

  constructor() {
    super();
  }

    
  disconnect(): void {}

  private getPagedData(data: EmployeeRead2Item[]): EmployeeRead2Item[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  
   
  }


