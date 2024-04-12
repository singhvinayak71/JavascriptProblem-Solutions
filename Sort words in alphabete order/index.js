const massage = prompt("Enter your massage")

const word = massage.split(" ")
word.sort()
console.log(`the sorted words are`, word)
for (const element of word) {
    console.log(element);
  }