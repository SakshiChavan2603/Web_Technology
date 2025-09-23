// 2) create array like todo as shown in lecture  say todos
  
// 	display array data depends on path param 

// 	<url>/todos  --  display data in json format 

// 	<url>/todos/<id> -- display specific id data on web page 

const http = require('http');
const { URL } = require('url');

// In-memory data store
let todos = [
    { id: 1, task: 'Read Carefully' },
    { id: 2, task: 'Implement' }
];

const server = http.createServer((request, res) => {
    const { method, url } = request;
    const parsedUrl = new URL(url, `http://${request.headers.host}`);
    const pathname = parsedUrl.pathname;

    // Route: GET /todos
    if (method === 'GET' && pathname === '/todos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
    }

    // Route: GET /todos/:id
    else if (method === 'GET' && pathname.startsWith('/todos/')) {
        // Extract ID from URL
        const parts = pathname.split('/');
        const id = parseInt(parts[2]);

        const todo = todos.find(t => t.id === id);

        if (todo) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Todo Task: ${todo.task}</h1>`);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Todo not found</h1>');
        }
    }

    // Handle invalid routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
