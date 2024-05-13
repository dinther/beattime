import { BeatValue } from './beatvalue.js'

class BeatTime {
    #timeCursor = 0;
    #beatValues = [];

    constructor(){

    }

    addValue(name, value){
        let beatValue = new BeatValue(name, value);
        this.#beatValues.push(beatValue);
        return beatValue; 
    }


}

export { BeatTime }
