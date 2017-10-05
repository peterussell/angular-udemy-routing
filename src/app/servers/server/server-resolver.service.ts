import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';

// Ideally would move this to a different file
interface Server {
  id: number;
  name: string;
  status: string;
}

/* Resolvers a way to add a guard to a route which can go and do things before
   loading the route, and (optionally?) return an object that the component
   loaded by that route might want to use.

   An alternate way is to load these things in the onInit() method of the
   component, but using a resolver allows the same resolver to be applied to
   many different routes. For example, if a number of different routes needed
   to fetch a server object based on part of the route (eg. servers/5/), then
   using a resolve allows that code to get and return the server *object* to
   be put into a resolver and reused for each route.

   It also has the advantage that it can return an observable or promise (async),
   or object (synchronous), so has more flexibility in how it can be used. */
@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  // Unlike the other guards, this gets run each time the page loads, so we
  // can just use the snapshot to get the ID, we don't need to use an observable.
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Server> | Promise<Server> | Server {
      return this.serversService.getServer(+route.params['id']);
  }
}
