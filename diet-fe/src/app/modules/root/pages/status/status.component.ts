import { Component, OnInit } from '@angular/core';
import {StatusService} from "../../services/status.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  status: unknown

  constructor(private statusService: StatusService) {
  }

  ngOnInit(): void {
    this.statusService.status().subscribe(
      (status) => this.status = status
    )
  }

}
