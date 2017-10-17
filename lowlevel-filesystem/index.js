var fs = require('fs');
var file_a = './test/a.txt';

/**
 * ######### Exercise 1: Get the size of the file
 * Having a file named a.txt, print the size of that files in bytes.
 */
fs.stat(file_a, function (err, stats) {
  if (err) throw err;
  console.log('This file is ' + stats.size + ' bytes long.');
});

/**
 * ######### Exercise 2: Read a chunk of file
 * Print byte 10 to 14.
 */
fs.open(file_a, 'r', function (err, fd) {
  if (err) throw err;
  
  var readBuffer = new Buffer(4),
      bufferOffset = 0,
      bufferLength = readBuffer.length,
      filePosition = 10;

  fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, 
    function(err, readBytes) {
      if (err) throw err;
      console.log('just read ' + readBytes + ' bytes');
      
      if (readBytes > 0) {
        var result = readBuffer.slice(0, readBytes);
        console.log(result.toString());
      }
    });
});

/**
 * ######### Exercise 3: Read two chunks of file
 * Print byte 5-9, then 10-14.
 */
fs.open(file_a, 'r', function (err, fd) {
  if (err) throw err;
  
  // Declare a fucntion so we can use it again.
  // Stil don't know how to make it global so we can use it somewhere else.
  // Because it must take the fb, file discriptor return by fs.open()
  // If I declare this funtion outside, it can not take it.
  function readFile (readFrom, readTo, callback) {
    var readBuffer = new Buffer(readTo - readFrom),
        bufferOffset = 0,
        bufferLength = readBuffer.length,
        filePosition = readFrom;

    fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, 
      function(err, readBytes) {
        if (err) throw err;
        bufferOffset += readBytes;

        if (bufferOffset === bufferLength) {
          callback(readBuffer);
        }
      });
  }
  
  readFile(5, 9, function (buf1) {
    console.log(buf1.toString());
    readFile(10, 14, function (buf2) {
      console.log(buf2.toString());
    });
  });
});

/**
 * ######### Exercise 4: Overwrite the file
 * Having a file named a.txt, Overwrite it with the UTF-8-encoded string 
 * “ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz"
 */
fs.open(file_a, 'w', function (err, fd) {
  if (err) throw err;
  
  var writeBuffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz'),
      bufferOffset = 0,
      bufferLength = writeBuffer.length,
      filePosition = null;
  
  fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition, function (err, written) {
    if(err) throw err;
    
    console.log(written);
  })
});