import axios from 'axios';

const initialState = {
        name: "",
        address: "",
        city: "",
        state: "",
        zipCode: 0,
        isLoading: false,
        errors: ""
}

const CREATE_HOUSE= "CREATE_HOUSE";
const CANCEL_ADD_HOUSE = "CANCEL_ADD_HOUSE";
const GET_HOUSES = "GET_HOUSES";

function reducer(state = initialState, action) {
    switch(action.type) {
        case `${CREATE_HOUSE}_PENDING`:
            return {...state, isLoading: true};
        case `${CREATE_HOUSE}_FULFILLED`:
            return {...state, ...action.payload};
        case `${CREATE_HOUSE}_REJECTED`:
            return {...state, errors:action.payload}
        case `${CANCEL_ADD_HOUSE}_PENDING`:
            return {...state, isLoading: true};
        case `${CANCEL_ADD_HOUSE}_FULFILLED`:
            return {...state, ...action.payload};
        case `${CANCEL_ADD_HOUSE}_REJECTED`:
            return {...state, errors:action.payload}
        case `${GET_HOUSES}_PENDING`:
            return {...state, isLoading: true};
        case `${GET_HOUSES}_FULFILLED`:
            return {...state, ...action.payload};
        case `${GET_HOUSES}_REJECTED`:
            return {...state, errors:action.payload}
    }
}


export default function getHouses(){
   return {
       type: GET_HOUSES,
       payload: axios.get("http://localhost:8081/api/houses").then(response => {
           return response.data;
       }).catch(err => console.log(err))
   }
}


export function createHouse(house, history) {
    return {
        type: CREATE_HOUSE,
        payload: axios.post("http://localhost:8081/api/houses", {...houses}).then(response => {
            history.push("/dashboard");
        }).catch(err => console.log(err))
    }
}

export function cancelAddHouse(history) {
    return {
      type: CANCEL_ADD_HOUSE,
      payload: history.push("/dashboard")
    };
  }

  export default reducer;