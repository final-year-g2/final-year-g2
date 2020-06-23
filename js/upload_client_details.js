function upload_receipt(){

  swal("Please Wait!", "Uploading Payment Receipt...", "info", {buttons:false, closeOnClickOutside: false});

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

  swal("Please Wait!", "Uploading Aadhar Card...", "info", {buttons:false, closeOnClickOutside: false});

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


function form_validation(){

  swal("Please Wait!", "Verifying Details...", "info", {buttons:false, closeOnClickOutside: false});

  id_list = ["entry.1338680096","entry.887837918", "entry.908527243", "entry.1512288643", "entry.336357637", "entry.210865936", "entry.2129207113", "entry.871169116", "entry.1323477373", "entry.2126663962", "entry.1510962497", "entry.1367477446", "entry.56802443", "entry.1876387829"]

  var i;
  for (i = 0; i < id_list.length; i++) {
    if(document.getElementById(id_list[i]).value == ""){swal("Feild Empty", "Please Fill all details.", "error"); return false;}
  }

  if(i==id_list.length){upload_aadhar();}
}