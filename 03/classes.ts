interface DB {
  get(id: string): string
  set(id: string, value: string): void
}

class InMemoryDB implements DB {
  private db: Record<string, string> = {}
  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string): void {
    this.db[id] = value
  }
}

const myDB = new InMemoryDB()
myDB.set('foo', 'bar')
// myDB.db['foo'] = 'bazz' // can't directly update bc it's private
console.log (myDB.get('foo') )