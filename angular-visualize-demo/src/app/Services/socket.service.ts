import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket:any;
  constructor() {
    this.socket=io('http://localhost:3000');

   }

   listen(EventName:string){
    return new Observable((subscriber)=>{
      this.socket.on(EventName,(data)=>{
        subscriber.next(data);
      });
    })
   }

}