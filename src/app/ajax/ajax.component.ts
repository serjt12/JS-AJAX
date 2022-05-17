import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  currentURL = '';
  userURL = '';
  urlResponse = {};
  status = 0;
  statusText = "no iniciado";
  headers: HttpHeaders | undefined;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.currentURL = window.location.href;
  }
  
  showContent() {
    this.httpService.sendGetRequest(this.userURL).subscribe(res => {
      this.status = res.status;
      this.statusText = res.statusText;
      this.headers = res.headers;
      console.log(res)
      this.urlResponse = res
    })
  }
}
