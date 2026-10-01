import statistics

numbers = input("\ enter the numbers with space: ").split()
numbers=[int(x) for x in numbers]

print("|n original list:", numbers)
mean_value=statistics.mean(numbers)
median_value=statistics.median(numbers)
try:
    mean_value=statistics.mean(numbers)
except statistics.StatisticsError:
    mode_value="no unique mode found"
    
print("mean:",mean_value)
print("median:",median_value)
print("mode:",mode_value) 
    
print("\n maximum values:",max (numbers))
print("\n minimum values:",min (numbers))

sorted_list=sorted(numbers)
print("\n sorted list:",max (numbers))

unique_list=list(set(numbers))
unique_list.sort()
print("\n list after removing duplicate:",unique_list)