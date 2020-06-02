import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Company } from "./company.model";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class CompaniesService {
  currentCompany: Company;
  constructor(private http: HttpClient) {}

  getCurrentCompany(companyId: number) {
    return this.http.get<Company>(
      environment.apiURL + "/companies/" + companyId
    );
  }

  public updateCompany(company: Company) {
    let endPoints = "/companies/"+company.CompanyID;
    this.http.put(environment.apiURL + endPoints , company).subscribe(data => {
      
      console.log(data);
    });
  }

}
