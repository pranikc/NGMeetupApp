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
            return text + "!!!";
        }
    });
}) (window.app || (window.app=={}));