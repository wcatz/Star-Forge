import { CloudUploadIcon, LockClosedIcon, RefreshIcon } from '@heroicons/react/outline';

const features = [
  { name: 'Efficient', description: 'Apples Mac M1 Mini is next generation ARM processor provides unparalleled perfomance using 6 Watts each.', icon: RefreshIcon },
  { name: 'Baremetal', description: 'All independently owned stake pools ran by single pool operators. We work together to provide optimal rewards, education, and decentralization of hardware', icon: LockClosedIcon },
  { name: 'Sustainable', description: 'We offer high quality support, educational content, and tools for both our stake pool operators and delegators. With many forms of communication channels, tutorials, and personal SPO sessions as needed.', icon: CloudUploadIcon }
]

const HomeContent = () => {
  return (
    <div className="relative py-8 sm:py-12 lg:py-24">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-neutral">Pool Info</label>

        <h1 className="text-4xl mt-5 font-semibold tracking-wider text-primary-500 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-700 text-gradient uppercase">
        🌟 Star Forge ⚡

        </h1>
        <p className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl">

        Professional Cardano Stake Pool

        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl">

        The Star Forge was built to showcase just how efficient EVERYONES favorite blockchain is. I welcome you to delegate your ADA.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-secondary bg-opacity-50 indigo-500 ring-inset ring-2 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeContent;