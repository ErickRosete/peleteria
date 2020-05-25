
exports.finalHtml=(params)=>{
    const htmlContent = `
        <style>
            body{
                /* background-color: red */
            }
            .container{
                background-color: #fafafa; 
                /*padding:4vw;*/
                font-family: 'Montserrat', sans-serif;
            }
            .title{
                font-family: 'Montserrat', sans-serif;
                font-size: 2rem;
                /* color:#58595b; */
                font-weight: bold;
                text-align: center;
            }
            .place{
                font-family: 'Montserrat', sans-serif;
                font-size: 1rem;
                color:#58595b;
                text-align: center;
                font-weight: bold;
            }
            .flex-container {
                display: flex;
            }
            .flex-container3 {
                display: flex;
                background-color: #ffffff;
                margin-left:4%;
                margin-right:4%;
                padding: 1vh 5vw;
                /* vertical and horizontal */
                /*https://www.cssmatic.com/box-shadow*/
                -webkit-box-shadow: 0px 0px 28px -12px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0px 28px -12px rgba(0,0,0,0.75);
                box-shadow: 0px 0px 28px -12px rgba(0,0,0,0.75);
            }
            #father{
                display: flex; /* required */
                flex-flow: row nowrap; /* required */
            }
            #especial{
                width:100%;
            }
            #card{
                background-color: #ffffff;
                /*https://www.cssmatic.com/box-shadow*/
                -webkit-box-shadow: 0px 0px 28px -12px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0px 28px -12px rgba(0,0,0,0.75);
                box-shadow: 0px 0px 28px -12px rgba(0,0,0,0.75);
                margin-left:4%;
                margin-right:4%;
            }
            #especial,#card-container{
                box-sizing: border-box; /* required */
                width: 100%; /* required */
                flex: none; /* required */
            }
            
            #card-container{
                /*foreground*/
                margin-left: -100%; /* required */
            }

            .flex-container2 {
                display: flex;
                width:50%
            }
            .AQ-1{
                width:50%
            }
            .eq1{
                width:50%
            }
            .eq2{
                width:50%
            }
            #number{
                font-family: 'Montserrat', sans-serif;
                font-size: 4rem;
                font-weight: bold;
                margin:0;
                text-align: center;
            }
            #AQI{
                font-family: 'Montserrat', sans-serif;
                font-size: 1.5rem;
                color:#58595b;
                text-align: center;
                font-weight: bold;
                margin: 1vh 0vw;
            }
            .recomendacion{
                font-size: 1.5rem;
                color:#58595b;
                text-align: center;
                font-weight: bold;
            }
            #recomendacion2{
                font-size: 1.5rem;
                color:#58595b;
                text-align: center;
                font-weight: bold;
                margin:0;
                margin-bottom:2vh;
                margin-top:2vh;
            }
            #green{
                /* Large rounded green border */
                border: 5px solid #4db04e;
                border-radius: 5px;
            }
            #bandera{
                width:50%;
                height:10vh;
                display:block;
                margin:auto;
            }
            #asma{
                width:50%;
                height:10vh;
            }
            .params {
                display: flex;
                font-size: 1.5rem;
                padding-bottom: 2vh;
            }
            .param{
                color:#58595b;
                text-align: center;
                width:33%;
                font-weight: bold;
            }
            .param-icon{
                width:30%;
                height:4vh;
            }
            .param-label{
                margin:0
            }
        
        </style>
            <div class="container">
                <div id="father">
                    <img id="especial" src="./banners/naranja.png"/>
                    <div id="card-container">
                        <div id="card">
                        <p class="title">
                                COLONIA INDEPENDENCIA
                            </p>
                            <p class="place">Mexicali,B.C</p>
                            <div class="flex-container">
                                <div class="flex-container2">
                                    <div class="AQI-1">
                                        <img id="bandera" src="/iconos/banderas-05.svg">
                                    </div>
                                    <div class="AQI-1">
                                        <p id="number">${params.AQI.toFixed(2)}</p>
                                        <p id="AQI">AQI</p>
                                    </div>
                                </div>
                                <div class="eq1">
                                    <p class="recomendacion">INSALUBRE PARA GRUPOS SENSIBLES</p>
                                </div>
                            </div>
                            <hr id="green">
                            <div class="params">
                                <div class="param">
                                    <img class="param-icon" src="/iconos/thermometer.svg">
                                    <p class="param-label">${params.temp.toString()}&#176;C</p>
                                </div>
                                <div class="param">
                                    <img class="param-icon" src="/iconos/humidity.svg">
                                    <p class="param-label">${params.humidity.toString()}%</p>
                                </div>
                                <div class="param">
                                    <img class="param-icon" src="/iconos/breeze.svg">
                                    <p class="param-label">${params.wind.toString()}km/h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p id="recomendacion2">Recomendaciones de salud</p>
                <div class="flex-container3">
                    <div class="eq2">
                        <img id="asma" src="/iconos/Iconos_Grupos sensibles.svg">
                    </div> 
                    <div class="eq2">
                        <p class="recomendacion">no salgas si eres asmatico</p>
                    </div> 
                </div>
            </div>
    `
    return htmlContent
}
