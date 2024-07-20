import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  label = input<string>('Button');

  disabled = input<boolean>(false);

  variant = input<'primary' | 'secondary' | 'danger'>('primary');

  outline = input<boolean>(false);

  isIconOnRight = input<boolean>(false);

  icon = input<string>('');

  clicked = output<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
