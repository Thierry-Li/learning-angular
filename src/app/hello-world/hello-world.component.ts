import { Component, OnInit } from '@angular/core';
import { Logger } from '../services/logger.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})

export class HelloWorldComponent implements OnInit {
  constructor(private logger: Logger) { }

  ngOnInit(): void {
    this.logger.log('HelloWorldComponent: ngOnInit');
  }
}
