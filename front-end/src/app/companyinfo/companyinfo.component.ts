import { Component, OnInit } from "@angular/core";
import { ConfigbodyComponent } from "../configbody/configbody.component";
import { CompaniesService } from "./companies.service";
import { Company } from "./company.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CompanyDetailsComponent } from "../company-details/company-details.component";

@Component({
  selector: "app-companyinfo",
  templateUrl: "./companyinfo.component.html",
  styleUrls: ["./companyinfo.component.css"],
})
export class CompanyinfoComponent implements OnInit {
  company: Company;
  constructor(
    private companiesService: CompaniesService,
    private modalService: NgbModal
  ) {
    this.company = new Company();
  }
  ngOnInit(): void {
    this.companiesService.getCurrentCompany(1).subscribe((company: Company) => {
      this.company = company;
    });
  }
  openCompanyDetails() {
    const modalRef = this.modalService.open(CompanyDetailsComponent, {
      scrollable: true,
      windowClass: "",
      // keyboard: false,
      // backdrop: 'static'
    });
    modalRef.componentInstance.companyId = this.company.CompanyID;
    modalRef.result.then(
      (result) => {
        this.companiesService.getCurrentCompany(this.company.CompanyID).subscribe((company: Company) => {
          this.company = company;
        });      },
      (reason) => {}
    );
  }
}
