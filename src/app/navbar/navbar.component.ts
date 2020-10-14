import { Component, OnInit } from '@angular/core';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private usersInfoService: UsersInfoService) { }

  ngOnInit() {
  }
  onKey(str:string) {
    this.usersInfoService.sortMe(str);
  }
}
