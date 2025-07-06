import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  NO_ERRORS_SCHEMA,
  OnInit,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';
// import { SwiperContainer } from 'swiper/element';
// import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
// export class MainComponent implements AfterViewInit {
export class MainComponent {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  @ViewChild('swiperRef', { static: true })
  swiperRef!: ElementRef<SwiperContainer>;

  swiperInstance!: Swiper; // Declare a variable to hold the Swiper instance

  ngAfterViewInit() {
    // Initialize Swiper after the view has been initialized
    this.swiperInstance = this.swiperRef.nativeElement.swiper;

    if (this.swiperRef.nativeElement) {
      Object.assign(
        this.swiperRef.nativeElement,this.swiperConfig
        // setInterval(() => this.swiperConfig, 1000)
      );
      // this.swiperRef.nativeElement, this.swiperConfig,setTimeout()=>{});
    }
  }

  // Optional: Methods to control navigation programmatically
  goNext() {
    this.swiperInstance.slideNext();
  }

  goPrev() {
    this.swiperInstance.slidePrev();
  }

  swiperConfig = {
    slidesPerView: 6, // Default slides per view
    spaceBetween: 20, // Default space between slides
    breakpoints: {
      // When window width is >= 640px
      240: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // When window width is >= 1024px
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    on: {
      init() {},
    },
  };

  ngOnChanges() {
    afterRender(() => {
      // const swiperE1 = document.querySelector('swiper-container');

      if (this.swiperRef.nativeElement) {
        Object.assign(this.swiperRef.nativeElement, this.swiperConfig);
      }
    });
  }

  constructor() {
    // afterRender(() => {
    //   const swiperE1 = document.querySelector('swiper-container');
    //   if (swiperE1) {
    //     Object.assign(swiperE1, this.swiperConfig);
    //   }
    // });
    // this.ngOnChanges();
  }

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
