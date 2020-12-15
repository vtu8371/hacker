import { Component, OnInit } from '@angular/core';
import { LeaderBoardService } from '../leader-board.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
  data:any=[];
  team:any;
  p:number=1;
  constructor(private leader:LeaderBoardService) { }

  ngOnInit(): void {
    this.leader.getData().subscribe((response) =>{
      this.data=response;
    })
  }
  Search(){
    if(this.team==""){
      this.data;
    }
    }
      
  }


