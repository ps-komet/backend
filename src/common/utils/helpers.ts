import { Injectable } from "@nestjs/common";
import { endPoints } from "../constants";
import axios from "axios";

@Injectable()
export class Utils {

    private async sendHttpRequest(url: string) {
        const { data } = await axios.get(url);
        return data;
    }

    public async getTransactionData() {
        return await this.sendHttpRequest(endPoints.getTransaction);
    }
    public async getTransactionConnectionId() {
        return await this.sendHttpRequest(endPoints.getConnectionId);
    }

    public async performTransaction(transactionData: {
        id: string
        symbol: string
        operation: string
        volume: string
        takeprofit: string
        comment: string
    }) {
        let transactionEndPoint = endPoints.performTransaction;
        Object.keys(transactionData).forEach(key => transactionEndPoint = transactionEndPoint.replace(`<${key}>`, transactionData[key]));

        return await this.sendHttpRequest(transactionEndPoint);
    }
}