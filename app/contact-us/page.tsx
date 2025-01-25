import React from 'react'
import Link from 'next/link'
const ContactPage = () => {
  return (
    <>
        <h1>You can contact us through :</h1>
        <Link href={'https://t.me/marifkonuz'}>Telegram</Link><br />
        <Link href={'https://ibrohimshaymardanov@gmail.com'}>Gmail</Link>
    </>
  )
}

export default ContactPage