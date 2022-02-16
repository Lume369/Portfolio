const express = require('express');
const app = express();
const testRouter = require('./routes/testRouter');
const jobsRouter = require('./routes/jobsRouter');
const projectRouter = require('./routes/projectRouter');
const projectImageRouter = require('./routes/projectImageRouter');
const path = require('path');

// global middleware
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.use('/api/', testRouter); // Handles GET requests to /api, sends back "API is running"
app.use('/api/about', jobsRouter);
app.use('/api/jobs', jobsRouter); // Handles GET request to /api/users, sends back everything in the DB users table
app.use('/api/projects', projectRouter);
app.use('/api/projectImages', projectImageRouter);

// Serve static assets if in production.
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
	});
};

app.get('/*', (req, res) => {
	let url = path.join(__dirname, '../client/build', 'index.html');
	if (!url.startsWith('/app/')) // we're on local windows
	  url = url.substring(1);
	res.sendFile(url);
  });

module.exports = app;
