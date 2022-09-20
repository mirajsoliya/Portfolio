const firebaseConfig = {
    apiKey: "AIzaSyBbcGn0nlVtVxD9jWNcISSKSZTg2CN2gC0",
    authDomain: "porfolio-5a487.firebaseapp.com",
    databaseURL: "https://porfolio-5a487-default-rtdb.firebaseio.com",
    projectId: "porfolio-5a487",
    storageBucket: "porfolio-5a487.appspot.com",
    messagingSenderId: "875537593851",
    appId: "1:875537593851:web:9c2759a209ce2781b3875e",
    measurementId: "G-DM2E9EZDTK"
  };
 //initialize firebased
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var potfolioform = firebase.database().ref('portfolio');

  document.getElementById('contactme').addEventListener("submit" , submitForm);

  function submitForm(e)
  {
    e.preventDefault();
    var name= getElementval("yourname");
    var email=getElementval("youremail");
    var subject = getElementval("yoursubject")
    var msgContent=getElementval("msg");
    saveMessage(name,email,subject,msgContent);

    //enable alert
    document.querySelector('.alert').style.display="block";
    
    //remove alert
    setTimeout(()=>{

      document.querySelector('.alert').style.display="none";

    },3000);

    //reset form

    document.getElementById('contactme').reset();


  }
  const saveMessage =(name,email,subject,msgContent)=>{

    var newSubmitform = potfolioform.push();
    newSubmitform.set({
      name:name,
      emailID : email,
      Subject : subject,
      message : msgContent,

    });


  };

  const getElementval = (id)=>{
    return document.getElementById(id).value;
  }