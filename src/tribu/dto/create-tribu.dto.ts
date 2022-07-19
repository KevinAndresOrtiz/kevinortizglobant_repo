import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateTribuDto {
  @ApiProperty({
    description: 'Tribu name',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty({
    description: 'Tribu Status',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly status: number;
  @ApiProperty({
    description: 'Foreign Key of the Organization Table ',
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly organizacionId: number;
}
