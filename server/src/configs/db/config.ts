import { registerAs } from '@nestjs/config';
import { EnumConfig } from '../enum/enumConfig';
import { msSqlConfig } from './msSql.config';

export const databaseConfig = registerAs(EnumConfig.DATABASE, () => ({
  msSql: {
    ...msSqlConfig(),
  },
}));
