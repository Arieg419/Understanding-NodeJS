var moment = require('moment');
console.log(moment().format("ddd, hA"));

/*

NPM Versioning works as follows X.Y.Z. - Major.Minor.Patch
Patch Increment -> Some bugs were fixed, your code will work fine.
Minor Increment -> Some new features were added, your code will work fine.
Major Increment -> Big changes. Your code will maybe break.

See more at semver.org

When specifiying version for specific packages example ->

"^2.10.6" means it is okay to automatically update anything in this Major versioning.
Basically Minor and Patch updates are acceptable.

"~2.10.6" means only Path automatic updates are desired.


*/
