const hasDuplicate = (arr) => {
    let set = new Set(arr);
    console.log('Array:', arr);
    console.log(set);

    if (arr.length === set.size) {
        return false
    };
    return true;
}

console.log(hasDuplicate([1,2,3]))