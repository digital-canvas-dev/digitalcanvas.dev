import { IndexSection } from '~/components/index/IndexSection';
import SiteBuilder1 from '~/components/index/site-builders/SiteBuilder1.webp';
import SiteBuilder2 from '~/components/index/site-builders/SiteBuilder2.webp';
import SiteBuilder3 from '~/components/index/site-builders/SiteBuilder3.webp';

export const WebsiteBuilders = () => {
  const rowStyles =
    'grid grid-flow-col auto-cols-auto gap-6 align-start md:grid-cols-2';

  return (
    <IndexSection>
      <div className="text-balance grid grid-flow-row items-start justify-between gap-12 md:auto-cols-auto md:gap-16">
        <div className={rowStyles}>
          <div>
            <h3 className="mb-14 font-heading text-3xl text-brand md:mt-6">
              Website builder management
            </h3>
            <div className="font-body font-light text-brand text-opacity-80">
              <p>
                If you prefer a website builder or content management system
                (CMS) such as WordPress&trade;, Squarespace&trade;, Wix&trade;
                or another solution, we can create it, manage it, and keep it up
                to date for you.
              </p>
              <p>
                We can take care of the plugins, integrations, and analytics so
                you can focus on your business.
              </p>
            </div>
          </div>
          <img className="hidden md:block" src={SiteBuilder1} alt="" />
        </div>
        <div className={rowStyles}>
          <img className="hidden md:block" src={SiteBuilder2} alt="" />
          <div>
            <h4 className="mb-6 font-heading text-2xl text-brand md:mt-6">
              Setup
            </h4>
            <div className="font-body font-light text-brand text-opacity-80">
              <p>
                First impressions are important! Your brand new website should
                reflect the quality of your work.
              </p>
              <p>
                We can work with you or a designer to do an initial set up of
                your website and ensure you're on track to update it as you need
                to!
              </p>
            </div>
          </div>
        </div>
        <div className={rowStyles}>
          <div>
            <h4 className="mb-6 font-heading text-2xl text-brand md:mt-6">
              Updates
            </h4>
            <div className="font-body font-light text-brand text-opacity-80">
              <p>
                As technologies evolve, website must too. They require regular
                technical updates and improvements to stay ahead.
              </p>
              <p>
                We ensure your site stays fresh, secure, and fully functional.
                We handle regular content updates, software upgrades, and
                technical glitches. By conducting site backups, optimizing
                performance, and monitoring analytics, we help you keep pace
                with the ever-evolving digital landscape locally and beyond.
              </p>
            </div>
          </div>
          <img className="hidden md:block" src={SiteBuilder3} alt="" />
        </div>
      </div>
    </IndexSection>
  );
};