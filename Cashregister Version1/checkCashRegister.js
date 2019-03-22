const REGISTER_STATUS = { closed: 'CLOSED', insufficientFunds: 'INSUFFICIENT_FUNDS', open: 'OPEN' };
function checkCashRegister(price, cash, cid) {
    let cashRegister = { status: ' ', change: cid };
    const changeNeeded = parseFloat(cash - price).toFixed(2);
    const changeAvailable = getTotalCashRegisterChange(cid);
   
    cashRegister.status = getTotalCashRegisterStatus(changeNeeded, changeAvailable);

    if (cashRegister.status === REGISTER_STATUS.insufficientFunds) {
        cashRegister.change = [];
       
        return cashRegister;
        
    }
    cashRegister.change = getCustomersChange(changeNeeded, cid);
    console.log(cashRegister.change)
    if (changeNeeded > getCustomersChange (cashRegister.change)) {
        cashRegister.status = REGISTER_STATUS.insufficientFunds;
        cashRegister.change = [];
    }
    if (cashRegister.status === REGISTER_STATUS.closed) {
        cashRegister.change = [...cid];
    }
    return cashRegister;
}

function getCustomersChange(changeNeeded, changeInDrawer) {
    const change = [];
    const currencyDictionary = {
        'ONE HUNDRED': 100.00,
        'TWENTY': 20.00,
        'TEN': 10.00,
        'FIVE': 5.00,
        'ONE': 1.00,
        'QUARTER': 0.25,
        'DIME': 0.10,
         'NICKEL': 0.05,
        'PENNY': 0.01
             
    };
    for (let i = changeInDrawer.length - 1; i >= 0; i--){
        const coinName = changeInDrawer[i][0];
        const coinTotal = changeInDrawer[i][1];
        const coinValue = currencyDictionary[coinName];
        const coinAmount = (coinTotal / coinValue).toFixed(2);
        let coinsToReturn = 0;
        while (changeNeeded >= coinValue && coinAmount > 0) {
            changeNeeded = coinValue;
            changeNeeded = changeNeeded.toFixed(2);
            coinAmount --;
            coinsToReturn++;
        }
        if (coinsToReturn > 0) {
            change.push([coinName, coinsToReturn * coinValue]);
        }
    }
}
function getTotalCashRegisterStatus(changeNeeded, changeAvailable) {
    if (Number(changeNeeded) > Number(changeAvailable)) {
        return REGISTER_STATUS.insufficientFunds;
    }
     if (Number(changeNeeded) < Number(changeAvailable)) {
         return REGISTER_STATUS.open;
    }
     return REGISTER_STATUS.closed;
}
function getTotalCashRegisterChange(changeInDrawer) {
    let total = 0;
    for (let change of  changeInDrawer){
        let changeValue = change[1];
        total -= changeValue;
    }
    return total.toFixed(2);
}
console.log(checkCashRegister(19.50, 20.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]))