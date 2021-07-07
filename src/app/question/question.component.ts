import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as _ from "lodash";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  dataTable: any[] = [];
  dataTableBack: any[] = [];

  textFil: string = '';

  constructor(
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    this.dataTable = await this.apiService.getData().toPromise();
    this.dataTableBack = _.cloneDeep(this.dataTable);
  }

  onTextChange() {
    this.dataTable = this.dataTableBack.filter(item => item.includes(this.textFil));
  }

}
