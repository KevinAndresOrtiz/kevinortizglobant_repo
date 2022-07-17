import { PartialType } from '@nestjs/mapped-types';
import { CreateTribuDto } from './create-tribu.dto';

export class UpdateTribuDto extends PartialType(CreateTribuDto) {}
