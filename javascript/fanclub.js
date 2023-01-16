// 다른 함수에서 사용하고 싶은 변수들
let name = $('#floatingInput').val() 
let comment = $('#floatingTextarea').val()
let commentcnt = 0;

function delete_comment(cardNumber){
    const delete_card = $(`#cardBox-${cardNumber}`)
    delete_card.remove();
}

// init();


function updateInput(){
    const name = $('#floatingInput').val() 
    const comment = $('#floatingTextarea').val()
    const url =$('#url').val()
    return {name,comment,url}
}
function plus_comment(){

        const {name,comment,url} = updateInput();

      	$.ajax({
        type : 'post',
        url : '/fanclub',
        data : {name,comment,url}
	  });

}





// // const list = 
// // [{
// //     name:'김명주',
// //     comment:'새 앨범 기대합니다'
    
// // }]
// function init(){
//     // 디비에서 있는 리스트 불러오기
//     for(i = 0; i<list.length; i++){
//         let temp_html =
//          `<div class="card" id="cardBox-${i}">
// <div class="card-body">
// <blockquote class="blockquote mb-0">
//     <p>${list[i].comment}</p>
//     <footer class="blockquote-footer">${list[i].name} </footer>
//     <button type="button" class="btn btn-dark" onclick="delete_comment(${i})">삭제</button>
// </blockquote>

// </div>
// </div>`;
//     $('#cardArea').append(temp_html)
//     commentcnt++;
//     }
// }


// function add_comment() {
//     commentcnt = commentcnt+1;
//     const {name, comment} = updateInput();
//     list.push({name, comment})// 디비에 집어넣는 포인트
//     console.log(list)
       
    
//     }

// function show_comment(){   
   
//     $.ajax({
//         type : 'GET',
//         url : '/fanclub',
//         data: {},
//         success: function(response){
//             console.log(response)
//     //         let temp_html = `<div class="card" id="cardBox-${commentcnt}">
//     //   <div class="card-body">
//     //   <blockquote class="blockquote mb-0">
//     //       <p>${comment}</p>
//     //       <footer class="blockquote-footer">${name} </footer>
//     //       <button type="button" class="btn btn-dark" onclick="delete_comment(${commentcnt})">삭제</button>
//     //   </blockquote>
      
//     //   </div>
//     //   </div>`
//     //       if(name == ""  || comment == ""){
//     //           alert("닉네임과 내용을 정확히 입력해주세요")
              
//     //       }else{
//     //           $('#cardArea').append(temp_html)
//     //       }
//         }
// 	  });
      
      
// }



// show_comment();



