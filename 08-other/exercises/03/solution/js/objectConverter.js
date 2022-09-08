// 3. Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
//    - `arrayToMap(array)`
//    - `arrayToSet(array)`
//    - `setToMap(set)`
//    - `setToArray(set)`
//    - `mapToArray(map)`
//    - `mapToSet(map)`

// A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba. 
// Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.

"use strict";

const objectConverter = {
    arrayToMap(array) {
        const arrayMap = new Map([]);
        array.forEach((value, index) => arrayMap.set(index, value));
        return arrayMap;
        
    },

    arrayToSet(array) {
        return new Set(array);
    },

    setToMap(set) {
        const setToMap = new Map([]);
        Array.from(set).forEach((value, index) => setToMap.set(index, value));
        return setToMap;
    },

    setToArray(set) {
        return Array.from(set);
    },

    mapToArray(map){
        const mapArray = [];
        map.forEach((el) => {
            mapArray.push(el);
        });
        return mapArray;
    },

    mapToSet(map) {
        const mapSet = [];
        map.forEach((value) => mapSet.push(value));
        return new Set(mapSet);
    },
};




export default objectConverter;
