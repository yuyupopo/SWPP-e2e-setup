import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { Todo } from "../todo";
import { TodoService } from "../services/todo.service";
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];

  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(list => (this.todos = list));
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
