export function titleCase(string) {
    return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

export function titleSpacing(string) {
    return string.replace("_"," ");
}