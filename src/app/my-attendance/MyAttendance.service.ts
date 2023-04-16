import { Injectable } from '@angular/core';

export class Attend {
  ID!: number
    date!: Date ;
    From!: string;
  
    To!: string;
  
    Type!: String ;
  
    Status!: String ;
    LastUpdate!: String ;
}

const Att: Attend[] = [
  {ID: 14,
    date:new Date(2022,2,17),
    From: "12:20",
    To: "11:30",
    Type: "home" ,
    Status: "pending" ,
    LastUpdate: "ishrak yesterday" },

    {
      ID:3,
      date:new Date(2022,3,6),
      From: "12:20",
      To: "11:30",
      Type: "office" ,
      Status: "pending" ,
      LastUpdate: "ishrak Monday 12-01-2022 11.30" },
      {
        ID:5,
        date:new Date(2022,3,6),
        From: "12:20",
        To: "11:30",
        Type: "leave_authorization" ,
        Status: "approved" ,
        LastUpdate: "ishrak Monday 12-01-2022 11.30" },

      {ID:19,
        date:new Date(2022,1,15),
        From: "8:20",
        To: "14:30",
        Type: "office" ,
        Status: "rejected" ,
        LastUpdate: "nour Monday 16-01-2022 11.30" }
   

  ];

@Injectable()
export class attendance {
  getAttend(): Attend[] {
    return Att;
  }
}
