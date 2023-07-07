interface Database<T, K> {
  get(id: K): T
  set(id: K, value: T): void
}

interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

type DBKeyType = string | number | symbol

class InMemoryDataBase<T, K extends DBKeyType> implements Database<T, K extends DBKeyType> {
  protected  db: Record<K, T> = {} as Record<K, T>
  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value
  }
}

class PersistentMemoryDataBase<T, K extends DBKeyType> extends InMemoryDataBase<T, K extends DBKeyType> implements Persistable {
  saveToString(): string { 
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const myDB = new PersistentMemoryDataBase<number, string>()
myDB.set('foo', 22)
// myDB.db['foo'] = 'bazz' // can't directly update bc it's PROTECTED
console.log (myDB.get('foo') )
myDB.set('foo', 23)
console.log (myDB.get('foo') )

const output = myDB.saveToString()
console.log ( output )

const myDB2 = new PersistentMemoryDataBase<number, string>()
myDB2.restoreFromString(output)
console.log( myDB2.saveToString() )