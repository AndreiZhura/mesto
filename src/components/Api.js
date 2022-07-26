fetch('https://mesto.nomoreparties.co/v1/cohort-46/cards', {
        headers: {
            authorization: 'b1806163-4516-40f3-8e2a-a44c941a51c0'
        }
    })
    .then(res => res.json())
    .then((result) => {
        console.log(result);
    });