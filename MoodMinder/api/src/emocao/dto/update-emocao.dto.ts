import { PartialType } from '@nestjs/mapped-types';
import { CreateEmocaoDto } from './create-emocao.dto';

export class UpdateEmocaoDto extends PartialType(CreateEmocaoDto) {}
