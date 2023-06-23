const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

const validate = (userData) => {
    const errors = {};
    if (!userData.email) errors.email = "Email is null";
    if (userData.email.length < 6) errors.email = "Email contain 6 characters";
    if (!regExEmail.test(userData.email)) errors.email = "Email Will be Email";
    if (!regexPassword.test(userData.password)) errors.password = "Password ... ";
    if (userData.password.length < 6)
        errors.password = "Password must contain 6 characters";
    if (!userData.password) errors.password = "Password is null";
    return errors;
};

export default validate