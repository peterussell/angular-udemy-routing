import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  // Activated route is the currently active route which loaded this component
  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    /* By default, this.router.navigate navigates relative to the *root* path
       because it doesn't know where we are calling it from. This is unlike
       routerLink in a template, which navigates relative to the current
       route (the one that loaded the template).
       To change this, we can pass the relativeTo 'extras' option, and use the
       ActivatedRoute as a way to tell navigate where the current page route
       is.

       NB. this is just for an example, this relative route will *break* the
           button's navigation (because there's no route servers/servers). */
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }

}
