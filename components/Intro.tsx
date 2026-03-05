"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

const Intro = () => {
  const [open, setOpen] = useState(false);
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    handleOpenChange(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setWatched(true);
      setOpen(open);
    } else if (!watched) {
      setOpen(open);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => handleOpenChange(o)}>
      <DialogContent className="bg-transparent border-0 p-0 !max-w-[90%] !max-h-[40%]  md:!max-w-[60%] md:!max-h-[60vh] w-full h-full aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/w22v03Iidks?si=N4RZIbfX1bUwsG9_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default Intro;
