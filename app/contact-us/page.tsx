import React from 'react'
import Card from '../(components)/card'
const ContactPage = () => {
  return (
    <>
        <div className="flex flex-col justify-center p-5 md:p-7">
          {/* <h1 className="text-2xl font-bold ">You can contact us through:</h1>
          <p>
          <Link href={'https://t.me/marifkonuz'} className="text-lg hover:text-blue-600 ">Telegram</Link>
          </p>
          <p>
          <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=marifkonuz@gmail.com"}>Gmail</Link>
          </p>   */}
          <Card />
        </div>
    </>
  )
}

export default ContactPage