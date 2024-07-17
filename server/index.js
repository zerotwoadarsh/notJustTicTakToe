import express from 'express';
import cors from 'cors';
import { StreamChat } from 'stream-chat';
import {v4 as uuid} from 'uuid';
import bcrypt from 'bcrypt';

const app = express();

const api_key = process.env.API_KEY;
const api_secret = process.env.SECRET_KEY;
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post('/signup', async (req, res) => {
    try{
    const { fullName, username, password } = req.body;
    const userId = uuid();
    const hashPassword = await bcrypt.hash(password, 10);
    const token = serverClient.token(userId);
    res.json({ userId, token,fullName, username, hashPassword });
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    
    }
});
app.post('/login', async (req, res) => {});

app.listen(`${port}`, () => {
    console.log("running on port 3001");
})