const express = require('express');
const app = express();
const testRouter = require('./routes/testRouter');
const usersRouter = require('./routes/usersRouter');
const projectRouter = require('./routes/projectRouter');
const projectImageRouter = require('./routes/projectImageRouter');
const path = require('path');

// global middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.use('/api/', testRouter); // Handles GET requests to /api, sends back "API is running"
app.use('/api/about', usersRouter);
app.use('/api/jobs', usersRouter); // Handles GET request to /api/users, sends back everything in the DB users table
app.use('/api/projects', projectRouter);
app.use('/api/projectImages', projectImageRouter);

// Serve static assets if in production.
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
	});
};

module.exports = app;
