import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  // Need to get the server ID here
  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'] // 'server' matches the resolved name in the route
    });
    /* --- Changed this to use a resolver instead of params --- */
    // '+' is a method of casting a string (param) to a number
    // const serverId = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(serverId);
    //
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
  }

  onEditServer() {
    // Could also do navigate(['edit', this.server.id, 'edit']), but the method
    // below is nicer and the more 'proper' way.
    this.router.navigate(
      ['edit'],
      { relativeTo: this.route, queryParamsHandling: 'preserve' }
    );
  }
}
