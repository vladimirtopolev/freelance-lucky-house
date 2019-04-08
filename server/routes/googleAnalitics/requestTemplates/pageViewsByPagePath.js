module.exports = {
    metrics: [
        { expression: 'ga:pageviews' },
        { expression: 'ga:timeOnPage' },
        { expression: 'ga:uniquePageviews' },
        { expression: 'ga:entrances' },
        { expression: 'ga:exits' }

    ],
    dimensions: [
        { name: 'ga:pagePath' }
    ]
}