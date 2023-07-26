import { createClient } from "contentful"
const API_KEY_SPACE = process.env.REACT_APP_API_KEY_SPACE
const API_TOKEN = process.env.REACT_APP_API_ACCESS_TOKEN

export default createClient({
  space: API_KEY_SPACE,
  accessToken: API_TOKEN,
})
