import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    
    value: number;
    constructor(private productService: ProductService) {
        this.value = (1 * 100) / 8;
     }
    products: Product[] = [];

    cols: any[] = [];
    ngOnInit() {
        
        this.productService.getProductsSmall().then(data => this.products = data);

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'inventoryStatus', header: 'Status' },
            { field: 'rating', header: 'Rating' }
        ];
    }

    public nodes: any[] = [{
        "moduleId": 1,
        "moduleName": "Mode",
        "features": [
          {
            "featureId": 2,
            "featureName": "F1",
            "subFeatures": [],
            "privileges": [
              {
                "privilegeId": 2,
                "privilegeName": "P2"
              },
              {
                "privilegeId": 12,
                "privilegeName": "P2E"
              }
            ]
          },
          {
            "featureId": 3,
            "featureName": "F2",
            "subFeatures": [
              {
                "featureId": 4,
                "featureName": "F21",
                "subFeatures": [],
                "privileges": [
                  {
                    "privilegeId": 4,
                    "privilegeName": "P4"
                  }
                ]
              }
            ],
            "privileges": [
              {
                "privilegeId": 3,
                "privilegeName": "P3"
              }
            ]
          }
      ]
  }];
  
      /**
       * A function that returns an observable instance which contains the
       * [child nodes](https://www.telerik.com/kendo-angular-ui/components/treeview/api/TreeViewComponent/#toc-children)
       * for a given parent node.
       */
      public children = (dataitem: any): Observable<any[]> => of(dataitem.features || dataitem.subFeatures);
  
      /**
       * A function that determines whether a given node
       * [has children](https://www.telerik.com/kendo-angular-ui/components/treeview/api/TreeViewComponent/#toc-haschildren).
       */
      public hasChildren = (dataitem: any): boolean => !!dataitem.features || !!dataitem.subFeatures;
}
