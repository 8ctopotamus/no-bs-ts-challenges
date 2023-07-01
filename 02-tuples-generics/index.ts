const numbers = [1, 2, 3]
const animals = ["dog", "cat", "fish"]

function myForEach<T>(arr: T[], cb: (v: T) => void): void {
  arr.reduce((_, curr) => {
    cb(curr)
    return _
  }, undefined)
}

myForEach(numbers, num => console.log(num))
myForEach(animals, animal => console.log(animal))

function myFilter<T>(arr: T[], cb: (arg: T) => boolean): T[] {
  return arr.reduce((prev, curr) => {
    return cb(curr) ? [...prev, curr] : prev
  }, [] as T[])
}

const evens = myFilter(numbers, num => num % 2 === 0)
const cAnimals = myFilter(animals, animal => animal.charAt(0).toLowerCase() === 'c')
console.log(evens)
console.log(cAnimals)

function myMap<T, K>(arr: T[], cb: (val: T, i?: number) => K): K[] {
  return arr.reduce((prev, curr) => {
    return [...prev, cb(curr)]
  }, [] as K[])
}

const numsX10 = myMap(numbers, num => num * 10)
const animalsWithIDs = myMap(animals, (animal, i) => ({ name: animal, id: i }))
console.log(numsX10)
console.log(animalsWithIDs)