function upload_receipt(){
   var file = document.getElementById('payment').files[0];
   var clientname = document.getElementById("entry.1338680096").value.split(" ").join("_");
   if(file!=null && clientname!=""){
     var storageRef = firebase.storage().ref();
     var uploadTask = storageRef.child('Client_Uploads/'+ clientname +"/"+ file.name).put(file);
     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
       function(snapshot) {}, function(error) {}, function() {
       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
         document.getElementById("entry.1876387829").value = downloadURL;

         document.getElementById('textForm').submit();
         swal("Thank you!", "Your message has been sent. Will contact you shortly", "success")
          .then((value) => {
            location.reload();
          });
       });
     });
   }
 else{alert("Please upload Payment Receipt in PDF or Image format and fill all details."); location.reload()}
}


function upload_aadhar(){
   var file = document.getElementById('aadhar').files[0];
   var clientname = document.getElementById("entry.1338680096").value.split(" ").join("_");
   if(file!=null && clientname!=""){
     var storageRef = firebase.storage().ref();
     var uploadTask = storageRef.child('Client_Uploads/'+ clientname +"/"+ file.name).put(file);

     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
       function(snapshot) {}, function(error) {}, function() {
       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
         document.getElementById("entry.56802443").value = downloadURL;
         upload_receipt()
       });
     });
   }
 else{alert("Please upload Aadhar Card in PDF or Image format and fill all details"); location.reload()}
}
