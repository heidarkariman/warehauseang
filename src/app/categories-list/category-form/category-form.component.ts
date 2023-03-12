import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  @Input() category!: Category;
  @Output() save = new EventEmitter<Category>();
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.category) {
      this.form.patchValue(this.category);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const category: Category = this.form.value;
      category.id = this.category ? this.category.id : 0;
      this.save.emit(category);
    }
  }
}
