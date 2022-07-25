var app = new Vue (
    {
        el: '#app',
        data: {

            newToDo :' ',
            toDos : [
               {item:'Vedere le balene'
               
            },

               {item:'Andare in escursione sub'
            },
               {item:'Dormire in tenda'
            },
               {item:'Andare sul Teide'
            },
               {item:'Mangiare in un guachinche'
            },
               {item:'Guidare una Mustang'
            },
               {item:'Volare in paracadute'
            } 
            ]
        },

        methods : {
             eliminaToDo (indice){
                this.toDos.splice(indice,1)
             },

             addToDo () {
                this.newToDo= ' '
                this.toDos.push(this.newToDo)
             }
            }

        }

)

                
                
                
                
                
                