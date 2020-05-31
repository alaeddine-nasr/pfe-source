import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Company } from "../companyinfo/company.model";
import { CompaniesService } from '../companyinfo/companies.service';

@Component({
  selector: "app-company-details",
  templateUrl: "./company-details.component.html",
  styleUrls: ["./company-details.component.css"],
})
export class CompanyDetailsComponent implements OnInit {
  @Input() companyId;
company: Company;
  constructor(public activeModal: NgbActiveModal, private companiesService: CompaniesService,) {
    this.company = new Company();
  }

  ngOnInit(): void {
    this.companiesService.getCurrentCompany(1).subscribe((company: Company) => {
      this.company = company;
    });  }
  closeModal(saveCompany) {
    this.activeModal.close(saveCompany);
  }
}
