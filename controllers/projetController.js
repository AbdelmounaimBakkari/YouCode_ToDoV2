const { selectAllProjetsFromDataBase,
        selectProjetWhereIdFromDataBase,
        InsertNewProjectToDatabase
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

async function createProjet(req, res) {
    try {
        let body = ""
        req.on("data", (chunk) => { 
            body += chunk
        })
        req.on("end", () =>{
            let p = JSON.parse(body)
            const insertedProject = InsertNewProjectToDatabase(p)
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(JSON.stringify(p));
        })
    } catch (error) {
        console.error(error);
        res.end('Some Error');
    }
}

module.exports = {
    getAllProjets,
    getProjetById,
    createProjet
}