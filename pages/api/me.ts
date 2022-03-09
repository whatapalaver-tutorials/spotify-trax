import { validateRoute } from "lib/auth";

export default validateRoute((req, res, user) => {
  console.log(user)
  res.json(user)
})