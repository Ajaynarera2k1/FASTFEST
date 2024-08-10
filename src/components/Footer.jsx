const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center mt-2 mb-3   ">
      <p className="sticky bottom-0">
        Copyright &copy; {currYear}, Made with 💗 by <strong>Ajay Narera</strong>
      </p>
    </footer>
  );
};

export default Footer;
