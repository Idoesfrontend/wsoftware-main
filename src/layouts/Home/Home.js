import gamestackTexture2Large from 'assets/ai-landing-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/ai-landing-list-large.jpg';
import gamestackTextureLarge from 'assets/ai-landing-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/ai-landing-login-large.jpg';
import sliceTextureLarge from 'assets/website-landing-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/website-landing-large.jpg';
import sprTextureLarge from 'assets/data-landing-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/data-landing-dark-large.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Reliable', 'Customizable', 'Maintanable', 'Robust'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software Made Easy"
        description="At WarwickSoftware, we are proud to be a Montreal-origin company (remote now) pioneering the digital landscape. With our passion for innovation and expertise in custom software and website development, we bring tailored solutions that drive business growth. From cutting-edge applications to captivating online experiences, we empower businesses to thrive in the digital age. Our commitment to excellence, transparent communication, and unwavering customer service sets us apart. Join us on this exciting journey as we transform ideas into reality and propel businesses to new heights. WarwickSoftware: Your partner in digital success."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Custom Data Automation Solutions"
        description="Unleash efficiency with various data tracking, analyzing and optimizing solutions."
        buttonText="Discover Now"
        buttonLink="/projects/data-automation"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Boost Productivity with AI-Powered Solutions"
        description="Experience the transformative power of AI-driven solutions, optimizing productivity and unlocking new levels of efficiency for your business."
        buttonText="Unlock Ai"
        buttonLink="/projects/ai-solutions"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="From Pixels to Profit"
        description="Unleash Your Online Potential with Our Dynamic Website Development and Marketing Solutions"
        buttonText="Free Audit"
        buttonLink="/projects/web"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
