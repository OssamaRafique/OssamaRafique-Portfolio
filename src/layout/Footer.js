const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: ossamarafique@gmail.com</p>
        <p>T: +1 (778) 918 9069</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Connect With Me</div>
        <div className="soc">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ossamarafique/"
          >
            <span className="icon fab fa-linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/OssamaRafique"
          >
            <span className="icon fab fa-github" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
