let username=prompt("通知数を知りたいユーザー名を入力");
async function insaneGuy(){
const a = await fetch(`https://api.scratch.mit.edu/users/${username}/messages/count`);
const b = await a.json();
  alert(username+"の通知数は"+b+"です");
}
insaneGuy();
