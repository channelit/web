import {Component, OnInit, Input} from '@angular/core';
import {ServicesCyberSecurity} from "../content/services.cybersecurity";
import {ServicesCloud} from "../content/services.cloud";
import {ServicesAiml} from "../content/services.aiml";
import {ServicesStaffing} from "../content/services.staffing";
import {ServicesBi} from "../content/services.bi"
import {ActivatedRoute, Router} from "@angular/router";
import {ServicesDevSecOps} from "../content/services.devsecops";
import {ServicesBlockchain} from "../content/services.blockchain";

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
        element.scrollIntoView();
        window.scrollBy(0, -64);
      }
    });
    this.servicesContents = [];
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(d => this.serviceConstants(d.service));
  }

  serviceConstants(service: string) {
    switch (service) {
      case 'cloud' :
        this.servicesContents = [ServicesCloud];
        break;
      case 'aiml' :
        this.servicesContents = [ServicesAiml];
        break;
      case 'cybersecurity' :
        this.servicesContents = [ServicesCyberSecurity];
        break;
      case 'blockchain' :
        this.servicesContents = [ServicesBlockchain];
        break;
      case 'staffing' :
        this.servicesContents = [ServicesStaffing];
        break;
      case 'bi' :
        this.servicesContents = [ServicesBi];
        break;
      case 'devsecops' :
        this.servicesContents = [ServicesDevSecOps];
        break;
      default:
        this.servicesContents = [
          ServicesCloud, ServicesAiml, ServicesCyberSecurity, ServicesBlockchain, ServicesStaffing, ServicesBi, ServicesDevSecOps
        ];
    }
  }
}
