export const Getrandom = (list) =>{
    const randomIn = Math.floor(Math.random() * list.length)
    return list[randomIn]
   }