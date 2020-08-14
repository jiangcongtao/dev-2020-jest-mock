const calculateTip = (total, tipPercentange = .25) => total + total * tipPercentange;

module.exports = {
    calculateTip,
};