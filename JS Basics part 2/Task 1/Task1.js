

function Task1 () {
	var currentDate = '',
		date = new Date(),
		years = date.getFullYear(),
		dayOfTheMonth = date.getDate(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();
		
		// Всички месеци//
		switch (new Date().getMonth()) {
		   	case 0:
		        months = "Януари";
		        break;
		    case 1:
		        months = "Февруари";
		        break;
		    case 2:
		        months = "Март";
		        break;
		    case 3:
		        months = "Април";
		        break;
		    case 4:
		        months = "Май";
		        break;
		    case 5:
		        months = "Юни";
		        break;
		    case 6:
		        months = "Юли";
		        break;
		    case 7:
		        months = "Август";
		        break;
		    case 8:
		        months = "Септември";
		        break;
		    case 9:
		        months = "Октомври";
		        break;
		    case 10:
		        months = "Ноември";
		        break;
		    case  11:
		        months = "Декември";
		        break;                    
		}
		
		// Дните//
		switch (new Date().getDay()) {
		   	
		    case 1:
		        days = "Понеделник";
		        break;
		    case 2:
		        days = "Вторник";
		        break;
		    case 3:
		        days = "Сряда";
		        break;
		    case 4:
		        days = "Четвъртък";
		        break;
		    case 5:
		        days = "Петък";
		        break;
		    case 6:
		        days = "Събота";
		        break;
		    case 7: 
		    	days = "Неделя";   
		}

	
	
return currentDate;
}

Task1();