## Getting Started

## Develope

1 - config .env

```bash
  DATABASE_URL  | MIGRATIONS  |  ENTITIES | PORT
```

2 - install dependence:

```bash
  npm install
# or
  yarn
```

3 - start server

```bash
  npm run dev
# or
  yarn dev
```

api on [http://localhost:3000](http://localhost:3000).

## Production

1 - config .env

```bash
  DATABASE_URL  | MIGRATIONS  |  ENTITIES
```

2 - install dependence:

```bash
  npm install
# or
  yarn
```

3 - generate build:

```bash
  npm run build
# or
  yarn build
```

4 - start server

```bash
  npm run start
# or
  yarn start
```

api on [http://localhost:3000](http://localhost:3000).

## Routes

# get('/')

```bash
  result json { api: 'on' }
```

# post('/user')

```bash
  create user
  body requeste { name , email}
```

# post('/article')

```bash
  create article
  body requeste { title, author, text}
```

# post('/claps')

```bash
  count claps
  body requeste {user, article}
```
