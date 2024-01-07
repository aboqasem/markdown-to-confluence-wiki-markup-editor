import { Converter } from "~/components/converter";
import { Header } from "~/components/header";

export function App() {
  return (
    <div class="h-screen max-h-screen flex flex-col">
      <Header />

      <Converter />
    </div>
  );
}
