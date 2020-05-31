import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Company } from "./company.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CompaniesService {
  currentCompany: Company;
  constructor(private http: HttpClient) {}

  getCurrentCompany(companyId: number) {
    return this.http
      .get<Company>(environment.apiURL + "/companies/" + companyId)
      .subscribe((data) => {
        console.log(data);
        this.currentCompany = data;
      });
  }
}
