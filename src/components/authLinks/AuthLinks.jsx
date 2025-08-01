import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
  //Temporário
  const status = "notauthenticated"
  return (
    <div>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </div>
  )
}

export default AuthLinks