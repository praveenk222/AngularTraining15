import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FacebookService, InitParams, LoginResponse, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService,private fb: FacebookService) {   const initParams: InitParams = {
    appId: '661566541514213',
    xfbml: true,
    version: 'v12.0',
  };
  fb.init(initParams);}

  ngOnInit(): void {
  
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  share(): void {
    console.log(window.location.href)
     var url = 'https://kaiduaykan.com/#/';
    // const options: UIParams = {
    //     method: 'share',
    //     hashtag: 'kaidukyan',
    //     picture: 'https://picsum.photos/200',
    //     link: 'https://picsum.photos/200',
    //     // href:'https://kaiduaykan.com/#/',
    //   href:  this.productPicUrl + this.product.productImage,
    //   caption: 'My photo caption',
    //   description:'testetetset',
    //   message:'testemessage',
    //   redirect_uri:'https://www.facebook.com/',

    // };
    const params: UIParams = {
      method: 'share_open_graph',
      action_type: 'og.shares',
      hashtag: "teste",
      quote: "testet",
      action_properties: JSON.stringify({
      object: {
      'og:url': 'https://kaiduaykan.com/',
      'og:title': 'OG Title',
      'og:description': 'OG Description',
      'og:image:url': 'https://kaidu.blob.core.windows.net/fmsimages/1145_0.jpeg',
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/jpeg'
      }
      })
    };
    this.fb.ui(params)
      .then((response: UIResponse) => {
        console.log('Photo uploaded', response);
      })
      .catch((error: any) => console.error(error));
   }
}