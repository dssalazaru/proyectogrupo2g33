import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  totalAngularPackages:any;

  constructor(private http: HttpClient) { }

  token:String = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNTEwMjk4OCwiZXhwIjoxNjM1MTA0MTg4LCJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjF9.cmw9uWYXtdkk1-DAXxTQZI1dNuSPZE-ZT2M9DQHwuqo";
 
  ngOnInit() {
    const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNTEwNDYzNCwiZXhwIjoxNjM1MTA1ODM0LCJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjF9.KmnM-DBQM-h-fm--xlaj3uHd-iJCz_61aSDjnZzNW9E', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'localhost' }
    this.http.get<any>('http://app.dssu.xyz:8080/g2inventory/api/inventario', { headers }).subscribe(data => {
        this.totalAngularPackages = data.tsotal;
    })
    // console.log(this.totalAngularPackages)
}




}
