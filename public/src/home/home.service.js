(function(app){
    app.HomeService = ng.core.Class({
        constructor: [ng.http.Http, function(_http){
            this.http = _http;
        }],

        addUser: function(data){
            var options = {headers: new ng.http.Headers({'Content-Type': 'application/json'})};
            return this.http.post('/people', JSON.stringify(data), options);
        },

        getAllUsers: function(){
            return this.http.get('/people')
                            .map(this.extractData);
        },

        getHobbies: function(){
            return this.http.get('/people/hobbies')
                            .map(this.extractData);
        },

        extractData: function (response) {
            if(response.status === 200){
                return response.json();
            } else
                throw new Error('Error Getting the data');
        }


    })
}) (window.app || (window.app={}));
