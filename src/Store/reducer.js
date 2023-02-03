const initVals = {
    added:[],
    counter:0,
    pageNum:1
}
function addFavorites(state = initVals, action){
    switch(action.type){
        case "ADD":
          return{
            ...initVals,
              counter:action.payload
           }
        case "SAVE":
            return{
                ...initVals,
                added:action.payload
            }
        case "SETPAGE":
            return{
                ...initVals,
                pageNum:action.payload
            }
        default:
            return state
    }
}
export default addFavorites;