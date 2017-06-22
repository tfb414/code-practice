def ceasar_cipher(sentence, offset):
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q", "r","s","t","u","v","w","x","y","z"]
    deciphered = ""
    for x in sentence:
        if(x != " "):
            xindex = alphabet.index(x) + offset
            if xindex >= 26:
                xindex -= 26
            deciphered += alphabet[xindex]
        if(x == " "):
            deciphered += " "
    print deciphered
ceasar_cipher("lbh zhfg hayrnea jung lbh unir yrnearq", 13)