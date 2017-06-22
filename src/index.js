const fs = require('fs');
const uidNumber = require('uid-number');

module.exports = (path, user, group) =>
  new Promise((resolve, reject) => {
    uidNumber(user, group, (err, uid, gid) => {
      if(err) return reject(err);

      fs.chown(path, uid, gid, err => {
        if(err) return reject(err);
        else resolve();
      });
    });
  });
