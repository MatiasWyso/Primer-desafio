
class ProductManager {
    static idIncremento = 0;
    
        constructor(){
            this.products = [];
        }
    
        getProducts(){
            return this.products;
        }
    
        addProducts(titulo, descripcion, precio, foto, codigo, stock){
            ProductManager.idIncremento++;
            const code = this.products.find(c => c.codigo === codigo); 
                const nuevoProducto = {
                    id:ProductManager.idIncremento,
                    title: titulo,
                    descript: descripcion,
                    price: precio,
                    thumbnail: foto,
                    code: codigo,
                    stock: stock,
                } 
    
                const productoValidar = Object.values(nuevoProducto);
                const validarValores = productoValidar.filter( e=> e !== undefined);
                if(validarValores.length < 7){
                  console.error('Faltan parámetros');
                  return;
                }
              if(code){
                console.error('Ya existe este código');
                return;
            }
                return this.products.push(nuevoProducto);
           
        }
    
        
    
        getProductsById(idP){
            const encontrar = this.products.findIndex(e => e.id === idP);
            if(encontrar < 0){
                console.error('Not found');
                return;
            }
            const productoEncontrado = this.products[encontrar];
            return productoEncontrado; 
        }
    };
    
    const myProductManager = new ProductManager();
    console.log(myProductManager.getProducts());
    console.log(myProductManager.addProducts( 'Item','prueba', 300, 'Sin imagen', 'asdasf', 15));
    console.log(myProductManager.addProducts('Item', ' prueba', 5200, 'Sin imagen', 'gareearg', 10));
    console.log(myProductManager.addProducts( 'Item','prueba', 200, 'Sin imagen', 'dafklj', 12));
    console.log(myProductManager.getProducts());
    console.log(myProductManager.getProductsById(1  ));
    