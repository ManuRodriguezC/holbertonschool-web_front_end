function countPrimeNumbers() {
    var time = 0
    for(count = 1; count <= 100; count++) {
        var perform = performance.now()
        time += perform
        console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds`)
    }
        console.log(`Final time is ${time}`)
}
setTimeout(countPrimeNumbers, 0)