  function sendMail()
  {
    var params = {
      name:document.getElementById('yourname').value,
      email:document.getElementById('youremail').value,
      message:document.getElementById('msg').value,

    };


    const serviceId = "service_4cr1wtq";
  const templateId="template_zhn5nnr";

  emailjs.send(serviceId,templateId,params)
  .then(
    res=>{
      document.getElementById("yourname").value="";
      document.getElementById("youremail").value="";
      document.getElementById("msg").value="";
      console.log(res);
      swal("Done", "Message sent successfully!!", "success");
    }).catch(
    err=>console.log(err));


  }

  