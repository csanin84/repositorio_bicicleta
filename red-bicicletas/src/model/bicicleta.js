class Bicicleta {
   
    static allBicicletas = [];
    
    constructor (id, color, modelo, ubicacion) {
        this.id = id;
        this.color = color;
        this.modelo = modelo;
        this.ubicacion = ubicacion;      
    } 

    
    // toString
    toString() {
      return this.id + " | Color :" + this.color;
    }

    //adicionar bicicleta a la lista
    static add(bicicleta){
        this.allBicicletas.push(bicicleta);
        
    }   

    static findById(bicicleta_id){
        var bicicleta = Bicicleta.allBicicletas.find(x => x.id == bicicleta_id);
        if(bicicleta)
            return bicicleta;
        else
        throw new Error(`No existe una bicicleta con el id ${bicicleta_id}`);
    }
    
    static removeById(bicicleta_id){
        for(var i=0; i< Bicicleta.allBicicletas.length; i++){
            if(Bicicleta.allBicicletas[i].id == bicicleta_id){
                Bicicleta.allBicicletas.splice(i, 1);
                break;
            }
        }
    }

  }//fin clase Bicicleta

  var bicicleta1 = new Bicicleta(1, 'rojo', 'montaña', [4.639905, -74.087914]);
  var bicicleta2 = new Bicicleta(2, 'azul', 'bmx', [4.667987, -74.096946]);
  Bicicleta.add(bicicleta1);
  Bicicleta.add(bicicleta2);

  console.log(Bicicleta.allBicicletas.toString());

 module.exports = Bicicleta;