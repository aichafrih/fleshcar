import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor() { }
 
  
    ngOnInit(): void {
      this.initAnimations();
    }
  
    private initAnimations(): void {
      // Add 'overflow' class to html and body
      document.documentElement.classList.add('overflow');
      document.body.classList.add('overflow');
  
      // Remove 'overflow' class after 2500 milliseconds
      setTimeout(() => {
        document.documentElement.classList.remove('overflow');
        document.body.classList.remove('overflow');
      }, 1500);
  
      gsap.registerPlugin(ScrollTrigger);
  
  var $animeCard = document.querySelector(".anime-card-inner");
  //loader img
  gsap.set($animeCard, {
    rotationY: 90,
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    width: "40vh",
    height: "40vh",
    scale: 2
  });

  //img set

  //Main card-wrapper
  gsap.set(".anime-card", { x: "50%", y: "50%" });

  // Main-text animation
  //Main text load
  gsap.set(".main-txt", { opacity: 0, yPercent: 50 });
  const mainTxt = gsap.timeline();
  mainTxt.to(".main-txt", { opacity: 1, yPercent: -50, duration: 2 });

  //Main text opacity down
  const mainTxt2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-txt",
      start: "center center",
      end: "+=50",
      markers: false,
      scrub: 1
    }
  });
  mainTxt2.to(".main-txt", { opacity: 0, ease: "linear" });

  //loader to scale
  const tl = gsap.timeline();
  tl.to($animeCard, {
    rotationY: 0,
    ease: Expo.easeIn,
    duration: 2.5,
    scale: 1,
    width: "100%",
    height: "100vh"
  });

  //Banner one image scale down
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "center center",
      end: "+=600",
      markers: false,
      scrub: 1
    }
  });
  if (window.innerWidth >= 1200 && window.innerWidth <= 1499) {
    t2.to($animeCard, {
      height: "60vh",
      width: "472.5px",
      left: "calc(243.75px + (50% - 585px) + 682.5px)"
    });
  } else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
    t2.to($animeCard, {
      height: "60vh",
      width: "465px",
      left: "calc(240px + (50% - 480px) + 480px)"
    });
  } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    t2.to($animeCard, {
      height: "60vh",
      width: "345px",
      left: "calc(180px + (50% - 360px) + 360px)"
    });
  } else if (window.innerWidth <= 767) {
    t2.to($animeCard, {
      height: "calc(100vh - 340px)",
      width: "95%",
      left: "50%",
      top: "calc(100% - 40px)",
      yPercent: -100
    });
  } else {
    t2.to($animeCard, {
      height: "60vh",
      width: "535px",
      left: "calc(275px + (50% - 660px) + 770px)"
    });
  }

  gsap.to(".main-wallpaper", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".banner",
      start: "center+=" + 100 + " center",
      end: "bottom center",
      markers: false,
      scrub: 1
    }
  });

  //Banner text-animation
  gsap.set(".banner-content", { opacity: 0, yPercent: 50 });
  gsap.to(".banner-content", {
    ease: "linear",
    yPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".banner",
      start: "center+=" + 300 + " center",
      end: "+=200",
      markers: false,
      scrub: 1
    }
  });

  //Banner animation
  gsap.to(".banner", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1
    }
  });
 

  // Main wrapper card
  gsap.to(".anime-card", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".anime-card",
      start: "top top",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      pin: true,
      pinSpacing: false,
      scrub: 1
    }
  });


  // image source changed
  gsap.to(".anime-card-front img", {
    attr: {
      src: "../assets/boite.jpg"
    },
    scrollTrigger: {
      trigger: ".banner-three",
      start: "top bottom",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      scrub: 1
    }
  });

  gsap.to(".anime-card-back img", {
    attr: { src: "../assets/boite.jpg" },
    scrollTrigger: {
      trigger: ".banner-four",
      start: "top bottom",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      scrub: 1
    }
  });
};





}


