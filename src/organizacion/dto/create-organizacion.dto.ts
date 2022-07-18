import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrganizacionDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  status: number;
}
