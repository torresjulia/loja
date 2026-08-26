import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutosRepository } from "./produtos.repository";

@Controller('/produtos')
export class ProdutosController {

    constructor (private produtosRepository: ProdutosRepository) {}


    @Post()
    async criarProduto(@Body() dadosDoProduto) {
        this.produtosRepository.salvar(dadosDoProduto)
        return dadosDoProduto
    }

    @Get()
    async listarProdutos() {
        return this.produtosRepository.listar();
    }
}