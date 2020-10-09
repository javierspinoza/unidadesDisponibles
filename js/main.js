var app = new Vue({
    el:'#app',
    data:{
        arrayDatos:[],

       producto:null,
       cantidad:null,
       total:"",
       dis:60,
       disP:85,
       piña:2500,
       pera:830,
       unid:"",
       msj:""
  
    },
    methods: {
        procesar:function(){ 
            
            if (this.producto=="piña") {
                this.msj = "piña"
                this.total = this.cantidad * (this.piña) 
                this.dis = this.dis - (this.cantidad) 
                if(this.dis <= 0 ){
                    alert("excedes el monto, no puedes comprar más piñas " )
                    return;
                }
                this.arrayDatos.push({ producto:this.producto,cantidad:this.cantidad,total:this.total,unid:this.dis})
            }            
                    else{
                        this.msj= "pera";
                        this.total = this.cantidad * (this.pera);
                        this.disP = this.disP - (this.cantidad)
                        if(this.disP <= 0 ){
                            alert("excedes el monto, no puedes comprar más peras " )
                            return;
                        }
                        this.arrayDatos.push({producto:this.producto,cantidad:this.cantidad,total:this.total,unid:this.disP})                                    
                
            }
        }
    },


})

