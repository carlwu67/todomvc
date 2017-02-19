
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inputHint: string = 'What needs to be done?';
  todos: any[] = [];
  todo: string;
  todosCheck: boolean;

  constructor(private datasrv: DataService, private http: Http) {


  }
    ngOnInit() {
        this.datasrv.load().subscribe(values => {
        this.todos = values;
      });
      //let headers = new Headers({
      //  'Authorization': 'token 6cdd7741-f3c0-47fa-a97d-677543d82a6b'
      //});
     // let options = new RequestOptions({
     //   headers: headers
     // })
     // this.http.get('/me/todomvc', options)
     ///   .subscribe(res => {
     //     this.todos = res.json();
      //  });
    }

    Addinput(newTodo: HTMLInputElement) {

    console.log('newTodo.value:' + newTodo.value);
    console.log('todo:' + this.todo);

    if (newTodo.value) {
      //this.todos.push({
      //  value: newTodo.value,
      //  done: false
      //});
      this.todos = [...this.todos,
      {
        value: newTodo.value,
        done: false
      }];



    }

    newTodo.value = '';
  }

  clearCompleted() {
    this.todos = this.todos.filter(v => !v.done);

  }
  selectAllEvent(itemcheck: boolean) {
    //let datasvc: DataService;
    console.log('selectAllEvent');


    //this.todos=datasvc.selectAlltodos(this.todos,this.todosCheck);
    this.todos = this.todos.map(v => {
      //v.done=!event.target.checked;
      v.done = !itemcheck;
      return v;
    });



  }
  deletetodos(item) {
    let idx: number = this.todos.indexOf(item);
    if (idx > -1) {
      this.todos.splice(idx, 1);
      this.todos = [...this.todos];
    }

  }


}


interface todoif {
  value: string,
  done: boolean
}
