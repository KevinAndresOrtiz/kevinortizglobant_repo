import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizacionDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly status: number;
}
