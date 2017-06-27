def dictionary_practice():
    ramit = {
    'name': 'Ramit',
    'email': 'ramit@gmail.com',
    'interests': ['movies', 'tennis'],
    'friends': [
        {
        'name': 'Jasmine',
        'email': 'jasmine@yahoo.com',
        'interests': ['photography', 'tennis']
        },
        {
        'name': 'Jan',
        'email': 'jan@hotmail.com',
        'interests': ['movies', 'tv']
        }
    ]
    }
    for key in ramit:
        if(key == "email"):
            print ramit[key]
        if(key == "interests"):
            print ramit[key][0]
        print ramit["friends"]
        if(key == "friends"):
            for friend_key in ramit["friends"]:
                if(friend_key["name"] == "Jan"):
                    print friend_key["email"]
                    print friend_key["interests"][1]

dictionary_practice()