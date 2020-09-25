import { ClientFirm } from './../../shared/clientFirm.model';
import { AuditPortfolio } from './../../shared/audit.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private httpService: HttpClient) { }
  formData : AuditPortfolio
  Create()
  {
      //formData = auditPortfolio;
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
  
      //return this.httpService
        //.post<AuditPortfolio>("https://localhost:5001/weatherforecast", this.formData);
      
        return this.httpService
        .post("https://ujpwdxg8hi.execute-api.ap-south-1.amazonaws.com/v2", "");  
       // .pipe(catchError(this.handleError));
    
  }

  getAudits()
    {
       return ["audit1", "audit2", "audit3"];
    }

  getClientFirms()
  {
    return [{ ClientFirmCode: "1", Name:"Oracle"}];
      //return httpService.get("https://localhost:5001/api/ClientAPI").subscribe(response=>{
      
      //console.log(response);
  //});
  }
}
