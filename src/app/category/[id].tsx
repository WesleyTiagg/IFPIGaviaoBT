import { useLocalSearchParams, useRouter } from "expo-router";
import { CategoryView } from "../../view/CategoryView";
import { useCategoryViewModel } from "../../viewmodel/useCategoryViewModel";

export default function CategoryScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string | string[] }>();
  const categoriaId = Array.isArray(id) ? id[0] : id;
  const viewModel = useCategoryViewModel(categoriaId);
  const nomeCategoria = categoriaId === "bebidas" ? "Bebidas" : categoriaId === "comidas" ? "Comidas" : "Cardápio";
  return <CategoryView {...viewModel} nomeCategoria={nomeCategoria} onVoltar={() => router.back()} onSelecionarProduto={(produtoId) => router.push(`/item/${produtoId}` as any)} />;
}
