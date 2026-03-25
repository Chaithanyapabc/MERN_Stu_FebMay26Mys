//Introduction to buffers in NodeJS
//A buffer stores raw bytes
//Here we create buffer directly from a string
const textBuffer = Buffer.from("P Chaithanya");

//The value in the buffer is the encode from of the text
console.log("Bufer object:",textBuffer);
console.log("Bufer length in bytes:",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);
console.log("Byte at index 0",textBuffer[1]);

//Each charecter is sstored internally as byte data
//For standard ADCII letters there will be a equivalent code
//Buffer stores numeric value between 0 to 255