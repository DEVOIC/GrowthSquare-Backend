import statusCodeUtility from "./statusCodeUtility.js"

const ResponseHandler = (statusCode=statusCodeUtility.Success, message = "Request Completed Successfully", data=null, response)=>{
    return response.status(statusCode).send({
        message,
        data
    });
}

export const ResponseRedirectHandler = (statusCode, URI, response) => {
    // Set the Access-Control-Allow-Origin header
    response.set("Access-Control-Allow-Origin", "http://localhost7000");
    // Redirect to the specified URI with the given status code
    return response.redirect(statusCode, URI);
};

export default ResponseHandler