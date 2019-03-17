export function getPropertyByName(properties, propName) {
    return properties.find(prop => prop.internalName === propName);
}

export function getPropertyValue(properties, propName) {
    const property = getPropertyByName(properties, propName);
    return property ? property.value : '';
}