import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  //Dto ตัวแทนของข้อมูล
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsNumber()
  readonly price: number;
}
