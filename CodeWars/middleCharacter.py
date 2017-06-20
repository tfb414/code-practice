def get_middle(s):
    length = len(s)
    if(length % 2 != 0):
        return s[length / 2]
    if(length % 2 == 0):
        return s[(length / 2) - 1] + s[length / 2]

get_middle("1234")