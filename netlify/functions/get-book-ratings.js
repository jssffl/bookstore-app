const fetch = require('node-fetch')

exports.handler = async (event) => {
  try {
    const res = await fetch(
      'https://www.goodreads.com/book/isbn/054579143X?format=json',
      {
        method: ' GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    )
    console.log('in netlify func')
    console.log(res)
    return { statusCode: 200, body: JSON.stringify({ res }) }
  } catch (error) {
    console.log({ error })
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    }
  }
}
