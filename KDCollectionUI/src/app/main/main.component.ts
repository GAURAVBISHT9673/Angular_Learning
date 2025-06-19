import { CommonModule } from '@angular/common';
import {Component,ViewChild,ElementRef,CUSTOM_ELEMENTS_SCHEMA,AfterViewInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import { SwiperContainer } from 'swiper/element';
// import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
// export class MainComponent implements AfterViewInit {
export class MainComponent{
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  // @ViewChild('swiperRef', { static: true }) swiperRef!: ElementRef<SwiperContainer>;

  // swiperInstance!: Swiper; // Declare a variable to hold the Swiper instance

  // ngAfterViewInit() {
  //   // Initialize Swiper after the view has been initialized
  //   this.swiperInstance = this.swiperRef.nativeElement.swiper;
  // }

  // // Optional: Methods to control navigation programmatically
  // goNext() {
  //   this.swiperInstance.slideNext();
  // }

  // goPrev() {
  //   console.log('go Prev is Click');
  //   this.swiperInstance.slidePrev();
  // }

  categories = [
    {
      route: ' ',
      img: 'category-1.jpg',
      title: 'T-Shirt',
    },
    {
      route: ' ',
      img: 'category-2.jpg',
      title: 'Bags',
    },
    {
      route: ' ',
      img: 'category-3.jpg',
      title: 'Sandal',
    },
    {
      route: ' ',
      img: 'category-4.jpg',
      title: 'Scarf Cap',
    },
    {
      route: ' ',
      img: 'category-5.jpg',
      title: 'Shoes',
    },
    {
      route: ' ',
      img: 'category-6.jpg',
      title: 'Pillowcase',
    },
    {
      route: ' ',
      img: 'category-7.jpg',
      title: 'Jumpsuit',
    },
    {
      route: ' ',
      img: 'category-8.jpg',
      title: 'Hats',
    },
  ];
}
