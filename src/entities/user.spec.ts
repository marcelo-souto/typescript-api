import { User } from "./user"

it("should return an object with User keys and respectived values", () => {
  expect(
    new User({
      id: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      password: "123456",
    })
  ).toEqual({
    id: "1",
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "123456",
  })
})