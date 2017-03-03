(function (app)
{
    app.HomeComponent = ng.core
        .Component({
            selector: 'homeInfo',
            templateUrl: './src/home/home.html',
            styleUrls : ['./stylesheets/title.css', './stylesheets/table.css'],
            providers: [ng.http.HTTP_PROVIDERS, app.HomeService],

        }).Class({
            constructor: [app.HomeService, function(_service){
                this.service = _service;
                this.newUser = {};
                this.usersList = [];
            }],
            enroll: function () {
                // subbscribe(What to do when a succes message is recieved, What to do when an error occurs)
                this.service.addUser(this.newUser)
                    .subscribe(this.getPeople.bind(this), this.updateError.bind(this));
            },
            getPeople: function () {
                this.service.getAllUsers()
                    .subscribe(this.updateData.bind(this), this.updateError.bind(this));
            },
            updateData: function(data){
                this.usersList = data;
                console.log(this.usersList);
            },
            updateError: function (err) {
                console.log(err);
            },
            ngOnInit: function() {
                this.getPeople();
            }

        });
}) (window.app || (window.app = {}));/**
 * Created by pranikchainani on 2/19/17.
 */
