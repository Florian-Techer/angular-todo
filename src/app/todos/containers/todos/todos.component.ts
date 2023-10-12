import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../interfaces/todos.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  private todosState: ITodo[] = [];
  constructor() { }

  get todos(): ITodo[]{
    return this.todosState.filter(todo => !todo.isCompleted)
  }

  get completedTodos(): ITodo[]{
    return this.todosState.filter(todo => todo.isCompleted)
  }

  get countTodos(): number{
    return this.todos.length
  }

  get countCompletedTodos(): number{
    return this.completedTodos.length
  }

  get isHidden(): boolean{
    return this.countCompletedTodos === 0
  }

  ngOnInit(): void {
    
  }
}
