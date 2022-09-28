function pop_menu(){
    localStorage.setItem('r', '1') 
    if(localStorage.r == '1'){    
        document.getElementById('form_1_id').style.display = 'block'
        document.getElementById('form_1_1_id').style.animation = 'left 0.5s'
        setTimeout("localStorage.setItem('l', 'a')", 500) 
        setTimeout("localStorage.removeItem('r')", 500) 
        setTimeout(" document.getElementById('form_1_1_id').style.animationPlayState = 'paused'", 400)
        document.getElementById('form_1_id').style.animation = 'left_2 0.5s'
        setTimeout(" document.getElementById('form_1_id').style.animationPlayState = 'paused'", 400)
    }else{

    }
    if(localStorage.l == 'a'){ 
        document.getElementById('form_1_1_id').style.animation = 'left_1_2 0.5s'
        document.getElementById('form_1_id').style.animation = 'left_2_1 0.5s'
        setTimeout("localStorage.removeItem('l')", 500)
    }else{
        document.getElementById('form_1_id').style.display = 'block'
        document.getElementById('form_1_1_id').style.animation = 'left 0.5s'
        localStorage.setItem('r', '1')
    }
}
function auto_1(){
    localStorage.removeItem('l')
}      
document.getElementById('form_1_id').style.display = 'none'
function info_f(){
  if (document.getElementById('info_div_id').style.opacity == '0')
    document.getElementById('info_div_id').style.opacity = '1'
    else
    document.getElementById('info_div_id').style.opacity = '0';
    
    if (document.getElementById('remove_data_id').style.opacity == '0')
    document.getElementById('remove_data_id').style.opacity = '1'
    else
    document.getElementById('remove_data_id').style.opacity = '0'
}
const cost = (JSON.parse(localStorage.getItem('cost')))
const user_pass = (JSON.parse(localStorage.getItem('user_pass')))
const img_src = (JSON.parse(localStorage.getItem('url_img')))
const user = (JSON.parse(localStorage.getItem('user')))
const color = (JSON.parse(localStorage.getItem('color')))

function remove_data_f(){
    console.log(user, user_pass, img_src , cost , color)
    let length = cost.length
    let remove_1 =  cost.splice(0, length)
    let length_2 = user_pass.length
    let remove_2 = user_pass.splice(0, length_2)
    let length_3 = img_src.length
    let remove_3 = img_src.splice(0, length_3)
    let length_4 = user.length
    let remove_4 = user.splice(0, length_4)
    let length_5 = color.length
    let remove_5 =  color.splice(0, length_5)
    
    localStorage.setItem('cost', JSON.stringify(remove_1))
    localStorage.setItem('user_pass', JSON.stringify(remove_2))
    localStorage.setItem('url_img', JSON.stringify(remove_3))
    localStorage.setItem('user', JSON.stringify(remove_4))
    localStorage.setItem('color', JSON.stringify(remove_5))
    }
function reg_btn(){
    let inp_log_nick = document.getElementById('nickname_id').value
    localStorage.setItem('index_user_list',inp_log_nick)
    let inp_color = document.getElementById('color_change_id').value
    let inp_nick = document.getElementById('nickname_id').value
    const search_nick_2 = user.some(element => element == inp_nick)
    let inp_pass = document.getElementById('password_id').value
    const search_pass_2 = user_pass.some(element => element == inp_pass)
    let inp_photo = document.getElementById('photo_id').files[0].name
    document.getElementById('register_complete_p_id').innerHTML = '"' + inp_log_nick + '"' + 'add'

    if(search_nick_2 == true){
        document.getElementById('nick_busy_id').style.opacity = '1'
        document.getElementById('nickname_id').style.borderColor = 'red'
        event.preventDefault()
        return false
    }else{
    
    }
    if(search_pass_2 == true){
        document.getElementById('pass_busy_id').style.opacity = '1'
        document.getElementById('password_id').style.borderColor = 'red'
        event.preventDefault()
        return false
    }else{
    
    }

    if(search_nick_2 == false){
        document.getElementById('nick_busy_id').style.opacity = '0'
        document.getElementById('nickname_id').style.borderColor = '#41a1e1'

    }else{
    
    }
    if(search_pass_2 == false){
        document.getElementById('pass_busy_id').style.opacity = '0'
        document.getElementById('password_id').style.borderColor = '#41a1e1'
  
    }else{
    
    }
    cost.push(0)
    user.push(inp_nick)
    img_src.push(inp_photo)
    color.push(inp_color)
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('cost',JSON.stringify(cost))
    localStorage.setItem('url_img', JSON.stringify(img_src))
    localStorage.setItem('color', JSON.stringify(color))
    user_pass.push(inp_pass)
    localStorage.setItem('user_pass',JSON.stringify(user_pass))
    console.log(user)
    console.log(color)
    console.log(user_pass)
    console.log(inp_photo)
    console.log(cost)
    if(inp_photo.length <= 0){
        alert('error')
    }else{
        document.getElementById('register_complete_id').style.opacity = '1'
    }
        if(inp_nick.length <= 0){
        alert('error')
    }else{
        document.getElementById('register_complete_id').style.opacity = '1'
    }
    if(inp_color.length <= 0){
        alert('error')
        
    }else{
        document.getElementById('register_complete_id').style.opacity = '1'
    }
    if(inp_pass.length <= 0){
        alert('error')
    }else{
        document.getElementById('register_complete_id').style.opacity = '1'
    }
    if(user == true || color == true || user_pass == true){

    }else{

    }

}
function hide_alert_f(){
    document.getElementById('register_complete_id').style.opacity = '0'
}
function log_btn(){
    let inp_log_nick = document.getElementById('nickname_2_id').value
    let inp_log_pass = document.getElementById('password_2_id').value
    if(user == ''){
        
    }else{

    }
    if(inp_log_nick.length >= 0){
        document.getElementById('nickname_2_id').style.borderColor = '#41a1e1'
    }else{
    }
    if(inp_log_pass.length >= 0){
        document.getElementById('password_2_id').style.borderColor = '#41a1e1'
    }else{
    }
    if(inp_log_nick.length <= 0){
        document.getElementById('nickname_2_id').style.borderColor = 'red'
        event.preventDefault()
    }else{
    }
    if(inp_log_pass.length <= 0){
        document.getElementById('password_2_id').style.borderColor = 'red'
        event.preventDefault()
    }else{
    }

    let inp_nick = document.getElementById('nickname_2_id').value
    let inp_pass = document.getElementById('password_2_id').value
    const user_nick_get = JSON.parse(localStorage.getItem('user'))
    const user_pass_get = JSON.parse(localStorage.getItem('user_pass'))
    const user_img = JSON.parse(localStorage.getItem('url_img'))
    const user_color = JSON.parse(localStorage.getItem('color'))
    const search_nick = user_nick_get.some(element => element == inp_nick)
    const search_color = user_color.some(element => element == inp_nick)
    const search_img = user_img.some(element => element == inp_nick)
    const search_pass = user_pass_get.some(element => element == inp_pass)
    const search_img_index = user_nick_get.findIndex(element => element == inp_nick)
    const search_color_index = user_nick_get.findIndex(element => element == inp_nick)
    const search_nick_index = user_nick_get.findIndex(element => element == inp_nick)
    const search_pass_index = user_pass_get.findIndex(element => element == inp_pass)
    const search_cost_2 = user_nick_get.findIndex(element => element == inp_nick)
    let storage_color = search_color_index
    let storage_img = search_img_index
    let storage_cost = search_cost_2
    let storage_nick = search_nick_index
    localStorage.setItem('index_nick', storage_nick)
    localStorage.setItem('index_img', storage_img)
    localStorage.setItem('index_cost', storage_cost)
    localStorage.setItem('index_color', storage_color)
    console.log(search_color_index)
    console.log(search_cost_2)
    console.log(search_nick_index)
    console.log(search_pass_index)
    console.log(search_nick)
    console.log(search_pass)
    console.log(search_img_index)
    if(search_pass_index == search_nick_index){

    }else{
        document.getElementById('password_2_id').style.borderColor = 'red'
        document.getElementById('pass_wrong_id').style.opacity = '1'
        event.preventDefault()
    }
    if(search_pass == false){
        document.getElementById('password_2_id').style.borderColor = 'red'
        document.getElementById('pass_wrong_id').style.opacity = '1'
        event.preventDefault()
    }else{

    }
    if(search_pass == true){
        document.getElementById('password_2_id').style.borderColor = '#41a1e1'
        document.getElementById('pass_wrong_id').style.opacity = '0'
    }else{

    }
    if(search_nick == false){
        document.getElementById('nickname_2_id').style.borderColor = 'red'
        document.getElementById('nick_wrong_id').style.opacity = '1'
        event.preventDefault()
    }else{

    }
    if(search_nick == true){
        document.getElementById('nickname_2_id').style.borderColor = '#41a1e1'
        document.getElementById('pass_wrong_id').style.opacity = '0'
    }else{

    }
}
function auto_2(){
    const user_nick_get = JSON.parse(localStorage.getItem('user'))
    const user_get = localStorage.getItem('user')
    let user_get_2 = localStorage.getItem('index_nick')
    const user_show = [JSON.parse(user_get)]

        let index_user_in = localStorage.getItem('index_user_list')
    const search_nick_index_2 = user_nick_get.findIndex(element => element == index_user_in )
    let index = search_nick_index_2
   let index_us = localStorage.setItem('index_list', index)
    let show = '';
    for(let i = 0; i < index;  i++){
        show+= '<table><tbody><tr><td>'+ user_nick_get[i] +'</td></tr></tbody> </table>'
    }
    
    document.getElementById('info_p_2_id').innerHTML = show
    
}
function auto_3(){
    let key = localStorage.getItem('index_nick')
    const user_5 = JSON.parse(localStorage.getItem('user'))
    const user_color = JSON.parse(localStorage.getItem('color'))
    let user_show_2 = '';
    let user_show_2_1 = '';
    for (let i_2 = 0; i_2 < user_5.length; i_2++) {
        user_show_2 = user_5[key]
        user_show_2_1 = user_color[key]
    }
    document.getElementById('user_id').innerHTML = user_show_2
    document.getElementById('user_id').style.color = user_show_2_1

    let key_c = localStorage.getItem('index_cost')
    const user_6 = JSON.parse(localStorage.getItem('cost'))
    let user_show_3 = '';
    for (let i_3 = 0; i_3 < user_6.length; i_3++) {
        user_show_3 = user_6[key_c]
        
    }
   let cost =  document.getElementById('cost_id').value = user_show_3
   document.getElementById('cost_id').innerHTML = cost

    let key_i = localStorage.getItem('index_img')
    const user_7 = JSON.parse(localStorage.getItem('url_img'))
    let index_show = '';
    for (let i_img = 0; i_img < user_7.length; i_img++) {
        index_show = user_7[key_i]
        console.log(index_show)
    }
    let o = {
        '1':{
            'image_url': index_show
        }
    }
    let user_show_4 = '';
    for(let key in o){
        user_show_4+= '<img src="'+o[key].image_url+'"width= 40px >';
    }
    document.getElementById('img').innerHTML = user_show_4
}
function cost_mine(){
    let key_c_2 = localStorage.getItem('index_cost')
    const cost_2 = (JSON.parse(localStorage.getItem('cost')))
    const cost_3 = []
    let time_set = document.getElementById('time_set_id').style.display = 'block'
    let time_set_animation = document.getElementById('time_set_animation_id').style.display = 'block'
    document.getElementById('cost_mine_id').style.backgroundColor = 'rgb(172, 112, 0)'
   setTimeout("document.getElementById('cost_mine_id').style.backgroundColor = 'orange'", 710)
   setTimeout(" document.getElementById('time_set_id').style.display = 'none'", 710)
   setTimeout(" document.getElementById('time_set_animation_id').style.display = 'none'",710)
   let cost_mine =  document.getElementById('cost_id').value++
   document.getElementById('cost_id').innerHTML = cost_mine

   for (let i_4 = 0; i_4 < cost_2.length; i_4++) {
   cost_3[key_c_2] = cost_mine
}
cost_2.splice(key_c_2, 1, cost_mine)

let local_test_2 = cost_2
console.log(local_test_2)
 localStorage.setItem('cost', JSON.stringify(local_test_2))
}