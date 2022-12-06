const axios = require('axios')

exports.handler = async (event) => {
  const { isbn } = event.queryStringParameters
  let res

  try {
    res = await axios.get(
      ` https://www.goodreads.com/book/review_counts.json?isbns=${isbn}`
    )
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  }
}
