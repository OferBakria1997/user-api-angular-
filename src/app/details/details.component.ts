import { Component, OnInit , Input} from '@angular/core';
import { UsersInfoService } from '../users-info.service';
import { UserJson } from '../userjson';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() theUserJson:UserJson;

  constructor(private usersInfoService:UsersInfoService) { }

  ngOnInit(): void {
  }

  closeUserDetailedView()
  {
    this.usersInfoService.updateClosedDetailsView();
  }



}
