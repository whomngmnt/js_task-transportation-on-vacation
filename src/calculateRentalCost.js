/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  const oneDaycost = 40;

  const totallyCost = days * oneDaycost;

  if (days >= longTerm) {
    return totallyCost - longTermDiscount;
  }

  if (days >= shortTerm) {
    return totallyCost - shortTermDiscount;
  }

  return totallyCost;
}

module.exports = calculateRentalCost;
