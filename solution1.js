let army1 = {};
let army2 = {};
//loop trough each values in object and attempt to divide
for (key in this.army) {
    army1[key] = this.army[key] / 2;
    army2[key] = this.army[key] / 2;
}

this.armies = [army1, army2];