// Ex 1 - readonly properties

interface Cat {
  readonly name: string // readonly makes property immutable
  breed: string
}

// Readonly makes ALL keys readonly
type ReadonlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): Cat {
  return {
    name,
    breed,
  }
}

const usul = makeCat('Usul', 'Tabby')
// usul.name = 'Piter' // uncomment to see type error when trying to modify a readonly property

// Ex 2 - readonly return values
function makeCoordinate(
  x: number, 
  y: number, 
  z: number
): readonly [number, number, number] {
  return [x, y, z]
}

const c1 = makeCoordinate(10, 20, 30)
// c1[0] = 50 // uncomment to see type error when trying to modify a readonly property

// Ex 3 - as const (makes contents of array also 'constant')
const reallyConst = [1, 2, 3] as const
// reallyConst[0] = 50 // uncomment to see type error when trying to modify a "const-ed" thing