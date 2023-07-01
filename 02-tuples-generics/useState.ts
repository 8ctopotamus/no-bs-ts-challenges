function useState<T>(defaultVal: T): [() => T, (arg: T) => void] {
  let thing: T = defaultVal
  return [
    () => thing,
    arg => (thing = arg)
  ]
}

const [getter, setter] = useState(10)
console.log( getter() )
setter(20)
console.log( getter() )
