module.exports = {
  type: 'postgres',
  // host: 'postgres',
  // port: 5432,
  // username: 'postgres',
  // password: '123321',
  // database: 'postgres',
  url:process.env.DATABASE_URL,
  synchronize: false,
  logging:false,
  entities: [process.env.ENTITIES],
  migrations: [process.env.MIGEATIONS],
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
