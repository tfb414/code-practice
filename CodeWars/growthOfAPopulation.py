def nb_year(p0, percent, aug, p):
    yearCount = 0
    while(p0 < p):
        annualIncrease = p0 * (.01 * percent)
        annualIncrease += aug
        p0 += int(annualIncrease)
        yearCount += 1
    return yearCount

nb_year(1500, 5, 100, 5000)