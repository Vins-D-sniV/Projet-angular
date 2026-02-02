import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class Todo {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  nextId: number = 1;

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: this.nextId++,
        title: this.newTaskTitle.trim(),
        completed: false
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get totalTasks(): number {
    return this.tasks.length;
  }
}