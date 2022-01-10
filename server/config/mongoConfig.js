const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, mongos: { ssl: true, sslValidate: false }, useUnifiedTopology: true});

exports.mongoose = mongoose;