import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchAirportService {

  private resourceUrl = 'fournisseur/';
  public static BASE_URL_SERVICE: string = environment.urlApi

  constructor(private http: HttpClient) { }

  getAirports(numIntraVat: string, siret: string): Observable<Airport[]>{
    return this.http.get<Airport[]>(SearchAirportService.BASE_URL_SERVICE + this.resourceUrl + 'fournisseur-by-vat/' + numIntraVat + '/' + siret).pipe(map((data: Fournisseur[]) => data as Fournisseur[]));
  }
}
