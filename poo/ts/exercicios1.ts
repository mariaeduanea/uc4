//cadastro de funcionários
//detalhes pessoais e proficionais dos colaboradores 
class Funcionario {
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    constructor(nome: string, email: string, telefone: string, cargo: string) {
        this.cargo = cargo;
        this.email = email;
        this.telefone = telefone;
        this.nome = nome;
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
    telefone: string;
    constructor(paciente: string, cpf: string, cartaodosus: string, telefone: string) {
        this.paciente = paciente;
        this.cpf = cpf;
        this.cartaodosus = cartaodosus;
        this.telefone = telefone;
    }
}
const paciente1 = new Paciente('Eduarda', '08882034451', '09999112', '998338875')
console.log(paciente1)