import type { ImageSourcePropType } from "react-native";

export interface Categoria {
  id: string;
  nome: string;
  corBorda: string;
  corSeta: string;
  imagem: ImageSourcePropType;
}

export interface Produto {
  id: string;
  categoriaId: string;
  categoriaNome: string;
  nome: string;
  preco: number;
  descricao: string;
  proteinas: string;
  carboidratos: string;
  gorduras: string;
  imagem: ImageSourcePropType;
  imagemGrande: ImageSourcePropType;
}