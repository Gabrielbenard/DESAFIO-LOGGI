/*NOME: GABRIEL VICTOR DOS SANTOS BERNARDINO 
  UNIVERSIDADE: UNIVERSIDADE DE PERNAMBUCO(UPE)
  CURSO : ENGENHARIA MECÂNICA 
  SEMESTRE ATUAL: 8
  DATA DE FORMAÇÃO : JULHO/2023
*/


/* 
1) A Loggi não envia produtos que não sejam dos tipos acima informados.
2) Não é possível despachar pacotes contendo jóias tendo como região de
origem o Centro-oeste;
3) O vendedor 367 está com seu CNPJ inativo e, portanto, não pode mais
enviar pacotes pela Loggi, os códigos de barra que estiverem relacionados
a este vendedor devem ser considerados inválidos.

*/

var produtos = [{
    id: 1,
    origem: 288,
    destino: 355,
    loggi:555 ,
    vendedor: 123,
    tipo:888,
},
{
    id: 2,
    origem: 335,
    destino: 333,
    loggi:555 ,
    vendedor: 843,
    tipo: 333
},
{   
    id: 3,
    origem: 223,
    destino: 343,
    loggi:555 ,
    vendedor: 124,
    tipo: 001
},
{   
    id: 4,
    origem: 002,
    destino: 111,
    loggi:555 ,
    vendedor: 874,
    tipo: 555
},
{   
    id: 5,
    origem: 111,
    destino: 188,
    loggi:555 ,
    vendedor: 654,
    tipo: 777
},
{   
    id: 6,
    origem: 111,
    destino: 333,
    loggi:555 ,
    vendedor: 123,
    tipo: 333
},
{   
    id: 7,
    origem: 432,
    destino: 055,
    loggi:555 ,
    vendedor: 123,
    tipo: 888
},
{
    id: 8,
    origem: 079,
    destino: 333,
    loggi:555 ,
    vendedor: 843,
    tipo: 333
},
{
    id: 9,
    origem: 155,
    destino: 333,
    loggi:555 ,
    vendedor: 124,
    tipo: 001
},
{   
    id: 10,
    origem: 333,
    destino: 188,
    loggi:555 ,
    vendedor: 584,
    tipo: 333
},
{   
    id: 11,
    origem: 555,
    destino: 288,
    loggi:555 ,
    vendedor: 124,
    tipo: 001
},
{   
    id: 12,
    origem: 111,
    destino: 388,
    loggi:555 ,
    vendedor: 123,
    tipo: 555
},
{   
    id: 13,
    origem: 288,
    destino: 000,
    loggi:555 ,
    vendedor: 367,
    tipo: 333
},
{   
    id: 14,
    origem: 066,
    destino: 311,
    loggi:555 ,
    vendedor: 874,
    tipo: 001
},
{   
    id: 15,
    origem: 110,
    destino: 333,
    loggi:555 ,
    vendedor: 123,
    tipo: 555
},
{   
    id: 16,
    origem: 333,
    destino: 488,
    loggi:555,
    vendedor: 843,
    tipo: 333
},
{   
    id: 17,
    origem: 455,
    destino: 448,
    loggi:555 ,
    vendedor: 123,
    tipo: 001
},
{   
    id: 18,
    origem: 022,
    destino: 388,
    loggi:555 ,
    vendedor: 123,
    tipo: 555
},
{   
    id: 19,
    origem: 432,
    destino: 044,
    loggi:555 ,
    vendedor: 845,
    tipo: 333
},
{   
    id: 20,
    origem: 034,
    destino: 311,
    loggi:555 ,
    vendedor: 874,
    tipo: 001
},
]





//1)Identificar a região de destino de cada pacote, com totalização de
//pacotes (soma região);
function identificar1(){ 
    
    var contadorNordeste = 0;
    var contadorNorte = 0;
    var contadorSudeste= 0 ;
    var contadorSul= 0;
    var contadorCentrooeste = 0;

    for(let i=0;i< produtos.length;i++){
        if(produtos[i].vendedor == 367 || (produtos[i].origem >= 201 && produtos[i].origem <=299 && produtos[i].tipo ==001) ){
            console.log(`o produto de ordem ${i+1} é invalido de acordo com as restrições impostas`)
        }
        else{

            if(produtos[i].destino >= 1 && produtos[i].destino <= 099 ){
                console.log(`O pacote de ordem ${i+1} SEU DESTINO É SUDESTE`);
                contadorSudeste++
            }
            else if(produtos[i].destino >= 100 && produtos[i].destino <= 199 ){
                console.log(` O pacote de ordem ${i+1} SEU DESTINO É SUL`);
                contadorSul++
            }
            else if(produtos[i].destino >= 201 && produtos[i].destino <= 299 ){
                console.log(` O pacote de ordem ${i+1} SEU DESTINO É CENTRO OESTE`);
                contadorCentrooeste++

            }
            else if(produtos[i].destino >= 301 && produtos[i].destino <= 399 ){
                console.log(`O pacote de ordem ${i+1} SEU DESTINO É NORDESTE`);
                contadorNordeste++

            }
            else if(produtos[i].destino >= 401 && produtos[i].destino <= 499 ){
                console.log(`O pacote de ordem ${i+1} SEU DESTINO É NORTE`);
                contadorNorte++
            }
        }
     }
     console.log("o numero de produtos com destino Nordeste = "+contadorNordeste);
     console.log("o numero de produtos com destino Norte = "+contadorNorte);
     console.log("o numero de produtos com destino sudeste = "+contadorSudeste);
     console.log("o numero de produtos com destino centrooeste = "+contadorCentrooeste);
     console.log("o numero de produtos com destino sul = "+contadorSul);
     console.log("total = " + (contadorCentrooeste + contadorSudeste + contadorNordeste + contadorNorte + contadorSul))
}

identificar1();
//2)Saber quais pacotes possuem códigos de barras válidos e/ou inválidos;
function codigovalido(){
    for(let i=0;i< produtos.length;i++){

        if(produtos[i].tipo == 1 && (produtos[i].origem >=201 && produtos[i].origem <=299) ){
            console.log(`o produto de ordem ${i+1} é invalido`)
        }
    }
}

codigovalido();


//3)Identificar os pacotes que têm como origem a região Sul e Brinquedos em seu conteúdo;

function identificar3(){
    var validos = [];
    for(let i=0;i< produtos.length;i++){
        if(produtos[i].origem >= 100 && (produtos[i].origem <= 199 && produtos[i].tipo == 888) ){
            console.log(`o produto de ordem ${i+1} é do sul e tem brinquedos como conteúdo `);
            validos.push(produtos[i]);
        }
    
    }
    console.log(validos)

}

identificar3();


//4(Listar os pacotes agrupados por região de destino (Considere apenas pacotes válidos);

function listar4(){
            var Norte = [];
            var centrooeste= [];
            var Sul=  [];
            var NORDESTE= [];
            var sudeste= [];
    for(let i=0;i< produtos.length;i++){
            

        if(produtos[i].vendedor == 367 || (produtos[i].origem >= 201 && produtos[i].origem <=299 && produtos[i].tipo ==001) ){
            console.log(`o produto de ordem ${i+1} é invalido de acordo com as restrições impostas`)
        }
        else{
            
            if(produtos[i].destino >= 1 && produtos[i].destino <= 099 ){
                
                sudeste.push(produtos[i]);
            }
            else if(produtos[i].destino >= 100 && produtos[i].destino <= 199 ){
               
                Sul.push(produtos[i]);
            }
            else if(produtos[i].destino >= 201 && produtos[i].destino <= 299 ){
               
                centrooeste.push(produtos[i]);

            }
            else if(produtos[i].destino >= 301 && produtos[i].destino <= 399 ){
                
                NORDESTE.push(produtos[i]);

            }
            else if(produtos[i].destino >= 401 && produtos[i].destino <= 499 ){
                
                Norte.push(produtos[i]);
            }
        }
    }
    console.log("produtos com destino a  região norte ")
    console.log(Norte)
    console.log("produtos com destino a  região sul ")
    console.log(Sul)
    console.log("produtos com destino a  região nordeste ") 
    console.log(NORDESTE)
    console.log("produtos com destino a  região sudeste ") 
    console.log(sudeste)
    console.log("produtos com destino a  região centro-oste ") 
    console.log(centrooeste)
}

listar4()


//5. Listar o número de pacotes enviados por cada vendedor (Considere
//apenas pacotes válidos);

function listar5(){
     var numerospacotes123=0
     var numerospacotes584=0
     var numerospacotes124= 0
     var numerospacotes874= 0
     var numerospacotes654= 0
     var numerospacotes845= 0 
    for(let i=0;i< produtos.length;i++){
       
        if(produtos[i].vendedor == 367 || (produtos[i].origem >= 201 && produtos[i].origem <=299 && produtos[i].tipo ==001) ){
            console.log(`o produto de ordem ${i+1} é invalido de acordo com as restrições impostas`)
        }
        else{
            if(produtos[i].vendedor == 123 ){
                numerospacotes123 = numerospacotes123 + 1
            }
            if(produtos[i].vendedor == 584 ){
                numerospacotes584 =  numerospacotes584 + 1
            }
            if(produtos[i].vendedor == 124 ){
                numerospacotes124 = numerospacotes124 + 1
            }
            if(produtos[i].vendedor == 874 ){
                numerospacotes874 = numerospacotes874 + 1
            }
            if(produtos[i].vendedor == 654 ){
                numerospacotes654 =  numerospacotes654 + 1
            }
            if(produtos[i].vendedor == 845 ){
                numerospacotes845 = numerospacotes845 + 1
            }    
        }
    }
    console.log("o numero de pacotes do venderdor de codigo: 123 = " + numerospacotes123 )
    console.log("o numero de pacotes do venderdor de codigo: 584 = " + numerospacotes584 )
}
listar5()



//6)Gerar o relatório/lista de pacotes por destino e por tipo (Considere
//apenas pacotes válidos);

function gerar6(){
        // para variaveis abreviações J para joias, L para livros, E para Eletronicos, Be para bebidas, Br para brinquedos

            var NorteJ = []; var NorteL = []; var NorteE = []; var NorteBe = []; var NorteBr = [];
            var centrooesteJ= [];var centrooesteL = [];var centrooesteE = [];var centrooesteBe = [];var centrooesteBr = [];
            var SulJ=  [];   var SulL = []; var SulE = []; var SulBe = []; var SulBr = [];
            var NORDESTEJ= []; var NORDESTEL = [];var NORDESTEE = [];var NORDESTEBe = [];var NORDESTEBr = [];
            var sudesteJ= []; var sudesteL = [];var sudesteE = [];var sudesteBe = [];var sudesteBr = [];

    for(let i=0;i< produtos.length;i++){
       
        if(produtos[i].vendedor == 367 || (produtos[i].origem >= 201 && produtos[i].origem <=299 && produtos[i].tipo ==001) ){
            console.log(`o produto de ordem ${i+1} é invalido de acordo com as restrições impostas`)
        }
        else{
             
            if(produtos[i].destino >= 1 && produtos[i].destino <= 099 ){
                if(produtos[i].tipo ==001 ){
                    sudesteJ.push(produtos[i])
                }
                if(produtos[i].tipo ==111 ){
                    sudesteL.push(produtos[i])
                }
                if(produtos[i].tipo ==333){ 
                    sudesteE.push(produtos[i])
                }
                if(produtos[i].tipo ==555){
                    sudesteBe.push(produtos[i])

                }
                if(produtos[i].tipo == 888){
                    sudesteBr.push(produtos[i])
                }                              
            }
            else if(produtos[i].destino >= 100 && produtos[i].destino <= 199 ){
                if(produtos[i].tipo ==001 ){
                    SulJ.push(produtos[i])
                }
                if(produtos[i].tipo ==111 ){
                    SulL.push(produtos[i])
                }
                if(produtos[i].tipo ==333){ 
                    SulE.push(produtos[i])
                }
                if(produtos[i].tipo ==555){
                    SulBe.push(produtos[i])

                }
                if(produtos[i].tipo == 888){
                    SulBr.push(produtos[i])
                }
                 
                
            }
            else if(produtos[i].destino >= 201 && produtos[i].destino <= 299 ){
                if(produtos[i].tipo ==001 ){
                    centrooesteJ.push(produtos[i])
                }
                if(produtos[i].tipo ==111 ){
                    centrooesteL.push(produtos[i])
                    
                }
                if(produtos[i].tipo ==333){ 
                    centrooesteE.push(produtos[i])
                }
                if(produtos[i].tipo ==555){
                    centrooesteBe.push(produtos[i])

                }
                if(produtos[i].tipo == 888){
                    centrooesteBr.push(produtos[i])
                }
                
            }
            else if(produtos[i].destino >= 301 && produtos[i].destino <= 399 ){
                if(produtos[i].tipo ==001 ){
                    NORDESTEJ.push(produtos[i])
                }
                if(produtos[i].tipo ==111 ){
                    NORDESTEL.push(produtos[i])
                }
                if(produtos[i].tipo ==333){ 
                    NORDESTEE.push(produtos[i])
                }
                if(produtos[i].tipo ==555){
                    NORDESTEBe.push(produtos[i])

                }
                if(produtos[i].tipo == 888){
                    NORDESTEBr.push(produtos[i])
                }        
            }
            else if(produtos[i].destino >= 401 && produtos[i].destino <= 499 ){
                    if(produtos[i].tipo ==001 ){
                        NorteJ.push(produtos[i])
                    }
                    if(produtos[i].tipo ==111 ){
                        NorteL.push(produtos[i])
                    }
                    if(produtos[i].tipo ==333){ 
                        NorteE.push(produtos[i])

                    }
                    if(produtos[i].tipo ==555){
                        NorteBe.push(produtos[i])

                    }
                    if(produtos[i].tipo == 888){
                        NorteBr.push(produtos[i])
                    }
                      
            }

        }
    }
// se quiser descobrir cada tipo basta digitar console.log('qualquer variavel listada no inicio da função')
}
gerar6()

//7. Se o transporte dos pacotes para o Norte passa pela Região
//Centro-Oeste, quais são os pacotes que devem ser despachados no
//mesmo caminhão?


function despache7(){
        var pacotesdes= []
    for(let i=0;i< produtos.length;i++){
        if(produtos[i].vendedor == 367 || (produtos[i].origem >= 201 && produtos[i].origem <=299 && produtos[i].tipo ==001) ){
            console.log(`o produto de ordem ${i+1} é invalido de acordo com as restrições impostas`)
        }
        else{
        if((produtos[i].destino >= 401 && produtos[i].destino <= 499) || (produtos[i].destino >= 201 && produtos[i].destino <= 299 ) ){
            pacotesdes.push(produtos[i])
        }
        }
    }
    console.log("PACOTES QUE pacotes que devem ser despachados no mesmo caminhão");
    console.log(pacotesdes);
}

despache7();


//8)Se todos os pacotes fossem uma fila qual seria a ordem de carga
//para o Norte no caminhão para descarregar os pacotes da Região
//Centro Oeste primeiro;

function despache8(){
    var pacotesdes2= [];
    var pacotesdes3 = [];

for(let i=0;i< produtos.length;i++){
    if(produtos[i].vendedor == 367 || (produtos[i].origem >= 201 && produtos[i].origem <=299 && produtos[i].tipo ==001) ){
        console.log(`o produto de ordem ${i+1} é invalido de acordo com as restrições impostas`)
    }
    else{
    if((produtos[i].destino >= 401 && produtos[i].destino <= 499)   ){
        pacotesdes2.push(produtos[i])
    }
    if((produtos[i].destino >= 201 && produtos[i].destino <= 299 )){
        pacotesdes3.push(produtos[i])
    }
}
}

var pacotesfinal = pacotesdes3.concat(pacotesdes2);

console.log("PACOTES QUE pacotes que devem ser despachados com a região centro oeste na primeira ordem");
console.log(pacotesfinal);

}

despache8();


//9)No item acima considerar que as jóias fossem sempre as primeiras a
//serem descarregadas;

function despache9(){
    var pacotesdes2= [];
    var pacotesdes3 =[];
    var pacotesjoias = [];
    for(let i=0;i< produtos.length;i++){

        if(produtos[i].vendedor == 367 || (produtos[i].origem >= 201 && produtos[i].origem <=299 && produtos[i].tipo ==001) ){
            console.log(`o produto de ordem ${i+1} é invalido de acordo com as restrições impostas`)
        }

        else{
        if((produtos[i].destino >= 401 && produtos[i].destino <= 499)   ){
            if(produtos[i].tipo == 001){
                pacotesjoias.push(produtos[i])
            }else{
                pacotesdes2.push(produtos[i])
            }
        }
        if((produtos[i].destino >= 201 && produtos[i].destino <= 299 )){
            if(produtos[i].tipo == 001){
                pacotesjoias.push(produtos[i])
            }
            else{
            pacotesdes3.push(produtos[i])
        }
      }
     }
    }
    var listafinal= pacotesjoias.concat(pacotesdes3,pacotesdes2);
    console.log(listafinal);
}

despache9();

// 10)Listar os pacotes inválidos.

function listar10(){
    var invalidos = []
    for(let i=0;i< produtos.length;i++){
        if(produtos[i].vendedor == 367 || (produtos[i].origem >= 201 && produtos[i].origem <=299 && produtos[i].tipo ==001) ){
            invalidos.push(produtos[i])
        }
    }
    console.log("lista de Produtos invalidos")
    console.log(invalidos)
}

listar10();

