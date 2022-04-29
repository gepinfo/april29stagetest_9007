import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sharedfeatureclient } from '../config/featureservices';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  public featurescomponent:any;

  ngOnInit() {
    this.featurescomponent = sharedfeatureclient;
  }
  navigate(){
    this.router.navigate(['usermanagement']);
  }

}
