const angelOne = (smartApiConnect: any, apiKey: any, tip: any) => {
  smartApiConnect.ready(function () {
    const smartApi = new smartApiConnect(apiKey);

    smartApi.add({
      exchange: tip?.instrumentId?.A_Exchange,
      tradingsymbol: tip?.instrumentId?.A_Trading_Symbol,
      transactiontype: tip?.transactionType,
      quantity: tip?.qty,
      price: tip?.priceAtRecommendation,
      producttype: 'DELIVERY',
      ordertype: 'LIMIT',
    });

    smartApi.link('#angelone-button');

    smartApi.finished(function (status: any, acess_token: any) {
      // console.log('smartApi.finished  Status', status);
      // console.log('smartApi.finished  Tokens', acess_token);
    });
  });
};

export default angelOne;
