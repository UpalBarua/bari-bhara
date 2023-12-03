import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import News from "@/components/News";
import Service from "@/components/Service";
import { useAuthContext } from "@/context/auth-context";

const HomePage = () => {
  const { user } = useAuthContext();

  return (
    <section>
      {/* <h1>Bari Bhara</h1> */}
      <Banner></Banner>
      <Service></Service>
      <Contact></Contact>
      <News></News>
      <Faq></Faq>
      <p className="text-2xl">{user?.email}</p>
    </section>
  );
};

export default HomePage;
