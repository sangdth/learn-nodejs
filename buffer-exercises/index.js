/**
 * ######### Buffer: Exercise 1 #########
 * Create an uninitialized buffer with 100 bytes length and fill it with bytes with values starting from 0 to 99. 
 * And then print its contents.” 
 */
var buff = new Buffer(100);

for (var i=0; i < 100; i += 1) {
  buff[i] = i;
}
console.log(buff);

/**
 * ######### Buffer: Exercise 2 #########
 * Do what is asked on the previous exercise and then slice the buffer with bytes ranging 40 to 60. And then print it.”
 */
var slice = buff.slice(40, 60);
console.log(slice);

/**
 * ######### Buffer: Exercise 3 #########
 * Do what is asked on exercise 1 and then copy bytes ranging 40 to 60 into a new buffer. And then print it.
 */
var buff2 = new Buffer(20);
buff.copy(buff2, 0, 40, 60);
console.log(buff2);