import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-vt-shared',
  template: `
    <p>
      vt-shared still blub works!
      {{ test }}
    </p>
  `,
  styles: []
})
export class VtSharedComponent implements OnInit {

  @Input() test: string;

  constructor() { }

  ngOnInit() {
  }

}
