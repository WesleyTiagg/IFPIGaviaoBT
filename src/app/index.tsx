import { useRouter } from "expo-router";
import { HomeView } from "../view/HomeView";
import { useHomeViewModel } from "../viewmodel/useHomeViewModel";

export default function HomeScreen() {
  const router = useRouter();
  const viewModel = useHomeViewModel();
  return <HomeView {...viewModel} onSelecionarCategoria={(id) => router.push(`/category/${id}` as any)} />;
}
