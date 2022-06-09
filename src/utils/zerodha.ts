const zerodha = (kiteConnect: any, apiKey: any, tip: any) => {
  kiteConnect.ready(() => {
    const kite = new kiteConnect(apiKey);

    kite.add({
      exchange: tip?.instrumentId?.A_Exchange,
      tradingsymbol: tip?.instrumentId?.A_Trading_Symbol,
      transaction_type: tip?.transactionType,
      quantity: tip?.qty,
      order_type: 'LIMIT',
      price: tip?.priceAtRecommendation,
    });

    kite.link('#zerodha-button');

    kite.finished(function (status: any, request_token: any) {
      // console.log('smartApi.finished  Status', status);
      // console.log('smartApi.finished  Tokens', request_token);
    });
  });
};

export default zerodha;
