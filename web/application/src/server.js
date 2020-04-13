const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("combined"));

app.get('/', (request, response)=>{
  response.status(200).json({
    message: "Reached server successfully"
  })
});

let server = null;


module.exports = {
	start(port) {
    server = app.listen(port, ()=>{
      console.log(`Listening on port ${port}`);
    });
		return app;
	},
	stop() {
		server.close();
	}
};