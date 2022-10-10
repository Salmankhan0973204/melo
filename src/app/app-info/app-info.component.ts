import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {
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
