import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { TRANSACTION_LISTENER } from 'src/common/constants';
import { TransactionsService } from '../transactions/transactions.service';


@WebSocketGateway(81, { cors: { origin: "*", allowedHeaders: "*" } })
export class WebsocketsGateway {
  constructor(private readonly transactionService: TransactionsService) { }

  @SubscribeMessage(TRANSACTION_LISTENER)
  handleEvent(
    @ConnectedSocket() client: Socket
  ) {
    this.transactionService.performTransaction(client);
  }

}
