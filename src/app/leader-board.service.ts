import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeaderBoardService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://s3-ap-southeast-1.amazonaws.com/he-public-data/Leaderboard_Initial_Dataset65148c7.json";
    return this.http.get(url);
  }
}
