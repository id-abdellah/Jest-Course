/**
 * filterName function
 * [1] if no name inserted will return unknown
 * [2] if the name starts or ends with space, the space will be trimed
 * [3] if the name starts with underscore, the underscore will be trimed
 * [4] if the name start with number, all the numbers that are in the begginin of the name will be trimed
 */
function filterName(name = "unknown") {
    if (name.startsWith(" ") || name.endsWith(" ")) {
        name = name.trim();
    }
    if (name.startsWith("_")) {
        name = name.slice(1);
    }
    if (typeof +name[0] == "number") {
        let indexOfFirstLetter;
        for (let i = 0; i < name.length; i++) {
            if (isNaN(+name[i])) {
                indexOfFirstLetter = i;
                break;
            }
        }
        name = name.slice(indexOfFirstLetter);
    }
    return name;
}

module.exports = filterName;