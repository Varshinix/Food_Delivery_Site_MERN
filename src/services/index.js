import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const register = async (data) => {
    const response = await fetch(`${BACKEND_URL}/api/user/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (response.status === 200 || response.status === 400) {
        return response.json()
    }
    throw new Error('Something went wrong')
}

export const login = async (data) => {
    const response = await fetch(`${BACKEND_URL}/api/user/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (response.status === 200 || response.status === 400) {
        return response.json()
    }
    throw new Error('Something went wrong')
}

export const uploads = (imageUrl) => {
    return `${BACKEND_URL}/images/${imageUrl}`;
};


export const fetchMenuItems = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}/menu`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching menu items:", error);
        throw error;
    }
}; 


{/* export const fetchMenuItems = async () => {
    try {
        console.log("Fetching menu items from API...");
        const response = await axios.get(`http://localhost:3004/api/menu`);
        console.log("Response received:", response.data);
        return response.data; // Return the data directly

    } catch (error) {
        console.error("Error fetching menu items:", error.message);
        throw error;
    }
};



export const addCart = async (itemId, quantity = 1) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/cart/add`, {
            itemId,
            quantity,
        });
        return response.data.cart;
    } catch (error) {
        console.error('Error adding to cart:', error.message);
        throw error;
    }
};

export const fetchCart = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/cart`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart:', error.message);
        throw error;
    }
};

export const removeCartItem = async (itemId) => {
    try {
        const response = await axios.delete(`${BACKEND_URL}/api/cart/remove/${itemId}`);
        return response.data.cart;
    } catch (error) {
        console.error('Error removing item from cart:', error.message);
        throw error;
    }
}; */}





