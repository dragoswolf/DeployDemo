//===================================================================================================================================================
//                                                          REQUIREMENTS
//===================================================================================================================================================

const express       =require('express'),
      app           =express();


//===================================================================================================================================================
//                                                          CONFIGURATION
//===================================================================================================================================================

app,set('view-engine', 'ejs');


//===================================================================================================================================================
//                                                          ROUTES
//===================================================================================================================================================

app.get('/', (req,res)=>{
    res.render('home');
});

app.get('/about', (req, res)=>{
    res.render('about');
});


//===================================================================================================================================================
//                                                          SERVER CONFIG
//===================================================================================================================================================

app.listen(3000, 'localhost', ()=>{
    console.log('server running at port 3000.');
});