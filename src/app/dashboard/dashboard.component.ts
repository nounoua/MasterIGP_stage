import {FullCalendarComponent,CalendarOptions, FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Directive, Input } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, ElementRef, OnInit } from '@angular/core';
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

export class DashboardComponent implements OnInit  {
  
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  currentDate: Date = new Date();//pour fixer card date
  currentTime: Date = new Date();//pour fixer card time

  radio_click:any = "attendance";//bution radio 
  events: EventInput[] = [];//pour ajouter des event 


 comp=`<div class="modal-content">
 <div class="modal-header">
   <h5 class="modal-title" id="exampleModalLongTitle">New Request</h5>
   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
   </button>
 </div>
 <div class="mt-3 " style="margin-left: 30%;">
   <div class="form-check form-check-inline">
      <input class="form-check-input" (click)="change_radio('attendance')" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
      <label class="form-check-label" for="inlineRadio1">Attendance</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" (click)="change_radio('leave')" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" >
      <label class="form-check-label"  for="inlineRadio2">Leave</label>
    </div>
 </div>
 <div class="modal-body">
   <!-- start attendance -->
   <div class="modal-dialog modal-dialog-centered" role="document" *ngIf="radio_click == 'attendance'">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Attendance</h5>
          <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button> -->
        </div>
        <div class="modal-body">
          <form>
           Working Date: <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"><br>
            Check In Time: <input type="time" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"><br>
            Check Out Time: <input type="time" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"><br>
            <span>Type:</span>
            <div class="input-group mb-3">
             <select class="custom-select" id="inputGroupSelect01">
               <option selected>Select...</option>
               <option value="1">Office</option>
               <option value="2">Home</option>
             </select>
           </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Send Attendance Requests </button>
        </div>
      </div>
    </div>
    <!-- //start_leave -->
    <div class="modal-dialog modal-dialog-centered" role="document" *ngIf="radio_click == 'leave'">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Leave</h5>
        </div>
        <div class="modal-body">
          <form>
             <span>Leave type</span><br>
             <div class="input-group mb-3"> 
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>select...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
           Start date: <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"><br>
            End date: <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"><br>
            <span>Reason:</span>
            <div class="input-group">
             <textarea class="form-control" aria-label="With textarea" placeholder="Enter Your Reason"></textarea>
           </div>
           </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Send Leave Request</button>
        </div>
      </div>
    </div>
 </div>
</div>`

modalRef!: BsModalRef;
 
  calendarOptions = {
    selectable: true,
    select: (event:any) => {
      this.openModal(event);
    }
  };
 
  constructor(private modalService: BsModalService) {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000); // Update the time every second
  }
 
  selectedDate!: DateInfo;
  openModal(template:any) {
      this.selectedDate = { date: '2022-04-04' };
      this.modalService.show(template);
    }
    closeModal() { //^pour fermer modal
      this.modalService.hide(1);
    }
  



  ngOnInit(): void {

    
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
  interval:any;

startTimer() { //concu pour la card attendance and leave
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  change_radio(ev:any){ //changer radio button 
    
    this.radio_click = ev;
    
    console.log(ev);
  }




//  username :any
//   firstname:any
//     lastname:any
//   picture:any
//   reclam:any
//   number:any
//   Tasksevents:any
//   countEl:any
//   breaks:any
//   tsk:any
//   smile1 = 0
//   smile2 = 0
//   smile3 = 0
//   smile4 = 0
//   smile5 = 0
//   smile6 = 0
//   datePipe:any
//   birthdaylast:any
//   reclamtionById:any
//   BookingsById:any
//   slides = [
//     {'image': 'assets/images/hr1.png'},
//     {'image': 'assets/images/h2.png'},
//     {'image': 'assets/images/h4.jpg'},
//     {'image': 'assets/images/hr5.jpg'},
//     {'image': 'assets/images/hr6.jpg'}
//   ];
//   data:any
//   userId:any
//   @ViewChild('date') date!: ElementRef;
//   constructor(
    
//     ){}
//   events : any[] = [];
//   events2 : any[] = [];
//   resEvents:any
//   options : any;
//   options2:any
  options3:any
//   options4:any
//   extratSttingsGetter:any
//  async  ngOnInit(){
   

   
 
//       this.userId = this.data.id
//           this.Tasksevents="cc"
//           let len =this.Tasksevents.length
//           for(var i=0;i<=len-1;i++){
//           this.options = {
//               ...this.options,
//               ...{
//                   events: "ccc"

//               }
//           };
//           this.options.events.push(this.Tasksevents[i])
//         }

       
      

//     this.options = {
//       events: [],
//             headerToolbar: {
//                 left: 'prev,next today',
//                 center: 'title',
//                 right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
//             },
//             initialView: 'dayGridMonth',
//             editable: true,
//             selectable: true,
//             selectMirror: true,
//             dayMaxEvents: true,
//             // eventColor: '#f00 ',
//             eventTextColor:'red',
//             eventBorderColor:'orange',
//             displayEventEnd:'true',
//             timeZoneParam:'timeZone',
//             lazyFetching:'true',
//             themeSystem:'united',
//             locale:'en',
//             dateClick: function(info:any) {
//               alert('Clicked on: ' + info.dateStr);
//               alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//               alert('Current view: ' + info.view.type);
//               // change the day's background color just for fun
//               info.dayEl.style.backgroundColor = 'green';
//             },
//             fixedMirrorParent: document.body

//         };
//             this.resEvents="ghbh"
          
           
//             this.options3 = {
//                 ...this.options3,
//                 ...{
//                     events: "cvbn"

//                 }
//             };
//             this.options3.events.push(this.resEvents[i])
           
           


        


//             this.options3 = {
//       events: [],
//             headerToolbar: {
//                 left: 'prev,next today',
//                 center: 'title',
//                 right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
//             },
//             initialView: 'dayGridMonth',
//             editable: true,
//             selectable: true,
//             selectMirror: true,
//             dayMaxEvents: true,
//             // eventColor: '#f00 ',
//             eventTextColor:'red',
//             eventBorderColor:'orange',
//             displayEventEnd:'true',
//             timeZoneParam:'timeZone',
//             lazyFetching:'true',
//             themeSystem:'united',
//             locale:'en',
//             dateClick: function(info:any) {
//               alert('Clicked on: ' + info.dateStr);
//               alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//               alert('Current view: ' + info.view.type);
//               // change the day's background color just for fun
//               info.dayEl.style.backgroundColor = 'green';
//             },
//             fixedMirrorParent: document.body

//         };
// // breaks time for calender


//       this.resEvents=" nh"
      
     
//       this.options2 = {
//           ...this.options2,
//           ...{
//               events: "fggh"

//           }
//       };
//       this.options.events.push(this.resEvents[i])
     
      



//       this.options2 = {
// events: [],
//       headerToolbar: {
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
//       },
//       initialView: 'dayGridMonth',
//       editable: true,
//       selectable: true,
//       selectMirror: true,
//       dayMaxEvents: true,
//       // eventColor: '#f00 ',
//       eventTextColor:'red',
//       eventBorderColor:'orange',
//       displayEventEnd:'true',
//       timeZoneParam:'timeZone',
//       lazyFetching:'true',
//       themeSystem:'united',
//       locale:'en',
//       dateClick: function(info:any) {
//         alert('Clicked on: ' + info.dateStr);
//         alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//         alert('Current view: ' + info.view.type);
//         // change the day's background color just for fun
//         info.dayEl.style.backgroundColor = 'green';
//       },
//       fixedMirrorParent: document.body

//   };


//     this.resEvents="bnn"
    
//     this.options4 = {
//         ...this.options4,
//         ...{
//             events: "dfbn"
//         }
//     };
//     this.options.events.push(this.resEvents[i])
   

//     this.options4 = {
//      events: [],
//     headerToolbar: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
//     },
//     initialView: 'dayGridMonth',
//     editable: true,
//     selectable: true,
//     selectMirror: true,
//     dayMaxEvents: true,
//     // eventColor: '#f00 ',
//     eventTextColor:'red',
//     eventBorderColor:'orange',
//     displayEventEnd:'true',
//     timeZoneParam:'timeZone',
//     lazyFetching:'true',
//     themeSystem:'united',
//     locale:'en',
//     dateClick: function(info:any) {
//       alert('Clicked on: ' + info.dateStr);
//       alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//       alert('Current view: ' + info.view.type);
//       // change the day's background color just for fun
//       info.dayEl.style.backgroundColor = 'green';
//     },
//     fixedMirrorParent: document.body

// };








//   }
// 	ngAfterViewInit() { }
  
//    changebBackground() {
//     var bg = document.getElementById('bg')!;
//     bg.style.backgroundImage = "url('../../../../assets/images/background/bg1.jpg')"
// }
// changebBackground2() {
//     var bg = document.getElementById('bg')!;
//     console.log(bg)
//     bg.style.backgroundImage = "url('../../../../assets/images/background/bg2.jpg')"
// }
// changebBackground3() {
//     var bg = document.getElementById('bg')!;
//     console.log(bg)
//     bg.style.backgroundImage = "url('../../../../assets/images/background/bg3.jpg')"
// }
// changebBackground4() {
//     var bg = document.getElementById('bg')!;
//     console.log(bg)
//     bg.style.backgroundImage = "url('../../../../assets/images/background/bg4.jpg')"
// }
// changebBackground5() {
//     var bg = document.getElementById('bg')!;
//     console.log(bg)
//     bg.style.backgroundImage = "url('../../../../assets/images/background/bg5.jpg')"
// }


//  countvisits() {
//   this.countEl = document.getElementById("count");
//  fetch('https://api.countapi.xyz/update/laptop/pad/?amount=1')
//    .then((res) => res.json())
//    .then((res) => {
//      this.countEl.innerHTML = res.value;
//      alert(this.countEl)
//    });
// }
















}
    
  


