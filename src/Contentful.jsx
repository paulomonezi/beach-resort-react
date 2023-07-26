import { createClient } from "contentful";
import { API_ACCESS_TOKEN, API_KEY_SPACE } from "../env.development";


export default createClient({
    space: API_KEY_SPACE,
    accessToken: API_ACCESS_TOKEN
})