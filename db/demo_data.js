const fs = require("fs");
var path = require("path");
const MongoClient = require("mongodb").MongoClient;
const glob = require("glob");

const databaseName = "stretchshop3";

// const url = "mongodb://user:pwd@localhost:27017/"+ databaseName +"?authMechanism=DEFAULT&authSource=admin";
const url = "mongodb://localhost:27017/"+ databaseName +"";

console.time("import");

MongoClient.connect(url, function(err, database) {
	if (err) {
		console.log("Connection error:", err);
		return;
	}

	const db = database.db(databaseName);

	let importer = [];

	glob("./json/*.json", function (error, files) {
			files.forEach(function (filename) {
				const documents = JSON.parse(fs.readFileSync(filename, "utf8"));
				let extension = path.extname(filename);
				let purename = path.basename(filename, extension);
				console.log("importing collection:", purename);	
				let collection = db.collection(purename);
				importer.push(collection.insertMany(documents),{w:0,ordered:false});
			});

			Promise.all(importer).then(function () {
					console.timeEnd("import");
					process.exit(0);
			});
	});
});