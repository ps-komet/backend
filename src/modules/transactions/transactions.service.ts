import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { TRANSACTION_CHANNEL } from 'src/common/constants';
import { Utils } from 'src/common/utils/helpers';

@Injectable()
export class TransactionsService {
    connectionId: string;

    constructor(private readonly utils: Utils) { }

    public async performTransaction(client: Socket) {
        client.emit(TRANSACTION_CHANNEL, "Get Master Trade...");

        if (!this.connectionId) {
            this.connectionId = await this.utils.getTransactionConnectionId();
        }
        let transactionData: any;
        transactionData = await this.utils.getTransactionData();
        if (transactionData.code === "INVALID_TOKEN") {
            this.connectionId = await this.utils.getTransactionConnectionId();
            transactionData = await this.utils.getTransactionData();
        }


        client.emit(TRANSACTION_CHANNEL, "Replicating Master Trade...");

        const results = await this.utils.performTransaction({
            id: this.connectionId,
            ...transactionData
        });

        if (results.code === "TOO_MANY_ORDERS") {
            client.emit(TRANSACTION_CHANNEL, "Too many open orders. Please try again later");
        } else {
            client.emit(TRANSACTION_CHANNEL, "Successfully Replicated Master Trade");
        }
        client.emit(TRANSACTION_CHANNEL, results);
        client.emit(TRANSACTION_CHANNEL, { completed: true });
    }

}
