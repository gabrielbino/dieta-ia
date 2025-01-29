// O arquivo que vai rodar quando executar a API
import Fastify from "fastify";
import cors  from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes"

const app = Fastify({ logger: true })
dotenv.config();

// recebe uma função anônima e mostra o erro, o request e o reply pra devolver pro frontend, pra quem chamou a rota que deu erro
app.setErrorHandler((error, resquest, reply) => {
    reply.code(400).send({ message: error.message })
})

// Função assíncrona para inicializar o servidor. Vai registrar o cors e o arquivo routes
const start = async () => {

    app.register(cors); //liberar a URL para qualquer IP conseguir fazer requisição dentro dessa API

    app.register(routes)

    try {
        // vai tentar inicializar o servidor
        await app.listen({ port: 3333, host: "0.0.0.0"})
        
        console.log(`Servidor rodando no http://localhost:3333`)
    } catch(err) {
        console.log(err);
    }
}

start();