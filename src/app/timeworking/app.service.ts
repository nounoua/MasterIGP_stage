import { Injectable } from '@angular/core';

export class Employee {

  Fullname: string | undefined;
  Team: string | undefined;
  BirthYear!: Date;
  Vacationbalance: string | undefined;
  TotaltakenVacation: string | undefined;
  TotalWorkedDays: string | undefined;
  TotalLeaveHours: string | undefined;
  OffBoardingDate: string | undefined;
  TotalAbsenceDays: string | undefined;
  TotalVacation: string | undefined;



}

const employees: Employee[] = [
  {
    Fullname: 'Bk', Team: 'develeoppement', BirthYear:new Date(2022,4,16), Vacationbalance: 'Seattle', TotaltakenVacation: 'Sales Representative' , TotalWorkedDays:'55',TotalLeaveHours:'10', OffBoardingDate:'11',TotalAbsenceDays:'25',TotalVacation:'50',
  },
  {
    Fullname: 'Ichrak dammak', Team: 'develp', BirthYear:new Date(2022,4,26), Vacationbalance: 'coucou', TotaltakenVacation: ' Representative' , TotalWorkedDays:'55',TotalLeaveHours:'10', OffBoardingDate:'11',TotalAbsenceDays:'25',TotalVacation:'50',
  },
  
  {
    Fullname: 'Boukettaya Nour', Team: 'test', BirthYear:new Date(2022,4,10), Vacationbalance: 'tille', TotaltakenVacation: 'Sales Representative' , TotalWorkedDays:'55',TotalLeaveHours:'10', OffBoardingDate:'11',TotalAbsenceDays:'25',TotalVacation:'50',
  },
  {
    Fullname: 'Boukettaya Nour', Team: 'test', BirthYear:new Date(2022,2,21), Vacationbalance: 'Seattle', TotaltakenVacation: 'Sales Representative' , TotalWorkedDays:'55',TotalLeaveHours:'10', OffBoardingDate:'11',TotalAbsenceDays:'25',TotalVacation:'50',
  },
  {
    Fullname: 'Boukettaya Nour', Team: 'test', BirthYear:new Date(2023,2,16), Vacationbalance: 'Seattle', TotaltakenVacation: 'Sales Representative' , TotalWorkedDays:'55',TotalLeaveHours:'10', OffBoardingDate:'11',TotalAbsenceDays:'25',TotalVacation:'50',
  },
 
 
];


@Injectable()
export class Service {
  getEmployees(): Employee[] {
    return employees;}
   
  
   
  }