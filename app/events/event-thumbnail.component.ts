import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.name }} </div>
        <div>Time: {{ event.time }} </div>
        <div>Price: \${{ event.price }}</div>
        <div>
            <span>Location: {{ event.location.address }}</span>
            <span>&nbsp;</span>
            <span>{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click</button>
    </div>
    `
})

export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClicked = new EventEmitter()

    handleClickMe(){
        this.eventClicked.emit(this.event.name);
    }

}