
if(window.SimpleSlide){
	new SimpleSlide({
	  slide: "quote", // nome do atributo data-slide="principal"
	  time: 5000, // tempo de transição dos slides
	  pauseOnHover: true // pausa a transição automática
	});

	new SimpleSlide({
	  slide: "portfolio",
	  time: 5000, 
	  nav: true,
	  pauseOnHover: true // pausa a transição automática
	});
}

if(window.SimpleAnime){
	new SimpleAnime();
}

if(window.SimpleForm) {
	new SimpleForm ({
	  form :  " .formphp " , // seleciona o formulário 
	  button :  " #enviar " , // seleciona o botão 
	  erro :  " <div id = 'form-erro'><h2>Erro no Envio!</h2> <p> Um erro ocorreu, tente para o e-mail contato @ bikcraft.com. </p> </div> " , // mensagem de erro de 
	  sucesso :  " <div id = 'form-sucesso'> <h2> Formulário enviado com sucesso </h2> <p> Em breve eu entro em contato com você. </p> </div> " , // mensagem de sucesso 
	});
}