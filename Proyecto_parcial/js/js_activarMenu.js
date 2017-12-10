var conteo=0;
$(document).ready(function() {
    $('#itemsHorario').click(function(){
    	if ( conteo>0 ){
    		return true;
    	}else{
    		return false;
    	}
	});
	
	$('#itemsaula').click(function(){
    	if ( conteo>0 ){
    		return true;
    	}else{
    		return false;
    	} 
	});
});

function getGET()
{
    var loc = document.location.href;
    if(loc.indexOf('?')>0)
    {
        var getString = loc.split('?')[1];
        var GET = getString.split('&');
        var get = {};
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
            conteo++;
        }
        return get; 
    } 
}