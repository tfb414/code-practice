def get_sum(a,b):
    range = [a, b]
    range.sort()
    total = []
    if(a == b):
        return a
    while range[1] >= range[0]:
        total.append(range[1])
        range[1] -= 1
    return sum(total)
get_sum(0, -2)