import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrganizacionDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsNumber()
  readonly status: number;
}
