import app from './utils/create-server'
app.listen(3001, () =>
  console.log(`
🚀 Server ready at: http://localhost:3001`)
)
console.log(process.env.DATABASE_URL)
