#look at side by side with .ts file 
#x = 7
#while True: 
    #look online

from random import random
r = random()

print(random())
if random() < .5:
    print('hi')
elif random() >= .5:
    print('there')

#if r < 1/3:
    #print('A')
#elif r < 2/3:
 #   print('B')
#else:
 #   print('C')

j = 0
while j < 10:
    print(j)
    j+=1 #j = j + 1

#semicolon for code on same line

for i in range(10):
    print('i', i)

for x in [1, 7, 3]:
    print(x)

lst = [3,7,5]
print('min',min(lst))
print('max',max(lst))
print('sum',sum(lst))
print('len',len(lst))

ev = [1,2,3,4,5,6,7,8]
cnt = 0
for v in ev:
    if v%2==0