type MyFlexibleDogInfo = {
  name: string
  [key: string]: string | number
}

const dog: MyFlexibleDogInfo = {
  name: 'LG',
  breed: 'Mutt',
  age: 22,
}

interface DogInfo {
  name: string
  age: number
}

type OptionsFlag<Type> = {
  [Property in keyof Type]: boolean
}

type DogInfoOptions = OptionsFlag<DogInfo>

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void 
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void 
}

function listenToObject<T>(obj: T, listeners: Listeners<T>):void {
  throw 'Needs to be implemented'
}

const dog2: DogInfo = {
  name: 'LG',
  age: 13,
}

type DogIinfoListeners = Listeners<DogInfo>

listenToObject(dog2, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
  onNameDelete: () => {},
})