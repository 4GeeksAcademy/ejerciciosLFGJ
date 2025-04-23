
window.onload = function() {

  function excuse(arr){
    let random = Math.floor(Math.random()*arr.length);
    return random;
  };

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let quien =  who[excuse(who)];
  let cosa = action[excuse(action)];
  let que = what[excuse(what)];
  let cuando = when[excuse(when)];

  let excu = quien + " " + cosa + " " + que + " "+ cuando;

  document.getElementById("excuse").innerHTML = excu;
}
