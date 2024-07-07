import { Component, Input, Output, EventEmitter, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputEnum } from '../../enum/input-enum';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label = '';

  @Input() type = InputEnum.Text;

  @Input() placeholder = '';

  @Input() value: Signal<string | number | null> = signal(null);

  @Output() valueChange = new EventEmitter<string | number | null>();

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue: string | number | null =
      this.type === 'number' ? Number(inputElement.value) : inputElement.value;
    this.valueChange.emit(newValue);
  }
}
