
import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Headers,Http,RequestOptions } from '@angular/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  filter_type:string;
  @Input() todos:any[];
  @Output() clearCompleted=new EventEmitter<any>();
  constructor(private datasrv: DataService,private http: Http) { }

  ngOnInit() {
  }
  get active_items() {
      console.log(this.todos);
    return this.todos.filter(v => !v.done).length;

  }

  btnClear() {
    this.clearCompleted.emit();

  }
  save()
  {
    this.datasrv.save(this.todos);
    //let headers = new Headers({
    //  'Content-Type': 'application/json',
    //  'Authorization': 'token 6cdd7741-f3c0-47fa-a97d-677543d82a6b'
   // });
   // let options = new RequestOptions({
   //   headers: headers
   // })
   // this.http.post('/me/todomvc', this.todos, options)
   //   .subscribe();

  }

}
