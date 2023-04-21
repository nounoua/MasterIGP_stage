import { Injectable } from '@angular/core';

export class attendRep {
    ID!: number;
    Fullname!: string;
    TotalExtraHours!: number;
    WorkDate!: Date;
    CheckIn!: string;
    CheckOut!: string;
    Status!: String;
    LeaveHours!:String;

}

const Attr: attendRep [] = [
    {
        ID: 1,
       Fullname: 'Ahmed',
        WorkDate: new Date(2022, 3, 6),
        CheckIn: '08:00',
        CheckOut: '11:50',
        Status: 'closed',
        TotalExtraHours:0,
        LeaveHours:'0h0m'
    },

    {
        ID: 2,
       Fullname: 'Anis',
        WorkDate: new Date(2022, 2, 4),
        CheckIn: '08:00',
        CheckOut: '14:50',
        Status: 'pending',
        TotalExtraHours:5,
        LeaveHours:'0h0m'
    },
    {
        ID:4 ,
       Fullname: 'Nour',
        WorkDate: new Date(2012, 4, 1),
        CheckIn: '08:00',
        CheckOut: '17:50',
        Status: 'closed',
        TotalExtraHours:4,
        LeaveHours:'0h0m'
    },

    {
        ID: 21,
       Fullname: 'Amin',
        WorkDate: new Date(2022, 3, 6),
        CheckIn: '08:00',
        CheckOut: '14:50',
        Status: 'pending',
        TotalExtraHours:0,
        LeaveHours:'0h0m'
    },


];

@Injectable()
export class AttendanceReport {
    getValiadtionAttend(): attendRep [] {
        return Attr;
    }
}