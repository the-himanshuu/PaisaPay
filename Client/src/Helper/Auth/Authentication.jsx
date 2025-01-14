// Function for Create Account
export const Register = async (URL, Data) => {
    try {
        const Result = await fetch(`${URL}/post/auth/create-new-account`, {method: 'POST', body: Data}); // API Call for Create Account
        const Response = await Result.json(); // Get Response
        return Response; // Return Response
    }
    catch (error) {
        console.log(error);
        return {
            status: false,
            statusCode: 507,
            Title: "Error",
            message: "Internal Server Error, Please try again later",
        }
    }
};

// Function for Login
export const Login = async (URL, Data) => {
    try {
        const Result = await fetch(`${URL}/post/auth/login-with-paisapay`, {method: 'POST', headers: {'Content-Type': 'application/json', }, body: JSON.stringify(Data)}); // API Call for Login
        const Response = await Result.json(); // Get Response
        return Response; // Return Response
    }
    catch (error) {
        console.log(error);
        return {
            status: false,
            statusCode: 507,
            Title: "Error",
            message: "Internal Server Error, Please try again later",
        }
    }
};