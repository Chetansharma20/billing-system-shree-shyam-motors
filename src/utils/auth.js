export const login = (username, password) => {
    // Simple hardcoded check
    if (username === 'SSM' && password === 'Zeliossmknd') {
        localStorage.setItem('isAuthenticated', 'true');
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('isAuthenticated');
};

export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};
