import Faq from "react-faq-component";

const FaqComponent = () => {
  const data = {
    rows: [
      {
        title: <h3 className="text-2xl font-medium">What is an NFT?</h3>,
        content:
          "An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.",
      },
      {
        title: (
          <h3 className="text-2xl font-medium">How can I buy a Meta Marble?</h3>
        ),
        content:
          "You will be able to mint a Meta Marble through the link in our\n" +
          "Discord or clicking on the Mint button on this page.",
      },
      {
        title: (
          <h3 className="text-2xl font-medium">
            How do I get $SOL in my wallet?
          </h3>
        ),
        content:
          "We would love to refer you to the Magic Eden Playbook. Here you'll find exactly how to create and use your wallet.\n" +
          'Magic Eden Playbook: <a href=\'https://contenthub.magiceden.io/playbook\'>https://contenthub.magiceden.io/playbook <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">\n' +
          '  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>\n' +
          '  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>\n' +
          "</svg></a>",
      },
      {
        title: (
          <h3 className="text-2xl font-medium">Will there be a whitelist?</h3>
        ),
        content: "No.",
      },
      {
        title: (
          <h3 className="text-2xl font-medium">What will be the mint price?</h3>
        ),
        content:
          "Mint price will be at 1 SOL for pre sale and 1.5 SOL on regular launch.",
      },
    ],
  };

  const styles = {
    bgColor: "black",
    rowTitleColor: "white",
    rowContentColor: "white",
    arrowColor: "white",
  };

  const config = {
    animate: true,
    arrowIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-down-fill"
        viewBox="0 0 16 16"
      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    ),
    tabFocus: false,
  };

  return (
    <section className="min-h-[400px] px-12 lg:px-44 my-40 text-white">
      <h1 className="font-oswald text-6xl text-center mb-12">
        Frequently Asked Questions.
      </h1>
      <Faq data={data} styles={styles} config={config} />
    </section>
  );
};

export default FaqComponent;
