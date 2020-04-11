import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data;

  dateSegments = [];
  figSegments = [];
  syrupSegments = [];
  sugarSegments = [];

  getData() {
    return this.http.get('./assets/data/mock-products.json');
  }

  /*getSegmentByName(name: string) {
    this.http.get('./assets/data/mock-products.json').
      subscribe( data => {
        this.data = data;
        
          category.elements.forEach(segment => {
            console.log(segment.name);
            if (segment.name === name) {
              return segment;
            }
          });
        });
      }
    )
  }*/

  getSegments(categorie: string) {
    switch(categorie) {
      case "dates": return this.dateSegments; break;
      case "figs": return this.figSegments; break;
      case "syrups": return this.syrupSegments; break;
      case "sugars": return this.sugarSegments; break;
    }
  }

  constructor(private http: HttpClient) {
    this.getData();
    
  }
}
