import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoapApiService {

  constructor(private http: HttpClient) { }


  getResponseSoapService(url: string) {
    let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.ws.siginter.agri.jccm.es/">
    <soapenv:Header/>
    <soapenv:Body>
        <ser:descargaListaOTs>
          <!--Optional:-->
          <usuario>51998516R</usuario>
        </ser:descargaListaOTs>
    </soapenv:Body>
    </soapenv:Envelope>`;
    let response = this.http.post(url, body, { 
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods':  'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Access-Control-Allow-Credentials': 'true',
      }), 
      responseType: 'text' 
    });
    // console.log(response);
    return response;
  }

  // POR EL MOMENTO TENEMOS LOS DATOS MOCKEADOS
  getListadoOts(): Observable<any> {
    return this.http.get('assets/mock/listadoOTs.json');
  }

  getInfoOt(codigoOt: number): Observable<any> {
    return this.http.get('assets/mock/ot.json');
  }
}