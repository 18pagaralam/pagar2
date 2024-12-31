import supabase from "../../utils/supabase";
import CardMahasiswa from "../components/CardMahasiswa";
import SearchFrom from "../components/SearchFrom";

export const revalidate = 20;

export default async function Home() {
  const { data: mahasiswa, error } = await supabase.from("mahasiswa").select('*').order("id", { ascending: true });
  console.log(mahasiswa);

  if (error) {
    console.log(error);
  }

  return(
    <>
      <div className="flex justify-between p-4">
        <h1 className='text-2xl'>judul</h1>
        <SearchFrom />
        
      </div>
      <div className='flex gap-2'>
      {mahasiswa && mahasiswa.map((mhs, idx) => (
          <CardMahasiswa
            key = {idx}
            nim = {mhs.nim}
            nama = {mhs.nama}
            angkatan = {mhs.angkatan}
            prodi = {mhs.prodi}
            foto = {mhs.foto}
          />
        ))}
      </div>
    </>
  );
}