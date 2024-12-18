const db = require('../db/connection')

exports.getTopics = () => {
    return db.query(`
        SELECT description, slug
        FROM topics
        `)
        .then(({ rows: topics }) => {
            return topics
        })
}

exports.topicExists = (topic) => {
    return getTopics()
        .then(topics => {
            return topics.includes(topic)
        })
}