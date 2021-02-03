import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-recipes-input',
  templateUrl: './total-recipes-input.component.html',
  styleUrls: ['./total-recipes-input.component.css']
})
export class TotalRecipesInputComponent implements OnInit {

  PAL_Percentage = 37;
  CA_Percentage = 13;
  TA_Percentage = 39;
  PA_Percentage = 10;
  OR_Percentage = 0.5;
  RO_Percentage = 0.5;

  remainingPAL: number;
  remainingCA: number;
  remainingTA: number;
  remainingPA: number;
  remainingOR: number;
  remainingRO: number;
  totalCount: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.value["totalCount"]<1){
      alert("Total count must be larger than zero")
      return;
    }
    if (this.PAL_Percentage+this.CA_Percentage+this.TA_Percentage+this.PA_Percentage+this.OR_Percentage+this.RO_Percentage!=100){
      alert("All percentages must add up to 100")
      return;
    }

    this.remainingPAL = +(form.value["totalCount"] * this.PAL_Percentage/100).toFixed(3)
    this.remainingCA = +(form.value["totalCount"] * this.CA_Percentage/100).toFixed(3)
    this.remainingTA = +(form.value["totalCount"] * this.TA_Percentage/100).toFixed(3)
    this.remainingPA = +(form.value["totalCount"] * this.PA_Percentage/100).toFixed(3)
    this.remainingOR = +(form.value["totalCount"] * this.OR_Percentage/100).toFixed(3)
    this.remainingRO = +(form.value["totalCount"] * this.RO_Percentage/100).toFixed(3)

  }
  clearForm(form: NgForm) {
    form.reset();
    this.remainingPAL = null;
    this.remainingCA = null;
    this.remainingTA = null;
    this.remainingPA = null;
    this.remainingOR = null;
    this.remainingRO = null;
    this.totalCount = null;

  }
  switchInput() {
    this.router.navigate(["../"])

  }

}
