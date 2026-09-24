import { useEffect, useState } from "react";
import type { Categoria } from "../model/entities/menu";
import { menuService } from "../model/services/menuService";

export function useHomeViewModel() {
  const [carregando, setCarregando] = useState(true);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [erro, setErro] = useState<unknown>(null);

  useEffect(() => {
    let ativo = true;

    async function carregarCategorias() {
      try {
        setCarregando(true);
        setErro(null);
        const resultado = await menuService.listarCategorias();
        if (ativo) setCategorias(resultado);
      } catch (error) {
        if (ativo) setErro(error);
        console.error("Erro ao carregar categorias:", error);
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregarCategorias();
    return () => {
      ativo = false;
    };
  }, []);

  return { carregando, categorias, erro };
}