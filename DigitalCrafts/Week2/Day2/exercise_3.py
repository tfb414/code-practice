def read_histogram():
    letter_histogram_dict = {}
    word_histogram_dict = {}
    file_name = raw_input("what file would you like a word and letter histogram of? ")
    open_file = open(file_name, "r")
    letter_histogram(letter_histogram_dict, file_name)
    word_histogram(word_histogram_dict, file_name)

def letter_histogram(letter_histogram_dict, file_name):
    open_file = open(file_name, "r")
    for stuff in open_file.read():
        if (stuff not in letter_histogram_dict):
            stuff = stuff.rstrip()
            letter_histogram_dict[stuff] = 0
        letter_histogram_dict[stuff] += 1
    open_file.close()
    open_file = open(file_name, "r")
    open_file.close()
    print letter_histogram_dict

def word_histogram(word_histogram_dict, file_name):
    open_file = open(file_name, "r")
    all_text = open_file.readlines()
    for lines in all_text:
        split_words = lines.split(" ")
        for i in split_words:
            i = i.rstrip()
            if (i not in word_histogram_dict):
                word_histogram_dict[i] = 0
            word_histogram_dict[i] += 1
    print word_histogram_dict   
read_histogram()