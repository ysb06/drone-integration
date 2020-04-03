const express = require('express');
const path = require('path');
const createError = require('http-errors');

const app = express();

var dataRouter = require('./routes/data');

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, '../react-frontend/build')));

// Initialize
app.use('/data', dataRouter);

//Todo: Error 핸들링 구축하기, render가 필요 없는 것 같음
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    throw new createError.NotFound();
});

// error handler 여기서 랜더링 페이지 대신 에러 respond를 주는 방법 연구
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



// An api endpoint that returns a short list of items
app.get('/test/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});


// Start and listen server
const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);