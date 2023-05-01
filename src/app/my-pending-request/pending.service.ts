import { Injectable } from '@angular/core';

export class Pend{
  ID!: number
    date!: Date ;
    From!: string;
  
    To!: string;
  
    Type!: String ;
  
    Status!: String ;
    LastUpdate!: String ;
}

const pen: Pend[] = [
  {ID: 14,
    date:new Date(2022,2,17),
    From: "12:20",
    To: "11:30",
    Type: "home" ,
    Status: "pending" ,
    LastUpdate: "ishrak yesterday" },

    
      {
        ID:5,
        date:new Date(2022,3,6),
        From: "12:20",
        To: "11:30",
        Type: "leave_authorization" ,
        Status: "pending" ,
        LastUpdate: "ishrak Monday 12-01-2022 11.30" },


  ];

@Injectable()
export class Pending {
  getAttend(): Pend[] {
    return pen;
  }
}
