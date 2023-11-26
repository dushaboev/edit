export const getStore = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
}
export const getUser = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : false;
}