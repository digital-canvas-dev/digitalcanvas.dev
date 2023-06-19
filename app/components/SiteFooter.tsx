import { IconBrandInstagram } from '@tabler/icons-react';
import LogoLight from '../../public/LogoLight.svg';

export const SiteFooter = () => {
  return (
    <footer className="text-balance mx-auto grid w-full auto-cols-auto grid-flow-col justify-between gap-20 bg-brand px-8 py-10 text-white/80 md:px-32">
      <div className="grid grid-flow-row auto-rows-auto gap-4 text-xs">
        <img src={LogoLight} alt="" className="h-16" />
        <p>
          <a
            href="https://instagram.com/digitalcanvas.dev"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandInstagram className="text-white" />
          </a>
        </p>
        <p>
          This site collects anonymized usage statistics that cannot be used to
          identify anyone, it is only for aggregated data to help my business.
          Use an ad blocker to opt out.
        </p>
        <p>
          The images "OfficeWhiteboard" and "StartupOffice" and some text were
          created with generative AI.
        </p>
        <p>Copyright &copy; 2023 Digital Canvas LLC</p>
      </div>
      <div>
        <h5 className="mb-4 font-body text-lg">Technical Expertise</h5>
        <ul className="font-body text-xs text-white/80 [&>li]:mt-2">
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Modern HTML/CSS</li>
          <li>Responsive SPAs</li>
          <li>Browser Extensions</li>
          <li>Remix, Next.JS, Gatsby</li>
          <li>Component Libraries & Design Systems</li>
          <li>Automated testing with Jest & Cypress</li>
        </ul>
      </div>
    </footer>
  );
};
