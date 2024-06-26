export const endPoints = {
    getTransaction: "https://pdzsl5xw2kwfmvauo5g77wok3q0yffpl.lambda-url.us-east-2.on.aws/",
    getConnectionId: "https://mt4.mtapi.io/Connect?user=44712225&password=tfkp48&host=18.209.126.198&port=443",
    performTransaction: "https://mt4.mtapi.io/OrderSend?id=<id>&symbol=<symbol>&operation=<operation>&volume=<volume>&takeprofit=<takeprofit>&comment=<comment>"
}

export const TRANSACTION_CHANNEL = "transaction-status";
export const TRANSACTION_LISTENER = "perform-transaction";