const valores = [5,3,8,9,1,7,2]

const booble = (v) =>{
    let ordenado = false

    while(!ordenado){
        ordenado = true

        for (let index = 0; index < valores.length; index++) {
            if(v[index-1] > v[index]){
                const aux = v[index]
                v[index] = v[index-1]
                v[index-1] = aux
                ordenado = false
            }
            
        }
    }
}

booble(valores)

console.log(valores)