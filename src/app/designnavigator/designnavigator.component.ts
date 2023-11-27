import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-designnavigator',
  templateUrl: './designnavigator.component.html',
  styleUrls: ['./designnavigator.component.css']
})
export class DesignnavigatorComponent implements OnInit {
  slides = [
    {
      title: 'Your vision, Our division',
      description: 'functies: -Lorem ipsum -Lorem ipsum  -Lorem ipsum',
      image: 'assets/Ricky design.JPG',
      link: 'assets/Prototype main.png'
    },
    {
      title: 'Your vision, Our division',
      description: 'functies: -Lorem ipsum -Lorem ipsum  -Lorem ipsum',
      image: 'assets/Ramon design.png',
      link: 'assets/Ramon design 2.png'
    },
    {
      title: 'Your vision, Our division',
      description: 'functies: -Lorem ipsum -Lorem ipsum  -Lorem ipsum',
      image: 'assets/Maarten design.png',
      link: 'assets/Maarten design 2.png'
    }
  ];

  ngOnInit() {
    // Initialize Swiper when the component is initialized
    const mySwiper = new Swiper('sw', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
