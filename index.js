import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

const root = { friend: () => {
    return {
        "id" : 1993,
        "firstName": 'Hellomama',
        "lastName": 'Adam',
        "gender": 'Male',
        "language": "English",
        "email": "Hellomama93@gmail.com"
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));