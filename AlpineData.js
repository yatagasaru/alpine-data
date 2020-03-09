
class AlpineData {
    constructor(xTrigger, functionName = ''){
        this.isType('string', xTrigger, 'on parameter 1')
        this.isType('string', functionName, 'on parameter 2')
        this.xTrigger = xTrigger
        
        if(functionName !== ''){
            this.functionString = `x-on:click="${functionName}()"`
        }
        else{
            this.functionString = ''
        }
        
        $(`[x-trigger="${this.xTrigger}"]`).append(`<div class="x-trigger-click" ${this.functionString}></div>`)
    }
    set(data){
        $(`[x-trigger="${this.xTrigger}"]`).attr('data-init', JSON.stringify(data))
        $(`[x-trigger="${this.xTrigger}"] .x-trigger-click`).click()
    }
    get(){
        return JSON.parse(document.querySelector(`[x-trigger="${this.xTrigger}"]`).attributes["data-init"].value)
    }
    isType(expected, target, errMessage){
        const currType = Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
        if(currType !== expected){
            throw new TypeError(`${expected} expected. ${currType} given ${errMessage}`, '', '')
        }
    }
}