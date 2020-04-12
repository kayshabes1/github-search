import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'c754092d930e1856c117';
  private clientsecret = '0b1e6e2fbfbac9c3ee1abd1f8cc69216bc90d2d6'

  constructor(private http:HttpClient) { 
    this.username = 'kayshabes1'
  }

  getProfileInfo(){
    return this.http.get<any>("https://api.github.com/users/" + this.username + "?client_id=" + 
    this.clientid + "&client_secret=" + this.clientsecret)
  }

  getProfileRepos(){
    return this.http.get<any>("https://api.github.com/users/" + this.username + "/repos?client_id=" + 
    this.clientid + "&client_secret=" + this.clientsecret)
  }
  
  updateProfile(username:string){
    this.username = username;
  }
}
