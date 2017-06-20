def calculate_years(principal, interest, tax, desired):
    year = 0
    currentAmount = principal
    while (currentAmount < desired):
        interestGained = currentAmount * interest
        currentAmount += interestGained - (interestGained * tax)
        year += 1
    
    print year
    return year

calculate_years(1000, .05, 0.18, 1100)