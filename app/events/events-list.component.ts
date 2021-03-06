import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <event-thumbnail (eventClicked)="handleEventClicked($event)"
        [event]="event1"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent {
    private someEvent: string;
    private event1 = { 
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assests/images/angularconnect-shield.png',
        location: { 
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };

    handleEventClicked(data){
        this.someEvent = data;
        console.log(this.someEvent)
    }
}
