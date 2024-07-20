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
    { label: 'ID', field: 'id', isSortable: true },
    {
      label: 'Фамилия Имя Отчество',
      field: 'name',
      isSortable: true,
    },
    { label: 'Дата и время создания', field: 'created_at', isSortable: true },
    { label: 'Последние изменения', field: 'updated_at', isSortable: true },
    { label: 'Контакты', field: 'contacts', isSortable: false },
    { label: 'Действия', field: 'actions', isSortable: false },
  ];

  sortBy(field: string): void {
    console.log(field);
  }
}
