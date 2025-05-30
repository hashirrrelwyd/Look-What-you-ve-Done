import "./css/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white rounded-tl-4xl rounded-tr-4xl px-6 md:px-10 pb-10">
        <div className="flex flex-col md:flex-row gap-10 pt-14 justify-between pb-4">
          <div className="flex flex-col gap-16">
            {/* <div className="flex">
            <img src="/svg/logo.svg" alt="" className="w-16" />
            <div className="pl-4 pt-6">
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
                L <span className="text-lwyd-yellow">/</span> W{" "}
                <span className="text-lwyd-yellow">/</span> Y{" "}
                <span className="text-lwyd-yellow">/</span> D
              </h2>
              <p className="text-[10px]">
                {" "}
                <span className="font-bold">[look</span>-what-you've-done
                <span className="font-bold">] design digital</span>
              </p>
            </div>
          </div> */}
            <div>
              <a href="">
                <img
                  className="w-[200px] lg:w-[230px]"
                  src="/svg/lwydlogo_footer.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="pb-10 flex gap-4 items-center">
              <p className="text-lwyd-yellow text-[14px] md:text-[15px] lg:text-[18px]">
                /<span className="text-gray-400">Follow Us on</span>
              </p>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/lwyd-interactive"
              >
                <img src="/svg/linkedin.svg" alt="" className="w-5 md:w-6" />
              </a>{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/lwyd_interactive"
              >
                <img src="/svg/instagram.svg" alt="" className="w-5 md:w-6" />
              </a>
            </div>
          </div>
          <div className="">
            <div className="pb-4">
              <h2 className="text-lwyd-yellow text-[14px] md:text-[15px] lg:text-[18px]">
                /<span className="text-gray-400">Inquiries</span>
              </h2>
            </div>
            <ul className="text-[11px] md:text-[13px] lg:text-[16px]">
              <li>
                <a href="tel:+919677207522">+91 96772 07522</a>
              </li>
              <li>
                <a href="mailto:contact@lwyd.in">contact@lwyd.in</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="pb-4">
              <h2 className="text-lwyd-yellow text-[14px] md:text-[15px] lg:text-[18px]">
                /<span className="text-gray-400">Bengaluru</span>
              </h2>
            </div>
            <p className="font-thin text-[11px] md:text-[13px] lg:text-[16px]">
              <a
                target="_blank"
                href="https://www.google.com/search?q=lwyd+interactive+llp&sca_esv=5482522f8e04891b&sxsrf=AHTn8zpUdc-_HXGSAlZNhIFPpY5RkE67mw%3A1746791817426&ei=ie0daObmGcm4seMPnIyyuAQ&ved=0ahUKEwimz5jOqpaNAxVJXGwGHRyGDEcQ4dUDCBA&oq=lwyd+interactive+llp&gs_lp=Egxnd3Mtd2l6LXNlcnAiFGx3eWQgaW50ZXJhY3RpdmUgbGxwMhEQLhiABBiwAxjHARiOBRivATIJEAAYsAMYBxgeMgcQABiwAxgeMgcQABiwAxgeMgcQABiwAxgeMgsQABiABBiwAxiiBDILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIESIwGUABYAHABeACQAQCYAQCgAQCqAQC4AQzIAQCYAgGgAgmYAwCIBgGQBgiSBwExoAcAsgcAuAcA&sclient=gws-wiz-serp"
              >
                171, 3rd Floor, Axis Cube <br />
                Dollar Layout, J. P. Nagar 4th phase <br /> Bengaluru, Karnataka
                560078
              </a>
            </p>
          </div>
          <div>
            <div className="pb-4">
              <h2 className="text-lwyd-yellow text-[14px] md:text-[15px] lg:text-[18px]">
                /<span className="text-gray-400">Mumbai</span>
              </h2>
            </div>
            <p className="font-thin text-[11px] md:text-[13px] lg:text-[16px]">
              <a target="_blank" href="https://www.google.com/search?q=The+Boardroom%2C+Modi+House%2C%0D%0AAndheri+West%2C+Mumbai%0D%0AMaharashtra+400053&sca_esv=5482522f8e04891b&hl=en&source=hp&ei=jrj6ZcfhGZ7d2roPidydwAg&iflsig=ANes7DEAAAAAZfrGnkBi42p_kchaqKaCxQel32qvIHVw&ved=0ahUKEwjH4OyUz4KFAxWerlYBHQluB4gQ4dUDCA0&uact=5&oq=The+Boardroom%2C+Modi+House%2C%0D%0AAndheri+West%2C+Mumbai%0D%0AMaharashtra+400053&gs_lp=Egdnd3Mtd2l6IkJUaGUgQm9hcmRyb29tLCBNb2RpIEhvdXNlLApBbmRoZXJpIFdlc3QsIE11bWJhaQpNYWhhcmFzaHRyYSA0MDAwNTMyHRAAGIAEGIoFGOUCGOUCGOoCGLQCGIoDGLcDGNQDMh0QABiABBiKBRjlAhjlAhjqAhi0AhiKAxi3AxjUAzIdEAAYgAQYigUY5QIY5QIY6gIYtAIYigMYtwMY1AMyGhAAGIAEGIoFGOUCGOUCGOoCGLQCGIoDGLcDMiMQLhiABBiKBRjlAhjlAhjHARivARjqAhi0AhiKAxi3AxjUAzIaEAAYgAQYigUY5QIY5QIY6gIYtAIYigMYtwMyGhAAGIAEGIoFGOUCGOUCGOoCGLQCGIoDGLcDMhoQABiABBiKBRjlAhjlAhjqAhi0AhiKAxi3AzIaEAAYgAQYigUY5QIY5QIY6gIYtAIYigMYtwMyGhAAGIAEGIoFGOUCGOUCGOoCGLQCGIoDGLcDSPsHUMgDWMgDcAF4AJABAJgBAKABAKoBALgBA8gBAPgBAvgBAZgCAaACC6gCCpgDC5IHATGgBwA&sclient=gws-wiz">
                1st Floor, Modi House <br />
                Off Link Rd, Andheri West <br />
                Mumbai, Maharashtra 400053
              </a>
            </p>
          </div>
        </div>

        <hr />
        <div className="text-[10px] md:text-[12px] lg:text-[13px]">
          <div className="flex md:flex-row flex-col justify-between items-center pt-10">
            <div>
              <p>© 2025 LWYD Limited. All rights reserved.</p>
            </div>
            <div className="flex gap-10">
              <p>Privacy & Legal</p>
              <p>Term & Condition</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
