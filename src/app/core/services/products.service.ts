import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data;

  getData() {
    return this.http.get('./assets/data/mock-products.json');
  }

  getFrenchData() {
    return this.http.get('./assets/data/mock-products-fr.json');
  }

  getAllData() {
    return this.http.get('./assets/data/mock-products-all.json');
  }

  getSegments() {
    let segments = [];
    let retrievedData;
    this.getData().subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(category => {
        category.elements.forEach(segment => {
          segments.push(segment);
        })
      })
    })
    return (segments);
  }

  getSegmentByName(paramsName: string) {
    let segments = [];
    let retrievedData;
    this.getData().subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(category => {
        category.elements.forEach(segment => {
          segments.push(segment);
        })
      })
    })
    console.log(segments);
    segments.forEach(element => {
      console.log(element);
    })
  }

  getProducts(): Observable<any> {
    let products = [];
    let retrievedData;
    this.getData().subscribe(data => {
      retrievedData = data;
      retrievedData.forEach(category => {
        category.elements.forEach(element => {
          element.products.forEach(product => {
            products.push(product);
          });
        });        
      });
    });
    return of(products);
  }

  constructor(private http: HttpClient) {
  }
}
