import Navbar from '@/components/navbar';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <Navbar />
      {children}
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default RootLayout;
