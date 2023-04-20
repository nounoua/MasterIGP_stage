import { FullCalendarComponent, CalendarOptions, FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Directive, Input } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as FullCalendar from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

import {
  Component, ElementRef, OnInit
} from '@angular/core';
import {

  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { ModalcComponent } from './modalc/modalc.component';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
interface DateInfo {
  date: string;
}

@Component({
  selector: 'app-dashboard',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})

export class DashboardComponent implements OnInit {
  @ViewChild(ModalcComponent) modal!: ModalcComponent;//bch nadina coomponnet 
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  events: EventInput[] = [];
  calendarOptions!: CalendarOptions;
  options3: any
  checkoutsatuts=true;
  currentDate: Date = new Date();//pour fixer card date
  currentTime: Date = new Date();//pour fixer card time
  radio_click: any = "attendance";//bution radio 

  

  constructor(private modalService: BsModalService , private toastr: ToastrService

    ) {

    setInterval(() => {
      this.currentTime = new Date();
    }, 1000); // Update the time every second
  }

  selectedDate!: DateInfo;
  openModalDashboard(event: any) {
    this.modal.openModal(
      event.start

    );
  }

  ngOnInit(): void {
    const events: EventInput[] = [
      {
        title: 'meet',
        start: '2023-04-10T10:00:00',
        end: '2023-04-10T12:00:00',
        backgroundColor:"red",
        // borderColor:"blue",
          textColor:"black",
          url:"https://meet.google.com/zfp-jarz-jqy",
        

      },
      
    ];
    this.calendarOptions = {
    selectable: true,
    select: (event: any) => {
      this.openModalDashboard(event);
    },
    initialView: 'dayGridMonth',
      events: events
  };

    
  }

  

  
  addEvent(title: string, start: Date, end: Date) {
    const event: EventInput = {
      title: title,
      start: start,
      end: end
    };
    this.events = [...this.events, event];
    this.calendarComponent.getApi().addEvent(event);
  }

  timeLeft: number = 60;
  interval: any;

  startTimer() { //concu pour la card attendance and leave
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  //pour cacher button chekout
  checkin(){
    
      this.checkoutsatuts=false;
     

  }
  

  


  change_radio(ev: any) { //changer radio button 
    this.radio_click = ev;
    console.log(ev);
  }
  

}




