(function (app)
{
    app.HomeComponent = ng.core
        .Component({
            selector: 'homeInfo',
            templateUrl: './src/home/home.html',
            styleUrls : ['./stylesheets/title.css', './stylesheets/table.css'],
            providers: [ng.http.HTTP_PROVIDERS, app.HomeService],
            pipes: [app.UserSortPipe]
        }).Class({
            constructor: [app.HomeService, function(_service){
                this.service = _service;
                this.newUser = {};
                this.usersList = [];
                this.hobbiesList = []; // Create a Mock list containing a list of random hobbies.
            }],
            enroll: function () {
                // subbscribe(What to do when a succes message is recieved, What to do when an error occurs)
                console.log(this.newUser);
                this.newUser.hobby = this.newUser.hobby.trim().toLowerCase();
                this.service.addUser(this.newUser)
                    .subscribe(this.getHobbies.bind(this), this.updateError.bind(this));
                this.getUsersForHobby();
            },
            getUsersForHobby: function() {
                this.service.getAllUsers()
                    .subscribe(this.updateDataWithFilter.bind(this), this.updateError.bind(this));
            },
            getPeople: function () {
                this.service.getAllUsers()
                    .subscribe(this.updateData.bind(this), this.updateError.bind(this));
            },
            getHobbies: function() {
                this.service.getHobbies()
                    .subscribe(this.updateHobbies.bind(this), this.updateError.bind(this));
            },
            updateData: function(data){
                this.usersList = data;
            },
            updateDataWithFilter: function(data){
                var selectedValue = document.getElementById("selectionChoice");
                this.usersList = data.filter(user => selectedValue.value === user.hobby);
            },
            updateHobbies: function(data){
                this.hobbiesList = data;
            },
            updateError: function (err) {
                console.log(err);
            },
            ngOnInit: function() {
                this.getHobbies();
            }

        });
}) (window.app || (window.app = {}));/**
 * Created by pranikchainani on 2/19/17.
 */
