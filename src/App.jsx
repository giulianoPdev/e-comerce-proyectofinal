import React from 'react'
import { PI } from './funcione.jsx'


console.log(PI)
function App() {
  return (
    <div>
      <h1>hola</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Carrito/>
    </div>
  )
}

const ProductCard = () =>{
  return(
    <>{/* Esto es un fragmento, sirven para evitar crear elementos padres */}
      <div>
          <h3>Titulo de producto</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestiae perferendis cupiditate dolor repudiandae porro voluptatem nesciunt autem, magnam accusantium nam laudantium asperiores quas hic perspiciatis quis facere tempora voluptates temporibus quod! Repudiandae, nulla, nam sint sunt illo neque accusamus perferendis laborum architecto sit temporibus quaerat fugit nisi id dolor iure ullam. Quia iusto consequatur qui distinctio nam nobis similique.</p>
        <span>Precio: $value</span>
        <button>Comprar</button>
      </div>
      <div>
        <button>Like</button>
        <button>Dislike</button>
      </div>
      
    </>
  )
}
export default App

/* 
Crear un componente llamado Carrito

El componente carrito tendra un h1 que dira 'Carrito de compras'

Luego crear otro componente llamado Item
El componente Item tendra la sig estructura
<div>
    <h2>nombre producto</h2>
    <span>Cantidad: x</span>
    <button>Eliminar</button>
</div>

Mostrar el Carrito en el componente App

*/

const Carrito = () =>{
  /* Llamada al carrito de la API */
  return(
    <section>
      <h1>Carrito de compras</h1>
      <div>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </section>
    
  )
}

const Item = () =>{
  return(
    <div>
      <h2>nombre producto</h2>
      <span>Cantidad: x</span>
      <button>Eliminar</button>
    </div>
  )
}

