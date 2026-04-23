import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  template: `<span [ngClass]="status">{{ status }}</span>`,
styleUrls: ['./status-badge.component.css']
})
export class StatusBadgeComponent {
  @Input() status: string = '';
}