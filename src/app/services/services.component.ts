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
    this.activatedRoute.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      if (element) {
        element.scrollIntoView(element);
        window.scrollBy(0, -64);
      }
    });
    this.servicesContents = [];
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(d=> this.serviceConstants(d.service));
  }

  serviceConstants(service:string) {
    switch (service) {
      case 'cloud' :
        this.servicesContents = [CloudServices];
        break;
      case 'analytics' :
        this.servicesContents = [AnalyticalServices];
        break;
      case 'search' :
        this.servicesContents = [SearchServices];
        break;
      case 'staffing' :
        this.servicesContents = [StaffingServices];
        break;
      default:
        this.servicesContents = [
          SearchServices, CloudServices, AnalyticalServices, StaffingServices
        ];
    }
  }

}
