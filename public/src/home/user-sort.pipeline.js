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
            var compareTwoUsers = function (person1, person2) {
                return person1.hobby.localeCompare(person2.hobby);
            }
            return list.slice().sort(compareTwoUsers);
        }
    });
}) (window.app || (window.app=={}));