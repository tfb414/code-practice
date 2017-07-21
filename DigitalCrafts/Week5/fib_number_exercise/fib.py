def main(max):
    total = 0
    for n in range(max):
        if (n % 5 == 0 or n % 3 == 0):
            total = total + n
    print total
main(1000)