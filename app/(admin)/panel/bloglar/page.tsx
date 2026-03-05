"use client";
import EditPage from "@/components/EditPage";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { _get } from "@/lib/connection";
import { PageData } from "@/lib/types";
import { ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<PageData[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await _get(`pages/type/bloglar`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  return (
    <div className="w-full overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Bloglar</h1>
      {loading ? (
        <div className="flex justify-center items-center w-full min-h-[500px]">
          <Loader2 className="animate-spin text-primary" size={32} />
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Başlık</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Oluşturulma Tarihi</TableHead>
              <TableHead>Değişiklik Tarihi</TableHead>
              <TableHead className="text-right">Aksiyonlar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((page) => (
              <TableRow key={page.id}>
                <TableCell className="font-medium">{page.title}</TableCell>
                <TableCell>
                  <Link
                    href={`/blog/${page.slug}`}
                    target="_blank"
                    className="text-primary/90 hover:text-primary inline-flex items-center gap-2 hover:underline "
                  >
                    <ExternalLink size={16} />
                    <p className="truncate">{page.slug}</p>
                  </Link>
                </TableCell>
                <TableCell>{page.create_date}</TableCell>
                <TableCell>{page.update_date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <EditPage page={page} refreshData={getData} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Toplam</TableCell>
              <TableCell className="text-right">{data.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
}
