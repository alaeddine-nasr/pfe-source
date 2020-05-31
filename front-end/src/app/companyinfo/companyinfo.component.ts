import { Component, OnInit } from "@angular/core";
import { ConfigbodyComponent } from "../configbody/configbody.component";
import { CompaniesService } from "./companies.service";
import { Company } from "./company.model";

@Component({
  selector: "app-companyinfo",
  templateUrl: "./companyinfo.component.html",
  styleUrls: ["./companyinfo.component.css"],
})
export class CompanyinfoComponent implements OnInit {
  company: Company;
  constructor(private companiesService: CompaniesService) {
    this.company = new Company();
  }
  ngOnInit(): void {
    this.companiesService.getCurrentCompany(1).subscribe((company: Company) => {
      this.company = company;
    });
  }
}
