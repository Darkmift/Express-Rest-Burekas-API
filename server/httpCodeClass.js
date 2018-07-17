var cl = console.log.bind(console);

class httpCodeClass {

    constructor() {
        //set default httpCode
        this.ResponseHttpCode = 200;
    }

    //test function to check class works in import
    sayHello(msg) {
        cl(msg);
    }

    //ResponseHttpCode manager function
    setResponseHttpCode(int) {
        this.ResponseHttpCode = int;
    }

    //ResponseHttpCode manager function
    getResponseHttpCode() {
        return this.ResponseHttpCode;
    }
};

module.exports = httpCodeClass;