describe("Test payment.js", function () {
    beforeEach(function () {
        tipAmtInput.value = 4;
        billAmtInput.value = 20;
    });
    it("makes sure submitPaymentInfo() adds payment to allPayments array", function () {
        
        submitPaymentInfo();
        console.log(allPayments);
        expect(allPayments["payment1"]).toEqual({
            billAmt:'20',
            tipAmt:'4',
            tipPercent:20,
        });
    })
        it("makes sure createCurPayment() adds a positive payment to allPayments array", function(){
        console.log('test2');
        expect(tipAmtInput.value).toBeGreaterThanOrEqual(0);
        expect(billAmtInput.value).toBeGreaterThan(0);
        expect(createCurPayment()).toEqual({
            billAmt: '20',
            tipAmt: '4',
            tipPercent: 20,
          });
        
    })
    afterAll(function() {
        delete allServers['server' + serverId];
        tipAmtInput.value = '';
        billAmtInput.value = '';
        updateServerTable();
      });
})
