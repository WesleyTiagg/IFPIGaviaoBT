import { useEffect, useState } from "react";
import type { Produto } from "../model/entities/menu";
import { menuService } from "../model/services/menuService";

export function useItemDetailViewModel(produtoId?: string) {
  const [carregando, setCarregando] = useState(true);
  const [produto, setProduto] = useState<Produto | undefined>();
  const [quantidade, setQuantidade] = useState(1);
  const [erro, setErro] = useState<unknown>(null);

  useEffect(() => {
    let ativo = true;

    async function carregarDetalhes() {
      if (!produtoId) {
        setCarregando(false);
        return;
      }
      try {
        setCarregando(true);
        setErro(null);
        const resultado = await menuService.buscarProdutoPorId(produtoId);
        if (ativo) {
          setProduto(resultado);
          setQuantidade(1);
        }
      } catch (error) {
        if (ativo) setErro(error);
        console.error("Erro ao buscar detalhes do produto:", error);
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregarDetalhes();
    return () => {
      ativo = false;
    };
  }, [produtoId]);

  function decrementarQuantidade() {
    setQuantidade((valorAtual) => Math.max(1, valorAtual - 1));
  }

  function incrementarQuantidade() {
    setQuantidade((valorAtual) => valorAtual + 1);
  }

  return {
    carregando,
    produto,
    quantidade,
    erro,
    decrementarQuantidade,
    incrementarQuantidade,
  };
}