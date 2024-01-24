// import Layout from "./components/layout";
// import Header from "./components/header";
// import Board from "./components/board";
import Layout from "@/components/layout";
import { TrelloProvider } from "./trelloContext";
import Header from "@/components/header";
import Board from "@/components/board";

export default function Home() {
  return (
    <TrelloProvider>
      <Layout>
        <Header />
        <Board />
      </Layout>
    </TrelloProvider>
  );
}
