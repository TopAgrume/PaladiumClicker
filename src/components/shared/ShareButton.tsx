import {Button} from "@/components/ui/button.tsx";
import {FaShareAlt} from "react-icons/fa";
import {toast} from "sonner";
import {usePlayerInfoStore} from "@/stores/use-player-info-store.ts";

export default function ShareButton() {
  const {data: playerInfo} = usePlayerInfoStore();

  function OnClick() {
    if (playerInfo === null || playerInfo.username === "") {
      console.log(window.location.href)
      if (navigator.clipboard === undefined)
        toast.error("Error while copying link to clipboard");
      else {
        navigator.clipboard.writeText(window.location.href);
        toast.info("Lien copié dans le presse-papier");
      }

      return;
    }

    console.log(window.location.href + "/" + playerInfo.username)
    if (navigator.clipboard === undefined)
      toast.error("Error while copying link to clipboard");
    else {
      navigator.clipboard.writeText(window.location.href + "/" + playerInfo.username);
      toast.info("Lien copié dans le presse-papier");
    }


  }

  return (
      <>
        <Button size="icon" variant="ghost" onClick={OnClick}>
          <FaShareAlt/>
        </Button>
      </>

  )
      ;
}
