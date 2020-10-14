import { Component, Input, OnInit } from '@angular/core';
import { UserJson } from '../userjson';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() theUserJson:UserJson ;
  @Input() theIndex:number ;


  constructor(private usersInfoService:UsersInfoService) { }

  ngOnInit(): void {
  }

  wasClicked()
  {
    this.usersInfoService.updateCurrentClickedCard(this.theIndex);
    console.log(this.theIndex + " was clicked");
  }

}
