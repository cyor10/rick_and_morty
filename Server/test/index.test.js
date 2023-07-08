const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200)
        })
        it('Responde un objeto con las propiedades "id", "name", "species", "gender", "status", "origin" e "image"',
            async () => {
                const response = await agent.get('/rickandmorty/character/1')
                const character = [
                    "id",
                    "name",
                    "species",
                    "gender",
                    "status",
                    "origin",
                    "image"]
                character.forEach((char) => {
                    expect(response.body).toHaveProperty(char)
                })
            })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/900').expect(500)
        })
    })

    describe("GET /rickandmorty/login", () => {
        it("La información de login es correcta", async () => {
            const response = await agent.get('/rickandmorty/login?email=ejemplo@gmail.com&password=@123Password')
            const access = { access: true }
            expect(response.body).toEqual(access)
        })
        it('La información de login es incorrecta', async () => {
            const response = await agent.get('/rickandmorty/login?email=ejemp@gmail.com&password=@12Password')
            const access = { access: false }
            expect(response.body).toEqual(access)
        })
    })

    describe("POST /rickandmorty/fav", () => {
        const character1 = { id: '1', name: 'Lucas' }
        const character2 = { id: '2', name: 'Maria' }

        it('Devuelve el elemento del arreglo', async () => {
            const response = await agent.post('/rickandmorty/fav/').send(character1)
            expect(response.body).toContainEqual(character1)
        })
        it("Devuelve el elemento previamente enviado", async () => {
            const response = await agent.post('/rickandmorty/fav/').send(character2)
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)
        })
    })

    describe("DELETE /rickandmorty/fav/:id", ()=>{
        const character1 = { id: '1', name: 'Lucas' }
        const character2 = { id: '2', name: 'Maria' }
        it("Devuelve el arreglo correspondiente si no se elimina ningun personaje", async()=>{
            const response = await agent.delete('/rickandmorty/fav/89')
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)
        })
        it("Elimina correctamente el personaje con el id correspondiente", async()=>{
            const response = await agent.delete('/rickandmorty/fav/1')
            expect(response.body).not.toContainEqual(character1)
        })
    })
})