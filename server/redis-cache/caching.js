import Redis from 'redis'

//CACHING with redis.js
const redisClient = Redis.createClient()
const DEFAULT_EXPIRATION = 3600

const caching = (key, cb) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, async (error, data) => {
      if (error) reject(error)
      if (data != null) {
        return resolve(JSON.parse(data))
      } else {
        const freshData = await cb()
        redisClient.setex(key, DEFAULT_EXPIRATION, JSON.stringify(freshData))
        resolve(freshData)
      }
    })
  })
}

export default caching
