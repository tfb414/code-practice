def letter_histogram(word):
    histogram = {}
    for letter in word:
        histogram[letter] = 0
    for letter in word:
        histogram[letter] += 1
    sorted_histogram = sorted(histogram.items(), key=lambda x:x[1], reverse=True)
    for i in range(3):
        print sorted_histogram[i]

    
letter_histogram("Timmmmdafsdfasd")

def word_histogram(sentence):
    histogram = {}
    split_sentence = sentence.split()
    for word in split_sentence:
        histogram[word] = 0
    for word in split_sentence:
        histogram[word] += 1
    print histogram
word_histogram("This is just so crazy this is so much insane blah blah")