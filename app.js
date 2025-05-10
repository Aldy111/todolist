const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const todoRoutes = require('./routes/todo.routes');
const groupRoutes = require('./routes/group.routes');
const tagRoutes = require('./routes/tag.routes');

app.use('/api/todos', todoRoutes)
app.use('/api/groups', groupRoutes);
app.use('/api/tags', tagRoutes);

app.get('/', (req, res) => {
  res.send('Server backend berjalan!');
});

const PORT = 3001;
app.listen(PORT, ()=> {
    console.log(`server running http://localhost:${PORT}`)
})