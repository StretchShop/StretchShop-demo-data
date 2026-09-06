const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");
const { globSync } = require("glob");

const DEFAULT_DB = "stretchshop_demo";
const DEFAULT_URI = `mongodb://localhost:27017/${DEFAULT_DB}`;

/**
 * Resolve MongoDB connection URI.
 * Priority: MONGO_URI env → argv user/pwd → default localhost.
 * Usage: node demo_data.js [user pwd]
 */
function resolveMongoUri() {
	if (process.env.MONGO_URI) {
		return process.env.MONGO_URI;
	}

	const args = process.argv.slice(2);
	if (args.length === 2) {
		const [user, pwd] = args;
		return `mongodb://${encodeURIComponent(user)}:${encodeURIComponent(pwd)}@localhost:27017/${DEFAULT_DB}?authMechanism=DEFAULT&authSource=admin`;
	}

	return DEFAULT_URI;
}

function convertDates(doc) {
	const dateKeys = ["createdAt", "lastVerifyDate", "activated"];
	for (const key of dateKeys) {
		if (doc[key]) {
			doc[key] = new Date(doc[key]);
		}
	}

	if (doc.dates && typeof doc.dates === "object") {
		for (const [key, value] of Object.entries(doc.dates)) {
			if (value) {
				doc.dates[key] = new Date(value);
			}
		}
	}

	return doc;
}

async function importCollection(db, filename) {
	const documents = JSON.parse(fs.readFileSync(filename, "utf8"));
	if (!Array.isArray(documents) || documents.length === 0) {
		console.log(`skipping empty file: ${path.basename(filename)}`);
		return;
	}

	const collectionName = path.basename(filename, path.extname(filename));
	console.log(`importing collection: ${collectionName} (${documents.length} docs)`);

	const prepared = documents.map((doc) => convertDates({ ...doc }));

	const collection = db.collection(collectionName);
	await collection.deleteMany({});
	await collection.insertMany(prepared, { ordered: false });
}

async function main() {
	const url = resolveMongoUri();
	console.time("import");

	const client = new MongoClient(url);
	try {
		await client.connect();
		const db = client.db();

		const files = globSync(path.join(__dirname, "json", "*.json")).sort();
		if (files.length === 0) {
			throw new Error("No JSON seed files found in db/json/");
		}

		for (const filename of files) {
			await importCollection(db, filename);
		}

		console.timeEnd("import");
	} finally {
		await client.close();
	}
}

main().catch((err) => {
	console.error("Import failed:", err);
	process.exit(1);
});
