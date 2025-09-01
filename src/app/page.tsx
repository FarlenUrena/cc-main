import { Metadata } from "next";
import FinalLayout from './../components/Layout/FinalLayout';

export const metadata: Metadata = {
  title: "Code Craftz",
  description: "Empresa enfocada en páginas y aplicaciones web",
  // other metadata
};

export default function Home() {
  return (
    <>
      <FinalLayout />
    </>
  );
}
