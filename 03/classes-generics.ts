interface DB<K, T> {
  get(id: K): T
  set(id: K, value: T): void
}

interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

type DBKeyType = string | number | symbol

class InMemoryDB<K extends DBKeyType, T> implements DB<K, T> {
  protected  db: Record<K, T> = {} as Record<K, T>
  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value
  }
}

class PersistentMemoryDB<K extends DBKeyType, T> extends InMemoryDB<K extends DBKeyType, T> implements Persistable {
  saveToString(): string { 
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const myDB = new PersistentMemoryDB<T, K extends DBKeyType>()
myDB.set('foo', 22)
// myDB.db['foo'] = 'bazz' // can't directly update bc it's PROTECTED
console.log (myDB.get('foo') )
myDB.set('foo', 23)
console.log (myDB.get('foo') )

const output = myDB.saveToString()
console.log ( output )

const myDB2 = new PersistentMemoryDB<number>()
myDB2.restoreFromString(output)
console.log( myDB2.saveToString() )