import {Component, OnInit, Input} from '@angular/core';
import {SearchServices} from "../content/services.search";
import {CloudServices} from "../content/services.cloud";
import {AnalyticalServices} from "../content/services.analytics";
import {StaffingServices} from "../content/services.staff"
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  servicesContents;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.servicesContents = [];
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(d=> this.serviceConstants(d.service));
  }

  serviceConstants(service:string) {
    switch (service) {
      case 'cloud' :
        console.log('cloud' + service);
        this.servicesContents = [CloudServices];
        break;
      case 'analytics' :
        console.log('analytics' + service);
        this.servicesContents = [AnalyticalServices];
        break;
      case 'search' :
        console.log('search' + service);
        this.servicesContents = [SearchServices];
        break;
      case 'staffing' :
        console.log('staffing' + service);
        this.servicesContents = [StaffingServices];
        break;
      default:
        console.log('default' + service);
        this.servicesContents = [
          SearchServices, CloudServices, AnalyticalServices, StaffingServices
        ];
    }
  }

}
