import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface Tab {
  name: string;
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
    },
    {
      name: 'transactions',
    },
  ];

  constructor() {}

  ngOnInit() {}

  id(tab: Tab) {
    return `${tab.name}-${this.suffix}`;
  }
}
