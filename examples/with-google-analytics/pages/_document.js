import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { GA_MEASUREMENT_ID } from '../lib/analytics'

export default class extends Document {
  render () {
    return (
      <html>
        <Head>
          {/* Google Analytics (analytics.js) */}
          {/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
              ga('create', '${GA_MEASUREMENT_ID}', 'auto');
              ga('send', 'pageview');
          `
            }}
          />
          <script
            async
            src='https://www.google-analytics.com/analytics.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
