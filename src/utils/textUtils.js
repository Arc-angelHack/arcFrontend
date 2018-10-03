const capitalize = text => {
    const result = text.slice(1);
    const firstLetter = text[0].toUpperCase();
    return firstLetter + result;
}

export { capitalize };