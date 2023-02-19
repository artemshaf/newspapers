import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnumConfig } from '../enum/enumConfig';
import MsSql, { ConnectionPool } from 'mssql';

@Injectable()
export class MsSqlConfigService {
  private connection: ConnectionPool;

  constructor(private readonly configService: ConfigService) {
    const config = this.createMsSqlOptions();
    this.setConnection(config);
  }

  async setConnection(config: MsSql.config) {
    this.connection = await new ConnectionPool(config).connect();
  }

  async getConnection() {
    return this.connection;
  }

  createMsSqlOptions(): MsSql.config {
    const {
      msSql: { user, password, server, database },
    } = this.configService.get(EnumConfig.DATABASE);

    return {
      user,
      password,
      server,
      database,
    };
  }
}
