import { BeatNode } from './beatnode.js'
import { BeatEasings } from './beateasings.js'

class BeatValue{
    #name = 'undefined';
    #lastValue;
    #nodes = [];
    
    #sortNodes(){
        //  Sort
        this.#nodes.sort((a,b)=>{return a.time-b.time});
        this.#linkNodes();
    }

    //  Links nodes and recalculates difference values
    #linkNodes(){
        //  Redefine node chain
        for (let i=0; i<this.#nodes.length; i++){
            let node = this.#nodes[i];
            node.priorNode = i==0? null : this.#nodes[i-1];
            node.nextNode = i<this.#nodes.length-1? this.#nodes[i+1] : null;
            node.timeDifference = node.nextNode!=null? node.nextNode.time - node.time : 0;
            node.valueDifference = node.nextNode!=null? node.nextNode.value - node.value : 0;
        }
    }

    constructor(name, value = 0){
        this.#name = name;
        //  BeatValue always comes with at least one start node
        this.addNode(0, value, BeatEasings.none);
        this.#lastValue = {time: 0, value: value};
    }

    addNode(time, value=null, easing=null){
        let node = this.getNodeAtTime(time);
        if (node == null){
            time = time==undefined? 0 : time;
            value = value == null? value = this.getValueAtTime(time) : value;
            easing = easing==null? this.getNodeAtOrBeforeTime(time).easing: easing;
            let node = new BeatNode(time, value, easing);
            this.#lastValue = {time: time, value: value};
            this.#nodes.push(node);
            this.#sortNodes();
        } else {
            throw new Error(`Failed to add node. Node already exists for value ${this.#name} at time: ${time}`);
        }
        return node;
    }

    getNodeAtTime(time){
        let resultNode = null;
        this.#nodes.forEach(node => {
            if (node.time == time){
                resultNode = node;
                return;
            }
        })
        return resultNode;
    }

    getNodeAtOrBeforeTime(time){
        let resultNode = null;
        this.#nodes.forEach(node => {
            if (node.time <= time){
                resultNode = node;
            }
        })
        return resultNode;
    }

    getValueAtTime(time){
        if (this.#lastValue.time == time){
            return this.#lastValue.value;
        } else {
            let priorNode = this.getNodeAtOrBeforeTime(time);
            if (priorNode == null){
                throw new Error(`No node found for time: ${time}`);
            }

            //  quick value retrievals
            if (time == priorNode.time){
                this.#lastValue = {time:priorNode.time , value: priorNode.value};
                return this.#lastValue.value;
            }
            if (time == this.#lastValue.time){
                return this.#lastValue.value;
            }

            //  calculate the value
            let easing = priorNode.nextNode!=null? priorNode.nextNode.easing : BeatEasings.none;
            let f = easing(priorNode.timeDifference > 0? (time-priorNode.time) / priorNode.timeDifference : 0);
            let val = priorNode.value + (priorNode.valueDifference * f);
            this.#lastValue = {time:time, value: val}
            return this.#lastValue.value;           
        }
    }
}

export { BeatValue }