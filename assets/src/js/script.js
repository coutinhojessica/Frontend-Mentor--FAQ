

const mediaQuery = window.matchMedia('(min-width: 800px)');


        if (mediaQuery.matches) {
             // Deixar como está
               
        }else{
              const imgBox = document.querySelector('.img-box');
              imgBox.parentNode.removeChild(imgBox);

        };




        const questionImg = document.querySelectorAll('.question-img');



questionImg.forEach((questionImg, keys) => {
        questionImg.addEventListener('click', () => {   
              

                const h2 = document.querySelectorAll('h2');
                const img = document.querySelectorAll('.imgArrow');
                const answer = document.querySelectorAll('.answer');
                const aviso = document.querySelectorAll('.aviso');
                
                

                
                                
               

                  if(keys === 0 ) {
                       if(answer.item(0).classList.contains('hideAnswer') && answer.item(1).classList.contains('hideAnswer') && answer.item(2).classList.contains('hideAnswer') && answer.item(3).classList.contains('hideAnswer') && answer.item(4).classList.contains('hideAnswer')){
                                answer.item(0).classList.remove('hideAnswer');
                                answer.item(0).classList.add('active'); 

                                         if(answer.item(0).classList.contains('active') && answer.item(1).classList.contains('hideAnswer') && answer.item(2).classList.contains('hideAnswer') && answer.item(3).classList.contains('hideAnswer') && answer.item(4).classList.contains('hideAnswer')){
                                                
                                                h2.item(0).style.fontWeight = 700;
                                                img.item(0).setAttribute('src', 'assets/imagens/icon-arrow-up.png');

                                                h2.item(1).classList.remove('disponivel');
                                                h2.item(1).classList.add('indisponivel');

                                                h2.item(2).classList.remove('disponivel');
                                                h2.item(2).classList.add('indisponivel');
                                               


                                                h2.item(3).classList.remove('disponivel');
                                                h2.item(3).classList.add('indisponivel');


                                                h2.item(4).classList.remove('disponivel');
                                                h2.item(4).classList.add('indisponivel');
                                              

                                
                                        }

                       }else{
                                
                                answer.item(0).classList.remove('active');
                                answer.item(0).classList.add('hideAnswer');
                                h2.item(0).style.fontWeight = 400;
                                img.item(0).setAttribute('src', 'assets/imagens/icon-arrow-down.svg');
                               

                                h2.item(1).classList.add('disponivel');
                                h2.item(1).classList.remove('indisponivel');                             


                                h2.item(2).classList.add('disponivel');
                                h2.item(2).classList.remove('indisponivel');

                                h2.item(3).classList.add('disponivel');
                                h2.item(3).classList.remove('indisponivel');

                                h2.item(4).classList.add('disponivel');
                                h2.item(4).classList.remove('indisponivel');

                       }                  
                }else if (keys === 1){
                        if(answer.item(1).classList.contains('hideAnswer') && answer.item(0).classList.contains('hideAnswer') && answer.item(2).classList.contains('hideAnswer') && answer.item(3).classList.contains('hideAnswer') && answer.item(4).classList.contains('hideAnswer')){
                                answer.item(1).classList.remove('hideAnswer');
                                answer.item(1).classList.add('active');

                                        if(answer.item(0).classList.contains('hideAnswer') && answer.item(1).classList.contains('active') && answer.item(2).classList.contains('hideAnswer') && answer.item(3).classList.contains('hideAnswer') && answer.item(4).classList.contains('hideAnswer')){

                                                h2.item(1).style.fontWeight = 700;
                                                img.item(1).setAttribute('src', 'assets/imagens/icon-arrow-up.png');

                                                h2.item(0).classList.remove('disponivel');
                                                h2.item(0).classList.add('indisponivel');

                                                h2.item(2).classList.remove('disponivel');
                                                h2.item(2).classList.add('indisponivel');

                                                h2.item(3).classList.remove('disponivel');
                                                h2.item(3).classList.add('indisponivel');

                                                h2.item(4).classList.remove('disponivel');
                                                h2.item(4).classList.add('indisponivel');
                        
                                }


                        }else{
                                answer.item(1).classList.remove('active');
                                answer.item(1).classList.add('hideAnswer');
                                h2.item(1).style.fontWeight = 400;
                                img.item(1).setAttribute('src', 'assets/imagens/icon-arrow-down.svg');

                                h2.item(0).classList.add('disponivel');
                                h2.item(0).classList.remove('indisponivel');

                                h2.item(2).classList.add('disponivel');
                                h2.item(2).classList.remove('indisponivel');

                                h2.item(3).classList.add('disponivel');
                                h2.item(3).classList.remove('indisponivel');

                                h2.item(4).classList.add('disponivel');
                                h2.item(4).classList.remove('indisponivel');
                               
                        }
                        
                }else if(keys === 2){
                        if(answer.item(2).classList.contains('hideAnswer') && answer.item(0).classList.contains('hideAnswer') && answer.item(1).classList.contains('hideAnswer') && answer.item(3).classList.contains('hideAnswer') && answer.item(4).classList.contains('hideAnswer')){
                                answer.item(2).classList.remove('hideAnswer');
                                answer.item(2).classList.add('active');
                                
                                        if(answer.item(0).classList.contains('hideAnswer') && answer.item(1).classList.contains('hideAnswer') && answer.item(2).classList.contains('active') && answer.item(3).classList.contains('hideAnswer') && answer.item(4).classList.contains('hideAnswer')){

                                                h2.item(2).style.fontWeight = 700;
                                                img.item(2).setAttribute('src', 'assets/imagens/icon-arrow-up.png');

                                                h2.item(0).classList.remove('disponivel');
                                                h2.item(0).classList.add('indisponivel');

                                                h2.item(1).classList.remove('disponivel');
                                                h2.item(1).classList.add('indisponivel');

                                                h2.item(3).classList.remove('disponivel');
                                                h2.item(3).classList.add('indisponivel');

                                                h2.item(4).classList.remove('disponivel');
                                                h2.item(4).classList.add('indisponivel');
                        
                                }


                        }else{
                                answer.item(2).classList.remove('active');
                                answer.item(2).classList.add('hideAnswer');
                                h2.item(2).style.fontWeight = 400;
                                img.item(2).setAttribute('src', 'assets/imagens/icon-arrow-down.svg');

                                h2.item(1).classList.add('disponivel');
                                h2.item(1).classList.remove('indisponivel');

                                h2.item(0).classList.add('disponivel');
                                h2.item(0).classList.remove('indisponivel');

                                h2.item(3).classList.add('disponivel');
                                h2.item(3).classList.remove('indisponivel');

                                h2.item(4).classList.add('disponivel');
                                h2.item(4).classList.remove('indisponivel');
                               
                        }
                }else if(keys === 3){
                        if(answer.item(3).classList.contains('hideAnswer') && answer.item(1).classList.contains('hideAnswer') && answer.item(2).classList.contains('hideAnswer') && answer.item(0).classList.contains('hideAnswer') && answer.item(4).classList.contains('hideAnswer')){
                                answer.item(3).classList.remove('hideAnswer');
                                answer.item(3).classList.add('active');
                                        
                                        if(answer.item(0).classList.contains('hideAnswer') && answer.item(1).classList.contains('hideAnswer') && answer.item(2).classList.contains('hideAnswer') && answer.item(3).classList.contains('active') && answer.item(4).classList.contains('hideAnswer')){

                                                h2.item(3).style.fontWeight = 700;
                                                img.item(3).setAttribute('src', 'assets/imagens/icon-arrow-up.png');

                                                h2.item(0).classList.remove('disponivel');
                                                h2.item(0).classList.add('indisponivel');

                                                h2.item(1).classList.remove('disponivel');
                                                h2.item(1).classList.add('indisponivel');

                                                h2.item(2).classList.remove('disponivel');
                                                h2.item(2).classList.add('indisponivel');

                                                h2.item(4).classList.remove('disponivel');
                                                h2.item(4).classList.add('indisponivel');
                        
                                }

                        }else{
                                answer.item(3).classList.remove('active');
                                answer.item(3).classList.add('hideAnswer');
                                h2.item(3).style.fontWeight = 400;
                                img.item(3).setAttribute('src', 'assets/imagens/icon-arrow-down.svg');

                                h2.item(1).classList.add('disponivel');
                                h2.item(1).classList.remove('indisponivel');

                                h2.item(2).classList.add('disponivel');
                                h2.item(2).classList.remove('indisponivel');

                                h2.item(0).classList.add('disponivel');
                                h2.item(0).classList.remove('indisponivel');

                                h2.item(4).classList.add('disponivel');
                                h2.item(4).classList.remove('indisponivel');
                               
                        }
                }else if(keys === 4){
                        if(answer.item(4).classList.contains('hideAnswer') && answer.item(1).classList.contains('hideAnswer') && answer.item(2).classList.contains('hideAnswer') && answer.item(3).classList.contains('hideAnswer') && answer.item(0).classList.contains('hideAnswer')){
                                answer.item(4).classList.remove('hideAnswer');
                                answer.item(4).classList.add('active');

                                        if(answer.item(0).classList.contains('hideAnswer') && answer.item(1).classList.contains('hideAnswer') && answer.item(2).classList.contains('hideAnswer') && answer.item(3).classList.contains('hideAnswer') && answer.item(4).classList.contains('active')){

                                                h2.item(4).style.fontWeight = 700;
                                                img.item(4).setAttribute('src', 'assets/imagens/icon-arrow-up.png');

                                                h2.item(0).classList.remove('disponivel');
                                                h2.item(0).classList.add('indisponivel');

                                                h2.item(1).classList.remove('disponivel');
                                                h2.item(1).classList.add('indisponivel');

                                                h2.item(2).classList.remove('disponivel');
                                                h2.item(2).classList.add('indisponivel');

                                                h2.item(3).classList.remove('disponivel');
                                                h2.item(3).classList.add('indisponivel');
                        
                                }

                        }else{
                                answer.item(4).classList.remove('active');
                                answer.item(4).classList.add('hideAnswer');
                                h2.item(4).style.fontWeight = 400;
                                img.item(4).setAttribute('src', 'assets/imagens/icon-arrow-down.svg');

                                h2.item(1).classList.add('disponivel');
                                h2.item(1).classList.remove('indisponivel');

                                h2.item(2).classList.add('disponivel');
                                h2.item(2).classList.remove('indisponivel');

                                h2.item(3).classList.add('disponivel');
                                h2.item(3).classList.remove('indisponivel');

                                h2.item(0).classList.add('disponivel');
                                h2.item(0).classList.remove('indisponivel');
                               
                        };
                }       
               
                        
        });            
});

               



               