// This is a simple example of a function to add an item to an array.
function addItemToArray(array: any[], item): void {
    if (array.length < 10) {
        array.push(item);
    }
}
