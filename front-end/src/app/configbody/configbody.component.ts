import { Component, OnInit } from "@angular/core";
import { CompaniesService } from "../companyinfo/companies.service";

@Component({
  selector: "app-configbody",
  templateUrl: "./configbody.component.html",
  styleUrls: ["./configbody.component.css"],
})
export class ConfigbodyComponent implements OnInit {
  constructor(private companyService: CompaniesService) {}
  ngOnInit(): void {
    this.companyService.getCurrentCompany(1);
  }
}
