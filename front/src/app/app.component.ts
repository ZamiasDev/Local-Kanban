import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns = [
    {
      title: 'To Do',
      cards: [
        { title: 'Task n 1' },
        { title: 'Task n 2' },
        { title: 'Task n 3' },
        { title: 'Task n 4' },
        { title: 'Task n 5' },
        { title: 'Task n 6' },
        { title: 'Task n 7' },
        { title: 'Task n 8' },
        { title: 'Task n 9' },
        { title: 'Task n 10' },
        { title: 'Task n 11' },
        { title: 'Task n 12' }
      ]
    },
    {
      title: 'In Progress',
      cards: [
        { title: 'Task n 13' }
      ]
    },
    {
      title: 'Done',
      cards: [
        { title: 'Task n 14' }
      ]
    }
  ];

  moveCard(event: any) {
    console.log(`Card moved from ${event.from} to ${event.to}`);
  }
}
