function register(){
    let userID = $('#id').val()
    let userPW = $('#pw').val()
    let userName = $('#name').val()
    let userHP = $('#HP').val()
    // let register_data={};
     console.log(userID, userPW, userName, userHP)
    // register_data.ID_give = userID
    // register_data.PW_give = userPW
    // register_data.name_give = userName
    // register_data.HP_give = userHP
    // console.log(userID, userPW, userName, userHP)

    // let json_register_data =JSON.stringify(register_data)
//     $.ajax({
//         type:"POST",
//         url:"/register",
//         data:json_register_data,
//         contentType:"application/json; charset=utf-8",
//         error: function(error){
//             console.log('에러')
//         },
//         success: function (response) {
//             alert("회원가입을 축하드립니다!")
//         }
//     })
}

function goback(){
    window.location.href='../templates/login.html'
}