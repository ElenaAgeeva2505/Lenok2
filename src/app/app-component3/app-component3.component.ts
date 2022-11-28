import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-component3',
  templateUrl: './app-component3.component.html',
  styleUrls: ['./app-component3.component.css']
})
export class AppComponent3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  array_dogs=[
    {
      name:'Karamelka'
    },
    {
      name:'Korjic'
    },
    {
      name:'Kompot'
    },
    {
      name:'Iriska'
    },
    {
      name:'Sosiska'
    },
    {
      name:'Gav'
    }
  ]

  date_now=new Date();

}
