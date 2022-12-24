/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Hero from '../../components/hero/hero';
import Feature from '../../components/feature/feature';
import Features from '../../data/features.json';
import '../../scss/main.scss';

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="home__features">
        {Features.map((item) => (
          <Feature
            key={item.id}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
