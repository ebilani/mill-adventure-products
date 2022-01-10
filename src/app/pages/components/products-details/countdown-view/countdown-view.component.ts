import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
@Component({
  selector: 'app-countdown-view',
  templateUrl: './countdown-view.component.html',
  styleUrls: ['./countdown-view.component.scss']
})
export class CountdownViewComponent implements OnInit {
  midNightCountDown: any;
  timeInterval: Subscription = new Subscription();
  constructor() { }

  ngOnInit(): void {
    this.startCountdowning();
  }
  startCountdowning(){
    const finishedCountdown: BehaviorSubject<any> = new BehaviorSubject(false);
    this.timeInterval = timer(100, 1000)
    .pipe(
      map(() => this.calcDateDifferenceNowMidnight()),
      tap(i=>{
        this.midNightCountDown = i
        /* stop countdown when all values (hour/min/seconds) are 0 */
        if(i.hoursToMidNight === 0){
          if(i.minutesToMidNight === 0){
            if( i.secondsToMidNight === 0){
              finishedCountdown.next(true)
            }
          }
        }
      }),
    takeWhile(() =>finishedCountdown.getValue() === false)
    ).subscribe();
  }
  calcDateDifferenceNowMidnight(): any {
    /* get midnight of the next day */
    const midNightTomorrowDate = new Date().setHours(24,0,0,0);
  
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;
  
    const timeDifference = midNightTomorrowDate - Date.now();
    const hoursToMidNight = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
        hoursInADay
    );
  
    const minutesToMidNight = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
        secondsInAMinute
    );
  
    const secondsToMidNight =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;
  
    return { secondsToMidNight, minutesToMidNight, hoursToMidNight };
  }
}
