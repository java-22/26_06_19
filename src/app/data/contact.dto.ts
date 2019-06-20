export class ContactDto {

  constructor(public name:string,
              public lastName:string,
              public address:string,
              public email:string,
              public phone:string,
              public description:string,
              public id?:number){}
}
