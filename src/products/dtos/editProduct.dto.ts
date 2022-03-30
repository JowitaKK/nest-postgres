import { IsNumber } from 'class-validator';
//yarn add class-transformer class-validator

export class EditProductDto {
    @IsNumber({}, { message: 'The price must be a number'})
    price: number;
}