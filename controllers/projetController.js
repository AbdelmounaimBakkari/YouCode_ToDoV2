const { selectAllProjetsFromDataBase,
        selectProjetWhereIdFromDataBase
     } = require('../models/projetModel')

async function getAllProjets(req, res) {
    try {
        const projets = await selectAllProjetsFromDataBase()
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(projets));
    } catch (error) {
        console.error(error);
        res.end('Data Not Found');
    }
} 

async function getProjetById(req, res, projectId) {
    try {
        const projet = await selectProjetWhereIdFromDataBase(projectId)
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(projet));
    } catch (error) {
        console.error(error);
        res.end('Data Not Found');
    }
}

module.exports = {
    getAllProjets,
    getProjetById
}