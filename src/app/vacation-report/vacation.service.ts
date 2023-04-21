import { Injectable } from '@angular/core';

export class vacationRep {
    ID!: number;
    
    Image!: string;
    Fullname!: string;
    UserStatus!: String;
    LeaveStartTime!: string;
    LeaveEndTime!: string;
    LeaveType!:String;
    IsContable!:String;
    Status!:String;

}

const Attr: vacationRep [] = [
    {
        ID: 1,
        Image:'',
       Fullname: 'Firas Feki',
       UserStatus: 'inactive',
       LeaveStartTime: '08:00',
       LeaveEndTime: '17:00',
       LeaveType: 'vacation_annual_2020',
       IsContable:'',
       Status:'closed'
    },

    {
        ID: 2,
        Image:'',
        Fullname: 'Firas Feki',
        UserStatus: 'inactive',
        LeaveStartTime: '08:00',
        LeaveEndTime: '17:00',
        LeaveType: 'vacation_annual_2020',
        IsContable:'',
        Status:'closed'
     },
    {
        ID: 7,
        Image:'',
        Fullname: 'Imen Akrout',
        UserStatus: 'inactive',
        LeaveStartTime: '08:00',
        LeaveEndTime: '17:00',
        LeaveType: 'vacation_annual_2020',
        IsContable:'',
        Status:'closed'
     },

    {
        ID: 11,
        Image:'',
        Fullname: 'Sabrine Kouki',
        UserStatus: 'inactive',
        LeaveStartTime: '08:00',
        LeaveEndTime: '17:00',
        LeaveType: 'vacation_annual_2020',
        IsContable:'',
        Status:'closed'
     },


];

@Injectable()
export class VacationReport {
    getValiadtionAttend(): vacationRep [] {
        return Attr;
    }
}