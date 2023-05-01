import { Injectable } from '@angular/core';

export class dash {
    ID!: number;
    user!: string;
    team!: string;
    departement!: string;
    status!: String;

}

const Attr: dash [] = [
    {
        ID: 1,
      user: 'Ahmed',
        team:'test',
        departement:'mobile',
        status: 'pending',
        
    },

    {
        ID: 2,
        user: 'Ahmed',
          team:'test',
          departement:'mobile',
          status: 'pending',
    },
    {
        ID:4 ,
        user: 'Abdelhhh',
          team:'test',
          departement:'mobile',
          status: 'pending',       
    },

    {
        ID: 21,
        user: 'nour',
        team:'test',
        departement:'mobile',
        status: 'pending'
    },


];

@Injectable()
export class DashboardCalendar {
    getDataCalendar(): dash [] {
        return Attr;
    }
}