function signIn(){

    let id = $('#id')
    let pw = $('#pw')
    let name = $('#name')
    let hp = $('#HP')

    $.ajax({
        type : 'post',
        url : '/signin',
        data : {id,pw,name,hp}
    });

    window.location.reload()
    alert('newjeans')

}