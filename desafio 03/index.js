class Hero {
    constructor (name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        let attack = this.getAttackType()
        console.log(`O ${this.type} atacou usando ${attack}.`)
    }

    getAttackType() {
        let attack =  ''

        switch (this.type) {
            case 'mago':
                attack = 'magia'
                break
            case 'guerreiro':
                attack = 'espada'
                break
            case 'monge':
                attack = 'artes marciais'
                break
            case 'ninja':
                attack = 'shuriken'
                break
        }

        return attack
    }
}

let mago = new Hero('Dumbledore', 68, 'mago')
mago.attack()

let ninja = new Hero('Sasuke', 16, 'ninja')
ninja.attack()

let guerreiro = new Hero('Gutz', 30, 'guerreiro')
guerreiro.attack()

let monge = new Hero('Hang', 14, 'monge')
monge.attack()