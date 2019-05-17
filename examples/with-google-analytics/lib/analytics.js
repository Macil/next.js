// This should be a value that starts with "UA-"
export const GA_MEASUREMENT_ID = '<YOUR_GA_TRACKING_ID>'

// https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
export const pageview = url => {
  window.ga('set', 'page', url)
  window.ga('send', 'pageview')
}

// https://developers.google.com/analytics/devguides/collection/analyticsjs/events
export const event = ({ action, category, label, value }) => {
  window.ga('send', {
    hitType: 'event',
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value
  })
}
