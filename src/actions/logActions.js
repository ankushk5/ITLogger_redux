import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";



//GET LOGS FROM BACKEND

//understood version but there is one more do so 

// export const getLogs =  ()=>{
//     return async (dispatch)=>{
//         setLoading();
//         const res = await fetch("/logs");
//         const data = await res.json();


//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     } 
// }


export const getLogs =()=> async (dispatch)=>{
    try {
        setLoading();
        const res = await fetch("/logs");
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });  
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
        
    
}

export const setLoading = () =>{
    return {
        type: SET_LOADING
    };
}