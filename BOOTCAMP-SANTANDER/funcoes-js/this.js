const pessoa = {
    firstName: 'André',
    lastName: 'Soares',
    id:        1,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },

    
}

console.log(typeof this)

console.log(pessoa.fullName())
