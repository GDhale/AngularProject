import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {LoginService} from './login.service';
import { from } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
// import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
res;
name1;
  constructor(private route:Router, private objserve:LoginService,private spinner: NgxSpinnerService,private toastr: ToastrService) {  
  }
  showSuccess() {
if(null!=this.name1 && ''!=this.name1){
  this.toastr.success('Login Successfully');
}   
  }
 
  //Subscribing here in ngOnit
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);
    
  
  //   setTimeout(()=>
  // this.objserve.getDatafromServer().subscribe(response =>{
  //   console.log("data from observable",response);
  //   this.res=response; //storing value ofresponse in res

  // }) ,1000); 
 
}


  //Routing Concept
  // onClick(){
  //   this.route.navigate(['home']);

  // }

}
