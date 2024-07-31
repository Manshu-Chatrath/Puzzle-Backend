const db = require("../database/db");
module.exports = class puzzle {
  static info() {
    return db.execute("select * from rules");
  }
  static save(email, name, contact) {
    return db.execute("insert into info(email,name,contactno) values(?,?,?)", [
      email,
      name,
      contact,
    ]);
  }
  static update(
    img,
    ml,
    ms,
    limitation,
    firstmin,
    firstsec,
    secondmin,
    secondsec,
    thirdmin,
    thirdsec
  ) {
    return db.execute(
      "update rules SET img=(?),ml=(?),ms=(?),limitation=(?),firstmin=(?),firstsec=(?),secondmin=(?),secondsec=(?),thirdmin=(?),thirdsec=(?) where id = 1",
      [
        img,
        ml,
        ms,
        limitation,
        firstmin,
        firstsec,
        secondmin,
        secondsec,
        thirdmin,
        thirdsec,
      ]
    );
  }
};
