import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-recipes-output',
  templateUrl: './total-recipes-output.component.html',
  styleUrls: ['./total-recipes-output.component.css']
})
export class TotalRecipesOutputComponent implements OnInit {

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

  onSubmit(form: NgForm) {
    if(form.value['PAL']*form.value['CA']*form.value['TA']*form.value['PA']*form.value['OR']*form.value['RO']<=0){
      alert("All amount values must be higher then 0")
      return;
    }
    if (this.PAL_Percentage+this.CA_Percentage+this.TA_Percentage+this.PA_Percentage+this.OR_Percentage+this.RO_Percentage!=100){
      alert("All percentages must add up to 100")
      return;
    }
    // this.PAL_Percentage/=100;
    // this.CA_Percentage/=100;
    // this.TA_Percentage/=100;
    // this.PA_Percentage/=100;
    // this.OR_Percentage/=100;
    // this.RO_Percentage/=100;
    const PAL_Result = form.value['PAL'] / (this.PAL_Percentage/100)
    const CA_Result = form.value['CA'] / (this.CA_Percentage/100 )
    const TA_Result = form.value['TA'] / (this.TA_Percentage/100 )
    const PA_Result = form.value['PA'] / (this.PA_Percentage/100 )
    const OR_Result = form.value['OR'] / (this.OR_Percentage/100 )
    const RO_Result = form.value['RO'] / (this.RO_Percentage/100 )


    this.totalCount = Math.floor(Math.min(PAL_Result, CA_Result, TA_Result, PA_Result, OR_Result, RO_Result));
 

    this.remainingPAL = +(form.value["PAL"] - (this.PAL_Percentage/100 ) * this.totalCount).toFixed(3)
    this.remainingCA = +(form.value["CA"] - (this.CA_Percentage/100 ) * this.totalCount).toFixed(3)
    this.remainingPA = +(form.value["PA"] - (this.PA_Percentage/100 ) * this.totalCount).toFixed(3)
    this.remainingOR = +(form.value["OR"] - (this.OR_Percentage/100 ) * this.totalCount).toFixed(3)
    this.remainingTA = +(form.value["TA"] - (this.TA_Percentage/100 ) * this.totalCount).toFixed(5)
    this.remainingRO = +(form.value["RO"] - (this.RO_Percentage/100 ) * this.totalCount).toFixed(3)
  }

  clearForm(form: NgForm) {
    form.reset();
    this.remainingPAL=null;
    this.remainingCA=null;
    this.remainingTA=null;
    this.remainingPA=null;
    this.remainingOR=null;
    this.remainingRO=null;
    this.totalCount=null;
    

  }

  switchInput() {
    this.router.navigate(["/alt"])

  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
