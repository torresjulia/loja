import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength, Min, ValidateNested } from 'class-validator';

export class CaracteristicaProdutoDTO {

    @IsString()
    @IsNotEmpty({ message: 'Nome da característica não pode ser vazio' })
    nome: string; 

    @IsString()
    @IsNotEmpty({ message: 'Descriçao da característica não pode ser vazio' })
    descricao: string;
}

export class ImagemProdutoDTO {
    
    @IsUrl(undefined, { message: 'URL para imagem inválida' })
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    descricao: string;
}

export class CriaProdutoDTO {

    @IsString()
    @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
    nome: string; 

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    valor: number; 

    @Min(0, { message: 'Quantidade mínima inválida' })
    quantidade: number; 

    @IsString()
    @IsNotEmpty({ message: 'Descrição do produto não pode sr vazia' })
    @MaxLength(1000, { message: 'Descrição não pode ter mais de 1000 caracteres', 

    })
    descricao: string; 

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: string; 

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO

    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    categoria: string; 

    @IsDateString()
    dataCriacao: Date;

    @IsDateString()
    dataAtualizacao: Date;

}
