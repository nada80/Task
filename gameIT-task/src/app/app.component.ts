import { Component } from '@angular/core';
import { game } from './models/game';
import { level } from './models/level';
import { skill } from './models/skill';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameIT-task';

  gameList: game[] = [];

  gameTitle: string = '';
  gameDesc: string = '';
  gameSkill = new skill('', '');
  gameLevels: level[] = [];
  gameId: number = 1;
  Alllevel: string = '';
  ActivityTotal: number = 0;
  WhiteCrystalsTotal: number = 0;

  constructor(private gameService: GameService) { }


  ngOnInit() {
    this.getData()
  }

  getData(): void {
    this.gameService.getAPIData().subscribe({
      next: (data) => {
        console.log(data)
        data.forEach((item: game) => {
          this.gameList.push(item);
          console.log(item)

        });
        console.log(this.gameList)

        // this.gameList.push(data);
      },
      error: (e) => {
        console.log(e)
      }

    });
  }
  trackByFn(index: any, item: any) {
    return index;
  }

  getAllDetails(id: number, title: string, desc: string, skill: skill, level: level[]): void {
    this.Alllevel = '';
    this.ActivityTotal = 0;
    this.WhiteCrystalsTotal = 0;
    this.gameTitle = title;
    this.gameDesc = desc;
    this.gameSkill = skill;
    this.gameLevels = level;
    this.gameId = id;
    this.gameLevels.forEach(element => {
      console.log(element)
      this.Alllevel += element.level.concat(',');

      this.ActivityTotal += element.activityTotal;
      this.WhiteCrystalsTotal += element.whiteCrystalTotal;

    });


  }
}
