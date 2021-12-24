const { getAllProjets } = require('./controllers/projetController')
function routing(req, res){
    
const myURL = req.url.split('/');
let id = parseInt(myURL[2]);


    switch (req.method) {
        case 'GET':
            if(myURL[1] === '' && myURL.length == 2){
                res.writeHead(200, { 'Content-type': 'application/json' });
                res.end(JSON.stringify({ info: 'You Are In Index Route'}));
            }else if(myURL[1] === 'projets' && (myURL.length == 2 || myURL.length == 3 && myURL[2] == '')){
                getAllProjets(req, res);
            }else if(myURL[1] === 'projets' && Number.isInteger(id) && ((myURL.length == 3 ) || (myURL.length == 4 && myURL[3] == ''))) {
                res.writeHead(200, { 'Content-type': 'application/json' });
                res.end(JSON.stringify({ info: 'You Are In projet by Id Route.'}));
            }else if(myURL[1] === 'projets' && myURL[2] === 'tasks' && myURL.length == 3) {
                res.writeHead(200, { 'Content-type': 'application/json' });
                res.end(JSON.stringify({ info: 'You Are In tasks Route'}));
            }else{
                res.writeHead(404, { 'Content-type': 'application/json' });
                res.end(JSON.stringify({ Error: 'Route Not Found' }));
            }

            
            
            break;
    
        default:
            break;
    }




    // if(req.url === '/'){
    //     res.writeHead(200, { 'Content-type': 'application/json' });
    //     res.end(JSON.stringify({ info: 'You Are In Index Route'}));
    // }else{
    //     res.writeHead(404, { 'Content-type': 'application/json' });
    //     res.end(JSON.stringify({ message: 'Route Not Found' }));}
};

module.exports ={
    routing
};