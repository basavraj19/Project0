const express =require('express');

const app= express();

const {PORT} =require('./config');

const router =require('./routers');

const {serverconfig ,logger} =require('./config');

app.use(express.json());

app.use(express.urlencoded({extended :true}));

app.use('/api',router);

app.listen(serverconfig.PORT,()=>{
  console.log(`Server is up and Running on ${PORT}`); 
  logger.info('Succesfully started the server'); 
})