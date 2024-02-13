'use client'
import { useEffect } from 'react'

function Users() {
  useEffect(() => {
    alert('loaded')
  }, [])

  return <h1>HOME</h1>
}

export default Users
