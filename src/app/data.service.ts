import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) {

  }


  load() {

    let headers = new Headers({
      'Authorization': 'token 6cdd7741-f3c0-47fa-a97d-677543d82a6b'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.get('/me/todomvc', options)
      .map(x => x.json());

  }


  save(todos) {

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'token 6cdd7741-f3c0-47fa-a97d-677543d82a6b'
    });
    let options = new RequestOptions({
      headers: headers
    })

    this.http.post('/me/todomvc', todos, options)
      .subscribe();

  }
}
