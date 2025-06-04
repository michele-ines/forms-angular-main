import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  url_API = 'https://viacep.com.br/ws/'
  
  constructor(private httpClient: HttpClient) { }

  getConsultaCep(cep: string) {
    return this.httpClient.get(`${this.url_API}${cep}/json`)
  }
}
