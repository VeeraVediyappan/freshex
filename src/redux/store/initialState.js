const state = {
    userAuth: {
        loggedIn: false,
        registered: false,
        otpVerified: false,
        openRegister: false,
        openLogin:false,
        agreedTerms_conditions: false
    },
    business: {
        selectedCategory: ''
    }
};

export default state;