class Celebrity {
    constructor(name, follower_count, description, country) { 
        this._name = name;
        this._follower_count = follower_count;
        this._description = description;
        this._country = country;
    }

    set Name(val) {
        this._name = val;
    }

    get Name() {
        return this._name;
    }

    set Follower_Count(val) {
        this._follower_count = val;
    }

    get Follower_Count() {
        return this._follower_count;
    }

    set Description(val) {
        this._description = val;
    }

    get Description() {
        return this._description;
    }

    set Country(val) {
        this._country = country;
    }

    get Country() {
        return this._country;
    }
}

module.exports = Celebrity;