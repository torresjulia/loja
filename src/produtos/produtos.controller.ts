import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutosRepository } from './produtos.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { randomUUID } from 'crypto';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';

@Controller('/produtos')
export class ProdutosController {
  constructor(private produtosRepository: ProdutosRepository) {}

  @Post()
  async criarProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();

    produtoEntity.id = randomUUID();
    produtoEntity.nome = dadosDoProduto.nome;
    produtoEntity.usuarioId = dadosDoProduto.usuarioId;
    produtoEntity.valor = dadosDoProduto.valor;
    produtoEntity.quantidade = dadosDoProduto.quantidade;
    produtoEntity.descricao = dadosDoProduto.descricao;
    produtoEntity.categoria = dadosDoProduto.categoria;
    produtoEntity.caracteristicas = dadosDoProduto.caracteristicas;
    produtoEntity.imagens = dadosDoProduto.imagens;

    const produtoCadastrado = this.produtosRepository.salvar(produtoEntity);
    return produtoCadastrado;
  }

  @Get()
  async listarProdutos() {
    return this.produtosRepository.listar();
  }

  @Put('/:id')
  async atualiza(
    @Param('id') id: string,
    @Body() dadosProduto: AtualizaProdutoDTO,
  ) {
    const produtoAlterado = await this.produtosRepository.atualiza(
      id,
      dadosProduto,
    );

    return {
      message: 'Produto atualizado com sucesso',
      produto: produtoAlterado,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const produtoRemovido = await this.produtosRepository.remove(id); 

    return {
        message: 'Produto removido com sucesso',
        produto: produtoRemovido,
    }
  }
}
