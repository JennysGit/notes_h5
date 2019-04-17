const sessionStorage = window.sessionStorage;
const localStorage = window.localStorage;

export default {
    getSessionStorage(key: string) {
        return sessionStorage.getItem(key);
    },
    setSessionStorage(key: string, value: any) {
        sessionStorage.setItem(key, value);
    },
    removeSessionStorage(key: string) {
        sessionStorage.removeItem(key);
    },
    getLocalStorage(key: string) {
        return localStorage.getItem(key);
    },
    setLocalStorage(key: string, value: any) {
        localStorage.setItem(key, value);
    },
    removeLocalStorage(key: string) {
        localStorage.removeItem(key);
    },
};
