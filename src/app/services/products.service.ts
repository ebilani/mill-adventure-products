import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//require('dotenv').config()
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProductList() {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${environment.API_KEY}`)

    return this.http.post<any>(`${environment.API_ENDPOINT}`, 
        {"query":`query{
          getProductList {
            items {
              slug
              name
              image {
                caption
                credit
                description
                filename
                mimeType
                path
                sourceUrl
                title
                uploadStatus
              }
              price
              description
            }
          }
        }`},
        {headers});
  }

  getCategoryList() {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${environment.API_KEY}`)
    return this.http.post<any>(`${environment.API_ENDPOINT}`, 
        {"query":`query{
          getCategoryList {
            items {
              _id
              slug
              name
              products {
                _id
                slug
                name
                description
                price
                image {
                  _id
                  caption
                  credit
                  description
                  filename
                  mimeType
                  path
                  sourceUrl
                  title
                  uploadStatus
                }
              }
            }
          }
        }`},
        {headers});
    }

    getProductById(_id: string){
      const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${environment.API_KEY}`)
      return this.http.post<any>(`${environment.API_ENDPOINT}`, 
      {"query":`query($_id: ID!) {
          getCategory(_id: $_id) {
            _id
            name
            products {
              _id
              description
              image {
                _id
                caption
                credit
                description
                filename
                mimeType
                path
                sourceUrl
                title
                uploadStatus
              }
              name
              price
              slug
            }
            slug
          }  
      }`,  variables: { _id }},{headers});
    }
    getProductDetails(_id: string){
      const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${environment.API_KEY}`)
      return this.http.post<any>(`${environment.API_ENDPOINT}`, 
      {"query":`query ($_id: ID!) {
        getProduct(_id: $_id) {
          _id
          description
          image {
            _id
            caption
            credit
            description
            filename
            mimeType
            path
            sourceUrl
            title
            uploadStatus
          }
          name
          price
          slug
        }
      }`,  variables: { _id }},{headers});
    }
}



