import { BeatEasings } from './beateasings.js'

class BeatNode{
    #time = 0;
    #value = 0;
    #priorNode = null;
    #nextNode = null;
    #timeDifference = 0;
    #valueDifference = 0;
    #easing = BeatEasings.none;
    constructor(time = 0, value = 0, easing = BeatEasings.none){
        this.#time = time;
        this.#value = value;
        this.#easing = easing;
    }
    get time(){
        return this.#time;
    }

    set time(value){
        this.#time = value;
    }

    get value(){
        return this.#value;
    }

    set value(value){
        this.#value = value;
    }

    get priorNode(){
        return this.#priorNode;
    }

    set priorNode(value){
        this.#priorNode = value;
    }

    get nextNode(){
        return this.#nextNode;
    }

    set nextNode(value){
        this.#nextNode = value;
    }

    get timeDifference(){
        return this.#timeDifference;
    }

    set timeDifference(value){
        this.#timeDifference = value;
    }

    get valueDifference(){
        return this.#valueDifference;
    }

    set valueDifference(value){
        this.#valueDifference = value;
    }

    get easing(){
        return this.#easing;
    }

    set easing(value){
        this.#easing = value;
    }
}

export { BeatNode }