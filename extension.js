$(function(){
Twitch.init({clientId: '3vwgp5xx7u2g4vgaber4m8ds6anq1mz'}, function(error, status) {
    var getGameChannels = function(game){

        var streamoptions = {
            method: 'streams',
            params: {
                game : game,
                limit : 5
            }
        };

        Twitch.api(streamoptions, function(error, list){
            $('#streamer_count').html(list._total + ' streamers');

            $("#list").empty();
            _.each(list.streams, function(stream){
                var channel = '<a href="' + stream.channel.url +'" target="_blank">' + stream.channel.name + '</a>';
                var viewers = '<span> - ' + stream.viewers + '</span>' 
                
                $("#list").append($('<li>' + channel + viewers + '</li>'));
            });
        });
    };

    var games = ['Dota 2', 'League of Legends', 'World of Warcraft: Mists of Pandaria', 'Ultra Street Fighter IV'];
    
    _.each(games, function(game){
        var selectOption = $('<option value="' + game + '">' + game + '</option>');
        
        $("#select").append(selectOption);
    });

    $('#select').click(function(){
        getGameChannels($('#select').val());
    });
});
});