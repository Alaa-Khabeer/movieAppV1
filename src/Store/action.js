
export const add = (payload) =>{
    return{
        type:"ADD",
        payload
    }
}

export const save = (payload) =>{
    return{
        type:"SAVE",
        payload
    }
}

export const setPage = (payload)=>{
    return{
        type:"SETPAGE",
        payload
    }
}