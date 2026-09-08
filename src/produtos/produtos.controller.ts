import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutosRepository } from "./produtos.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";

@Controller('/produtos')
export class ProdutosController {

    constructor (private produtosRepository: ProdutosRepository) {}


    @Post()
    async criarProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
        const produtoCadastrado = this.produtosRepository.salvar(dadosDoProduto)
        return produtoCadastrado;
    }

    @Get()
    async listarProdutos() {
        return this.produtosRepository.listar();
    }
}