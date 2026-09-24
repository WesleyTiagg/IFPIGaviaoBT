import {
  buscarProdutoPorId,
  listarCategorias,
  listarProdutosPorCategoria,
} from "../repositories/menuRepository";

export const menuService = {
  listarCategorias,
  listarProdutosPorCategoria,
  buscarProdutoPorId,
};

export function formatarPreco(valor: number): string {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}