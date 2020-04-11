import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  writeInStorage(key: string, value: string[]): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  readFromStorage(key: string): string[] {
    return JSON.parse(localStorage.getItem(key))
  }

  constructor() { }
}