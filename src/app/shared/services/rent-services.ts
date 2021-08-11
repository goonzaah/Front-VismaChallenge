import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ConfigService } from "../config.service";
import { Piece } from './my-pieces/models/piece.model'
import { PageParams, SortParams } from '../datatables/datatables.models';
import { FilterOptions } from './my-pieces/models/filterOptions.model';
import { RequestRescueModel } from './my-pieces/models/requestRescueModel';
import { RequestForwardingModel } from './my-pieces/models/requestForwardingModel';
import { RequestRescheduleModel } from './my-pieces/models/requestRescheduleModel';


@Injectable({
  providedIn: "root",
})
export class MyPiecesService {
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}



  getAllProducts() {
    return this.httpClient.get<Piece>(`${this.configService.getProperty("apiUrl")}//rent​/getProducts`);
  }
 
}
