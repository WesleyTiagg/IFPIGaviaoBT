import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import type { Categoria } from "../model/entities/menu";
import { LoadingState } from "./components/LoadingState";

interface HomeViewProps {
  categorias: Categoria[];
  carregando: boolean;
  onSelecionarCategoria: (categoriaId: string) => void;
}

export function HomeView({ categorias, carregando, onSelecionarCategoria }: HomeViewProps) {
  return (
    <View style={styles.tela}>
      <View style={styles.cabecalhoContainer}>
        <SafeAreaView edges={["top"]}>
          <View style={styles.cabecalhoConteudo}>
            <View style={styles.logoLinha}>
              <Image source={require("../../assets/images/menu/gaviao-logo.png")} style={styles.logoGaviao} resizeMode="contain" />
              <Text style={styles.tituloHeader}>IFPI Gavião</Text>
            </View>
            <Text style={styles.subtituloTexto}>O que você deseja pedir hoje?</Text>
            <Text style={styles.subtituloDestaque}>Escolha uma categoria:</Text>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView contentContainerStyle={styles.conteudoScroll} showsVerticalScrollIndicator={false}>
        {carregando ? (
          <LoadingState texto="Consultando cardápio..." paddingVertical={60} />
        ) : (
          <View style={styles.gridCategorias}>
            {categorias.map((categoria) => (
              <TouchableOpacity key={categoria.id} activeOpacity={0.88} style={[styles.cardCategoria, { borderColor: categoria.corBorda }]} onPress={() => onSelecionarCategoria(categoria.id)}>
                <Image source={categoria.imagem} style={styles.imagemCategoria} resizeMode="cover" />
                <View style={styles.rodapeCard}>
                  <Text style={styles.nomeCategoria}>{categoria.nome}</Text>
                  <Ionicons name="arrow-forward" size={20} color={categoria.corSeta} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#ffffff" },
  cabecalhoContainer: { backgroundColor: "#501673", borderBottomLeftRadius: 32, borderBottomRightRadius: 32, paddingBottom: 28, paddingHorizontal: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 6 },
  cabecalhoConteudo: { alignItems: "center", paddingTop: 12 },
  logoLinha: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 14 },
  logoGaviao: { width: 38, height: 38, marginRight: 10 },
  tituloHeader: { fontSize: 26, fontWeight: "bold", color: "#ffffff", letterSpacing: 0.3 },
  subtituloTexto: { fontSize: 15, color: "#ffffff", textAlign: "center", opacity: 0.95, lineHeight: 22 },
  subtituloDestaque: { fontSize: 15, fontWeight: "600", color: "#ffffff", textAlign: "center", lineHeight: 22 },
  conteudoScroll: { paddingVertical: 28, paddingHorizontal: 16, flexGrow: 1 },
  gridCategorias: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 14 },
  cardCategoria: { flex: 1, backgroundColor: "#ffffff", borderRadius: 18, borderWidth: 2, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.08, shadowRadius: 6, elevation: 3 },
  imagemCategoria: { width: "100%", height: 210 },
  rodapeCard: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 12, backgroundColor: "#ffffff" },
  nomeCategoria: { fontSize: 16, fontWeight: "bold", color: "#1a1a1a" },
});