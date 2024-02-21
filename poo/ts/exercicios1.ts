//cadastro de funcionários
//detalhes pessoais e proficionais dos colaboradores 
class Pessoa{
    nome:string;
    email:string;
    telefone:string;
    data_nascimento:Date;
    rg:string;
    endereco:string[];
    constructor(nome:string,email:string,telefone:string,data_nascimento:Date, rg:string,endereco:string[]){
        this.nome=nome;
        this.endereco=endereco;
        this.email=email;
        this.telefone=telefone;
        this.data_nascimento=data_nascimento;
        this.rg=rg;
    }
    mostrarDados(){
        console.log('dados do funcionario:')
        console.log(`nome:${this.nome}`)
        console.log(`telefone ${this.telefone}`)
        console.log(`E-mail:${this.email}`)  
        console.log(`Data de nascimento:${this.data_nascimento.toLocaleDateString("pt-br")}`)
        console.log(`endereço:${this.endereco}`)
        console.log(`rg:${this.rg}`)

    }
}
class Funcionario extends Pessoa{
    cargo: string;
    matricula:string;
    constructor(matricula:string, endereco:string, nome: string, email: string, telefone: string, data_nascimento:Date, cargo: string, rg:string) {
       super(nome, endereco, email, data_nascimento, telefone, rg)
        this.cargo = cargo;
        this.matricula=matricula;
    }
    mostrarDados(){
        super.mostrarDados();
        console.log(`cargo:${this.cargo}`)
        console.log(`Matricula:${this.matricula}`)

    }

    }
const funcionario1 = new Funcionario('eduarda', 'mariaeduada@gmail.com', '998338875', 'medica')
console.log(funcionario1)

class Consultas {
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario
    constructor(local: string, data: Date, convenio: boolean, medico: Funcionario) {
        this.data = data;
        this.local = local;
        this.convenio = convenio;
        this.medico = medico;
    }

}
const consulta1 = new Consultas('Nordelandia', new Date('2024-2-19'), true, funcionario1)
console.log(consulta1)

class Paciente {
    paciente: string;
    cpf: string;
    cartaodosus: string;
    constructor(paciente: string, cpf: string, cartaodosus: string) {
        super(     )
        this.paciente = paciente;
        this.cpf = cpf;
        this.cartaodosus = cartaodosus;
    }
}
const paciente1 = new Paciente('Eduarda', '08882034451', '09999112', '998338875')
console.log(paciente1)