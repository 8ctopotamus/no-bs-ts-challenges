class Doggy {
  constructor(public readonly name: string, public age: number) {
    this.name = name
  }
}

const lg = new Doggy('LG', 13)
// lg.name = 'Foo'
console.log(lg.name)

class DogList {
  private doggies: Doggy[] = []

  static instance: DogList = new DogList()

  private constructor() {} // makes DogList a singleton

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog)
  }

  getDogs() {
    return this.doggies
  }
}

// const dl = new DogList() // will throw an error because of the private constructor 

DogList.addDog(lg)
console.log(DogList.instance.getDogs())