import { createClient } from "contentful"
import React from "react"

// export default createClient({
//   space: '9fpl7x1g9uro',
//   accessToken: 'ADfEEqTIKaxFmR6wpyawIQJpH6H-X7bRhgr-ckHNPoQ'
// })

export default createClient({
  space: import.meta.env.VITE_KEY_SPACE,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN
})
