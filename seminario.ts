// seminario.ts
function addNum(a:number, b:number): number{
    return a + b;
}


addNum(5,10);
console.log(addNum);

// --- Etapa 1: Código JavaScript (O Ponto de Partida) ---

console.log("--- Etapa 1: Código JavaScript ---");
// @ts-ignore
type Usuario={
  nome:string;
  sobrenome:string;
  idade?:number;
}
function formatarUsuarioJS(user:Usuario) {
  
  
  const nomeCompleto = user.nome + " " + user.sobrenome;
  console.log(`JS: Usuário: ${nomeCompleto}, Idade: ${user.idade}`);
}

const user1 = { nome: "Ana", sobrenome: "Silva", idade: 28 };
const user2 = { nome: "Carlos", sobrenome: "Souza" };

formatarUsuarioJS(user1);
formatarUsuarioJS(user2);

console.log("\n-----------------------------------\n");

// --- Etapa 2: A Evolução para TypeScript (Tipagem e Propriedades Opcionais) ---



console.log("--- Etapa 2: Código TypeScript ---");



function formatarUsuarioTS(usuario: Usuario): void {
  const nomeCompleto = `${usuario.nome} ${usuario.sobrenome}`;
  
  // O TypeScript nos força a verificar se a propriedade opcional existe.
  const idadeTexto = usuario.idade ? `Idade: ${usuario.idade}` : "Idade: não informada";
  
  console.log(`TS: Usuário: ${nomeCompleto}, ${idadeTexto}`);
}

const user3: Usuario = { nome: "Ana", sobrenome: "Silva", idade: 28 };
const user4: Usuario = { nome: "Carlos", sobrenome: "Souza" }; // Válido, pois a idade é opcional.

formatarUsuarioTS(user3);
formatarUsuarioTS(user4);


console.log("\n-----------------------------------\n");

// --- Etapa 3: Adicionando Flexibilidade com Union Types ---


console.log("--- Etapa 3: Código TypeScript com Union Types ---");

interface UsuarioFlex {
  nome: string;
  sobrenome: string;
  idade?: number;
}

// A função pode aceitar um ID (string ou number) OU um objeto 'UsuarioFlex'.
function buscarEFormatar(identificador: string | number | UsuarioFlex) {
  
  
  if (typeof identificador === "string" || typeof identificador === "number") {
    console.log(`TS (Union): Buscando usuário com ID: ${identificador}`);
  } else {
    // Aqui, o TypeScript já sabe que 'identificador' é um 'UsuarioFlex'.
    const nomeCompleto = `${identificador.nome} ${identificador.sobrenome}`;
    const idadeTexto = identificador.idade ? `Idade: ${identificador.idade}` : "Idade: não informada";
    console.log(`TS (Union): Dados do Usuário: ${nomeCompleto}, ${idadeTexto}`);
  }
}

buscarEFormatar("ID-12345");
buscarEFormatar(98765);
buscarEFormatar({ nome: "Maria", sobrenome: "Oliveira", idade: 35 });