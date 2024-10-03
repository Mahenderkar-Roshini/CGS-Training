import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskForm!: FormGroup;
  @Output() addTask = new EventEmitter();

  constructor(private fb:FormBuilder){
    this.taskForm = this.fb.group({
      title:['', Validators.required],
      description:['', Validators.required]
    });
  }

  handleAdd(){
    if(this.taskForm.valid){
      console.log(this.taskForm.value)
      this.addTask.emit(this.taskForm.value);
    } else{
      alert("Enter the details");
    }
  }

}
