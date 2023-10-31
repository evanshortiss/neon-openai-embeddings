import OpenAPI from 'openai'
import getConfig from './config'
import query from './query'

const {
  OPEN_AI_API_KEY,
  OPEN_AI_MODEL,
  DATABASE_URL
} = getConfig(process.env)

const apiClient = new OpenAPI({
  apiKey: OPEN_AI_API_KEY
})

async function main () {
  const embeddings = await apiClient.embeddings.create({
    model: OPEN_AI_MODEL,
    input: 'how can I connect to postgres?'
  })

  // console.log(JSON.stringify(embeddings, null, 2))

  const results = await query(DATABASE_URL, embeddings.data[0].embedding)

  console.log(JSON.stringify(results, null, 2))
}


main()
