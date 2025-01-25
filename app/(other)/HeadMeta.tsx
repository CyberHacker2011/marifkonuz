import React from 'react'
import Head from 'next/head'
const HeadMeta = () => {
  return (
    <Head>
        <title>Marifkonuz - Reach Your Goals and Learn</title>
        <meta name="description" content="Marifkonuz is a platform that helps you achieve your goals and learn through resources and courses." />
        <meta name="keywords" content="learning, courses, goals, education, personal development" />
        <meta name="author" content="Marifkonuz Team" />

        <meta property="og:title" content="Marifkonuz - Reach Your Goals and Learn" />
        <meta property="og:description" content="Achieve your goals and learn with Marifkonuz's resources and courses." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        
        <meta name="twitter:title" content="Marifkonuz - Reach Your Goals and Learn" />
        <meta name="twitter:description" content="Achieve your goals and learn with Marifkonuz's resources and courses." />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
  )
}

export default HeadMeta