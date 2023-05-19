import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

interface SoundItem {
  id: number;
  name: string;
  file: string;
}

@Component({
  selector: 'app-sound-grid',
  templateUrl: './sound-grid.component.html',
  styleUrls: ['./sound-grid.component.scss']
})



export class SoundGridComponent {
  constructor(private http: HttpClient) { }
  soundItems: SoundItem[] = [];

  playSound(file: string): void {
    const audio = new Audio(file);
    audio.play();
  }

  ngOnInit(): void {
    this.http.get<SoundItem[]>('./assets/sound-items.json').subscribe(data => {
      this.soundItems = data;
    });
  }
}
