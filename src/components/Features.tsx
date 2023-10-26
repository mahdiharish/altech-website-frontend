import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Pilih Solusi ERP yang Tepat untuk Bisnis Anda',
    description:
      'Altech menyediakan beragam pilihan paket ERP yang dapat disesuaikan dengan kebutuhan bisnis Anda, dari bisnis kecil hingga perusahaan besar.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Analisis Data Mendalam untuk Keputusan yang Lebih Baik',
    description:
      'Altech ERP memberikan Anda wawasan mendalam tentang kinerja bisnis Anda melalui fitur analisis data canggih.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Dukungan 24/7 dan Integrasi AI untuk Sukses Maksimal',
    description:
      'Kami siap memberikan dukungan 24/7 dan teknologi AI yang memungkinkan Anda meramalkan hasil penghasilan dengan akurasi tinggi.',
    href: '#',
    icon: TrashIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mengapa memilih Altech?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami menawarkan layanan dengan teknologi mutakhir, servis yang profesional, semuanya diberikan dengan harga yang terjangkau.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
