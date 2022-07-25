var app = new Vue (
    {
        el: '#app',
        data: {

            newToDo :' ',
            toDos : [
               {item:'Vedere le balene',
                done: true
            },

               {item:'Andare in escursione sub',
               done: true
            },
               {item:'Dormire in tenda',
               done: false
            },
               {item:'Andare sul Teide',
               done: true
            },
               {item:'Mangiare in un guachinche',
               done: false
            },
               {item:'Guidare una Mustang',
               done: true
            },
               {item:'Volare in paracadute',
               done: true
            } 
            ]
        },

        methods : {
             eliminaToDo (indice){
                this.toDos.splice(indice,1)
             },

             addToDo () {
                this.newToDoo={item:this.newToDo}  
                this.toDos.push(this.newToDoo)
                this.newToDo= ' ';
             }
            }

        }

)

                
                
                
                
                
                