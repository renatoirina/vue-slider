const thumbElem = document.querySelector(".my-thumbnail");

const { createApp } = Vue;

createApp({
  data() {
    return {
      interval: setInterval(()=> {
        if (this.isIntervalActive) {
          if (this.isNext) {
            this.showNext();
          } else {
            this.showPrev()
          }
        } else {
          this.isIntervalActive = false
        }
        
      }, 3000),
      isIntervalActive: true,
      activeIndex: 0,
      greetings: "test vue",
      isNext: false,
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  created(){
    this.interval
  },
  methods: {
    showNext: function(){
      this.activeIndex === this.images.length - 1 ? this.activeIndex = 0 : this.activeIndex++;
    },
    showPrev: function(){
      this.activeIndex > 0 ? this.activeIndex-- : this.activeIndex = this.images.length -1;
    }
  }
}).mount("#app");