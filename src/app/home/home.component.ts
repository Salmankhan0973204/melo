import { Component, OnInit, Input,VERSION  } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  images = [
    {path: '../../assets/images/slide1.jpeg'},
    {path: '../../assets/images/slide2.jpeg'},
    {path: '../../assets/images/slide3.jpeg'},
    {path: '../../assets/images/slide4.jpeg'},
    {path: '../../assets/images/slide5.jpeg'},
  ]


  constructor() { }

  ngOnInit(): void {
  }
}
