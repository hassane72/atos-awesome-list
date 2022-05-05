import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'al-home-features-card',
  templateUrl: './home-features-card.component.html',
  styles: [
  ]
})
export class HomeFeaturesCardComponent {

  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() title: string = '';

}
