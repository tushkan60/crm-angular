import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ButtonComponent, NgForOf],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  columns = [
    { label: 'ID', field: 'id' },
    {
      label: 'Фамилия Имя Отчество',
      field: 'name',
    },
    { label: 'Дата и время создания', field: 'created_at' },
    { label: 'Последние изменения', field: 'updated_at' },
    { label: 'Контакты', field: 'contacts' },
    { label: 'Действия', field: 'actions' },
  ];

  sortBy(field: string): void {
    console.log(field);
  }
}
