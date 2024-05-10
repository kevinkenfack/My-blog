const helpers = {
  // @ts-ignore
  friendlyDate: function (a) {
    var mois = [
      'Jan',
      'Fév',
      'Mar',
      'Avr',
      'Mai',
      'Juin',
      'Juil ',
      'Août',
      'Sept',
      'Oct',
      'Nov',
      'Déc',
    ];
    var jours = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    var année = a.getFullYear();
    var moisText = mois[a.getMonth()];
    var jourText = jours[a.getDay()];
    var date = a.getDate();
    var heure = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var tempsAmical = this.getTime(a);
    var temps = {
      jour: jourText,
      date: date,
      mois: moisText,
      année: année,
      heure: heure,
      min: min,
      sec: sec,
      tempsAmical: tempsAmical,
    };
    return temps;
  },
  // @ts-ignore
  getTime: function (date) {
    var heures = date.getHours();
    var minutes = date.getMinutes();
    var ampm = heures >= 12 ? 'pm' : 'am';
    heures = heures % 12;
    heures = heures ? heures : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = heures + ':' + minutes + ampm;
    return strTime;
  },
  // @ts-ignore
  stringToFriendlyDate: function (date_string) {
    const date = helpers.friendlyDate(new Date(date_string));
    const dateAmicale = `${date.date} ${date.mois} , ${date.année}`;
    return dateAmicale;
  },
};

export default helpers;
