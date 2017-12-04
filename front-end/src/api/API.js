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
    }).then(res => res.json())
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

export const getHotel = (payload) =>
    fetch(`${api}/hotel`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getHotelDetails = (payload) =>
    fetch(`${api}/hotelDetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getCarDetails = (payload) =>
    fetch(`${api}/carDetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getFlightDetails = (payload) =>
    fetch(`${api}/flightDetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const doBookHotel = (payload) =>
    fetch(`${api}/bookHotel`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const doBookFlight = (payload) =>
    fetch(`${api}/bookFlight`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const doBookCar = (payload) =>
    fetch(`${api}/bookCar`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getCar = (payload) =>
    fetch(`${api}/car`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const getFlight = (payload) =>
    fetch(`${api}/flight`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getBills = (payload) =>
    fetch(`${api}/bills/fromDate/toDate`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const doPayment = (payload) =>
    fetch(`${api}/payHotel`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const doPaymentCar = (payload) =>
    fetch(`${api}/payCar`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const doPaymentFlight = (payload) =>
    fetch(`${api}/payFlight`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
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
    fetch(`${api}/admin/hotel/addHotel`, {
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

export const updateFlight = (payload) =>
    fetch(`${api}/admin/flights/editFlight`, {
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

export const updateHotel = (payload) =>
    fetch(`${api}/admin/hotel/EditHotel`, {
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

export const updateCar = (payload) =>
    fetch(`${api}/admin/cars/editcar`, {
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

export const updateUser = (payload) =>
    fetch(`${api}/admin/users/editUser`, {
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

export const searchListingFlight = (payload) =>
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

export const searchListingHotel = (payload) =>
    fetch(`${api}/admin/hotel/fetchHotel`,{
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
export const searchListingCar = (payload) =>
    fetch(`${api}/admin/cars/fetchCar`,{
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

export const searchListingUser = (payload) =>
    fetch(`${api}/admin/users/fetchUser`,{
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


export const getDashboardDetails = (payload) =>
    fetch(`${api}/admin/dashboard`,{
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