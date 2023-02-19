import { registerAs } from '@nestjs/config/dist';
import MsSql from 'mssql';
import { EnumConfig } from '../enum/enumConfig';

export const msSqlConfig = registerAs(EnumConfig.DATABASE, (): MsSql.config => {
  return {
    user: 'shafa',
    password: '',
    server: 'DESKTOP-2O8DU7B',
    database: 'newspaper',
  };
});
