import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule } from  '@angular/common';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  tasks: Task[] = [
    {
      name: 'Task 1',
      completed: false  
    },
    {
      name: 'Task 2',
      completed: false
    },
    {
      name: 'Task 3',
      completed: false
    }
  ];


  // ADD TASK
  addTask() {

    const taskName = prompt('Enter new task:');

    if (taskName && taskName.trim() !== '') {

      this.tasks.push({
        name: taskName,
        completed: false
      });

    }

  }


  // EDIT TASK
  editTask() {

    const selectedTask = this.tasks.find(task => task.completed);

    if (!selectedTask) {

      alert('Please select a task first.');

      return;
    }

    const newName = prompt(
      'Enter new task name:',
      selectedTask.name
    );

    if (newName && newName.trim() !== '') {

      selectedTask.name = newName;

      selectedTask.completed = false;

    }

  }


  // DELETE TASK
  deleteTask() {

    const selectedIndex = this.tasks.findIndex(
      task => task.completed
    );

    if (selectedIndex === -1) {

      alert('Please select a task first.');

      return;
    }

    this.tasks.splice(selectedIndex, 1);

  }

}