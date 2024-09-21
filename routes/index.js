const debug = require('debug')('express')
const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/getdata/:pageNumber', async (req,res)=>{
    try {
        const pageNumber = req.params.pageNumber
        const data = await fetch(`https://www.omdbapi.com/?s=Batman&page=${pageNumber}&apikey=${process.env.OMDB_API_KEY}`)
        const finalData = await data.json()
        
        // Checking the API error response
        if(finalData.Response === 'False') {
            throw new Error(finalData.Error);
        }
        
        res.status(200);
        res.json({msg: 'success', data: finalData.Search});
        
    } catch (error) {
        
        debug(error.message);
        res.status(400)
        res.json({err: error.message})

    }
})

app.get('/getMovieDetails/:id', async (req,res)=>{
    try {
        
        const data = await fetch(`https://www.omdbapi.com/?i=${req.params.id}&apikey=${process.env.OMDB_API_KEY}#`)
        const finalData = await data.json()
        
        // Checking the API error response
        if(finalData.Response === 'False') {
            throw new Error(finalData.Error);
        }
        
        res.status(200);
        res.json({msg: 'success', data: finalData});
        
    } catch (error) {
        
        debug(error.message);
        res.status(400)
        res.json({err: error.message})

    }
})

module.exports = app