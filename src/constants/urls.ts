import { getCookie } from "cookies-next";

export const urls = {
    baseUrl:'http://localhost:5000',
    // frontEnd: 'http://localhost:3000',
    //baseUrl:'https://api.rentlord.rentals',
    frontEnd: 'https://app.rentlord.rentals',
}

export const authHeader = {
    Authorization: `Bear ${getCookie('accessToken')}`
}

export const refreshHeader = {
    Authorization: `Bear ${getCookie('refreshToken')}`
}