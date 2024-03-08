//your JS code here. If required.
const inputs=document.querySelectorAll("input")

inputs.forEach((input,index)=>
	{
	input.addEventListener("keyup",(eventdetails)=>{
		
	 const curInput = input;
     const next = input.nextElementSibling;
     const prev = input.previousElementSibling;

	if(next && curInput.value!=="")
	{
		next.focus();
	}
		if(eventdetails.key ==="Backspace")
		{
			inputs.forEach((input,index2)=>{
				if(index<=index2 && prev)
				{
			        curInput.value="";
					prev.focus()
				}
				
			})
			
		}
	})
})
window.addEventListener("load",()=>inputs[0].focus());