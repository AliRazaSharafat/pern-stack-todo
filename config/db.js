import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  database: "perntodo",
  port: 5432,
});
