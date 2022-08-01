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
          "Magic Eden Playbook: https://contenthub.magiceden.io/playbook",
      },
      {
        title: (
          <h3 className="text-2xl font-medium">Will there be a whitelist?</h3>
        ),
        content: "No. Fair game for everyone",
      },
      {
        title: (
          <h3 className="text-2xl font-medium">What will be the mint price?</h3>
        ),
        content: "Mint price will be 1.5 SOL.",
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
    arrowIcon: "v",
    tabFocus: false,
  };

  return (
    <section className="min-h-[400px] px-12 lg:px-44 my-80 text-white">
      <h1 className="font-oswald text-6xl text-center mb-12">
        Frequently Asked Questions.
      </h1>
      <Faq data={data} styles={styles} config={config} />
    </section>
  );
};

export default FaqComponent;
