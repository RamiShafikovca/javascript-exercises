const findTheOldest = function(people) {

    people.sort((a, b) => {
        if (a.yearOfDeath && b.yearOfDeath) return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1;
        if (a.yearOfDeath) return a.yearOfDeath - a.yearOfBirth > 2022 - b.yearOfBirth ? 1 : -1;
        else return 2022 - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1;
    });
    return people[people.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
