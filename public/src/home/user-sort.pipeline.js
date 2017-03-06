/**
 * Created by pranikchainani on 3/3/17.
 */
(function (app)
{
    app.UserSortPipe = ng.core
        .Pipe(
            {name: 'sortPipe'}
            )
        .Class({
        constructor: function () {

        },

        transform: function (list)
        {
            //if hobby is same, sort by name
            var compareTwoUsersByHobby = function (person1, person2) {
                return person1.hobby.localeCompare( person2.hobby ); //used of insorting to deterime if it comes before or after
                                                                     //if string is before, -1, 0 if same, and 1 if after
            };

            var compareTwoUsersByName = function(person1, person2) {
                return person1.name.localeCompare( person2.name );
            }

            if (compareTwoUsersByHobby() == 0)
            {
                return list.slice().sort(compareTwoUsersByName);
            }
            else {
                return list.slice().sort(compareTwoUsersByHobby);
            }
        }
    });
}) (window.app || (window.app=={}));