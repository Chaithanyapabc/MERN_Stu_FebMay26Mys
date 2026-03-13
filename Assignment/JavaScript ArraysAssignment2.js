//Payroll Cleanup and Net Pay Report Problem Statement
let payroll = [
  { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
  { name: "Ravi", basePay: 25000, bonus: 1500, taxRate: 0.12 },
  { name: "Meena", basePay: -20000, bonus: 1000, taxRate: 0.1 },   // invalid basePay
  { name: "Karan", basePay: 28000, bonus: -500, taxRate: 0.08 },   // invalid bonus
  { name: "Neha", basePay: 32000, bonus: 2500, taxRate: 0.15 }
];
let validRecords = payroll.filter(emp =>
  emp.basePay > 0 &&
  emp.bonus >= 0 &&
  emp.taxRate >= 0 &&
  emp.taxRate <= 1
);
let netPayReport = validRecords.map(emp => {
  let gross = emp.basePay + emp.bonus;
  let netPay = gross - (gross * emp.taxRate);

  return {
    name: emp.name,
    netPay: netPay
  };
});
let totalNetPayout = netPayReport.reduce((total, emp) => {
  return total + emp.netPay;
}, 0);
console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);