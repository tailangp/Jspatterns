//IIFE function Immediately-Invoked-Function-Expressions (IIFE)
var panInfo = (function () {
    var panNumber = "ABCD123ADD";
    var getInternalPanNumber = () => {
        console.log(panNumber);
    }

    //returns method which prints
    //return private properties
    return {
        GetPanNumberFromFunction: () => {
            getInternalPanNumber();
        },
        GetPanNumber: () => {
            return panNumber;
        }
    }
})();

panInfo.GetPanNumberFromFunction();
console.log(panInfo.GetPanNumber());