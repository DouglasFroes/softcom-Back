module.exports = {
  type: 'postgres',
  // host: 'postgres',
  // port: 5432,
  // username: 'postgres',
  // password: '123321',
  // database: 'postgres',
  url:
    'postgres://jyvpisgwelgcxf:0ed80eed4effe32dcf7734301d78e0c164a5e182597174e422ff605b2ac4fd15@ec2-54-237-143-127.compute-1.amazonaws.com:5432/dabd6dvvnlejfd?ssl=no-verify',
  synchronize: false,
  logging: true,
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/entities/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
