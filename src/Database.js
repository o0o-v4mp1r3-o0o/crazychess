import { sql, createPool } from "@vercel/postgres";
import { postgresConnectionString } from "@vercel/postgres";
function Database() {
  // console.log({
  //   POSTGRES_URL: process.env.POSTGRES_URL,
  //   POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  //   env: process.env,
  // });
  const pool = createPool({
    connectionString: process.env.REACT_APP_POSTGRES_URL + "?sslmode=require",
  });

  //const result =
  //await pool.sql`INSERT INTO highScores (Score, Name) VALUES('2','h');`;
  // const { rows, fields } = await pool.sql`SELECT * FROM highscores;`;
  // console.log(rows);
  // console.log(fields);
  return pool;
}

export default Database;
