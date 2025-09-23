from sympy import primerange

# Generate all prime numbers under 50,000
primes_under_50000 = list(primerange(1, 50000))

# Calculate the sum of those prime numbers
sum_primes = sum(primes_under_50000)
print(sum_primes)
