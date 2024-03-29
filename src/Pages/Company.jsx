import styles from "./Company.module.css";
import FooterWithCard from "../Components/FooterWithCard/FooterWithCard";
import LocationCards from "../Components/LocationCards/LocationCards";

const Company = () => {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <section className={styles.sectionAboutUs}>
            <div className={styles.aboutImageHolder}></div>
            <div className={styles.sectionText}>
              <h1>About us</h1>
              <p>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. Weve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. Were always looking forward to creating brands,
                producs, and digital experiences that connect with our clients
                audiences.
              </p>
            </div>
          </section>

          <section className={styles.sectionWorldClass}>
            <div className={styles.worldClassImageHolder}></div>
            <div className={styles.worldClassText}>
              <h1 className={styles.peach}>World-class-talent</h1>
              <p>
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <p>
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </div>
          </section>

          <LocationCards />

          <section className={styles.sectionRealDeal}>
            <div className={styles.realDealImageHolder}></div>
            <div className={styles.worldClassText}>
              <h1 className={styles.peach}>The real deal</h1>
              <p>
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </section>
        </div>
      </main>
      <FooterWithCard />
    </>
  );
};

export default Company;
