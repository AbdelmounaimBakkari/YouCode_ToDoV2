const { selectAllProjetsFromDataBase } = require('../models/projetModel')

async function getAllProjets(req, res) {
    try {
        const projets = await selectAllProjetsFromDataBase()
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(projets));
    } catch (error) {
        console.error(error);
        res.end('Route Not Found');
    }
} 

module.exports = {
    getAllProjets
}