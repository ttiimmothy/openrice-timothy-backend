import os
root = "./src/.gitlab"

dirlist = sorted([item for item in os.listdir(root) if os.path.isdir(os.path.join(root, item))])
with open('./project.md', 'w') as file:
  for item in dirlist:
    # Write text to the file
    file.write("- [ ] ")
    # file.write("`" + item + "`")
    file.write(item)
    file.write("\n")
# print(dirlist)
