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

        transform: function (text)
        {
            return text.hobby.sort();
        }
    });
}) (window.app || (window.app=={}));