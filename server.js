var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
{
    var 'article-one' :
    {
        title :'Article one, Lokesh', 
        heading : `Article one`,
        date :`feb 21 2018`,
        content: `<p>
                      This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
                    </p>
                    <p>
                     this is also the same.this is also the same.this is also the same.this is also the same.this is also the same.this    is also the same.this is also the same.this is also the same.this is also the same.
                    </p>`
    },
    var 'article-two':{
    title :'Article two, Lokesh', 
    heading :'Article two',
    date :`feb 21 2018`,
    content: `<p>
                  This is the content of article two.This is the content of article two.This is the content of article two.This is the content of article two.This is the content of article two.
                  </p>
                <p>
                 this is also the same.this is also the same.this is also the same.this is also the same.this is also the same.this    is also the same.this is also the same.this is also the same.this is also the same.
                </p>`
    },
    var 'article-three':
    {
    title :'Article three, Lokesh', 
    heading :'Article two',
    date :`feb 21 2018`,
    content: `<p>
                  This is the content of article three.This is the content of article three.This is the content of article three.This is the content of article three.This is the content of article three.
                </p>
                <p>
                 this is also the same.this is also the same.this is also the same.this is also the same.this is also the same.this    is also the same.this is also the same.this is also the same.this is also the same.
                </p>`
    }
};

function createtemplate(data){
    var title =data.title;
    var date =data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmltemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="visupport" content="width-device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class='container'>
            <div>
                <a href="/">home</a>
            </div>
            <hr/>
            <h3>
             ${heading}
            </h3>
            <div>
             ${date}
            </div>
            <div>
                ${content}
        </div>
        </div>
    </body>
</html>`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function (req, res)
{
    var articlename=req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
