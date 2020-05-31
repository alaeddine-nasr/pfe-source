import { Component, OnInit } from "@angular/core";
import { ConfigbodyComponent } from "../configbody/configbody.component";
import { CompaniesService } from "./companies.service";
import { Company } from "./company.model";

@Component({
  selector: "app-companyinfo",
  templateUrl: "./companyinfo.component.html",
  styleUrls: ["./companyinfo.component.css"],
})
export class CompanyinfoComponent extends ConfigbodyComponent
  implements OnInit {
  company: Company;
  constructor(private companiesService: CompaniesService) {
    super(companiesService);
    this.companiesService = companiesService;
    this.company = this.companiesService.currentCompany;
  }

  ngOnInit(): void {}
}
