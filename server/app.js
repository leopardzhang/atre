const express = require('express');

const app = express();

app.get('/index', function(req, res){
	var data = [
		{title: 'être par Lee', text: "La simplicité,l'artistique,et le confort,C'est la mode d'être par Lee .", img: `${__dirname}index_02.jpg`},
		{title: 'être par Lee', text: "La simplicité,l'artistique,et le confort,C'est la mode d'être par Lee .", img: `${__dirname}index_03.jpg`},
		{title: 'être par Lee', text: "La simplicité,l'artistique,et le confort,C'est la mode d'être par Lee .", img: `${__dirname}index_06.jpg`}
	]
	res.send(data);
});

app.use(express.static('./www'));

app.listen(3000);