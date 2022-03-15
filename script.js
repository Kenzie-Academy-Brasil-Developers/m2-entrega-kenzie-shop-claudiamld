import { Produto } from "./src/Models.js";
import { Api } from "./src/Api.js";

const produtos = await Api.get()
Produto.renderizarProduto(produtos)
