import { Component, OnInit ,OnDestroy} from '@angular/core';
import { UsersInfoService } from '../users-info.service';
import { UserJson } from '../userjson';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit , OnDestroy{
  peopleArr:UserJson[]=[];
  changeArr:UserJson[]=[];
  didClickOnCard:boolean = false;
  currClickedUserIndex:number = 0;
  currClickedUser = {
    picture:{large:"https://randomuser.me/api/portraits/men/42.jpg"},
    name:{first:'john', last:'doe'},
    email:'j@gmail.com'
  };
  subscriptionToDidClickOnSomeCard;
  subscriptionToWhichUserWasClicked;
  sortMe;
  
  constructor(private usersInfoService: UsersInfoService) {
  }
  

  ngOnInit(): void {
    this.usersInfoService.getUsersFromAPIObservable()
      .subscribe((x) => {
        this.peopleArr = x.results;
        this.changeArr=this.peopleArr
        console.log(x.results);
      });
//i have added
      this.sortMe=this.usersInfoService.sortAgain.subscribe((x)=>{
        this.peopleArr=[];
        this.changeArr.forEach(curr=>{
          if(curr.name.first.startsWith(x)){
            this.peopleArr.push(curr);
          }
        })
      })

    this.subscriptionToDidClickOnSomeCard = this.usersInfoService.aCardWasClickedSubject
    .subscribe((b)=>{this.didClickOnCard = b});

    this.subscriptionToWhichUserWasClicked = this.usersInfoService.indexOfLastClickedCardSubject
    .subscribe((x)=>{
      this.currClickedUserIndex = x;
      this.currClickedUser = this.peopleArr[x];
    })
  }

  ngOnDestroy(): void {
    this.subscriptionToDidClickOnSomeCard.unsubscribe();
    this.subscriptionToWhichUserWasClicked.unsubscribe();
    this.sortMe.unsubscribe();
  }

}




  
