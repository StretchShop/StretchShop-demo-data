const fs = require("fs");
var path = require("path");
const MongoClient = require("mongodb").MongoClient;
const glob = require("glob");

const databaseName = "stretchshop_demo";

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

	glob(__dirname+"/json/*.json", function (error, files) {
			files.forEach(function (filename) {
				const documents = JSON.parse(fs.readFileSync(filename, "utf8"));
				let extension = path.extname(filename);
				let purename = path.basename(filename, extension);
				console.log("importing collection:", purename);	
				// if in date collection and has records
				let dateCollections = ["users", "pages"];
				if ( dateCollections.indexOf(purename) && documents && documents.length>0 ) { 
					for (let i=0; i<documents.length; i++) {
						if ( documents[i].createdAt ) { documents[i].createdAt = new Date(documents[i].createdAt); }
						if ( documents[i].lastVerifyDate ) { documents[i].lastVerifyDate = new Date(documents[i].lastVerifyDate); }
						if ( documents[i].activated ) { documents[i].activated = new Date(documents[i].activated); }
						if ( documents[i].dates ) { 
							if ( documents[i].dates.dateCreated ) { documents[i].dates.dateCreated = new Date(documents[i].dates.dateCreated); }
							if ( documents[i].dates.dateUpdated ) { documents[i].dates.dateUpdated = new Date(documents[i].dates.dateUpdated); }
							if ( documents[i].dates.dateSynced ) { documents[i].dates.dateSynced = new Date(documents[i].dates.dateSynced); }
						 }
					}
				}
				let collection = db.collection(purename);
				importer.push(collection.insertMany(documents),{w:0,ordered:false});
			});

			Promise.all(importer).then(function () {
					console.timeEnd("import");
					process.exit(0);
			});
	});
});