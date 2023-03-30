const choice = (items) => {
    const randIdx = Math.floor(Math.random() * items.length)
    return items[randIdx]
}

const remove = (items, item) => {
    for (let i = 0; i < items.length; i++){
        if (items[i] === item){
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
    for (let fruit in items){
        if (fruit === item){
            items.remove(fruit);
            return item;
        } else {
            return undefined;
        }
    }
}

export { choice, remove };