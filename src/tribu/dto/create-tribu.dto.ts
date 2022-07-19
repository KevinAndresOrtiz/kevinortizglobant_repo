import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateTribuDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly status: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly organizacionId: number;
}
