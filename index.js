$(document).ready(()=>{
    $('a').click((e)=>{
      e.preventDefault();
      console.log('i am clicked')
    })
    $('a').hover((e)=>{
      e.preventDefault();
      console.log('hover event activated')
    })
    $('a').focus((e)=>{
      e.preventDefault();
      console.log("i am in focus")
    })
    $('a').mouseover((e)=>{
      e.preventDefault();
      console.log("mouse over event ")
    })
    $('a').mouseout((e)=>{
      e.preventDefault();
      console.log("mouse out event")
    })
  })
