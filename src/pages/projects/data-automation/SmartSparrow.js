// import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
// import backgroundSpr from 'assets/spr-background.jpg';
// import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
// import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
// import imageSprComponentsDark from 'assets/spr-components-dark.png';
// import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
// import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
// import imageSprComponentsLight from 'assets/spr-components-light.png';
// import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
// import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
// import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
// import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
// import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
// import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
// import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
// import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
// import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
// import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large1.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion1.mp4';
// import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
// import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
// import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
// import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
// import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
// import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
// import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
// import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
// import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
// import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
// import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
// import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large1.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark1.png';
// import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
// import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
// import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
// import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';
import dashboard1 from 'assets/dashboard1-data-automation.png';
import databackground1 from 'assets/data-background1.jpg';
import databackground1large from 'assets/data-background1-large.jpg';
const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Simplify and Optimize:';
const description =
  'Welcome to the world of simplified and optimized data automation solutions, where efficiency meets effectiveness. In this digital era, the management and utilization of data have become paramount for businesses to stay competitive and thrive. That is where our custom data automation solutions step in, offering you a transformative approach to handling your data-driven operations.';
const roles = [
  'Workflow Automation',
  'Intelligent Automation',
  'Data Validation',
  'Automated Reporting',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  // const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  // const themes = ['dark', 'light'];

  // const handleThemeChange = index => {
  //   dispatch({ type: 'setTheme', value: themes[index] });
  // };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.8 : 0.8}
          src={databackground1}
          srcSet={`${databackground1.src} 1080w, ${databackground1large.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://calendly.com/d/z6g-8d7-dnp/introductory-call"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={isDark ? [dashboard1, dashboard1] : [dashboard1, dashboard1]}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Solution</ProjectSectionHeading>
            <ProjectSectionText>
              Experience the revolution in data solutions tailored specifically for
              industrial companies. With our custom software expertise, we empower you to
              harness the full potential of your data. Streamline operations, optimize
              resource allocation, and gain actionable insights like never before. Our
              innovative solutions bring automation to data collection, analysis, and
              reporting, enabling you to make informed decisions swiftly and with
              precision. Maximize efficiency, reduce downtime, and unlock a new era of
              productivity. Discover how our custom software can transform your industrial
              processes, driving success and elevating your business to new heights
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        {/* <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprComponentsDark, imageSprComponentsDarkLarge]
                  : [imageSprComponentsLight, imageSprComponentsLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>The aero design system</ProjectSectionHeading>
              <ProjectSectionText>
                To streamline the design process across designers and engineers for such a
                large project, it was important to lay the foundations with a strong,
                flexible design system that could evolve during the product’s development
                cycle. This would inform both the aesthetics and user experience across
                the product itself as well as the website and marketing material.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprDesignSystemDark, imageSprDesignSystemDarkLarge]
                  : [imageSprDesignSystemLight, imageSprDesignSystemLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Design system docs</ProjectSectionHeading>
              <ProjectSectionText>
                A design system is useless if no one knows how to use it, so we put
                together a comprehensive documentation website to cover principles, ux,
                accessibility, and component guidelines for designers and engineers
                working with the system.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>GPS Data</ProjectSectionHeading>
                  <ProjectSectionText>
                    Embark on a journey of sales growth and operational efficiency with
                    our custom software solutions. Discover the untapped potential of GPS
                    data, empowering businesses to optimize routes, target customers, and
                    unlock new revenue streams.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotionLarge, width: 2560 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Decision-Making with Data Dashboards
              </ProjectSectionHeading>
              <ProjectSectionText>
                Experience a paradigm shift in decision-making with our custom software
                solution, empowering companies to leverage data dashboards for real-time
                insights, informed strategies, and enhanced business performance. Unleash
                your full potential today.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                  : [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
              }
              placeholder={
                isDark
                  ? imageSprStoryboarderDarkPlaceholder
                  : imageSprStoryboarderLightPlaceholder
              }
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  An extensible plugin ecosystem usable by everyone
                </ProjectSectionHeading>
                <ProjectSectionText>
                  The most powerful aspect of the platform is the ability to create custom
                  plugins for any content, whether it be a degree, course, lesson, screen,
                  or interactive component. Out of the box these can be made configurable
                  with minimal effort from developers. Learning designers can then edit
                  everything using a common configuration interface.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema2Dark, imageSprSchema2DarkLarge]
                    : [imageSprSchema2Light, imageSprSchema2LightLarge]
                }
                placeholder={
                  isDark
                    ? imageSprSchema2DarkPlaceholder
                    : imageSprSchema2LightPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                    : [imageSprSchema1Light, imageSprSchema1LightLarge]
                }
                placeholder={
                  isDark
                    ? imageSprSchema1DarkPlaceholder
                    : imageSprSchema1LightPlaceholder
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection> */}
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Pacific ring of fire',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Ruapehu',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'St. Helens',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Krakatoa',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Parícutin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Kīlauea',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Mantle',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Outer core',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inner core',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Next-generation Methods for Better Results
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Unlock the power of practicality and utility with our systematic
                      approach. We design custom data software solutions that are tailored
                      to your needs and deliver tangible results.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Unmasking the Core Problem
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Unveil the Truth: Navigating to the Root Cause with Precision
                      through best practices and engineering-centric approach
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Software
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Software mastery is our core, backed by data-driven insights that
                      fuel our commitment to excellence and innovation.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Competitors', 'Off-the-shelf Solutions', 'WarwickSoftware']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Our Guarantee
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      We excel in meeting deadlines, fulfilling requirements, and
                      collaborating closely with clients to uncover their true needs for
                      unparalleled satisfaction.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Book a Consultation</ProjectSectionHeading>
              <ProjectSectionText>
                If you are unsure if we can help then feel free to book a call with one of
                our engineers today{' '}
                <Link href="https://calendly.com/d/z6g-8d7-dnp/introductory-call">
                  Free Consultation.
                </Link>{' '}
                No Project is too small.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
