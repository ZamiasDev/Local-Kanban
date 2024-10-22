import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [
    NgFor,
    DragDropModule,
    CardComponent
  ],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {

  @Input() column: any;
  @Input() columns: any;
  @Output() cardMoved = new EventEmitter<any>();

  onCardDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.cardMoved.emit({ 
        from: event.previousContainer.id,
        to: event.container.id,
        card: event.item.data
      });
    }
  }

  getOtherColumnsNames(): string[] {
    let res: string[] = [];
    for (var val of this.columns) {
      console.log(val)
      if (val.title != this.column.title) {
        res.push(val.title)
      }
    }
    return res;
  }

  addCard() {
    const title = prompt('Entrez le titre de la nouvelle carte');
    if (title) {
      this.column.cards.push({ title });
    }
  }
}
