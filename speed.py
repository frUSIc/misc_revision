print("Computing prefix averages")

import timeit

# This performs extra, unnecessary iterations with O(n^2) time complexity
quadratic = """
import random
randlist = []
n = 1000
for i in range(0,n):
    new = random.randint(1,3*n)
    randlist.append(new)

A = []
for i in range(0,n):
    s = randlist[0]
    for j in range(1,i+1):
        s = s + randlist[j]
    A.append(s//(i+1))
"""

# This keeps a simple running sum with O(n) time complexity
linear = """
import random
randlist = []
n = 1000
for i in range(0,n):
    new = random.randint(1,3*n)
    randlist.append(new)

A = []
s = 0
for i in range(0,n):
    s = s + randlist[i]
    A.append(s//(i+1))
"""

timeA = timeit.timeit(quadratic, number=1000)
timeB = timeit.timeit(linear, number=1000)

print("Time to run quadratic = " + str(timeA)) # this takes 18 seconds
print("Time to run linear = " + str(timeB)) # this takes 0.8 seconds