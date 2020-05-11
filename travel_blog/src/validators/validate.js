export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value && value.length <= maxLength) {
            return undefined;
        }
        return `Max length is ${maxLength} symbols`;
    }
}
export const requiredField = (value) => {
    if (value) {
        return undefined;
    }
    return `The field can't be empty`;
}

