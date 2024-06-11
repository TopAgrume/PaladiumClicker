import {usePlayerInfoSharedStore} from "@/stores/use-player-info-store.ts";
import {useLoadPlayerInfoSharedMutation} from "@/hooks/use-load-player-info-mutation.ts";
import {useEffect} from "react";
import OptimizerClickerPage from "@/pages/OptimizerClicker/OptimizerClicker.tsx";


const SharedProfil = () =>
{
  const { data: playerInfo } = usePlayerInfoSharedStore();
  const {mutate: loadPlayerInfo, isPending} = useLoadPlayerInfoSharedMutation();
  async function loadSharedProfil() {
    if (isPending) {
      return;
    }
    console.log("Fetching information shared Profil");
/*
    loadPlayerInfo(pseudoList[index], {
      onSuccess: () => {
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
    */

  }



  useEffect(() => {
    loadSharedProfil()
    setInterval(() => {
      loadSharedProfil()
    }, 1000)
  }, []);

  return <OptimizerClickerPage sharedProfil={true}/>
}

export default SharedProfil;