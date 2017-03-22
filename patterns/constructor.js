var phone = function Phone(phonetype, batterylife, company) {
    this.phonetype = phonetype;
    this.batterylife = batterylife;
    this.company = company;

    this.Description = function () {
        return "Your " + this.company + " " + this.phonetype + " has " + this.batterylife;
    }
};

module.exports = phone;

var phone2 = function Phone2(phonetype, batterylife, company) {
    this.phonetype = phonetype;
    this.batterylife = batterylife;
    this.company = company;
};

module.exports = phone2;

Phone2.prototype.Description = function () {
    return "Your " + this.company + " " + this.phonetype + " has " + this.batterylife;
}