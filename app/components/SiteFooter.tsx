import LogoLight from '../../public/LogoLight.svg';

interface FooterProps {}

export const SiteFooter = ({}: FooterProps) => {
  return (
    <footer className="text-balance mx-auto grid w-full max-w-screen-xl auto-cols-auto grid-flow-col justify-between gap-20 bg-brand px-8 py-10 text-white/80 md:px-32">
      <div className="grid grid-flow-row auto-rows-auto gap-4 text-xs md:gap-8">
        <img src={LogoLight} alt="" className="h-16" />
        <p>Copyright &copy; 2023 Digital Canvas LLC</p>
        <p>
          This site collects anonymized usage statistics that cannot be used to
          identify anyone, it is only for aggregated data to help my business.
          Use an ad blocker to opt out.
        </p>
        <p>
          The images "Splash2", "OfficeWhiteboard" and "StartupOffice" were
          generated by MidJourney
        </p>
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
        </ul>
      </div>
    </footer>
  );
};
