import { Inter } from "next/font/google";
import CohortCalculate from "./components/CohortCalculate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <CohortCalculate />
    </div>
  );
}
