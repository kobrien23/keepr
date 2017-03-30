// LOCAL DEV VARIABLES
let env = {
	NODE_ENV: 'development',
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'keepr',
	DBPASSWORD: 'keepr123',
	DBHOST: 'ds050559.mlab.com:50559',
	DBNAME: 'keepr',
	SERVERNAME: 'dev-server'
	// DBUSERNAME: 'student',
	// DBPASSWORD: 'CodeWorksStudent',
	// DBHOST: 'ds056789.mlab.com:56789',
	// DBNAME: 'codeworks',
	// SERVERNAME: 'dev-server'
}
// mongodb://<dbuser>:<dbpassword>@ds050559.mlab.com:50559/keepr

// MAPS env TO ACTUAL ENVIRONMENT
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
})

// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env