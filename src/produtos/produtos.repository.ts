import { Injectable, NotFoundException } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutosRepository {

    private produtos: ProdutoEntity[] = [] 
    
    async listar() {
        return this.produtos;
    }

    async salvar(produto: ProdutoEntity) {
        this.produtos.push(produto);
        return produto;
    }

    private buscarPorId(id: string) {
        const possivelProduto = this.produtos.find((produto) => produto.id === id);

        if (!possivelProduto) {
            throw new NotFoundException('Produto não encontrado');
        }

        return possivelProduto;
    }

    async atualiza(id: string, dadosDoProduto: Partial<ProdutoEntity>) {
        const dadosNaoAtualizaveis = ['id', 'usuarioId']; 
        const produto = this.buscarPorId(id);

        Object.entries(dadosDoProduto).forEach(([chave, valor]) => {
            if (dadosNaoAtualizaveis.includes(chave)) {
                return;
            }

            produto[chave] = valor;
        });
        return produto;
    }

    async remove(id: string) {
        const produtoRemovido = this.buscarPorId(id); 
        this.produtos = this.produtos.filter((produto) => produto.id !== id);
        
        return produtoRemovido;
    }
 
}