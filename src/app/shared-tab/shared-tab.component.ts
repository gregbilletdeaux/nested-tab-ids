import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface Tab {
  name: string;
  link: string;
}

@Component({
  selector: 'app-shared-tab',
  templateUrl: './shared-tab.component.html',
  styleUrls: ['./shared-tab.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class SharedTabComponent implements OnInit {
  @Input() suffix: string | number = '';

  public tabs: Tab[] = [
    {
      name: 'info',
      link: 'info',
    },
    {
      name: 'transactions',
      link: 'transactions',
    },
  ];

  constructor() {}

  ngOnInit() {}

  generateId(tab: Tab) {
    return `${tab.name}/${this.suffix}`;
  }
}
