function PromoSection() {
  return (
    <div className="bg-[#FFEAEA] py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#9A208C] sm:text-4xl underline underline-offset-8">
          Voting Explained
        </h2>
        <p className="mt-4 text-md text-gray-500">
          Here at Roehampton, we use a <strong className="text-gray-700">Single Transferable Voting</strong> system as we
          feel this is the most representative to our student body
          <br />
          <br/>
          Most elections will use the <strong className="text-gray-700">'First Past The Post'</strong> method whereby the
          candidate with the most votes is declared the winner.
          <br />
          <br />
          Using a single transferable vote, you are able to select your
          candidates in order of preference, Ranking them from most to least
          favoured. Therefore, your voice is always represented no matter what
          happens.
          <br />
          <br />
          Candidates are required to receive at least 50% of the votes cast and
          if no candidate has received this margin in the first round of voting,
          the candidate with the least votes is removed. The votes cast will
          then be awarded to the person you have voted as your second favourite.
          <br />
          <br />
          Candidates will be removed and their votes split until a clear
          majority has been decided for one candidate.
          <br />
          <br />
          This means that even if your most favoured candidate is removed in the
          early rounds, your voice is still represented and can create an
          influence on the overall outcome.
        </p>
        <div className="mt-10 mx-auto w-full sm:max-w-lg lg:max-w-5xl">
          <div className="iframe-container">
            <iframe
              className="rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/_QstnZjkFEM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoSection;
