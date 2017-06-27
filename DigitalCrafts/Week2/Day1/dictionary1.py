def dictionary_practice():
    phonebook_dict = {
        'Alice': '703-493-1834',
        'Bob': '857-384-1234',
        'Elizabeth': '484-584-2923'
    }
    print phonebook_dict["Elizabeth"]
    print phonebook_dict.update({"Tim":"867-5309"})
    phonebook_dict["Bob"] = "123-123-1234"
    print phonebook_dict
dictionary_practice()