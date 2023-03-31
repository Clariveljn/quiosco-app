import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import { cleanDistDir } from "@/next.config";

export default function Admin() {
  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);
  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher);

  console.log(data);
  console.log(error);
  console.log(isLoading);

  return (
    <AdminLayout pagina={"Admin"}>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra tus ordenes</p>
    </AdminLayout>
  );
}
