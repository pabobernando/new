function deleteUserGame(userGameId) {
    $.ajax({
        url: '/dashboard/user-game/delete/'+userGameId,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({userGameId}),
        type: 'DELETE',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            $("#"+userGameId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}

function deleteUserGameBio(userGameId) {
    $.ajax({
        url: '/dashboard/user-game-bio/delete/'+userGameId,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({userGameId}),
        type: 'DELETE',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            $("#"+userGameId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}