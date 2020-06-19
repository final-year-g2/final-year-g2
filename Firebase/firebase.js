firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		path = window.location.pathname.split("/")
		path = path[path.length-1]
		if(path != "login.html"){
			document.getElementById("login_block").innerHTML =`
				<img src="img/signin_color.png" class="sign-in">
				<a href="myaccount.html" target="_blank" onMouseOver="this.style.color='#FFF'" onMouseOut="this.style.color='#000'">My Account</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a onMouseOver="this.style.color='#FFF'" onMouseOut="this.style.color='#000'" onclick="logout_function()">Log Out</a>
				`;
		}
	}
	else{
		document.getElementById("login_block").innerHTML =`
			<img src="img/signin_color.png" class="sign-in">
			<a href="login.html" target="_blank" onMouseOver="this.style.color='#FFF'" onMouseOut="this.style.color='#000'" id="login_button">Log In / Sign up</a>
			`;
	}
});

// <!--===============================================================================================-->

function login_function(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	console.log(email, password);

	firebase.auth().signInWithEmailAndPassword(email, password).then(
			function(user){window.close()},
			function(error) {
			// Handle Errors here.
			var errorMessage = error.message;
			confirm(errorMessage);
			location.reload();}
	);
}

// <!--===============================================================================================-->

function logout_function(){
		var ans = confirm("Do you want to Sign Out?");
		if(ans){firebase.auth().signOut();}
}

// <!--===============================================================================================-->


function new_account(){
	var name = document.getElementById("s_name").value;
	var email = document.getElementById("s_email").value;
	var password1 = document.getElementById("s_password1").value;
	var password2 = document.getElementById("s_password2").value;
	if (password1 != password2) {
      window.alert("\nPassword did not match: Please try again...")
      return false; }

	firebase.auth().createUserWithEmailAndPassword(email, password1).then(function(user) {
			first_login(name);
	}, function(error) {
	    var errorMessage = error.message;
			alert(errorMessage);
			location.reload()
	});

}

function first_login(name){
	var user = firebase.auth().currentUser;
	var userId = user.uid;
	var email = user.email;

	firebase.database().ref('Users/' + userId).set({
		Email:email,
		Name:name,
		Orders:"0",
		OrderID:"0"
  }, function(error) {
    if (error) {
			alert(error);
			location.reload();
		} else {
			var ans = confirm("Hello, "+name+" you're successfully registered!");
			if(ans){window.close();}
    }
  });
}


// <!--===============================================================================================-->

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function writeTransData(vendor, date, amt, category){
  firebase.database().ref('Bills/shadrak/1007').set({
		Amount: amt,
		Category: category,
    Vendor: vendor,
    Date: date
  }, function(error) {
    if (error) {
      alert("The write failed..."+error);
    } else {
      alert("Data saved successfully!");
    }
  });
 // window.close();
}

 // function DeleteByID(id){
	//  r = confirm("Do you want to delete "+id+"?");
	//  if(r==1){alert("Deleted "+id);}
 // }

function DeleteByID(id) {
	var user = firebase.auth().currentUser;
	r = confirm("Do you want to delete "+id+"?");
  if(r==1){
		console.log(id);
		firebase.database().ref('Bills/' + user.uid +'/'+ id).remove();
		document.getElementById(id).style.display="none";}
}
// <!--===============================================================================================-->

function dummy(){
	window.alert("I'm called");
}
