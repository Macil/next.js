import App from 'next/app'
import Router from 'next/router'

import * as analytics from '../lib/analytics'

Router.events.on('routeChangeComplete', url => analytics.pageview(url))

export default App
