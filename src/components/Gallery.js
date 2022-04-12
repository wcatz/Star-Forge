

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: "./m1-star-forge.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "./m1-star-forge.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  // More files...
];

export default function Galleryconetnt() {
  return (
    <div className="container mt-36">
      <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group block w-full aspect-w-12 aspect-h-10 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 overflow-hidden">
              <img
                src={file.source}
                alt=""
                className="object-cover pointer-events-none group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="mt-2 block text-sm font-mediumtruncate pointer-events-none">
              {file.title}
            </p>
            <p className="block text-sm font-medium pointer-events-none">
              {file.size}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
