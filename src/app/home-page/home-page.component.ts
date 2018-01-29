import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  photos:Array<any> = [
      {src:"../../assets/images/1.JPG",caption:"A little party never killed nobody."},
      {src:"../../assets/images/2.JPG",caption:"Caption five sj,bdhvjsejff bsefsevfhsegfsevkhf vseiufhjbfu yegfuhwbef wefuywefkweufguwefuwegfuwefuwg"},
      {src:"../../assets/images/3.jpg",caption:"Parties don't start till I walk in. :P"},
      {src:"../../assets/images/4.jpg",caption:"I am not a dancer... I just Bhangra alot...:D"},
      {src:"../../assets/images/IMG_20170113_085113.jpg",caption:"Caption One"},
      {src:"../../assets/images/IMG_20170113_144539.jpg",caption:"Caption two"},
      {src:"../../assets/images/IMG_20170113_080428.jpg",caption:"Caption Tree"},
      {src:"../../assets/images/IMG_20170113_093522.jpg",caption:"Caption four"},
      {src:"../../assets/images/IMG_20170113_092546.jpg",caption:"Caption five"},
      {src:"../../assets/images/IMG_20170113_080428.jpg",caption:"Caption Tree"}
    ];

    slideIndex : number = 1;
    totalPhotosCount : number;

  constructor() { }

  /* While initializing the component.
   * 'ngOnInit' runs before 'ngAfterViewInit'
   */
  ngOnInit(){
    /*this.photos = [
      {src:"../../assets/images/1.JPG",caption:"A little party never killed nobody."},
      {src:"../../assets/images/2.JPG",caption:"Caption five sj,bdhvjsejff bsefsevfhsegfsevkhf vseiufhjbfu yegfuhwbef wefuywefkweufguwefuwegfuwefuwg"},
      {src:"../../assets/images/3.jpg",caption:"Parties don't start till I walk in. :P"},
      {src:"../../assets/images/4.jpg",caption:"I am not a dancer... I just Bhangra alot...:D"},
      {src:"../../assets/images/IMG_20170113_085113.jpg",caption:"Caption One"},
      {src:"../../assets/images/IMG_20170113_144539.jpg",caption:"Caption two"},
      {src:"../../assets/images/IMG_20170113_080428.jpg",caption:"Caption Tree"},
      {src:"../../assets/images/IMG_20170113_093522.jpg",caption:"Caption four"},
      {src:"../../assets/images/IMG_20170113_092546.jpg",caption:"Caption five"},
      {src:"../../assets/images/IMG_20170113_080428.jpg",caption:"Caption Tree"}
    ];*/
    //this.slideIndex = 1;
    this.totalPhotosCount = this.photos.length;
  }

  /* After the view has been rendered. */
  ngAfterViewInit(){
    this.showSlides(1);
    this.autoSlide();
  }

  /* Custom functions. */
  showSlides(n:number) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > this.photos.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = this.photos.length}
    for (i = 0; i < this.photos.length; i++) {
      (<HTMLElement>slides[i]).style.display = "none";
    }
    (<HTMLElement>slides[this.slideIndex-1]).style.display = "block";
  }

  plusSlides(n:number){
    console.log(n);
    this.slideIndex += n;
    this.showSlides(this.slideIndex);
  }
  autoSlide(){
    setInterval(() =>{
      //console.log("called");
      this.plusSlides(1);
    },5000);
  }
}
