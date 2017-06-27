def open_write_file():
    file_name = raw_input("what file would you like to create and write to?")
    open_file = open(file_name, "r+")
    open_file.write("derp \n")
    open_file.write("yup")
    open_file = open(file_name, "r+")
    print open_file.read()
    open_file.close()
    


# def open_file(file_name, action):
#     open_file = open(file_name, action)
#     return open_file

open_write_file()