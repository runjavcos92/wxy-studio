import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MensajeService {
  
  constructor(private _http: HttpClient) { }
  sendMessage(appData) {
    //console.log("prueba en servicio");
    return this._http.post('http://localhost:3000/sendmail', appData);
 }
}
