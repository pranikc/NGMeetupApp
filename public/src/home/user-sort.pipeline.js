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
            var compareTwoUsers = function (person1, person2) {
                var hobbyCompare = person1.hobby.localeCompare( person2. hobby);
                if ( hobbyCompare === 0 ){
                    return person1.name.localeCompare( person2.name );
                }
                return hobbyCompare;
            };

            return list.slice().sort(compareTwoUsers);
        }
    });
}) (window.app || (window.app=={}));