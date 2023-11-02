import express from 'express';
import { sampleRouter } from './routes/sample.route';
// import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;

/** Enable cors */
// app.use(
//     cors({
//         origin: [], // regex for allowed origins
//         methods: [], // allowed methods for cors requests
//         credentials: true, // allow cookies from cors requests
//     })
// );

/** Parse json encoded payloads*/
app.use(express.json());

app.use('/', sampleRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
