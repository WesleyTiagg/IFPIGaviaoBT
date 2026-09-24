import { useLocalSearchParams, useRouter } from "expo-router";
import { ItemDetailView } from "../../view/ItemDetailView";
import { useItemDetailViewModel } from "../../viewmodel/useItemDetailViewModel";

export default function ItemDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string | string[] }>();
  const produtoId = Array.isArray(id) ? id[0] : id;
  const viewModel = useItemDetailViewModel(produtoId);
  return <ItemDetailView {...viewModel} onVoltar={() => router.back()} onDiminuir={viewModel.decrementarQuantidade} onAumentar={viewModel.incrementarQuantidade} />;
}
