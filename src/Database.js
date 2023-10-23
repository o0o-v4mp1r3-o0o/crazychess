import { sql } from "@vercel/postgres";

function Database() {
  console.log({
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  });
  // const result =
  //   await sql`CREATE TABLE highScores (Score int, Name varchar(255));`;
}

export default Database;
