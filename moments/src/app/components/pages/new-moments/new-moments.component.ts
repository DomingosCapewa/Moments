import { Component, OnInit } from '@angular/core';
import { Moments } from 'src/app/moments';

import { MomentService } from 'src/app/services/moment.service';


@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css'],
})
export class NewMomentsComponent implements OnInit {
  btnText = 'Compartilhar!';
  constructor(private momentService: MomentService) {}

  ngOnInit(): void {}
  async createHandler(moment: Moments) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }
    await this.momentService.createMoment(formData).subscribe()
  }
}
