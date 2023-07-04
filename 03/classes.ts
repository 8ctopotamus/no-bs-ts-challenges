interface DB {
  get(id: string): string
  set(id: string, value: string): void
}

interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

class InMemoryDB implements DB {
  protected  db: Record<string, string> = {}
  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string): void {
    this.db[id] = value
  }
}

class PersistentMemoryDB extends InMemoryDB implements Persistable {
  saveToString(): string { 
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const myDB = new PersistentMemoryDB()
myDB.set('foo', 'bar')
// myDB.db['foo'] = 'bazz' // can't directly update bc it's PROTECTED
console.log (myDB.get('foo') )
const output = myDB.saveToString()
console.log ( output )

const myDB2 = new PersistentMemoryDB()
myDB2.restoreFromString(output)
console.log( myDB2.saveToString() )