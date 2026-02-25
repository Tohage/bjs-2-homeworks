function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, item, index, array) => {
        acc += item;
        if (index === array.length - 1) {
            return acc / array.length;
        }
        return acc;
    }, 0);
    
  return result;
}