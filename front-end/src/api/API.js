const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res =>
    { return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
    
export const doSignUp = (payload) =>
fetch(`${api}/signup`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    credentials:'include',
    body: JSON.stringify(payload)
}).then(res => {
    console.log(res);
    return res;
})
    .catch(error => {
        console.log("This is error");
        return error;
    });

export const addFlight = (payload) =>
    fetch(`${api}/admin/flights/addFlight`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    })
        .then(res => {
        return res.status;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const addHotel = (payload) =>
    fetch(`${api}/admin/hotels/addHotel`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    })
        .then(res => {
            return res.status;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const addCar = (payload) =>
    fetch(`${api}/admin/cars/addCar`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    })
        .then(res => {
            return res.status;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const logout = () =>
    fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
            ...headers
        },
        credentials:'include'
    }).then(res => {
        return res.status;
        //res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const searchListing = (payload) =>
    fetch(`${api}/admin/flights/fetchFlight`,{
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });