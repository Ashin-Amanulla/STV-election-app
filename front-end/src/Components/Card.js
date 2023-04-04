function Card({ name, desc, imageUrl, onCandidateClick }) {
    const handleCandidateClick = () => {
        onCandidateClick(name)
    }
  return (
<div className="mb-8 lg:mb-0" onClick={handleCandidateClick}>
<div className="relative block rounded-lg shadow-lg bg-white p-6">
  <div className="lg:flex flex-row items-center">
    <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 lg:pr-6">
      <img
          src={imageUrl}
          alt={name}
          className="w-full rounded-md mb-6 lg:mb-0"
          />
    </div>
    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
      <h5 className="text-lg font-bold mb-2">{name}</h5>
      <p className="text-gray-500 mb-4">{desc}</p>
    </div>
  </div>
</div>
</div>
  )
}

export default Card