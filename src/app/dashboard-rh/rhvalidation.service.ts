import { Injectable } from '@angular/core';

export class validationRh {
    ID!: number;
    User!: string;
    Team!: string;
    Date!: Date;
    CheckInTime!: string;
    CheckOutTime!: string;
    Type!: String;

}

const vrh: validationRh[] = [
    {
        ID: 1,
        User: 'Nour',
        Team: 'test',
        Date: new Date(2022, 3, 6),
        CheckInTime: '08:20',
        CheckOutTime: '11:50',
        Type: 'office'
    },

    {
        ID: 8,
        User: 'ishrak',
        Team: 'deve',
        Date: new Date(2022, 3, 6),
        CheckInTime: '08:20',
        CheckOutTime: '18:50',
        Type: 'home'
    },
    {
        ID: 7,
        User: 'anis',
        Team: 'test',
        Date: new Date(2022, 3, 6),
        CheckInTime: '09:20',
        CheckOutTime: '15:50',
        Type: 'home'
    },

    {
        ID: 11,
        User: 'Noursalah',
        Team: 'testmobile',
        Date: new Date(2022, 3, 6),
        CheckInTime: '09:20',
        CheckOutTime: '17:50',
        Type: 'home'
    },


];

@Injectable()
export class ValidationRequestRh {
    getValiadtionAttend(): validationRh[] {
        return vrh;
    }
}
