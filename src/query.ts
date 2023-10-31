import { neon } from '@neondatabase/serverless';

export default function query (databaseUrl: string, embedding: number[]) {
  const sql = neon(databaseUrl);
  console.log(JSON.stringify(embedding))
  
  return sql`SELECT id, url FROM documents ORDER BY embedding <=> ${JSON.stringify(embedding)} LIMIT 5;`;
}
