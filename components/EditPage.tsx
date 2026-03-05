import PageRenderer from "@/components/PageRenderer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { _get, _put } from "@/lib/connection";
import { PageData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Check, Edit, Eye, EyeOff, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

const TextEditor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

const EditPage = ({
  page,
  refreshData,
}: {
  page: PageData;
  refreshData: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const getPage = useCallback(async () => {
    await _get(`page/${page.slug}`).then((res) => {
      setForm({
        title: res.data.container[0]?.title || res.data.title,
        content: res.data.container[0]?.content || "",
      });
    });
  }, [page]);

  useEffect(() => {
    if (open) {
      getPage();
    } else {
      setForm({
        title: "",
        content: "",
      });
    }
  }, [open, getPage]);

  const submit = async () => {
    if (!form.title || !form.content) {
      alert("Başlık ve açıklama alanı doldurulmalıdır.");
      return;
    }
    setLoading(true);

    await _put("page/" + page.id, form)
      .then((res) => {
        if (res) {
          refreshData();
          alert("Sayfa başarıyla güncellendi.");
        }
      })
      .catch((err) => {
        alert("Sayfa eklenirken bir hata oluştu: " + err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Drawer
      handleOnly
      open={open}
      onOpenChange={(o) => {
        if (!loading) {
          setOpen(o);
        }
      }}
    >
      <DrawerTrigger
        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
      >
        <Edit size={16} />
      </DrawerTrigger>
      <DrawerContent
        className="min-h-[90dvh] p-4 cursor-default"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-row items-center  gap-2 col-span-full mb-4 mx-2">
            <h1 className="text-2xl font-bold flex-1">Düzenle</h1>
            <Button
              variant={"outline"}
              onClick={() => setShowPreview(!showPreview)}
              disabled={loading}
            >
              Önizlemeyi {showPreview ? "Gizle" : "Göster"}
              {showPreview ? <Eye size={16} /> : <EyeOff size={16} />}
            </Button>
            <Button
              variant="default"
              onClick={() => submit()}
              disabled={loading}
            >
              {loading ? (
                <Loader2 size={16} className="mr-1 animate-spin" />
              ) : (
                <Check size={16} className="mr-1" />
              )}
              Kaydet
            </Button>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Kapat
            </Button>
          </div>
          <div
            className={cn(
              "flex flex-col gap-4 p-2 max-h-[80dvh] overflow-auto",
              !showPreview && "col-span-full"
            )}
          >
            <div>
              <Label htmlFor="title" className="mb-1">
                Başlık
              </Label>
              <Input
                id="title"
                disabled={loading}
                value={form.title}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>
            <div>
              <Label htmlFor="content" className="mb-1">
                Açıklama
              </Label>
              <TextEditor
                value={form.content || ""}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, content: value }))
                }
                placeholder="İçerik"
              />
            </div>
          </div>
          <div
            className={cn(
              "max-h-[80dvh] overflow-auto",
              !showPreview && "hidden"
            )}
          >
            <PageRenderer
              data={{
                ...page,
                container: [
                  {
                    ...(page.container[0] ?? {}),
                    content: form.content,
                    title: form.title,
                  },
                ],
              }}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default EditPage;
