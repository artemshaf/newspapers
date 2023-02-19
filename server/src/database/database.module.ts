import { Module } from '@nestjs/common';
import { MsSqlConfigService } from '../configs/db/msSqlconfig.service';

@Module({
  imports: [],
  providers: [{ provide: 'MS SQL', useClass: MsSqlConfigService }],
})
export class DatabaseModule {}
