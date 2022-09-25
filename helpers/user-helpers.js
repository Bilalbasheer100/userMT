const async = require('hbs/lib/async');
const Connection = require('mysql/lib/Connection');
const { reject, resolve } = require('promise')
var db = require('../connection/connection')

module.exports={

    getAllUser: () => {
        return new Promise(async (resolve, reject) => {
            let users = await con.query('SELECT * FROM students').toArray().then(()=>{
                resolve(users)
            })
            

        })
    }

}