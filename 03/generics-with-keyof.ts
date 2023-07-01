function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[], 
  key: KeyType
): DataType[KeyType][] {
  return items.map(item => item[key])
}

const dogs = [
  { name: 'Mimi', age: 12 },
  { name: 'LG', age: 13 },
]

console.log( pluck(dogs, "name") )
console.log( pluck(dogs, "age") )

interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  addToCard: BaseEvent & { quantity: number; productID: number },
  checkout: BaseEvent,
}

function sendEvent<Name extends keyof EventMap>(
  name: Name, 
  data: EventMap[Name]
): void {
  console.log(name, data)
}

sendEvent('addToCard', { quantity: 10, productID: 10, time: 100, user: 'test' })
sendEvent('checkout', { time: 100, user: 'test' })