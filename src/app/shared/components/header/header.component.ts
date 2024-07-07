import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { InputEnum } from '../../enum/input-enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  InputEnum = InputEnum;

  onValueChange(value: string | number | null): void {
    console.log(value);
  }
}
