var moongoose = require('mongoose')


const dbConnect = (mongourl) =>{
    return moongoose.connect(mongourl, {
        useNewUrlParser:true
    })
}


module.exports = dbConnect