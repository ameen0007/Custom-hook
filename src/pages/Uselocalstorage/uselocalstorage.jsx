

export const useLocalstorage = () => {
//   const [error,seterror]=useState(false)
    const Setitem =(key,value)=>{
        localStorage.setItem(key,value)
        
    }
    
    const Getitem =(key)=>{
    const item = localStorage.getItem(key)
         return item;
    }
    return {
        Setitem,
        Getitem,
    }
}