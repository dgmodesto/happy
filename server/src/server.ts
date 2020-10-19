import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import path from 'path';
import './database/connection';
import erroHandler from './errors/handler';
import routes from './routes';


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(erroHandler);

app.listen(3333);



/*
- GET - Buscar uma informação (Lista, item)
- POST - Criando informações
- PUT - Editando informações
- DELETE - Deletando Informações

- Query Params - http://localhost:3333/users?search=douglas
- Route Params - http://localhost:3333/users/1 (identificando um recurso)
- Body - http://localhost:3333/users (Identificar um recurso)

#MVC
- Models
- Views
- Controllers

*/