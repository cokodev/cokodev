const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseAlgolia = require("mongoose-algolia");
/********************************************************************
* Algolia avec bdd
*********************************************************************/
var UserSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    folders:[{folderName:String,
                folderDescription: String,
                folderStatus : String,
                folderLike : Number,
                snippets: [{snippetName:String,
                            snippetDescription: String,
                            snippetTag: String,
                            snippetContent: String,
                            date : Date,
                            languageType: String,
                            snippetLike : Number
                            }]
                }]
});

UserSchema.plugin(mongooseAlgolia, {
  appId: "R4HR5R8AAA",
  apiKey: "d41da5c59b16c82322d803d15c01f292",
  indexName: "UserAlgolia",
  selector: "_id userName folders folders._id folderName folderDescription folders.snippets folders.snippets._id folders.snippets.snippetName folders.snippets.snippetDescription",
  populate: {
    path: "owner",
    select: "name"
  },
  defaults: {
    author: "unknown"
  },
 mappings: {
    name: function(value) {
      return `${value._id} ${value.userName} ${value.folders._id} ${value.folders.folderName} ${value.folders.folderDescription} ${value.folders.snippets._id} ${value.folders.snippets.snippetName} ${value.folders.snippets.snippetDescription}`;
    }
  },
  debug: true
});

var UserModelAlgolia = mongoose.model("Users", UserSchema);

UserModelAlgolia.SyncToAlgolia();
UserModelAlgolia.SetAlgoliaSettings({
  searchableAttributes: [
    "_id",
    "userName",
    "folders._id",
    "folders.folderName",
    "folders.folderDescription",
    "folders.snippets._id",
    "folders.snippets.snippetName",
    "folders.snippets.snippetDescription",
  ]
});

module.exports = UserModelAlgolia;



//Ancien code:
/********************************************************************
* Déclaration Model User
********************************************************************
Déclaration des models
var UserSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    folders:[{folderName:String,
                folderDescription: String,
                folderStatus : String,
                folderLike : Number,
                snippets: [{snippetName:String,
                            snippetDescription: String,
                            snippetTag: String,
                            snippetContent: String,
                            date : Date,
                            languageType: String,
                            snippetLike : Number
                            }]
                }]
});
var UserModel = mongoose.model('Users', UserSchema);*/
