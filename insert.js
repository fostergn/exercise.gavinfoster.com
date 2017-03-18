var cassandra = require('cassandra-driver');
var async = require('async');

var Uuid = cassandra.types.Uuid;
const id = Uuid.random();

//Connect to cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1:9042'], keyspace: 'test'});

client.execute(`INSERT INTO test.users (id, name) VALUES (${id}, 'Uncle')`, function(err,result){
    if(!err) {
        console.log(result)
    } else { 
        console.log('err', err)
    }
})