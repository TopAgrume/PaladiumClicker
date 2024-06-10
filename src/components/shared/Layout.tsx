import React, {useEffect} from "react";
import Navbar from "@/components/NavBar";
import GradientText from "./GradientText";
import {useParams} from "react-router-dom";
import useLoadPlayerInfoMutation from "@/hooks/use-load-player-info-mutation.ts";
import {toast} from "sonner";
import {AxiosError} from "axios";
import {usePlayerInfoStore} from "@/stores/use-player-info-store.ts";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { data: playerInfo } = usePlayerInfoStore();

  const {pseudo} = useParams();
  const {mutate: loadPlayerInfo, isPending} = useLoadPlayerInfoMutation();

  useEffect(() => {
    if (pseudo !== undefined && !isPending) {
      loadPlayerInfo(pseudo, {
        onSuccess: () => {
          console.log("Profil importé avec succès");
          toast.success("Profil importé avec succès");
        },
        onError: (error) => {
          const message = error instanceof AxiosError ?
              error.response?.data.message ?? error.message :
              typeof error === "string" ?
                  error :
                  "Une erreur est survenue dans l'importation du profil";
          toast.error(message);
        }
      });
    }
  }, [playerInfo]);

  return (
    <div style={{ position: "relative", minHeight: "100vh"}}>
      <header className="h-16 w-full bg-primary backdrop-blur text-primary-foreground sticky top-0 z-10 border-b">
        <Navbar />
      </header>
      <main className="container py-4 pb-16">
        {children}
      </main>
      <footer className="p-4 bg-accent text-center w-full absolute bottom-0 h-14">
        L'application est{" "}
        <span className="font-bold">ni affiliée ni approuvée</span>{" "}
        par <GradientText><a href="https://paladium-pvp.fr/" target="_blank">Paladium Games</a></GradientText>.
      </footer>
    </div>
  );
}

export default Layout;