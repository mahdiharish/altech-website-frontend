export default function About() {
  return (
    <div className="bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Altech Company</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami adalah perusahaan software berbasis di Indonesia, dan kami membuat layanan IT bagi para perusahaan yang menginginkan sistem ERP yang mutakhir.<br>
            </br>
            Kami memiliki komitmen untuk memberikan yang terbaik dan memberikan servis yang terbaik untuk menyajikan solusi terkait dalam bidang teknologi untuk membantu para pelaku bisnis dalam mendapatkan hasil terbaik.
          </p>
        </div>
        <div className="flex justify-center items-center lg:mt-0">
          <img src="/src/assets/undraw_meet_the_team_re_4h08.svg" alt="Altech Company" className="max-w-lg w-full rounded-2xl object-cover sm:mt-16 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
        </div>
      </div>
    </div>
  );
}