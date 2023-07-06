function makeTimer() {
         
         			var endTime = new Date("August 10, 2018 12:00:00 PDT");			
         			var endTime = (Date.parse(endTime)) / 1000;
         
         			var now = new Date();
         			var now = (Date.parse(now) / 1000);
         
         			var timeLeft = endTime - now;
         
         			var days = Math.floor(timeLeft / 86400); 
         			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
         			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
         			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
         
         			if (hours < "10") { hours = "0" + hours; }
         			if (minutes < "10") { minutes = "0" + minutes; }
         			if (seconds < "10") { seconds = "0" + seconds; }
         
         			$("#days").html(days + "<span>Days</span>");
         			$("#hours").html(hours + "<span>Hours</span>");
         			$("#minutes").html(minutes + "<span>Minutes</span>");
         			$("#seconds").html(seconds + "<span>Seconds</span>");		
         
         	}
      
         	setInterval(function() { makeTimer(); }, 1000);
			
			
			
			function openCity(evt, cityName) {
             var i, tabcontent, tablinks;
             tabcontent = document.getElementsByClassName("tabcontent");
             for (i = 0; i < tabcontent.length; i++) {
                 tabcontent[i].style.display = "none";
             }
             tablinks = document.getElementsByClassName("tablinks");
             for (i = 0; i < tablinks.length; i++) {
                 tablinks[i].className = tablinks[i].className.replace(" active", "");
             }
             document.getElementById(cityName).style.display = "block";
             evt.currentTarget.className += " active";
         }
         
         // Get the element with id="defaultOpen" and click on it
         document.getElementById("defaultOpen").click();
		 
		 
		 
		 
		 
		 var acc = document.getElementsByClassName("accordion");
         var i;
         
         for (i = 0; i < acc.length; i++) {
           acc[i].addEventListener("click", function() {
             this.classList.toggle("active");
             var panel = this.nextElementSibling;
             if (panel.style.maxHeight){
               panel.style.maxHeight = null;
             } else {
               panel.style.maxHeight = panel.scrollHeight + "px";
             } 
           });
         }
		 
		 
		 
		 
		 
		  // Get the modal
         var modal = document.getElementById('myModal');
         
         // Get the image and insert it inside the modal - use its "alt" text as a caption
         var img = document.getElementById('myImg');
         var modalImg = document.getElementById("img01");
         var captionText = document.getElementById("caption");
         img.onclick = function(){
             modal.style.display = "block";
             modalImg.src = this.src;
             captionText.innerHTML = this.alt;
         }
         
         // Get the <span> element that closes the modal
         var span = document.getElementsByClassName("close")[0];
         
         // When the user clicks on <span> (x), close the modal
         span.onclick = function() { 
             modal.style.display = "none";
         }
			
			