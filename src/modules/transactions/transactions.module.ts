import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Utils } from 'src/common/utils/helpers';


@Module({
  providers: [TransactionsService, Utils],
})
export class TransactionsModule { }
