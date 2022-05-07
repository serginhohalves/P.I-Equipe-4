const { Usuario } = require("../models");
const request = require("supertest");
const app = require("../app");
const truncate = require("./utils/truncate");

describe("Usuários", () => {
  beforeEach(async () => {
    // truncate()
  });

  test("Deve cadastrar Usuário no banco", (done) => {
    let email = "email@mail.com";
    let senha = "123456";

    request(app)
      .post("/users/registro")
      .send({ email, senha })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Testa o diretorio raiz", () => {
  test("Deve responder o metodo GET", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Produtos", () => {
  test("Detalhe produto", (done) => {
    request(app)
      .get("/produtos/detalhe")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
