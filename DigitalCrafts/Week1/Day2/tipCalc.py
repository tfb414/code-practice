billAmount = float(raw_input("what was the bill amount? "))
serviceLevel = raw_input("please enter 'good', 'fair', or 'bad' ")

if(serviceLevel == "good"):
    tip = .2 * billAmount
if(serviceLevel == "fair"):
    tip = .15 * billAmount
if(serviceLevel == "bad"):
    tip = .1 * billAmount

finalAmount = billAmount + tip
print ("Tip amount: $%.2f") % tip
print ("Total amount: $%.2f") % finalAmount

numberOfSplits = int(raw_input("How many ways do you want it split? "))

splitAmount = (finalAmount / numberOfSplits)
print ("Amount per person: %.2f") % splitAmount