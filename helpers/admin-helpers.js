const async = require('hbs/lib/async');
const Connection = require('mysql/lib/Connection');
const { reject, resolve } = require('promise')
var db = require('../connection/connection')

module.exports = {

    addUser: (user) => {
        return new Promise((resolve, reject) => {
            console.log(user);
            con.query("INSERT INTO students SET name=?,dept=?,regno=?,year=? ", [this.name, this.dept, this.reg, this.year]);


        })

    },
    getAllUser: () => {
        return new Promise(async (resolve, reject) => {
            let users = await con.query('SELECT * FROM students').toArray().then((users)=>{
                resolve(users)
            })
            

        })
    },
    deleteUser: (userId) => {
        return new Promise((resolve, reject) => {
            con.query('DELETE FROM students WHERE id = ?', [userId]);
        })
    },
    getUserDetails: (userId) => {
        return new Promise(async (resolve, reject) => {
            let users = await con.query('SELECT * FROM students').toArray().then((users) => {
                resolve(users)
            })



        })

    },
    updateUser: (userId, user) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE students SET name = ?, dept= ?, regno = ?, year= ?,WHERE id = ?', [this.name, this.dept, this.reg, this.year, userId]).then((response) => {
                resolve()

            })

        })
    }

}
