import { from } from 'env-var'

export type ApplicationConfig = {
  OPEN_AI_API_KEY: string
  OPEN_AI_MODEL: string
  DATABASE_URL: string
}

export default function getConfig (env: NodeJS.ProcessEnv): ApplicationConfig {
  const { get } = from(env)

  return {
    OPEN_AI_API_KEY: get('OPEN_AI_API_KEY').required().asString(),
    OPEN_AI_MODEL: get('OPEN_AI_MODEL').default('text-embedding-ada-002').asString(),
    DATABASE_URL: get('DATABASE_URL').required().asUrlString()
  }
}
