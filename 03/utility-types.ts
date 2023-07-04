// Partial

interface MyUser {
  name: string
  id: number
  email?: string
}

// interface MyUserOptionals {
//   name?: string
//   id?: string
//   email?: string
// }

type MyUserOptionals = Partial<MyUser> // Partial makes all fields optional

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

const mergedUserData = merge({
  name: 'Josh',
  id: 2,
  email: 'test@test.com'
}, {
  email: 'test222@test.com'
}) 

console.log( mergedUserData )

// Required - all fields required
type RequiredMyUser = Required<MyUser>

// Pick - grab fields and preseve types
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>

// note: creating placeholder data for next example
const users: MyUser[] = [mergedUserData, mergedUserData, mergedUserData].map((user, i) => ({
  ...user,
  id: i,
}))

// Omit (excludes a key)
type UserWithoutId = Omit<MyUser, 'id'>

// Record (key/val pairs) 
const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutId> => {
  return users.reduce((prev, user) => {
    const { id, ...userData } = user
    return {
      ...prev,
      [id]: userData,
    }
  }, {})
}

console.log( mapById(users) )