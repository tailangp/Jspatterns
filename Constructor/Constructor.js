function Phone(phonetype, batterylife, company)
{
    this.phonetype =phonetype;
    this.batterylife = batterylife;
    this.company = company  ;
    
    this.Description = function () {
        return "Your " + this.company + " " + this.phonetype + " has " + this.batterylife;
    }
}

function Phone2(phonetype, batterylife, company)
{
    this.phonetype =phonetype;
    this.batterylife = batterylife;
    this.company = company  ;
}

Phone2.prototype.Description = function () {
        return "Your " + this.company + " " + this.phonetype + " has " +this.batterylife;
}