alert("Welcome to our website");
while(1){
	var dec=prompt("would you like to use our app\nfor yes:y and for no:n");
if(dec=="y"){
	var arr;
	var len;
	var x=prompt("What would you like to do: add, display, remove or quit");
	if(x=="add")
	{
		len=arr.length;
		var n=prompt("Enter the value to add");
		arr[len]=n;
		arr[len+1]="/0";
	}
	else if(x=="display"){
		console.log(arr);
	}
	else if(x=="remove"){
		var r=prompt("enter the value to remove");
		var len=arr.length
		for(var i=0;i<len;i++){
			if(arr[i]==r)
			{
				delete(arr[i]);
				while(i<len-1){
					arr[i]=arr[i+1];
				}
			}
			else{
				console.log("not found");
			}
		}	
	}
	else{
		alert("thank you for using this app");
		exit(0);
	}  
}
}
