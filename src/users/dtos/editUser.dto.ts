import { IsString } from 'class-validator';
//yarn add class-transformer class-validator

export class EditUsertDto {
    @IsString({ message: 'Your email should contains'})
    password: string;
}