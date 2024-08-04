import { topPublisher } from "../../../CustomData";
import team from "../../assets/team.jpg";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about">
      <img src={team} alt="team" />
      <div className="story">
        <h1>The CryptoPlaform Story</h1>
        <p>
          In the rapidly evolving world of digital currencies, CryptoPlatform
          was born out of a passion for making cryptocurrency data accessible to
          everyone. Our journey began with a simple idea: to provide users with
          real-time, reliable, and comprehensive information about the
          ever-changing crypto market.
        </p>
        <p>
          Our team of enthusiasts, developers, and analysts came together to
          create a platform that not only showcases the latest trends and prices
          but also offers insightful content and tools for both beginners and
          seasoned investors. By leveraging the powerful CoinGecko API, we've
          built a user-friendly interface that brings the most up-to-date market
          data to your fingertips.
        </p>
        <p>
          Whether you're here to track your favorite assets, explore new
          investment opportunities, or simply learn more about the blockchain
          world, CryptoPlatform is here to support your journey. Join us as we
          continue to grow and innovate, making the world of cryptocurrencies
          more accessible and engaging for all.
        </p>
      </div>
      <div className="publisher">
        <h1>
          Trusted by Top Industries <br /> Publishers
        </h1>
        <p>
          CryptoPlatform reliable cryptocurrency data often cited by top
          industry publishers.
        </p>
        <div className="marquee">
          {topPublisher.map((publisher, index) => (
            <a key={index} href={publisher.url}>
              <img
                className="marquee-img"
                src={publisher.img}
                alt={publisher.name}
              ></img>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
