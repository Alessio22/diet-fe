import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  status(): Observable<unknown> {
    return this.httpClient.get<unknown>(this.configService.config.api! + '/status');
  }

}
