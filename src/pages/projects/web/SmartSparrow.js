import backgroundSprLarge from 'assets/data-background1-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/data-background1.jpg';
import imageSprComponentsDarkLarge from 'assets/mobile.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/mobile.png';
import imageSprComponentsLightLarge from 'assets/mobile.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/mobile.png';
// import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
// import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
// import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
// import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
// import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
// import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/web-first-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/web-first.jpg';
import imageSprLessonBuilderLightLarge from 'assets/web-first-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/web-first.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
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
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
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
// import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

// const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
// const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Web, Apps and Marketing';
const description =
  'Creating cutting-edge websites, mobile apps, and delivering effective marketing strategies for business growth.';
const roles = [
  'Web development',
  'Mobile app development',
  'Social media marketing',
  'Search engine optimization (SEO)',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.8 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
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
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
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
            <ProjectSectionHeading>Our Bead and Butter</ProjectSectionHeading>
            <ProjectSectionText>
              Unlock the potential of your business with WinchesterSoftwares cutting-edge
              websites and mobile apps. Our expert team specializes in crafting innovative
              digital solutions that go beyond aesthetics. By leveraging state-of-the-art
              technology, we streamline your internal processes, saving you valuable time
              and money. Experience improved efficiency as our custom-built applications
              automate repetitive tasks and enhance collaboration. But it does not stop
              there – our solutions are designed to boost your bottom line. Seamlessly
              integrated e-commerce platforms and intuitive user experiences drive sales
              and maximize customer engagement.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
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
            {/* <ProjectTextRow>
              <ProjectSectionHeading>The aero design system</ProjectSectionHeading>
              <ProjectSectionText>
                To streamline the design process across designers and engineers for such a
                large project, it was important to lay the foundations with a strong,
                flexible design system that could evolve during the product’s development
                cycle. This would inform both the aesthetics and user experience across
                the product itself as well as the website and marketing material.
              </ProjectSectionText>
            </ProjectTextRow> */}
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection>
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
                  <ProjectSectionHeading>Engineers do Sales</ProjectSectionHeading>
                  <ProjectSectionText>
                    Going Beyond Sales, We Dive Deep to Understand the Root Cause of Your
                    Challenges, Delivering Tailored Solutions That Truly Solve the
                    Problem, Not Just Make a Sale.
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
              <ProjectSectionHeading>More Efficiency</ProjectSectionHeading>
              <ProjectSectionText>
                Experience a seamless project journey with WinchesterSoftware. From
                concept to deployment, we take care of every aspect of project management
                and the creative process. Through collaborative calls and emails, your
                input guides our expert team to craft tailor-made solutions. No coding or
                learning required from your end. Sit back, relax, and let us transform
                your vision into a fully functional, hassle-free turnkey solution.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                  : [imageSprStoryboarderLight, imageSprStoryboarderLightLarge]
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
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Book a Consultation today!</ProjectSectionHeading>
              <ProjectSectionText>
                Unlock the potential of your business with WinchesterSoftwares exceptional
                custom-tailored software solutions.{' '}
                <Link href="https://calendly.com/d/z6g-8d7-dnp/introductory-call?month=2023-05">
                  Call us today
                </Link>{' '}
                for a consultation and discover how we can empower your growth through
                innovative digital solutions crafted exclusively for your needs.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
          {/* <div className={styles.sidebarImages}>
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
            </div> */}
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
