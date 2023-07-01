const numbers = [1, 2, 3]
const animals = ["dog", "cat", "fish"]

function myForEach<T>(arr: T[], cb: (val: T) => void): T[] {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i])
  }
  return arr
}

myForEach(numbers, num => console.log(num))
myForEach(animals, animal => console.log(animal))

function myFilter<T>(arr: T[], cb: (arg: T) => boolean): T[] {
  let results: T[] = []
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]) && results.push(arr[i])
  }
  return results
}

const evens = myFilter(numbers, num => num % 2 === 0)
const cAnimals = myFilter(animals, animal => animal.charAt(0).toLowerCase() === 'c')
console.log(evens)
console.log(cAnimals)

function myMap<T, Transformed>(arr: T[], cb: (val: T, i: number) => Transformed): Transformed[] {
  let modified: Transformed[] = []
  for (let i = 0; i < arr.length; i++) {
    modified.push( cb(arr[i], i) )
  }
  return modified
}

const numsX10 = myMap(numbers, num => num * 10)
const animalsWithIDs = myMap(animals, (animal, i) => ({ name: animal, id: i }))
console.log(numsX10)
console.log(animalsWithIDs)