type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </main>
  );
};

export default RootLayout;
