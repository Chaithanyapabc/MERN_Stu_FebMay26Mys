//ES Module exports

//2 types of export: Named & Default export
//Named export for a shared constant
// named export can be of any number in a file
export const taxrate=0.18;

//Named export for a reusable function
export function calculateTotal(subtotal){
    return subtotal+subtotal*taxrate;
}

//Default export: main feature of the module
// can have only one per file
export default function createInvoiceLabel(invoiceNumber){
    return "Invoice: "+invoiceNumber;
}