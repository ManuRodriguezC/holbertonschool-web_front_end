function countPrimeNumbers() {
    for(count = 1; count <= 100; count++)
        console.log(`Execution time of calculating prime numbers ${count} times was ${performance.now()}`)
}
countPrimeNumbers()