class ProductManager {
    constructor() {
        this.products = []
        this.Idincrementable = 1
    }

    addProduct(product) {
        if (!product.title && !product.description && !product.price && !product.thumbnail && !product.code && !product.stock) {
        console.error("Error: Todos los campos son obligatorios.")
        return
        }

        if (this.products.some(p => p.code === product.code)) {
        console.error("Error: El codigo de producto ya existe.")
        return
        }

        product.id = this.Idincrementable++
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

    getProductById(productId) {
        const product = this.products.find(p => p.id === productId)
        if (product) {
        return product
        } else {
        console.error("Error: Producto no encontrado.")
        }
    }
}

    const productManager = new ProductManager()

    productManager.addProduct({
        title: "Cuchillo",
        description: "Cuchillo para cortar carne",
        price: 45,
        thumbnail: "ruta/imagen/cuchillo.jpg",
        code: "CB001",
        stock: 8
    })

    productManager.addProduct({
        title: "Tabla",
        description: "Tabla de madera",
        price: 30,
        thumbnail: "ruta/imagen/tabla.jpg",
        code: "AB001",
        stock: 13
    })

    console.log(productManager.getProducts())
    console.log(productManager.getProductById(1))
    console.log(productManager.getProductById(4))
