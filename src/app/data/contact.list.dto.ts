import {ContactDto} from './contact.dto';

export class ContactListDto {
  constructor(public contacts:ContactDto[]){}
}
