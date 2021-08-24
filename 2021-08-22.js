// Take in an int, and list all prime numbers up to that number.

function PrintPrimes(num){
    // Check for edge cases
    if (num < 2){
        console.log("Please use a number that is greater than 1.")
    }

    // Loop through all numbers (i) up to num
    for (var i=2;i<num;i++){
        // Loop througn numbers up to i, checking of modulus has a remainder of 0
        for (var t=2;t<i;t++){
            // Check for remainder
            if (i%t === 0){
                break;
            }
            else if (t === i-1) {
                console.log(i + " is prime.");
            }
        }
    }
}

PrintPrimes(99);