var nodemailer = require('nodemailer');
 var  transporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
       user:'thiresh1212@gmail.com',
       pass :'*******7'
    }

 })
 var options ={
    from :'thiresh@gmail.com',
    to : 'reddyprasad@gmail.com',
    subject:'testing mail',
    text:'hello how are you '
 }
  transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('mail sent sucessfully'+info.response)
    }
  })