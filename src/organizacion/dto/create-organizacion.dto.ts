import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizacionDto {
  @ApiProperty({
    description: 'Organization name',
  })
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({
    description: 'Organization Status',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly status: number;
}
