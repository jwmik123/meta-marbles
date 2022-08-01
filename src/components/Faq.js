import Faq from "react-faq-component";

const FaqComponent = () => {
  const data = {
    rows: [
      {
        title: "What is an NFT?",
        content: "An NFT is an...",
      },
      {
        title: "What is an NFT?",
        content: "An NFT is an...",
      },
      {
        title: "What is an NFT?",
        content: "An NFT is an...",
      },
      {
        title: "What is an NFT?",
        content: "An NFT is an...",
      },
      {
        title: "What is an NFT?",
        content: "An NFT is an...",
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
