function mapArrayToHashByKey(array, key) {
    const targetValuesObjectKey = `_${key}s`;

    if (!Array.isArray(array)) {
        return {
            [targetValuesObjectKey]: [],
        }
    }

    const result = {};

    const resultKeys = {
        [targetValuesObjectKey]: []
    }

    const checkCurrentLevelAndGoDeep = (obj) => {
        if (obj.hasOwnProperty(key)) {
            return `${obj[key]}`
        }

        const deepObjects = Object.values(obj).filter((item) => typeof item === 'object');

        if (deepObjects.length === 0) {
            return null;
        }

        for (let i = 0; i < deepObjects.length; i++) {
            return checkCurrentLevelAndGoDeep(deepObjects[i]);
        }
    }

    array.forEach((item) => {
        const value = checkCurrentLevelAndGoDeep(item);

        if (value) {
            result[value] = item;
            resultKeys[targetValuesObjectKey].push(value);
        }
    });

    return {
        ...result,
        ...resultKeys,
    };
}

module.exports = mapArrayToHashByKey;