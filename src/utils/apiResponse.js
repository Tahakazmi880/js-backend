class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCodethis.data = data
        this.message = message
        this.success = statusCode < 400
    }
}