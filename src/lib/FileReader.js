const fs = require('fs')

export const ReadFile = async (path) =>{
    let destructedMsgs = [] 

    await fs.readFile(path, (err, inputD) => {
        if (err) throw err;
        
        let content = inputD.toString()
        let messages = content.split('$$$')

        messages.map(m=>{
            if (m === '') return
            let msg = {
                date : m.split('&&&')[0],
                content :m.split('&&&')[1] 
            }
            console.log(msg)
            destructedMsgs.push(msg)
            
        })
        return destructedMsgs
     })
} 

export const WriteFile = (meessage) =>{

    fs.readFile('text.txt', (err, inputD) => {
        if (err) throw err;
        
        let content = inputD.toString()
        let messages = content.split('$$$')
        let destructedMsgs = [] 
    
        messages.map(m=>{
            if (m === '') return
            let msg = {
                date : m.split('&&&')[0],
                content :m.split('&&&')[1] 
            }
            destructedMsgs.push(msg)
        })
        
        console.log(destructedMsgs)
     })

} 

