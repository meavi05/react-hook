export const deleteIngredientAction = (id) =>{
    return {
        type : 'DELETE_INGREDIENT',
        id : id
    }
}

export const addIngredientAction = (id,ingredient) =>{
    return {
        type : 'ADD_INGREDIENT',
        id : id,
        ingredient : ingredient
    }
}

export const initIngredientsAction = (receivedIngredients) =>{
    return {
        type : 'INIT_INGREDIENTS',
        receivedIngredients : receivedIngredients
    }
}
export const updateIngredientsAction = (id,receivedIngredients) =>{
    return {
        type : 'UPDATE_INGREDIENT',
        id : id,
        receivedIngredients : receivedIngredients
    }
}

export const authorizeUserSuccess = (email) => {
    return {
        type : 'AUTHORIZE_USER_SUCCESS'
    }
}
export const authorizeUserFailed = () => {
    return {
        type : 'AUTHORIZE_USER_FAILED'
    }
}
export const updateUserData = (userData) => {
    return {
        type :'UPDATE_USER_DATA',
        userData : userData
    }
}
export const  loadDataForUser = (email) => {
    return (dispatch) => {
        var url = `http://localhost:8080/getUserData/${email}`
       fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json()).then(
          responseData => {
                console.log(responseData)
                dispatch(updateUserData(responseData))
          }
        )
        .catch(error => {
            alert('Error Occurred while fetching user Data')
        })

    } 
}

export function authorizeUserAction(email,password){
   // return function(dispatch){
       return dispatch => {
       // alert('in action')
       var obj = {email:email,password:password}
       fetch('http://localhost:8080/authorizeUser', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        }).then(response =>{
            dispatch(authorizeUserSuccess())
            dispatch(loadDataForUser(email))
        }).catch(error => {
            alert(error.message)
            dispatch(authorizeUserFailed)
        })

    } 
    
}
export const addApartmentSuccess = (obj) => {
    return {
        type :'ADD_APARTMENT_SUCCESS',
        obj : obj
    }
}
export const addApartmentFailed = () => {
    return {
        type :'ADD_APARTMENT_FAILED',
    }
}
export const addApartmentAction = (values) => {

    return dispatch => {
        // alert('in action')
        var obj = values
        fetch('http://localhost:8080/addApartment', {
             method: 'POST',
             body: JSON.stringify(obj),
             headers: { 'Content-Type': 'application/json' }
         }).then(response =>response.json()).then(responseData => {
             dispatch(addApartmentSuccess(responseData))
         }).catch(error => {
             alert(error.message)
             dispatch(addApartmentFailed())
         })
 
     } 
}
export const addTenantAction = (values) => {

    return dispatch => {
        // alert('in action')
        var obj = values
        fetch('http://localhost:8080/addTenant', {
             method: 'POST',
             body: JSON.stringify(obj),
             headers: { 'Content-Type': 'application/json' }
         }).then(response =>response.json()).then(responseData => {
             dispatch(addTenantSuccess(obj))
         }).catch(error => {
             alert(error.message)
             dispatch(addTenantFailed())
         })
 
     } 
}
export const addTenantSuccess = (values) => {
    return {
        type : 'ADD_TENANT_SUCCESS',
        obj : values
    }
    
}
export const addTenantFailed = () => {
    return {
        type : 'ADD_TENANT_FAILED'
    }
    
}

export const  getAllTenants = (apartmentId) => {
    return (dispatch) => {
        var url = `http://localhost:8080/getTenants/${apartmentId}`
       fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json()).then(
          responseData => {
                console.log(responseData)
               // dispatch(updateUserData(responseData))
          }
        )
        .catch(error => {
            alert('Error Occurred while fetching user Data')
        })

    } 
}
 
    