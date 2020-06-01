import { Component, OnInit } from "@angular/core";
import { CompaniesService } from "./companies.service";
import { Company } from "./company.model";
import { NgbModal,NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { CompanyDetailsComponent } from "../company-details/company-details.component";

@Component({
  selector: "app-companyinfo",
  templateUrl: "./companyinfo.component.html",
  styleUrls: ["./companyinfo.component.css"],
})
export class CompanyinfoComponent implements OnInit {
  company: Company;
  constructor(
    config: NgbModalConfig, 
    private companiesService: CompaniesService,
    private modalService: NgbModal
  ) {
    this.company = new Company(),
    config.backdrop = 'static';
  }
  ngOnInit(): void {
    this.companiesService.getCurrentCompany(1).subscribe((company: Company) => {
      this.company = company;
    });
  }
  openCompanyDetails() {
    const modalRef = this.modalService.open(CompanyDetailsComponent, {
    
     
      size: <any>'xl',
    });
    modalRef.componentInstance.companyId = this.company.CompanyID;
    modalRef.result.then(
      () => {
        this.companiesService.getCurrentCompany(this.company.CompanyID).subscribe((company: Company) => {
          this.company = company;
        });      },
      () => {}
    );
  }
}
