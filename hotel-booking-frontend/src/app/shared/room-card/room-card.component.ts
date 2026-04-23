import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent {

  @Input() room: any;

  @Output() book = new EventEmitter<any>();

  
today = new Date().toISOString().split('T')[0];
 bookNow() {
  console.log("ROOM OBJECT:", this.room); // 🔥 DEBUG

  this.book.emit({
    roomId: this.room.id   // MUST be this
  });
}
}