function easyHTTP() {
    this.http = new XMLHttpRequest();

}

// Make HTTP GET Request

easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    let self = this;

    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }


    this.http.send();


}


// Make HTTP POST Request



// Make HTTP PUT Request


// Make HTTP DELETE Request