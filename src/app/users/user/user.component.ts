import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    /* See the note below for an explanation why we need both this and the
       even setup below. */
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    /* Params is an *observable*, so gets called on each async update.
       Note that in ngOnInit() we're only *setting up* the subscribe function,
       which means it doesn't get called when ngOnInit() is run. This is why
       we still need the this.route.snapshot.params above.

       NB. Angular automatically handles unsubscribing from the params
           observable when this component is destroyed, so we don't need to
           (mentioning this because that isn't the case other other
           observables). */
    this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params['id'],
        name: params['name']
      }
    })
  }

}
