const express = require('express');
const path = require('path');
const app = express();
const appStatic = path.join(__dirname,'/dist/oba-apps');
app.use(express.static(appStatic));
app.get('/*',(req,res) => res.sendFile(appStatic + '/index.html'));
app.listen(process.env.PORT || 8080);