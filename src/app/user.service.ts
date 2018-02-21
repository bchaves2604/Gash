import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Driver} from './model/driver/driver'
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';  

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const rootUrl='http://localhost:8080';
@Injectable()
export class UserService {

  private addDriverUrl='/addDriver';
  private driversURL = '/getDrivers';

  constructor(private http: HttpClient) { 
  }

  addDriver(driver: Driver): Observable<Driver>{
    return this.http.post<Driver>(rootUrl + this.addDriverUrl+'?'+'driverName='+driver.driverName+'&'+'nationalId='+driver.driverNationalId
    + '&'+'birthDate='+ driver.driverBirthDate + '&' + 'telephoneNumber=' + driver.driverTelephoneNumber,  JSON.stringify(driver), httpOptions)
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(rootUrl+ this.driversURL);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
