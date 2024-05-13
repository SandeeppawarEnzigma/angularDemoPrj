import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { calculator } from './basicOperations';
import { userInfo } from 'os';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import {Login2Component} from './login2/login2.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent, Login2Component, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Enzigma solutions';
  names = "sandeep";
  displayName=''
  http: any;
  count=0;
  show =true;
  countryCode : any;
  accountData: any;
  objectList:any;
  // httpClient: any;

  constructor(private httpClient: HttpClient) {}

  getValue() {
    return "getData"
  }

  getCountryCode() {
    this.httpClient.get('https://api-staging-in1.nokodr.com/valueset/v1/super/default/countryCode')
      .subscribe((data: any) => {
        // Assuming the API response contains the country code in a property named 'countryCode'
        this.countryCode = data.data.values;
        console.log(data)
      }, (error: any) => {
        console.error('Error fetching country code:', error);
      });
//console.log(data.countryCode)
// console.log("final: ",this.countryCode.data)
      //return this.countryCode.data.values;
  }


  getData() {
    this.httpClient.post('https://api-staging-in1.nokodr.com/data/v1/dataload/default/query', {objType:'dataload__dataload', fields:['name'], limit:500}, {headers: {'Content-Type': 'application/json', 'authorization': 'Bearer x00d0000664202202635040011021e12'}})
      .subscribe((data: any) => {
        // Assuming the API response contains the country code in a property named 'countryCode'
        this.accountData = data;
        console.log(data)
      }, (error: any) => {
        console.error('Error fetching country code:', error);
      });
//console.log(data.countryCode)
// console.log("final: ",this.countryCode.data)
      //return this.countryCode.data.values;
  }
  getObject() {
    this.httpClient.get('https://api-staging-in1.nokodr.com/objectDef/v1/dataload/default/list', {headers: {'Content-Type': 'application/json', 'authorization': 'Bearer x00d0000664202202635040011021e12'}})
    .subscribe((data: any) => {
      // Assuming the API response contains the country code in a property named 'countryCode'
      this.objectList = data;
      console.log(this.objectList)
    }), (error: any) => {
      console.error('Error fetching country code:', error);
    }
    
  }
  getPopUp() { 
    alert("Don't click here");
  }
  cal: any = calculator.addValues(2, 5)
  

  counter (operation: string) {
    // let count=0;
    if(operation=="add") {
      this.count++;
  } else if (operation=="sub") {
    this.count--;
  }
}

// getUserName(name: string) {
//   this.displayName = name
//   if (name==='sandeep') {
//   // callApi

//   this.http.get('https://app.nokodr.com/super/apps/auth/v1/index.html#/login')
//   .subscribe(
//     (response: any) => {
//       // Handle the response data
//       console.log(response);
//     },
//     (error: any) => {
//       // Handle errors
//       console.error('Error fetching data:', error);
//     }
//   );

//   } 
// }

getUserName(name: string) {
  this.displayName = name;
  if (name === 'sandeep') {
    window.open('https://app.nokodr.com/super/apps/auth/v1/index.html#/login', '_blank');
    // Call the API
    // this.http.get('https://app.nokodr.com/super/apps/auth/v1/index.html#/login')
    //   .subscribe(
    //     (response: any) => {
    //       // Handle the response data
    //       console.log(response);
    //       // Open a new tab with the desired URL
    //       window.open('https://app.nokodr.com/super/apps/auth/v1/index.html#/login', '_blank');
    //     },
    //     (error: any) => {
    //       // Handle errors
    //       console.error('Error fetching data:', error);
    //     }
    //   );
  } 
}
}