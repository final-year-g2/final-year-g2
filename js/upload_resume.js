function upload_resume(){

  swal("Please Wait!", "Uploading Resume...", "info", {buttons:false, closeOnClickOutside: false});

   var file = document.getElementById('resume').files[0];
   var clientname = document.getElementById("entry.1894035497").value.split(" ").join("_");
   if(file!=null && clientname!=""){
     var storageRef = firebase.storage().ref();
     var uploadTask = storageRef.child('Resume/'+ clientname +"/"+ file.name).put(file);
     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
       function(snapshot) {}, function(error) {}, function() {
       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
         document.getElementById("entry.227423126").value = downloadURL;

         document.getElementById('textForm').submit();
         swal("Thank you!", "Your message has been sent. Will contact you shortly", "success")
          .then((value) => {
            location.reload();
          });
       });
     });
   }
 else{alert("Please upload Resume in PDF and fill all details."); location.reload()}
}
