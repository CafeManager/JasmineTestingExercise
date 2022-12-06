describe("test helpers.js", function () {
    beforeEach(function () {
        allPayments = {
            payment1: {
                tipAmt: 4,
                billAmt: 20
            },
            payment2: {
                tipAmt: 5,
                billAmt: 10
            }
        }
    });
    it("check to make sure tip total and bill total are summed up properly sumPaymentTotal()", function () {
        expect(sumPaymentTotal("tipAmt")).toEqual(9)
        expect(sumPaymentTotal("billAmt")).toEqual(30)
    })
    it("check if the tip is accurately calculated in calculateTipPercent()", function () {
        expect(calculateTipPercent(20, 5)).toEqual(25)
    })
    afterAll(function(){
        delete allPayments['payment1'];
        delete allPayments['payment2'];
        updateServerTable();
    })
})