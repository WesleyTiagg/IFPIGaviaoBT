import { useEffect, useState } from "react";
import type { Produto } from "../model/entities/menu";
import { menuService } from "../model/services/menuService";

export function useCategoryViewModel(categoriaId?: string) {
  const [carregando, setCarregando] = useState(true);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [erro, setErro] = useState<unknown>(null);

  useEffect(() => {
    let ativo = true;

    async function carregarProdutos() {
      if (!categoriaId) {
        setCarregando(false);
        return;
      }
      try {
        setCarregando(true);
        setErro(null);
        const resultado = await menuService.listarProdutosPorCategoria(categoriaId);
        if (ativo) setProdutos(resultado);
      } catch (error) {
        if (ativo) setErro(error);
        console.error("Erro ao buscar produtos da categoria:", error);
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregarProdutos();
    return () => {
      ativo = false;
    };
  }, [categoriaId]);

  return { carregando, produtos, erro };
}