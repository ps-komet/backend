import { Module } from '@nestjs/common';
import { WebsocketsGateway } from './websockets.gateway';
import { TransactionsService } from '../transactions/transactions.service';
import { Utils } from 'src/common/utils/helpers';

@Module({
  providers: [WebsocketsGateway, TransactionsService, Utils],
})
export class WebsocketsModule { }
