"use client";

import { cn } from "@/lib/utils";
import { toast as sonnerToast } from "sonner";

export default function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      variant={toast.variant ?? "default"}
      //   button={{
      //     label: toast.button.label,
      //     onClick: () => console.log("Button clicked"),
      //   }}
    />
  ));
}

function Toast(props: ToastProps) {
  const { title, description, variant } = props;

  return (
    <div
      className={cn(
        "flex rounded-lg  shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4",
        variant === "success" && "bg-success text-success-foreground",
        variant === "error" && "bg-destructive text-destructive-foreground",
        variant === "default" && "bg-white "
      )}
    >
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-sm font-medium ">{title}</p>
          <p className="mt-1 text-sm ">{description}</p>
        </div>
      </div>
      {/* <div className="ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
        <button
          className="rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100"
          onClick={() => {
            button.onClick();
            sonnerToast.dismiss(id);
          }}
        >
          {button.label}
        </button>
      </div> */}
    </div>
  );
}

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  variant?: "success" | "error" | "default";
  //   button: {
  //     label: string;
  //     onClick: () => void;
  //   };
}
