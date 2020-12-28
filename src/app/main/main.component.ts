import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public faAddressCard: IconDefinition = faAddressCard;
  public faGithub: IconDefinition = faGithub;
  public faLinkedin: IconDefinition = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
