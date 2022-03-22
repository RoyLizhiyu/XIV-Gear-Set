import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import gearRoutes from './routes/gears.js';
const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/gears', gearRoutes);


app.get('/', (req,res)=>{
    console.log('success!');
})




const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>(console.log('server up on port ' + PORT)));