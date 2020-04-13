const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("combined"));
app.disable('etag');

app.get('/auth', (request, response)=>{
  console.log(request.headers)

  let originalURI = request.headers["x-original-uri"];
  if(originalURI == '/?option=forbidden')
  {
    response.status(401).json({
      message: "Auth Service says no."
    })
  } else if (originalURI == '/?option=internalerror') {
    response.status(500).json({
      message: "Auth Service says no error"
    })
  } else {
    response.status(200).json({
      message: "Reached server successfully"
    })
  }

  
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