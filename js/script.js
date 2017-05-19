			function show(state, clas){
					$('.'+clas).css('display', state);
					$('#wrap.'+clas).css('display', state);			
			};
$(document).ready(function() {
	$('#six img').click(function(){
		var t=$(this).attr('src');
		var k=$('#six .cc img').attr('src');
		$(this).attr('src',k);
		$('#six .cc img').attr('src',t);
			});
	$(".fancybox").fancybox();
	$('.navbar-toggle').click(function(){
		$('.navbar-collapse').toggle('slow');
	})
	$('.slick').slick({
	  infinite: true,
	  'dots':false,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	$('.slick2').slick({
	  infinite: false,
	  'dots':true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
	$('.nav a').click(function()
		{
			var id=$(this).attr('data-id');
			$('html, body').animate(
				{scrollTop:$("#"+id).offset().top+150},2000);
			return false;
		});$('.dopmenu a').click(function()
		{
			var id=$(this).attr('data-id');
			$('html, body').animate(
				{scrollTop:$("#"+id).offset().top},2000);
			return false;
		});
});
$('#form1').submit(function(e){
		e.preventDefault();
		return validate('form1');
	});$('#form11').submit(function(e){
		e.preventDefault();
		return validate('form11');
	});$('#form12').submit(function(e){
		e.preventDefault();
		return validates('form12');
	});
$('#form2').submit(function(e){
		e.preventDefault();
		return validate('form2');
	});
	$('#form3').submit(function(e){
		e.preventDefault();
		return validate('form3');
	});
	$('#form4').submit(function(e){
		e.preventDefault();
		return validate('form4');
	});
	$('#form5').submit(function(e){
		e.preventDefault();
		return validate('form5');
	});
	$('#form6').submit(function(e){
		e.preventDefault();
		return validate('form6');
	});
	$('#form7').submit(function(e){
		e.preventDefault();
		return validate('form7');
	});
	$('#form8').submit(function(e){
		e.preventDefault();
		return validate('form8');
	});$('#form9').submit(function(e){
		e.preventDefault();
		return validate('form9');
	});
function validate(name_f){
	$('#'+name_f+' .result').css('display', 'none');
	var z=$('#'+name_f+' .name').val();
	var r=$('#'+name_f+' .phone').val();
	var valid=true;
	if (z==''){
		$('#'+name_f+' .name').css('background-color', 'rgb(255, 221, 221)');
		valid=false;
	}
	else
	{
		$('#'+name_f+' .name').css('background-color', '#fff');
	}
	if (r==''){
		$('#'+name_f+' .phone').css('background-color', 'rgb(255, 221, 221)');
		valid=false;
	}
	else
	{
		$('#'+name_f+' .phone').css('background-color', '#fff');
	}
	if (valid===false){
		return false;
	}

	var msg   = $('#'+name_f).serialize();
    $.ajax({
        type: 'POST',
        url: '../senddsdreams.php',
        data: msg,
        success: function(data) {
        $('#'+name_f+' .result').css('display', 'block');
        },
        error:  function(xhr, str){
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
        });
	$('#'+name_f+' .name').css('background-color', '#fff');
	$('#'+name_f+' .phone').css('background-color', '#fff');
	$('#'+name_f).trigger( 'reset' );
}
function validates(name_f){
	$('#'+name_f+' .result').css('display', 'none');
	var z=$('#'+name_f+' .name').val();
	var r=$('#'+name_f+' .phoness').val();
	var d=$('#'+name_f+' .emails').val();
	var valid=true;
	if (z==''){
		$('#'+name_f+' .name').css('background-color', 'rgb(255, 221, 221)');
		valid=false;
	}
	else
	{
		$('#'+name_f+' .name').css('background-color', '#ff7576');
	}
		if (d==''){
		$('#'+name_f+' .emails').css('background-color', 'rgb(255, 221, 221)');
		valid=false;
	}
	else
	{
		$('#'+name_f+' .emails').css('background-color', '#ff7576');
	}
	if (r==''){
		$('#'+name_f+' .phoness').css('background-color', 'rgb(255, 221, 221)');
		valid=false;
	}
	else
	{
		$('#'+name_f+' .phoness').css('background-color', '#ff7576');
	}
	if (valid===false){
		return false;
	}

	var msg   = $('#'+name_f).serialize();
    $.ajax({
        type: 'POST',
        url: '../senddsdream.php',
        data: msg,
        success: function(data) {
        $('#'+name_f+' .result').css('display', 'block');
        },
        error:  function(xhr, str){
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
        });
	$('#'+name_f+' .name').css('background-color', '#ff7576');
	$('#'+name_f+' .phoness').css('background-color', '#ff7576');
	$('#'+name_f+' .emails').css('background-color', '#ff7576');
	$('#'+name_f).trigger( 'reset' );
}