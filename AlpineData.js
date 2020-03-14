
class AlpineData {
    constructor(xTrigger, functionName = ''){
        this.isType('string', xTrigger, 'on parameter 1')
        this.isType('string', functionName, 'on parameter 2')
        this.xTrigger = xTrigger
  
        const xTriggerEl = document.querySelectorAll(`[x-trigger="${this.xTrigger}"]`)
        xTriggerEl.forEach(el => {
            const div = document.createElement('div')
            div.className = 'x-trigger-click'
                  
            if(functionName !== ''){
                div.setAttribute('x-on:click', functionName)
            }
            
            el.appendChild(div)
        })
    }
    set(data){
        const xTriggerElData = document.querySelectorAll(`[x-trigger="${this.xTrigger}"]`)
        xTriggerElData.forEach(el => el.setAttribute('data-init', JSON.stringify(data)))

        const xTriggerElClick = document.querySelectorAll(`[x-trigger="${this.xTrigger}"] .x-trigger-click`)
        xTriggerElClick.forEach(el => el.click())
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