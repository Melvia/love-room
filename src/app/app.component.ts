import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

let preMouseX: number | null = null;
let preMouseY: number | null = null;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'love-room';


  // createHearts(x: number, y: number): void {
  // createHearts(): void {
  //   let currentEvent =  (event as MouseEvent);
  //   let i = document.createElement('i');
  //   document.body.appendChild(i);
  //   i.style.top = currentEvent.pageY + 'px';
  //   i.style.left = currentEvent.pageX + 'px';
  //   setTimeout(()=> {
  //     document.body.removeChild(i)
  //   }, 2000)
  // }

  heart() {

   const createHearts = (x: number, y: number ) => {
     const getRandomValue = () => {
       return `${Math.random() * 400 - 200}px`
     }
      let currentEvent =  (event as MouseEvent);
      let i = document.createElement('i');
      document.body.appendChild(i);
      i.style.top = (currentEvent.pageY) + 'px';
      i.style.left = (currentEvent.pageX) + 'px';
      i.style.scale = `${Math.random() * 2 + 1}`;
      i.style.setProperty('--x', getRandomValue());
     i.style.setProperty('--y', getRandomValue());
      setTimeout(()=> {
      document.body.removeChild(i)
    }, 2000);
  }

    let currentEvent =  (event as MouseEvent);
    if (preMouseX !==null && preMouseY!==null) {

      let deltaX = currentEvent.pageX - preMouseX;
      let deltaY = currentEvent.pageY - preMouseY;
      let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
       if (distance >= 50) {
        createHearts(currentEvent.pageX, currentEvent.pageY);
        preMouseX = currentEvent.pageX;
        preMouseY = currentEvent.pageY;
       }
    }
    else {
        createHearts(currentEvent.pageX, currentEvent.pageY);
        preMouseX = currentEvent.pageX;
        preMouseY = currentEvent.pageY;
      }
    }





  ngOnInit(): void {
    this.heart.bind(this);
    document.addEventListener('mousemove', this.heart);

  }

}
