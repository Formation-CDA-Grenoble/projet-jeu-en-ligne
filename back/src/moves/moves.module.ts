import { Module } from '@nestjs/common';
import { MovesService } from './moves.service';
import { MovesController } from './moves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Move } from './move.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Move])],
  	providers: [MovesService],
  	controllers: [MovesController]
})
export class MovesModule {}