const groupBy = (arr, key) => {

    if (!Array.isArray(arr)) {
        throw new Error("не передан массив");
    }
    if (typeof (key) === undefined) {
        throw new Error("не передан ключ");
    } else {
        return arr.reduce((acc, item) => {
            if (key in item) {
                (acc[item[key]] = acc[item[key]] || []).push(item);
            }
            return acc
        }, {});
    }
}

console.log(groupBy([
    {id: 1, universe: "marvel", name: "Spider Man"},
    {id: 2, universe: "marvel", name: "Iron Man"},
    {id: 3, universe: "dc", name: "Aqua Man"},
    {id: 4, universe: "dc", name: "Bat Man"},
    {id: 5, universe: "marvel", name: "Hulk"}
], "universe"))

