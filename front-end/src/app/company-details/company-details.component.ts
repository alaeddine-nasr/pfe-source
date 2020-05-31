import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Company } from "../companyinfo/company.model";

@Component({
  selector: "app-company-details",
  templateUrl: "./company-details.component.html",
  styleUrls: ["./company-details.component.css"],
})
export class CompanyDetailsComponent implements OnInit {
  @Input() company;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.company);
  }
  closeModal(saveCompany) {
    this.activeModal.close(saveCompany);
  }
}
