function register(){
    window.location.href='../templates/signin.html'
}



function login(){
    // let id = document.getElementById('')
    // let pw = document.getElementById('')
      let id = $('#userId')
      let pw = $('#userPW')

      	$.ajax({
        type : 'post',
        url : '/login',
        data : {id,pw}

	  });

}